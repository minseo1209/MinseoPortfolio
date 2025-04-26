import { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 1; 
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
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // About, Projects 클릭 핸들러
  const handleNavigateAndScroll = (targetId: string) => {
    navigateToSection(targetId); 
  };

  return (
    <div className="sidebar">
      <Nav className="flex-column">

        <Nav.Link
          onClick={() => handleNavigateAndScroll('home')}
          className={activeSection === 'home' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Nav.Link>

        <Nav.Link
          onClick={() => handleNavigateAndScroll('projects')}
          className={activeSection === 'projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </Nav.Link>

        <Nav.Link
          onClick={() => handleNavigateAndScroll('contact')}
          className={activeSection === 'contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;
