# ChatNest - Group Video Call Web Application

## Overview
ChatNest is a real-time group video calling application built with Agora SDK that enables seamless video conferencing with advanced features like screen sharing, chat messaging, file sharing, live transcription, and end-to-end encryption.

## Features
- **Real-time Video Calls**: High-quality group video conferencing
- **End-to-End Encryption**: Secure communication with AES-256-XTS encryption
- **Secured Guest Access**: Token-based authentication for RTC and RTM
- **Screen Sharing**: Share your screen with other participants
- **Chat Messaging**: Send text messages during video calls
- **File Sharing**: Share files with other participants via Cloudinary integration
- **Live Transcription**: Real-time speech-to-text using Deepgram AI
- **Meeting Summaries**: Generate concise summaries of meetings
- **Participant Management**: View and manage call participants 
- **Device Controls**: Toggle camera and microphone
- **Responsive Design**: Works across different screen sizes

## Tech Stack
- **Frontend**:
  - HTML5, CSS3, JavaScript
  - Agora RTC SDK
  - Agora RTM SDK
  - Audio Worklet API
  - WebSockets

- **Backend**:
  - Node.js
  - Express
  - WebSocket for real-time communication
  - Cloudinary for file handling
  - Deepgram AI for speech recognition
  - Agora token generation

## Project Structure
```
ChatNest/
├── client/
│   ├── images/
│   ├── js/
│   │   ├── agora-rtm-sdk-1.5.1.js
│   │   ├── AgoraRTC_N-4.14.0.js
│   │   ├── audio-processor.js
│   │   ├── file_sharing.js
│   │   ├── lobby.js
│   │   ├── room_rtc.js
│   │   ├── room_rtm.js
│   │   └── room.js
│   ├── styles/
│   │   ├── lobby.css
│   │   ├── main.css
│   │   └── room.css
│   ├── index.html
│   └── room.html
│
└── server/
    ├── .env
    ├── .gitignore
    ├── cloudinaryConfig.js
    ├── package.json
    ├── Procfile
    ├── server.js
    └── tokenGenerator.js
```

## Setup & Installation
1. Clone the repository:
```bash
git clone https://github.com/TheProfessor123/ChatNest.git
```

2. Set up Agora account:
   - Create an account on [Agora.io](https://www.agora.io/)
   - Create a new project and get the App ID and App Certificate
   - Add your App ID and App Certificate to the server .env file

3. Set up Deepgram account:
   - Create an account on [Deepgram](https://deepgram.com/)
   - Get your API key
   - Add your Deepgram API key to the server .env file

4. Set up Cloudinary account:
   - Create an account on [Cloudinary](https://cloudinary.com/)
   - Get your cloud name, API key, and API secret
   - Add these credentials to the server .env file

5. Server setup:
   - Navigate to the server directory: `cd server`
   - Install dependencies: `npm install`
   - Create a .env file with the following:
     ```
     APP_ID=your_agora_app_id
     APP_CERTIFICATE=your_agora_app_certificate
     CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
     CLOUDINARY_API_KEY=your_cloudinary_api_key
     CLOUDINARY_API_SECRET=your_cloudinary_api_secret
     DEEPGRAM_API_KEY=your_deepgram_api_key
     PORT=3000
     ```
   - Start the server: `node server.js`

6. Client setup:
   - Open the client/index.html file in a browser or serve it using a simple HTTP server

## Key Features Explained

### End-to-End Encryption
ChatNest uses AES-256-XTS encryption to secure all video and audio communication, ensuring that your conversations remain private and protected from third-party access.

### Secured Guest Access
- Implemented token-based authentication using Agora's RTC and RTM tokens
- Server-side token generation with secure validation
- Ephemeral access control for guest participants

### Live Transcription
- Real-time speech-to-text using Deepgram AI
- Audio processing via WebSocket connection
- Client-side Audio Worklet for efficient audio stream handling
- Transcript display during meetings

### Meeting Summaries
- Generate concise summaries of meeting content
- Automated key point extraction
- Both real-time and post-meeting summary options

## Usage
1. Open the application
2. Enter your display name and room name
3. Click "Go to Room" to enter the video call
4. Use controls to:
   - Toggle camera 📹
   - Toggle microphone 🎤
   - Share screen 🖥️
   - Send messages 💬
   - Share files 📁
   - Enable live transcription 📝
   - Generate meeting summary 📋
   - Leave call ❌

## Deployment
- **Frontend**: Deployed on [Vercel](https://chatnest-mu.vercel.app/)
- **Backend**: Deployed on [Render](https://chatnest-backend-t3jj.onrender.com/)
- **Monitoring**: Using [UptimeRobot](https://uptimerobot.com/) to prevent backend inactivity

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

---
Created by Chhagan Ram Choudhary