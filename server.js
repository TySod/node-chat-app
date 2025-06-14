const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const apiRoutes = require('./api');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));
app.use('/api', apiRoutes);

let users = {};

io.on('connection', socket => {
  console.log('🟢 New connection');

  socket.on('register', username => {
    users[socket.id] = username;
    io.emit('userList', Object.values(users));
  });

  socket.on('chat message', ({ message, time }) => {
    const username = users[socket.id] || 'Anonymous';
    io.emit('chat message', {
      message,
      sender: username,
      fromSelf: false,
      time,
      id: socket.id,
    });
  });

  socket.on('disconnect', () => {
    delete users[socket.id];
    io.emit('userList', Object.values(users));
    console.log('🔴 User disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
