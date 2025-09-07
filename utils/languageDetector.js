/**
 * 언어 감지 유틸리티
 */

// 한국어 패턴
const koreanPatterns = [
    /[가-힣]/,  // 한글 문자
    /[ㄱ-ㅎㅏ-ㅣ]/,  // 한글 자모
];

// 대만어/중국어 패턴
const chinesePatterns = [
    /[\u4e00-\u9fff]/,  // 한자
    /[\u3400-\u4dbf]/,  // 한자 확장 A
    /[\u20000-\u2a6df]/,  // 한자 확장 B
];

// 영어 패턴
const englishPatterns = [
    /[a-zA-Z]/,
];

/**
 * 텍스트의 언어를 감지합니다
 * @param {string} text - 감지할 텍스트
 * @returns {string} - 언어 코드 ('ko', 'zh-tw', 'en', 'unknown')
 */
function detectLanguage(text) {
    if (!text || text.trim().length === 0) {
        return 'unknown';
    }
    
    let koreanScore = 0;
    let chineseScore = 0;
    let englishScore = 0;
    
    // 각 문자를 검사하여 점수 계산
    for (let char of text) {
        // 한국어 점수
        if (koreanPatterns.some(pattern => pattern.test(char))) {
            koreanScore += 2; // 한글은 가중치 높게
        }
        
        // 중국어 점수
        if (chinesePatterns.some(pattern => pattern.test(char))) {
            chineseScore += 2; // 한자는 가중치 높게
        }
        
        // 영어 점수
        if (englishPatterns.some(pattern => pattern.test(char))) {
            englishScore += 1;
        }
    }
    
    // 점수가 가장 높은 언어 반환
    if (koreanScore > chineseScore && koreanScore > englishScore) {
        return 'ko';
    } else if (chineseScore > koreanScore && chineseScore > englishScore) {
        return 'zh-tw';
    } else if (englishScore > 0) {
        return 'en';
    }
    
    return 'unknown';
}

/**
 * 언어 코드를 한국어 이름으로 변환
 * @param {string} langCode - 언어 코드
 * @returns {string} - 한국어 언어 이름
 */
function getLanguageName(langCode) {
    const languageNames = {
        'ko': '한국어',
        'zh-tw': '대만어',
        'zh-cn': '중국어',
        'en': '영어',
        'ja': '일본어',
        'unknown': '알 수 없음'
    };
    
    return languageNames[langCode] || '알 수 없음';
}

/**
 * 언어 코드를 이모지로 변환
 * @param {string} langCode - 언어 코드
 * @returns {string} - 해당 언어의 이모지
 */
function getLanguageEmoji(langCode) {
    const languageEmojis = {
        'ko': '🇰🇷',
        'zh-tw': '🇹🇼',
        'zh-cn': '🇨🇳',
        'en': '🇺🇸',
        'ja': '🇯🇵',
        'unknown': '❓'
    };
    
    return languageEmojis[langCode] || '❓';
}

/**
 * 번역 방향을 결정합니다
 * @param {string} sourceLang - 원본 언어
 * @param {string} targetLang - 목표 언어 (선택사항)
 * @returns {object} - {source, target} 언어 코드
 */
function determineTranslationDirection(sourceLang, targetLang = null) {
    // 목표 언어가 지정된 경우
    if (targetLang) {
        return {
            source: sourceLang,
            target: targetLang
        };
    }
    
    // 자동 번역 방향 결정
    if (sourceLang === 'ko') {
        return {
            source: 'ko',
            target: 'zh-tw'
        };
    } else if (sourceLang === 'zh-tw' || sourceLang === 'zh-cn') {
        return {
            source: 'zh-tw',
            target: 'ko'
        };
    } else if (sourceLang === 'en') {
        return {
            source: 'en',
            target: 'ko'
        };
    }
    
    // 기본값: 대만어 → 한국어
    return {
        source: 'zh-tw',
        target: 'ko'
    };
}

module.exports = {
    detectLanguage,
    getLanguageName,
    getLanguageEmoji,
    determineTranslationDirection
};
