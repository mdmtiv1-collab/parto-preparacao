@echo off
title Servidor - Metodo Respira e Desce
cd /d "%~dp0"
echo ==========================================================
echo       INICIANDO A AREA DE MEMBROS (RESPIRA E DESCE)
echo ==========================================================
echo.

where node >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo [Servidor] Iniciando servidor local com Node.js...
    node server.js
    goto end
)

where python >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo [Servidor] Iniciando servidor local com Python...
    start http://localhost:3080
    python -m http.server 3080
    goto end
)

echo.
echo ==========================================================
echo [AVISO] Nao encontramos Node.js ou Python instalados.
echo Tentando abrir o arquivo diretamente no navegador.
echo Devido a restricoes de seguranca do YouTube, os videos
echo podem nao funcionar abrindo diretamente.
echo Recomendamos instalar o Node.js para rodar os videos.
echo ==========================================================
pause
start index.html

:end
pause
