# 🤖 디스코드 대만어-한국어 번역 봇

디스코드에서 대만어를 한국어로 실시간 번역해주는 봇입니다.

## ✨ 주요 기능

- **명령어 번역**: `!번역 [텍스트]` 명령어로 즉시 번역
- **자동 번역**: 특정 채널에서 대만어 메시지 자동 번역
- **다중 API 지원**: Google Translate, Papago, MyMemory API 지원
- **예쁜 임베드**: 번역 결과를 깔끔한 임베드로 표시

## 🚀 설치 및 설정

### 1. 프로젝트 클론 및 의존성 설치

```bash
git clone <repository-url>
cd discord-taiwanese-translator
npm install
```

### 2. 환경 변수 설정

`env.example` 파일을 `.env`로 복사하고 설정하세요:

```bash
cp env.example .env
```

`.env` 파일에 다음 정보를 입력하세요:

```env
# 필수: 디스코드 봇 토큰
DISCORD_TOKEN=your_discord_bot_token_here

# 선택사항: Google Translate API 키
GOOGLE_TRANSLATE_API_KEY=your_google_api_key_here

# 선택사항: Papago API 설정
PAPAGO_CLIENT_ID=your_papago_client_id
PAPAGO_CLIENT_SECRET=your_papago_client_secret

# 번역 설정
DEFAULT_SOURCE_LANG=zh-tw
DEFAULT_TARGET_LANG=ko
```

### 3. 디스코드 봇 생성

1. [Discord Developer Portal](https://discord.com/developers/applications)에 접속
2. "New Application" 클릭하여 새 애플리케이션 생성
3. "Bot" 탭에서 봇 생성
4. "Token" 복사하여 `.env` 파일에 입력
5. "Privileged Gateway Intents"에서 "Message Content Intent" 활성화

### 4. 봇 초대

1. "OAuth2" > "URL Generator" 탭으로 이동
2. "Scopes"에서 "bot" 선택
3. "Bot Permissions"에서 다음 권한 선택:
   - Send Messages
   - Use Slash Commands
   - Read Message History
   - Embed Links
4. 생성된 URL로 봇을 서버에 초대

## 📖 사용법

### 기본 명령어

- `!번역 [텍스트]` - 대만어를 한국어로 번역
- `!도움말` - 봇 사용법 보기

### 자동 번역

다음 채널명에서 자동으로 번역됩니다:
- `taiwanese-chat`
- `대만어-채팅`
- `번역-채널`

## 🔧 API 설정 (선택사항)

### Google Translate API
1. [Google Cloud Console](https://console.cloud.google.com/)에서 프로젝트 생성
2. "Cloud Translation API" 활성화
3. API 키 생성하여 `.env`에 설정

### Papago API
1. [Naver Developers](https://developers.naver.com/)에서 애플리케이션 등록
2. "Papago 번역" API 선택
3. Client ID와 Client Secret을 `.env`에 설정

## 🚀 실행

```bash
# 개발 모드 (nodemon 사용)
npm run dev

# 일반 실행
npm start
```

## 📁 프로젝트 구조

```
discord-taiwanese-translator/
├── index.js              # 메인 봇 파일
├── config.js             # 설정 파일
├── package.json          # 프로젝트 의존성
├── env.example           # 환경 변수 예시
├── README.md             # 프로젝트 문서
├── commands/             # 명령어 모듈
│   └── help.js          # 도움말 명령어
└── utils/               # 유틸리티 함수
    └── translator.js    # 번역 관련 함수
```

## 🛠️ 개발자 정보

- **언어**: Node.js
- **프레임워크**: Discord.js v14
- **번역 API**: Google Translate, Papago, MyMemory
- **라이선스**: MIT

## 📝 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능합니다.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 지원

문제가 있거나 기능 요청이 있으시면 이슈를 생성해주세요!
