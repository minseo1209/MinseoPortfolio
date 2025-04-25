import express from 'express';
import path from 'path';

const app = express();

// Vite로 빌드된 파일들이 있는 dist 폴더를 서빙
app.use(express.static(path.join(__dirname, 'dist')));

// 모든 라우트는 index.html로 리다이렉트
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// 서버 포트 설정
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
