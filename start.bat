@echo off
echo 🤖 디스코드 대만어 번역 봇 시작 중...
echo.

REM Node.js가 설치되어 있는지 확인
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js가 설치되지 않았습니다.
    echo https://nodejs.org 에서 Node.js를 다운로드하여 설치해주세요.
    pause
    exit /b 1
)

REM 의존성이 설치되어 있는지 확인
if not exist "node_modules" (
    echo 📦 의존성 설치 중...
    npm install
    if errorlevel 1 (
        echo ❌ 의존성 설치에 실패했습니다.
        pause
        exit /b 1
    )
)

REM .env 파일이 있는지 확인
if not exist ".env" (
    echo ⚠️  .env 파일이 없습니다.
    echo env.example을 .env로 복사하고 DISCORD_TOKEN을 설정해주세요.
    pause
    exit /b 1
)

echo ✅ 봇 시작 중...
echo.
echo 💡 봇을 중지하려면 Ctrl+C를 누르세요.
echo.

npm start
