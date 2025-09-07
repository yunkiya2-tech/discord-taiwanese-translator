#!/bin/bash

echo "🤖 디스코드 대만어 번역 봇 시작 중..."
echo

# Node.js가 설치되어 있는지 확인
if ! command -v node &> /dev/null; then
    echo "❌ Node.js가 설치되지 않았습니다."
    echo "https://nodejs.org 에서 Node.js를 다운로드하여 설치해주세요."
    exit 1
fi

# 의존성이 설치되어 있는지 확인
if [ ! -d "node_modules" ]; then
    echo "📦 의존성 설치 중..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ 의존성 설치에 실패했습니다."
        exit 1
    fi
fi

# .env 파일이 있는지 확인
if [ ! -f ".env" ]; then
    echo "⚠️  .env 파일이 없습니다."
    echo "env.example을 .env로 복사하고 DISCORD_TOKEN을 설정해주세요."
    exit 1
fi

echo "✅ 봇 시작 중..."
echo
echo "💡 봇을 중지하려면 Ctrl+C를 누르세요."
echo

npm start
