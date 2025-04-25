import { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'; // React Router Link 추가
import '../css/Sidebar.css'; // 필요 시 유지

// 부드러운 스크롤 이동 함수
const navigateToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

function Sidebar() {
  const [activeSection, setActiveSection] = useState<string>('');
  const location = useLocation(); // 현재 URL을 가져옴

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 1; // 안정성 보정
      const sections = ['home', 'projects', 'contact'];
      let current = '';

      // 각 섹션에 대한 현재 위치를 확인하여 activeSection을 업데이트
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

      setActiveSection(current); // activeSection 상태 업데이트
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기화 시에도 실행

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 페이지 이동 후 특정 섹션으로 부드럽게 스크롤
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1); // URL의 해시 부분만 추출
      navigateToSection(sectionId); // 해당 섹션으로 이동
    }
  }, [location]); // URL 변경 시마다 실행

  return (
    <div className="sidebar">
      <Nav className="flex-column">
        {/* About 섹션 */}
        <Nav.Link
          as={Link} // React Router Link 사용
          to="/#home" // / 페이지의 home 섹션으로 이동
          className={activeSection === 'home' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Nav.Link>

        {/* Projects 섹션 */}
        <Nav.Link
          as={Link} // React Router Link 사용
          to="/#projects" // / 페이지의 projects 섹션으로 이동
          className={activeSection === 'projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </Nav.Link>

        {/* Contact 페이지로 이동하는 링크 */}
        <Nav.Link
          as={Link} // React Router Link 사용
          to="/contact" // /contact 페이지로 이동
          className={activeSection === 'contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;
