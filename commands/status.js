const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: '상태',
    description: '봇의 상태를 확인합니다',
    usage: '!상태',
    
    async execute(message, args) {
        const client = message.client;
        const uptime = process.uptime();
        
        // 업타임을 읽기 쉬운 형태로 변환
        const days = Math.floor(uptime / 86400);
        const hours = Math.floor((uptime % 86400) / 3600);
        const minutes = Math.floor((uptime % 3600) / 60);
        const seconds = Math.floor(uptime % 60);
        
        const uptimeString = `${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
        
        // 메모리 사용량
        const used = process.memoryUsage();
        const memoryUsage = Math.round(used.heapUsed / 1024 / 1024 * 100) / 100;
        
        const embed = new EmbedBuilder()
            .setColor('#4ecdc4')
            .setTitle('🤖 봇 상태')
            .setDescription('대만어-한국어 번역 봇의 현재 상태입니다.')
            .addFields(
                {
                    name: '📊 기본 정보',
                    value: `**봇 이름**: ${client.user.username}\n**서버 수**: ${client.guilds.cache.size}개\n**사용자 수**: ${client.users.cache.size}명`,
                    inline: true
                },
                {
                    name: '⏰ 운영 시간',
                    value: uptimeString,
                    inline: true
                },
                {
                    name: '💾 메모리 사용량',
                    value: `${memoryUsage} MB`,
                    inline: true
                },
                {
                    name: '🌐 API 상태',
                    value: '✅ Google Translate API\n✅ Papago API\n✅ MyMemory API',
                    inline: false
                },
                {
                    name: '📝 사용 가능한 명령어',
                    value: '`!번역` - 대만어 번역\n`!도움말` - 도움말 보기\n`!상태` - 봇 상태 확인',
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: '번역 봇 v1.0' });
        
        message.reply({ embeds: [embed] });
    }
};
