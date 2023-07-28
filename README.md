<p align="center">
  <img width="200" height="200" src="https://github.com/GooglyBlox/jehttube/blob/main/src/icon.png?raw=true">
</p>

# Jehttube

Jehttube is a chromium-based extension that replaces the thumbnails of all video thumbnails on https://www.youtube.com to a random video thumbnail from https://www.youtube.com/@TurboJehtt. 



## How to use?

Download from [releases](https://github.com/GooglyBlox/jehttube/releases/tag/v1) or the [direct link](https://github.com/GooglyBlox/jehttube/files/12198598/Jehttube.zip).

Extract ZIP, and open folder in your IDE of choice. In the [background.js](https://github.com/GooglyBlox/jehttube/blob/main/src/background.js) file, replace the "PUT KEY HERE" text in the apiKey value with your Google Cloud API key (with YouTube Data API v3 enabled).

## Less vague steps
1. Visit https://developers.google.com/
2. Register Google account as a developer account
3. Visit https://console.cloud.google.com/apis/credentials
4. Create a new project and name it whatever
5. Click the button at the top that says "Create Credentials", which will create a new API key (and you should save that somewhere)
6. Visit https://console.cloud.google.com/apis/library/youtube.googleapis.com?project=cool-adviser-389518 and click "Enable"
7. Plug API key into the [background.js](https://github.com/GooglyBlox/jehttube/blob/main/src/background.js) file
8. Done, profit! Load it as an extension in your chromium-based browser (Brave, Opera, Chrome, etc) and open a new YouTube tab

## Breaks for some reason?
Just hover over a video and it'll fix itself, I can't be bothered to implement a real fix.  
If that doesn't fix it, open an issue I guess?

## Demo

![](https://github.com/GooglyBlox/jehttube/blob/main/jehttube.gif?raw=true)
