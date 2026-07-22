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

export interface Experience {
  company: string;
  position: string;
  location: string;
  period: string;
  responsibilities: string[];
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
  title: "Software Engineer",
  email: "chalkhaachraf21@gmail.com",
  phone: "+212 770-708444",
  location: "Fez, Morocco",
  linkedin: "https://linkedin.com/in/achraf-chalkha",
  github: "https://github.com/achrafchalkha",
  website: "https://achrafchalkha.vercel.app",
  resumeUrl: "/Achraf_Chalkha_CV.pdf",
  summary: "Software engineer with experience in full-stack development and a strong backend focus, as well as distributed systems, cloud technologies, and DevOps practices. Versatile and quality-driven, I aim to contribute to the design of reliable, high-performance, and scalable solutions."
};

export const educationData: Education[] = [
  {
    institution: "NATIONAL SCHOOL OF APPLIED SCIENCES OF AL HOCEIMA (ENSAH)",
    degree: "Engineering Degree in Computer Engineering",
    location: "Al Hoceima, Morocco",
    period: "2022 - 2025"
  },
  {
    institution: "NATIONAL SCHOOL OF APPLIED SCIENCES OF AL HOCEIMA (ENSAH)",
    degree: "Preparatory Cycle",
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

export const experienceData: Experience[] = [
  {
    company: "ORACLE R&D CENTER",
    position: "Final-Year Project Intern",
    location: "Casablanca, Morocco",
    period: "February 2026 - July 2026",
    responsibilities: [
      "Contributed to the maturity of the OCI Rust SDK by developing typed clients and examples for Limits, Monitoring, Load Balancer, and Work Requests",
      "Implemented cross-cutting features including automatic request identifiers, waiters for asynchronous operations, and retries with exponential backoff",
      "Enhanced the Rust runtime and Java/Mustache code-generation pipeline, validated through unit tests, generator tests, and Cargo builds",
      "Technologies: Rust, Java, OCI, Cargo, Maven, Mustache, Swagger/OpenAPI, REST APIs, unit testing"
    ]
  },
  {
    company: "ALTEN",
    position: "Software Development Intern",
    location: "Fez, Morocco",
    period: "July 2025 - August 2025",
    responsibilities: [
      "Designed an AI-powered IT Service Management platform using a DDD-based, event-driven microservices architecture",
      "Developed NLP-based ticket routing, a RAG chatbot, JWT access control, and a KPI monitoring dashboard",
      "Implemented a complete DevSecOps pipeline covering code quality and security, containerization, cloud provisioning, Kubernetes deployment, and monitoring",
      "Technologies: Java, Spring Boot, Angular, PostgreSQL, Redis, Kafka, Docker, Jenkins, SonarQube, Trivy, Terraform, Azure AKS, Prometheus, Grafana"
    ]
  }
];

export const projectsData: Project[] = [
  {
    title: "Talent Acquisition Management System (TAMS)",
    description: "A secure recruitment management platform for talent requests and automated job posting, built with Spring Boot microservices, DDD, event-driven CQRS, Spring Security JWT, React, and Redux. Services are containerized with Docker and delivered through Jenkins CI/CD.",
    technologies: ["Spring Boot", "JWT", "Microservices", "DDD", "CQRS", "React.js", "Redux", "Docker", "Jenkins"],
    githubUrl: "https://github.com/Achrafchalkha/TAMS-MICROSERVICES",
    imageUrl: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "AI-Powered Intelligent Career Guidance",
    description: "An AI-powered platform providing personalized career recommendations and associated skill paths. Built with a Spring Boot and MongoDB backend, JWT-secured authentication, an interactive Angular frontend, Docker, and cloud deployment.",
    technologies: ["Spring Boot", "Angular", "JWT", "MongoDB", "Spring Security", "Docker"],
    githubUrl: "https://github.com/Achrafchalkha/AI-CAREER-NAVIGATOR",
    imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Social Media Sentiment Analysis",
    description: "A Java-based sentiment analysis application using Hadoop, Spark, and NLP models, with a JavaFX interface for visualizing big-data sentiment insights.",
    technologies: ["Java", "Hadoop", "Spark", "NLP", "JavaFX"],
    githubUrl: "https://github.com/Achrafchalkha/sentiment-analysis-social-media",
    imageUrl: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Unisphere",
    description: "A responsive school administration platform for ENSAH, featuring student registration, grade management, and administrative workflows through a React frontend and Laravel API backend.",
    technologies: ["React.js", "Laravel", "PHP", "REST API", "JavaScript"],
    githubUrl: "https://github.com/Achrafchalkha/E-service",
    imageUrl: "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Collaborative Text Annotation Platform",
    description: "A collaborative web tool for text annotation and dataset management, featuring secure role and task management, an intuitive interface, and optimized performance.",
    technologies: ["Spring Boot", "JWT", "Spring Security", "Thymeleaf"],
    githubUrl: "https://github.com/Achrafchalkha/Web-Based-Collaborative-Annotation-System-with-Task-Assignment",
    imageUrl: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Java", "Rust", "PHP", "JavaScript", "Python", "C++", "C#"]
  },
  { 
    category: "Web Technologies",
    skills: ["HTML5", "CSS3", "Tailwind CSS", "RESTful APIs", "JSON", "GraphQL"]
  },
  { 
    category: "Frameworks & Libraries",
    skills: ["Angular", "Laravel", "React.js", "Next.js", "TypeScript", "Express.js", "Spring Boot", "Spring Security", "Spring Data JPA", "Spring Cloud"]
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Oracle"]
  },
  {
    category: "Java Ecosystem",
    skills: ["Java EE", "Servlet API", "JSP", "Hibernate", "Maven/Gradle", "JPA", "Microservices", "Spring MVC"]
  },
  {
    category: "DevOps & Cloud",
    skills: ["Git", "GitHub", "GitLab", "Docker", "Kubernetes", "JUnit", "Jenkins", "CI/CD", "Linux", "AWS", "Azure", "Terraform", "Prometheus", "Grafana"]
  },
  {
    category: "Architecture & Design",
    skills: ["Microservices", "DDD", "CQRS", "Event-Driven Architecture", "Design Patterns"]
  },
  {
    category: "Message Brokers & Tools",
    skills: ["Apache Kafka", "RabbitMQ", "Postman", "SonarQube", "Trivy", "Jira"]
  }
];

export const certificationsData: Certification[] = [
  {
    title: "ORACLE CLOUD INFRASTRUCTURE 2026 CERTIFIED DEVOPS PROFESSIONAL",
    issuer: "Oracle",
  },
  {
    title: "ORACLE CERTIFIED PROFESSIONAL: JAVA SE 17 DEVELOPER",
    issuer: "Oracle",
    url: "/OCP%20JAVA%2017%20(1).pdf",
  },
  {
    title: "ORACLE CERTIFIED ASSOCIATE, JAVA SE 8 PROGRAMMER",
    issuer: "Oracle",
    url: "/1739293504393.pdf",
  },
  {
    title: "ORACLE CLOUD INFRASTRUCTURE FOUNDATIONS ASSOCIATE",
    issuer: "Oracle",
    url: "/1738178947867.pdf",
  }
];

export const extracurricularData = [
  {
    title: "President – ENSAH CHESS CLUB",
    description: "Organized the first FARAS regional chess tournament, coordinated the team, and ensured effective communication. Developed leadership and event management skills."
  }
];
