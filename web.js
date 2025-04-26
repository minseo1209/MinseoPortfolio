import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 8001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 요청 로그 찍기 (요청 들어오는지 확인용)
app.use((req, res, next) => {
  console.log(`[REQUEST] ${req.method} ${req.url}`);
  next();
});

// 정적 파일 서빙 (dist 폴더를 루트로 연결)
app.use('/', express.static(path.join(__dirname, 'dist')));

// 모든 요청에 대해 index.html 반환 (SPA 라우팅 처리)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server is running on http://0.0.0.0:${PORT}`);
});
