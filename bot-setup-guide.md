# 🤖 디스코드 봇 설정 완전 가이드

## 1단계: 디스코드 개발자 포털에서 봇 생성

### 1.1 애플리케이션 생성
1. [Discord Developer Portal](https://discord.com/developers/applications) 접속
2. **"New Application"** 클릭
3. 애플리케이션 이름 입력: `대만어 번역 봇`
4. **"Create"** 클릭

### 1.2 봇 생성
1. 왼쪽 메뉴에서 **"Bot"** 클릭
2. **"Add Bot"** 클릭
3. 봇 이름과 아바타 설정 (선택사항)
4. **"Token"** 섹션에서 **"Copy"** 클릭하여 토큰 복사

### 1.3 권한 설정
1. **"Privileged Gateway Intents"** 섹션에서:
   - ✅ **"Message Content Intent"** 활성화 (필수!)
2. **"Save Changes"** 클릭

## 2단계: 봇을 서버에 초대

### 2.1 OAuth2 URL 생성
1. 왼쪽 메뉴에서 **"OAuth2"** > **"URL Generator"** 클릭
2. **"Scopes"** 섹션에서:
   - ✅ **"bot"** 선택
3. **"Bot Permissions"** 섹션에서:
   - ✅ **"Send Messages"**
   - ✅ **"Read Message History"**
   - ✅ **"Embed Links"**
   - ✅ **"Use Slash Commands"**
4. 하단에 생성된 **URL 복사**

### 2.2 서버에 봇 초대
1. 복사한 URL을 브라우저에 붙여넣기
2. 봇을 추가할 서버 선택
3. **"Authorize"** 클릭
4. 봇이 서버에 추가됨

## 3단계: 로컬 환경 설정

### 3.1 환경 변수 파일 생성
```bash
# env.example을 .env로 복사
cp env.example .env
```

### 3.2 .env 파일 편집
```env
# 디스코드 봇 토큰 (필수!)
DISCORD_TOKEN=여기에_복사한_토큰_붙여넣기

# 번역 설정
DEFAULT_SOURCE_LANG=zh-tw
DEFAULT_TARGET_LANG=ko

# API 키들 (선택사항 - 없어도 작동함)
GOOGLE_TRANSLATE_API_KEY=
PAPAGO_CLIENT_ID=
PAPAGO_CLIENT_SECRET=
```

## 4단계: 봇 실행

### 4.1 의존성 설치
```bash
npm install
```

### 4.2 봇 실행
```bash
# 개발 모드 (파일 변경 시 자동 재시작)
npm run dev

# 또는 일반 실행
npm start
```

### 4.3 성공 확인
터미널에 다음과 같은 메시지가 나타나면 성공:
```
✅ 대만어 번역 봇#1234 봇이 준비되었습니다!
🌐 1개의 서버에서 활동 중
```

## 5단계: 봇 테스트

### 5.1 기본 명령어 테스트
디스코드 채널에서:
```
!번역 안녕하세요
!도움말
```

### 5.2 자동 번역 테스트
1. 채널명을 `taiwanese-chat` 또는 `대만어-채팅`으로 변경
2. 대만어로 메시지 입력
3. 봇이 자동으로 번역하는지 확인

## 6단계: 문제 해결

### 봇이 응답하지 않는 경우
1. ✅ 토큰이 올바른지 확인
2. ✅ 봇이 서버에 초대되었는지 확인
3. ✅ "Message Content Intent"가 활성화되었는지 확인
4. ✅ 봇 권한이 올바른지 확인

### 오류 메시지 확인
```bash
# 봇 실행 중 오류 메시지 확인
# 터미널에서 빨간색 오류 메시지 찾기
```

## 7단계: 24/7 운영 (선택사항)

### PM2 사용 (로컬 서버)
```bash
# PM2 설치
npm install -g pm2

# 봇 실행
pm2 start index.js --name "discord-translator"

# 자동 재시작 설정
pm2 startup
pm2 save
```

### 클라우드 배포
- **Heroku**: 무료 티어 사용 가능
- **Railway**: 무료 티어 사용 가능
- **VPS**: 유료이지만 안정적

## 🎉 완료!

이제 디스코드에서 대만어를 한국어로 번역하는 봇을 사용할 수 있습니다!
