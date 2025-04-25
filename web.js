const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// 서버 포트 설정
const PORT = process.env.PORT || 8001;  
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
