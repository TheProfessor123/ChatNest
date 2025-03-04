# ChatNest - Group Video Call Web Application

## Overview
ChatNest is a real-time group video calling application built with Agora SDK that enables seamless video conferencing with additional features like screen sharing, chat messaging, and participant management.

## Features
- **Real-time Video Calls**: High-quality group video conferencing
- **Screen Sharing**: Share your screen with other participants
- **Chat Messaging**: Send text messages during video calls
- **Participant Management**: View and manage call participants 
- **Device Controls**: Toggle camera and microphone
- **Responsive Design**: Works across different screen sizes

## Tech Stack
- HTML5
- CSS3
- JavaScript
- Agora RTC SDK
- Agora RTM SDK

## Setup & Installation
1. Clone the repository:
```bash
git clone https://github.com/TheProfessor123/ChatNest-Group_Video_Call_Web_Application.git
```

2. Set up Agora account:
   - Create an account on [Agora.io](https://www.agora.io/)
   - Create a new project and get the App ID
   - Add your Agora App ID in the configuration

3. Open 

index.html

 in a web browser

## Usage
1. Open the application
2. Enter your display name and room name
3. Click "Go to Room" to enter the video call
4. Use controls to:
   - Toggle camera 📹
   - Toggle microphone 🎤
   - Share screen 🖥️
   - Send messages 💬
   - Leave call ❌

## Project Structure
```
ChatNest/
├── images/
├── index.html
├── js/
│   ├── agora-rtm-sdk-1.5.1.js
│   ├── AgoraRTC_N-4.14.0.js
│   ├── lobby.js
│   ├── room_rtc.js
│   ├── room_rtm.js
│   └── room.js
├── room.html
└── styles/
    ├── lobby.css
    ├── main.css
    └── room.css
```

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

---
Created by Chhagan Ram Choudhary
