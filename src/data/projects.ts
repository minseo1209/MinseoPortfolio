// data/프로젝트.ts

export interface Project {
  title: string;
  period: string;
  description?: string[];
  techStack: string[];
  gitLink?: string; 
  url?: string;  
  features?: string[];  
  codeImprovement?: string[];  
  category?: string;  
  targetUser?: string;  
  platform?: string;  
  userInteraction?: string;  
  responsibilities?: { title: string; details: string[] }[]; 
}

export const projects: Project[] = [
 {
  title: "[심부릉] 대학생 맞춤형 심부름 서비스",
  period: "2022. 02 ~ 2022. 03",
  description: [
    "비대면 서비스의 수요 증가에 따른 대학생 맞춤형 심부름 서비스 활성화를 목표로 개발된 웹 애플리케이션입니다.",
    "심부름 게시글 작성 및 신청, 물물교환 게시글 작성 및 신청, 회원 관리 기능(로그인, 회원가입, 회원정보 수정 및 탈퇴 등)을 제공하며, 카카오맵 API를 활용하여 위치 기반 서비스를 활성화했습니다.",
    "고객센터 게시판 기능도 구현하여 사용자와의 소통을 원활하게 했습니다.",
    "프로젝트의 프론트엔드 부분을 총괄하며, 전체적인 UI/UX 개발을 담당했습니다."
  ],
  techStack: ["HTML", "CSS", "JavaScript"],
  gitLink: "https://github.com/2022-SMHRD-KDT-BigData-2/deliveryService"
},
{
    title: "[Puri] 병해충 판독 및 식물 매칭 서비스",
    period: "2022. 04 ~ 2022. 05", 
    description: [
      "YOLOv5 기반 병해충 분석 및 유사도 분석을 통해 식물 추천 매칭 서비스를 개발했습니다.",
      "커뮤니티만을 활용하는 것이 아닌, 사진 업로드만으로 병해충 정보를 제공하고, 사용자 성향을 고려한 반려 식물 추천까지 제공하여 차별성을 두었습니다.",
      "5명의 팀원 중 프론트엔드 총괄을 담당했습니다."
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    gitLink: "https://github.com/2022-SMHRD-KDT-BigData-2/puri" 
  },
  {
  title: "[Weather] 실시간 한국 날씨 웹",
  period: "2023.08.11 ~ 2023.08.11",
  description: [
    "실시간 한국 날씨를 보여주기 위해 만들어진 웹 애플리케이션입니다.",
    "Axios 라이브러리를 사용하여 날씨 API로부터 실시간 날씨 데이터를 가져오고, 이를 웹 페이지에 동적으로 표시합니다.",
    "사용자는 현재 위치 또는 서울, 부산 등 주요 도시의 날씨 정보를 손쉽게 확인할 수 있습니다.",
    "날씨 데이터는 온도, 습도, 기온, 날씨 상태 등의 정보를 포함하며, 이를 직관적으로 사용자에게 제공하기 위해 UI를 직관적으로 구성했습니다.",
    "JavaScript를 사용하여 비동기 요청과 데이터를 처리하고, 웹에서 실시간 정보를 정확히 반영할 수 있도록 구현하였습니다.",
    "날씨 정보를 빠르고 정확하게 전달하는 데 중점을 두었으며, 다양한 날씨 조건을 실시간으로 확인할 수 있습니다."
  ],
  techStack: ["HTML", "CSS", "JavaScript","Axios"],
  gitLink: "https://github.com/minseo1209/Weather_Outlook_at_a_Glance"
  },
  {
  title: "[ToDoList] 일정 관리 웹 애플리케이션",
  period: "2023.09.06 ~ 2023.09.15",
  description: [
    "사용자가 일정을을 추가하고 관리할 수 있는 웹 애플리케이션입니다.",
    "ToDoList의 주요 기능으로는 일정 추가, 수정, 삭제, 완료 표시 기능을 제공합니다.",
    "사용자는 일정 목록을 확인하고, 각 일정의 상태를 실시간으로 변경할 수 있습니다.",
    "JavaScript를 사용하여 데이터를 동적으로 처리하고, 사용자의 상호작용에 맞게 UI를 실시간으로 업데이트합니다.",
    "LocalStorage를 활용하여 사용자가 페이지를 새로 고침해도 일정 목록이 유지되도록 구현했습니다.",
    "간단한 일정 목록 관리 기능을 제공하는데 중점을 두고, 사용자 편의성을 고려하여 직관적인 UI를 구현했습니다."
  ],
  techStack: ["HTML", "CSS", "JavaScript", "LocalStorage"],
  gitLink: "https://github.com/minseo1209/ToDoList"
  },
  {
    title: "[StardewCompendium] StardewValley 아이템 도감",
    period: "2024.01.09 ~ 2024.01.15",
    description: [
      "StardewValley 아이템 도감을 위해 만들어진 웹 애플리케이션입니다.",
      "현재 서비스 중인 카테고리로는 농장, 광산, 낚시가 있으며, 각 카테고리별 아이템 목록과 상세 정보를 제공합니다.",
      "각 아이템은 이미지와 설명, 계절 등 세부 정보를 포함하며, 사용자에게 편리한 네비게이션을 제공합니다.",
      "React Router를 사용하여 페이지 네비게이션을 효율적으로 관리하고, Axios로 데이터를 HTTP 요청을 통해 가져와서 페이지에 동적으로 표시합니다.",
      "Bootstrap을 활용해 빠르게 스타일링을 적용하고, JavaScript (ES6+)를 사용하여 UI와 기능을 구성했습니다.",
      "향후 카테고리 추가 및 사용자 편의를 위한 검색 및 필터링 기능을 추가할 계획입니다."
    ],
    techStack: ["React", "Axios", "React Router", "Bootstrap","CSS", "JavaScript", "JSON"],
    gitLink: "https://github.com/minseo1209/Stardew",
    url: "https://stardewvalleyfackpage.netlify.app/",
    features: [
      "각 카테고리별 아이템 목록 확인",
      "농작물, 광물, 낚시 아이템 상세 정보 제공",
      "편리한 네비게이션을 통한 사용자 경험 향상",
      "몬스터 상세 정보 확인",
      "향후 추가될 카테고리와 기능 개선 계획"
    ],
    codeImprovement: [
      "중복되는 코드 부분을 함수로 추출하거나 별도의 컴포넌트로 분리하여 재사용 가능하도록 개선 예정",
      "검색 기능 및 필터링 기능을 추가하여 사용자 편의성 향상 예정"
    ]
  },
  {
  title: "[멍채팅] 실시간 채팅 웹 서비스",
  period: "2024.03.01 ~ 2024.03.06",
  description: [
    "멍채팅은 강아지 캐릭터와 함께하는 실시간 채팅 웹 서비스입니다. 이 프로젝트는 강아지를 선택하고, 다른 사용자들과 즐거운 채팅을 할 수 있는 독특한 경험을 제공합니다.",
    "강아지 알러지를 보유한 디지털 집사들을 위해 온라인 경험을 제공하고자 '멍채팅' 웹 서비스를 개발했습니다.",
    "시간대에 따라 배경을 변경하고, 사용자는 닉네임을 입력하고 강아지 캐릭터를 선택할 수 있습니다.",
    "Stream Chat SDK를 사용하여 실시간 채팅 환경을 제공하고, 사용자가 키보드로 강아지 캐릭터를 이동시키며 상호작용할 수 있습니다."
  ],
  techStack: ["React", "React Router", "Bootstrap", "React Hooks","CSS", "JavaScript", "Stream Chat SDK"],
  gitLink: "https://github.com/minseo1209/DogChat",
  features: [
    "시간대에 따른 배경 변경: 현재 시간을 기준으로 배경 이미지를 변경",
    "닉네임 입력 및 강아지 선택: 사용자가 닉네임과 강아지 캐릭터를 선택",
    "Stream Chat을 이용한 실시간 채팅: Stream Chat SDK를 사용하여 실시간 채팅 환경 제공",
    "강아지 캐릭터 이동 및 상호작용: 키보드 입력 이벤트를 통해 강아지 캐릭터를 이동시킬 수 있음"
  ],
  codeImprovement: [
    "실시간 채팅: 백엔드 서버 도입으로 채팅 메시지를 저장하고 실시간으로 클라이언트에 전달하는 기능 추가 예정",
    "모바일 화면 개선: 모바일 환경에 적합한 디자인 및 레이아웃 개선 예정",
    "React.memo 또는 useMemo를 사용하여 불필요한 렌더링 최소화 및 컴포넌트 최적화 예정"
  ]
},
{
  title: "[주식회사코유로]",
  period: "2024. 03 ~ 재직중",
 
  responsibilities: [
    {
      title: "1. 카페24 쇼핑몰 운영 및 관리",
      details: [
        "카페24 플랫폼을 활용하여 쇼핑몰 운영 및 관리 담당",
        "HTML, CSS, JavaScript를 사용해 쇼핑몰 디자인과 기능을 최적화하여 사용자 경험(UX) 개선"
      ]
    },
    {
      title: "2. 자사 웹페이지 개발 및 유지보수",
      details: [
        "자사 웹사이트를 개발하고 유지보수 담당",
        "시스템 안정성과 성능을 유지하기 위해 정기적인 점검 및 업데이트 수행",
        "새로운 기능인 React를 시도하여 웹사이트 성능 향상"
      ]
    },
    {
      title: "3. 마케팅 랜딩 페이지 제작 (프로젝트: 마케팅당장)",
      details: [
        "소상공인을 위한 마케팅 플랫폼 '마케팅당장' 프로젝트에서 React를 활용해 랜딩 페이지 설계 및 개발",
        "웹 접근성과 SEO 최적화를 고려하여 페이지를 설계, 검색 엔진 노출 성능 향상"
      ]
    },
    {
      title: "4. 자사 쇼핑몰 리뉴얼",
      details: [
        "기존 모바일 중심 인터페이스를 PC 친화적 반응형 UI로 개선",
        "CSS 미디어 쿼리와 JavaScript를 활용하여 반응형 페이지를 구현, 다양한 디바이스에서 일관된 사용자 경험 제공"
      ]
    },
    {
      title: "5. 이메일 인증 문제 해결",
      details: [
        "DNS 설정에서 누락된 SPF 레코드를 추가하여 발신 서버 설정 명확화",
        "SMTP 설정 최적화를 통해 이메일 발송 실패 문제 해결, 안정성 향상"
      ]
    },
    {
      title: "6. 오프라인 바코드 스캔 및 상품 관리 시스템 개발",
      details: [
        "웹 카메라를 활용한 바코드 스캔 기능 구현, 상품 정보를 실시간으로 확인 및 관리할 수 있는 시스템 설계",
        "QuaggaJS 라이브러리 사용하여 바코드 인식 및 데이터 처리 기능 추가",
        "AJAX 비동기 통신과 JSON 데이터를 활용하여 서버 기반 데이터베이스에 거래 내역 저장 및 관리",
        "CSV 파일 백업 및 관리자 알림 시스템 구현, 데이터 안정성과 관리 효율성 강화"
      ]
    }
  ],
  techStack: ["HTML", "CSS", "JavaScript", "React", "PHP", "AJAX", "QuaggaJS", "JSON", "SMTP", "DNS"]
  
}






];
