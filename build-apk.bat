@echo off
chcp 65001 >nul
echo Voraussetzung: Node.js, JDK 17 und Android Studio (Android SDK, ANDROID_HOME gesetzt)
call npm install || goto err
call npm run android || goto err
cd android && call gradlew.bat assembleDebug || goto err
echo.
echo Fertig: android\app\build\outputs\apk\debug\app-debug.apk
pause & exit /b 0
:err
echo Fehler - siehe Meldungen oben.
pause
