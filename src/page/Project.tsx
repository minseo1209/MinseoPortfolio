import '../css/Project.css'; 
import { projects } from '../data/projects';

interface Project {
  title: string;
  period: string;
  description?: string[];  // description이 선택적임
  techStack: string[];
  gitLink?: string;
  url?: string;  
  features?: string[];  
  codeImprovement?: string[];  
  category?: string;  
  targetUser?: string;  
  platform?: string;  
  userInteraction?: string;  
  responsibilities?: { title: string; details: string[] }[];  // responsibilities 추가
}

const Project = ({ project }: { project: Project }) => {
  return (
    <div className="project-item">
    
      <h2>{project.title}</h2>
      <p><strong>프로젝트 기간:</strong> {project.period}</p>

      {/* 프로젝트 설명 - description이 있을 때만 출력 */}
      {project.description && project.description.length > 0 && (
        <div className="description">
          <div className="section-title">프로젝트 설명</div>
          {project.description.map((desc, index) => (
            <ul key={index}>
              <li>{desc}</li>
            </ul>
          ))}
        </div>
      )}

      {/* 사용 기술 스택 */}
      <div className="tech-stack">
        <div className="section-title">사용 기술 스택</div>
        {project.techStack.map((tech, index) => (
          <span key={index} className="tech-button">{tech}</span>
        ))}
      </div>
      
      {/* 카테고리 */}
      {project.category && (
        <div className="category">
          <div className="section-title">카테고리</div>
          <span>{project.category}</span>
        </div>
      )}
      
      {/* 대상 사용자 */}
      {project.targetUser && (
        <div className="target-user">
          <div className="section-title">대상 사용자</div>
          <span>{project.targetUser}</span>
        </div>
      )}

      {/* 플랫폼 */}
      {project.platform && (
        <div className="platform">
          <div className="section-title">플랫폼</div>
          <span>{project.platform}</span>
        </div>
      )}
      
      {/* 사용자 상호작용 */}
      {project.userInteraction && (
        <div className="user-interaction">
          <div className="section-title">사용자 상호작용</div>
          <span>{project.userInteraction}</span>
        </div>
      )}

      {/* 주요 기능 */}
      {project.features && project.features.length > 0 && (
        <div className="features">
          <div className="section-title">주요 기능</div>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {/* 코드 개선 사항 */}
      {project.codeImprovement && project.codeImprovement.length > 0 && (
        <div className="code-improvement">
          <div className="section-title">코드 개선 사항</div>
          <ul>
            {project.codeImprovement.map((improvement, index) => (
              <li key={index}>{improvement}</li>
            ))}
          </ul>
        </div>
      )}

      {/* responsibilities - 조건부 렌더링 */}
      {project.responsibilities && project.responsibilities.length > 0 && (
        <div className="responsibilities">
          <div className="section-title">주요 업무 및 성과</div>
          {project.responsibilities.map((resp, index) => (
            <div key={index}>
              <div className="responsibility-title">{resp.title}</div>
              <ul>
                {resp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* GitHub 링크 */}
      {project.gitLink && (
        <div className="git-link">
          <div className="section-title">GitHub 링크</div>
          <a href={project.gitLink} target="_blank" rel="noopener noreferrer">
            <span className="git-button">GitHub</span>
          </a>
        </div>
      )}
    </div>
  );
};

const ProjectsPage = () => {
  return (
    <div className="project-container">
      <hr className="my-4"></hr>
      <h3 className="mt-5 ProjectsTitle">Projects</h3> 
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsPage;
