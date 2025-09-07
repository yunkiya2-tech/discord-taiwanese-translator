# ☁️ 클라우드 배포 가이드

## 🚀 Heroku 배포 (추천!)

### 1단계: Heroku 계정 생성
1. [Heroku](https://heroku.com) 접속
2. 무료 계정 생성

### 2단계: Heroku CLI 설치
```bash
# Windows
# https://devcenter.heroku.com/articles/heroku-cli 에서 다운로드

# 설치 확인
heroku --version
```

### 3단계: Git 저장소 초기화
```bash
# Git 초기화
git init

# 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit"
```

### 4단계: Heroku 앱 생성 및 배포
```bash
# Heroku 로그인
heroku login

# Heroku 앱 생성
heroku create your-bot-name-here

# 환경 변수 설정
heroku config:set DISCORD_TOKEN=your_discord_token_here

# 배포
git push heroku main

# 로그 확인
heroku logs --tail
```

### 5단계: Worker Dyno 활성화
```bash
# Worker dyno 활성화 (무료)
heroku ps:scale worker=1

# 상태 확인
heroku ps
```

---

## 🚂 Railway 배포 (더 간단!)

### 1단계: Railway 계정 생성
1. [Railway](https://railway.app) 접속
2. GitHub 계정으로 로그인

### 2단계: 프로젝트 배포
1. **"New Project"** 클릭
2. **"Deploy from GitHub repo"** 선택
3. 저장소 선택
4. **"Deploy Now"** 클릭

### 3단계: 환경 변수 설정
1. 프로젝트 대시보드에서 **"Variables"** 탭
2. 다음 변수 추가:
   - `DISCORD_TOKEN`: your_discord_token_here
   - `DEFAULT_SOURCE_LANG`: zh-tw
   - `DEFAULT_TARGET_LANG`: ko

### 4단계: 배포 확인
- 자동으로 배포됨
- 로그에서 봇 상태 확인

---

## 🔧 배포 후 확인사항

### 성공적인 배포 확인
```
✅ 대만어번역봇#1234 봇이 준비되었습니다!
🌐 1개의 서버에서 활동 중
```

### 문제 해결
1. **봇이 응답하지 않는 경우:**
   - 환경 변수 `DISCORD_TOKEN` 확인
   - 로그에서 오류 메시지 확인

2. **배포 실패:**
   - `package.json`의 Node.js 버전 확인
   - 의존성 설치 오류 확인

---

## 💰 비용 정보

### Heroku
- **무료 티어**: 월 550시간 (약 23일)
- **유료**: $7/월부터

### Railway
- **무료 티어**: 월 $5 크레딧
- **유료**: $5/월부터

---

## 🎯 추천 방법

1. **Railway**: 더 간단하고 사용하기 쉬움
2. **Heroku**: 더 안정적이고 널리 사용됨

둘 다 무료로 시작할 수 있으니 원하는 것을 선택하세요!
