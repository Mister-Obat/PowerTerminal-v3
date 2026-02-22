@echo off
set "VBS_PATH=%TEMP%\launch_powerterminal.vbs"
echo Set WshShell = CreateObject("WScript.Shell") > "%VBS_PATH%"
echo WshShell.Run "cmd /c npm run dev", 0, False >> "%VBS_PATH%"
wscript.exe "%VBS_PATH%"
del "%VBS_PATH%"
exit
