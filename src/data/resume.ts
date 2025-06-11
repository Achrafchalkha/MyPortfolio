export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  url?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const personalInfo = {
  name: "Achraf Chalkha",
  title: "Computer Engineering Student",
  email: "chalkhaachraf21@gmail.com",
  phone: "+212 770-708444",
  location: "Fes, Morocco",
  linkedin: "linkedin.com/in/achraf-chalkha",
  summary: "Motivated fourth-year Software Engineering student, with hands-on experience in various types of development, including web, desktop, and console applications. Passionate about Java programming and modern web development, I am seeking internships and opportunities to further my studies and skills."
};

export const educationData: Education[] = [
  {
    institution: "NATIONAL SCHOOL OF APPLIED SCIENCES AL HOCEIMA (ENSAH)",
    degree: "Computer Science Engineering",
    location: "Al Hoceima, Morocco",
    period: "2022 - 2025"
  },
  {
    institution: "NATIONAL SCHOOL OF APPLIED SCIENCES AL HOCEIMA (ENSAH)",
    degree: "Preparatory cycle",
    location: "Al Hoceima, Morocco",
    period: "2021 - 2023"
  },
  {
    institution: "Oum Al Quora High School",
    degree: "Baccalaureate in Mathematical Sciences B - French Option",
    location: "Fes, Morocco",
    period: "2020 - 2021"
  }
];

export const projectsData: Project[] = [
  {
    title: "AI Career Navigator",
    description: "An intelligent career guidance platform that delivers personalized career recommendations, learning roadmaps, and real-time job market insights using AI. It features JWT-secured authentication, skill tracking, and an interactive user experience powered by Angular frontend and Spring Boot backend.",
    technologies: [
      "Spring Boot",
      "Angular",
      "JWT",
      "MongoDB",
      "Spring Security",
    ],
    githubUrl: "https://github.com/Achrafchalkha/AI-CAREER-NAVIGATOR",
    imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Talent Acquisition Management System (TAMS)",
    description: "Building a recruitment management app using Spring Boot, Spring Security, Microservices, DDD, EDA (CQRS) for the backend and React.js with Redux for the frontend. Ensures secure and efficient talent request handling with automated job postings.",
    technologies: ["Spring Boot", "Spring Security", "Microservices", "DDD", "CQRS", "React.js", "Redux"],
    githubUrl: "https://github.com/Achrafchalkha/TAMS-MICROSERVICES",
    imageUrl: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Social Media Sentiment Analysis",
    description: "Developing a Java-based sentiment analysis application using Hadoop, Spark, and NLP models. Created JavaFX UI for visualization of big data-powered sentiment insights.",
    technologies: ["Java", "Hadoop", "Spark", "NLP", "JavaFX"],
    githubUrl: "https://github.com/Achrafchalkha/sentiment-analysis-social-media",
    imageUrl: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Clothes Similarity Search",
    description: "Developed a full-stack web platform using Flask, Python, and React.js to search for similar clothing items via image and voice input. Containerized the application with Docker to ensure efficient deployment and cross-platform compatibility.",
    technologies: ["Flask", "Python", "React.js", "Docker", "Image Processing"],
    githubUrl: "https://github.com/Achrafchalkha/clothes-similarity-search",
    imageUrl: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Unisphere",
    description: "Development of a responsive web platform to manage administrative school services at ENSAH. Leveraged HTML, CSS, PHP (Laravel), and JavaScript to create a comprehensive school management web platform.",
    technologies: ["HTML", "CSS", "PHP", "Laravel", "JavaScript"],
    githubUrl: "https://github.com/Achrafchalkha/E-service",
    imageUrl: "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Collaborative Text Annotation Platform",
    description: "Developed a collaborative web-based tool for text annotation and dataset management using Spring Boot, Thymeleaf, and TailwindCSS. Features include role and task management, intuitive UI design, and optimized performance and security.",
    technologies: ["Spring Boot","Spring Security", "Thymeleaf", "TailwindCSS"],
    githubUrl: "https://github.com/Achrafchalkha/Web-Based-Collaborative-Annotation-System-with-Task-Assignment",
    imageUrl: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
  
  
  

];

export const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Java", "PHP", "JavaScript", "Python","C++", "C#","Bash Scripting"]
  },
  { 
    category: "Web Technologies",
    skills: ["HTML5", "CSS3", "Tailwind CSS", "RESTful APIs", "JSON"]
  },
  { 
    category: "Frameworks & Libraries",
    skills: ["Angular", "Laravel", "React.js", "TypeScript", "Spring Boot", "Spring MVC", "Spring Security", "Spring Data JPA"]
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB" ,"Oracle DB"]
  },
  {
    category: "Java Ecosystem",
    skills: ["Java EE", "Servlet API", "JSP", "Hibernate", "Maven/Gradle"]
  },
  {
    category: "DevOps & Tools",
    skills: ["Git", "GitHub","Gitlab", "Docker", "Jenkins", "CI/CD", "Linux", "AWS"]
  }
];

export const certificationsData: Certification[] = [
  {
    title: "ORACLE CERTIFIED ASSOCIATE, JAVA SE 8 PROGRAMMER",
    issuer: "Oracle",
    url: "/1739293504393.pdf",
  },
  {
    title: "ORACLE CLOUD INFRASTRUCTURE FOUNDATIONS ASSOCIATE CERTIFICATE",
    issuer: "Oracle",
    url: "/1738178947867.pdf",
  },
  {
    title: "DOCKER FOR BEGINNERS",
    issuer: "Udemy",
    url: "/1732557124329.pdf",
  }
];

export const extracurricularData = [
  {
    title: "Team Leader – CHESS CLUB ENSAH",
    description: "Led organization of first FARAS regional chess tournament, coordinating team members and ensuring effective communication. Enhanced leadership and event management."
  }
];