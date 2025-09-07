module.exports = {
    // 디스코드 봇 설정
    discord: {
        token: process.env.DISCORD_TOKEN,
        prefix: '!',
        intents: [
            'Guilds',
            'GuildMessages', 
            'MessageContent'
        ]
    },
    
    // 번역 설정
    translation: {
        defaultSourceLang: process.env.DEFAULT_SOURCE_LANG || 'zh-tw',
        defaultTargetLang: process.env.DEFAULT_TARGET_LANG || 'ko',
        maxTextLength: 5000,
        autoTranslateChannels: [
            'taiwanese-chat',
            '대만어-채팅',
            '번역-채널'
        ]
    },
    
    // API 설정
    apis: {
        google: {
            enabled: !!process.env.GOOGLE_TRANSLATE_API_KEY,
            apiKey: process.env.GOOGLE_TRANSLATE_API_KEY
        },
        papago: {
            enabled: !!(process.env.PAPAGO_CLIENT_ID && process.env.PAPAGO_CLIENT_SECRET),
            clientId: process.env.PAPAGO_CLIENT_ID,
            clientSecret: process.env.PAPAGO_CLIENT_SECRET
        },
        mymemory: {
            enabled: true // 무료 API
        }
    },
    
    // 언어 코드 매핑
    languageCodes: {
        '대만어': 'zh-tw',
        '중국어': 'zh-cn', 
        '한국어': 'ko',
        '영어': 'en',
        '일본어': 'ja',
        'taiwanese': 'zh-tw',
        'chinese': 'zh-cn',
        'korean': 'ko',
        'english': 'en',
        'japanese': 'ja'
    },
    
    // 명령어 설정
    commands: {
        translate: {
            name: '번역',
            description: '대만어를 한국어로 번역합니다',
            usage: '!번역 [번역할 텍스트]'
        },
        help: {
            name: '도움말',
            description: '봇 사용법을 보여줍니다',
            usage: '!도움말'
        }
    }
};
