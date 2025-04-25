import '../css/Education.css'


interface Education {
  title: string;
  subtitle:string;
  period: string;
}

const Certificate: Education[] = [
  {
    title: 'AutoCAD 2급 기술자격시험',
    subtitle:'한국 ATC협회',
    period: '2018년 11월',
  },
  {
    title: '전산회계 1급 ',
    subtitle:'한국세무사회',
    period: '2018년 04월',
  },
  {
    title: '문서실무 1급',
    subtitle:'한국정보관리협회',
    period: '2015년 01월',
  },
  {
    title: 'GTQ 1급 ',
    subtitle:'한국생산성본부',
    period: '2012년 10월',
  },
];

const EducationComponent = () => {
  return (
    <div className="education">
      <hr className="my-4"></hr>
      <h2 className='educationTitle'>CERTIFICATE</h2>
      {Certificate.map((edu, index) => (
        <div className="education-item" key={index}>
          <div className="school">[{edu.title}]</div>
          <div className="major">{edu.subtitle}</div>
          <div className="period">{edu.period}</div>
        </div>
      ))}
    </div>
  );
};

export default EducationComponent;
