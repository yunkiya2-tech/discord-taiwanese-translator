const { EmbedBuilder } = require('discord.js');
const { translateText } = require('../utils/translator');

module.exports = {
    name: '번역',
    description: '대만어를 한국어로 번역합니다',
    usage: '!번역 [번역할 텍스트]',
    
    async execute(message, args) {
        const text = args.join(' ');
        
        if (!text) {
            const embed = new EmbedBuilder()
                .setColor('#ff6b6b')
                .setTitle('❌ 사용법')
                .setDescription('`!번역 [번역할 텍스트]` 형식으로 입력해주세요.\n\n예시: `!번역 안녕하세요`')
                .setTimestamp();
            
            return message.reply({ embeds: [embed] });
        }
        
        if (text.length > 5000) {
            const embed = new EmbedBuilder()
                .setColor('#ff6b6b')
                .setTitle('❌ 오류')
                .setDescription('텍스트가 너무 깁니다. 5000자 이하로 입력해주세요.')
                .setTimestamp();
            
            return message.reply({ embeds: [embed] });
        }
        
        try {
            // 로딩 메시지
            const loadingEmbed = new EmbedBuilder()
                .setColor('#ffd93d')
                .setTitle('🔄 번역 중...')
                .setDescription('잠시만 기다려주세요.')
                .setTimestamp();
            
            const loadingMessage = await message.reply({ embeds: [loadingEmbed] });
            
            // 번역 실행
            const translatedText = await translateText(text, 'zh-tw', 'ko');
            
            // 결과 임베드
            const resultEmbed = new EmbedBuilder()
                .setColor('#4ecdc4')
                .setTitle('🔄 번역 결과')
                .addFields(
                    { name: '📝 원문 (대만어)', value: text.length > 1000 ? text.substring(0, 1000) + '...' : text, inline: false },
                    { name: '🇰🇷 번역 (한국어)', value: translatedText.length > 1000 ? translatedText.substring(0, 1000) + '...' : translatedText, inline: false }
                )
                .setTimestamp()
                .setFooter({ text: `요청자: ${message.author.username}` });
            
            // 로딩 메시지 수정
            await loadingMessage.edit({ embeds: [resultEmbed] });
            
        } catch (error) {
            console.error('번역 오류:', error);
            
            const errorEmbed = new EmbedBuilder()
                .setColor('#ff6b6b')
                .setTitle('❌ 번역 실패')
                .setDescription('번역 중 오류가 발생했습니다.\n\n가능한 원인:\n• 네트워크 연결 문제\n• API 서비스 일시 중단\n• 텍스트 형식 오류')
                .addFields(
                    { name: '오류 메시지', value: error.message || '알 수 없는 오류', inline: false }
                )
                .setTimestamp();
            
            message.reply({ embeds: [errorEmbed] });
        }
    }
};
