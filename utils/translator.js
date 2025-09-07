const axios = require('axios');

/**
 * Google Translate API를 사용한 번역
 */
async function translateWithGoogle(text, sourceLang, targetLang) {
    const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;
    
    if (!apiKey) {
        throw new Error('Google Translate API 키가 설정되지 않았습니다.');
    }
    
    const response = await axios.post(
        `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
        {
            q: text,
            source: sourceLang,
            target: targetLang,
            format: 'text'
        }
    );
    
    return response.data.data.translations[0].translatedText;
}

/**
 * Papago API를 사용한 번역
 */
async function translateWithPapago(text, sourceLang, targetLang) {
    const clientId = process.env.PAPAGO_CLIENT_ID;
    const clientSecret = process.env.PAPAGO_CLIENT_SECRET;
    
    if (!clientId || !clientSecret) {
        throw new Error('Papago API 클라이언트 ID 또는 시크릿이 설정되지 않았습니다.');
    }
    
    const response = await axios.post(
        'https://openapi.naver.com/v1/papago/n2mt',
        {
            source: sourceLang,
            target: targetLang,
            text: text
        },
        {
            headers: {
                'X-Naver-Client-Id': clientId,
                'X-Naver-Client-Secret': clientSecret,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    );
    
    return response.data.message.result.translatedText;
}

/**
 * 무료 번역 서비스 (MyMemory API)
 */
async function translateWithMyMemory(text, sourceLang, targetLang) {
    try {
        const response = await axios.get(
            `https://api.mymemory.translated.net/get`,
            {
                params: {
                    q: text,
                    langpair: `${sourceLang}|${targetLang}`
                }
            }
        );
        
        if (response.data.responseStatus === 200) {
            return response.data.responseData.translatedText;
        } else {
            throw new Error('MyMemory API 오류');
        }
    } catch (error) {
        throw new Error('무료 번역 서비스 오류: ' + error.message);
    }
}

/**
 * 메인 번역 함수 - 여러 API를 순차적으로 시도
 */
async function translateText(text, sourceLang = 'zh-tw', targetLang = 'ko') {
    if (!text || text.trim().length === 0) {
        throw new Error('번역할 텍스트가 없습니다.');
    }
    
    // 텍스트 길이 제한 (API별 제한 고려)
    if (text.length > 5000) {
        throw new Error('텍스트가 너무 깁니다. 5000자 이하로 입력해주세요.');
    }
    
    const translationMethods = [
        { name: 'Google Translate', func: translateWithGoogle },
        { name: 'Papago', func: translateWithPapago },
        { name: 'MyMemory (무료)', func: translateWithMyMemory }
    ];
    
    for (const method of translationMethods) {
        try {
            console.log(`${method.name} API로 번역 시도 중...`);
            const result = await method.func(text, sourceLang, targetLang);
            
            if (result && result.trim().length > 0) {
                console.log(`${method.name} API 번역 성공`);
                return result.trim();
            }
        } catch (error) {
            console.log(`${method.name} API 실패:`, error.message);
            continue;
        }
    }
    
    throw new Error('모든 번역 서비스에서 오류가 발생했습니다.');
}

/**
 * 언어 코드 변환
 */
function getLanguageCode(language) {
    const languageMap = {
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
    };
    
    return languageMap[language.toLowerCase()] || language;
}

module.exports = {
    translateText,
    getLanguageCode,
    translateWithGoogle,
    translateWithPapago,
    translateWithMyMemory
};
