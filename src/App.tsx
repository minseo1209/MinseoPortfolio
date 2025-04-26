import Sidebar from './components/Sidebar';
import MainPage from './page/main';
import Contact from './page/Contact';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <Container fluid className="bg-dark">
      <Row>
        <Col md={2} className="p-0">
          <Sidebar />
        </Col>
        <Col md={10}>
          <MainPage />
          <Contact />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
