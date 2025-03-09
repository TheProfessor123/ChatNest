// This file handles changes to the room DOM

let messagesContainer = document.getElementById('messages');
messagesContainer.scrollTop = messagesContainer.scrollHeight;

const memberContainer = document.getElementById('members__container');
const memberButton = document.getElementById('members__button');

const chatContainer = document.getElementById('messages__container');
const chatButton = document.getElementById('chat__button');

let activeMemberContainer = false;

memberButton.addEventListener('click', () => {
  if (activeMemberContainer) {
    memberContainer.style.display = 'none';
  } else {
    memberContainer.style.display = 'block';
  }

  activeMemberContainer = !activeMemberContainer;
});

let activeChatContainer = false;

chatButton.addEventListener('click', () => {
  if (activeChatContainer) {
    chatContainer.style.display = 'none';
  } else {
    chatContainer.style.display = 'block';
  }

  activeChatContainer = !activeChatContainer;
});

let displayFrame = document.getElementById('stream__box')
let videoFrames = document.getElementsByClassName('video__container')
let userIdInDisplayFrame = null;

let expandVideoFrame = (e) => {
  let child = displayFrame.children[0]
  if(child){
    document.getElementById('streams__container').appendChild(child)
  }
  
  displayFrame.style.display = 'block'
  displayFrame.appendChild(e.currentTarget)
  userIdInDisplayFrame = e.currentTarget.id

  for(let i=0; videoFrames.length>i; i++){
    if(videoFrames[i].id != userIdInDisplayFrame){
      videoFrames[i].style.height = '100px'
      videoFrames[i].style.width = '100px'
    } 
  }
}

for(let i=0; videoFrames.length>i; i++){
  videoFrames[i].addEventListener('click', expandVideoFrame)
}

let hideDisplayFrame = () => {
  userIdInDisplayFrame = null
  displayFrame.style.display = null

  let child = displayFrame.children[0]
  document.getElementById('streams__container').appendChild(child)

  for(let i=0; videoFrames.length>i; i++){
    videoFrames[i].style.height = '300px'
    videoFrames[i].style.width = '300px'
  }
}

document.getElementById('toggle-transcript-btn').addEventListener('click', function() {
  const btn = this;
  const status = document.getElementById('transcript-status');
  
  console.log("Toggle transcription clicked, localTracks:", window.localTracks);
  
  if (btn.textContent === 'Start Transcription') {
      if (window.localTracks && window.localTracks.length > 0) {
          const localAudioTrack = window.localTracks[0];
          console.log("Found audio track:", localAudioTrack);
          
          window.startLiveTranscription(localAudioTrack);
          btn.textContent = 'Stop Transcription';
          btn.style.backgroundColor = '#d9534f';
          status.textContent = 'Active';
          status.style.color = 'green';
      } else {
          console.error("No audio track found in window.localTracks:", window.localTracks);
          status.textContent = 'Error: No audio track found';
          status.style.color = 'red';
      }
  } else {
      window.stopLiveTranscription();
      btn.textContent = 'Start Transcription';
      btn.style.backgroundColor = '#435F7A';
      status.textContent = 'Inactive';
      status.style.color = 'gray';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const transcriptBtn = document.getElementById('toggle-transcript-btn');
  transcriptBtn.disabled = true;
  transcriptBtn.style.opacity = '0.6';
  transcriptBtn.title = 'Join stream first to enable transcription';
});

document.getElementById('generate-summary-btn').addEventListener('click', async function() {
  const summaryElement = document.getElementById('meeting-summary');
  
  if (!window.accumulatedTranscript || !window.accumulatedTranscript.trim()) {
      summaryElement.innerText = 'No transcript available yet. Start transcription and wait for people to speak.';
      summaryElement.style.display = 'block';
      return;
  }
  
  try {
      summaryElement.innerText = 'Generating summary...';
      summaryElement.style.display = 'block';
      
      const response = await fetch('https://chatnest-backend-t3jj.onrender.com/api/meeting-summary/live', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ transcript: window.accumulatedTranscript })
      });
      
      if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
      }
      
      const data = await response.json();
      summaryElement.innerText = data.summary || 'Summary could not be generated.';
  } catch (error) {
      console.error('Error generating meeting summary:', error);
      summaryElement.innerText = 'Error generating summary. Please try again later.';
  }
});

displayFrame.addEventListener('click', hideDisplayFrame);