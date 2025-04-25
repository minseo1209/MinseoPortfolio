import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import MainPage from './page/main';
import Contact from './page/Contact'; // Contact 페이지 임포트
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

function App () {
  return (
<Router basename="/"> 
      <Container fluid className="bg-dark">
        <Row>
          <Col md={2} className="p-0">
            <Sidebar />
          </Col>
          <Col md={10}>
            <Routes>
              <Route path="/" element={<MainPage />} /> 
              <Route path="/contact" element={<Contact />} /> 
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default App;
