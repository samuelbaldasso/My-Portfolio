export const siteConfig = {
  name: "Samuel Baldasso",
  role: "Software Engineer · Java Backend, Full-Stack & Mobile",
  tagline: "4+ years building Java backend microservices, event-driven architectures, and full-stack systems at IBM, CI&T, and NTT DATA.",
  githubUsername: "samuelbaldasso",
  avatarUrl: "https://github.com/samuelbaldasso.png",
  email: "baldassosamuel93@gmail.com",
  location: "Brasil (Remote-ready)",
  availableForWork: true,
  social: {
    github: "https://github.com/samuelbaldasso",
    linkedin: "https://www.linkedin.com/in/samuel-baldasso",
  },
  stack: [
    "Java",
    "Spring Boot",
    "Quarkus",
    "Kafka",
    "React",
    "Next.js",
    "Angular",
    "AWS",
    "Docker",
    "PostgreSQL",
  ],
  about: {
    heading: "About",
    paragraphs: [
      "Software Engineer with 4+ years of experience spanning Java backend, native mobile (Android/Kotlin, Flutter), and front-end (React, Angular) work across IBM, CI&T, and NTT DATA.",
      "Recent focus on Java backend microservices (Spring Boot, Quarkus) and event-driven architectures (Kafka, Transactional Outbox), currently full-stack on a Java + React project. Comfortable with ambiguity and cross-functional collaboration in distributed, remote environments. Fluent in English (C1).",
    ],
  },
  services: [
    {
      title: "Backend & Java microservices",
      description: "APIs and services with Java, Spring Boot, and Quarkus, from high-volume data handling to observability-focused platforms.",
    },
    {
      title: "Event-driven architecture",
      description: "Kafka-based systems, Transactional Outbox pattern, idempotency, and resilience patterns (Resilience4j, circuit breakers).",
    },
    {
      title: "Full-stack Java + React",
      description: "End-to-end delivery combining Java/Spring Boot backends with React and Next.js front-ends.",
    },
    {
      title: "Mobile development",
      description: "Native Android (Kotlin, Jetpack Compose, Clean Architecture) and Flutter apps for corporate and consumer use cases.",
    },
    {
      title: "Technical consulting",
      description: "Architecture review, code review, and refactoring for throughput, latency, and fault tolerance.",
    },
  ],
  contact: {
    heading: "Let's talk",
    description:
      "Have a project in mind or need one-off help? Send me a direct email with the details and I'll get back to you as soon as possible.",
  },
} as const;
