const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: '도움말',
    description: '봇 사용법을 보여줍니다',
    usage: '!도움말',
    
    async execute(message, args) {
        const embed = new EmbedBuilder()
            .setColor('#4ecdc4')
            .setTitle('🤖 대만어-한국어 번역 봇 도움말')
            .setDescription('이 봇은 대만어를 한국어로 번역해주는 디스코드 봇입니다.')
            .addFields(
                {
                    name: '📝 기본 명령어',
                    value: '`!번역 [텍스트]` - 대만어를 한국어로 번역\n`!도움말` - 이 도움말 보기\n`!상태` - 봇 상태 확인',
                    inline: false
                },
                {
                    name: '🔄 다른 사람 메시지 번역',
                    value: '1. **자동 번역**: `taiwanese-chat`, `대만어-채팅`, `번역-채널`에서 자동 번역\n2. **반응 번역**: 다른 사람 메시지에 "번역"이라고 답장\n3. **수동 번역**: `!번역 [복사한 텍스트]`',
                    inline: false
                },
                {
                    name: '🌐 지원 언어',
                    value: '대만어(zh-tw) → 한국어(ko)',
                    inline: false
                },
                {
                    name: '⚙️ API 지원',
                    value: '• Google Translate API\n• Papago API\n• MyMemory (무료)',
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: '번역 봇 v1.0' });
        
        message.reply({ embeds: [embed] });
    }
};
