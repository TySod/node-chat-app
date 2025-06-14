const socket = io();
let username = '';
let mySocketId = '';

const loginScreen = document.getElementById('login-screen');
const chatContainer = document.getElementById('chat-container');
const usernameInput = document.getElementById('username-input');
const joinBtn = document.getElementById('join-btn');
const msgInput = document.getElementById('msg');
const chatForm = document.getElementById('chat-form');
const messages = document.getElementById('messages');
const userList = document.getElementById('user-list');
const myUsernameDisplay = document.getElementById('my-username');

joinBtn.onclick = () => {
  username = usernameInput.value.trim();
  if (!username) return;
  socket.emit('register', username);
  loginScreen.classList.add('hidden');
  chatContainer.classList.remove('hidden');
  myUsernameDisplay.textContent = username;
};

socket.on('connect', () => {
  mySocketId = socket.id;
});

chatForm.addEventListener('submit', e => {
  e.preventDefault();
  if (!msgInput.value.trim()) return;
  const time = new Date().toLocaleTimeString();
  socket.emit('chat message', {
    message: msgInput.value,
    time,
  });
  msgInput.value = '';
});

socket.on('chat message', data => {
  const isMe = data.id === mySocketId;
  const li = document.createElement('li');
  li.className = isMe ? 'from-me' : 'from-them';
  li.innerHTML = `<strong>${data.sender}</strong>: ${data.message}
    <span class="timestamp">${data.time}</span>`;
  messages.appendChild(li);
  messages.scrollTop = messages.scrollHeight;
});

socket.on('userList', users => {
  userList.innerHTML = '';
  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user;
    userList.appendChild(li);
  });
});
