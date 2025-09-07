# 🚀 빠른 시작 가이드 (Windows)

## 1단계: 디스코드 봇 생성 (5분)

1. **Discord Developer Portal** 접속: https://discord.com/developers/applications
2. **"New Application"** → 이름: `대만어 번역 봇` → **"Create"**
3. **"Bot"** 탭 → **"Add Bot"** → **"Token"** 복사
4. **"Privileged Gateway Intents"** → ✅ **"Message Content Intent"** 활성화
5. **"OAuth2"** → **"URL Generator"** → **"bot"** 선택 → 권한 선택 → URL 복사
6. URL로 봇을 서버에 초대

## 2단계: 환경 설정 (2분)

```bash
# 1. 의존성 설치
npm install

# 2. 환경 변수 파일 생성
copy env.example .env

# 3. .env 파일 편집 (메모장으로 열어서)
# DISCORD_TOKEN=여기에_복사한_토큰_붙여넣기
```

## 3단계: 봇 실행 (1분)

```bash
# Windows에서 실행
start.bat

# 또는 직접 실행
npm start
```

## 4단계: 테스트

디스코드 채널에서:
```
!번역 안녕하세요
!도움말
```

## ✅ 완료!

봇이 정상 작동하면 터미널에 다음과 같이 표시됩니다:
```
✅ 대만어 번역 봇#1234 봇이 준비되었습니다!
🌐 1개의 서버에서 활동 중
```

## 🔧 문제 해결

### 봇이 응답하지 않는 경우:
1. ✅ 토큰이 올바른지 확인
2. ✅ "Message Content Intent" 활성화 확인
3. ✅ 봇이 서버에 초대되었는지 확인
4. ✅ 봇 권한 확인

### 오류 메시지:
- `Invalid token`: 토큰을 다시 확인
- `Missing Access`: 봇 권한 확인
- `Cannot read properties`: Node.js 버전 확인 (v16 이상 필요)
