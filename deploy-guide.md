# 🚀 디스코드 봇 배포 가이드

## 1. 로컬에서 테스트

```bash
# 의존성 설치
npm install

# 환경 변수 설정
cp env.example .env
# .env 파일에 DISCORD_TOKEN 입력

# 봇 실행
npm start
```

## 2. 클라우드 서버에 배포

### Heroku 배포 (무료)
```bash
# Heroku CLI 설치 후
heroku create your-bot-name
heroku config:set DISCORD_TOKEN=your_token_here
git push heroku main
```

### Railway 배포 (무료)
```bash
# Railway CLI 설치 후
railway login
railway init
railway up
```

### VPS 배포 (유료)
```bash
# Ubuntu/Debian 서버에서
sudo apt update
sudo apt install nodejs npm
git clone your-repo
cd discord-taiwanese-translator
npm install
npm start
```

## 3. 24/7 운영을 위한 PM2 사용

```bash
# PM2 설치
npm install -g pm2

# 봇 실행
pm2 start index.js --name "discord-translator"

# 자동 재시작 설정
pm2 startup
pm2 save
```

## 4. 환경 변수 설정 (클라우드)

### Heroku
```bash
heroku config:set DISCORD_TOKEN=your_token
heroku config:set GOOGLE_TRANSLATE_API_KEY=your_key
```

### Railway
- Railway 대시보드에서 Environment Variables 설정

### VPS
```bash
# .env 파일 생성
nano .env
# 환경 변수 입력 후 저장
```

## 5. 봇 상태 확인

```bash
# PM2로 실행 중인 경우
pm2 status
pm2 logs discord-translator

# 일반 실행인 경우
# 터미널에서 로그 확인
```

## 6. 문제 해결

### 봇이 응답하지 않는 경우
1. 토큰이 올바른지 확인
2. 봇이 서버에 초대되었는지 확인
3. 봇 권한이 올바른지 확인
4. "Message Content Intent"가 활성화되었는지 확인

### API 오류가 발생하는 경우
1. API 키가 올바른지 확인
2. API 할당량이 남아있는지 확인
3. 네트워크 연결 상태 확인
