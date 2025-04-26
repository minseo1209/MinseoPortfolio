import About from './About';
import Project from './Project';
import Education from './Education'
import Certificate from './Certificate'

function MainContent() {
  return (
    <>
      <div id="home" style={{ minHeight: '80vh' }}>
        <About />
      </div>
      <div id="projects" style={{ minHeight: '100vh' }}>
        <Project />
        <Education/>
        <Certificate/>
      </div>

    </>
  );
}

export default MainContent;
