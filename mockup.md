## App Start
- Get bridgeConfig.json
- if User = ""
- Splash Screen  
 - Press Bridge Link Button
 - Register/Sync Device Button

## On Register/Sync
- Get Bridge IP
- Get Bridge URL
- Register Username
- Save to bridgeConfig.json
- If username register success -- Reroute to "home"
- Else Display Errors with Try again page

----

## Home Nav
- Home
- Light Setup (Get Lights)
- Room Setup (Save Lights to Room)
- Bridge Information  
- About App Info

`* notes menu option`
## Bridge Information
- Bridge Name  
- Status: Connected
- ID:
- MAC:
- IP
- Software Version:

## Light Setup
- GET ALL LIGHTS
 - Sort By Reachable/WhereDayGO
- Light (i) info*

## Room Setup
- Current Room List* (edit info)
- Add Room*

----

### Home Page
if no rooms (Splash Create ROOM)
- Master Switch (On/Off)
 - Room ON/OFF
 - Room Master Brightness Fader
 - Room Master Control*
 - Room Individual Light Control*

### Room Master Control
- Color Wheel
- Select Scene* (Get Saved Scene List)

### Individual Light Control (per Room)
- Get All Lights
- On/Off  
- Each Light Brightness Fader
- Change Color*
- Save Scene* (Save current Light Set as Scene w/ Name)
