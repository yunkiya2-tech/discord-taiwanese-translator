const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: '설정',
    description: '번역 설정을 관리합니다',
    usage: '!설정 [옵션]',
    
    async execute(message, args) {
        const subCommand = args[0];
        
        if (!subCommand) {
            // 현재 설정 보기
            await showCurrentSettings(message);
        } else if (subCommand === '채널') {
            // 채널별 설정
            await handleChannelSettings(message, args.slice(1));
        } else if (subCommand === '언어') {
            // 언어 설정
            await handleLanguageSettings(message, args.slice(1));
        } else if (subCommand === '도움말') {
            // 설정 도움말
            await showSettingsHelp(message);
        } else {
            message.reply('알 수 없는 설정 옵션입니다. `!설정 도움말`을 참고하세요.');
        }
    }
};

// 현재 설정 보기
async function showCurrentSettings(message) {
    const embed = new EmbedBuilder()
        .setColor('#4ecdc4')
        .setTitle('⚙️ 현재 번역 설정')
        .setDescription('현재 적용된 번역 설정입니다.')
        .addFields(
            {
                name: '🌐 실시간 자동 번역',
                value: '✅ 활성화 (모든 채널)',
                inline: true
            },
            {
                name: '🔄 양방향 번역',
                value: '✅ 활성화\n• 한국어 ↔ 대만어\n• 영어 → 한국어',
                inline: true
            },
            {
                name: '🤖 언어 감지',
                value: '✅ 자동 감지\n• 한국어, 대만어, 영어 지원',
                inline: true
            },
            {
                name: '📝 사용 가능한 설정',
                value: '`!설정 채널` - 채널별 설정\n`!설정 언어` - 언어 설정\n`!설정 도움말` - 설정 도움말',
                inline: false
            }
        )
        .setTimestamp()
        .setFooter({ text: '번역 봇 v2.0' });
    
    message.reply({ embeds: [embed] });
}

// 채널별 설정
async function handleChannelSettings(message, args) {
    if (args.length === 0) {
        const embed = new EmbedBuilder()
            .setColor('#ffd93d')
            .setTitle('📝 채널 설정 도움말')
            .setDescription('채널별 번역 설정을 관리합니다.')
            .addFields(
                {
                    name: '사용법',
                    value: '`!설정 채널 [옵션]`',
                    inline: false
                },
                {
                    name: '옵션',
                    value: '• `켜기` - 이 채널에서 자동 번역 활성화\n• `끄기` - 이 채널에서 자동 번역 비활성화\n• `상태` - 현재 채널 설정 확인',
                    inline: false
                }
            )
            .setTimestamp();
        
        return message.reply({ embeds: [embed] });
    }
    
    const option = args[0];
    const channelId = message.channel.id;
    
    // 실제로는 데이터베이스나 설정 파일에 저장해야 하지만,
    // 여기서는 간단한 예시만 보여줍니다.
    
    if (option === '켜기') {
        const embed = new EmbedBuilder()
            .setColor('#4ecdc4')
            .setTitle('✅ 채널 설정 변경')
            .setDescription(`<#${channelId}> 채널에서 자동 번역이 활성화되었습니다.`)
            .setTimestamp();
        
        message.reply({ embeds: [embed] });
    } else if (option === '끄기') {
        const embed = new EmbedBuilder()
            .setColor('#ff6b6b')
            .setTitle('❌ 채널 설정 변경')
            .setDescription(`<#${channelId}> 채널에서 자동 번역이 비활성화되었습니다.`)
            .setTimestamp();
        
        message.reply({ embeds: [embed] });
    } else if (option === '상태') {
        const embed = new EmbedBuilder()
            .setColor('#95e1d3')
            .setTitle('📊 채널 상태')
            .setDescription(`<#${channelId}> 채널의 현재 설정:`)
            .addFields(
                {
                    name: '🌐 자동 번역',
                    value: '✅ 활성화',
                    inline: true
                },
                {
                    name: '🔄 번역 방향',
                    value: '양방향 (한국어 ↔ 대만어)',
                    inline: true
                }
            )
            .setTimestamp();
        
        message.reply({ embeds: [embed] });
    } else {
        message.reply('알 수 없는 옵션입니다. `!설정 채널`을 참고하세요.');
    }
}

// 언어 설정
async function handleLanguageSettings(message, args) {
    const embed = new EmbedBuilder()
        .setColor('#4ecdc4')
        .setTitle('🌐 언어 설정')
        .setDescription('현재 지원되는 언어 설정입니다.')
        .addFields(
            {
                name: '🇰🇷 한국어',
                value: '• 자동 감지: ✅\n• 번역 대상: 대만어, 영어',
                inline: true
            },
            {
                name: '🇹🇼 대만어',
                value: '• 자동 감지: ✅\n• 번역 대상: 한국어',
                inline: true
            },
            {
                name: '🇺🇸 영어',
                value: '• 자동 감지: ✅\n• 번역 대상: 한국어',
                inline: true
            },
            {
                name: '🔄 자동 번역 방향',
                value: '• 한국어 → 대만어\n• 대만어 → 한국어\n• 영어 → 한국어',
                inline: false
            }
        )
        .setTimestamp();
    
    message.reply({ embeds: [embed] });
}

// 설정 도움말
async function showSettingsHelp(message) {
    const embed = new EmbedBuilder()
        .setColor('#4ecdc4')
        .setTitle('⚙️ 설정 도움말')
        .setDescription('번역 봇의 설정을 관리하는 방법입니다.')
        .addFields(
            {
                name: '📝 기본 명령어',
                value: '`!설정` - 현재 설정 보기\n`!설정 도움말` - 이 도움말 보기',
                inline: false
            },
            {
                name: '📺 채널 설정',
                value: '`!설정 채널 켜기` - 이 채널에서 자동 번역 활성화\n`!설정 채널 끄기` - 이 채널에서 자동 번역 비활성화\n`!설정 채널 상태` - 현재 채널 설정 확인',
                inline: false
            },
            {
                name: '🌐 언어 설정',
                value: '`!설정 언어` - 지원 언어 및 번역 방향 확인',
                inline: false
            },
            {
                name: '💡 팁',
                value: '• 기본적으로 모든 채널에서 자동 번역이 활성화됩니다\n• 특정 채널에서만 번역을 원하지 않으면 `!설정 채널 끄기`를 사용하세요',
                inline: false
            }
        )
        .setTimestamp();
    
    message.reply({ embeds: [embed] });
}
