export const siteConfig = {
  name: "Samuel Baldasso",
  role: "Senior Backend Software Engineer",
  specialty: "Java · Distributed Systems · Cloud",
  tagline:
    "I design resilient backend systems and turn complex business rules into software that is clear, observable, and built to evolve.",
  githubUsername: "samuelbaldasso",
  avatarUrl: "https://github.com/samuelbaldasso.png",
  email: "baldassosamuel93@gmail.com",
  location: "Macaé, Rio de Janeiro · Brazil",
  social: {
    github: "https://github.com/samuelbaldasso",
    linkedin: "https://www.linkedin.com/in/samuel-baldasso-java-developer",
  },
  stack: [
    "Java",
    "Spring Boot",
    "Kafka",
    "Go",
    "TypeScript",
    "NestJS",
    "PostgreSQL",
    "Redis",
    "Docker",
    "AWS",
  ],
  stats: [
    { value: "4+", label: "years building software" },
    { value: "06", label: "pinned case studies" },
    { value: "C1", label: "English proficiency" },
  ],
  about: {
    eyebrow: "Profile / 01",
    heading: "Backend engineering with a systems mindset.",
    paragraphs: [
      "Senior Backend Software Engineer at IBM, with experience across Java backend, full-stack and mobile products for global companies including Bradesco, Vivo, Allianz, RD Saúde and AB InBev.",
      "My recent work centers on Java microservices, high-volume data flows, observability and distributed systems. Outside client work, I build hands-on architecture projects to explore consistency, concurrency, messaging and fault tolerance in depth.",
    ],
  },
  services: [
    {
      number: "01",
      title: "Backend systems",
      description:
        "Java and Spring Boot services shaped around explicit domain boundaries, stable APIs and production-minded observability.",
    },
    {
      number: "02",
      title: "Distributed architecture",
      description:
        "Kafka, transactional outbox, idempotency, concurrency control, caching and resilience patterns with documented trade-offs.",
    },
    {
      number: "03",
      title: "API platforms",
      description:
        "Secure REST backends in Java, Go and NestJS, backed by PostgreSQL and designed for clear ownership and maintainability.",
    },
    {
      number: "04",
      title: "Technical evolution",
      description:
        "Architecture reviews, refactoring and delivery improvements focused on throughput, latency, fault tolerance and clean code.",
    },
  ],
  projectDetails: {
    "Java-Banking-Core": {
      displayName: "Banking Ledger Core",
      description:
        "A high-integrity, double-entry ledger exploring immutable records, deterministic locking and reliable event delivery.",
      highlights: ["Java 21", "Spring Boot", "Kafka", "PostgreSQL", "Keycloak"],
    },
    "Java-Subscription-B2C-Service": {
      displayName: "Subscription Platform",
      description:
        "A B2C billing lifecycle built around six distributed-system patterns, from transactional outbox to circuit breakers.",
      highlights: ["Java 17", "Spring Boot", "Kafka", "Redis", "Testcontainers"],
    },
    "Java-Uber-Like-App": {
      displayName: "Courier Delivery Service",
      description:
        "A modular delivery backend with JWT security, courier tracking and real-time updates over WebSockets.",
      highlights: ["Java 17", "Spring Boot", "WebSocket", "PostgreSQL"],
    },
    Springify: {
      displayName: "Springify",
      description:
        "An AI-powered CLI that generates hexagonal Java projects through parallel file generation with Java virtual threads.",
      highlights: ["Java 21", "Hexagonal Architecture", "LLMs", "GraalVM"],
    },
    "Go-Rate-Limiter-Service": {
      displayName: "Go Rate Limiter",
      description:
        "A dependency-free HTTP service implementing per-client token buckets, safe concurrency and graceful shutdown.",
      highlights: ["Go", "Token Bucket", "Concurrency", "Docker"],
    },
    "Node-Nest-Restaurant-Management": {
      displayName: "Restaurant Platform API",
      description:
        "A multi-tenant food-delivery API with ownership-based authorization, order workflows and Google OAuth.",
      highlights: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "OAuth 2.0"],
    },
  },
  contact: {
    eyebrow: "Contact / 04",
    heading: "Let’s build something that holds up.",
    description:
      "For backend engineering, architecture or product work, send me a note with the problem you are trying to solve.",
  },
} as const;

export const pinnedRepositories = [
  "Java-Banking-Core",
  "Java-Subscription-B2C-Service",
  "Java-Uber-Like-App",
  "Springify",
  "Go-Rate-Limiter-Service",
  "Node-Nest-Restaurant-Management",
] as const;
