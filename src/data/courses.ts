export interface Lesson {
  id: string;
  title: string;
  order: number;
  youtubeId: string;
  durationSeconds: number;
  description: string;
}

export interface Section {
  id: string;
  title: string;
  order: number;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice: number;
  thumbnail: string;
  category: string;
  level: string;
  instructor: string;
  enrolledCount: number;
  rating: number;
  reviewCount: number;
  whatYouLearn: string[];
  sections: Section[];
  pastelColor: string;
  isNew?: boolean;
}

export const courses: Course[] = [
  {
    id: "1",
    slug: "java-fundamentals",
    title: "Java Fundamentals",
    description: "Master the fundamentals of Java programming from scratch. Learn object-oriented programming, collections, and data structures to build a solid foundation.",
    shortDescription: "Build a solid Java foundation from scratch",
    price: 199,
    originalPrice: 499,
    thumbnail: "",
    category: "Programming",
    level: "Beginner",
    instructor: "Dr. Sarah Chen",
    enrolledCount: 3240,
    rating: 4.8,
    reviewCount: 456,
    whatYouLearn: ["Core Java syntax and data types", "Object-Oriented Programming principles", "Collections framework", "Basic data structures", "Exception handling"],
    pastelColor: "hsl(239, 84%, 95%)",
    sections: [
      {
        id: "s1-1", title: "Java Basics", order: 1,
        lessons: [
          { id: "l1-1", title: "Introduction to Java", order: 1, youtubeId: "eIrMbAQSU34", durationSeconds: 720, description: "Get started with Java programming" },
          { id: "l1-2", title: "Variables and Data Types", order: 2, youtubeId: "le-URjBhevE", durationSeconds: 900, description: "Learn about variables and data types" },
          { id: "l1-3", title: "Control Flow Statements", order: 3, youtubeId: "ldYLYRNaucM", durationSeconds: 840, description: "Master if-else and loops" },
        ]
      },
      {
        id: "s1-2", title: "OOP Concepts", order: 2,
        lessons: [
          { id: "l1-4", title: "Classes and Objects", order: 1, youtubeId: "IUqKuGNasdM", durationSeconds: 960, description: "Understanding classes and objects" },
          { id: "l1-5", title: "Inheritance & Polymorphism", order: 2, youtubeId: "Zs342ePFvRI", durationSeconds: 1080, description: "Learn inheritance and polymorphism" },
          { id: "l1-6", title: "Encapsulation & Abstraction", order: 3, youtubeId: "xRKd0-uxMHE", durationSeconds: 780, description: "Master encapsulation concepts" },
        ]
      },
      {
        id: "s1-3", title: "Collections", order: 3,
        lessons: [
          { id: "l1-7", title: "ArrayList & LinkedList", order: 1, youtubeId: "1nRj4ALuw7A", durationSeconds: 900, description: "Working with lists" },
          { id: "l1-8", title: "HashMap & TreeMap", order: 2, youtubeId: "H62Jfv1DJlA", durationSeconds: 840, description: "Understanding maps" },
          { id: "l1-9", title: "Sets and Queues", order: 3, youtubeId: "RBSGKlAvoiM", durationSeconds: 720, description: "Using sets and queues" },
        ]
      },
    ]
  },
  {
    id: "2",
    slug: "python-for-beginners",
    title: "Python for Beginners",
    description: "Start your programming journey with Python. Learn from basics to building real projects with hands-on exercises and practical examples.",
    shortDescription: "Your first step into programming",
    price: 299,
    originalPrice: 599,
    thumbnail: "",
    category: "Programming",
    level: "Beginner",
    instructor: "Prof. Alex Kumar",
    enrolledCount: 5120,
    rating: 4.9,
    reviewCount: 892,
    whatYouLearn: ["Python syntax and fundamentals", "Functions and modules", "OOP in Python", "File handling", "Build real projects"],
    pastelColor: "hsl(160, 70%, 92%)",
    isNew: true,
    sections: [
      {
        id: "s2-1", title: "Python Intro", order: 1,
        lessons: [
          { id: "l2-1", title: "Why Python?", order: 1, youtubeId: "kqtD5dpn9C8", durationSeconds: 600, description: "Introduction to Python" },
          { id: "l2-2", title: "Setup & First Program", order: 2, youtubeId: "b093aqAZiPU", durationSeconds: 720, description: "Set up your environment" },
          { id: "l2-3", title: "Variables & Strings", order: 3, youtubeId: "cQT33yu9pY8", durationSeconds: 840, description: "Working with data" },
        ]
      },
      {
        id: "s2-2", title: "Functions & Modules", order: 2,
        lessons: [
          { id: "l2-4", title: "Defining Functions", order: 1, youtubeId: "9Os0o3wzS_I", durationSeconds: 780, description: "Create reusable code" },
          { id: "l2-5", title: "Lambda & Map/Filter", order: 2, youtubeId: "hYzwCsKGRrg", durationSeconds: 660, description: "Functional programming" },
          { id: "l2-6", title: "Working with Modules", order: 3, youtubeId: "1RuMJ53CKds", durationSeconds: 720, description: "Import and use modules" },
        ]
      },
      {
        id: "s2-3", title: "OOP in Python", order: 3,
        lessons: [
          { id: "l2-7", title: "Classes in Python", order: 1, youtubeId: "ZDa-Z5JzLYM", durationSeconds: 900, description: "Object-oriented Python" },
          { id: "l2-8", title: "Inheritance", order: 2, youtubeId: "Cn7AkDb4pIU", durationSeconds: 840, description: "Extend your classes" },
          { id: "l2-9", title: "Mini Project", order: 3, youtubeId: "8ext9G7xspg", durationSeconds: 1200, description: "Build something real" },
        ]
      },
    ]
  },
  {
    id: "3",
    slug: "machine-learning-a-z",
    title: "Machine Learning A–Z",
    description: "Comprehensive machine learning course covering math foundations, Scikit-learn, and deep learning with real-world datasets and projects.",
    shortDescription: "From math to deep learning mastery",
    price: 499,
    originalPrice: 999,
    thumbnail: "",
    category: "Data Science",
    level: "Intermediate",
    instructor: "Dr. Priya Sharma",
    enrolledCount: 2890,
    rating: 4.7,
    reviewCount: 340,
    whatYouLearn: ["Linear algebra for ML", "Scikit-learn essentials", "Neural networks basics", "Model evaluation", "Real-world projects"],
    pastelColor: "hsl(280, 70%, 93%)",
    sections: [
      {
        id: "s3-1", title: "Math Foundations", order: 1,
        lessons: [
          { id: "l3-1", title: "Linear Algebra Basics", order: 1, youtubeId: "fNk_zzaMoSs", durationSeconds: 1200, description: "Math for ML" },
          { id: "l3-2", title: "Statistics Refresher", order: 2, youtubeId: "xxpc-HPKN28", durationSeconds: 960, description: "Statistics fundamentals" },
          { id: "l3-3", title: "Calculus for ML", order: 3, youtubeId: "WUvTyaaNkzM", durationSeconds: 1080, description: "Essential calculus" },
        ]
      },
      {
        id: "s3-2", title: "Sklearn Essentials", order: 2,
        lessons: [
          { id: "l3-4", title: "Regression Models", order: 1, youtubeId: "nk2CQITm_eo", durationSeconds: 900, description: "Linear & logistic regression" },
          { id: "l3-5", title: "Classification", order: 2, youtubeId: "TJveOYsK6MY", durationSeconds: 1020, description: "Classification algorithms" },
          { id: "l3-6", title: "Clustering", order: 3, youtubeId: "4b5d3muPQmA", durationSeconds: 840, description: "Unsupervised learning" },
        ]
      },
      {
        id: "s3-3", title: "Deep Learning", order: 3,
        lessons: [
          { id: "l3-7", title: "Neural Networks Intro", order: 1, youtubeId: "aircAruvnKk", durationSeconds: 1200, description: "Intro to neural nets" },
          { id: "l3-8", title: "Building with TensorFlow", order: 2, youtubeId: "tPYj3fFJGjk", durationSeconds: 1080, description: "TensorFlow basics" },
          { id: "l3-9", title: "CNN Project", order: 3, youtubeId: "YRhxdVk_sIs", durationSeconds: 1320, description: "Image classification project" },
        ]
      },
    ]
  },
  {
    id: "4",
    slug: "web-dev-bootcamp",
    title: "Web Dev Bootcamp",
    description: "Full-stack web development from HTML/CSS to React and Node.js. Build real projects and launch your web dev career.",
    shortDescription: "Become a full-stack web developer",
    price: 399,
    originalPrice: 799,
    thumbnail: "",
    category: "Web Development",
    level: "Beginner",
    instructor: "Angela Martinez",
    enrolledCount: 7650,
    rating: 4.9,
    reviewCount: 1230,
    whatYouLearn: ["HTML5 & CSS3", "JavaScript ES6+", "React fundamentals", "Node.js & Express", "Deploy to production"],
    pastelColor: "hsl(12, 80%, 93%)",
    sections: [
      {
        id: "s4-1", title: "HTML & CSS", order: 1,
        lessons: [
          { id: "l4-1", title: "HTML Fundamentals", order: 1, youtubeId: "UB1O30fR-EE", durationSeconds: 720, description: "HTML basics" },
          { id: "l4-2", title: "CSS Styling", order: 2, youtubeId: "1PnVor36_40", durationSeconds: 900, description: "Style your pages" },
          { id: "l4-3", title: "Responsive Design", order: 3, youtubeId: "srvUrASNj0s", durationSeconds: 840, description: "Mobile-first design" },
        ]
      },
      {
        id: "s4-2", title: "JavaScript", order: 2,
        lessons: [
          { id: "l4-4", title: "JS Fundamentals", order: 1, youtubeId: "PkZNo7MFNFg", durationSeconds: 1080, description: "JavaScript basics" },
          { id: "l4-5", title: "DOM Manipulation", order: 2, youtubeId: "0ik6X4DJKCc", durationSeconds: 960, description: "Interact with pages" },
          { id: "l4-6", title: "Async JavaScript", order: 3, youtubeId: "PoRJizFvM7s", durationSeconds: 900, description: "Promises and async/await" },
        ]
      },
      {
        id: "s4-3", title: "React", order: 3,
        lessons: [
          { id: "l4-7", title: "React Basics", order: 1, youtubeId: "Ke90Tje7VS0", durationSeconds: 1200, description: "Get started with React" },
          { id: "l4-8", title: "State & Props", order: 2, youtubeId: "dpw9EHDh2bM", durationSeconds: 1020, description: "Managing data in React" },
          { id: "l4-9", title: "Full Project", order: 3, youtubeId: "b9eMGE7QtTk", durationSeconds: 1500, description: "Build a complete app" },
        ]
      },
    ]
  },
  {
    id: "5",
    slug: "data-structures",
    title: "Data Structures & Algorithms",
    description: "Master essential data structures and algorithms. From arrays to graphs, with hands-on coding challenges and interview prep.",
    shortDescription: "Ace your coding interviews",
    price: 249,
    originalPrice: 499,
    thumbnail: "",
    category: "Computer Science",
    level: "Intermediate",
    instructor: "Prof. Raj Patel",
    enrolledCount: 4100,
    rating: 4.8,
    reviewCount: 567,
    whatYouLearn: ["Arrays & linked lists", "Trees & BSTs", "Graphs & traversals", "Dynamic programming", "Interview strategies"],
    pastelColor: "hsl(38, 80%, 92%)",
    sections: [
      {
        id: "s5-1", title: "Arrays & Lists", order: 1,
        lessons: [
          { id: "l5-1", title: "Array Operations", order: 1, youtubeId: "QJNwK2uJyGs", durationSeconds: 780, description: "Master array operations" },
          { id: "l5-2", title: "Linked Lists", order: 2, youtubeId: "njTh_OwMljA", durationSeconds: 900, description: "Singly and doubly linked lists" },
          { id: "l5-3", title: "Stacks & Queues", order: 3, youtubeId: "wjI1WNcIntg", durationSeconds: 840, description: "LIFO and FIFO structures" },
        ]
      },
      {
        id: "s5-2", title: "Trees & Graphs", order: 2,
        lessons: [
          { id: "l5-4", title: "Binary Trees", order: 1, youtubeId: "fAAZixBzIAI", durationSeconds: 960, description: "Tree fundamentals" },
          { id: "l5-5", title: "Graph Representations", order: 2, youtubeId: "tWVWeAqZ0WU", durationSeconds: 1020, description: "Adjacency lists and matrices" },
          { id: "l5-6", title: "BFS & DFS", order: 3, youtubeId: "pcKY4hjDrxk", durationSeconds: 1080, description: "Graph traversal algorithms" },
        ]
      },
      {
        id: "s5-3", title: "Dynamic Programming", order: 3,
        lessons: [
          { id: "l5-7", title: "DP Introduction", order: 1, youtubeId: "oBt53YbR9Kk", durationSeconds: 1200, description: "Understanding DP" },
          { id: "l5-8", title: "Classic DP Problems", order: 2, youtubeId: "nqowUJzG-iM", durationSeconds: 1080, description: "Solve classic problems" },
          { id: "l5-9", title: "DP Optimization", order: 3, youtubeId: "OQ5jsbhAv_M", durationSeconds: 960, description: "Advanced techniques" },
        ]
      },
    ]
  },
  {
    id: "6",
    slug: "system-design",
    title: "System Design Masterclass",
    description: "Learn to design scalable systems. Cover low-level and high-level design, database choices, and API architecture used by top companies.",
    shortDescription: "Design systems like a senior engineer",
    price: 599,
    originalPrice: 1199,
    thumbnail: "",
    category: "Software Engineering",
    level: "Advanced",
    instructor: "Vikram Singh",
    enrolledCount: 1980,
    rating: 4.7,
    reviewCount: 234,
    whatYouLearn: ["Low-level design patterns", "High-level architecture", "Database design choices", "API design best practices", "Real system case studies"],
    pastelColor: "hsl(200, 70%, 92%)",
    sections: [
      {
        id: "s6-1", title: "LLD Patterns", order: 1,
        lessons: [
          { id: "l6-1", title: "SOLID Principles", order: 1, youtubeId: "kF7rQmSRlq0", durationSeconds: 900, description: "Design principles" },
          { id: "l6-2", title: "Design Patterns", order: 2, youtubeId: "v9ejT8FO-7I", durationSeconds: 1080, description: "Common patterns" },
          { id: "l6-3", title: "LLD Case Study", order: 3, youtubeId: "B3zrIwz_t4M", durationSeconds: 1200, description: "Parking lot design" },
        ]
      },
      {
        id: "s6-2", title: "HLD Concepts", order: 2,
        lessons: [
          { id: "l6-4", title: "Scaling Fundamentals", order: 1, youtubeId: "Y-Gl4HEyeUQ", durationSeconds: 1020, description: "Horizontal vs vertical" },
          { id: "l6-5", title: "Load Balancing", order: 2, youtubeId: "K0Ta65OqQkY", durationSeconds: 960, description: "Distribute traffic" },
          { id: "l6-6", title: "Caching Strategies", order: 3, youtubeId: "U3RkDLtS7uY", durationSeconds: 1080, description: "Speed up systems" },
        ]
      },
      {
        id: "s6-3", title: "DB & APIs", order: 3,
        lessons: [
          { id: "l6-7", title: "SQL vs NoSQL", order: 1, youtubeId: "ZS_kXvOeQ5Y", durationSeconds: 900, description: "Choose the right DB" },
          { id: "l6-8", title: "REST API Design", order: 2, youtubeId: "fgTGPa-fXoE", durationSeconds: 840, description: "Design great APIs" },
          { id: "l6-9", title: "System Design Interview", order: 3, youtubeId: "UzLMhqg3_Wc", durationSeconds: 1500, description: "Ace the interview" },
        ]
      },
    ]
  },
  {
    id: "7",
    slug: "react-advanced",
    title: "Advanced React Patterns",
    description: "Master advanced React concepts including hooks, context, performance optimization, and modern architectural patterns for production apps.",
    shortDescription: "Level up your React skills",
    price: 449,
    originalPrice: 899,
    thumbnail: "",
    category: "Web Development",
    level: "Advanced",
    instructor: "Angela Martinez",
    enrolledCount: 2340,
    rating: 4.8,
    reviewCount: 312,
    whatYouLearn: ["Custom hooks patterns", "Context & state management", "Performance optimization", "Server components", "Testing strategies"],
    pastelColor: "hsl(195, 75%, 92%)",
    isNew: true,
    sections: [
      {
        id: "s7-1", title: "Advanced Hooks", order: 1,
        lessons: [
          { id: "l7-1", title: "useReducer Deep Dive", order: 1, youtubeId: "kK_Wqx3RnHk", durationSeconds: 1020, description: "Master useReducer" },
          { id: "l7-2", title: "Custom Hooks", order: 2, youtubeId: "J-g9ZJha8FE", durationSeconds: 900, description: "Build reusable hooks" },
          { id: "l7-3", title: "useRef & Forwarding Refs", order: 3, youtubeId: "t2ypzz6gJm0", durationSeconds: 840, description: "DOM refs and forwarding" },
        ]
      },
      {
        id: "s7-2", title: "State Management", order: 2,
        lessons: [
          { id: "l7-4", title: "Context API Patterns", order: 1, youtubeId: "5LrDIWkK_Bc", durationSeconds: 960, description: "Advanced context usage" },
          { id: "l7-5", title: "Zustand & Jotai", order: 2, youtubeId: "KEc0LLQjyfQ", durationSeconds: 1080, description: "Modern state libraries" },
          { id: "l7-6", title: "React Query", order: 3, youtubeId: "VtWkSCZX0Ec", durationSeconds: 1200, description: "Server state management" },
        ]
      },
      {
        id: "s7-3", title: "Performance", order: 3,
        lessons: [
          { id: "l7-7", title: "Memoization Strategies", order: 1, youtubeId: "DEPwA3mv_R8", durationSeconds: 900, description: "useMemo and useCallback" },
          { id: "l7-8", title: "Code Splitting", order: 2, youtubeId: "JU6sl_yyZqs", durationSeconds: 780, description: "Lazy loading components" },
          { id: "l7-9", title: "React Profiler", order: 3, youtubeId: "00RoZflFE34", durationSeconds: 840, description: "Debug performance" },
        ]
      },
    ]
  },
  {
    id: "8",
    slug: "docker-kubernetes",
    title: "Docker & Kubernetes",
    description: "Learn containerization with Docker and orchestration with Kubernetes. Deploy microservices at scale with hands-on projects.",
    shortDescription: "Master containers & orchestration",
    price: 549,
    originalPrice: 1099,
    thumbnail: "",
    category: "Cloud & DevOps",
    level: "Intermediate",
    instructor: "Vikram Singh",
    enrolledCount: 1560,
    rating: 4.7,
    reviewCount: 198,
    whatYouLearn: ["Docker fundamentals", "Docker Compose", "Kubernetes architecture", "Helm charts", "CI/CD pipelines"],
    pastelColor: "hsl(210, 75%, 92%)",
    sections: [
      {
        id: "s8-1", title: "Docker Basics", order: 1,
        lessons: [
          { id: "l8-1", title: "What is Docker?", order: 1, youtubeId: "31ieHmcTUOk", durationSeconds: 900, description: "Introduction to containers" },
          { id: "l8-2", title: "Dockerfiles", order: 2, youtubeId: "WmcdMiyqfZs", durationSeconds: 1020, description: "Build custom images" },
          { id: "l8-3", title: "Docker Compose", order: 3, youtubeId: "HG6yIjZapSA", durationSeconds: 1080, description: "Multi-container apps" },
        ]
      },
      {
        id: "s8-2", title: "Kubernetes Core", order: 2,
        lessons: [
          { id: "l8-4", title: "K8s Architecture", order: 1, youtubeId: "X48VuDVv0do", durationSeconds: 1200, description: "Kubernetes overview" },
          { id: "l8-5", title: "Pods & Deployments", order: 2, youtubeId: "s_o8dwzRlu4", durationSeconds: 1080, description: "Core K8s objects" },
          { id: "l8-6", title: "Services & Networking", order: 3, youtubeId: "T4Z7visMM4E", durationSeconds: 960, description: "K8s networking" },
        ]
      },
      {
        id: "s8-3", title: "Production K8s", order: 3,
        lessons: [
          { id: "l8-7", title: "Helm Charts", order: 1, youtubeId: "fy8SHvNZGeE", durationSeconds: 900, description: "Package management" },
          { id: "l8-8", title: "CI/CD with K8s", order: 2, youtubeId: "wEDRfAz6_Uw", durationSeconds: 1080, description: "Automated deployments" },
          { id: "l8-9", title: "Monitoring & Logging", order: 3, youtubeId: "QoDqxm7ybLc", durationSeconds: 1020, description: "Observability stack" },
        ]
      },
    ]
  },
  {
    id: "9",
    slug: "cybersecurity-fundamentals",
    title: "Cybersecurity Fundamentals",
    description: "Learn the essentials of cybersecurity including network security, ethical hacking, cryptography, and security best practices.",
    shortDescription: "Protect systems & networks",
    price: 399,
    originalPrice: 799,
    thumbnail: "",
    category: "Cybersecurity",
    level: "Beginner",
    instructor: "Dr. Sarah Chen",
    enrolledCount: 1890,
    rating: 4.6,
    reviewCount: 267,
    whatYouLearn: ["Network security basics", "Ethical hacking intro", "Cryptography fundamentals", "Web app security", "Security best practices"],
    pastelColor: "hsl(0, 70%, 93%)",
    sections: [
      {
        id: "s9-1", title: "Security Basics", order: 1,
        lessons: [
          { id: "l9-1", title: "Intro to Cybersecurity", order: 1, youtubeId: "z5nc9MDbvkw", durationSeconds: 780, description: "Security landscape overview" },
          { id: "l9-2", title: "Network Security", order: 2, youtubeId: "E03gh1huvW4", durationSeconds: 960, description: "Protecting networks" },
          { id: "l9-3", title: "Cryptography 101", order: 3, youtubeId: "jhXCTbFnK8o", durationSeconds: 1080, description: "Encryption basics" },
        ]
      },
      {
        id: "s9-2", title: "Ethical Hacking", order: 2,
        lessons: [
          { id: "l9-4", title: "Penetration Testing", order: 1, youtubeId: "3Kq1MIfTWCE", durationSeconds: 1200, description: "Pen testing methodology" },
          { id: "l9-5", title: "Web App Vulnerabilities", order: 2, youtubeId: "WtHnT73NaaQ", durationSeconds: 1020, description: "OWASP Top 10" },
          { id: "l9-6", title: "Social Engineering", order: 3, youtubeId: "lc7scxvKQOo", durationSeconds: 840, description: "Human factor attacks" },
        ]
      },
      {
        id: "s9-3", title: "Defense Strategies", order: 3,
        lessons: [
          { id: "l9-7", title: "Firewalls & IDS", order: 1, youtubeId: "kDEX1HXybrU", durationSeconds: 900, description: "Defense tools" },
          { id: "l9-8", title: "Incident Response", order: 2, youtubeId: "n-USNMclpJE", durationSeconds: 1020, description: "Handling breaches" },
          { id: "l9-9", title: "Security Audit", order: 3, youtubeId: "pL9q2lOZ1Fg", durationSeconds: 960, description: "Auditing systems" },
        ]
      },
    ]
  },
  {
    id: "10",
    slug: "flutter-mobile-dev",
    title: "Flutter Mobile Development",
    description: "Build beautiful, natively compiled mobile apps for iOS and Android from a single codebase using Flutter and Dart.",
    shortDescription: "Cross-platform mobile apps",
    price: 449,
    originalPrice: 899,
    thumbnail: "",
    category: "Mobile Development",
    level: "Intermediate",
    instructor: "Prof. Alex Kumar",
    enrolledCount: 2100,
    rating: 4.8,
    reviewCount: 345,
    whatYouLearn: ["Dart programming language", "Flutter widgets", "State management", "API integration", "App store deployment"],
    pastelColor: "hsl(200, 80%, 92%)",
    isNew: true,
    sections: [
      {
        id: "s10-1", title: "Dart & Flutter Basics", order: 1,
        lessons: [
          { id: "l10-1", title: "Dart Language Tour", order: 1, youtubeId: "Ej_Pcr4uC2Q", durationSeconds: 900, description: "Learn Dart basics" },
          { id: "l10-2", title: "Flutter Setup", order: 2, youtubeId: "1ukSR1GRtMU", durationSeconds: 720, description: "Set up Flutter environment" },
          { id: "l10-3", title: "Widgets Deep Dive", order: 3, youtubeId: "bKueYVtV0eA", durationSeconds: 1080, description: "Understanding widgets" },
        ]
      },
      {
        id: "s10-2", title: "Advanced Flutter", order: 2,
        lessons: [
          { id: "l10-4", title: "State Management", order: 1, youtubeId: "3tm-R7ymwhc", durationSeconds: 1200, description: "Provider & Riverpod" },
          { id: "l10-5", title: "Navigation & Routing", order: 2, youtubeId: "nyvwx7o277U", durationSeconds: 960, description: "App navigation" },
          { id: "l10-6", title: "HTTP & APIs", order: 3, youtubeId: "c09XiwOZKsI", durationSeconds: 1020, description: "Fetch data from APIs" },
        ]
      },
      {
        id: "s10-3", title: "Production App", order: 3,
        lessons: [
          { id: "l10-7", title: "Firebase Integration", order: 1, youtubeId: "sfA3NWDBPZ4", durationSeconds: 1080, description: "Backend with Firebase" },
          { id: "l10-8", title: "Animations", order: 2, youtubeId: "IVTjpW3W33s", durationSeconds: 900, description: "Beautiful animations" },
          { id: "l10-9", title: "Deploy to Stores", order: 3, youtubeId: "g0GNuoCOtaQ", durationSeconds: 1200, description: "Publish your app" },
        ]
      },
    ]
  },
  {
    id: "11", slug: "typescript-mastery", title: "TypeScript Mastery",
    description: "Go beyond JavaScript with TypeScript. Learn type systems, generics, decorators, and build robust applications.",
    shortDescription: "Write safer, scalable JavaScript",
    price: 349, originalPrice: 699, thumbnail: "", category: "Programming", level: "Intermediate",
    instructor: "Angela Martinez", enrolledCount: 3100, rating: 4.8, reviewCount: 410,
    whatYouLearn: ["TypeScript type system", "Generics & utility types", "Decorators", "Module systems", "Real-world patterns"],
    pastelColor: "hsl(220, 75%, 92%)",
    sections: [
      { id: "s11-1", title: "TS Fundamentals", order: 1, lessons: [
        { id: "l11-1", title: "Why TypeScript?", order: 1, youtubeId: "zQnBQ4tB3ZA", durationSeconds: 780, description: "TypeScript intro" },
        { id: "l11-2", title: "Types & Interfaces", order: 2, youtubeId: "xkpcNolC270", durationSeconds: 900, description: "Core type system" },
        { id: "l11-3", title: "Generics", order: 3, youtubeId: "nViEqpgwxHE", durationSeconds: 1020, description: "Generic programming" },
      ]},
      { id: "s11-2", title: "Advanced TS", order: 2, lessons: [
        { id: "l11-4", title: "Utility Types", order: 1, youtubeId: "jjMbPt_H3RQ", durationSeconds: 840, description: "Built-in utility types" },
        { id: "l11-5", title: "Decorators", order: 2, youtubeId: "O6A-u_FoEX8", durationSeconds: 960, description: "TypeScript decorators" },
        { id: "l11-6", title: "Project Setup", order: 3, youtubeId: "H91aqUHn8sE", durationSeconds: 1080, description: "Production TS config" },
      ]},
    ]
  },
  {
    id: "12", slug: "nodejs-backend", title: "Node.js Backend Development",
    description: "Build scalable backend services with Node.js, Express, and MongoDB. Learn REST APIs, authentication, and deployment.",
    shortDescription: "Build powerful backend APIs",
    price: 449, originalPrice: 899, thumbnail: "", category: "Web Development", level: "Intermediate",
    instructor: "Vikram Singh", enrolledCount: 4200, rating: 4.7, reviewCount: 520,
    whatYouLearn: ["Node.js fundamentals", "Express.js framework", "MongoDB & Mongoose", "JWT authentication", "REST API design"],
    pastelColor: "hsl(140, 65%, 92%)",
    sections: [
      { id: "s12-1", title: "Node Basics", order: 1, lessons: [
        { id: "l12-1", title: "Node.js Introduction", order: 1, youtubeId: "TlB_eWDSMt4", durationSeconds: 900, description: "Getting started with Node" },
        { id: "l12-2", title: "Express Framework", order: 2, youtubeId: "SccSCuHhOw0", durationSeconds: 1080, description: "Build with Express" },
        { id: "l12-3", title: "REST API Design", order: 3, youtubeId: "-MTSQjw5DrM", durationSeconds: 960, description: "Design RESTful APIs" },
      ]},
      { id: "s12-2", title: "Database & Auth", order: 2, lessons: [
        { id: "l12-4", title: "MongoDB Essentials", order: 1, youtubeId: "ofme2o29ngU", durationSeconds: 1200, description: "NoSQL with MongoDB" },
        { id: "l12-5", title: "Authentication with JWT", order: 2, youtubeId: "mbsmsi7l3r4", durationSeconds: 1080, description: "Secure your API" },
        { id: "l12-6", title: "Deploy to Production", order: 3, youtubeId: "l134cBAJCuc", durationSeconds: 900, description: "Deploy Node apps" },
      ]},
    ]
  },
  {
    id: "13", slug: "git-github-mastery", title: "Git & GitHub Mastery",
    description: "Master version control with Git and collaboration with GitHub. From basic commits to advanced branching strategies.",
    shortDescription: "Version control like a pro",
    price: 149, originalPrice: 399, thumbnail: "", category: "Software Engineering", level: "Beginner",
    instructor: "Prof. Alex Kumar", enrolledCount: 5600, rating: 4.9, reviewCount: 780,
    whatYouLearn: ["Git fundamentals", "Branching & merging", "GitHub workflows", "Pull requests", "CI/CD basics"],
    pastelColor: "hsl(25, 75%, 92%)",
    sections: [
      { id: "s13-1", title: "Git Basics", order: 1, lessons: [
        { id: "l13-1", title: "Git Introduction", order: 1, youtubeId: "RGOj5yH7evk", durationSeconds: 900, description: "Start with Git" },
        { id: "l13-2", title: "Branching & Merging", order: 2, youtubeId: "Q1kHG842HoI", durationSeconds: 840, description: "Work with branches" },
        { id: "l13-3", title: "GitHub Collaboration", order: 3, youtubeId: "iv8rSLsi1xo", durationSeconds: 1020, description: "Collaborate on GitHub" },
      ]},
      { id: "s13-2", title: "Advanced Git", order: 2, lessons: [
        { id: "l13-4", title: "Rebase & Cherry Pick", order: 1, youtubeId: "CRlGDDprdOQ", durationSeconds: 960, description: "Advanced operations" },
        { id: "l13-5", title: "GitHub Actions", order: 2, youtubeId: "R8_veQiYBjI", durationSeconds: 1080, description: "Automate workflows" },
        { id: "l13-6", title: "Git Best Practices", order: 3, youtubeId: "Uszj_k0DGsg", durationSeconds: 780, description: "Pro Git tips" },
      ]},
    ]
  },
  {
    id: "14", slug: "sql-database-design", title: "SQL & Database Design",
    description: "Learn SQL from scratch and master database design. Cover queries, joins, indexing, normalization, and performance tuning.",
    shortDescription: "Master relational databases",
    price: 299, originalPrice: 599, thumbnail: "", category: "Data Science", level: "Beginner",
    instructor: "Dr. Priya Sharma", enrolledCount: 3800, rating: 4.7, reviewCount: 490,
    whatYouLearn: ["SQL syntax & queries", "Joins & subqueries", "Database normalization", "Indexing strategies", "Performance tuning"],
    pastelColor: "hsl(45, 75%, 92%)",
    sections: [
      { id: "s14-1", title: "SQL Basics", order: 1, lessons: [
        { id: "l14-1", title: "SQL Introduction", order: 1, youtubeId: "HXV3zeQKqGY", durationSeconds: 1080, description: "Start with SQL" },
        { id: "l14-2", title: "SELECT & WHERE", order: 2, youtubeId: "9Pzj7Aj25lw", durationSeconds: 900, description: "Query fundamentals" },
        { id: "l14-3", title: "JOINs Explained", order: 3, youtubeId: "9yeOJ0ZMUYw", durationSeconds: 960, description: "Master SQL joins" },
      ]},
      { id: "s14-2", title: "Advanced SQL", order: 2, lessons: [
        { id: "l14-4", title: "Subqueries & CTEs", order: 1, youtubeId: "m1KcNV-Zhmc", durationSeconds: 1020, description: "Complex queries" },
        { id: "l14-5", title: "Database Design", order: 2, youtubeId: "ztHopE5Wnpc", durationSeconds: 1200, description: "Schema design" },
        { id: "l14-6", title: "Performance Tuning", order: 3, youtubeId: "BHwzDmr6d7s", durationSeconds: 900, description: "Optimize queries" },
      ]},
    ]
  },
  {
    id: "15", slug: "aws-cloud-practitioner", title: "AWS Cloud Practitioner",
    description: "Prepare for the AWS Cloud Practitioner certification. Learn cloud concepts, AWS services, pricing, and security.",
    shortDescription: "Start your cloud career with AWS",
    price: 399, originalPrice: 799, thumbnail: "", category: "Cloud & DevOps", level: "Beginner",
    instructor: "Vikram Singh", enrolledCount: 2900, rating: 4.8, reviewCount: 380,
    whatYouLearn: ["Cloud computing concepts", "AWS core services", "Security & compliance", "Pricing models", "Exam preparation"],
    pastelColor: "hsl(32, 80%, 92%)", isNew: true,
    sections: [
      { id: "s15-1", title: "Cloud Fundamentals", order: 1, lessons: [
        { id: "l15-1", title: "What is Cloud?", order: 1, youtubeId: "3hLmDS179YE", durationSeconds: 900, description: "Cloud computing intro" },
        { id: "l15-2", title: "AWS Overview", order: 2, youtubeId: "ulprqHHWlng", durationSeconds: 1080, description: "AWS services tour" },
        { id: "l15-3", title: "IAM & Security", order: 3, youtubeId: "iF9fs8Rw4Uo", durationSeconds: 960, description: "Identity management" },
      ]},
      { id: "s15-2", title: "Core Services", order: 2, lessons: [
        { id: "l15-4", title: "EC2 & S3", order: 1, youtubeId: "lZMkgOMYYIg", durationSeconds: 1200, description: "Compute and storage" },
        { id: "l15-5", title: "RDS & DynamoDB", order: 2, youtubeId: "AcM7-eg3gPs", durationSeconds: 1020, description: "Database services" },
        { id: "l15-6", title: "Lambda & API Gateway", order: 3, youtubeId: "eOBq__h4OJ4", durationSeconds: 960, description: "Serverless computing" },
      ]},
    ]
  },
  {
    id: "16", slug: "golang-programming", title: "Go Programming Language",
    description: "Learn Go (Golang) from scratch. Build concurrent, efficient applications with Go's unique approach to programming.",
    shortDescription: "Fast, concurrent backend apps",
    price: 349, originalPrice: 699, thumbnail: "", category: "Programming", level: "Intermediate",
    instructor: "Dr. Sarah Chen", enrolledCount: 1800, rating: 4.7, reviewCount: 240,
    whatYouLearn: ["Go syntax & basics", "Goroutines & channels", "Error handling", "HTTP servers", "Concurrent patterns"],
    pastelColor: "hsl(185, 70%, 92%)",
    sections: [
      { id: "s16-1", title: "Go Basics", order: 1, lessons: [
        { id: "l16-1", title: "Go Introduction", order: 1, youtubeId: "un6ZyFkqFKo", durationSeconds: 960, description: "Getting started with Go" },
        { id: "l16-2", title: "Types & Structs", order: 2, youtubeId: "YS4e4q9oBaU", durationSeconds: 840, description: "Go type system" },
        { id: "l16-3", title: "Concurrency", order: 3, youtubeId: "LvgVSSpwND8", durationSeconds: 1200, description: "Goroutines and channels" },
      ]},
      { id: "s16-2", title: "Go in Practice", order: 2, lessons: [
        { id: "l16-4", title: "Building REST APIs", order: 1, youtubeId: "jFfo23yIWac", durationSeconds: 1080, description: "HTTP servers in Go" },
        { id: "l16-5", title: "Testing in Go", order: 2, youtubeId: "FjkSJ1iXKpg", durationSeconds: 900, description: "Write tests" },
        { id: "l16-6", title: "Go Microservices", order: 3, youtubeId: "VzBGi_n65iU", durationSeconds: 1200, description: "Build microservices" },
      ]},
    ]
  },
  {
    id: "17", slug: "rust-programming", title: "Rust Programming",
    description: "Master Rust, the most loved programming language. Learn ownership, borrowing, lifetimes, and systems programming.",
    shortDescription: "Safe systems programming",
    price: 449, originalPrice: 899, thumbnail: "", category: "Programming", level: "Advanced",
    instructor: "Prof. Raj Patel", enrolledCount: 1400, rating: 4.9, reviewCount: 190,
    whatYouLearn: ["Ownership & borrowing", "Lifetimes", "Pattern matching", "Error handling", "Async Rust"],
    pastelColor: "hsl(15, 70%, 92%)",
    sections: [
      { id: "s17-1", title: "Rust Foundations", order: 1, lessons: [
        { id: "l17-1", title: "Why Rust?", order: 1, youtubeId: "5C_HPTJg5ek", durationSeconds: 780, description: "Rust overview" },
        { id: "l17-2", title: "Ownership System", order: 2, youtubeId: "VFIOSWy93po", durationSeconds: 1080, description: "Rust's key concept" },
        { id: "l17-3", title: "Structs & Enums", order: 3, youtubeId: "n3bPhdiJm9I", durationSeconds: 960, description: "Data structures in Rust" },
      ]},
      { id: "s17-2", title: "Advanced Rust", order: 2, lessons: [
        { id: "l17-4", title: "Error Handling", order: 1, youtubeId: "wM6o70NAWUI", durationSeconds: 900, description: "Result and Option" },
        { id: "l17-5", title: "Traits & Generics", order: 2, youtubeId: "T0Xflr4E_Gw", durationSeconds: 1020, description: "Polymorphism in Rust" },
        { id: "l17-6", title: "Async Rust", order: 3, youtubeId: "K8LNPYNvT-U", durationSeconds: 1200, description: "Asynchronous programming" },
      ]},
    ]
  },
  {
    id: "18", slug: "deep-learning-pytorch", title: "Deep Learning with PyTorch",
    description: "Build neural networks with PyTorch. Cover CNNs, RNNs, GANs, transformers, and deploy models to production.",
    shortDescription: "Neural networks from scratch",
    price: 549, originalPrice: 1099, thumbnail: "", category: "Data Science", level: "Advanced",
    instructor: "Dr. Priya Sharma", enrolledCount: 2200, rating: 4.8, reviewCount: 310,
    whatYouLearn: ["PyTorch tensors & autograd", "CNNs for vision", "RNNs & LSTMs", "Transfer learning", "Model deployment"],
    pastelColor: "hsl(350, 70%, 93%)", isNew: true,
    sections: [
      { id: "s18-1", title: "PyTorch Basics", order: 1, lessons: [
        { id: "l18-1", title: "PyTorch Introduction", order: 1, youtubeId: "c36lUUr864M", durationSeconds: 1080, description: "Getting started" },
        { id: "l18-2", title: "Tensors & Autograd", order: 2, youtubeId: "exaWOE8jvy8", durationSeconds: 960, description: "Core building blocks" },
        { id: "l18-3", title: "Building Neural Nets", order: 3, youtubeId: "oPhxf2fXHkQ", durationSeconds: 1200, description: "Your first neural network" },
      ]},
      { id: "s18-2", title: "Advanced Models", order: 2, lessons: [
        { id: "l18-4", title: "CNNs for Images", order: 1, youtubeId: "pDdP0TFzsoQ", durationSeconds: 1200, description: "Convolutional networks" },
        { id: "l18-5", title: "RNNs & LSTMs", order: 2, youtubeId: "LHXXI4-IEns", durationSeconds: 1080, description: "Sequence models" },
        { id: "l18-6", title: "Transfer Learning", order: 3, youtubeId: "yqvW1bGk_Zs", durationSeconds: 960, description: "Leverage pretrained models" },
      ]},
    ]
  },
  {
    id: "19", slug: "css-animations", title: "CSS Animations & Effects",
    description: "Create stunning web animations with CSS. Learn transitions, keyframes, transforms, and modern animation techniques.",
    shortDescription: "Beautiful web animations",
    price: 199, originalPrice: 449, thumbnail: "", category: "Web Development", level: "Beginner",
    instructor: "Angela Martinez", enrolledCount: 2700, rating: 4.6, reviewCount: 350,
    whatYouLearn: ["CSS transitions", "Keyframe animations", "3D transforms", "SVG animations", "Performance optimization"],
    pastelColor: "hsl(300, 65%, 93%)",
    sections: [
      { id: "s19-1", title: "Animation Basics", order: 1, lessons: [
        { id: "l19-1", title: "CSS Transitions", order: 1, youtubeId: "Nloq6uzF8RQ", durationSeconds: 720, description: "Smooth transitions" },
        { id: "l19-2", title: "Keyframe Animations", order: 2, youtubeId: "f1WMjDx4snI", durationSeconds: 900, description: "Complex animations" },
        { id: "l19-3", title: "Transforms & 3D", order: 3, youtubeId: "rzD-cPhq02E", durationSeconds: 840, description: "3D CSS effects" },
      ]},
      { id: "s19-2", title: "Advanced Effects", order: 2, lessons: [
        { id: "l19-4", title: "SVG Animations", order: 1, youtubeId: "gWai7fYp9PY", durationSeconds: 1020, description: "Animate SVGs" },
        { id: "l19-5", title: "Scroll Animations", order: 2, youtubeId: "T33NN_pPeNI", durationSeconds: 960, description: "Scroll-triggered effects" },
        { id: "l19-6", title: "Performance Tips", order: 3, youtubeId: "4PStDbiJVVo", durationSeconds: 780, description: "Optimize animations" },
      ]},
    ]
  },
  {
    id: "20", slug: "linux-command-line", title: "Linux Command Line",
    description: "Master the Linux terminal. Learn essential commands, shell scripting, file management, and system administration.",
    shortDescription: "Command the terminal",
    price: 199, originalPrice: 399, thumbnail: "", category: "Computer Science", level: "Beginner",
    instructor: "Vikram Singh", enrolledCount: 4500, rating: 4.8, reviewCount: 620,
    whatYouLearn: ["Terminal navigation", "File management", "Shell scripting", "Process management", "Networking commands"],
    pastelColor: "hsl(160, 60%, 92%)",
    sections: [
      { id: "s20-1", title: "Terminal Basics", order: 1, lessons: [
        { id: "l20-1", title: "Getting Started", order: 1, youtubeId: "ZtqBQ68cfJc", durationSeconds: 900, description: "Your first terminal session" },
        { id: "l20-2", title: "File System", order: 2, youtubeId: "42iQKuQodW4", durationSeconds: 840, description: "Navigate the file system" },
        { id: "l20-3", title: "Permissions", order: 3, youtubeId: "D-VqgvBMV7g", durationSeconds: 780, description: "File permissions" },
      ]},
      { id: "s20-2", title: "Shell Scripting", order: 2, lessons: [
        { id: "l20-4", title: "Bash Scripting", order: 1, youtubeId: "tK9Oc6AEnR4", durationSeconds: 1200, description: "Write shell scripts" },
        { id: "l20-5", title: "Process Management", order: 2, youtubeId: "TJzltwv7jJs", durationSeconds: 960, description: "Manage processes" },
        { id: "l20-6", title: "Networking Tools", order: 3, youtubeId: "bKzonnwoR2I", durationSeconds: 840, description: "Network commands" },
      ]},
    ]
  },
  {
    id: "21", slug: "nextjs-fullstack", title: "Next.js Full-Stack Apps",
    description: "Build production-ready full-stack applications with Next.js. Learn SSR, SSG, API routes, and deployment.",
    shortDescription: "Production React framework",
    price: 499, originalPrice: 999, thumbnail: "", category: "Web Development", level: "Advanced",
    instructor: "Angela Martinez", enrolledCount: 3400, rating: 4.9, reviewCount: 450,
    whatYouLearn: ["Next.js App Router", "Server-side rendering", "API routes", "Authentication patterns", "Vercel deployment"],
    pastelColor: "hsl(0, 0%, 92%)", isNew: true,
    sections: [
      { id: "s21-1", title: "Next.js Basics", order: 1, lessons: [
        { id: "l21-1", title: "Next.js Introduction", order: 1, youtubeId: "ZVnjOPwW4ZA", durationSeconds: 1080, description: "Why Next.js?" },
        { id: "l21-2", title: "App Router", order: 2, youtubeId: "gSSsZReIFRk", durationSeconds: 960, description: "File-based routing" },
        { id: "l21-3", title: "Data Fetching", order: 3, youtubeId: "yOEpMRUt5xk", durationSeconds: 1020, description: "Server & client fetching" },
      ]},
      { id: "s21-2", title: "Full-Stack Next", order: 2, lessons: [
        { id: "l21-4", title: "API Routes", order: 1, youtubeId: "gEB3ckYeZF4", durationSeconds: 900, description: "Build backend APIs" },
        { id: "l21-5", title: "Authentication", order: 2, youtubeId: "DJvM2lSPn6w", durationSeconds: 1200, description: "Auth in Next.js" },
        { id: "l21-6", title: "Deploy to Vercel", order: 3, youtubeId: "2HBIzEx6IZA", durationSeconds: 780, description: "Ship your app" },
      ]},
    ]
  },
  {
    id: "22", slug: "tailwindcss-mastery", title: "Tailwind CSS Mastery",
    description: "Master utility-first CSS with Tailwind. Build beautiful, responsive UIs rapidly with custom design systems.",
    shortDescription: "Rapid UI development",
    price: 199, originalPrice: 449, thumbnail: "", category: "Web Development", level: "Beginner",
    instructor: "Angela Martinez", enrolledCount: 3900, rating: 4.8, reviewCount: 510,
    whatYouLearn: ["Utility-first workflow", "Responsive design", "Custom themes", "Component patterns", "Dark mode"],
    pastelColor: "hsl(190, 75%, 92%)",
    sections: [
      { id: "s22-1", title: "Tailwind Basics", order: 1, lessons: [
        { id: "l22-1", title: "Tailwind Setup", order: 1, youtubeId: "UBOj6rqRUME", durationSeconds: 720, description: "Get started with Tailwind" },
        { id: "l22-2", title: "Layout & Flexbox", order: 2, youtubeId: "pfaSUYaSgRo", durationSeconds: 900, description: "Layout with utilities" },
        { id: "l22-3", title: "Responsive Design", order: 3, youtubeId: "lCxcTsOHrjo", durationSeconds: 840, description: "Mobile-first approach" },
      ]},
      { id: "s22-2", title: "Advanced Tailwind", order: 2, lessons: [
        { id: "l22-4", title: "Custom Themes", order: 1, youtubeId: "MAtaT8BZEAo", durationSeconds: 960, description: "Design tokens" },
        { id: "l22-5", title: "Component Patterns", order: 2, youtubeId: "T-Zv73yZ_QI", durationSeconds: 1080, description: "Reusable components" },
        { id: "l22-6", title: "Dark Mode", order: 3, youtubeId: "oMOe_32M6ss", durationSeconds: 780, description: "Theme switching" },
      ]},
    ]
  },
  {
    id: "23", slug: "graphql-api", title: "GraphQL API Development",
    description: "Build flexible APIs with GraphQL. Learn schemas, resolvers, mutations, subscriptions, and Apollo ecosystem.",
    shortDescription: "Modern API development",
    price: 399, originalPrice: 799, thumbnail: "", category: "Software Engineering", level: "Intermediate",
    instructor: "Prof. Raj Patel", enrolledCount: 1700, rating: 4.7, reviewCount: 220,
    whatYouLearn: ["GraphQL schema design", "Queries & mutations", "Resolvers", "Apollo Server & Client", "Real-time subscriptions"],
    pastelColor: "hsl(330, 65%, 93%)",
    sections: [
      { id: "s23-1", title: "GraphQL Basics", order: 1, lessons: [
        { id: "l23-1", title: "GraphQL Introduction", order: 1, youtubeId: "ZQL7tL2S0oQ", durationSeconds: 900, description: "Why GraphQL?" },
        { id: "l23-2", title: "Schema & Types", order: 2, youtubeId: "DyvsMKsEsyE", durationSeconds: 1020, description: "Define your schema" },
        { id: "l23-3", title: "Resolvers", order: 3, youtubeId: "Y0lDGjwRYKw", durationSeconds: 960, description: "Write resolvers" },
      ]},
      { id: "s23-2", title: "Apollo Ecosystem", order: 2, lessons: [
        { id: "l23-4", title: "Apollo Server", order: 1, youtubeId: "4thnbkifgnI", durationSeconds: 1080, description: "Build with Apollo" },
        { id: "l23-5", title: "Apollo Client", order: 2, youtubeId: "gAbIQx26wSI", durationSeconds: 1020, description: "Frontend GraphQL" },
        { id: "l23-6", title: "Subscriptions", order: 3, youtubeId: "E3NHd-PkLrQ", durationSeconds: 900, description: "Real-time data" },
      ]},
    ]
  },
  {
    id: "24", slug: "react-native-mobile", title: "React Native Mobile Apps",
    description: "Build native mobile apps with React Native. Learn navigation, state management, native modules, and deployment.",
    shortDescription: "Mobile apps with React",
    price: 449, originalPrice: 899, thumbnail: "", category: "Mobile Development", level: "Intermediate",
    instructor: "Prof. Alex Kumar", enrolledCount: 2800, rating: 4.7, reviewCount: 370,
    whatYouLearn: ["React Native basics", "Navigation & routing", "State management", "Native APIs", "App store publishing"],
    pastelColor: "hsl(210, 80%, 93%)",
    sections: [
      { id: "s24-1", title: "RN Fundamentals", order: 1, lessons: [
        { id: "l24-1", title: "React Native Intro", order: 1, youtubeId: "0-S5a0eXPoc", durationSeconds: 1080, description: "Get started with RN" },
        { id: "l24-2", title: "Core Components", order: 2, youtubeId: "ANdSdIlgsEw", durationSeconds: 960, description: "Built-in components" },
        { id: "l24-3", title: "Navigation", order: 3, youtubeId: "npe3Wf4tpSg", durationSeconds: 1020, description: "Screen navigation" },
      ]},
      { id: "s24-2", title: "Advanced RN", order: 2, lessons: [
        { id: "l24-4", title: "State with Redux", order: 1, youtubeId: "ASlqKZagans", durationSeconds: 1200, description: "Redux in RN" },
        { id: "l24-5", title: "Native Modules", order: 2, youtubeId: "hA77gsfjr50", durationSeconds: 960, description: "Access device APIs" },
        { id: "l24-6", title: "Publish Your App", order: 3, youtubeId: "oBWBDaqNuws", durationSeconds: 1080, description: "Deploy to stores" },
      ]},
    ]
  },
  {
    id: "25", slug: "data-visualization", title: "Data Visualization with D3.js",
    description: "Create interactive data visualizations with D3.js. Learn SVG, scales, axes, transitions, and build dashboards.",
    shortDescription: "Interactive charts & dashboards",
    price: 349, originalPrice: 699, thumbnail: "", category: "Data Science", level: "Intermediate",
    instructor: "Dr. Priya Sharma", enrolledCount: 1600, rating: 4.6, reviewCount: 210,
    whatYouLearn: ["D3.js fundamentals", "SVG manipulation", "Scales & axes", "Interactive charts", "Dashboard design"],
    pastelColor: "hsl(50, 75%, 92%)",
    sections: [
      { id: "s25-1", title: "D3 Basics", order: 1, lessons: [
        { id: "l25-1", title: "D3.js Introduction", order: 1, youtubeId: "C4t6qfHZ6Tw", durationSeconds: 900, description: "Getting started with D3" },
        { id: "l25-2", title: "SVG & Selections", order: 2, youtubeId: "n5NcCoa9dDU", durationSeconds: 840, description: "Working with SVG" },
        { id: "l25-3", title: "Scales & Axes", order: 3, youtubeId: "BDpBAFvdjYo", durationSeconds: 960, description: "Data mapping" },
      ]},
      { id: "s25-2", title: "Advanced D3", order: 2, lessons: [
        { id: "l25-4", title: "Bar & Line Charts", order: 1, youtubeId: "aHJCt2adSWA", durationSeconds: 1020, description: "Common chart types" },
        { id: "l25-5", title: "Interactive Charts", order: 2, youtubeId: "OZXYk_bgU2I", durationSeconds: 1080, description: "Add interactivity" },
        { id: "l25-6", title: "Dashboard Project", order: 3, youtubeId: "2LhoCfjm8R4", durationSeconds: 1200, description: "Build a dashboard" },
      ]},
    ]
  },
  {
    id: "26", slug: "terraform-iac", title: "Terraform Infrastructure as Code",
    description: "Automate infrastructure with Terraform. Learn HCL, providers, modules, state management, and multi-cloud deployments.",
    shortDescription: "Automate your infrastructure",
    price: 449, originalPrice: 899, thumbnail: "", category: "Cloud & DevOps", level: "Intermediate",
    instructor: "Vikram Singh", enrolledCount: 1300, rating: 4.7, reviewCount: 180,
    whatYouLearn: ["HCL syntax", "Terraform providers", "Modules & workspaces", "State management", "Multi-cloud setup"],
    pastelColor: "hsl(265, 65%, 93%)",
    sections: [
      { id: "s26-1", title: "Terraform Basics", order: 1, lessons: [
        { id: "l26-1", title: "IaC Introduction", order: 1, youtubeId: "l5k1ai_GBDE", durationSeconds: 960, description: "Why Infrastructure as Code?" },
        { id: "l26-2", title: "HCL & Resources", order: 2, youtubeId: "SLB_c_ayRMo", durationSeconds: 1080, description: "Write Terraform configs" },
        { id: "l26-3", title: "Providers", order: 3, youtubeId: "iRaai1IBlB0", durationSeconds: 900, description: "Connect to cloud providers" },
      ]},
      { id: "s26-2", title: "Advanced Terraform", order: 2, lessons: [
        { id: "l26-4", title: "Modules", order: 1, youtubeId: "KSAS0LjlAZo", durationSeconds: 1020, description: "Reusable modules" },
        { id: "l26-5", title: "State Management", order: 2, youtubeId: "FzCsOkNTMhI", durationSeconds: 960, description: "Remote state" },
        { id: "l26-6", title: "CI/CD Integration", order: 3, youtubeId: "4BnNX2P-MBk", durationSeconds: 1200, description: "Automate deployments" },
      ]},
    ]
  },
  {
    id: "27", slug: "ethical-hacking", title: "Ethical Hacking & Pen Testing",
    description: "Learn ethical hacking techniques. Cover reconnaissance, exploitation, post-exploitation, and report writing.",
    shortDescription: "Hack legally & responsibly",
    price: 499, originalPrice: 999, thumbnail: "", category: "Cybersecurity", level: "Intermediate",
    instructor: "Dr. Sarah Chen", enrolledCount: 2100, rating: 4.8, reviewCount: 290,
    whatYouLearn: ["Reconnaissance techniques", "Vulnerability scanning", "Exploitation methods", "Post-exploitation", "Report writing"],
    pastelColor: "hsl(0, 65%, 93%)",
    sections: [
      { id: "s27-1", title: "Recon & Scanning", order: 1, lessons: [
        { id: "l27-1", title: "Ethical Hacking Intro", order: 1, youtubeId: "3FNYvj2U0HM", durationSeconds: 900, description: "Getting started" },
        { id: "l27-2", title: "Information Gathering", order: 2, youtubeId: "sH4JCwjybGs", durationSeconds: 1080, description: "OSINT techniques" },
        { id: "l27-3", title: "Nmap Scanning", order: 3, youtubeId: "4t4kBkMsDbQ", durationSeconds: 960, description: "Network scanning" },
      ]},
      { id: "s27-2", title: "Exploitation", order: 2, lessons: [
        { id: "l27-4", title: "Metasploit Framework", order: 1, youtubeId: "8lR27r8Y_ik", durationSeconds: 1200, description: "Exploitation tools" },
        { id: "l27-5", title: "Web App Hacking", order: 2, youtubeId: "2_lswM1S264", durationSeconds: 1080, description: "Attack web apps" },
        { id: "l27-6", title: "Writing Reports", order: 3, youtubeId: "EOoBAq1z5kM", durationSeconds: 840, description: "Professional reports" },
      ]},
    ]
  },
  {
    id: "28", slug: "kotlin-android", title: "Kotlin for Android Development",
    description: "Build modern Android apps with Kotlin. Learn Jetpack Compose, MVVM architecture, Room database, and Material Design.",
    shortDescription: "Modern Android with Kotlin",
    price: 449, originalPrice: 899, thumbnail: "", category: "Mobile Development", level: "Intermediate",
    instructor: "Prof. Alex Kumar", enrolledCount: 2400, rating: 4.8, reviewCount: 330,
    whatYouLearn: ["Kotlin language", "Jetpack Compose", "MVVM architecture", "Room database", "Material Design 3"],
    pastelColor: "hsl(270, 70%, 93%)", isNew: true,
    sections: [
      { id: "s28-1", title: "Kotlin Basics", order: 1, lessons: [
        { id: "l28-1", title: "Kotlin Introduction", order: 1, youtubeId: "F9UC9DY-vIU", durationSeconds: 960, description: "Learn Kotlin" },
        { id: "l28-2", title: "Jetpack Compose", order: 2, youtubeId: "cDabx3SjuOY", durationSeconds: 1080, description: "Declarative UI" },
        { id: "l28-3", title: "Navigation", order: 3, youtubeId: "4gUeyNkGE3g", durationSeconds: 900, description: "Compose navigation" },
      ]},
      { id: "s28-2", title: "Advanced Android", order: 2, lessons: [
        { id: "l28-4", title: "MVVM Architecture", order: 1, youtubeId: "ijXjCtCXcN4", durationSeconds: 1200, description: "Clean architecture" },
        { id: "l28-5", title: "Room Database", order: 2, youtubeId: "lwAvI3WDXBY", durationSeconds: 1020, description: "Local storage" },
        { id: "l28-6", title: "Publish to Play Store", order: 3, youtubeId: "5GHT4QtotE4", durationSeconds: 960, description: "Launch your app" },
      ]},
    ]
  },
  {
    id: "29", slug: "cpp-game-dev", title: "C++ for Game Development",
    description: "Learn C++ through game development. Cover pointers, memory management, OOP, and build games with SFML/SDL.",
    shortDescription: "Build games with C++",
    price: 399, originalPrice: 799, thumbnail: "", category: "Programming", level: "Intermediate",
    instructor: "Prof. Raj Patel", enrolledCount: 1900, rating: 4.7, reviewCount: 260,
    whatYouLearn: ["C++ fundamentals", "Pointers & memory", "OOP in C++", "Game loops", "SFML/SDL graphics"],
    pastelColor: "hsl(225, 70%, 92%)",
    sections: [
      { id: "s29-1", title: "C++ Basics", order: 1, lessons: [
        { id: "l29-1", title: "C++ Introduction", order: 1, youtubeId: "vLnPwxZdW4Y", durationSeconds: 1080, description: "Start with C++" },
        { id: "l29-2", title: "Pointers & References", order: 2, youtubeId: "DTxHyVn0ODg", durationSeconds: 960, description: "Memory management" },
        { id: "l29-3", title: "OOP in C++", order: 3, youtubeId: "wN0x9eZLix4", durationSeconds: 1020, description: "Object-oriented C++" },
      ]},
      { id: "s29-2", title: "Game Development", order: 2, lessons: [
        { id: "l29-4", title: "Game Loop", order: 1, youtubeId: "RH2GPfbkMXg", durationSeconds: 900, description: "Core game loop" },
        { id: "l29-5", title: "SFML Graphics", order: 2, youtubeId: "axIgxBQVBg0", durationSeconds: 1200, description: "2D graphics" },
        { id: "l29-6", title: "Build a Game", order: 3, youtubeId: "LpEdZbUdDe4", durationSeconds: 1500, description: "Complete game project" },
      ]},
    ]
  },
  {
    id: "30", slug: "nlp-transformers", title: "NLP & Transformers",
    description: "Master Natural Language Processing with transformers. Learn BERT, GPT, fine-tuning, and build NLP applications.",
    shortDescription: "AI-powered text processing",
    price: 599, originalPrice: 1199, thumbnail: "", category: "Data Science", level: "Advanced",
    instructor: "Dr. Priya Sharma", enrolledCount: 1500, rating: 4.9, reviewCount: 200,
    whatYouLearn: ["NLP fundamentals", "Word embeddings", "Transformer architecture", "BERT & GPT", "Fine-tuning models"],
    pastelColor: "hsl(175, 65%, 92%)",
    sections: [
      { id: "s30-1", title: "NLP Foundations", order: 1, lessons: [
        { id: "l30-1", title: "NLP Introduction", order: 1, youtubeId: "fOvTtapxa9c", durationSeconds: 960, description: "What is NLP?" },
        { id: "l30-2", title: "Text Preprocessing", order: 2, youtubeId: "nxhCyeRR75Q", durationSeconds: 840, description: "Clean text data" },
        { id: "l30-3", title: "Word Embeddings", order: 3, youtubeId: "viZrOnJclY0", durationSeconds: 1080, description: "Word2Vec & GloVe" },
      ]},
      { id: "s30-2", title: "Transformers", order: 2, lessons: [
        { id: "l30-4", title: "Attention Mechanism", order: 1, youtubeId: "eMlx5fFNoYc", durationSeconds: 1200, description: "Attention is all you need" },
        { id: "l30-5", title: "BERT Deep Dive", order: 2, youtubeId: "xI0HHN5XKDo", durationSeconds: 1080, description: "Understanding BERT" },
        { id: "l30-6", title: "Fine-tuning GPT", order: 3, youtubeId: "bA7FkBxt4AI", durationSeconds: 1200, description: "Customize LLMs" },
      ]},
    ]
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find(c => c.slug === slug);
}

export function getAllLessons(course: Course): Lesson[] {
  return course.sections.flatMap(s => s.lessons);
}

export function getTotalDuration(course: Course): number {
  return getAllLessons(course).reduce((sum, l) => sum + l.durationSeconds, 0);
}

export function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  if (hours > 0) return `${hours}h ${mins}m`;
  return `${mins}m`;
}

export function getTotalLessons(course: Course): number {
  return getAllLessons(course).length;
}
