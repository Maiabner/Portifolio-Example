@echo off
REM Portfolio do Abner — duplo clique abre o site no navegador (requer npm install antes)
cd /d "%~dp0"
start "" http://localhost:5198
call npm run dev -- --port 5198 --strictPort
