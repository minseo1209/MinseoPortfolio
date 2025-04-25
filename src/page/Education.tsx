import '../css/Education.css'


interface Education {
  school: string;
  major: string;
  period: string;
}

const educationData: Education[] = [
  {
    school: '[송원대학교]',
    major: '전기전자공학과 ',
    period: '2019년 03월 - 2023년 02월',
  },
  {
    school: '[광주경영고등학교]',
    major: '금융서비스학과',
    period: '2014년 03월 - 2017년 02월',
  },
];

const EducationComponent = () => {
  return (
    <div className="education">
      <hr className="my-4"></hr>
      <h2 className='educationTitle'>EDUCATION</h2>
      {educationData.map((edu, index) => (
        <div className="education-item" key={index}>
          <div className="school">{edu.school}</div>
          <div className="major">{edu.major}</div>
          <div className="period">{edu.period}</div>
        </div>
      ))}
    </div>
  );
};

export default EducationComponent;
