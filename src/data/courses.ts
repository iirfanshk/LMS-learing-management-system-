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
