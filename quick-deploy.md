# ⚡ 빠른 클라우드 배포 (5분 완성!)

## 🚂 Railway 배포 (가장 간단!)

### 1단계: GitHub에 코드 업로드
```bash
# Git 초기화
git init
git add .
git commit -m "Discord Taiwanese Translator Bot"

# GitHub에 새 저장소 생성 후
git remote add origin https://github.com/yourusername/discord-taiwanese-translator.git
git push -u origin main
```

### 2단계: Railway 배포
1. [Railway.app](https://railway.app) 접속
2. GitHub 계정으로 로그인
3. **"New Project"** → **"Deploy from GitHub repo"**
4. 저장소 선택 → **"Deploy Now"**

### 3단계: 환경 변수 설정
Railway 대시보드에서:
- `DISCORD_TOKEN`: your_discord_token_here
- `DEFAULT_SOURCE_LANG`: zh-tw
- `DEFAULT_TARGET_LANG`: ko

### 4단계: 완료! 🎉
봇이 24/7 운영됩니다!

---

## 🚀 Heroku 배포 (전통적 방법)

### 1단계: Heroku CLI 설치
[Heroku CLI 다운로드](https://devcenter.heroku.com/articles/heroku-cli)

### 2단계: 배포
```bash
# 로그인
heroku login

# 앱 생성
heroku create your-bot-name

# 환경 변수 설정
heroku config:set DISCORD_TOKEN=your_discord_token_here

# 배포
git push heroku main

# Worker 활성화
heroku ps:scale worker=1
```

### 3단계: 완료! 🎉
봇이 24/7 운영됩니다!

---

## 🔧 배포 후 확인

### 성공 확인
Railway/Heroku 로그에서:
```
✅ 대만어번역봇#1234 봇이 준비되었습니다!
🌐 1개의 서버에서 활동 중
```

### 디스코드에서 테스트
```
!번역 안녕하세요
!상태
```

---

## 💡 추천

**Railway**가 더 간단하고 사용하기 쉬우니 Railway를 추천합니다!

1. GitHub에 코드 업로드
2. Railway에서 배포
3. 환경 변수 설정
4. 완료!

총 5분이면 24/7 운영되는 봇이 완성됩니다! 🚀
