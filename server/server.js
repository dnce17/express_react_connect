const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.json({ 'users': ['user1', 'user2', 'user3', 'user4'] });
})

// Server will run on port 5000, client runs on 3000 per react's default setting
app.listen(5000, () => { console.log('Server started on port 5000'); })