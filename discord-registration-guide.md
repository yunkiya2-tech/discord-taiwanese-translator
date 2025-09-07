# 🤖 디스코드 봇 등록 및 사용 완전 가이드

## 1단계: 디스코드 개발자 포털에서 봇 생성

### 1.1 개발자 포털 접속
1. **Discord Developer Portal** 접속: https://discord.com/developers/applications
2. Discord 계정으로 로그인

### 1.2 새 애플리케이션 생성
1. **"New Application"** 버튼 클릭
2. 애플리케이션 이름 입력: `대만어 번역 봇` (원하는 이름)
3. **"Create"** 클릭

### 1.3 봇 생성
1. 왼쪽 메뉴에서 **"Bot"** 클릭
2. **"Add Bot"** 버튼 클릭
3. 봇 이름과 아바타 설정 (선택사항)
4. **"Token"** 섹션에서 **"Copy"** 클릭하여 토큰 복사 ⚠️ **중요: 이 토큰을 안전하게 보관하세요!**

### 1.4 권한 설정 (필수!)
1. **"Privileged Gateway Intents"** 섹션에서:
   - ✅ **"Message Content Intent"** 활성화 (이것이 가장 중요!)
2. **"Save Changes"** 클릭

## 2단계: 봇을 서버에 초대

### 2.1 OAuth2 URL 생성
1. 왼쪽 메뉴에서 **"OAuth2"** 클릭
2. **"URL Generator"** 클릭
3. **"Scopes"** 섹션에서:
   - ✅ **"bot"** 선택
4. **"Bot Permissions"** 섹션에서:
   - ✅ **"Send Messages"** (메시지 전송)
   - ✅ **"Read Message History"** (메시지 기록 읽기)
   - ✅ **"Embed Links"** (링크 임베드)
   - ✅ **"Use Slash Commands"** (슬래시 명령어)
5. 하단에 생성된 **URL 복사**

### 2.2 서버에 봇 초대
1. 복사한 URL을 브라우저에 붙여넣기
2. 봇을 추가할 서버 선택
3. **"Authorize"** 클릭
4. 봇이 서버에 추가됨! ✅

## 3단계: 로컬에서 봇 실행

### 3.1 환경 변수 설정
```bash
# env.example을 .env로 복사
copy env.example .env
```

### 3.2 .env 파일 편집
메모장으로 `.env` 파일을 열고:
```env
DISCORD_TOKEN=여기에_복사한_토큰_붙여넣기
DEFAULT_SOURCE_LANG=zh-tw
DEFAULT_TARGET_LANG=ko
```

### 3.3 봇 실행
```bash
# 의존성 설치
npm install

# 봇 실행
start.bat
```

### 3.4 성공 확인
터미널에 다음과 같이 표시되면 성공:
```
✅ 대만어 번역 봇#1234 봇이 준비되었습니다!
🌐 1개의 서버에서 활동 중
```

## 4단계: 디스코드에서 봇 사용

### 4.1 기본 명령어 테스트
디스코드 채널에서:
```
!번역 안녕하세요
!도움말
!상태
```

### 4.2 자동 번역 설정
1. 채널명을 `taiwanese-chat` 또는 `대만어-채팅`으로 변경
2. 대만어로 메시지 입력
3. 봇이 자동으로 번역하는지 확인

## 5단계: 문제 해결

### 봇이 응답하지 않는 경우
1. ✅ **토큰 확인**: .env 파일의 DISCORD_TOKEN이 올바른지 확인
2. ✅ **Message Content Intent**: 개발자 포털에서 활성화되었는지 확인
3. ✅ **봇 초대**: 봇이 서버에 정상적으로 초대되었는지 확인
4. ✅ **권한 확인**: 봇이 메시지를 읽고 보낼 권한이 있는지 확인

### 자주 발생하는 오류
- `Invalid token`: 토큰을 다시 복사해서 설정
- `Missing Access`: 봇 권한을 다시 확인
- `Cannot read properties`: Node.js 버전 확인 (v16 이상 필요)

## 6단계: 24/7 운영 (선택사항)

### PM2 사용 (로컬 서버)
```bash
npm install -g pm2
pm2 start index.js --name "discord-translator"
pm2 startup
pm2 save
```

### 클라우드 배포
- **Heroku**: 무료 티어 사용 가능
- **Railway**: 무료 티어 사용 가능
- **VPS**: 유료이지만 안정적

## 🎉 완료!

이제 디스코드에서 대만어를 한국어로 번역하는 봇을 사용할 수 있습니다!

### 사용 예시:
```
사용자: !번역 你好
봇: 안녕하세요

사용자: !도움말
봇: 봇 사용법을 보여줍니다

사용자: !상태
봇: 봇의 현재 상태를 보여줍니다
```
