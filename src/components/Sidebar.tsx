import { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../css/Sidebar.css';

// 부드러운 스크롤 이동 함수
const navigateToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

function Sidebar() {
  const [activeSection, setActiveSection] = useState<string>('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 1; // 안정성 보정
      const sections = ['home', 'projects', 'contact'];
      let current = '';

      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            current = sections[i];
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기화

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      navigateToSection(sectionId);
    }
  }, [location]);

  // 🔥 About, Projects 클릭 핸들러
  const handleNavigateAndScroll = (targetId: string) => {
    navigate('/'); // 메인으로 이동
    setTimeout(() => {
      navigateToSection(targetId); // 해당 섹션으로 스크롤
    }, 100); // 약간 기다렸다 스크롤
  };

  return (
    <div className="sidebar">
      <Nav className="flex-column">
        {/* About 섹션 */}
        <Nav.Link
          onClick={() => handleNavigateAndScroll('home')}
          className={activeSection === 'home' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Nav.Link>

        {/* Projects 섹션 */}
        <Nav.Link
          onClick={() => handleNavigateAndScroll('projects')}
          className={activeSection === 'projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </Nav.Link>

        {/* Contact 페이지 */}
        <Nav.Link
          as={Link}
          to="/contact"
          className={activeSection === 'contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;
