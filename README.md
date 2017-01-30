# Philips Hue App
Creating a full web applications with Philips Hue API.

Testing with task lighting in current shop space. (1 overhead, 1 task light, 1 floor lamp)

[Philips Hue Concepts](https://developers.meethue.com/documentation/core-concepts)

## Plans

### Create Developer User
- bridgeIP/debug/clip.html
- bridge/api
- Body: {"devicetype": "my_hue_app#browser username"}
- Press Button first 

#### Start
- [ ] Find Bridge using UPNP SSDP
- [ ] Sync/link Save Bridge IP

#### Dashboard
- [ ] Find All Lights
- [ ] Classify Type of Light (White/Dim, RGB/DIM)
- [ ] Create Groups With Lights Found

#### Light
- [ ] Manipulate Single Light
 - Dim 5%-100%
 - If RGB = Color Picker
 - On/Off  
- [ ] Save Favorite Colors

#### Groups
- [ ] Manipulate Light Groups
 - Dim 5%-100%
 - On/Off
- [ ] Save Group Scene

## Future Plans
- Integrate Application with Voice Echo/Google/Etc.
- "Alexa, Turn `lamp` `on` to `favorite` `blue`".
- "Google, `Dim` `Living Room` to `afternoon`"
