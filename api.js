const express = require('express');
const router = express.Router();

// Simulate user data
let activeUsers = 0;

router.use((req, res, next) => {
  activeUsers++;
  res.on('finish', () => {
    activeUsers--;
  });
  next();
});

// Status endpoint
router.get('/status', (req, res) => {
  res.json({
    server: 'up',
    timestamp: new Date(),
    connections: activeUsers,
  });
});

// Dummy user list
router.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ]);
});

module.exports = router;
