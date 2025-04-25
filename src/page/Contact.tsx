import { FaGithub, FaEnvelope } from 'react-icons/fa'; 

const Contact = () => {
  return (
    <div style={{ padding: '40px', color: 'white', textAlign: 'center' }}>
      <h2>CONTACT</h2>
      
      <div className="contact-info">
        <div className="contact-item" style={{ marginBottom: '20px' }}>
          <FaGithub size={40} color="white" />
          <div className="contact-details">
            <p>GitHub</p>
            <p><a href="https://github.com/minseo1209" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>minseo1209</a></p>
          </div>
        </div>

        <div className="contact-item">
          <FaEnvelope size={40} color="white" />
          <div className="contact-details">
            <p>GMAIL</p>
            <p><a href="mailto:alstj6009@gmail.com" style={{ color: 'white' }}>alstj6009@gmail.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
