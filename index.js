const { Client, GatewayIntentBits, Events, EmbedBuilder } = require('discord.js');
const { translateText } = require('./utils/translator');
require('dotenv').config();

// 디스코드 클라이언트 생성
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

// 봇이 준비되었을 때
client.once(Events.ClientReady, readyClient => {
    console.log(`✅ ${readyClient.user.tag} 봇이 준비되었습니다!`);
    console.log(`🌐 ${client.guilds.cache.size}개의 서버에서 활동 중`);
});

// 메시지 이벤트 처리
client.on(Events.MessageCreate, async message => {
    // 봇 자신의 메시지는 무시
    if (message.author.bot) return;
    
    // 명령어 처리
    if (message.content.startsWith('!번역')) {
        await handleTranslateCommand(message);
    }
    
    // 도움말 명령어
    if (message.content.startsWith('!도움말') || message.content.startsWith('!help')) {
        await handleHelpCommand(message);
    }
    
    // 상태 명령어
    if (message.content.startsWith('!상태') || message.content.startsWith('!status')) {
        await handleStatusCommand(message);
    }
    
    // 자동 번역 (특정 채널에서만)
    if (message.channel.name === 'taiwanese-chat' || message.channel.name === '대만어-채팅' || message.channel.name === '번역-채널') {
        await handleAutoTranslate(message);
    }
    
    // 메시지 반응으로 번역 (다른 사람 메시지에 반응)
    if (message.reference && message.reference.messageId) {
        await handleReplyTranslate(message);
    }
});

// 번역 명령어 처리
async function handleTranslateCommand(message) {
    const text = message.content.replace('!번역', '').trim();
    
    if (!text) {
        const embed = new EmbedBuilder()
            .setColor('#ff6b6b')
            .setTitle('❌ 사용법')
            .setDescription('`!번역 [번역할 텍스트]` 형식으로 입력해주세요.')
            .setTimestamp();
        
        return message.reply({ embeds: [embed] });
    }
    
    try {
        const translatedText = await translateText(text, 'zh-tw', 'ko');
        
        const embed = new EmbedBuilder()
            .setColor('#4ecdc4')
            .setTitle('🔄 번역 결과')
            .addFields(
                { name: '📝 원문 (대만어)', value: text, inline: false },
                { name: '🇰🇷 번역 (한국어)', value: translatedText, inline: false }
            )
            .setTimestamp()
            .setFooter({ text: 'Powered by Translation API' });
        
        message.reply({ embeds: [embed] });
    } catch (error) {
        console.error('번역 오류:', error);
        
        const embed = new EmbedBuilder()
            .setColor('#ff6b6b')
            .setTitle('❌ 번역 실패')
            .setDescription('번역 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.')
            .setTimestamp();
        
        message.reply({ embeds: [embed] });
    }
}

// 자동 번역 처리
async function handleAutoTranslate(message) {
    try {
        const translatedText = await translateText(message.content, 'zh-tw', 'ko');
        
        // 원문과 번역이 다른 경우에만 번역 메시지 전송
        if (translatedText !== message.content) {
            const embed = new EmbedBuilder()
                .setColor('#95e1d3')
                .setTitle('🌐 자동 번역')
                .setDescription(translatedText)
                .setTimestamp()
                .setFooter({ text: `${message.author.username}님의 메시지` });
            
            message.reply({ embeds: [embed] });
        }
    } catch (error) {
        console.error('자동 번역 오류:', error);
    }
}

// 도움말 명령어 처리
async function handleHelpCommand(message) {
    const { execute } = require('./commands/help');
    await execute(message, []);
}

// 상태 명령어 처리
async function handleStatusCommand(message) {
    const { execute } = require('./commands/status');
    await execute(message, []);
}

// 메시지 반응으로 번역 처리
async function handleReplyTranslate(message) {
    try {
        // 원본 메시지 가져오기
        const referencedMessage = await message.channel.messages.fetch(message.reference.messageId);
        
        // 봇 자신의 메시지나 이미 번역된 메시지는 무시
        if (referencedMessage.author.bot) return;
        
        // 반응 메시지가 "번역" 또는 "translate"인 경우에만 처리
        const replyContent = message.content.toLowerCase();
        if (!replyContent.includes('번역') && !replyContent.includes('translate')) return;
        
        const originalText = referencedMessage.content;
        
        if (!originalText || originalText.trim().length === 0) {
            return message.reply('번역할 텍스트가 없습니다.');
        }
        
        const translatedText = await translateText(originalText, 'zh-tw', 'ko');
        
        const embed = new EmbedBuilder()
            .setColor('#95e1d3')
            .setTitle('🔄 메시지 번역')
            .setDescription(`**${referencedMessage.author.username}님의 메시지를 번역했습니다**`)
            .addFields(
                { name: '📝 원문 (대만어)', value: originalText.length > 1000 ? originalText.substring(0, 1000) + '...' : originalText, inline: false },
                { name: '🇰🇷 번역 (한국어)', value: translatedText.length > 1000 ? translatedText.substring(0, 1000) + '...' : translatedText, inline: false }
            )
            .setTimestamp()
            .setFooter({ text: `요청자: ${message.author.username}` });
        
        message.reply({ embeds: [embed] });
        
    } catch (error) {
        console.error('반응 번역 오류:', error);
        message.reply('번역 중 오류가 발생했습니다.');
    }
}

// 봇 로그인
client.login(process.env.DISCORD_TOKEN);
