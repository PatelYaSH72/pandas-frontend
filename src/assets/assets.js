import {
  Cpu,
  Brain,
  Bot,
  Database,
  Code,
  Smartphone,
  Cloud,
  Shield,
  Wifi,
  Blocks,
  Dna,
  HeartPulse,
  Leaf,
  Rocket,
  Wheat,
  GraduationCap,
  DollarSign,
  Laptop,
  Network,
  Settings,
  Building2,
  Zap,
  Car,
  Film,
  Factory,
  Atom,
  Recycle,
} from "lucide-react";

export const TechnologyesName = [
  // "All",
  "Information Technology",
  "Artificial Intelligence",
  "Machine Learning",
  "Data Science",
  "Web Development",
  "Mobile App Development",
  "Cloud Computing",
  "Cybersecurity",
  "Internet of Things (IoT)",
  "Robotics",
  "Blockchain",
  "Biotechnology",
  "Medical & Health Technology",
  "Environmental Technology",
  "Space Technology",
  "Agricultural Technology",
  "Educational Technology (EdTech)",
  "Financial Technology (FinTech)",
  "Computer Science / Software Development",
  "Networking / Telecommunications",
  "Automation & Control Systems",
  "Civil Engineering & Construction Technology",
  "Energy / Sustainable Technology",
  "Transportation Technology",
  "Media & Entertainment Technology",
  "Manufacturing / Industrial Technology",
  "Quantum Computing",
  "Clean / Green Technology",
];
export const TechnologyesData = [
  {
    technology: "Information Technology",
    img: Laptop,
    color: "text-blue-500",
    short_description:
      "Web Development is the process of creating websites, web applications, and online systems using frontend, backend, and databases.",

    detailed_description:
      "Web Development means creating, managing, and deploying websites and web applications. It includes frontend (UI/UX), backend (server logic), databases, APIs, hosting, deployment, and security. It is one of the fastest-growing fields in the IT industry, and every business requires skilled professionals in this domain.",

    key_concepts: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Frontend Frameworks (React, Angular, Vue)",
      "Backend Development (Node.js, Express)",
      "Databases (MongoDB, MySQL)",
      "APIs",
      "Version Control (Git, GitHub)",
      "Deployment & Hosting",
    ],

    applications: [
      "Business Websites",
      "E-commerce Platforms",
      "Administrative Dashboards",
      "Portfolio Websites",
      "Learning Management Systems",
      "Booking/Reservation Systems",
      "Social Media Platforms",
      "News/Blog Platforms",
    ],

    skills_required: [
      "HTML, CSS, JavaScript",
      "Git & GitHub",
      "Responsive Web Design",
      "Frontend Frameworks",
      "Basic Backend Knowledge",
      "Database Management",
      "Debugging & Testing",
    ],

    tools_and_technologies: {
      frontend: ["React", "Next.js", "TailwindCSS", "Bootstrap", "JavaScript"],
      backend: ["Node.js", "Express.js", "Django", "Flask"],
      databases: ["MongoDB", "MySQL", "PostgreSQL"],
      devops: ["GitHub", "Netlify", "Vercel", "Render", "Docker"],
      editors: ["VS Code", "WebStorm"],
    },

    roadmap: {
      beginner: [
        "HTML basics",
        "CSS styling",
        "JavaScript fundamentals",
        "Responsive layouts",
        "Basic projects (Portfolio, Landing Page)",
      ],
      intermediate: [
        "Advanced CSS + Tailwind",
        "React fundamentals",
        "APIs & Axios",
        "Backend basics with Node.js",
        "Database basics (MongoDB/MySQL)",
      ],
      advanced: [
        "Full-stack apps",
        "Authentication (JWT/OAuth)",
        "State management (Redux)",
        "Performance optimization",
        "Hosting & Deployment",
        "CI/CD basics",
      ],
    },

    resources: {
      youtube: [
        "CodeWithHarry",
        "Hitesh Choudhary",
        "Thapa Technical",
        "Traversy Media",
        "FreeCodeCamp",
      ],
      documentation: [
        "developer.mozilla.org",
        "react.dev",
        "nodejs.org",
        "expressjs.com",
        "mongodb.com/docs",
      ],
      courses: [
        "FreeCodeCamp Responsive Web Design",
        "Coursera Full-Stack Web Development",
        "Udemy MERN Stack Course",
      ],
    },

    interview_questions: [
      "What is the difference between HTML, CSS, and JavaScript?",
      "What is the Virtual DOM in React?",
      "What is a REST API?",
      "How does the browser rendering process work?",
      "What is the difference between Frontend and Backend?",
      "What is CORS?",
      "What is debouncing or throttling?",
      "What are HTTP methods?",
    ],
    salary_info: {
      india: {
        fresher: "₹3 LPA – ₹6 LPA",
        experienced: "₹8 LPA – ₹20 LPA",
      },
      global: {
        fresher: "$50,000 – $85,000",
        experienced: "$100,000 – $150,000+",
      },
    },

    job_roles: [
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "UI Developer",
      "React Developer",
      "Web Designer",
    ],

    pros_and_cons: {
      Benefits: [
        "High demand",
        "Freelancing opportunities",
        "Creative field",
        "Remote-friendly work",
      ],
      Drawbacks: [
        "Fast-changing technologies",
        "Competitive field",
        "Continuous upskilling required",
      ],
    },

    future_trends: [
      "AI-powered websites",
      "No-code/Low-code platforms",
      "Web3 applications",
      "Headless CMS",
      "Serverless architecture",
    ],
  },
  {
    technology: "Artificial Intelligence",
    img: Brain,
    color: "text-purple-500",
    short_description:
      "Artificial Intelligence (AI) is a technology that enables machines to think, learn, and make decisions like humans.",

    detailed_description:
      "Artificial Intelligence means creating systems that can work like human intelligence — such as learning, problem-solving, pattern recognition, prediction, and automation. The AI industry is growing rapidly, and there is a high demand for AI experts in every sector. It includes concepts like Machine Learning, Deep Learning, NLP, Computer Vision, Robotics, and Data Analysis.",

    key_concepts: [
      "Machine Learning",
      "Deep Learning",
      "Neural Networks",
      "Natural Language Processing (NLP)",
      "Computer Vision",
      "Supervised & Unsupervised Learning",
      "Reinforcement Learning",
      "Feature Engineering",
      "Data Preprocessing",
      "Model Deployment",
    ],

    applications: [
      "Chatbots & Virtual Assistants",
      "Recommendation Systems",
      "Self-driving Cars",
      "Image & Face Recognition",
      "Fraud Detection",
      "Medical Diagnosis",
      "Automation Tools",
      "AI Content Generators",
      "Speech Recognition",
      "Predictive Analytics",
    ],

    skills_required: [
      "Python Programming",
      "Mathematics (Linear Algebra, Statistics)",
      "Machine Learning Algorithms",
      "Deep Learning (TensorFlow/PyTorch)",
      "Data Cleaning & Preprocessing",
      "Model Training & Evaluation",
      "API Development",
      "AI Deployment (Cloud/Edge)",
    ],

    tools_and_technologies: {
      languages: ["Python", "R", "JavaScript"],
      frameworks: ["TensorFlow", "PyTorch", "Keras", "Scikit-Learn"],
      nlp_tools: ["NLTK", "spaCy", "HuggingFace Transformers"],
      computer_vision: ["OpenCV", "YOLO", "MediaPipe"],
      cloud_ai: ["Google Vertex AI", "AWS SageMaker", "Azure AI Studio"],
      data_tools: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
      editors: ["VS Code", "Jupyter Notebook", "PyCharm"],
    },

    roadmap: {
      beginner: [
        "Python basics",
        "Basic math for AI",
        "Understanding datasets",
        "Introduction to ML algorithms",
        "Simple ML projects (Prediction, Classification)",
      ],
      intermediate: [
        "Deep Learning basics",
        "Neural Networks",
        "NLP fundamentals",
        "Computer Vision basics",
        "End-to-end ML pipelines",
      ],
      advanced: [
        "Transformers & LLMs",
        "Advanced computer vision models",
        "Reinforcement Learning",
        "Model deployment (Docker, Cloud)",
        "AI optimization & scalability",
      ],
    },

    resources: {
      youtube: [
        "CodeWithHarry (AI basics)",
        "Hitesh Choudhary",
        "Krish Naik",
        "CampusX",
        "FreeCodeCamp",
        "Sentdex",
      ],
      documentation: [
        "tensorflow.org",
        "pytorch.org",
        "scikit-learn.org",
        "huggingface.co/docs",
        "opencv.org",
      ],
      courses: [
        "Coursera — Andrew Ng: Machine Learning",
        "DeepLearning.AI TensorFlow Developer",
        "Udemy — Python for Data Science & ML Bootcamp",
      ],
    },

    interview_questions: [
      "What is the difference between AI, ML, and Deep Learning?",
      "What are Supervised and Unsupervised Learning?",
      "What is Overfitting and Underfitting?",
      "How does a Neural Network work?",
      "What is Gradient Descent?",
      "What is a Confusion Matrix?",
      "What are CNNs and RNNs?",
      "What is the difference between Accuracy and Precision?",
    ],
    salary_info: {
      india: {
        fresher: "₹5 LPA – ₹10 LPA",
        experienced: "₹15 LPA – ₹40 LPA+",
      },
      global: {
        fresher: "$70,000 – $100,000",
        experienced: "$150,000 – $200,000+",
      },
    },

    job_roles: [
      "AI Engineer",
      "Machine Learning Engineer",
      "Data Scientist",
      "Deep Learning Engineer",
      "NLP Engineer",
      "Computer Vision Engineer",
      "Research Scientist",
      "AI Product Developer",
    ],

    pros_and_cons: {
      Benefits: [
        "Extremely high demand",
        "High salary packages",
        "Future-proof career",
        "Works in every industry",
        "Innovative and exciting field",
      ],
      Drawbacks: [
        "Requires strong math",
        "Steep learning curve",
        "Highly competitive field",
        "Continuous learning required",
      ],
    },

    future_trends: [
      "AGI (Artificial General Intelligence)",
      "AI Automation tools",
      "AI Agents & Autonomous Systems",
      "Personalized AI models",
      "AI + Robotics",
      "Explainable AI (XAI)",
    ],
  },
  {
    technology: "Machine Learning",
    img: Bot,
    color: "text-green-500",
    short_description:
      "Machine Learning is a technology that automatically learns patterns from data and makes predictions, where algorithms improve on their own without explicit programming.",

    detailed_description:
      "Machine Learning means creating models that can learn patterns from data and make decisions or predictions. ML is a core part of Artificial Intelligence where algorithms improve their performance based on training data. Machine Learning is used in healthcare, finance, marketing, automation, robotics, analytics, and almost every modern industry. ML includes supervised learning, unsupervised learning, reinforcement learning, model evaluation, feature engineering, and deployment.",

    key_concepts: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Reinforcement Learning",
      "Regression & Classification",
      "Clustering",
      "Neural Networks",
      "Feature Engineering",
      "Model Evaluation Metrics",
      "Overfitting & Underfitting",
      "Hyperparameter Tuning",
    ],

    applications: [
      "Recommendation Systems",
      "Fraud Detection",
      "Spam Filtering",
      "Medical Diagnosis",
      "Stock Market Prediction",
      "Face & Image Recognition",
      "Speech Recognition",
      "Weather Forecasting",
      "Customer Segmentation",
      "Self-driving Systems",
    ],

    skills_required: [
      "Python Programming",
      "Statistics & Probability",
      "Linear Algebra & Calculus",
      "Data Preprocessing",
      "Machine Learning Algorithms",
      "Model Training & Evaluation",
      "Visualization Tools",
      "API & Deployment Knowledge",
    ],

    tools_and_technologies: {
      languages: ["Python", "R"],
      frameworks: ["Scikit-Learn", "TensorFlow", "PyTorch", "Keras"],
      data_tools: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
      ml_ops: ["MLflow", "Kubeflow", "Docker"],
      cloud_services: ["AWS SageMaker", "Google Vertex AI", "Azure ML Studio"],
      editors: ["Jupyter Notebook", "VS Code", "PyCharm"],
    },

    roadmap: {
      beginner: [
        "Python basics",
        "Intro to statistics",
        "Understanding datasets",
        "Basic ML algorithms (Linear Regression, KNN)",
        "Mini projects (Prediction & Classification)",
      ],
      intermediate: [
        "Supervised vs Unsupervised learning",
        "Model evaluation metrics",
        "Feature engineering",
        "Hyperparameter tuning",
        "Working with real datasets",
      ],
      advanced: [
        "Deep learning basics",
        "Neural network models",
        "Reinforcement learning",
        "ML model deployment",
        "Optimization techniques",
      ],
    },

    resources: {
      youtube: [
        "Krish Naik",
        "CampusX",
        "Hitesh Choudhary",
        "FreeCodeCamp",
        "StatQuest",
        "Sentdex",
      ],
      documentation: [
        "scikit-learn.org",
        "pytorch.org/tutorials",
        "tensorflow.org/guide",
        "numpy.org",
        "pandas.pydata.org",
      ],
      courses: [
        "Coursera — Andrew Ng Machine Learning",
        "Google Machine Learning Crash Course",
        "Udemy ML A-Z Course",
        "DeepLearning.AI Specializations",
      ],
    },

    interview_questions: [
      "What is the difference between Supervised and Unsupervised Learning?",
      "What are Overfitting and Underfitting?",
      "What is the Bias–Variance Tradeoff?",
      "What is a Confusion Matrix?",
      "What does Gradient Descent do?",
      "What is Regularization?",
      "How does KNN work?",
      "What is Feature Scaling?",
    ],

    salary_info: {
      india: {
        fresher: "₹5 LPA – ₹12 LPA",
        experienced: "₹15 LPA – ₹35 LPA+",
      },
      global: {
        fresher: "$70,000 – $110,000",
        experienced: "$120,000 – $180,000+",
      },
    },

    job_roles: [
      "Machine Learning Engineer",
      "Data Scientist",
      "AI Engineer",
      "Deep Learning Engineer",
      "Data Analyst",
      "Research Engineer",
    ],

    pros_and_cons: {
      Benefits: [
        "High salary and demand",
        "Works across all industries",
        "Exciting and future-proof field",
        "Automation + smart systems creation",
        "Opportunity for research and innovation",
      ],
      Drawbacks: [
        "Strong math required",
        "Complex algorithms",
        "Tons of competition",
        "Large datasets needed",
        "Continuous learning required",
      ],
    },

    future_trends: [
      "AutoML (Automated ML)",
      "AI Agents & Autonomous Systems",
      "Real-time ML models",
      "Edge AI (On-device ML)",
      "Explainable ML",
      "ML-powered robotics",
    ],
  },
  {
    technology: "Data Science",
    img: Database,
    color: "text-orange-500",
    short_description:
      "Data Science is the process of collecting, cleaning, analyzing, and visualizing data to extract insights that help in business decisions and predictions.",

    detailed_description:
      "Data Science is an interdisciplinary field that combines statistics, mathematics, programming, machine learning, and data visualization. Data Scientists convert raw data into useful information that helps businesses make better decisions. It includes data cleaning, EDA, ML modeling, visualization, dashboarding, analytics, and deployment. Data Science has massive demand across industries such as finance, healthcare, marketing, e-commerce, automation, and technology.",

    key_concepts: [
      "Statistics & Probability",
      "Data Cleaning",
      "Exploratory Data Analysis (EDA)",
      "Machine Learning",
      "Feature Engineering",
      "Data Visualization",
      "Big Data Concepts",
      "Model Evaluation Metrics",
      "SQL & Databases",
      "Business Intelligence",
    ],

    applications: [
      "Sales Forecasting",
      "Market Analysis",
      "Customer Behavior Prediction",
      "Fraud Detection",
      "Healthcare Analytics",
      "Recommendation Systems",
      "Risk Management",
      "Sentiment Analysis",
      "Supply Chain Optimization",
      "Business Decision Support",
    ],

    skills_required: [
      "Python (Pandas, NumPy)",
      "Statistics & Math",
      "SQL",
      "Machine Learning basics",
      "Data Visualization (Matplotlib/Seaborn)",
      "Dashboard Tools (Power BI/Tableau)",
      "Problem-solving mindset",
      "Data Preprocessing",
    ],

    tools_and_technologies: {
      languages: ["Python", "R", "SQL"],
      libraries: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn"],
      big_data: ["Hadoop", "Spark"],
      databases: ["MySQL", "PostgreSQL", "MongoDB"],
      dashboards: ["Power BI", "Tableau", "Looker"],
      cloud_data: ["AWS Redshift", "Google BigQuery", "Azure Data Lake"],
      editors: ["Jupyter Notebook", "VS Code", "PyCharm"],
    },

    roadmap: {
      beginner: [
        "Python basics",
        "Intro to statistics",
        "Understanding data types",
        "Basic charts & graphs",
        "Small data analysis projects",
      ],
      intermediate: [
        "EDA (Exploratory Data Analysis)",
        "SQL queries",
        "Machine Learning basics",
        "Feature engineering",
        "Real-world datasets (Kaggle)",
      ],
      advanced: [
        "Big Data tools (Spark/Hadoop)",
        "Deep learning basics",
        "Deployment of ML models",
        "Pipeline creation",
        "Business-level analytics",
      ],
    },

    resources: {
      youtube: [
        "Krish Naik",
        "CampusX",
        "FreeCodeCamp",
        "Ken Jee",
        "StatQuest",
        "Hitesh Choudhary",
      ],
      documentation: [
        "pandas.pydata.org",
        "numpy.org",
        "scikit-learn.org",
        "matplotlib.org",
        "spark.apache.org",
      ],
      courses: [
        "IBM Data Science – Coursera",
        "Google Data Analytics – Coursera",
        "Udemy Data Science A–Z",
        "DataCamp Data Scientist Track",
      ],
    },

    interview_questions: [
      "What is the difference between Data Science and Machine Learning?",
      "What is EDA (Exploratory Data Analysis)?",
      "How do you detect outliers?",
      "What is the difference between Correlation and Causation?",
      "Normalization vs Standardization?",
      "What is a Confusion Matrix?",
      "What are SQL Joins?",
      "What is Hypothesis Testing?",
    ],

    salary_info: {
      india: {
        fresher: "₹6 LPA – ₹12 LPA",
        experienced: "₹15 LPA – ₹35 LPA+",
      },
      global: {
        fresher: "$75,000 – $110,000",
        experienced: "$120,000 – $180,000+",
      },
    },

    job_roles: [
      "Data Scientist",
      "Data Analyst",
      "Machine Learning Engineer",
      "Business Analyst",
      "Data Engineer",
      "AI Engineer",
      "Research Analyst",
    ],

    pros_and_cons: {
      Benefits: [
        "High-paying career",
        "Across all industries demand",
        "Huge scope for growth",
        "Data-driven decision making",
        "Innovative & analytical field",
      ],
      Drawbacks: [
        "Requires strong math and stats",
        "Complex models & data handling",
        "High competition",
        "Big datasets require strong systems",
        "Continuous learning needed",
      ],
    },

    future_trends: [
      "Automated Data Science (AutoML)",
      "AI-driven analytics",
      "Real-time big data processing",
      "Cloud-based data platforms",
      "Predictive & prescriptive analytics",
      "Data-centric AI",
    ],
  },
  {
    technology: "Web Development",
    img: Code,
    color: "text-pink-500",
    short_description:
      "Web Development is the process of creating websites, web apps, and online systems, which includes frontend, backend, databases, and deployment.",

    detailed_description:
      "Web Development is a complete process in which websites and web applications are designed, built, tested, and deployed. It includes frontend (UI/UX), backend (server logic), databases, APIs, hosting, deployment, security, and performance optimization. Web Development is one of the fastest-growing fields in the IT industry, and every business needs professionals for a strong digital presence.",

    key_concepts: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Frontend Frameworks (React, Angular, Vue)",
      "Backend Development (Node.js, Express)",
      "Databases (MongoDB, MySQL, PostgreSQL)",
      "APIs",
      "Version Control (Git, GitHub)",
      "Deployment & Hosting",
    ],

    applications: [
      "Business Websites",
      "E-commerce Stores",
      "Portfolio Websites",
      "Admin Dashboards",
      "Social Media Platforms",
      "Booking/Reservation Systems",
      "News & Blogging Platforms",
      "Learning Management Systems",
      "Web-based Tools & SaaS Apps",
    ],

    skills_required: [
      "HTML, CSS, JavaScript",
      "Responsive UI/UX Design",
      "React or any frontend framework",
      "Git & GitHub",
      "Basic Backend Knowledge",
      "Database Management",
      "Debugging & Testing",
      "API Integration",
    ],

    tools_and_technologies: {
      frontend: [
        "React",
        "Next.js",
        "TailwindCSS",
        "Bootstrap",
        "Angular",
        "JavaScript",
      ],
      backend: ["Node.js", "Express.js", "Django", "Flask"],
      databases: ["MongoDB", "MySQL", "PostgreSQL"],
      devops: ["GitHub", "Netlify", "Vercel", "Render", "Docker"],
      editors: ["VS Code", "WebStorm"],
    },

    roadmap: {
      beginner: [
        "HTML basics",
        "CSS styling",
        "JavaScript fundamentals",
        "Responsive layouts",
        "Basic projects (Portfolio, Landing Page)",
      ],
      intermediate: [
        "Advanced CSS + Tailwind",
        "React fundamentals",
        "API Integration (Axios/Fetch)",
        "Backend basics with Node.js",
        "Databases (MongoDB/MySQL)",
      ],
      advanced: [
        "Full-stack applications",
        "Authentication (JWT/OAuth)",
        "State management (Redux)",
        "Performance optimization",
        "Hosting & Deployment",
        "CI/CD Integration",
      ],
    },

    resources: {
      youtube: [
        "CodeWithHarry",
        "Hitesh Choudhary",
        "Thapa Technical",
        "Traversy Media",
        "FreeCodeCamp",
        "GreatStack",
      ],
      documentation: [
        "developer.mozilla.org",
        "react.dev",
        "nodejs.org",
        "expressjs.com",
        "tailwindcss.com",
        "mongodb.com/docs",
      ],
      courses: [
        "FreeCodeCamp Responsive Web Design",
        "Coursera Full-Stack Web Development",
        "Udemy MERN Stack Course",
        "Meta Frontend Developer Professional Certificate",
      ],
    },

    interview_questions: [
      "What is the difference between HTML, CSS, and JavaScript?",
      "What is the DOM and how does it work?",
      "What is React's virtual DOM?",
      "What is a REST API?",
      "What is the difference between Frontend and Backend?",
      "What is CORS?",
      "What are debouncing and throttling?",
      "What are HTTP methods?",
    ],
    salary_info: {
      india: {
        fresher: "₹3 LPA – ₹6 LPA",
        experienced: "₹8 LPA – ₹20 LPA",
      },
      global: {
        fresher: "$50,000 – $85,000",
        experienced: "$100,000 – $150,000+",
      },
    },

    job_roles: [
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "React Developer",
      "UI/UX Developer",
      "Web Designer",
      "JavaScript Developer",
    ],

    pros_and_cons: {
      Benefits: [
        "High demand",
        "Freelancing opportunities",
        "Creative + logical field",
        "Remote-friendly jobs",
        "Fast career growth",
      ],
      Drawbacks: [
        "Technologies fast change hoti hain",
        "Constant upskilling required",
        "High competition",
        "Sometimes long working hours",
      ],
    },

    future_trends: [
      "AI-integrated Websites",
      "No-code/Low-code Platforms",
      "Serverless Architecture",
      "Web3 & Blockchain Applications",
      "Headless CMS",
      "3D Websites (Three.js)",
    ],
  },
  {
    technology: "Mobile App Development",
    img: Smartphone,
    color: "text-red-500",
    short_description:
      "Mobile App Development is the process of creating applications for Android and iOS devices, which includes designing the UI, developing the backend, integrating APIs, and deploying the app.",

    detailed_description:
      "Mobile App Development is a process in which applications for smartphones and tablets are designed, built, tested, and deployed. It includes native apps (Java/Kotlin for Android, Swift for iOS), cross-platform apps (Flutter, React Native), backend integration, APIs, authentication, databases, and deployment. Mobile apps have become an essential digital product for every business, resulting in high demand and numerous career opportunities in this field.",

    key_concepts: [
      "Native App Development",
      "Cross-Platform Frameworks",
      "UI/UX Design",
      "API Integration",
      "State Management",
      "Authentication",
      "Database & Storage",
      "Push Notifications",
      "App Deployment",
      "Performance Optimization",
    ],

    applications: [
      "E-commerce Apps",
      "Finance/Payment Apps",
      "Travel & Booking Apps",
      "Social Media Apps",
      "Entertainment Apps",
      "Food Delivery Apps",
      "Healthcare Apps",
      "Learning Apps",
      "Business Utility Apps",
      "Productivity Tools",
    ],

    skills_required: [
      "Java/Kotlin (Android)",
      "Swift (iOS)",
      "Flutter or React Native",
      "API Handling",
      "Database: SQLite, Firebase",
      "State Management (Redux, Provider, Bloc)",
      "Git & GitHub",
      "UI/UX basics",
      "Debugging & Testing",
    ],

    tools_and_technologies: {
      native_android: ["Java", "Kotlin", "Android Studio"],
      native_ios: ["Swift", "Xcode"],
      cross_platform: ["Flutter", "React Native", "Ionic"],
      backend: ["Node.js", "Firebase", "Express.js"],
      databases: ["SQLite", "MongoDB", "Firebase Firestore"],
      devops: ["GitHub", "AppCenter", "Fastlane", "Docker"],
      editors: ["Android Studio", "Xcode", "VS Code"],
    },

    roadmap: {
      beginner: [
        "Programming basics (Java/JS/Dart)",
        "Mobile UI basics",
        "Layouts & Components",
        "Local storage basics",
        "Simple apps (Calculator, To-do App)",
      ],
      intermediate: [
        "API integration",
        "Firebase basics",
        "Push notifications",
        "State management",
        "Multi-screen navigation apps",
      ],
      advanced: [
        "Complete full-stack mobile apps",
        "Authentication (JWT/Firebase Auth)",
        "Offline-first apps",
        "App performance optimization",
        "Deployment to Play Store & App Store",
      ],
    },

    resources: {
      youtube: [
        "CodeWithHarry",
        "Hitesh Choudhary",
        "MTECH VIRAL",
        "The Net Ninja",
        "Traversy Media",
        "FreeCodeCamp",
      ],
      documentation: [
        "developer.android.com",
        "flutter.dev",
        "reactnative.dev",
        "firebase.google.com/docs",
        "swift.org/documentation",
      ],
      courses: [
        "Google Android Developer Certification",
        "Coursera Mobile App Development",
        "Udemy Flutter Bootcamp",
        "Meta React Native Specialization",
      ],
    },

    interview_questions: [
      "What is the difference between Native and Cross-Platform development?",
      "What is the widget tree in Flutter?",
      "How is state management handled in React Native?",
      "What is the Android activity lifecycle?",
      "What is the process of API integration?",
      "How does Firebase authentication work?",
      "What are app performance optimization techniques?",
      "How is an app published on the Play Store?",
    ],

    salary_info: {
      india: {
        fresher: "₹3 LPA – ₹7 LPA",
        experienced: "₹8 LPA – ₹25 LPA",
      },
      global: {
        fresher: "$55,000 – $90,000",
        experienced: "$100,000 – $160,000+",
      },
    },

    job_roles: [
      "Android Developer",
      "iOS Developer",
      "Flutter Developer",
      "React Native Developer",
      "Mobile Full-Stack Developer",
      "Mobile App UI/UX Developer",
    ],

    pros_and_cons: {
      Benefits: [
        "High demand across industries",
        "Freelancing & remote opportunities",
        "Large app market",
        "High earning potential",
        "Creative + technical field",
      ],
      Drawbacks: [
        "Separate knowledge for different platforms",
        "App store guidelines strict",
        "Hardware testing required",
        "Constant updates & maintenance",
        "High competition",
      ],
    },

    future_trends: [
      "AI-powered mobile apps",
      "AR/VR mobile experiences",
      "Cross-platform dominance (Flutter/React Native)",
      "IoT-enabled apps",
      "5G-based real-time apps",
      "Mobile-first SaaS products",
    ],
  },
  {
    technology: "Cloud Computing",
    short_description:
      "Cloud Computing is a technology that provides servers, storage, networking, databases, and software services over the internet, eliminating the need to maintain physical hardware.",

    detailed_description:
      "Cloud Computing is an on-demand service model where users can remotely access computing power, storage, networking, databases, AI tools, and deployment systems. It provides a scalable, cost-efficient, and secure environment. Cloud providers like AWS, Azure, and Google Cloud offer reliable infrastructure to millions of businesses. Through the cloud, companies can deploy applications, store data, train AI models, run DevOps pipelines, and manage security without the need for physical servers.",

    key_concepts: [
      "IaaS (Infrastructure as a Service)",
      "PaaS (Platform as a Service)",
      "SaaS (Software as a Service)",
      "Virtualization",
      "Serverless Computing",
      "Cloud Storage",
      "Load Balancing",
      "Auto-Scaling",
      "Networking & VPC",
      "Disaster Recovery",
      "Monitoring & Logging",
    ],

    applications: [
      "Web & Mobile App Hosting",
      "Big Data & Analytics",
      "AI/ML Model Deployment",
      "Streaming Platforms",
      "E-commerce Infrastructure",
      "File Storage Systems",
      "IoT Device Management",
      "Enterprise Applications",
      "Game Servers",
      "Backup & Disaster Recovery",
    ],

    skills_required: [
      "Linux & Command Line",
      "Networking (DNS, IP, Subnets)",
      "AWS / Azure / GCP basics",
      "Virtualization & Containers",
      "Docker & Kubernetes",
      "CI/CD Pipelines",
      "APIs & Microservices",
      "Database Management",
      "Scripting (Python/Bash)",
      "Cloud Security",
    ],

    tools_and_technologies: {
      cloud_providers: [
        "AWS",
        "Google Cloud Platform",
        "Microsoft Azure",
        "IBM Cloud",
        "Oracle Cloud",
      ],
      containers: ["Docker", "Kubernetes", "ECS", "GKE"],
      devops: ["Terraform", "Jenkins", "GitHub Actions", "Ansible", "CircleCI"],
      compute_services: ["EC2", "Azure VM", "Cloud Run", "Lambda"],
      databases: ["DynamoDB", "Cloud SQL", "Firebase", "MongoDB Atlas"],
      monitoring: ["CloudWatch", "Grafana", "Prometheus", "Datadog"],
      security_tools: ["IAM", "KMS", "Cloud Firewall"],
      storage_solutions: ["S3", "Cloud Storage", "Azure Blob Storage"],
    },

    roadmap: {
      beginner: [
        "Basics of Cloud (IaaS, PaaS, SaaS)",
        "Linux & command-line basics",
        "Networking basics (DNS, IP, VPN)",
        "Cloud service models & regions",
        "Hands-on: AWS/GCP/Azure free tier",
      ],
      intermediate: [
        "Virtual machines & compute",
        "Cloud storage & databases",
        "Load balancers & Auto-scaling",
        "Serverless basics (AWS Lambda)",
        "Containers: Docker & Kubernetes",
      ],
      advanced: [
        "DevOps integration (CI/CD)",
        "Infrastructure as Code (Terraform)",
        "Cloud security & IAM",
        "Monitoring, logging & alerts",
        "Deploying enterprise-level apps",
      ],
    },

    resources: {
      youtube: [
        "TechWorld With Nana",
        "FreeCodeCamp Cloud Courses",
        "AWS Official Training",
        "Simplilearn Cloud Tutorials",
        "Kunal Kushwaha DevOps Playlist",
        "Google Cloud Tech",
      ],
      documentation: [
        "docs.aws.amazon.com",
        "cloud.google.com/docs",
        "learn.microsoft.com/azure",
        "kubernetes.io/docs",
        "terraform.io/docs",
      ],
      courses: [
        "AWS Certified Cloud Practitioner",
        "Google Cloud Associate Engineer",
        "Azure Fundamentals Certification",
        "Coursera Cloud Architect Program",
        "Udemy AWS + DevOps Bootcamp",
      ],
    },

    interview_questions: [
      "What is Cloud Computing?",
      "What is the difference between IaaS, PaaS, and SaaS?",
      "What is a VPC (Virtual Private Cloud)?",
      "What is the role of a Load Balancer?",
      "How does Auto-scaling work?",
      "What is the difference between S3 and Cloud Storage?",
      "What is Kubernetes?",
      "How does Serverless architecture work?",
      "What are IAM roles and policies?",
      "What does Terraform do?",
    ],

    salary_info: {
      india: {
        fresher: "₹4 LPA – ₹8 LPA",
        experienced: "₹12 LPA – ₹35 LPA",
      },
      global: {
        fresher: "$70,000 – $110,000",
        experienced: "$120,000 – $180,000+",
      },
    },

    job_roles: [
      "Cloud Engineer",
      "Cloud Architect",
      "DevOps Engineer",
      "SRE (Site Reliability Engineer)",
      "Cloud Security Engineer",
      "Cloud Administrator",
      "Solutions Architect",
    ],

    pros_and_cons: {
      Benefits: [
        "High salary packages",
        "Remote-friendly jobs",
        "Global demand",
        "Scalable & modern technology",
        "Large enterprise adoption",
        "DevOps + Cloud career boost",
      ],
      Drawbacks: [
        "Complex tools & configurations",
        "Certifications expensive",
        "Constant learning required",
        "Security risks if misconfigured",
        "High competition",
      ],
    },

    future_trends: [
      "AI-powered cloud automation",
      "Serverless architectures",
      "Edge computing",
      "Hybrid multi-cloud adoption",
      "Zero-trust security",
      "Cloud-native applications",
      "Quantum computing integration",
    ],
  },
  {
    technology: "Cybersecurity",
    short_description:
      "Cybersecurity is the process of protecting systems, networks, data, and applications from hackers, malware, and cyber-attacks.",

    detailed_description:
      "Cybersecurity is a practice that involves protecting digital systems, networks, databases, devices, and applications from unauthorized access, attacks, data breaches, and malware. Modern businesses, banks, hospitals, governments, and IT companies require strong security systems, encryption, firewalls, monitoring tools, and risk management strategies to defend against cyber threats. Cybersecurity professionals use advanced skills such as network security, cloud security, ethical hacking, penetration testing, forensics, and incident response.",

    key_concepts: [
      "Network Security",
      "Application Security",
      "Cloud Security",
      "Encryption & Cryptography",
      "Firewalls & IDS/IPS",
      "Access Control",
      "Authentication & Authorization",
      "Vulnerability Assessment",
      "Penetration Testing",
      "Incident Response",
      "Threat Intelligence",
    ],

    applications: [
      "Banking & Financial Security",
      "Government Data Protection",
      "E-commerce Security",
      "Cloud Infrastructure Protection",
      "Healthcare Security (HIPAA)",
      "Enterprise Network Security",
      "Defense Systems",
      "IoT Device Protection",
      "Mobile App Security",
      "Data Privacy & Compliance",
    ],

    skills_required: [
      "Networking (TCP/IP, DNS, VPN)",
      "Operating Systems (Linux/Windows)",
      "Firewalls & Security Tools",
      "Ethical Hacking Basics",
      "Penetration Testing",
      "Cryptography Fundamentals",
      "SIEM Tools (Splunk, QRadar)",
      "Cloud Security Basics",
      "Scripting (Python/Bash)",
      "Risk Management",
    ],

    tools_and_technologies: {
      security_tools: [
        "Nmap",
        "Wireshark",
        "Burp Suite",
        "Metasploit",
        "Nessus",
        "OpenVAS",
      ],
      siem: ["Splunk", "IBM QRadar", "ELK Stack", "Microsoft Sentinel"],
      forensics_tools: ["Autopsy", "FTK Toolkit", "Volatility"],
      cloud_security: [
        "AWS Security Hub",
        "Azure Defender",
        "GCP Security Command Center",
      ],
      firewall_solutions: ["Palo Alto", "Fortinet", "Cisco ASA", "Check Point"],
      password_security: ["Hashcat", "John the Ripper"],
      editors: ["VS Code", "PyCharm"],
    },

    roadmap: {
      beginner: [
        "Basics of Networking & OSI Model",
        "Linux commands",
        "Firewalls, VPN & Proxy basics",
        "Basic security concepts",
        "Introduction to Ethical Hacking",
      ],
      intermediate: [
        "Web Security (OWASP Top 10)",
        "Network scanning & enumeration",
        "Vulnerability assessment tools",
        "Penetration testing basics",
        "Python scripting for automation",
        "SIEM basics",
      ],
      advanced: [
        "Advanced Penetration Testing",
        "Digital Forensics & Incident Response",
        "Cloud Security",
        "Malware Analysis",
        "Threat Intelligence",
        "Security Compliance (ISO, GDPR, SOC2)",
      ],
    },

    resources: {
      youtube: [
        "HackerSploit",
        "NetworkChuck",
        "The Cyber Mentor",
        "John Hammond",
        "Null Byte",
        "FreeCodeCamp Security Courses",
      ],
      documentation: [
        "owasp.org",
        "nmap.org/book",
        "kali.org/docs",
        "docs.metasploit.com",
        "cisa.gov/resources",
      ],
      courses: [
        "CEH (Certified Ethical Hacker)",
        "CompTIA Security+",
        "TryHackMe Complete Path",
        "Coursera Cybersecurity Specialization",
        "Google Cybersecurity Professional Certificate",
      ],
    },

    interview_questions: [
      "What is Cybersecurity?",
      "What is the difference between a Firewall and IDS/IPS?",
      "What is OWASP Top 10?",
      "How does Encryption work?",
      "What is a Phishing attack?",
      "What is the process of Penetration Testing?",
      "What is Zero Trust Architecture?",
      "What is SQL Injection?",
      "What is Threat Intelligence?",
      "Explain the CIA Triad (Confidentiality, Integrity, Availability).",
    ],

    salary_info: {
      india: {
        fresher: "₹4 LPA – ₹9 LPA",
        experienced: "₹10 LPA – ₹35 LPA",
      },
      global: {
        fresher: "$60,000 – $100,000",
        experienced: "$120,000 – $180,000+",
      },
    },

    job_roles: [
      "Cybersecurity Analyst",
      "Ethical Hacker",
      "Penetration Tester",
      "Security Engineer",
      "SOC Analyst",
      "Network Security Engineer",
      "Cloud Security Engineer",
      "Incident Response Specialist",
      "Forensics Expert",
    ],

    pros_and_cons: {
      Benefits: [
        "High demand worldwide",
        "High salary packages",
        "Remote job opportunities",
        "Socially impactful career",
        "Variety of specializations",
        "Job security is very high",
      ],
      Drawbacks: [
        "Continuous learning required",
        "High pressure during attacks",
        "Certification costs high",
        "Complex tools & technologies",
        "Night shifts in SOC roles",
      ],
    },

    future_trends: [
      "AI-driven threat detection",
      "Cloud security expansion",
      "Zero Trust frameworks",
      "Automated pentesting",
      "Quantum-safe cryptography",
      "IoT and Automotive Security",
      "Cybersecurity + AI integration",
    ],
  },
  {
    technology: "Internet of Things (IoT)",
    short_description:
      "Internet of Things (IoT) is a technology where physical devices, sensors, and machines are connected to the internet to collect, share, and act on data.",

    detailed_description:
      "The Internet of Things (IoT) refers to a connected network of sensors, devices, machines, and software that collect real-time data, analyze it, and make automated decisions. IoT is used in smart homes, smart cities, healthcare, industries, agriculture, transportation, and wearable devices. IoT systems combine sensors, microcontrollers, cloud platforms, data analytics, and wireless communication protocols. Businesses leverage IoT to increase efficiency, enable automation, improve monitoring, and reduce costs.",

    key_concepts: [
      "Sensors & Actuators",
      "Microcontrollers (Arduino, ESP32, Raspberry Pi)",
      "Wireless Communication (WiFi, BLE, Zigbee)",
      "IoT Architecture",
      "Cloud Integration",
      "Real-time Data Processing",
      "MQTT Protocol",
      "Edge Computing",
      "IoT Security",
      "APIs & Dashboards",
    ],

    applications: [
      "Smart Homes",
      "Smart Cities",
      "Industrial Automation (IIoT)",
      "Healthcare Monitoring",
      "Agriculture Automation",
      "Wearable Devices",
      "Transportation & Fleet Tracking",
      "Energy Management",
      "Environmental Monitoring",
      "Retail Automation",
    ],

    skills_required: [
      "Electronics basics",
      "Arduino/ESP32 programming",
      "Python or C/C++",
      "Sensor interfacing",
      "Cloud platforms (AWS, Azure, Google IoT)",
      "Networking fundamentals",
      "MQTT/HTTP protocols",
      "Database basics (Firebase/MongoDB)",
      "Dashboard creation",
      "IoT security basics",
    ],

    tools_and_technologies: {
      microcontrollers: ["Arduino", "ESP8266", "ESP32", "Raspberry Pi"],
      sensors: [
        "Temperature Sensor (DHT11)",
        "Ultrasonic Sensor",
        "Motion Sensor",
        "Gas Sensor",
        "Heart Rate Sensor",
      ],
      communication: ["WiFi", "Bluetooth", "Zigbee", "LoRaWAN", "NFC"],
      cloud_platforms: [
        "AWS IoT Core",
        "Azure IoT Hub",
        "Google IoT Core",
        "ThingsBoard",
        "Blynk",
      ],
      databases: ["Firebase", "MongoDB", "InfluxDB"],
      devops: ["Docker", "Kubernetes (IoT Edge)", "GitHub"],
      editors: ["Arduino IDE", "VS Code", "Thonny"],
    },

    roadmap: {
      beginner: [
        "Basics of electronics",
        "Arduino programming",
        "Simple sensor projects",
        "LED, motor control basics",
        "Serial monitor data reading",
      ],
      intermediate: [
        "ESP8266/ESP32 WiFi projects",
        "IoT protocols (MQTT/HTTP)",
        "Cloud database integration",
        "Dashboards using ThinkSpeak/Blynk",
        "Smart home mini projects",
      ],
      advanced: [
        "Industrial IoT systems",
        "Edge computing",
        "Complex sensor networks",
        "AI + IoT integration",
        "IoT Security",
        "Scalable cloud architecture",
      ],
    },

    resources: {
      youtube: [
        "CodeWithHarry",
        "TechHut",
        "The Net Ninja",
        "GreatScott!",
        "FreeCodeCamp IoT Tutorials",
        "DroneBot Workshop",
      ],
      documentation: [
        "arduino.cc",
        "raspberrypi.org/documentation",
        "mqtt.org",
        "aws.amazon.com/iot",
        "blynk.io/docs",
      ],
      courses: [
        "Coursera IoT Specialization",
        "Udemy Internet of Things Bootcamp",
        "Google IoT Certification",
        "FreeCodeCamp IoT Basics",
      ],
    },

    interview_questions: [
      "What is IoT?",
      "What is the difference between a sensor and an actuator?",
      "What is the MQTT protocol?",
      "Explain the IoT architecture.",
      "What is edge computing?",
      "What is the difference between Arduino and Raspberry Pi?",
      "How does a smart home system work?",
      "What are the security challenges in IoT?",
    ],

    salary_info: {
      india: {
        fresher: "₹3.5 LPA – ₹7 LPA",
        experienced: "₹8 LPA – ₹22 LPA",
      },
      global: {
        fresher: "$55,000 – $90,000",
        experienced: "$110,000 – $160,000+",
      },
    },

    job_roles: [
      "IoT Developer",
      "Embedded Systems Engineer",
      "IoT Cloud Engineer",
      "IoT Security Analyst",
      "Hardware Engineer",
      "Automation Engineer",
      "Field IoT Technician",
    ],

    pros_and_cons: {
      Benefits: [
        "High growth industry",
        "Huge demand in smart technologies",
        "Hardware + Software learning",
        "Excellent salary packages",
        "Real-world impactful projects",
      ],
      Drawbacks: [
        "Complex hardware debugging",
        "Security threats high",
        "Multiple technologies seekhna padta hai",
        "Costly hardware components",
        "Real-time testing required",
      ],
    },

    future_trends: [
      "AI + IoT (AIoT)",
      "Self-driving vehicle systems",
      "Smart city automation",
      "5G-powered IoT",
      "Digital twins",
      "Wearable health tech",
      "Industrial robotics integration",
    ],
  },
  {
    technology: "Robotics",
    short_description:
      "Robotics is a field in which robots are designed, built, programmed, and operated to perform human-like or automated tasks.",

    detailed_description:
      "Robotics engineering is an interdisciplinary field that combines mechanical engineering, electronics, computer science, and AI. Robots use sensors, actuators, controllers, and algorithms to understand their environment and perform actions. Robotics is applied in manufacturing, healthcare, defense, space, agriculture, home automation, and research laboratories. Modern robotics often integrates AI, machine learning, computer vision, and IoT.",
    key_concepts: [
      "Sensors & Actuators",
      "Microcontrollers & Microprocessors",
      "Robot Kinematics & Dynamics",
      "Path Planning",
      "Computer Vision",
      "Autonomous Navigation",
      "Machine Learning Integration",
      "ROS (Robot Operating System)",
      "Embedded Systems",
      "SLAM (Simultaneous Localization and Mapping)",
    ],

    applications: [
      "Industrial Robots (Manufacturing)",
      "Medical Robots & Surgical Robotics",
      "Service Robots",
      "Drones & UAVs",
      "Autonomous Vehicles",
      "Agricultural Robots",
      "Military & Defense Robots",
      "Warehouse Automation",
      "Humanoid Robots",
      "Home Automation Robots",
    ],

    skills_required: [
      "C/C++ Programming",
      "Python for robotics",
      "Electronics & Circuits",
      "Mechanical basics",
      "Kinematics & Dynamics",
      "ROS Framework",
      "Computer Vision (OpenCV)",
      "AI/ML basics",
      "Sensor Interfacing",
      "Path Planning Algorithms",
    ],

    tools_and_technologies: {
      hardware: [
        "Arduino",
        "Raspberry Pi",
        "Jetson Nano",
        "ESP32",
        "L298N Motor Driver",
      ],
      sensors: [
        "Ultrasonic Sensor",
        "LiDAR",
        "IMU Sensor",
        "Camera Module",
        "IR Sensors",
      ],
      software: ["ROS", "Gazebo", "MATLAB", "OpenCV", "TensorFlow", "PyTorch"],
      mechanical: [
        "Servo Motors",
        "Stepper Motors",
        "DC Motors",
        "Robotic Arms",
        "Chassis Kits",
      ],
      communication: ["Bluetooth", "WiFi", "CAN Bus", "Zigbee"],
      cloud_platforms: ["AWS RoboMaker", "Google Robotics", "Azure Robotics"],
      editors: ["VS Code", "Arduino IDE", "PyCharm"],
    },

    roadmap: {
      beginner: [
        "Basics of electronics",
        "Arduino programming",
        "Simple line follower robot",
        "Motor driver basics",
        "Sensor integration (Ultrasonic, IR)",
      ],
      intermediate: [
        "Raspberry Pi projects",
        "Computer Vision basics",
        "ROS beginner level",
        "Obstacle avoidance robot",
        "Mechanical chassis building",
      ],
      advanced: [
        "SLAM implementation",
        "Autonomous navigation",
        "AI + Robotics integration",
        "Humanoid robotics",
        "Robotic arm control",
        "Advanced ROS (Navigation Stack)",
      ],
    },

    resources: {
      youtube: [
        "DroneBot Workshop",
        "IEEE Spectrum Robotics",
        "FreeCodeCamp Robotics Tutorials",
        "TechHut",
        "Robotics with ROS",
        "Open Robotics (ROS Official)",
      ],
      documentation: [
        "ros.org/documentation",
        "opencv.org",
        "arduino.cc",
        "raspberrypi.org/documentation",
        "nvidia.com/embedded",
      ],
      courses: [
        "Coursera – Robotics Specialization",
        "Udacity Robotics Nanodegree",
        "MIT OpenCourseWare – Robotics",
        "Udemy Robotics Bootcamp",
        "Harvard CS50 Robotics",
      ],
    },

    interview_questions: [
      "What is Robotics?",
      "What is the difference between a sensor and an actuator?",
      "What is ROS and how is it used?",
      "What is Kinematics?",
      "What is SLAM?",
      "Explain the workflow of an autonomous robot.",
      "What is Computer Vision?",
      "What is the role of AI in Robotics?",
    ],

    salary_info: {
      india: {
        fresher: "₹4.5 LPA – ₹8 LPA",
        experienced: "₹10 LPA – ₹25 LPA",
      },
      global: {
        fresher: "$65,000 – $95,000",
        experienced: "$120,000 – $180,000+",
      },
    },

    job_roles: [
      "Robotics Engineer",
      "Embedded Systems Engineer",
      "Automation Engineer",
      "Robotics Programmer",
      "AI Robotics Engineer",
      "Mechatronics Engineer",
      "ROS Developer",
      "Computer Vision Engineer",
    ],

    pros_and_cons: {
      Benefits: [
        "High demand in automation",
        "Future-ready career",
        "AI + Robotics booming industry",
        "Creative + technical field",
        "Great salary and global scope",
      ],
      Drawbacks: [
        "Complex mechanical + coding skills needed",
        "Hardware cost high",
        "Debugging time-consuming",
        "Safety concerns in industrial robots",
        "Continuous learning required",
      ],
    },

    future_trends: [
      "AI-powered Robots",
      "Humanoid Robotics",
      "Autonomous Vehicles",
      "Robotic Surgery",
      "AI + Computer Vision Robots",
      "Smart Manufacturing (Industry 4.0)",
      "Space Robotics",
      "Drone Swarms",
    ],
  },
  {
    technology: "Blockchain",
    short_description:
      "Blockchain is a decentralized digital ledger technology where data is stored in the form of blocks, and each block is cryptographically secured.",

    detailed_description:
      "Blockchain is a distributed ledger system where data is stored across multiple nodes, ensuring transparency, security, and immutability. Transactions are recorded in blocks, and each block is cryptographically linked to the previous one, forming a 'chain'. Blockchain is widely used in cryptocurrencies, smart contracts, supply chain management, banking, healthcare, cybersecurity, NFTs, and decentralized applications (DApps). It creates trustless systems that do not require any central authority.",

    key_concepts: [
      "Distributed Ledger",
      "Cryptographic Hashing",
      "Consensus Algorithms",
      "Smart Contracts",
      "Blockchain Architecture",
      "Public vs Private Blockchain",
      "Nodes & Mining",
      "Decentralization",
      "Peer-to-Peer Network",
      "Tokenomics",
    ],

    applications: [
      "Cryptocurrency Systems (Bitcoin, Ethereum)",
      "Smart Contracts",
      "Supply Chain Management",
      "Decentralized Finance (DeFi)",
      "NFT Marketplaces",
      "Digital Identity Verification",
      "Voting Systems",
      "Healthcare Records",
      "Asset Tokenization",
      "Cybersecurity",
    ],

    skills_required: [
      "Blockchain fundamentals",
      "Cryptography basics",
      "Solidity programming",
      "Smart contract development",
      "Ethereum & EVM understanding",
      "JavaScript or Python",
      "Web3.js / Ethers.js",
      "Node.js backend",
      "Consensus algorithms",
      "Blockchain security",
    ],

    tools_and_technologies: {
      blockchain_platforms: [
        "Ethereum",
        "Solana",
        "Polygon",
        "Binance Smart Chain",
        "Hyperledger Fabric",
        "Cardano",
      ],
      smart_contract_tools: [
        "Solidity",
        "Remix IDE",
        "Hardhat",
        "Truffle",
        "Ganache",
      ],
      libraries: ["Web3.js", "Ethers.js"],
      databases: ["IPFS", "Filecoin", "BigchainDB"],
      wallets: ["MetaMask", "Phantom", "Trust Wallet"],
      devops: ["Docker", "Kubernetes", "GitHub Actions"],
      cloud_platforms: ["Infura", "Alchemy", "QuickNode"],
      editors: ["VS Code", "Remix IDE"],
    },

    roadmap: {
      beginner: [
        "Basics of blockchain & decentralization",
        "Cryptography basics",
        "Ethereum introduction",
        "Wallets & transactions understanding",
        "Reading smart contract code",
      ],
      intermediate: [
        "Solidity programming",
        "Smart contract deployment",
        "Web3.js/Ethers.js integration",
        "Building simple DApps",
        "Test networks (Goerli, Sepolia)",
      ],
      advanced: [
        "DeFi applications",
        "NFT marketplace development",
        "Layer-2 scaling solutions",
        "Blockchain security",
        "Consensus algorithm deep-dive",
        "Building full Web3 ecosystems",
      ],
    },

    resources: {
      youtube: [
        "Whiteboard Crypto",
        "Dapp University",
        "LearnWeb3 DAO",
        "FreeCodeCamp Blockchain Tutorials",
        "Simplilearn Blockchain",
        "EatTheBlocks",
      ],
      documentation: [
        "ethereum.org/developers",
        "soliditylang.org/docs",
        "hyperledger.org/use",
        "web3js.readthedocs.io",
        "ethers.org",
      ],
      courses: [
        "Coursera – Blockchain Specialization",
        "Udacity Blockchain Developer Nanodegree",
        "FreeCodeCamp Solidity & Web3",
        "Udemy Ethereum Blockchain Bootcamp",
        "MIT Blockchain Course",
      ],
    },

    interview_questions: [
      "What is Blockchain?",
      "What is the difference between public and private blockchai",
      "What is a smart contract?",
      "Explain consensus algorithms.",
      "What is the difference between Ethereum and Bitcoin?",
      "What is the role of hashing?",
      "What is DeFi (Decentralized Finance)?",
      "What is a 51% attack?",
    ],
    salary_info: {
      india: {
        fresher: "₹5 LPA – ₹10 LPA",
        experienced: "₹12 LPA – ₹30 LPA",
      },
      global: {
        fresher: "$70,000 – $110,000",
        experienced: "$150,000 – $200,000+",
      },
    },

    job_roles: [
      "Blockchain Developer",
      "Smart Contract Engineer",
      "Web3 Developer",
      "Blockchain Architect",
      "DeFi Developer",
      "Blockchain Security Analyst",
      "DApp Developer",
      "Crypto Research Analyst",
    ],

    pros_and_cons: {
      Benefits: [
        "High salary opportunities",
        "Fast-growing global industry",
        "Remote-friendly work",
        "Decentralization & transparency",
        "Future-ready technology",
      ],
      Drawbacks: [
        "Complex concepts (cryptography & consensus)",
        "High security risks",
        "Highly volatile industry",
        "Constantly evolving technology",
        "Regulatory uncertainties",
      ],
    },

    future_trends: [
      "Web3 & Decentralized Internet",
      "CBDCs (Central Bank Digital Currencies)",
      "Blockchain + AI",
      "Layer-2 Scaling Solutions",
      "Decentralized Cloud Storage",
      "Enterprise Blockchain",
      "Smart Contract Automation",
      "Tokenization of Real-world Assets (RWA)",
    ],
  },
  {
    technology: "Biotechnology",
    short_description:
      "Biotechnology is a field that uses living organisms, cells, and biomolecules to develop products, processes, and technologies.",

    detailed_description:
      "Biotechnology is an interdisciplinary science that combines biology, chemistry, genetics, and engineering. It is applied in healthcare, agriculture, the food industry, environmental management, pharmaceuticals, and industrial processes. Modern biotechnology utilizes genetic engineering, CRISPR, synthetic biology, bioinformatics, and molecular biology to develop disease treatments, improve crops, produce biofuels, and create sustainable products. Biotechnology research and innovations have a positive impact on human health, the environment, and the economy.",

    key_concepts: [
      "Genetic Engineering",
      "Molecular Biology",
      "Cell Culture Techniques",
      "CRISPR & Gene Editing",
      "Recombinant DNA Technology",
      "Bioinformatics",
      "Protein Engineering",
      "Fermentation Technology",
      "Bioprocessing",
      "Synthetic Biology",
    ],

    applications: [
      "Pharmaceuticals & Drug Development",
      "Agricultural Biotechnology (GM Crops)",
      "Industrial Enzymes & Biofuels",
      "Healthcare Diagnostics",
      "Gene Therapy",
      "Environmental Biotech (Bioremediation)",
      "Food Biotechnology",
      "Stem Cell Research",
      "Synthetic Biology Products",
      "Biomanufacturing",
    ],

    skills_required: [
      "Molecular Biology techniques",
      "Microbiology basics",
      "Genetic Engineering concepts",
      "Cell Culture & Tissue Engineering",
      "CRISPR & Gene Editing",
      "Bioinformatics & Data Analysis",
      "Lab Safety & Protocols",
      "Protein Expression & Purification",
      "Fermentation & Bioprocessing",
      "Scientific Reporting & Documentation",
    ],

    tools_and_technologies: {
      lab_equipment: [
        "PCR Machine",
        "Centrifuge",
        "Microscope",
        "Spectrophotometer",
        "Autoclave",
        "Bioreactor",
      ],
      software_tools: [
        "BLAST",
        "Geneious",
        "SnapGene",
        "PyMOL",
        "Bioconductor",
        "R",
        "Python for Bioinformatics",
      ],
      techniques: [
        "DNA/RNA Extraction",
        "Gel Electrophoresis",
        "Western Blotting",
        "ELISA",
        "CRISPR Editing",
        "Cell Culture",
      ],
      databases: ["NCBI", "Ensembl", "UniProt", "PDB"],
      cloud_platforms: [
        "AWS Genomics",
        "Google Cloud Life Sciences",
        "Microsoft Azure Bioinformatics",
      ],
    },

    roadmap: {
      beginner: [
        "Basics of biology & genetics",
        "Microbiology lab techniques",
        "DNA extraction & gel electrophoresis",
        "Understanding cells & tissues",
        "Introduction to bioinformatics",
      ],
      intermediate: [
        "Genetic engineering & cloning",
        "CRISPR gene editing basics",
        "Protein expression & purification",
        "Cell culture experiments",
        "Fermentation & bioprocessing basics",
      ],
      advanced: [
        "Synthetic biology projects",
        "Gene therapy research",
        "Industrial biotechnology processes",
        "Advanced bioinformatics & genomics",
        "Stem cell & regenerative medicine studies",
      ],
    },

    resources: {
      youtube: [
        "Kurzgesagt – Biology",
        "Learn Biotech",
        "FreeCodeCamp Biotechnology",
        "MIT OpenCourseWare Biology",
        "iBiology",
        "Nature Video Channel",
      ],
      documentation: [
        "ncbi.nlm.nih.gov",
        "ensembl.org",
        "uniprot.org",
        "pdb.org",
        "bioconductor.org",
      ],
      courses: [
        "Coursera – Biotechnology Specialization",
        "edX – Modern Biotechnology",
        "Udemy Biotechnology Bootcamp",
        "MIT OpenCourseWare – Molecular Biology",
        "Harvard Bioinformatics Courses",
      ],
    },

    interview_questions: [
      "What is Biotechnology?",
      "What is the difference between Genetic Engineering and CRISPR?",
      "Explain the process of DNA and RNA extraction.",
      "What is Bioinformatics?",
      "What are Fermentation and Bioprocessing?",
      "What is Gene Therapy?",
      "Where are Stem Cells used?",
      "Give examples of Industrial Biotechnology.",
    ],

    salary_info: {
      india: {
        fresher: "₹4 LPA – ₹8 LPA",
        experienced: "₹10 LPA – ₹28 LPA",
      },
      global: {
        fresher: "$60,000 – $90,000",
        experienced: "$120,000 – $180,000+",
      },
    },

    job_roles: [
      "Biotechnologist",
      "Molecular Biologist",
      "Genetic Engineer",
      "Bioinformatics Scientist",
      "Research Scientist",
      "Clinical Research Associate",
      "Bioprocess Engineer",
      "Laboratory Technician",
    ],

    pros_and_cons: {
      Benefits: [
        "High growth in healthcare & pharma",
        "Cutting-edge research opportunities",
        "Global demand for biotech experts",
        "Impactful work on human health & environment",
        "Interdisciplinary knowledge development",
      ],
      Drawbacks: [
        "Lab experiments time-consuming",
        "Expensive equipment & consumables",
        "High safety and ethical regulations",
        "Requires continuous learning",
        "Competitive research environment",
      ],
    },

    future_trends: [
      "CRISPR & Gene Editing advancements",
      "Personalized medicine & genomics",
      "Synthetic biology breakthroughs",
      "Stem cell & regenerative therapies",
      "Biomanufacturing & industrial biotech",
      "Bioinformatics & AI integration",
      "Environmental & sustainable biotechnology",
      "Agricultural biotech for food security",
    ],
  },
  {
    technology: "Medical & Health Technology",
    short_description:
      "Medical & Health Technology is the use of advanced tools, devices, and software in the healthcare sector to improve patient care, diagnostics, and treatment.",

    detailed_description:
      "Medical & Health Technology involves the use of digital tools, medical devices, wearable sensors, AI-driven diagnostics, telemedicine, and health management software to enhance healthcare delivery. Its goal is accurate diagnosis, effective treatment, patient monitoring, and disease prevention. In modern healthcare, the integration of Robotics, IoT, AI, Machine Learning, and Cloud Computing is common, improving efficiency and patient safety in hospitals and clinics.",

    key_concepts: [
      "Medical Devices & Equipment",
      "Telemedicine Platforms",
      "Electronic Health Records (EHR/EMR)",
      "Wearable Health Sensors",
      "AI & Machine Learning in Healthcare",
      "Health Data Analytics",
      "Remote Patient Monitoring",
      "Medical Imaging & Diagnostics",
      "Healthcare IoT",
      "Regulatory Compliance (HIPAA, FDA)",
    ],

    applications: [
      "Hospital Management Systems",
      "Telemedicine & Virtual Consultations",
      "Wearable Health Devices",
      "AI-based Diagnostics",
      "Medical Imaging (X-ray, MRI, CT scan)",
      "Remote Patient Monitoring",
      "Robotic Surgery",
      "Health Data Analytics & Prediction",
      "Disease Tracking & Prevention",
      "Pharmaceutical & Drug Development",
    ],

    skills_required: [
      "Healthcare domain knowledge",
      "Medical device operation",
      "AI & Machine Learning basics",
      "Data Analytics (Python/R)",
      "IoT device integration",
      "Cloud computing basics",
      "Electronic Health Record systems",
      "Programming for medical software",
      "Regulatory standards knowledge",
      "Telemedicine platform usage",
    ],

    tools_and_technologies: {
      medical_devices: [
        "ECG Machines",
        "MRI/CT Scanners",
        "Blood Pressure Monitors",
        "Pulse Oximeters",
        "Robotic Surgery Systems",
      ],
      software_platforms: [
        "EHR/EMR Systems",
        "Telemedicine Platforms",
        "Health Analytics Software",
        "Medical Imaging Software",
        "Cloud Health Platforms",
      ],
      programming_tools: ["Python", "R", "MATLAB", "TensorFlow", "PyTorch"],
      wearable_tech: [
        "Smartwatches",
        "Fitness Bands",
        "Glucose Monitors",
        "Heart Rate Sensors",
      ],
      cloud_platforms: [
        "AWS HealthLake",
        "Microsoft Azure Healthcare",
        "Google Cloud Healthcare API",
      ],
      databases: ["FHIR", "HL7", "SQL & NoSQL databases"],
    },

    roadmap: {
      beginner: [
        "Basics of healthcare and medical terminologies",
        "Understanding medical devices and sensors",
        "Introduction to EHR/EMR systems",
        "Data collection from wearable devices",
        "Basic health data analysis",
      ],
      intermediate: [
        "Telemedicine platform integration",
        "AI-based diagnostic tools",
        "Medical imaging analysis using Python/ML",
        "IoT-based patient monitoring",
        "Health data visualization and dashboards",
      ],
      advanced: [
        "Robotic-assisted surgery",
        "Predictive analytics in healthcare",
        "Advanced AI/ML algorithms for diagnostics",
        "Healthcare IoT ecosystem development",
        "Regulatory compliance and security",
      ],
    },

    resources: {
      youtube: [
        "MedTech Innovator",
        "Healthcare Triage",
        "AI for Healthcare",
        "FreeCodeCamp Health Tech Tutorials",
        "Digital Health Today",
        "MIT OpenCourseWare – Health Technology",
      ],
      documentation: [
        "who.int",
        "healthit.gov",
        "fda.gov/medical-devices",
        "hl7.org",
        "fhir.org",
      ],
      courses: [
        "Coursera – Health Informatics Specialization",
        "edX – Digital Health",
        "Udemy Health Technology Bootcamp",
        "MIT OpenCourseWare – Medical Device Engineering",
        "Stanford Health Tech Courses",
      ],
    },

    interview_questions: [
      "What is Medical & Health Technology?",
      "How does Telemedicine work?",
      "What are the types of wearable health devices?",
      "What is the role of AI in healthcare?",
      "What are Electronic Health Records (EHRs)?",
      "How is AI used in medical imaging?",
      "What are the benefits of remote patient monitoring?",
      "What are the important aspects of healthcare data security?",
    ],

    salary_info: {
      india: {
        fresher: "₹4.5 LPA – ₹9 LPA",
        experienced: "₹10 LPA – ₹30 LPA",
      },
      global: {
        fresher: "$65,000 – $95,000",
        experienced: "$120,000 – $180,000+",
      },
    },

    job_roles: [
      "Health Tech Developer",
      "Medical Device Engineer",
      "Clinical Data Analyst",
      "Telemedicine Specialist",
      "AI Healthcare Engineer",
      "Health Informatics Specialist",
      "Biomedical Engineer",
      "Medical Robotics Engineer",
    ],

    pros_and_cons: {
      Benefits: [
        "High demand in healthcare industry",
        "Opportunities for AI & IoT integration",
        "Impactful work on patient care",
        "Global career opportunities",
        "Cutting-edge technology exposure",
      ],
      Drawbacks: [
        "Regulatory compliance required",
        "Medical device costs high",
        "Data privacy and security challenges",
        "Continuous learning needed",
        "Healthcare errors can have serious consequences",
      ],
    },

    future_trends: [
      "AI-assisted diagnostics & treatment",
      "Remote patient monitoring & telemedicine",
      "Wearable health devices",
      "Robotic surgery advancements",
      "Predictive analytics in healthcare",
      "Cloud-based healthcare solutions",
      "Integration of IoT in hospitals",
      "Personalized medicine & genomics",
    ],
  },
  {
    technology: "Environmental Technology",

    short_description:
      "Environmental Technology is the technology used to improve pollution control, waste management, renewable energy, and sustainability.",

    detailed_description:
      "Environmental Technology (EnvTech) uses advanced scientific tools, digital systems, and eco-friendly innovations to protect, restore, and make the environment sustainable. It includes concepts like pollution monitoring, renewable energy generation, water purification, waste-to-energy conversion, green building systems, and climate analysis. Its main goal is to reduce pollution, conserve natural resources, and mitigate the negative effects of climate change.",

    key_concepts: [
      "Pollution Control Technology",
      "Renewable Energy Systems",
      "Waste Management & Recycling",
      "Water Treatment & Purification",
      "Air Quality Monitoring",
      "Sustainable Architecture",
      "Climate Change Technology",
      "Carbon Capture & Storage (CCS)",
      "Environmental Impact Assessment (EIA)",
      "Green Materials & Eco-Innovation",
    ],

    applications: [
      "Solar, wind, hydro renewable energy plants",
      "Air & water pollution monitoring",
      "Waste-to-energy conversion projects",
      "Green buildings & sustainable construction",
      "Recycling & waste segregation systems",
      "Water purification plants",
      "Smart environmental IoT sensors",
      "Climate change modeling & prediction",
      "Carbon reduction technologies",
      "Sustainable farming & agro-tech",
    ],

    skills_required: [
      "Environmental science basics",
      "GIS & Remote Sensing",
      "Renewable energy systems knowledge",
      "IoT-based environmental monitoring",
      "Data analysis & reporting",
      "Waste management systems",
      "Water and air treatment technology",
      "Sustainable materials knowledge",
      "Environmental compliance & regulations",
      "Climate modeling basics",
    ],

    tools_and_technologies: {
      renewable_energy_systems: [
        "Solar Panels",
        "Wind Turbines",
        "Hydro Generators",
        "Biogas Plants",
      ],
      monitoring_devices: [
        "Air Quality Sensors",
        "Water Testing Kits",
        "IoT Environmental Sensors",
      ],
      software_platforms: [
        "ArcGIS",
        "QGIS",
        "ENVI",
        "AutoCAD Green Building Tools",
      ],
      pollution_control_tools: [
        "Electrostatic Precipitators",
        "Scrubbers",
        "Filters",
        "Carbon Capture Systems",
      ],
      recycling_and_waste: [
        "Recycling Machinery",
        "Composting Systems",
        "Waste Sorting Systems",
      ],
      climate_analysis_tools: [
        "AI Climate Models",
        "Weather Simulation Tools",
        "Satellite Data Systems",
      ],
    },

    roadmap: {
      beginner: [
        "Basics of environment and sustainability",
        "Pollution types & control methods",
        "Introduction to renewable energy",
        "Basic water treatment concepts",
        "Air quality monitoring fundamentals",
      ],
      intermediate: [
        "GIS & Remote Sensing for environment",
        "Solar & wind system design",
        "IoT-based environmental monitoring",
        "Recycling and waste management systems",
        "Green building principles",
      ],
      advanced: [
        "Carbon capture & storage technologies",
        "Climate modeling and prediction",
        "Advanced pollution control systems",
        "Large-scale renewable energy engineering",
        "Environmental policy & regulatory compliance",
      ],
    },

    resources: {
      youtube: [
        "National Geographic – Environment",
        "TED Talks – Climate & Sustainability",
        "Real Engineering – Renewable Energy",
        "Science Channel – Green Tech",
        "Sustainable Human",
        "UN Environment Programme",
      ],
      documentation: [
        "unep.org",
        "ipcc.ch",
        "energy.gov",
        "environment.gov.au",
        "epa.gov",
      ],
      courses: [
        "Coursera – Environmental Sustainability",
        "edX – Renewable Energy Engineering",
        "Udemy – Environmental Science",
        "MIT OpenCourseWare – Climate Science",
        "Stanford Online – Sustainable Energy",
      ],
    },

    interview_questions: [
      "What is Environmental Technology?",
      "How do renewable energy systems work?",
      "Which sensors are used for air quality monitoring?",
      "What are the major methods of water purification?",
      "What is Carbon Capture & Storage?",
      "What is an Environmental Impact Assessment?",
      "How does green building technology work?",
      "Explain the principle of waste-to-energy plants.",
    ],

    salary_info: {
      india: {
        fresher: "₹4 LPA – ₹8 LPA",
        experienced: "₹10 LPA – ₹28 LPA",
      },
      global: {
        fresher: "$55,000 – $80,000",
        experienced: "$100,000 – $150,000+",
      },
    },

    job_roles: [
      "Environmental Engineer",
      "Sustainability Specialist",
      "Renewable Energy Engineer",
      "Waste Management Engineer",
      "Environmental Data Analyst",
      "Climate Change Analyst",
      "Pollution Control Officer",
      "Green Building Engineer",
    ],

    pros_and_cons: {
      Benefits: [
        "High global demand",
        "Government-funded projects",
        "Environment ko improve karne ka real impact",
        "Long-term sustainable career",
        "Growing renewable energy industry",
      ],
      Drawbacks: [
        "Field work required",
        "Technical complexity high",
        "Project cost high hota hai",
        "Regulation-based industry",
        "Slow adoption in rural areas",
      ],
    },

    future_trends: [
      "Carbon-free cities",
      "Smart environmental IoT networks",
      "AI-based climate prediction",
      "Advanced carbon capture systems",
      "Green hydrogen & fuel tech",
      "Large-scale recycling automation",
      "Net-zero energy buildings",
      "Sustainable smart agriculture",
    ],
  },

  {
    technology: "Space Technology",

    short_description:
      "Space Technology uses advanced systems, satellites, rockets, sensors, and scientific instruments to aid in space exploration, communication, navigation, and observation.",

    detailed_description:
      "Space Technology (Aerospace & Space Science) is a combination of scientific, engineering, and computational tools used for space exploration, satellite communication, GPS navigation, space observation, planetary studies, and space mission planning. It involves rockets, spacecraft, satellites, telescopes, launch vehicles, robotics, AI-based navigation systems, and remote sensing technologies. Its primary aim is to enhance our understanding of Earth and the universe, enable global communication, weather forecasting, defense surveillance, and support scientific discovery.",

    key_concepts: [
      "Satellite Technology",
      "Rocket Propulsion",
      "Orbital Mechanics",
      "Remote Sensing & Earth Observation",
      "Space Robotics",
      "Astronomy & Astrophysics",
      "GPS & Navigation Systems",
      "Space Communication",
      "Spacecraft Design",
      "Deep Space Exploration",
    ],

    applications: [
      "Satellite TV & communication",
      "GPS navigation systems",
      "Weather forecasting & climate monitoring",
      "Defense surveillance",
      "Planetary research & space exploration",
      "Remote sensing for agriculture",
      "Disaster monitoring",
      "Internet from space (Starlink, OneWeb)",
      "Space tourism",
      "Asteroid tracking & planetary defense",
    ],

    skills_required: [
      "Aerospace basics",
      "Rocket propulsion concepts",
      "Orbital mechanics",
      "Remote sensing & satellite imaging",
      "Physics & mathematics",
      "CAD & simulation tools",
      "Robotics fundamentals",
      "AI & ML for space navigation",
      "Programming (Python, MATLAB, C++)",
      "Astrophysics basics",
    ],

    tools_and_technologies: {
      satellite_systems: [
        "Communication Satellites",
        "Earth Observation Satellites",
        "GNSS Systems",
        "Weather Satellites",
      ],
      software_platforms: [
        "MATLAB",
        "Simulink",
        "STK (Satellite Toolkit)",
        "AutoCAD Aerospace",
        "Python Astropy",
      ],
      propulsion_systems: [
        "Liquid Propellant Engines",
        "Solid Rocket Boosters",
        "Ion Thrusters",
        "Hybrid Engines",
      ],
      remote_sensing_tools: [
        "GIS Software",
        "Spectral Imaging Systems",
        "Satellite Sensors",
        "Space Telescopes",
      ],
      robotics_and_ai: [
        "Space Rovers",
        "Robotic Arms",
        "AI Navigation Systems",
        "Autonomous Drones",
      ],
      communication_systems: [
        "Deep Space Network",
        "High-Frequency Transmitters",
        "Laser Communication Systems",
      ],
    },

    roadmap: {
      beginner: [
        "Basics of astronomy & space science",
        "Introduction to satellites",
        "Basics of rockets and propulsion",
        "Space communication fundamentals",
        "Introduction to orbital mechanics",
      ],
      intermediate: [
        "Satellite imaging & remote sensing",
        "CAD tools for spacecraft design",
        "Python for space data analysis",
        "Aerospace material science",
        "GPS & navigation system concepts",
      ],
      advanced: [
        "Rocket propulsion engineering",
        "Deep space exploration systems",
        "AI-based navigation & robotics",
        "Advanced orbital simulation",
        "Spacecraft thermal & structural design",
      ],
    },

    resources: {
      youtube: [
        "NASA",
        "ISRO Official",
        "SpaceX",
        "Kurzgesagt – Universe Topics",
        "Real Engineering – Rocket Science",
        "ESA (European Space Agency)",
      ],
      documentation: [
        "nasa.gov",
        "isro.gov.in",
        "esa.int",
        "space-track.org",
        "universe.nasa.gov",
      ],
      courses: [
        "Coursera – Space Engineering Specialization",
        "edX – Astrophysics & Space Science",
        "Udemy – Satellite Communication",
        "MIT OpenCourseWare – Aerospace Engineering",
        "Stanford – Rocket Propulsion Courses",
      ],
    },

    interview_questions: [
      "What is Space Technology?",
      "How is a satellite's orbit determined?",
      "What are the types of rocket propulsion?",
      "What are the uses of remote sensing?",
      "How does the GPS system work?",
      "Difference between Geostationary and Polar orbits?",
      "What is the role of AI in space robotics?",
      "How is communication handled in deep space missions?",
    ],

    salary_info: {
      india: {
        fresher: "₹6 LPA – ₹12 LPA",
        experienced: "₹15 LPA – ₹40 LPA",
      },
      global: {
        fresher: "$80,000 – $110,000",
        experienced: "$130,000 – $200,000+",
      },
    },

    job_roles: [
      "Aerospace Engineer",
      "Satellite Systems Engineer",
      "Rocket Propulsion Engineer",
      "Remote Sensing Specialist",
      "Space Robotics Engineer",
      "Astrophysicist",
      "GNSS Navigation Engineer",
      "Space Mission Analyst",
    ],

    pros_and_cons: {
      Benefits: [
        "High-paying industry",
        "Cutting-edge technology exposure",
        "Global career opportunities",
        "Innovation-driven field",
        "Huge impact on science & communication",
      ],
      Drawbacks: [
        "Highly technical and complex",
        "Expensive projects",
        "High risk-based field",
        "Continuous upskilling required",
        "Long development cycles",
      ],
    },

    future_trends: [
      "Reusable rockets",
      "Human Mars missions",
      "Space tourism",
      "Quantum communication satellites",
      "AI-based autonomous spacecraft",
      "Space mining",
      "Interplanetary internet",
      "Deep space telescopes & observatories",
    ],
  },
  {
    technology: "Agricultural Technology",

    short_description:
      "Agricultural Technology or AgriTech uses modern tools, IoT sensors, automation, AI, drones, and data analytics to make farming smarter, more efficient, and highly productive.",

    detailed_description:
      "Agricultural Technology combines modern innovations and scientific tools to make farming activities—such as crop production, soil monitoring, irrigation, harvesting, and livestock management—automated, smart, and data-driven. AgriTech includes IoT sensors, drones, AI-driven prediction systems, smart irrigation, biotechnology, GPS-enabled tractors, greenhouse automation, and climate-smart farming tools. Its main goal is to increase productivity with fewer resources, reduce waste, promote sustainable farming, and improve climate resilience.",

    key_concepts: [
      "Smart Farming (Precision Agriculture)",
      "IoT-based Soil & Crop Monitoring",
      "Drones for Surveillance & Spraying",
      "Automated Irrigation Systems",
      "AI & ML for Crop Prediction",
      "Remote Sensing & GIS Mapping",
      "Hydroponics & Aeroponics",
      "Greenhouse Automation",
      "Agricultural Biotechnology",
      "Farm Robotics & Machinery",
    ],

    applications: [
      "Soil moisture and nutrient monitoring",
      "Smart irrigation systems",
      "Drone-based crop health monitoring",
      "AI-based yield prediction",
      "Greenhouse climate control",
      "Automated tractors & harvesters",
      "Livestock tracking and health monitoring",
      "Pest detection and control",
      "Supply chain & storage management",
      "Seed quality and fertilizer optimization",
    ],

    skills_required: [
      "Agriculture fundamentals",
      "IoT device integration",
      "GIS & remote sensing basics",
      "AI/ML for crop prediction",
      "Drone operation & mapping",
      "Soil science & plant biology",
      "Sensor data analysis",
      "Programming basics (Python preferred)",
      "Farm management systems",
      "Climate-smart farming techniques",
    ],

    tools_and_technologies: {
      iot_sensors: [
        "Soil Moisture Sensors",
        "Nutrient Sensors",
        "Weather Sensors",
        "Crop Health Sensors",
      ],
      machinery: [
        "Automated Tractors",
        "Smart Harvesters",
        "Seed Drills",
        "Robotic Sprayers",
      ],
      software_platforms: [
        "Farm Management Software",
        "GIS Tools",
        "Remote Monitoring Apps",
        "AI Prediction Models",
      ],
      biotech_tools: [
        "Hybrid Seeds",
        "GM Crops",
        "Tissue Culture",
        "Biofertilizers",
      ],
      drone_tech: [
        "Multispectral Imaging Drones",
        "Spraying Drones",
        "Mapping Drones",
      ],
      irrigation_systems: [
        "Smart Drip Systems",
        "Automated Sprinklers",
        "Hydroponic Systems",
      ],
    },

    roadmap: {
      beginner: [
        "Basics of farming & agricultural science",
        "Understanding climate, soil & crop types",
        "Introduction to smart farming",
        "IoT basics in agriculture",
        "Fundamentals of drones & sensors",
      ],
      intermediate: [
        "Precision agriculture tools",
        "AI/ML for crop prediction",
        "Remote sensing & GIS",
        "Greenhouse automation",
        "Hydroponics & aeroponics systems",
      ],
      advanced: [
        "Robotics in agriculture",
        "Advanced drone surveillance",
        "Automated farm machinery",
        "Climate-smart farming planning",
        "Agricultural biotechnology & genetics",
      ],
    },

    resources: {
      youtube: [
        "Agritech Future",
        "Farming Revolution",
        "DroneDeploy Agriculture",
        "John Deere Tech",
        "AgriTech India",
        "MIT OpenCourseWare – Food & Agriculture",
      ],
      documentation: [
        "faostat.org",
        "agritech.gov.in",
        "precisionag.org",
        "smartfarmingtech.com",
        "fao.org",
      ],
      courses: [
        "Coursera – Digital Agriculture",
        "Udemy – Precision Agriculture",
        "edX – Sustainable Farming",
        "Google Earth Engine Agriculture Course",
        "MIT Agriculture & Food Systems",
      ],
    },

    interview_questions: [
      "What is Agricultural Technology?",
      "How does precision farming work?",
      "What role do IoT sensors play in farming?",
      "What are the benefits of drone-based monitoring?",
      "How is AI used for crop prediction?",
      "What is the difference between hydroponics and aeroponics?",
      "What is greenhouse automation?",
      "How is remote sensing used in agriculture?",
    ],

    salary_info: {
      india: {
        fresher: "₹3 LPA – ₹7 LPA",
        experienced: "₹8 LPA – ₹20 LPA",
      },
      global: {
        fresher: "$50,000 – $80,000",
        experienced: "$100,000 – $150,000+",
      },
    },

    job_roles: [
      "AgriTech Engineer",
      "Precision Agriculture Specialist",
      "Agricultural Data Analyst",
      "Farm Automation Engineer",
      "IoT Agri Engineer",
      "Drone Operator (Agriculture)",
      "Greenhouse Automation Specialist",
      "Agricultural Biotech Engineer",
    ],

    pros_and_cons: {
      Benefits: [
        "High demand in developing countries",
        "Improves food production & quality",
        "Large innovation opportunities",
        "Government support & subsidies",
        "Environment-friendly solutions",
      ],
      Drawbacks: [
        "Initial cost high",
        "Farmers’ digital literacy required",
        "Technical maintenance needed",
        "Sensor calibration issues",
        "Climate dependency remains partial",
      ],
    },

    future_trends: [
      "Fully automated smart farms",
      "AI-based crop disease detection",
      "Vertical farming",
      "Hydroponics & aeroponics expansion",
      "Robot-based harvesting",
      "Climate-resilient smart crops",
      "Agriculture drones with AI vision",
      "Blockchain-based food traceability",
    ],
  },
  {
    technology: "Educational Technology (EdTech)",

    short_description:
      "Educational Technology uses digital tools, software, AI, online platforms, and interactive systems to make the teaching-learning process modern, personalized, and accessible.",

    detailed_description:
      "Educational Technology (EdTech) is a collection of modern digital tools, software, and platforms that make education interactive, flexible, scalable, and personalized. EdTech includes components like Learning Management Systems (LMS), AI-based tutoring systems, e-learning apps, virtual classrooms, gamified learning, VR/AR simulations, and analytics-based progress tracking. Its goal is to enhance students' learning experiences, improve teachers' efficiency, and make education globally accessible. AI and Machine Learning play a strong role in EdTech, enabling content personalization, automated grading, smart recommendations, and student performance prediction.",

    key_concepts: [
      "Learning Management Systems (LMS)",
      "AI-based Personalized Learning",
      "Gamified Learning Systems",
      "E-Learning & MOOCs",
      "Virtual Classrooms",
      "AR/VR Educational Simulations",
      "Assessment & Automated Grading",
      "Student Analytics & Progress Tracking",
      "Digital Content Creation",
      "Collaborative Learning Tools",
    ],

    applications: [
      "Online classes & virtual teaching",
      "Digital content delivery (videos, notes, quizzes)",
      "Smart/personalized learning paths",
      "AI-based tutoring & doubt solving",
      "Gamified learning apps",
      "Skill-based e-learning platforms",
      "Remote education for rural areas",
      "Student progress analytics",
      "Interactive AR/VR science labs",
      "Automated attendance & grading systems",
    ],

    skills_required: [
      "Basic teaching or subject knowledge",
      "LMS & EdTech platforms usage",
      "Content creation (video, text, quizzes)",
      "AI & data analytics basics",
      "Instructional design",
      "User experience (UI/UX) understanding",
      "Programming basics (optional)",
      "Assessment & progress tracking tools",
      "Digital classroom management",
      "AR/VR tools for simulations",
    ],

    tools_and_technologies: {
      platforms: [
        "Google Classroom",
        "Moodle",
        "Canvas LMS",
        "Blackboard",
        "Coursera Studio",
      ],
      content_tools: [
        "Canva",
        "Camtasia",
        "OBS Studio",
        "Articulate 360",
        "Adobe Captivate",
      ],
      ai_tools: [
        "ChatGPT",
        "Khanmigo AI",
        "Google Gemini",
        "Socratic AI",
        "AI Grading Systems",
      ],
      ar_vr_tools: ["Unity", "Unreal Engine", "Google Expeditions", "ClassVR"],
      analytics_tools: ["Power BI", "Tableau", "Learning Analytics Dashboards"],
      programming: ["Python", "JavaScript", "SCORM", "HTML/CSS"],
    },

    roadmap: {
      beginner: [
        "Basics of educational systems",
        "Using LMS platforms",
        "Creating simple digital lessons",
        "Understanding online assessments",
        "Basics of learning psychology",
      ],
      intermediate: [
        "Instructional design principles",
        "Developing e-learning modules",
        "Data analytics in education",
        "Gamification techniques",
        "Using AI-based EdTech tools",
      ],
      advanced: [
        "Building full LMS systems",
        "AR/VR learning environment development",
        "AI-powered learning personalization",
        "Adaptive assessment systems",
        "EdTech product design & development",
      ],
    },

    resources: {
      youtube: [
        "Khan Academy",
        "edureka!",
        "CodeWithHarry EdTech",
        "MIT OpenCourseWare",
        "TED-Ed",
        "Harvard Online Learning",
      ],
      documentation: [
        "edtechmagazine.com",
        "scorm.com",
        "canvaslms.com",
        "moodledocs.com",
        "unesco.org/education",
      ],
      courses: [
        "Coursera – Instructional Design",
        "edX – EdTech for Classroom",
        "Udemy – E-learning Development",
        "Harvard Online – Learning Analytics",
        "Google Educator Certification",
      ],
    },

    interview_questions: [
      "What is Educational Technology?",
      "How do Learning Management Systems (LMS) work?",
      "How is AI used in personalized learning?",
      "What is gamification in education?",
      "What are MOOCs (Massive Open Online Courses)?",
      "What is the importance of student analytics?",
      "What are the advantages of virtual classrooms?",
      "What is the role of AR/VR in EdTech?",
    ],

    salary_info: {
      india: {
        fresher: "₹3 LPA – ₹7 LPA",
        experienced: "₹8 LPA – ₹18 LPA",
      },
      global: {
        fresher: "$50,000 – $85,000",
        experienced: "$100,000 – $140,000+",
      },
    },

    job_roles: [
      "EdTech Developer",
      "Instructional Designer",
      "E-learning Content Creator",
      "Learning Experience Designer",
      "EdTech Data Analyst",
      "AI Personalization Engineer",
      "Virtual Classroom Engineer",
      "EdTech Product Manager",
    ],

    pros_and_cons: {
      Benefits: [
        "High demand globally",
        "Flexible work opportunities",
        "Creative + technical field",
        "Impactful for millions of students",
        "Remote-friendly jobs",
      ],
      Drawbacks: [
        "Continuous updates needed",
        "AI tools rapidly changing",
        "High competition",
        "Needs strong teaching + tech balance",
        "User engagement challenges",
      ],
    },

    future_trends: [
      "AI-powered personal tutors",
      "Hyper-personalized learning paths",
      "Gamified curriculum",
      "Virtual 3D classrooms",
      "Blockchain for certification",
      "Emotion-based learning analytics",
      "Fully automated learning assistants",
      "Global remote education expansion",
    ],
  },
  {
    technology: "Financial Technology (FinTech)",

    short_description:
      "FinTech uses digital tools, software, AI, blockchain, mobile apps, and online financial systems to make banking, payments, investments, and lending faster, secure, and easily accessible.",

    detailed_description:
      "Financial Technology (FinTech) is a collection of modern digital solutions that make banking and financial services smarter, faster, more secure, and user-friendly. FinTech includes components such as mobile banking apps, UPI & digital payments, online lending platforms, blockchain-based transactions, robo-advisors, automated wealth management tools, fraud detection systems, crypto exchanges, and AI-powered financial analytics. The goal of FinTech is to make financial services convenient, low-cost, transparent, and globally accessible. In this field, AI, Machine Learning, Blockchain, and Big Data play major roles, enabling fraud detection, credit scoring, risk assessment, investment prediction, and secure transactions.",

    key_concepts: [
      "Digital Payments & UPI",
      "Mobile Banking Systems",
      "Blockchain & Cryptocurrencies",
      "Peer-to-Peer Lending",
      "Robo-Advisors",
      "RegTech (Regulatory Technology)",
      "InsurTech",
      "Neobanking",
      "Open Banking APIs",
      "AI-Based Fraud Detection",
    ],

    applications: [
      "Mobile banking & digital banking",
      "UPI payments & QR-based transactions",
      "Digital wallets (GPay, Paytm, PhonePe)",
      "Crypto trading & blockchain payments",
      "Online loan approval systems",
      "Smart investment apps & robo-advisors",
      "Insurance automation",
      "Fraud detection & KYC automation",
      "Stock trading & portfolio management",
      "Expense management & financial planning apps",
    ],

    skills_required: [
      "Basic finance & banking concepts",
      "Mobile & digital payment tools",
      "Blockchain basics",
      "Cybersecurity knowledge",
      "AI & ML fundamentals",
      "Financial data analysis",
      "API integration & automation",
      "Cloud computing basics",
      "UI/UX for financial apps",
      "Regulatory compliance understanding",
    ],

    tools_and_technologies: {
      platforms: [
        "Stripe",
        "Razorpay",
        "PayPal",
        "Paytm APIs",
        "PhonePe Merchant Suite",
      ],
      blockchain: [
        "Ethereum",
        "Hyperledger Fabric",
        "Solana",
        "Binance Smart Chain",
      ],
      ai_tools: [
        "Fraud Detection AI",
        "Credit Scoring Models",
        "Robo-Advisors",
        "ML Risk Engines",
      ],
      security_tools: [
        "OAuth",
        "JWT Authentication",
        "AES Encryption",
        "2FA Systems",
      ],
      analytics_tools: [
        "Power BI",
        "Tableau",
        "Google BigQuery",
        "Financial Data Dashboards",
      ],
      programming: ["Python", "JavaScript", "Solidity", "SQL", "Node.js"],
    },

    roadmap: {
      beginner: [
        "Basics of finance & banking",
        "Digital payment methods understanding",
        "UPI & mobile wallet usage",
        "Intro to cybersecurity in FinTech",
        "Basics of blockchain",
      ],
      intermediate: [
        "API integration for payments",
        "Intro to smart contracts",
        "Building simple financial apps",
        "Using ML for financial predictions",
        "Understanding regtech compliance",
      ],
      advanced: [
        "Developing blockchain-based payment systems",
        "Building robo-advisor algorithms",
        "AI-driven fraud detection systems",
        "High-level financial data analytics",
        "Building full FinTech platforms & neobanks",
      ],
    },

    resources: {
      youtube: [
        "Finance with Sharan",
        "Simplilearn FinTech",
        "edureka! Blockchain",
        "Khan Academy — Finance",
        "MIT FinTech Courses",
        "Harvard i-Lab FinTech Talks",
      ],
      documentation: [
        "razorpay.com/docs",
        "stripe.com/docs",
        "ethereum.org",
        "hyperledger.org",
        "rbi.org.in (Banking Regulations)",
      ],
      courses: [
        "Coursera – FinTech: Innovation in Finance",
        "edX – FinTech Professional Certificate",
        "Udemy – Blockchain A to Z",
        "Harvard – FinTech Online Program",
        "Google Data Analytics for Finance",
      ],
    },

    interview_questions: [
      "What is FinTech?",
      "How does the UPI architecture work?",
      "How are blockchain transactions secured?",
      "What is a Robo-advisor?",
      "What are KYC and AML compliance?",
      "How are digital wallets secured?",
      "What is the difference between a Neobank and a traditional bank?",
      "What is the role of AI in fraud detection?",
    ],

    salary_info: {
      india: {
        fresher: "₹4 LPA – ₹9 LPA",
        experienced: "₹12 LPA – ₹30 LPA+",
      },
      global: {
        fresher: "$60,000 – $90,000",
        experienced: "$120,000 – $180,000+",
      },
    },

    job_roles: [
      "FinTech Developer",
      "Blockchain Developer",
      "Financial Data Analyst",
      "RegTech Specialist",
      "Digital Payment Engineer",
      "Risk & Fraud Analyst",
      "AI/ML Engineer – Finance",
      "FinTech Product Manager",
    ],

    pros_and_cons: {
      Benefits: [
        "Fastest growing industry",
        "High salary & global demand",
        "Huge startup opportunities",
        "FinTech revolution (especially India)",
        "Remote-friendly tech career",
      ],
      Drawbacks: [
        "High cybersecurity risks",
        "Strict government regulations",
        "Advanced technical knowledge needed",
        "High competition",
        "Data privacy concerns",
      ],
    },

    future_trends: [
      "AI-powered financial automation",
      "Blockchain-based global payments",
      "CBDC (Central Bank Digital Currency)",
      "Fully automated fraud detection",
      "Smart investment AI bots",
      "Digital-only banks",
      "Voice-enabled financial assistants",
      "Real-time AI risk scoring",
    ],
  },
  {
    technology: "Computer Science / Software Development",

    short_description:
      "Software Development is the technology of planning, designing, building, testing, and deploying digital applications, websites, systems, and tools. Computer Science provides the foundation through algorithms, data structures, operating systems, and computational theory.",

    detailed_description:
      "Computer Science is the in-depth study of computing systems, algorithms, data structures, theory of computation, networking, operating systems, databases, artificial intelligence, and cybersecurity. Software Development uses the principles of computer science to create reliable, scalable, and efficient software solutions for real-world problems. It covers concepts like web development, mobile development, backend APIs, cloud systems, automation pipelines, testing frameworks, version control, DevOps, and system design. Developers use programming languages, frameworks, design patterns, and architecture models to build applications capable of handling millions of users.",

    key_concepts: [
      "Algorithms & Data Structures",
      "Object-Oriented Programming (OOP)",
      "Databases & SQL",
      "Operating Systems",
      "Computer Networks",
      "Frontend & Backend Development",
      "API Development",
      "Software Development Life Cycle (SDLC)",
      "Version Control (Git/GitHub)",
      "System Design & Architecture",
    ],

    applications: [
      "Websites & web applications",
      "Mobile apps for Android/iOS",
      "Backend APIs & microservices",
      "Cloud services & serverless platforms",
      "Automation & DevOps tools",
      "AI/ML systems & chatbots",
      "Game development",
      "Data engineering pipelines",
      "Cybersecurity tools",
      "IoT software solutions",
    ],

    skills_required: [
      "Programming languages (Python, JavaScript, Java, C++)",
      "Data structures & algorithms",
      "Problem-solving & logic building",
      "Frontend or backend specialization",
      "Database management (SQL/NoSQL)",
      "API development & integration",
      "Git & version control",
      "Debugging & testing",
      "Cloud computing basics",
      "Understanding of system design",
    ],

    tools_and_technologies: {
      languages: [
        "Python",
        "JavaScript",
        "Java",
        "C++",
        "C#",
        "TypeScript",
        "Go",
      ],
      frontend: ["React", "Next.js", "Vue", "Angular"],
      backend: ["Node.js", "Express.js", "Django", "Spring Boot", "Laravel"],
      databases: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis"],
      devops: ["Docker", "Kubernetes", "GitHub Actions", "Jenkins"],
      cloud: ["AWS", "Google Cloud", "Azure", "DigitalOcean"],
      testing: ["Jest", "Mocha", "JUnit", "Selenium"],
      security_tools: ["JWT Auth", "OAuth2", "Encryption Libraries"],
      version_control: ["Git", "GitHub", "GitLab", "Bitbucket"],
    },

    roadmap: {
      beginner: [
        "Learn a programming language (Python/JavaScript)",
        "Basics of HTML, CSS & JS",
        "Intro to data structures & algorithms",
        "Understanding Git & GitHub",
        "Basics of SQL",
      ],
      intermediate: [
        "Learn a framework (React/Node.js/Django)",
        "REST API development",
        "Advanced DSA",
        "Database design & ORMs",
        "Cloud deployment basics",
      ],
      advanced: [
        "Microservices architecture",
        "System design mastery",
        "DevOps pipelines (CI/CD)",
        "Scalability & performance optimization",
        "Building large-scale software systems",
      ],
    },

    resources: {
      youtube: [
        "CodeWithHarry",
        "Hitesh Choudhary",
        "Traversy Media",
        "freeCodeCamp",
        "Tech With Tim",
        "MIT OpenCourseWare CS",
      ],
      documentation: [
        "developer.mozilla.org",
        "react.dev",
        "nodejs.org",
        "docs.python.org",
        "aws.amazon.com/documentation",
        "cloud.google.com/docs",
      ],
      courses: [
        "CS50 – Harvard",
        "Coursera – Software Engineering Specialization",
        "Udemy – MERN Stack Bootcamp",
        "Google – Cloud Engineer Path",
        "edX – Introduction to Computer Science",
      ],
    },

    interview_questions: [
      "What is the importance of data structures and algorithms?",
      "What are the four pillars of OOP?",
      "What is a REST API?",
      "What is the difference between SQL and NoSQL?",
      "What is the use of Git?",
      "What are the main features of React?",
      "What is multithreading?",
      "How is scalability achieved in system design?",
    ],
    salary_info: {
      india: {
        fresher: "₹4 LPA – ₹12 LPA",
        experienced: "₹15 LPA – ₹40 LPA+",
      },
      global: {
        fresher: "$70,000 – $110,000",
        experienced: "$130,000 – $200,000+",
      },
    },

    job_roles: [
      "Software Developer",
      "Full Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "Cloud Engineer",
      "DevOps Engineer",
      "Mobile App Developer",
      "System Architect",
      "AI/ML Engineer",
      "Data Engineer",
    ],

    pros_and_cons: {
      Benefits: [
        "High salary & global demand",
        "Remote work opportunities",
        "Creative + logical field",
        "Large career growth",
        "Every industry needs software",
      ],
      Drawbacks: [
        "Continuous learning required",
        "Competitive job market",
        "Debugging can be stressful",
        "Long working hours in some companies",
        "Fast-changing technology",
      ],
    },

    future_trends: [
      "AI-assisted coding",
      "No-code/low-code platforms",
      "Cloud-native development",
      "Quantum computing integrations",
      "5G-powered applications",
      "Automated DevOps pipelines",
      "Edge computing",
      "Generative AI software tools",
    ],
  },
  {
    technology: "Networking / Telecommunications",

    short_description:
      "Networking and Telecommunications is the technology that connects devices, servers, computers, and communication systems to make data, voice, and internet services fast, secure, and reliable.",

    detailed_description:
      "Networking & Telecommunications is a field that interconnects computers, mobile devices, servers, and communication systems to enable fast and secure transfer of data, internet, voice calls, and multimedia services. It involves routers, switches, fiber optics, wireless networks (Wi-Fi), mobile networks (4G/5G), satellite communication, VPNs, cloud networking, IP addressing, TCP/IP protocols, and cybersecurity concepts. Networking forms the backbone of IT infrastructure, enabling internet browsing, cloud services, online meetings, mobile connectivity, and enterprise communication. In this field, network design, configuration, monitoring, troubleshooting, and security play crucial roles.",

    key_concepts: [
      "OSI & TCP/IP Models",
      "IP Addressing & Subnetting",
      "Routing & Switching",
      "LAN, WAN & MAN Networks",
      "Network Security",
      "Firewalls & VPN",
      "Wireless Networking (Wi-Fi)",
      "4G & 5G Mobile Networks",
      "Fiber Optic Communication",
      "Cloud Networking",
    ],

    applications: [
      "Internet connectivity systems",
      "Corporate network infrastructure",
      "Mobile networks (4G, 5G, VoLTE)",
      "Data centers & cloud networking",
      "Online communication (VoIP, video calls)",
      "Satellite communication",
      "Smart home & IoT device networking",
      "Cybersecurity & secure communication",
      "VPN & remote work connectivity",
      "Enterprise network automation",
    ],

    skills_required: [
      "Networking basics (LAN/WAN)",
      "Routing & switching concepts",
      "IP addressing & subnetting",
      "Router/switch configuration",
      "Firewall & VPN setup",
      "Wireless network setup",
      "Linux networking commands",
      "Cloud networking fundamentals",
      "Troubleshooting skills",
      "Network security basics",
    ],

    tools_and_technologies: {
      network_devices: [
        "Routers",
        "Switches",
        "Modems",
        "Access Points",
        "Firewalls",
      ],
      protocols: ["TCP/IP", "HTTP/HTTPS", "FTP", "DNS", "DHCP", "BGP", "OSPF"],
      network_simulators: [
        "Cisco Packet Tracer",
        "GNS3",
        "EVE-NG",
        "Wireshark",
      ],
      cloud_networking: ["AWS VPC", "Azure Network", "Google Cloud VPC"],
      security_tools: ["Firewalls", "IDS/IPS", "VPN Tools", "Proxy Servers"],
      programming: [
        "Python",
        "Bash Scripting",
        "PowerShell",
        "Network Automation Tools",
      ],
    },

    roadmap: {
      beginner: [
        "Basics of computer networks",
        "Networking devices understanding",
        "OSI/TCP-IP model concepts",
        "IP addressing & subnetting",
        "Basic router & switch configuration",
      ],
      intermediate: [
        "Routing protocols (BGP, OSPF)",
        "Network troubleshooting tools",
        "Linux networking",
        "Wireless networking concepts",
        "VPN setup & firewall basics",
      ],
      advanced: [
        "Cloud networking design",
        "Network automation & scripting",
        "Cybersecurity networking",
        "Enterprise network architecture",
        "5G & optical networking systems",
      ],
    },

    resources: {
      youtube: [
        "Network Chuck",
        "Cisco Networking Academy",
        "FreeCodeCamp Networking",
        "Eli the Computer Guy",
        "CBT Nuggets – Networking",
        "AWS Networking Tutorials",
      ],
      documentation: [
        "cisco.com",
        "juniper.net",
        "aws.amazon.com/vpc",
        "cloud.google.com/vpc",
        "docs.microsoft.com/azure/networking",
      ],
      courses: [
        "Coursera – Computer Networks",
        "Udemy – CCNA Complete Course",
        "edX – Introduction to Networking",
        "Cisco CCNA & CCNP Certifications",
        "Google Cloud Networking Specialization",
      ],
    },

    interview_questions: [
      "What is the OSI Model?",
      "How does IP Addressing and subnetting work?",
      "What is the difference between a Router and a Switch?",
      "What is the difference between TCP and UDP?",
      "How does a VPN provide secure communication?",
      "What is the role of a Firewall?",
      "What is BGP?",
      "How do 5G networks work?",
    ],
    salary_info: {
      india: {
        fresher: "₹3.5 LPA – ₹6.5 LPA",
        experienced: "₹8 LPA – ₹20 LPA+",
      },
      global: {
        fresher: "$50,000 – $75,000",
        experienced: "$90,000 – $140,000+",
      },
    },

    job_roles: [
      "Network Engineer",
      "System Administrator",
      "Telecom Engineer",
      "Cloud Network Engineer",
      "Network Security Engineer",
      "VoIP Engineer",
      "Datacenter Engineer",
      "Network Automation Specialist",
    ],

    pros_and_cons: {
      Benefits: [
        "High job demand worldwide",
        "Every industry needs networking",
        "Great for long-term career growth",
        "High-paying global roles",
        "Opportunities in telecom + IT together",
      ],
      Drawbacks: [
        "On-call support shifts",
        "Field work required in some roles",
        "Complex troubleshooting sometimes",
        "Certifications can be expensive",
        "Network downtime pressure",
      ],
    },

    future_trends: [
      "5G & 6G communication systems",
      "AI-based network automation",
      "Software Defined Networking (SDN)",
      "Edge computing & IoT networks",
      "Cloud-native networking",
      "Quantum communication",
      "Satellite internet (Starlink, etc.)",
      "Zero-trust secure networks",
    ],
  },
  {
    technology: "Automation & Control Systems",

    short_description:
      "Automation & Control Systems is a technology that uses sensors, actuators, controllers, and software to efficiently and accurately control industrial processes, machinery, and equipment.",

    detailed_description:
      "Automation & Control Systems is a technology designed to automate and optimize industrial and manufacturing processes. It involves the use of Programmable Logic Controllers (PLC), Distributed Control Systems (DCS), sensors, actuators, SCADA systems, robotics, and AI-based process control. The goal of automation is to achieve efficiency, safety, consistency, and reduced production costs. Advanced control strategies such as PID control, adaptive control, and predictive control are employed to monitor and regulate complex industrial processes.",

    key_concepts: [
      "Programmable Logic Controllers (PLC)",
      "Distributed Control Systems (DCS)",
      "SCADA Systems",
      "PID Controllers",
      "Sensors & Actuators",
      "Industrial Robotics",
      "Process Automation",
      "HMI (Human-Machine Interface)",
      "Feedback & Feedforward Control",
      "Predictive & Adaptive Control",
    ],

    applications: [
      "Manufacturing process automation",
      "Industrial robotics & assembly lines",
      "HVAC control systems",
      "Water treatment & waste management plants",
      "Automated transportation systems",
      "Power generation & distribution control",
      "Oil & gas process control",
      "Chemical & pharmaceutical process automation",
      "Smart factories & Industry 4.0",
      "Automated quality control & inspection systems",
    ],

    skills_required: [
      "Basic electrical & electronics knowledge",
      "Control theory & systems modeling",
      "PLC programming & configuration",
      "SCADA/HMI operation",
      "Sensor & actuator integration",
      "PID tuning & process control",
      "Industrial communication protocols (Modbus, Profibus)",
      "Robotics basics",
      "Automation software tools",
      "Safety & regulatory compliance knowledge",
    ],

    tools_and_technologies: {
      controllers: [
        "Siemens PLC",
        "Allen-Bradley PLC",
        "ABB DCS",
        "Schneider Electric PLC",
      ],
      software: [
        "MATLAB/Simulink",
        "LabVIEW",
        "TIA Portal",
        "Wonderware",
        "FactoryTalk",
      ],
      sensors_actuators: [
        "Proximity sensors",
        "Temperature sensors",
        "Pressure sensors",
        "Motors & Valves",
        "Encoders",
      ],
      robotics: ["ABB robots", "KUKA robots", "FANUC robots", "UR robots"],
      communication_protocols: ["Modbus", "Profibus", "Ethernet/IP", "CAN Bus"],
    },

    roadmap: {
      beginner: [
        "Basics of electrical and electronics",
        "Introduction to control systems",
        "Sensors and actuators fundamentals",
        "Basic PLC programming",
        "Introduction to industrial automation",
      ],
      intermediate: [
        "PID control theory and tuning",
        "SCADA system basics",
        "HMI design & operation",
        "Distributed control systems (DCS) overview",
        "Industrial communication protocols",
      ],
      advanced: [
        "Advanced process control (APC) techniques",
        "Adaptive & predictive control",
        "Robotics integration & automation",
        "Smart factory & Industry 4.0 implementation",
        "Full-scale industrial automation project development",
      ],
    },

    resources: {
      youtube: [
        "RealPars – Industrial Automation",
        "PLC Academy",
        "AutomationDirect",
        "myPLCtraining",
        "Control Engineering TV",
      ],
      documentation: [
        "siemens.com/automation",
        "rockwellautomation.com",
        "abb.com/controlsystems",
        "schneider-electric.com/automation",
        "isa.org (International Society of Automation)",
      ],
      courses: [
        "Coursera – Industrial Automation",
        "edX – Control Systems",
        "Udemy – PLC Programming from Scratch",
        "MIT OpenCourseWare – Feedback Control Systems",
        "Automation Academy Online Training",
      ],
    },

    interview_questions: [
      "What are Automation & Control Systems?",
      "What is the difference between PLC and DCS?",
      "How is a PID controller used?",
      "What is a SCADA system and how does it work?",
      "What is the role of HMI in automation?",
      "How are sensors and actuators integrated?",
      "Where is industrial robotics used?",
      "What is the difference between feedback and feedforward control?",
    ],

    salary_info: {
      india: {
        fresher: "₹3 LPA – ₹6 LPA",
        experienced: "₹8 LPA – ₹20 LPA+",
      },
      global: {
        fresher: "$50,000 – $80,000",
        experienced: "$90,000 – $150,000+",
      },
    },

    job_roles: [
      "Automation Engineer",
      "Control Systems Engineer",
      "PLC Programmer",
      "SCADA Engineer",
      "Industrial Robotics Engineer",
      "Process Control Engineer",
      "Instrumentation Engineer",
      "Maintenance & Automation Specialist",
    ],

    pros_and_cons: {
      Benefits: [
        "High demand in manufacturing & industry",
        "Hands-on technical experience",
        "High salary potential",
        "Opportunities in Industry 4.0 & smart factories",
        "Automation reduces human error & increases efficiency",
      ],
      Drawbacks: [
        "Complex technical knowledge required",
        "High initial equipment & setup cost",
        "Regular maintenance & troubleshooting needed",
        "Safety & regulatory compliance critical",
        "Industry-specific knowledge often required",
      ],
    },

    future_trends: [
      "AI-based process control & predictive maintenance",
      "Industrial IoT integration",
      "Robotics & collaborative robots (Cobots)",
      "Smart factories & digital twins",
      "Edge computing in industrial automation",
      "Autonomous material handling systems",
      "Energy-efficient automated systems",
      "Real-time process optimization with AI",
    ],
  },
  {
    technology: "Civil Engineering & Construction Technology",

    short_description:
      "Civil Engineering & Construction Technology is the engineering and technology of designing, planning, constructing, and maintaining buildings, bridges, roads, dams, and other infrastructure projects.",

    detailed_description:
      "Civil Engineering & Construction Technology is the science and engineering of efficiently and sustainably developing infrastructure and the built environment. This field involves structural design, geotechnical engineering, transportation engineering, construction management, water resources, environmental engineering, and smart building technologies. Advanced construction techniques, project management software, Building Information Modeling (BIM), sustainable materials, and AI-based project optimization are used to execute projects efficiently in terms of time, cost, and quality. Civil engineers are responsible for urban development and large-scale infrastructure projects.",

    key_concepts: [
      "Structural Engineering & Design",
      "Geotechnical Engineering",
      "Transportation & Highway Engineering",
      "Construction Materials & Methods",
      "Hydraulic & Water Resources Engineering",
      "Environmental & Sustainable Engineering",
      "Project Management & Planning",
      "Surveying & GIS",
      "Building Information Modeling (BIM)",
      "Construction Safety & Quality Control",
    ],

    applications: [
      "Residential & commercial building construction",
      "Bridges, flyovers & tunnels",
      "Roads & highway networks",
      "Dams & water supply systems",
      "Sewage & drainage systems",
      "Smart city infrastructure",
      "Industrial & factory construction",
      "Airport, railway & metro infrastructure",
      "Environmental & waste management systems",
      "Renovation & retrofitting of structures",
    ],

    skills_required: [
      "Engineering mathematics & mechanics",
      "Structural analysis & design",
      "Construction materials knowledge",
      "Geotechnical site assessment",
      "Project planning & scheduling",
      "Surveying & mapping techniques",
      "BIM & CAD software proficiency",
      "Construction safety regulations",
      "Sustainable & green construction practices",
      "Cost estimation & resource management",
    ],

    tools_and_technologies: {
      software: [
        "AutoCAD",
        "Revit",
        "STAAD.Pro",
        "ETABS",
        "Primavera P6",
        "Civil 3D",
      ],
      materials_testing: [
        "Concrete testing kits",
        "Soil testing equipment",
        "Non-destructive testing tools",
      ],
      surveying_tools: [
        "Total Station",
        "Theodolite",
        "GPS Survey Equipment",
        "Laser Scanners",
      ],
      construction_equipment: [
        "Cranes",
        "Excavators",
        "Bulldozers",
        "Concrete Mixers",
      ],
      safety_tools: [
        "PPEs",
        "Fall Protection Systems",
        "Fire Safety Equipment",
      ],
    },

    roadmap: {
      beginner: [
        "Basics of civil engineering & construction",
        "Introduction to construction materials",
        "Basic structural concepts",
        "Surveying & site assessment fundamentals",
        "Construction safety awareness",
      ],
      intermediate: [
        "Structural analysis & design principles",
        "Project planning & scheduling techniques",
        "Geotechnical & soil investigation",
        "BIM & CAD software usage",
        "Environmental & sustainable construction practices",
      ],
      advanced: [
        "Designing large-scale infrastructure projects",
        "Advanced construction management & optimization",
        "Smart city & intelligent building systems",
        "Advanced structural & seismic design",
        "Innovative construction technologies & automation",
      ],
    },

    resources: {
      youtube: [
        "The B1M – Construction & Civil Engineering",
        "Practical Engineering",
        "Engineering Explained",
        "CivilMentor",
        "StructureFree",
      ],
      documentation: [
        "asce.org – American Society of Civil Engineers",
        "isc.org.in – Indian Standards & Codes",
        "fema.gov – Structural & Disaster Guidelines",
        "nbmcw.com – Construction Technology",
        "smartcities.gov.in – Urban Infrastructure",
      ],
      courses: [
        "Coursera – Construction Management Specialization",
        "edX – Sustainable Infrastructure",
        "Udemy – Civil Engineering Basics",
        "MIT OpenCourseWare – Structural Engineering",
        "NPTEL – Civil & Construction Engineering",
      ],
    },

    interview_questions: [
      "What is Civil Engineering & Construction Technology?",
      "How is BIM used in construction?",
      "How is load calculation done in structural design?",
      "What is the role of soil testing in geotechnical engineering",
      "How is construction project planning and scheduling done?",
      "What are sustainable construction practices?",
      "What are the key factors in transportation and highway engineering?",
      "How is construction safety and quality control ensured?",
    ],

    salary_info: {
      india: {
        fresher: "₹3 LPA – ₹6 LPA",
        experienced: "₹8 LPA – ₹20 LPA+",
      },
      global: {
        fresher: "$50,000 – $80,000",
        experienced: "$90,000 – $150,000+",
      },
    },

    job_roles: [
      "Civil Engineer",
      "Structural Engineer",
      "Construction Project Manager",
      "Site Engineer",
      "Geotechnical Engineer",
      "Transportation Engineer",
      "BIM Specialist",
      "Quality & Safety Engineer",
    ],

    pros_and_cons: {
      Benefits: [
        "High demand in infrastructure projects",
        "Opportunities in urban development & smart cities",
        "Diverse career options",
        "Hands-on practical work",
        "Potential for international projects",
      ],
      Drawbacks: [
        "Work can be physically demanding",
        "Project deadlines can be stressful",
        "High responsibility for safety & compliance",
        "Continuous learning of new technologies required",
        "Dependent on government & economic policies",
      ],
    },

    future_trends: [
      "Smart buildings & IoT-enabled infrastructure",
      "Sustainable & green construction technologies",
      "3D printing in construction",
      "Robotics & automation in construction sites",
      "Digital twins & advanced BIM applications",
      "AI-driven project management & optimization",
      "Prefabrication & modular construction",
      "Resilient & disaster-resistant infrastructure design",
    ],
  },
  {
    technology: "Energy / Sustainable Technology",

    short_description:
      "Energy / Sustainable Technology is a field that uses renewable energy sources, efficient energy management, and green technologies to provide environment-friendly and sustainable power generation and consumption solutions.",

    detailed_description:
      "Energy / Sustainable Technology is a field that develops sustainable and eco-friendly solutions by integrating renewable energy sources, smart grids, energy storage, energy efficiency, and green technologies. It includes applications of solar, wind, hydro, biomass, and geothermal energy, smart metering, energy monitoring, electric vehicles, and carbon footprint reduction initiatives. This technology helps mitigate climate change, ensure energy security, and provide cost-effective and efficient energy solutions.",

    key_concepts: [
      "Renewable Energy Sources (Solar, Wind, Hydro, Biomass, Geothermal)",
      "Energy Efficiency & Management",
      "Smart Grids & Microgrids",
      "Energy Storage Systems (Batteries, Supercapacitors)",
      "Carbon Footprint Reduction",
      "Sustainable Materials & Technologies",
      "Electric Vehicles & Charging Infrastructure",
      "Green Building & HVAC Systems",
      "Energy Policy & Regulatory Compliance",
      "AI & IoT in Energy Optimization",
    ],

    applications: [
      "Solar power plants & rooftop solar installations",
      "Wind energy farms",
      "Hydropower & small-scale hydro systems",
      "Biomass energy solutions",
      "Smart grids & energy distribution networks",
      "Energy-efficient industrial & residential systems",
      "Electric vehicles & EV charging stations",
      "Carbon footprint monitoring & reduction",
      "Sustainable urban infrastructure & green buildings",
      "Energy storage & battery management systems",
    ],

    skills_required: [
      "Basics of energy systems & power generation",
      "Renewable energy technologies",
      "Energy management & efficiency optimization",
      "Smart grid & IoT integration",
      "Energy storage systems understanding",
      "Sustainable materials & green building knowledge",
      "Electrical & electronics fundamentals",
      "Data analysis for energy monitoring",
      "Policy & regulatory compliance in energy sector",
      "Project management & implementation skills",
    ],

    tools_and_technologies: {
      software: [
        "HOMER Energy",
        "MATLAB/Simulink",
        "RETScreen",
        "AutoCAD Electrical",
        "ETAP",
      ],
      hardware: [
        "Solar PV panels",
        "Wind turbines",
        "Hydro turbines",
        "Battery storage systems",
        "Smart meters",
      ],
      energy_management: [
        "SCADA for energy",
        "IoT sensors",
        "Energy dashboards",
        "Load monitoring systems",
      ],
      EV_technology: [
        "Charging stations",
        "Battery management systems",
        "Vehicle-to-Grid (V2G) integration",
      ],
      sustainability_tools: [
        "LEED certification tools",
        "Carbon footprint calculators",
        "Life Cycle Assessment (LCA) software",
      ],
    },

    roadmap: {
      beginner: [
        "Basics of energy systems & electricity",
        "Introduction to renewable energy sources",
        "Energy efficiency concepts",
        "Environmental impact & sustainability awareness",
        "Introduction to smart grids & energy storage",
      ],
      intermediate: [
        "Solar PV design & installation",
        "Wind & hydro energy system fundamentals",
        "Energy management & monitoring",
        "Electric vehicle technology & charging infrastructure",
        "Sustainability regulations & green certifications",
      ],
      advanced: [
        "Designing large-scale renewable energy projects",
        "Smart grid optimization & AI-based energy management",
        "Advanced energy storage solutions",
        "Carbon footprint reduction & sustainability strategy",
        "Integration of multiple renewable sources with grid & IoT systems",
      ],
    },

    resources: {
      youtube: [
        "Fully Charged Show",
        "Engineering Explained – Renewable Energy",
        "Real Engineering – Energy Tech",
        "Green Energy Futures",
        "NPTEL – Renewable Energy Technology",
      ],
      documentation: [
        "iea.org – International Energy Agency",
        "nrel.gov – National Renewable Energy Laboratory",
        "seai.ie – Sustainable Energy Authority",
        "unep.org – United Nations Environment Programme",
        "mnre.gov.in – Ministry of New & Renewable Energy, India",
      ],
      courses: [
        "Coursera – Renewable Energy and Green Technology",
        "edX – Sustainable Energy",
        "Udemy – Solar & Wind Energy",
        "MIT OpenCourseWare – Energy, Environment, and Sustainability",
        "NPTEL – Energy & Sustainable Technology",
      ],
    },

    interview_questions: [
      "What is Energy / Sustainable Technology?",
      "What are the key differences between solar and wind energy?",
      "What is the role of smart grids in energy distribution?",
      "What is the importance of energy storage systems?",
      "How do electric vehicles and charging infrastructure work?",
      "How is carbon footprint measured and reduced?",
      "What are green buildings and sustainable materials?",
      "How are AI and IoT used in energy optimization?",
    ],

    salary_info: {
      india: {
        fresher: "₹3 LPA – ₹6 LPA",
        experienced: "₹8 LPA – ₹20 LPA+",
      },
      global: {
        fresher: "$50,000 – $80,000",
        experienced: "$90,000 – $150,000+",
      },
    },

    job_roles: [
      "Renewable Energy Engineer",
      "Energy Analyst",
      "Sustainability Consultant",
      "Smart Grid Engineer",
      "Electric Vehicle Engineer",
      "Energy Storage Specialist",
      "Green Building Consultant",
      "Project Manager – Sustainable Energy",
    ],

    pros_and_cons: {
      Benefits: [
        "High growth & global demand",
        "Positive environmental impact",
        "Opportunities in government & private projects",
        "Innovation-driven field",
        "Integration with emerging technologies like AI & IoT",
      ],
      Drawbacks: [
        "High initial project cost",
        "Dependent on government policies & incentives",
        "Technology rapidly evolving",
        "Site & environmental constraints",
        "Specialized technical knowledge required",
      ],
    },

    future_trends: [
      "AI-based energy management & predictive maintenance",
      "Integration of multiple renewable energy sources",
      "Smart grids & microgrids expansion",
      "Advanced energy storage & battery technologies",
      "Electric vehicle adoption & V2G systems",
      "Carbon-neutral & net-zero energy projects",
      "Green hydrogen & bioenergy solutions",
      "Sustainable urban & industrial infrastructure",
    ],
  },
  {
    technology: "Transportation Technology",

    short_description:
      "Transportation Technology is the technology that uses advanced tools, software, IoT, AI, and smart systems to make vehicles, logistics, and transport infrastructure efficient, safe, and sustainable.",

    detailed_description:
      "Transportation Technology is a field that optimizes vehicles, traffic systems, logistics, and transport infrastructure using modern technologies. It includes autonomous vehicles, electric vehicles (EVs), connected transport systems, intelligent traffic management, route optimization, fleet management, logistics automation, and sustainable transportation solutions. The goal of Transportation Technology is to make commuting safe, fast, cost-effective, and environmentally friendly. AI, IoT, big data analytics, and simulation technologies play a major role in this field, enabling traffic prediction, accident prevention, fuel optimization, and smart city integration.",

    key_concepts: [
      "Autonomous & Self-driving Vehicles",
      "Electric Vehicles (EVs) & Charging Infrastructure",
      "Intelligent Transport Systems (ITS)",
      "Fleet Management & Telematics",
      "Traffic Management & Route Optimization",
      "Smart Logistics & Supply Chain Automation",
      "Vehicle-to-Everything (V2X) Communication",
      "Sustainable Transportation Solutions",
      "Urban Mobility & Smart City Integration",
      "AI & IoT in Transportation",
    ],

    applications: [
      "Autonomous cars, buses & trucks",
      "Electric vehicles & hybrid vehicles",
      "Smart traffic lights & congestion management",
      "Fleet tracking & route optimization",
      "Last-mile delivery logistics",
      "Railway & metro automation",
      "Air traffic control systems",
      "Smart ports & shipping logistics",
      "Urban mobility solutions (bike sharing, e-scooters)",
      "Predictive maintenance of vehicles & infrastructure",
    ],

    skills_required: [
      "Vehicle dynamics & mechanical knowledge",
      "Electric vehicle systems & batteries",
      "Autonomous vehicle algorithms & AI",
      "IoT & sensor integration",
      "Traffic management & route planning",
      "Fleet management & logistics optimization",
      "Data analytics & predictive modeling",
      "Simulation & modeling software",
      "Sustainable transport & environmental impact",
      "Project management & safety regulations",
    ],

    tools_and_technologies: {
      software: [
        "MATLAB/Simulink",
        "ANSYS",
        "SUMO Traffic Simulator",
        "AutoDesk AutoCAD",
        "PTV VISSIM",
      ],
      hardware: [
        "LiDAR sensors",
        "GPS & Telematics devices",
        "EV charging stations",
        "CCTV & traffic cameras",
        "Vehicle onboard computers",
      ],
      communication: [
        "V2X modules",
        "5G/4G IoT connectivity",
        "Vehicle-to-Cloud integration",
      ],
      analytics_tools: ["Python", "R", "Tableau", "BigQuery", "Power BI"],
      safety_tools: [
        "Collision avoidance systems",
        "ADAS (Advanced Driver Assistance Systems)",
        "Vehicle crash test simulators",
      ],
    },

    roadmap: {
      beginner: [
        "Basics of transportation systems & logistics",
        "Introduction to electric vehicles & hybrid technology",
        "Traffic flow & transport planning fundamentals",
        "IoT & sensors in vehicles",
        "Safety regulations & compliance in transport",
      ],
      intermediate: [
        "Autonomous vehicle algorithms & AI",
        "Fleet management & telematics",
        "Smart traffic & congestion management",
        "Logistics automation & route optimization",
        "Urban mobility & smart city integration",
      ],
      advanced: [
        "Designing intelligent transport systems",
        "Electric & autonomous vehicle system integration",
        "AI-driven predictive maintenance",
        "Sustainable & green transportation solutions",
        "Integration of multi-modal transport & smart infrastructure",
      ],
    },

    resources: {
      youtube: [
        "Engineering Explained – Transport Tech",
        "Fully Charged Show – EVs & Sustainable Transport",
        "Transport Topics",
        "Smart Cities & Mobility",
        "NPTEL – Transportation Engineering",
      ],
      documentation: [
        "its.dot.gov – Intelligent Transport Systems",
        "ieee.org – Transportation Technology Publications",
        "worldbank.org – Transport & Infrastructure Reports",
        "un.org – Sustainable Transport Initiatives",
        "moovitapp.com – Urban Mobility Solutions",
      ],
      courses: [
        "Coursera – Electric Vehicles and Mobility",
        "edX – Sustainable Transportation",
        "Udemy – Intelligent Transport Systems",
        "MIT OpenCourseWare – Transportation Systems",
        "NPTEL – Transportation Engineering & Technology",
      ],
    },

    interview_questions: [
      "What is Transportation Technology?",
      "How do autonomous vehicles work?",
      "What are the key components of intelligent transport systems",
      "How is fleet management and route optimization done?",
      "How is charging infrastructure designed for electric vehicles?",
      "What is the role of IoT and AI in smart transportation?",
      "How is urban mobility and smart city integration possible?",
      "What are the challenges in sustainable transportation solutions?",
    ],

    salary_info: {
      india: {
        fresher: "₹3 LPA – ₹7 LPA",
        experienced: "₹8 LPA – ₹25 LPA+",
      },
      global: {
        fresher: "$50,000 – $80,000",
        experienced: "$90,000 – $160,000+",
      },
    },

    job_roles: [
      "Transportation Engineer",
      "Traffic & Urban Planner",
      "Autonomous Vehicle Engineer",
      "EV Systems Engineer",
      "Fleet & Logistics Manager",
      "Smart Mobility Consultant",
      "Transportation Data Analyst",
      "Sustainable Transport Specialist",
    ],

    pros_and_cons: {
      Benefits: [
        "High demand in urban development & logistics",
        "Opportunities in EVs & autonomous vehicles",
        "Integration with AI, IoT, and smart city projects",
        "Global opportunities in transport & mobility",
        "Innovation-driven and technology-focused field",
      ],
      Drawbacks: [
        "Rapidly evolving technologies",
        "High infrastructure investment required",
        "Complex regulatory and safety standards",
        "Technical knowledge-intensive field",
        "Environmental & site constraints for projects",
      ],
    },

    future_trends: [
      "Autonomous and self-driving vehicles",
      "Electric and hybrid vehicle adoption",
      "AI-driven traffic management systems",
      "Connected vehicle-to-everything (V2X) networks",
      "Smart city mobility solutions",
      "Predictive maintenance using AI & IoT",
      "Sustainable & green transportation systems",
      "Integration of multi-modal transport platforms",
    ],
  },
  {
    technology: "Media & Entertainment Technology",

    short_description:
      "Media & Entertainment Technology is the use of digital tools, software, AI, AR/VR, and online platforms to enhance content creation, distribution, streaming, and audience engagement.",

    detailed_description:
      "Media & Entertainment Technology is a field that optimizes media content creation, production, distribution, and consumption using modern technologies. It includes components such as film production, animation, video games, AR/VR experiences, live streaming, digital content platforms, AI-powered video editing, and audience analytics. The goal of this technology is to make content creation efficient, immersive, and globally accessible. AI, machine learning, cloud computing, and real-time analytics play a major role in enabling personalized content delivery, automated editing, audience engagement tracking, and virtual experiences.",
    key_concepts: [
      "Digital Content Creation",
      "Video & Audio Editing Tools",
      "Animation & CGI",
      "Virtual Reality (VR) & Augmented Reality (AR)",
      "Live Streaming & OTT Platforms",
      "AI in Media Production",
      "Content Management Systems",
      "Audience Analytics & Engagement",
      "Gaming Technology",
      "Immersive Media Experiences",
    ],

    applications: [
      "Film & TV production",
      "Animation & visual effects",
      "Video game development",
      "Live streaming platforms (YouTube, Twitch)",
      "OTT platforms (Netflix, Disney+, Prime Video)",
      "Virtual concerts & events",
      "AI-powered video/audio editing",
      "Interactive AR/VR experiences",
      "Content recommendation & personalization",
      "Digital marketing & media analytics",
    ],

    skills_required: [
      "Video & audio editing",
      "Animation & 3D modeling",
      "AI & ML basics for media",
      "VR/AR development",
      "Game engine knowledge (Unity, Unreal Engine)",
      "Streaming & OTT technologies",
      "Content management & distribution",
      "Audience analytics & data interpretation",
      "Creative storytelling & design",
      "Project management in media production",
    ],

    tools_and_technologies: {
      software: [
        "Adobe Premiere Pro",
        "After Effects",
        "Final Cut Pro",
        "Blender",
        "Unity",
        "Unreal Engine",
      ],
      hardware: [
        "Cameras & Drones",
        "Motion Capture Systems",
        "VR Headsets",
        "Green Screen Studios",
        "Audio Recording Equipment",
      ],
      ai_tools: [
        "Automated Video Editing AI",
        "AI-based Color Grading",
        "Speech-to-Text Transcription",
        "Recommendation Engines",
      ],
      analytics_tools: [
        "Google Analytics",
        "Tableau",
        "Power BI",
        "Audience Measurement Tools",
      ],
      programming: ["Python", "C#", "C++", "JavaScript", "SQL"],
    },

    roadmap: {
      beginner: [
        "Basics of media production & storytelling",
        "Video/audio editing fundamentals",
        "Introduction to animation & CGI",
        "Understanding OTT platforms & streaming",
        "Basic AI applications in media",
      ],
      intermediate: [
        "Advanced video & audio editing",
        "3D modeling & animation pipelines",
        "VR/AR content creation",
        "AI-based content recommendations",
        "Audience engagement & analytics",
      ],
      advanced: [
        "Immersive VR/AR experiences development",
        "AI-powered automated content creation",
        "Advanced game development & simulations",
        "Content monetization & platform optimization",
        "Global distribution & multi-platform integration",
      ],
    },

    resources: {
      youtube: [
        "Film Riot",
        "Pixar in a Box",
        "Blender Guru",
        "CG Geek",
        "Unreal Engine Tutorials",
      ],
      documentation: [
        "adobe.com/docs",
        "unity.com/learn",
        "unrealengine.com/docs",
        "w3.org – Media & Web Standards",
        "mediaknowledgebase.com",
      ],
      courses: [
        "Coursera – Digital Media & Entertainment",
        "edX – Creative Media Production",
        "Udemy – Video Editing & VFX",
        "MIT OpenCourseWare – Game Design",
        "LinkedIn Learning – Media Production & AI",
      ],
    },

    interview_questions: [
      "What is Media & Entertainment Technology?",
      "Which tools are used in Animation and CGI?",
      "How are VR and AR experiences created?",
      "What is the workflow of OTT platforms and streaming technology?",
      "What is the role of AI in content creation and recommendation?",
      "How is audience analytics and engagement tracking done?",
      "How is media technology integrated in game development?",
      "What are the challenges in live streaming and immersive media?",
    ],

    salary_info: {
      india: {
        fresher: "₹3 LPA – ₹8 LPA",
        experienced: "₹10 LPA – ₹30 LPA+",
      },
      global: {
        fresher: "$45,000 – $75,000",
        experienced: "$90,000 – $150,000+",
      },
    },

    job_roles: [
      "Video Editor",
      "Animation Artist / VFX Specialist",
      "Game Developer",
      "VR/AR Developer",
      "Content Strategist",
      "Media Analytics Specialist",
      "Streaming & OTT Engineer",
      "AI Media Specialist",
    ],

    pros_and_cons: {
      Benefits: [
        "Creative & innovative industry",
        "High demand for digital content & gaming",
        "Opportunities in global media & entertainment",
        "Integration with AI, AR/VR & cloud platforms",
        "Flexible & remote-friendly projects",
      ],
      Drawbacks: [
        "Highly competitive industry",
        "Rapidly evolving tools & technologies",
        "High pressure & deadline-oriented work",
        "Technical & creative skill balance needed",
        "Infrastructure & equipment costs can be high",
      ],
    },

    future_trends: [
      "AI-powered content creation & editing",
      "Immersive VR/AR entertainment",
      "Cloud-based streaming & OTT growth",
      "Personalized content & recommendation engines",
      "Interactive gaming & virtual experiences",
      "AI-driven audience analytics",
      "Hybrid live & virtual events",
      "Integration of blockchain for digital rights management",
    ],
  },
  {
    technology: "Manufacturing / Industrial Technology",

    short_description:
      "Manufacturing / Industrial Technology is the use of modern tools, machines, automation, IoT, AI, and software to make production processes efficient, safe, and cost-effective.",

    detailed_description:
      "Manufacturing / Industrial Technology is a field that optimizes industrial production and manufacturing processes using modern digital solutions. It includes smart factories, automation, robotics, IoT-enabled machines, predictive maintenance, AI-driven quality control, supply chain optimization, and Industry 4.0 technologies. The goal of this technology is to make production faster, safer, cost-effective, and sustainable. AI, Machine Learning, IoT, robotics, and cloud computing play a major role, enabling predictive maintenance, real-time monitoring, process optimization, and automated decision-making.",

    key_concepts: [
      "Industrial Automation & Robotics",
      "IoT-enabled Manufacturing",
      "Predictive Maintenance",
      "Smart Factories / Industry 4.0",
      "Supply Chain Optimization",
      "AI & Machine Learning in Manufacturing",
      "Quality Control & Assurance Systems",
      "3D Printing & Additive Manufacturing",
      "ERP & MES (Manufacturing Execution Systems)",
      "Sustainable & Green Manufacturing",
    ],

    applications: [
      "Automated production lines",
      "Robotic assembly & welding",
      "IoT-based machine monitoring",
      "Predictive maintenance systems",
      "Quality inspection using AI & ML",
      "3D printing of industrial components",
      "Supply chain & inventory management",
      "Energy-efficient & sustainable production",
      "Industrial IoT dashboards",
      "ERP & MES integration for manufacturing",
    ],

    skills_required: [
      "Industrial engineering & production knowledge",
      "Automation & robotics basics",
      "IoT device integration & monitoring",
      "AI & ML for predictive maintenance",
      "3D printing & additive manufacturing",
      "Quality control & assurance techniques",
      "ERP & MES systems knowledge",
      "Data analysis & industrial analytics",
      "Cybersecurity for industrial systems",
      "Process optimization & lean manufacturing",
    ],

    tools_and_technologies: {
      software: [
        "Siemens NX",
        "AutoCAD",
        "SolidWorks",
        "MATLAB",
        "ERPNext",
        "SAP ERP",
      ],
      hardware: [
        "Industrial Robots",
        "CNC Machines",
        "3D Printers",
        "Sensors & IoT Devices",
        "PLC Controllers",
      ],
      ai_tools: [
        "Predictive Maintenance AI",
        "Quality Inspection AI",
        "ML-based Process Optimization",
      ],
      analytics_tools: [
        "Tableau",
        "Power BI",
        "Google Cloud Industrial Analytics",
        "SCADA Systems",
      ],
      programming: ["Python", "C/C++", "PLC Programming", "Java", "SQL"],
    },

    roadmap: {
      beginner: [
        "Basics of manufacturing & industrial processes",
        "Introduction to automation & robotics",
        "Fundamentals of IoT in industry",
        "Basic quality control & production monitoring",
        "Safety standards & regulations",
      ],
      intermediate: [
        "Implementing IoT sensors & dashboards",
        "Predictive maintenance using AI/ML",
        "Advanced robotic automation",
        "ERP & MES integration",
        "Supply chain & inventory optimization",
      ],
      advanced: [
        "Smart factory design & implementation",
        "AI-driven production optimization",
        "Sustainable & energy-efficient manufacturing",
        "Industrial data analytics & real-time monitoring",
        "Integration of 3D printing & advanced manufacturing techniques",
      ],
    },

    resources: {
      youtube: [
        "Engineering Explained",
        "Automation Direct",
        "Siemens Industrial Automation",
        "MIT OpenCourseWare – Manufacturing",
        "Industry 4.0 Channel",
      ],
      documentation: [
        "siemens.com/docs",
        "autodesk.com/documentation",
        "solidworks.com/docs",
        "erpnext.com/docs",
        "ieee.org – Industrial Technology Standards",
      ],
      courses: [
        "Coursera – Smart Manufacturing",
        "edX – Industry 4.0 & IoT",
        "Udemy – Industrial Automation & Robotics",
        "MIT – Advanced Manufacturing Techniques",
        "LinkedIn Learning – Manufacturing & Industrial Tech",
      ],
    },

    interview_questions: [
      "What is Manufacturing Technology?",
      "What is the concept of Industry 4.0 and smart factories?",
      "How does predictive maintenance work?",
      "How is IoT used in industrial automation?",
      "What is the role of robotics in production lines?",
      "What is the importance of ERP and MES systems?",
      "What are sustainable manufacturing practices?",
      "How do AI and ML play a role in quality control?",
    ],

    salary_info: {
      india: {
        fresher: "₹3.5 LPA – ₹8 LPA",
        experienced: "₹10 LPA – ₹28 LPA+",
      },
      global: {
        fresher: "$50,000 – $80,000",
        experienced: "$90,000 – $160,000+",
      },
    },

    job_roles: [
      "Industrial Automation Engineer",
      "Robotics Engineer",
      "IoT & IIoT Specialist",
      "Manufacturing Process Engineer",
      "Production Manager",
      "Quality Control & Assurance Engineer",
      "ERP/MES Specialist",
      "Industrial Data Analyst",
    ],

    pros_and_cons: {
      Benefits: [
        "High demand in manufacturing & industrial sectors",
        "Opportunities in automation & robotics",
        "Integration with AI, IoT & cloud platforms",
        "Career growth in global industrial companies",
        "Opportunities in sustainable & smart manufacturing",
      ],
      Drawbacks: [
        "High initial setup & equipment costs",
        "Rapidly evolving technologies require continuous learning",
        "Complex integration of hardware & software",
        "Safety & compliance regulations can be strict",
        "Competitive industry with pressure on efficiency",
      ],
    },

    future_trends: [
      "Smart factories & Industry 4.0 expansion",
      "AI-driven predictive maintenance & process optimization",
      "IoT-enabled real-time monitoring",
      "Sustainable & green manufacturing practices",
      "Robotics & collaborative automation",
      "3D printing & additive manufacturing adoption",
      "Cloud-based manufacturing analytics",
      "Integration of AR/VR for industrial training & operations",
    ],
  },
  {
    technology: "Quantum Computing",

    short_description:
      "Quantum Computing is a technology that overcomes the limitations of classical computers by using qubits and principles of quantum mechanics to perform complex calculations and data processing faster and more efficiently.",

    detailed_description:
      "Quantum Computing is an advanced computing paradigm that leverages quantum bits (qubits) and concepts of quantum mechanics, such as superposition and entanglement, to drastically improve the speed and efficiency of traditional computing. Quantum computers can solve complex problems in optimization, cryptography, machine learning, molecular simulations, drug discovery, and financial modeling. This field involves quantum algorithms, quantum gates, quantum circuits, error correction, and hybrid quantum-classical computing.",

    key_concepts: [
      "Qubits & Quantum States",
      "Superposition & Entanglement",
      "Quantum Gates & Circuits",
      "Quantum Algorithms (Shor's, Grover's)",
      "Quantum Error Correction",
      "Quantum Supremacy",
      "Quantum Simulation",
      "Hybrid Quantum-Classical Systems",
      "Quantum Cryptography",
      "Quantum Machine Learning",
    ],

    applications: [
      "Cryptography & secure communication",
      "Optimization problems in logistics & finance",
      "Drug discovery & molecular simulation",
      "Quantum machine learning",
      "Material science & chemical simulations",
      "High-speed data analysis & AI",
      "Weather & climate modeling",
      "Complex financial modeling",
      "Quantum computing research & development",
      "Quantum internet & secure networks",
    ],

    skills_required: [
      "Linear algebra & quantum mechanics basics",
      "Classical computing & algorithms knowledge",
      "Python & quantum programming languages (Qiskit, Cirq)",
      "Quantum circuits & gate design",
      "Problem-solving for optimization & simulation",
      "Machine learning fundamentals",
      "Quantum error correction techniques",
      "Data analysis & mathematical modeling",
      "Familiarity with cloud quantum computing platforms",
      "Understanding of hybrid quantum-classical systems",
    ],

    tools_and_technologies: {
      platforms: [
        "IBM Quantum Experience",
        "Microsoft Azure Quantum",
        "Google Quantum AI",
        "D-Wave Leap",
        "Rigetti Forest",
      ],
      programming: ["Python", "Qiskit", "Cirq", "PyQuil", "OpenFermion"],
      simulation_tools: ["Quantum simulators", "Mathematica", "QuTiP"],
      hardware: [
        "Superconducting qubits",
        "Trapped ions",
        "Topological qubits",
        "Photonic qubits",
      ],
      analytics_tools: ["Python SciPy", "NumPy", "Pandas", "Matplotlib"],
    },

    roadmap: {
      beginner: [
        "Basics of quantum mechanics",
        "Introduction to qubits & quantum states",
        "Linear algebra & complex numbers",
        "Classical computing fundamentals",
        "Basic Python programming",
      ],
      intermediate: [
        "Quantum gates & circuits",
        "Quantum algorithms (Shor's, Grover's)",
        "Using Qiskit / Cirq for simple programs",
        "Quantum simulation & measurement",
        "Introduction to quantum error correction",
      ],
      advanced: [
        "Designing hybrid quantum-classical systems",
        "Quantum machine learning applications",
        "Optimization & simulation using quantum computers",
        "Research in quantum algorithms & cryptography",
        "Working on real quantum hardware platforms",
      ],
    },

    resources: {
      youtube: [
        "IBM Research – Quantum Computing",
        "Quantum Computing at Microsoft",
        "Qiskit by IBM",
        "minutephysics – Quantum Computing Explained",
        "MIT OpenCourseWare – Quantum Computation",
      ],
      documentation: [
        "qiskit.org/documentation",
        "quantum.microsoft.com/docs",
        "cirq.readthedocs.io",
        "dwave.com/documentation",
        "rigetti.com/docs",
      ],
      courses: [
        "Coursera – Quantum Computing Fundamentals",
        "edX – Quantum Computing for Everyone",
        "Udemy – Quantum Computing with Qiskit",
        "MIT – Introduction to Quantum Computing",
        "IBM Quantum Challenge Tutorials",
      ],
    },

    interview_questions: [
      "What is Quantum Computing?",
      "What is the difference between a qubit and a classical bit?",
      "What is the role of superposition and entanglement?",
      "What do Shor's and Grover's algorithms do?",
      "What is quantum error correction?",
      "What does quantum supremacy mean?",
      "Where are the practical applications of quantum computing?",
      "What are hybrid quantum-classical systems?",
    ],

    salary_info: {
      india: {
        fresher: "₹6 LPA – ₹12 LPA",
        experienced: "₹15 LPA – ₹35 LPA+",
      },
      global: {
        fresher: "$70,000 – $100,000",
        experienced: "$120,000 – $200,000+",
      },
    },

    job_roles: [
      "Quantum Algorithm Developer",
      "Quantum Research Scientist",
      "Quantum Software Engineer",
      "Quantum Machine Learning Engineer",
      "Quantum Hardware Engineer",
      "Quantum Cryptography Specialist",
      "Quantum Data Scientist",
      "Quantum Computing Consultant",
    ],

    pros_and_cons: {
      Benefits: [
        "Cutting-edge technology with high growth potential",
        "High-paying global opportunities",
        "Applications across multiple industries",
        "Opportunity to work with advanced research",
        "Innovative problem-solving environment",
      ],
      Drawbacks: [
        "Highly complex & mathematically intensive",
        "Limited practical hardware availability",
        "Rapidly evolving field requiring continuous learning",
        "High barrier to entry for beginners",
        "Resource-intensive experiments & simulations",
      ],
    },

    future_trends: [
      "Commercially viable quantum computers",
      "Quantum internet & secure communication",
      "Quantum AI & machine learning integration",
      "Advanced molecular & material simulations",
      "Hybrid quantum-classical computing adoption",
      "Error-tolerant quantum computing",
      "Global quantum computing collaborations",
      "Expansion of cloud-based quantum platforms",
    ],
  },
  {
    technology: "Clean / Green Technology",

    short_description:
      "Clean Technology (Green Tech) is a technology that uses renewable energy, sustainable resources, and eco-friendly solutions to protect the environment while making energy and industrial processes more efficient.",

    detailed_description:
      "Clean / Green Technology is an innovative field that focuses on developing solutions using renewable energy sources, energy-efficient systems, sustainable materials, and environmental protection. Its goal is to reduce pollution, minimize carbon footprint, and mitigate the effects of climate change. Green Technology includes components such as solar, wind, and hydro power, electric vehicles, waste management, water treatment, sustainable architecture, and smart grids. This field also leverages IoT, AI, robotics, and data analytics to optimize clean energy and sustainable processes.",

    key_concepts: [
      "Renewable Energy (Solar, Wind, Hydro, Biomass)",
      "Energy Efficiency & Management",
      "Sustainable Materials & Green Building",
      "Electric & Hybrid Vehicles",
      "Carbon Footprint Reduction",
      "Waste & Water Management",
      "Smart Grids & Energy Storage",
      "Environmental Monitoring Systems",
      "Climate Change Mitigation",
      "IoT & AI in Sustainability",
    ],

    applications: [
      "Solar & wind energy plants",
      "Electric & hybrid vehicle development",
      "Green building construction",
      "Smart grids & energy storage solutions",
      "Water purification & waste recycling systems",
      "Carbon capture & emission monitoring",
      "Sustainable agriculture & bioenergy",
      "Air quality & pollution monitoring",
      "Energy-efficient industrial processes",
      "IoT-based environmental monitoring",
    ],

    skills_required: [
      "Basics of renewable energy systems",
      "Sustainable engineering & materials knowledge",
      "Environmental science fundamentals",
      "Energy management & efficiency techniques",
      "IoT & AI applications in green tech",
      "Data analysis & simulation",
      "Knowledge of electric & hybrid vehicles",
      "Project management in sustainable projects",
      "Green building design & LEED standards",
      "Climate policy & regulatory understanding",
    ],

    tools_and_technologies: {
      platforms: [
        "HOMER Energy",
        "RETScreen",
        "MATLAB Simulink",
        "PV*Sol",
        "EnergyPlus",
      ],
      hardware: [
        "Solar panels",
        "Wind turbines",
        "Smart meters",
        "EV batteries",
        "Energy storage systems",
      ],
      programming: ["Python", "MATLAB", "R", "C/C++ for IoT devices"],
      analytics_tools: ["Tableau", "Power BI", "Google Earth Engine", "QGIS"],
      sensors_and_iot: [
        "Air quality sensors",
        "Smart energy meters",
        "Water sensors",
        "IoT gateways",
      ],
    },

    roadmap: {
      beginner: [
        "Basics of renewable energy & sustainability",
        "Environmental science fundamentals",
        "Energy efficiency principles",
        "Introduction to solar & wind energy",
        "Basic IoT & data analysis",
      ],
      intermediate: [
        "Green building & sustainable materials",
        "Electric & hybrid vehicle technology",
        "Smart grids & energy storage",
        "Waste & water management systems",
        "Simulation & modeling using MATLAB or Python",
      ],
      advanced: [
        "Designing large-scale renewable energy systems",
        "AI & IoT-based smart environmental monitoring",
        "Carbon capture & emission reduction strategies",
        "Sustainable industrial process optimization",
        "Research & development in clean technology innovations",
      ],
    },

    resources: {
      youtube: [
        "CleanTechnica",
        "Fully Charged Show",
        "Engineering Explained – Sustainable Tech",
        "MIT OpenCourseWare – Environmental Technology",
        "National Geographic – Sustainability",
      ],
      documentation: [
        "iea.org/reports",
        "nrel.gov",
        "unep.org/resources",
        "energy.gov/renewable-energy",
        "greenbuildingadvisor.com",
      ],
      courses: [
        "Coursera – Renewable Energy and Sustainability",
        "edX – Green Building & Sustainable Design",
        "Udemy – Solar & Wind Energy Systems",
        "MIT – Environmental Technology & Policy",
        "Stanford – Sustainable Energy",
      ],
    },

    interview_questions: [
      "What is Clean Technology?",
      "What are the types of renewable energy sources?",
      "What are the methods to reduce carbon footprint?",
      "What is the role of smart grids and energy storage?",
      "What are sustainable materials and green buildings?",
      "What is the difference between electric vehicles and hybrid vehicles?",
      "How is IoT used in green technology?",
      "What are the key strategies for climate change mitigation?",
    ],

    salary_info: {
      india: {
        fresher: "₹3.5 LPA – ₹8 LPA",
        experienced: "₹10 LPA – ₹25 LPA+",
      },
      global: {
        fresher: "$50,000 – $80,000",
        experienced: "$100,000 – $150,000+",
      },
    },

    job_roles: [
      "Renewable Energy Engineer",
      "Sustainability Consultant",
      "Green Building Designer",
      "Environmental Analyst",
      "Energy Storage Specialist",
      "Electric Vehicle Engineer",
      "IoT & AI for Sustainability Specialist",
      "Clean Tech Project Manager",
    ],

    pros_and_cons: {
      Benefits: [
        "Positive impact on environment",
        "Growing global demand & green policies",
        "High-tech innovation opportunities",
        "Sustainable & ethical career path",
        "Cross-industry applications",
      ],
      Drawbacks: [
        "High initial investment & project cost",
        "Technically complex solutions",
        "Rapidly evolving regulations",
        "Dependence on geographic/environmental factors",
        "Continuous upskilling required",
      ],
    },

    future_trends: [
      "Expansion of solar & wind energy capacity",
      "AI & IoT-driven smart grids",
      "Electric & autonomous vehicle adoption",
      "Carbon-neutral cities & infrastructure",
      "Sustainable industrial automation",
      "Energy storage & battery innovations",
      "Global climate policies & incentives",
      "Integration of renewable energy with IoT & AI",
    ],
  },
];

export const Technologyes_Data = [
  {
    id: 9,
    img: "https://icon2.cleanpng.com/20230912/yel/transparent-train-your-brain-day-brain-technology-digital-circ-1711074177120.webp",
    color: "text-blue-500",
    name: "Web Develpoment",
    // key: "web-development",
    rating: 4.9,
    pricing: "Freemium",
    slug: "web-development",
    icon: "Code",

    short_description:
      "Websites, web apps aur modern online systems banane ka complete process.",

    detailed_description:
      "Frontend, backend, databases, APIs, deployment aur performance optimization ka complete ecosystem.",

    key_concepts: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Databases",
      "APIs",
      "Deployment",
    ],
    category: [
      { label: "Artificial Intelligence", key: "ai" },
      { label: "Software Development", key: "software-development" },
    ],
    whatItDoes:
      "WAN 2.1 is a next-generation conversational AI tool used for creative writing, coding assistance, problem-solving, and workflow automation.",
    howToUse: [
      "Write a clear prompt specifying what you want.",
      "Select a model or creativity level suitable for your task.",
      "Adjust any optional settings like tone, length, or format.",
      "Click 'Generate' and wait for output.",
      "Review the output carefully for errors or improvements.",
      "Refine your prompt and regenerate if needed.",
      "Use advanced features: multi-step workflows, AI integrations, or batch tasks.",
      "Export results to your preferred format: text, JSON, or Markdown.",
      "Collaborate with team members using shared links.",
      "Use analytics to track model performance and adjust prompts.",
    ],

    learningRoadmapData: {
      beginner: {
        title: "Beginner",
        whoShouldUse: [
          "Students new to AI",
          "Non-technical learners",
          "Anyone curious about AI",
        ],

        tools: [
          { name: "ChatGPT", link: "https://chat.openai.com" },
          { name: "Perplexity AI", link: "https://www.perplexity.ai" },
          { name: "Gemini", link: "https://gemini.google.com" },
          { name: "Claude AI", link: "https://claude.ai" },
          { name: "Poe AI", link: "https://poe.com" },
        ],

        resources: {
          documentation: [
            {
              title: "AI Basics – IBM",
              link: "https://www.ibm.com/topics/artificial-intelligence",
            },
            {
              title: "What is AI – Google",
              link: "https://ai.google/education/",
            },
            {
              title: "AI Glossary",
              link: "https://www.ibm.com/cloud/learn/ai",
            },
            { title: "OpenAI Docs", link: "https://platform.openai.com/docs" },
            {
              title: "AI Ethics",
              link: "https://www.unesco.org/en/artificial-intelligence",
            },
          ],

          tutorials: [
            {
              title: "AI for Beginners (YouTube)",
              link: "https://www.youtube.com/watch?v=JMUxmLyrhSk",
            },
            {
              title: "Prompt Engineering Basics",
              link: "https://www.promptingguide.ai",
            },
            {
              title: "FreeCodeCamp AI",
              link: "https://www.freecodecamp.org/news/tag/ai/",
            },
          ],

          github: [
            {
              title: "Awesome ChatGPT Prompts",
              link: "https://github.com/f/awesome-chatgpt-prompts",
            },
            {
              title: "Beginner AI Projects",
              link: "https://github.com/topics/ai-projects",
            },
          ],

          prompts: [
            "Summarize this article",
            "Explain topic in simple words",
            "Generate blog outline",
            "Convert text into bullet points",
          ],
        },

        projects: [
          "AI blog generator",
          "Resume summary generator",
          "AI Q&A chatbot",
          "Prompt-based content creator",
        ],
      },

      intermediate: {
        title: "Intermediate",
        whoShouldUse: ["Developers", "Content creators", "Startup builders"],

        tools: [
          {
            name: "GitHub Copilot",
            link: "https://github.com/features/copilot",
          },
          { name: "Claude AI", link: "https://claude.ai" },
          { name: "Notion AI", link: "https://www.notion.so/product/ai" },
          { name: "Midjourney", link: "https://www.midjourney.com" },
          { name: "LangChain", link: "https://www.langchain.com" },
        ],

        resources: {
          documentation: [
            {
              title: "LangChain Docs",
              link: "https://python.langchain.com/docs",
            },
            {
              title: "OpenAI API Docs",
              link: "https://platform.openai.com/docs",
            },
          ],

          tutorials: [
            {
              title: "Build AI Apps",
              link: "https://www.freecodecamp.org/news/build-ai-apps/",
            },
            {
              title: "LangChain Crash Course",
              link: "https://www.youtube.com/watch?v=6zM6ZpPpJ4o",
            },
          ],

          github: [
            {
              title: "LangChain Examples",
              link: "https://github.com/langchain-ai/langchain",
            },
          ],

          prompts: [
            "Generate React component",
            "Create REST API structure",
            "Optimize SQL query",
          ],
        },

        projects: [
          "AI-powered blog platform",
          "Code review assistant",
          "AI image generator",
        ],
      },

      advanced: {
        title: "Advanced",
        whoShouldUse: ["AI Engineers", "SaaS founders", "System architects"],

        tools: [
          { name: "Hugging Face", link: "https://huggingface.co" },
          { name: "Pinecone", link: "https://www.pinecone.io" },
          { name: "LangGraph", link: "https://langgraph.dev" },
          {
            name: "AutoGPT",
            link: "https://github.com/Significant-Gravitas/AutoGPT",
          },
          { name: "CrewAI", link: "https://www.crewai.com" },
        ],

        resources: {
          documentation: [
            { title: "RAG Architecture", link: "https://docs.llamaindex.ai" },
            {
              title: "Vector Databases",
              link: "https://www.pinecone.io/learn/",
            },
          ],

          tutorials: [
            {
              title: "Build RAG System",
              link: "https://www.youtube.com/watch?v=2TJxpyO3ei4",
            },
          ],

          github: [
            {
              title: "AutoGPT Repo",
              link: "https://github.com/Significant-Gravitas/AutoGPT",
            },
          ],

          prompts: [
            "Design RAG architecture",
            "Optimize LLM cost",
            "Build multi-agent workflow",
          ],
        },

        projects: [
          "AI SaaS platform",
          "Custom GPT system",
          "AI workflow automation tool",
        ],
      },
    },
    detailedStepByStepLearning: {
      
        beginner: [
          {
            step: 1,
            title: "Web Basics & Internet",
            details: [
              "What is Internet",
              "How websites work",
              "Client vs Server",
              "HTTP / HTTPS",
              "Domain & Hosting basics",
            ],
          },
          {
            step: 2,
            title: "HTML5 (Structure)",
            details: [
              "HTML tags & elements",
              "Semantic HTML",
              "Forms & Inputs",
              "Tables & Lists",
              "SEO-friendly HTML",
            ],
          },
          {
            step: 3,
            title: "CSS Basics",
            details: [
              "CSS syntax",
              "Colors, Fonts",
              "Margin & Padding",
              "Box Model",
              "Units (px, %, rem)",
            ],
          },
          {
            step: 4,
            title: "Layouts",
            details: [
              "Flexbox",
              "Grid basics",
              "Positioning",
              "Responsive layouts",
            ],
          },
          {
            step: 5,
            title: "JavaScript Basics",
            details: [
              "Variables & Data types",
              "Operators",
              "Conditions",
              "Loops",
              "Functions",
            ],
          },
          {
            step: 6,
            title: "DOM Manipulation",
            details: ["Selecting elements", "Events", "Updating UI using JS"],
          },
          {
            step: 7,
            title: "Version Control",
            details: ["Git basics", "GitHub workflow", "Push / Pull / Commit"],
          },
          {
            step: 8,
            title: "Beginner Project",
            details: ["Landing Page", "Portfolio Website", "Simple JS App"],
          },
        ],

        intermediate: [
          {
            step: 1,
            title: "Advanced JavaScript",
            details: [
              "ES6+ features",
              "Arrow functions",
              "Spread & Rest",
              "Destructuring",
            ],
          },
          {
            step: 2,
            title: "Async JavaScript",
            details: ["Callbacks", "Promises", "Async / Await", "Fetch API"],
          },
          {
            step: 3,
            title: "CSS Frameworks",
            details: ["Tailwind CSS", "Bootstrap", "Custom components"],
          },
          {
            step: 4,
            title: "React Basics",
            details: ["Components", "JSX", "Props", "State"],
          },
          {
            step: 5,
            title: "React Hooks",
            details: ["useState", "useEffect", "useContext"],
          },
          {
            step: 6,
            title: "API Integration",
            details: [
              "REST APIs",
              "Axios / Fetch",
              "Handling loading & errors",
            ],
          },
          {
            step: 7,
            title: "Intermediate Project",
            details: ["React Dashboard", "CRUD App", "API-based App"],
          },
        ],

        advanced: [
          {
            step: 1,
            title: "Advanced React",
            details: [
              "Context API",
              "Performance optimization",
              "Code splitting",
            ],
          },
          {
            step: 2,
            title: "Next.js",
            details: ["Routing", "SSR / SSG", "SEO optimization"],
          },
          {
            step: 3,
            title: "Backend Basics",
            details: ["Node.js", "Express.js", "Middleware"],
          },
          {
            step: 4,
            title: "Database",
            details: ["MongoDB", "Schemas", "CRUD operations"],
          },
          {
            step: 5,
            title: "Authentication",
            details: ["JWT", "Login / Signup", "Protected Routes"],
          },
          {
            step: 6,
            title: "Deployment",
            details: ["Vercel", "Netlify", "Environment variables"],
          },
          {
            step: 7,
            title: "Production Project",
            details: ["Full Stack MERN App", "SaaS Application"],
          },
        ],
      
    },
    resources: {
      youtube: ["CodeWithHarry", "Hitesh Choudhary", "Traversy Media"],
      documentation: ["developer.mozilla.org", "react.dev", "nodejs.org"],
      courses: ["FreeCodeCamp Web Dev", "Udemy MERN Stack"],
    },
  },
  {
    id: 9,
    name: "Ai Ml",
    // key: "Ai-Ml",
    img: "https://icon2.cleanpng.com/20230912/yel/transparent-train-your-brain-day-brain-technology-digital-circ-1711074177120.webp",
    rating: 4.9,
    pricing: "Freemium",
    slug: "Ai-ML",
    icon: "Code",
    color: "text-pink-500",

    short_description:
      "Websites, web apps aur modern online systems banane ka complete process.",

    detailed_description:
      "Frontend, backend, databases, APIs, deployment aur performance optimization ka complete ecosystem.",

    key_concepts: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Databases",
      "APIs",
      "Deployment",
    ],
    category: [
      { label: "Artificial Intelligence", key: "ai" },
      { label: "Software Development", key: "software-development" },
    ],
    whatItDoes:
      "WAN 2.1 is a next-generation conversational AI tool used for creative writing, coding assistance, problem-solving, and workflow automation.",
    howToUse: [
      "Write a clear prompt specifying what you want.",
      "Select a model or creativity level suitable for your task.",
      "Adjust any optional settings like tone, length, or format.",
      "Click 'Generate' and wait for output.",
      "Review the output carefully for errors or improvements.",
      "Refine your prompt and regenerate if needed.",
      "Use advanced features: multi-step workflows, AI integrations, or batch tasks.",
      "Export results to your preferred format: text, JSON, or Markdown.",
      "Collaborate with team members using shared links.",
      "Use analytics to track model performance and adjust prompts.",
    ],

    learningRoadmapData: {
      beginner: {
        title: "Beginner",
        whoShouldUse: [
          "Students new to AI",
          "Non-technical learners",
          "Anyone curious about AI",
        ],

        tools: [
          { name: "ChatGPT", link: "https://chat.openai.com" },
          { name: "Perplexity AI", link: "https://www.perplexity.ai" },
          { name: "Gemini", link: "https://gemini.google.com" },
          { name: "Claude AI", link: "https://claude.ai" },
          { name: "Poe AI", link: "https://poe.com" },
        ],

        resources: {
          documentation: [
            {
              title: "AI Basics – IBM",
              link: "https://www.ibm.com/topics/artificial-intelligence",
            },
            {
              title: "What is AI – Google",
              link: "https://ai.google/education/",
            },
            {
              title: "AI Glossary",
              link: "https://www.ibm.com/cloud/learn/ai",
            },
            { title: "OpenAI Docs", link: "https://platform.openai.com/docs" },
            {
              title: "AI Ethics",
              link: "https://www.unesco.org/en/artificial-intelligence",
            },
          ],

          tutorials: [
            {
              title: "AI for Beginners (YouTube)",
              link: "https://www.youtube.com/watch?v=JMUxmLyrhSk",
            },
            {
              title: "Prompt Engineering Basics",
              link: "https://www.promptingguide.ai",
            },
            {
              title: "FreeCodeCamp AI",
              link: "https://www.freecodecamp.org/news/tag/ai/",
            },
          ],

          github: [
            {
              title: "Awesome ChatGPT Prompts",
              link: "https://github.com/f/awesome-chatgpt-prompts",
            },
            {
              title: "Beginner AI Projects",
              link: "https://github.com/topics/ai-projects",
            },
          ],

          prompts: [
            "Summarize this article",
            "Explain topic in simple words",
            "Generate blog outline",
            "Convert text into bullet points",
          ],
        },

        projects: [
          "AI blog generator",
          "Resume summary generator",
          "AI Q&A chatbot",
          "Prompt-based content creator",
        ],
      },

      intermediate: {
        title: "Intermediate",
        whoShouldUse: ["Developers", "Content creators", "Startup builders"],

        tools: [
          {
            name: "GitHub Copilot",
            link: "https://github.com/features/copilot",
          },
          { name: "Claude AI", link: "https://claude.ai" },
          { name: "Notion AI", link: "https://www.notion.so/product/ai" },
          { name: "Midjourney", link: "https://www.midjourney.com" },
          { name: "LangChain", link: "https://www.langchain.com" },
        ],

        resources: {
          documentation: [
            {
              title: "LangChain Docs",
              link: "https://python.langchain.com/docs",
            },
            {
              title: "OpenAI API Docs",
              link: "https://platform.openai.com/docs",
            },
          ],

          tutorials: [
            {
              title: "Build AI Apps",
              link: "https://www.freecodecamp.org/news/build-ai-apps/",
            },
            {
              title: "LangChain Crash Course",
              link: "https://www.youtube.com/watch?v=6zM6ZpPpJ4o",
            },
          ],

          github: [
            {
              title: "LangChain Examples",
              link: "https://github.com/langchain-ai/langchain",
            },
          ],

          prompts: [
            "Generate React component",
            "Create REST API structure",
            "Optimize SQL query",
          ],
        },

        projects: [
          "AI-powered blog platform",
          "Code review assistant",
          "AI image generator",
        ],
      },

      advanced: {
        title: "Advanced",
        whoShouldUse: ["AI Engineers", "SaaS founders", "System architects"],

        tools: [
          { name: "Hugging Face", link: "https://huggingface.co" },
          { name: "Pinecone", link: "https://www.pinecone.io" },
          { name: "LangGraph", link: "https://langgraph.dev" },
          {
            name: "AutoGPT",
            link: "https://github.com/Significant-Gravitas/AutoGPT",
          },
          { name: "CrewAI", link: "https://www.crewai.com" },
        ],

        resources: {
          documentation: [
            { title: "RAG Architecture", link: "https://docs.llamaindex.ai" },
            {
              title: "Vector Databases",
              link: "https://www.pinecone.io/learn/",
            },
          ],

          tutorials: [
            {
              title: "Build RAG System",
              link: "https://www.youtube.com/watch?v=2TJxpyO3ei4",
            },
          ],

          github: [
            {
              title: "AutoGPT Repo",
              link: "https://github.com/Significant-Gravitas/AutoGPT",
            },
          ],

          prompts: [
            "Design RAG architecture",
            "Optimize LLM cost",
            "Build multi-agent workflow",
          ],
        },

        projects: [
          "AI SaaS platform",
          "Custom GPT system",
          "AI workflow automation tool",
        ],
      },
    },
    detailedStepByStepLearning: {
     
        beginner: [
          {
            step: 1,
            title: "Web Basics & Internet",
            details: [
              "What is Internet",
              "How websites work",
              "Client vs Server",
              "HTTP / HTTPS",
              "Domain & Hosting basics",
            ],
          },
          {
            step: 2,
            title: "HTML5 (Structure)",
            details: [
              "HTML tags & elements",
              "Semantic HTML",
              "Forms & Inputs",
              "Tables & Lists",
              "SEO-friendly HTML",
            ],
          },
          {
            step: 3,
            title: "CSS Basics",
            details: [
              "CSS syntax",
              "Colors, Fonts",
              "Margin & Padding",
              "Box Model",
              "Units (px, %, rem)",
            ],
          },
          {
            step: 4,
            title: "Layouts",
            details: [
              "Flexbox",
              "Grid basics",
              "Positioning",
              "Responsive layouts",
            ],
          },
          {
            step: 5,
            title: "JavaScript Basics",
            details: [
              "Variables & Data types",
              "Operators",
              "Conditions",
              "Loops",
              "Functions",
            ],
          },
          {
            step: 6,
            title: "DOM Manipulation",
            details: ["Selecting elements", "Events", "Updating UI using JS"],
          },
          {
            step: 7,
            title: "Version Control",
            details: ["Git basics", "GitHub workflow", "Push / Pull / Commit"],
          },
          {
            step: 8,
            title: "Beginner Project",
            details: ["Landing Page", "Portfolio Website", "Simple JS App"],
          },
        ],

        intermediate: [
          {
            step: 1,
            title: "Advanced JavaScript",
            details: [
              "ES6+ features",
              "Arrow functions",
              "Spread & Rest",
              "Destructuring",
            ],
          },
          {
            step: 2,
            title: "Async JavaScript",
            details: ["Callbacks", "Promises", "Async / Await", "Fetch API"],
          },
          {
            step: 3,
            title: "CSS Frameworks",
            details: ["Tailwind CSS", "Bootstrap", "Custom components"],
          },
          {
            step: 4,
            title: "React Basics",
            details: ["Components", "JSX", "Props", "State"],
          },
          {
            step: 5,
            title: "React Hooks",
            details: ["useState", "useEffect", "useContext"],
          },
          {
            step: 6,
            title: "API Integration",
            details: [
              "REST APIs",
              "Axios / Fetch",
              "Handling loading & errors",
            ],
          },
          {
            step: 7,
            title: "Intermediate Project",
            details: ["React Dashboard", "CRUD App", "API-based App"],
          },
        ],

        advanced: [
          {
            step: 1,
            title: "Advanced React",
            details: [
              "Context API",
              "Performance optimization",
              "Code splitting",
            ],
          },
          {
            step: 2,
            title: "Next.js",
            details: ["Routing", "SSR / SSG", "SEO optimization"],
          },
          {
            step: 3,
            title: "Backend Basics",
            details: ["Node.js", "Express.js", "Middleware"],
          },
          {
            step: 4,
            title: "Database",
            details: ["MongoDB", "Schemas", "CRUD operations"],
          },
          {
            step: 5,
            title: "Authentication",
            details: ["JWT", "Login / Signup", "Protected Routes"],
          },
          {
            step: 6,
            title: "Deployment",
            details: ["Vercel", "Netlify", "Environment variables"],
          },
          {
            step: 7,
            title: "Production Project",
            details: ["Full Stack MERN App", "SaaS Application"],
          },
        ],
      
    },
    resources: {
      youtube: ["CodeWithHarry", "Hitesh Choudhary", "Traversy Media"],
      documentation: ["developer.mozilla.org", "react.dev", "nodejs.org"],
      courses: ["FreeCodeCamp Web Dev", "Udemy MERN Stack"],
    },
  },
  {
  id: 1768153542424,
  name: "Webd Develpoment",
  slug: "web-develpoment",
  img: "https://icon2.cleanpng.com/20230912/yel/transparent-train-your-brain-day-brain-technology-digital-circ-1711074177120.webp",
  icon: "Code",
  color: "text-blue-500",
  rating: 4.9,
  pricing: "Free",
  short_description: "Websites, web apps aur modern online systems banane ka complete process.",
  detailed_description: "Frontend, backend, databases, APIs, deployment aur performance optimization ka complete ecosystem.",
  whatItDoes: "WAN 2.1 is a next-generation conversational AI tool used for creative writing, coding assistance, problem-solving, and workflow automation.",
  
  category: [
    {
      key: "software-development",
      label: "Software Development"
    }
  ],

  key_concepts: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Databases", "APIs", "Deployment"],

  howToUse: [
    "Write a clear prompt specifying what you want.",
    "Select a model or creativity level suitable for your task.",
    "Adjust any optional settings like tone, length, or format.",
    "Click 'Generate' and wait for output.",
    "Review the output carefully for errors or improvements.",
    "Refine your prompt and regenerate if needed.",
    "Use advanced features: multi-step workflows, AI integrations, or batch tasks.",
    "Export results to your preferred format: text, JSON, or Markdown.",
    "Collaborate with team members using shared links.",
    "Use analytics to track model performance and adjust prompts."
  ],

  resources: {
    courses: ["FreeCodeCamp Web Dev", "FreeCodeCamp Web Dev"],
    documentation: ["developer.mozilla.org", "mozilla.org"],
    youtube: ["CodeWithHarry", "Hitesh Choudhary"]
  },

  learningRoadmapData: {
    beginner: {
      title: "Beginner",
      whoShouldUse: ["Students new to AI", "Non-technical learners", "Anyone curious about AI"],
      tools: [
        { name: "ChatGPT", link: "https://chat.openai.com" },
        { name: "Perplexity AI", link: "https://www.perplexity.ai" },
        { name: "Gemini", link: "https://gemini.google.com" },
        { name: "Claude AI", link: "https://claude.ai" },
        { name: "Poe AI", link: "https://poe.com" }
      ],
      projects: ["AI blog generator", "Resume summary generator", "AI Q&A chatbot", "Prompt-based content creator"],
      resources: {
        documentation: [
          { title: "AI Basics – IBM", link: "https://www.ibm.com/topics/artificial-intelligence" },
          { title: "What is AI – Google", link: "https://ai.google/education/" }
        ],
        github: [{ title: "Awesome ChatGPT Prompts", link: "https://github.com/f/awesome-chatgpt-prompts" }],
        prompts: ["Summarize this article", "Explain topic in simple words"],
        tutorials: [{ title: "AI for Beginners (YouTube)", link: "https://www.youtube.com/watch?v=JMUxmLyrhSk" }]
      }
    },
    intermediate: {
      title: "Intermediate",
      whoShouldUse: ["Developers", "Content creators", "Startup builders"],
      tools: [
        { name: "GitHub Copilot", link: "https://github.com/features/copilot" },
        { name: "Claude AI", link: "https://claude.ai" },
        { name: "LangChain", link: "https://www.langchain.com" }
      ],
      projects: ["AI-powered blog platform", "Code review assistant"],
      resources: {
        documentation: [{ title: "LangChain Docs", link: "https://python.langchain.com/docs" }],
        github: [{ title: "LangChain Examples", link: "https://github.com/langchain-ai/langchain" }],
        prompts: ["Generate React component"],
        tutorials: []
      }
    },
    advanced: {
      title: "Advanced",
      whoShouldUse: ["AI Engineers", "SaaS founders", "System architects"],
      tools: [
        { name: "Hugging Face", link: "https://huggingface.co" },
        { name: "Pinecone", link: "https://www.pinecone.io" },
        { name: "CrewAI", link: "https://www.crewai.com" }
      ],
      projects: ["AI SaaS platform", "Custom GPT system"],
      resources: {
        documentation: [{ title: "RAG Architecture", link: "https://docs.llamaindex.ai" }],
        github: [{ title: "AutoGPT Repo", link: "https://github.com/Significant-Gravitas/AutoGPT" }],
        prompts: ["Design RAG architecture"],
        tutorials: [{ title: "Build RAG System", link: "https://www.youtube.com/watch?v=2TJxpyO3ei4" }]
      }
    }
  },

  detailedStepByStepLearning: {
    beginner: [
      { step: 1, title: "Web Basics & Internet", details: ["What is Internet", "How websites work", "Client vs Server", "HTTP / HTTPS"] },
      { step: 2, title: "HTML5 (Structure)", details: ["HTML tags & elements", "Semantic HTML", "Forms & Inputs"] },
      { step: 3, title: "CSS Basics", details: ["CSS syntax", "Box Model", "Margin & Padding", "Units (rem, %)"] },
      { step: 4, title: "Layouts", details: ["Flexbox", "Grid basics", "Positioning", "Responsive design"] },
      { step: 5, title: "JavaScript Basics", details: ["Variables", "Operators", "Functions", "Loops"] },
      { step: 6, title: "DOM Manipulation", details: ["Selecting elements", "Events", "Updating UI"] },
      { step: 7, title: "Version Control", details: ["Git basics", "GitHub workflow", "Push/Pull"] },
      { step: 8, title: "Beginner Project", details: ["Portfolio Website", "Simple JS App"] }
    ],
    intermediate: [
      { step: 1, title: "Advanced JavaScript", details: ["ES6+", "Destructuring", "Spread/Rest"] },
      { step: 2, title: "Async JS", details: ["Promises", "Async/Await", "Fetch API"] },
      { step: 3, title: "CSS Frameworks", details: ["Tailwind CSS", "Bootstrap"] },
      { step: 4, title: "React Basics", details: ["Components", "JSX", "Props", "State"] },
      { step: 5, title: "React Hooks", details: ["useState", "useEffect", "useContext"] },
      { step: 6, title: "API Integration", details: ["Axios", "Error Handling"] }
    ],
    advanced: [
      { step: 1, title: "Advanced React", details: ["Context API", "Optimization", "Code Splitting"] },
      { step: 2, title: "Next.js", details: ["SSR / SSG", "File-based Routing"] },
      { step: 3, title: "Backend Basics", details: ["Node.js", "Express.js", "Middleware"] },
      { step: 4, title: "Database", details: ["MongoDB", "Schemas", "CRUD"] },
      { step: 5, title: "Authentication", details: ["JWT", "Protected Routes"] },
      { step: 6, title: "Deployment", details: ["Vercel", "Netlify", "CI/CD"] }
    ]
  }
},
];

export const AIToolsData = [
  {
    id: 1,
    name: "Napkin AI",
    rating: 4.9,
    pricing: "Freemium",
    category: [
      "Educational Technology (EdTech)",
      "Artificial Intelligence",
      "Information Technology",
    ],
    whatItDoes: "AI-powered idea mapping and conceptual visualization tool.",
    howToUse: [
      "Add your idea",
      "Generate AI mind maps",
      "Organize concepts",
      "Export visual output",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Information Technology",
      "Computer Science / Software Development",
    ],
    image: "https://source.unsplash.com/800x600/?mindmap",
    officialLink: "https://www.napkin.ai",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 2,
    name: "Otter AI",
    rating: 4.9,
    pricing: "Freemium",
    category: [
      "Information Technology",
      "Artificial Intelligence",
      "Educational Technology (EdTech)",
    ],
    whatItDoes: "AI meeting transcription and summary tool.",
    howToUse: [
      "Start meeting",
      "Enable transcription",
      "Review notes",
      "Export summary",
    ],
    techRelevance: ["Artificial Intelligence", "Data Science"],
    image: "https://source.unsplash.com/800x600/?meeting",
    officialLink: "https://otter.ai",
    docLink: "https://help.otter.ai",
    tutorialLink: "https://otter.ai/tutorials",
    githubLink: "N/A",
  },
  {
    id: 3,
    name: "NotebookLM",
    rating: 4.9,
    pricing: "Freemium",
    category: [
      "Educational Technology (EdTech)",
      "Artificial Intelligence",
      "Information Technology",
    ],
    whatItDoes:
      "AI research assistant to upload, summarize & analyze documents.",
    howToUse: [
      "Upload PDFs",
      "Ask questions",
      "Generate summaries",
      "Organize research",
    ],
    techRelevance: ["Artificial Intelligence", "Data Science"],
    image: "https://source.unsplash.com/800x600/?documents",
    officialLink: "https://notebooklm.google",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 4,
    name: "Gamma AI",
    rating: 4.9,
    pricing: "Freemium",
    category: [
      "Media & Entertainment Technology",
      "Artificial Intelligence",
      "Web Development",
    ],
    whatItDoes: "AI presentation and webpage generator.",
    howToUse: [
      "Choose template",
      "Enter content",
      "AI creates slides",
      "Export project",
    ],
    techRelevance: ["Artificial Intelligence", "Web Development"],
    image: "https://source.unsplash.com/800x600/?presentation",
    officialLink: "https://gamma.app",
    docLink: "https://gamma.app/help",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 5,
    name: "MyMeet.io",
    rating: 4.9,
    pricing: "Freemium",
    category: [
      "Information Technology",
      "Artificial Intelligence",
      "Cloud Computing",
    ],
    whatItDoes: "Automated AI meeting recorder and summarizer.",
    howToUse: [
      "Start or schedule meeting",
      "Enable AI assist",
      "Generate transcript",
      "Download summary",
    ],
    techRelevance: ["Artificial Intelligence", "Data Science"],
    image: "https://source.unsplash.com/800x600/?conference",
    officialLink: "https://mymeet.io",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 6,
    name: "Perplexity AI",
    rating: 4.9,
    pricing: "Freemium",
    category: [
      "Artificial Intelligence",
      "Information Technology",
      "Data Science",
    ],
    whatItDoes: "AI-powered search engine with cited answers.",
    howToUse: [
      "Type question",
      "Check cited sources",
      "Explore results",
      "Save threads",
    ],
    techRelevance: ["Artificial Intelligence", "Data Science"],
    image: "https://source.unsplash.com/800x600/?search",
    officialLink: "https://www.perplexity.ai",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 7,
    name: "Sora",
    rating: 4.9,
    pricing: "Freemium",
    category: [
      "Media & Entertainment Technology",
      "Artificial Intelligence",
      "Educational Technology (EdTech)",
    ],
    whatItDoes: "Text‑to‑video AI generator.",
    howToUse: [
      "Enter prompt",
      "Select style",
      "Generate video",
      "Refine output",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Computer Science / Software Development",
    ],
    image: "https://source.unsplash.com/800x600/?video",
    officialLink: "https://openai.com/sora",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 8,
    name: "Rytr.me",
    rating: 4.9,
    pricing: "Freemium",
    category: [
      "Artificial Intelligence",
      "Information Technology",
      "Web Development",
    ],
    whatItDoes: "AI content and copy generator for writing tasks.",
    howToUse: ["Choose format", "Enter topic", "Generate text", "Edit output"],
    techRelevance: ["Artificial Intelligence", "Web Development"],
    image: "https://source.unsplash.com/800x600/?writing",
    officialLink: "https://rytr.me",
    docLink: "https://help.rytr.me",
    tutorialLink: "https://rytr.me/blog",
    githubLink: "N/A",
  },
  {
    id: 9,
    name: "WAN 2.1",
    rating: 4.9,
    pricing: "Freemium",
    category: [
      "Artificial Intelligence",
      "Computer Science / Software Development",
      "Information Technology",
    ],
    whatItDoes: "Next‑gen conversational AI model for creative tasks.",
    howToUse: [
      "Write prompt",
      "Select settings",
      "Generate output",
      "Refine result",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Computer Science / Software Development",
    ],
    image: "https://source.unsplash.com/800x600/?ai-model",
    officialLink: "N/A",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 10,
    name: "VEED",
    rating: 4.9,
    pricing: "Freemium",
    category: [
      "Media & Entertainment Technology",
      "Artificial Intelligence",
      "Web Development",
    ],
    whatItDoes: "AI video editor for subtitles, filters & production.",
    howToUse: [
      "Upload video",
      "Apply AI tools",
      "Auto captions",
      "Export file",
    ],
    techRelevance: ["Artificial Intelligence", "Web Development"],
    image: "https://source.unsplash.com/800x600/?video-editing",
    officialLink: "https://veed.io",
    docLink: "https://help.veed.io",
    tutorialLink: "https://www.veed.io/learn",
    githubLink: "N/A",
  },
  {
    id: 11,
    name: "SciSpace",
    rating: 4.9,
    pricing: "Freemium",
    category: [
      "Educational Technology (EdTech)",
      "Artificial Intelligence",
      "Data Science",
    ],
    whatItDoes: "AI tool to summarize and explain scientific papers.",
    howToUse: [
      "Upload paper",
      "AI explains",
      "Extract insights",
      "Save summary",
    ],
    techRelevance: ["Artificial Intelligence", "Data Science"],
    image: "https://source.unsplash.com/800x600/?science",
    officialLink: "https://typeset.io",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 12,
    name: "Beautiful AI",

    category: [
      "Media & Entertainment Technology",
      "Artificial Intelligence",
      "Web Development",
    ],
    whatItDoes: "AI‑powered smart presentation builder.",
    howToUse: [
      "Choose theme",
      "Add content",
      "AI design slides",
      "Export deck",
    ],
    techRelevance: ["Artificial Intelligence", "Web Development"],
    image: "https://source.unsplash.com/800x600/?design",
    officialLink: "https://www.beautiful.ai",
    docLink: "https://www.beautiful.ai/help",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 13,
    name: "Explainium AI",
    category: [
      "Educational Technology (EdTech)",
      "Artificial Intelligence",
      "Media & Entertainment Technology",
    ],
    whatItDoes: "AI that creates animated explainers and videos.",
    howToUse: ["Enter topic", "Pick style", "Generate video", "Download"],
    techRelevance: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
    ],
    image: "https://source.unsplash.com/800x600/?explain",
    officialLink: "N/A",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 14,
    name: "Claude",
    category: [
      "Artificial Intelligence",
      "Computer Science / Software Development",
      "Information Technology",
    ],
    whatItDoes: "AI assistant for writing, coding, research, and reasoning.",
    howToUse: [
      "Ask question",
      "Upload files",
      "Generate output",
      "Review insights",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Computer Science / Software Development",
    ],
    image: "https://source.unsplash.com/800x600/?assistant",
    officialLink: "https://claude.ai",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 15,
    name: "PopAI",
    category: [
      "Information Technology",
      "Artificial Intelligence",
      "Media & Entertainment Technology",
    ],
    whatItDoes: "Document analysis & slide creation with AI.",
    howToUse: ["Upload doc", "Ask questions", "Generate slides", "Export"],
    techRelevance: [
      "Artificial Intelligence",
      "Computer Science / Software Development",
    ],
    image: "https://source.unsplash.com/800x600/?documents",
    officialLink: "https://popai.pro",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 16,
    name: "DeepSeek",
    category: [
      "Artificial Intelligence",
      "Computer Science / Software Development",
      "Information Technology",
    ],
    whatItDoes: "Powerful AI model for analysis, coding, and reasoning.",
    howToUse: ["Enter prompt", "Select mode", "Generate", "Refine"],
    techRelevance: [
      "Artificial Intelligence",
      "Computer Science / Software Development",
    ],
    image: "https://source.unsplash.com/800x600/?coding",
    officialLink: "https://deepseek.com",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 17,
    name: "DALL·E",
    category: [
      "Media & Entertainment Technology",
      "Artificial Intelligence",
      "Web Development",
    ],
    whatItDoes: "AI image generator from text prompts.",
    howToUse: ["Enter prompt", "Select style", "Generate images", "Download"],
    techRelevance: [
      "Artificial Intelligence",
      "Computer Science / Software Development",
    ],
    image: "https://source.unsplash.com/800x600/?art",
    officialLink: "https://openai.com/dall-e",
    docLink: "https://openai.com/dall-e/docs",
    tutorialLink: "https://platform.openai.com/docs/guides/images",
    githubLink: "N/A",
  },
  {
    id: 18,
    name: "Notion AI",
    category: [
      "Information Technology",
      "Artificial Intelligence",
      "Educational Technology (EdTech)",
    ],
    whatItDoes:
      "AI assistant inside Notion for notes, summaries, tasks, and workflows.",
    howToUse: [
      "Open Notion",
      "Use AI commands",
      "Generate output",
      "Organize workspace",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Computer Science / Software Development",
    ],
    image: "https://source.unsplash.com/800x600/?workspace",
    officialLink: "https://www.notion.com/product/ai",
    docLink: "https://www.notion.so/help/guides/using-notion-ai",
    tutorialLink: "https://www.notion.so/blog/notion-ai",
    githubLink: "N/A",
  },
  {
    id: 19,
    name: "Final Round AI",
    category: [
      "Artificial Intelligence",
      "Educational Technology (EdTech)",
      "Information Technology",
    ],
    whatItDoes:
      "AI interviewing assistant for creating resume screening and practice rounds.",
    howToUse: [
      "Upload resume",
      "Practice interview Q&A",
      "Get feedback",
      "Improve skills",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Educational Technology (EdTech)",
    ],
    image: "https://source.unsplash.com/800x600/?interview",
    officialLink: "N/A",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 20,
    name: "Grok",
    category: [
      "Artificial Intelligence",
      "Information Technology",
      "Web Development",
    ],
    whatItDoes:
      "AI chatbot and reasoning tool designed for real‑time research, answers, and insights.",
    howToUse: [
      "Open Grok chatbot",
      "Ask any question",
      "Get AI answer",
      "Refine context",
    ],
    techRelevance: ["Artificial Intelligence", "Information Technology"],
    image: "https://source.unsplash.com/800x600/?chatbot",
    officialLink: "https://groq.com",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 21,
    name: "TalkPal AI",
    category: [
      "Artificial Intelligence",
      "Educational Technology (EdTech)",
      "Information Technology",
    ],
    whatItDoes: "AI language learning and conversational practice assistant.",
    howToUse: [
      "Open TalkPal",
      "Choose language",
      "Practice conversation",
      "Review feedback",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Educational Technology (EdTech)",
    ],
    image: "https://source.unsplash.com/800x600/?language-learning",
    officialLink: "N/A",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 22,
    name: "Taskade",
    category: [
      "Information Technology",
      "Artificial Intelligence",
      "Web Development",
    ],
    whatItDoes:
      "AI task manager and team collaboration platform with smart workflows.",
    howToUse: [
      "Create workspace",
      "Add tasks",
      "Use AI templates",
      "Track progress",
    ],
    techRelevance: ["Artificial Intelligence", "Web Development"],
    image: "https://source.unsplash.com/800x600/?tasks",
    officialLink: "https://www.taskade.com",
    docLink: "N/A",
    tutorialLink: "https://www.taskade.com/learn",
    githubLink: "N/A",
  },
  {
    id: 23,
    name: "mailmestro",
    category: [
      "Information Technology",
      "Artificial Intelligence",
      "Productivity Tools",
    ],
    whatItDoes:
      "AI mail assistant for automated composing and email management.",
    howToUse: [
      "Connect mailbox",
      "Enable AI suggestions",
      "Compose emails",
      "Organize inbox",
    ],
    techRelevance: ["Artificial Intelligence", "Information Technology"],
    image: "https://source.unsplash.com/800x600/?email",
    officialLink: "N/A",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 24,
    name: "Browse AI",
    category: [
      "Artificial Intelligence",
      "Information Technology",
      "Web Development",
    ],
    whatItDoes:
      "AI web automation and data extraction tool for scraping and monitoring websites.",
    howToUse: [
      "Define target pages",
      "Train AI bot",
      "Extract & monitor data",
      "Export results",
    ],
    techRelevance: ["Artificial Intelligence", "Information Technology"],
    image: "https://source.unsplash.com/800x600/?automation",
    officialLink: "https://www.browse.ai",
    docLink: "https://www.browse.ai/docs",
    tutorialLink: "https://www.browse.ai/tutorials",
    githubLink: "N/A",
  },
  {
    id: 25,
    name: "teamsmestro",
    category: [
      "Information Technology",
      "Artificial Intelligence",
      "Web Development",
    ],
    whatItDoes:
      "AI assistant for smart team scheduling, tasks and collaboration.",
    howToUse: [
      "Create team",
      "Assign tasks",
      "Use AI suggestions",
      "Track workflows",
    ],
    techRelevance: ["Artificial Intelligence", "Web Development"],
    image: "https://source.unsplash.com/800x600/?teamwork",
    officialLink: "N/A",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 26,
    name: "Replit",
    category: [
      "Computer Science / Software Development",
      "Artificial Intelligence",
      "Web Development",
    ],
    whatItDoes:
      "Cloud coding platform with AI code generation, editing, and deployment.",
    howToUse: [
      "Create new project",
      "Use AI coding assistant",
      "Run code online",
      "Deploy result",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Web Development",
      "Software Development",
    ],
    image: "https://source.unsplash.com/800x600/?coding",
    officialLink: "https://replit.com",
    docLink: "https://replit.com/docs",
    tutorialLink: "https://replit.com/learn",
    githubLink: "https://github.com/replit",
  },
  {
    id: 27,
    name: "Friday AI",
    category: [
      "Artificial Intelligence",
      "Information Technology",
      "Productivity Tools",
    ],
    whatItDoes:
      "AI workspace organizer for tasks, notes and scheduling boosts productivity.",
    howToUse: [
      "Sign in",
      "Sync calendar",
      "Create tasks",
      "Use AI suggestions",
    ],
    techRelevance: ["Artificial Intelligence", "Information Technology"],
    image: "https://source.unsplash.com/800x600/?calendar",
    officialLink: "https://friday.ai",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 28,
    name: "Snipd",
    category: [
      "Educational Technology (EdTech)",
      "Artificial Intelligence",
      "Media & Entertainment Technology",
    ],
    whatItDoes:
      "AI podcast summarizer and clipping tool for highlights and notes.",
    howToUse: [
      "Import podcast",
      "Generate highlights",
      "Save notes",
      "Share summary",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Educational Technology (EdTech)",
    ],
    image: "https://source.unsplash.com/800x600/?podcast",
    officialLink: "https://snipd.io",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 29,
    name: "Grain",
    category: [
      "Information Technology",
      "Artificial Intelligence",
      "Media & Entertainment Technology",
    ],
    whatItDoes:
      "AI meeting recorder and clip tool for capturing highlights from calls.",
    howToUse: [
      "Start recording",
      "Highlight key moments",
      "Generate clips",
      "Share snippets",
    ],
    techRelevance: ["Artificial Intelligence", "Information Technology"],
    image: "https://source.unsplash.com/800x600/?meeting-recording",
    officialLink: "https://grain.co",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 30,
    name: "Fluig AI",
    category: [
      "Artificial Intelligence",
      "Information Technology",
      "Cloud Computing",
    ],
    whatItDoes:
      "AI tool for automatic workflow generation and automation tasks.",
    howToUse: [
      "Define workflow",
      "Set triggers",
      "Activate AI",
      "Monitor execution",
    ],
    techRelevance: ["Artificial Intelligence", "Information Technology"],
    image: "https://source.unsplash.com/800x600/?automation",
    officialLink: "N/A",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 31,
    name: "ClickUp",
    category: [
      "Information Technology",
      "Artificial Intelligence",
      "Productivity Tools",
    ],
    whatItDoes: "AI task, goal and project management platform for teams.",
    howToUse: [
      "Create workspace",
      "Add tasks",
      "Enable AI features",
      "Track goals",
    ],
    techRelevance: ["Artificial Intelligence", "Information Technology"],
    image: "https://source.unsplash.com/800x600/?project-management",
    officialLink: "https://clickup.com",
    docLink: "https://docs.clickup.com",
    tutorialLink: "https://clickup.com/academy",
    githubLink: "N/A",
  },
  {
    id: 32,
    name: "Memorae.ai",
    category: [
      "Artificial Intelligence",
      "Information Technology",
      "Educational Technology (EdTech)",
    ],
    whatItDoes:
      "AI knowledge assistant to organize notes and reminders intelligently.",
    howToUse: [
      "Add notes",
      "Enable AI suggestions",
      "Search knowledge",
      "Sync devices",
    ],
    techRelevance: ["Artificial Intelligence", "Information Technology"],
    image: "https://source.unsplash.com/800x600/?notes",
    officialLink: "N/A",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 33,
    name: "Grid AI",
    category: [
      "Artificial Intelligence",
      "Computer Science / Software Development",
      "Data Science",
    ],
    whatItDoes:
      "AI model platform for training, experimenting, and deploying AI models.",
    howToUse: ["Create project", "Upload data", "Train model", "Deploy AI"],
    techRelevance: [
      "Artificial Intelligence",
      "Computer Science / Software Development",
    ],
    image: "https://source.unsplash.com/800x600/?ai-training",
    officialLink: "https://grid.ai",
    docLink: "https://grid.ai/docs",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 34,
    name: "Bricks",
    category: [
      "Artificial Intelligence",
      "Web Development",
      "Automation & Control Systems",
    ],
    whatItDoes: "AI workflow building and no‑code automation platform.",
    howToUse: ["Choose automation", "Add steps", "Enable AI", "Run workflow"],
    techRelevance: ["Artificial Intelligence", "Web Development"],
    image: "https://source.unsplash.com/800x600/?workflow",
    officialLink: "N/A",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 35,
    name: "Lovable.ai",
    category: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
      "Design & Creativity",
    ],
    whatItDoes:
      "AI design and creative tools to generate visuals and concepts.",
    howToUse: [
      "Enter prompt",
      "Select style",
      "Generate art",
      "Export creative",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
    ],
    image: "https://source.unsplash.com/800x600/?creative-ai",
    officialLink: "https://lovable.ai",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 36,
    name: "Fireflies",
    category: [
      "Information Technology",
      "Artificial Intelligence",
      "Productivity Tools",
    ],
    whatItDoes:
      "AI meeting note taker that records, transcribes and summarizes calls.",
    howToUse: [
      "Start meeting",
      "Enable Fireflies AI",
      "Save notes",
      "Export summary",
    ],
    techRelevance: ["Artificial Intelligence", "Information Technology"],
    image: "https://source.unsplash.com/800x600/?transcription",
    officialLink: "https://fireflies.ai",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 37,
    name: "Cursor",
    category: [
      "Artificial Intelligence",
      "Computer Science / Software Development",
      "Web Development",
    ],
    whatItDoes:
      "AI coding platform with agent‑based workflows and automated coding tasks.",
    howToUse: [
      "Open Cursor",
      "Enter code prompt",
      "Generate or fix code",
      "Deploy output",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Computer Science / Software Development",
    ],
    image: "https://source.unsplash.com/800x600/?code-editor",
    officialLink: "https://cursor.so",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 38,
    name: "AutoDraw",
    category: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
      "Design & Creativity",
    ],
    whatItDoes:
      "AI sketching tool that turns rough doodles into polished drawings.",
    howToUse: [
      "Start drawing",
      "Let AI recognize shapes",
      "Adjust output",
      "Export art",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
    ],
    image: "https://source.unsplash.com/800x600/?drawing",
    officialLink: "https://www.autodraw.com",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 39,
    name: "GitHub",
    category: [
      "Information Technology",
      "Web Development",
      "Computer Science / Software Development",
      "Cloud Computing",
    ],
    whatItDoes:
      "Platform for version control, collaboration, and hosting code repositories.",
    howToUse: [
      "Create account",
      "Initialize repo",
      "Push code",
      "Collaborate with team",
    ],
    techRelevance: [
      "Web Development",
      "Computer Science / Software Development",
      "Cloud Computing",
    ],
    image: "https://source.unsplash.com/800x600/?github",
    officialLink: "https://github.com",
    docLink: "https://docs.github.com",
    tutorialLink: "https://guides.github.com",
    githubLink: "https://github.com",
  },
  {
    id: 40,
    name: "Make.com",
    category: [
      "Information Technology",
      "Automation & Control Systems",
      "Web Development",
      "Artificial Intelligence",
    ],
    whatItDoes:
      "AI-powered workflow automation platform to connect apps and automate tasks.",
    howToUse: ["Sign up", "Create scenario", "Connect apps", "Run automation"],
    techRelevance: [
      "Automation & Control Systems",
      "Web Development",
      "Artificial Intelligence",
    ],
    image: "https://source.unsplash.com/800x600/?automation",
    officialLink: "https://www.make.com",
    docLink: "https://www.make.com/en/help",
    tutorialLink: "https://www.make.com/en/academy",
    githubLink: "N/A",
  },
  {
    id: 41,
    name: "n8n",
    category: [
      "Information Technology",
      "Automation & Control Systems",
      "Web Development",
      "Cloud Computing",
    ],
    whatItDoes:
      "Open-source workflow automation tool with integrations for multiple apps.",
    howToUse: ["Install n8n", "Create workflow", "Add nodes", "Run automation"],
    techRelevance: [
      "Automation & Control Systems",
      "Web Development",
      "Cloud Computing",
    ],
    image: "https://source.unsplash.com/800x600/?workflow",
    officialLink: "https://n8n.io",
    docLink: "https://docs.n8n.io",
    tutorialLink: "https://docs.n8n.io/tutorials/",
    githubLink: "https://github.com/n8n-io/n8n",
  },
  {
    id: 42,
    name: "Zapier",
    category: [
      "Information Technology",
      "Automation & Control Systems",
      "Web Development",
      "Cloud Computing",
    ],
    whatItDoes:
      "Platform to automate workflows by connecting multiple apps without code.",
    howToUse: [
      "Sign up",
      "Choose app triggers",
      "Add actions",
      "Run automation",
    ],
    techRelevance: [
      "Automation & Control Systems",
      "Web Development",
      "Cloud Computing",
    ],
    image: "https://source.unsplash.com/800x600/?zapier",
    officialLink: "https://zapier.com",
    docLink: "https://zapier.com/help",
    tutorialLink: "https://zapier.com/learn",
    githubLink: "N/A",
  },
  {
    id: 43,
    name: "Suvit.io",
    category: [
      "Artificial Intelligence",
      "Information Technology",
      "Web Development",
    ],
    whatItDoes: "AI-driven business workflow and productivity assistant.",
    howToUse: [
      "Login",
      "Define workflow",
      "Use AI suggestions",
      "Export results",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Automation & Control Systems",
      "Web Development",
    ],
    image: "https://source.unsplash.com/800x600/?ai-productivity",
    officialLink: "https://suvit.io",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 44,
    name: "Remio",
    category: [
      "Information Technology",
      "Artificial Intelligence",
      "Media & Entertainment Technology",
    ],
    whatItDoes:
      "AI-powered video creation and editing platform for marketing and social media.",
    howToUse: ["Sign in", "Upload content", "Use AI tools", "Export video"],
    techRelevance: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
      "Web Development",
    ],
    image: "https://source.unsplash.com/800x600/?video-editing",
    officialLink: "https://www.remio.io",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 45,
    name: "Cluely",
    category: [
      "Artificial Intelligence",
      "Information Technology",
      "Educational Technology (EdTech)",
    ],
    whatItDoes:
      "AI assistant for learning and research, helping users organize and summarize content.",
    howToUse: [
      "Upload content",
      "Ask AI questions",
      "Get summarized notes",
      "Export summaries",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Educational Technology (EdTech)",
      "Information Technology",
    ],
    image: "https://source.unsplash.com/800x600/?learning",
    officialLink: "https://cluely.ai",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 46,
    name: "Google AI Studio",
    category: [
      "Artificial Intelligence",
      "Information Technology",
      "Machine Learning",
      "Data Science",
    ],
    whatItDoes:
      "Google's AI platform for building, testing, and deploying machine learning models.",
    howToUse: ["Login", "Create project", "Train model", "Deploy solution"],
    techRelevance: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Cloud Computing",
    ],
    image: "https://source.unsplash.com/800x600/?ai-lab",
    officialLink: "https://ai.google/studio",
    docLink: "https://ai.google/learn",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 47,
    name: "Captions",
    category: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
      "Web Development",
    ],
    whatItDoes:
      "AI tool to automatically generate captions for videos and social media content.",
    howToUse: [
      "Upload video",
      "Generate captions",
      "Edit if needed",
      "Download/export",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
    ],
    image: "https://source.unsplash.com/800x600/?video-caption",
    officialLink: "https://www.captions.ai",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 48,
    name: "Zing Data",
    category: [
      "Data Science",
      "Artificial Intelligence",
      "Information Technology",
    ],
    whatItDoes:
      "AI-driven data analytics and visualization platform for business intelligence.",
    howToUse: [
      "Upload datasets",
      "Analyze with AI",
      "Generate visualizations",
      "Export reports",
    ],
    techRelevance: [
      "Data Science",
      "Artificial Intelligence",
      "Web Development",
    ],
    image: "https://source.unsplash.com/800x600/?data-analysis",
    officialLink: "https://zingdata.ai",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 49,
    name: "Canvamagic",
    category: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
      "Web Development",
    ],
    whatItDoes:
      "AI design assistant integrated with Canva to create visual content automatically.",
    howToUse: [
      "Login to Canva",
      "Enable Canvamagic AI",
      "Generate design",
      "Customize and export",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
      "Web Development",
    ],
    image: "https://source.unsplash.com/800x600/?graphic-design",
    officialLink: "https://canvamagic.ai",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 50,
    name: "Pictory AI",
    category: ["Artificial Intelligence", "Media & Entertainment Technology"],
    whatItDoes:
      "AI platform for transforming scripts and articles into engaging videos.",
    howToUse: [
      "Input text/script",
      "Select video style",
      "Generate video",
      "Edit & export",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
    ],
    image: "https://source.unsplash.com/800x600/?video-creation",
    officialLink: "https://pictory.ai",
    docLink: "https://pictory.ai/docs",
    tutorialLink: "https://pictory.ai/tutorials",
    githubLink: "N/A",
  },
  {
    id: 51,
    name: "Eleven Labs",
    category: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
      "Educational Technology (EdTech)",
    ],
    whatItDoes:
      "AI text-to-speech platform producing realistic voices for content creation.",
    howToUse: [
      "Input text",
      "Select voice",
      "Generate audio",
      "Download/export",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
    ],
    image: "https://source.unsplash.com/800x600/?text-to-speech",
    officialLink: "https://elevenlabs.io",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 52,
    name: "Heygen",
    category: ["Artificial Intelligence", "Media & Entertainment Technology"],
    whatItDoes:
      "AI video generation platform to create lifelike avatars for videos and presentations.",
    howToUse: [
      "Create avatar",
      "Add script or voice",
      "Generate video",
      "Download/export",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
      "Web Development",
    ],
    image: "https://source.unsplash.com/800x600/?ai-avatar",
    officialLink: "https://heygen.com",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 53,
    name: "Consistent Character AI",
    category: ["Artificial Intelligence", "Media & Entertainment Technology"],
    whatItDoes:
      "AI platform for creating consistent digital characters for storytelling and gaming.",
    howToUse: [
      "Create character",
      "Train personality",
      "Generate interactions",
      "Export outputs",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
      "Educational Technology (EdTech)",
    ],
    image: "https://source.unsplash.com/800x600/?character-design",
    officialLink: "https://www.consistentcharacter.ai",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 54,
    name: "Descript",
    category: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
      "Educational Technology (EdTech)",
    ],
    whatItDoes:
      "AI-powered video and audio editing platform with transcription and collaboration features.",
    howToUse: [
      "Upload media",
      "Edit with AI tools",
      "Add subtitles",
      "Export content",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
    ],
    image: "https://source.unsplash.com/800x600/?video-editing",
    officialLink: "https://www.descript.com",
    docLink: "https://www.descript.com/help",
    tutorialLink: "https://www.descript.com/learn",
    githubLink: "N/A",
  },
  {
    id: 55,
    name: "Headspace AI",
    category: [
      "Artificial Intelligence",
      "Medical & Health Technology",
      "Educational Technology (EdTech)",
    ],
    whatItDoes:
      "AI-assisted mindfulness and meditation platform for mental well-being.",
    howToUse: [
      "Sign up",
      "Choose meditation plan",
      "Follow AI guidance",
      "Track progress",
    ],
    techRelevance: ["Artificial Intelligence", "Medical & Health Technology"],
    image: "https://source.unsplash.com/800x600/?meditation",
    officialLink: "https://www.headspace.com",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 56,
    name: "Rewind",
    category: [
      "Artificial Intelligence",
      "Information Technology",
      "Productivity Tools",
    ],
    whatItDoes:
      "AI tool for automatically recording, indexing, and searching your computer activities.",
    howToUse: [
      "Install Rewind",
      "Enable recording",
      "Search activities",
      "Retrieve information",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Information Technology",
      "Web Development",
    ],
    image: "https://source.unsplash.com/800x600/?productivity",
    officialLink: "https://www.rewind.ai",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 57,
    name: "Feedough",
    category: [
      "Artificial Intelligence",
      "Information Technology",
      "Data Science",
    ],
    whatItDoes: "AI platform for business insights and startup research.",
    howToUse: [
      "Open Feedough",
      "Search company/startup",
      "Get insights",
      "Export report",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Data Science",
      "Information Technology",
    ],
    image: "https://source.unsplash.com/800x600/?business",
    officialLink: "https://www.feedough.com",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 58,
    name: "Miro",
    category: [
      "Information Technology",
      "Educational Technology (EdTech)",
      "Web Development",
    ],
    whatItDoes: "Online collaborative whiteboard platform with AI features.",
    howToUse: [
      "Create board",
      "Add AI widgets",
      "Collaborate with team",
      "Export board",
    ],
    techRelevance: [
      "Information Technology",
      "Web Development",
      "Educational Technology (EdTech)",
    ],
    image: "https://source.unsplash.com/800x600/?whiteboard",
    officialLink: "https://miro.com",
    docLink: "https://help.miro.com",
    tutorialLink: "https://miro.com/learn",
    githubLink: "N/A",
  },
  {
    id: 59,
    name: "Grammarly",
    category: [
      "Artificial Intelligence",
      "Information Technology",
      "Educational Technology (EdTech)",
    ],
    whatItDoes:
      "AI-powered writing assistant for grammar, style, and tone improvements.",
    howToUse: [
      "Install Grammarly",
      "Write text",
      "Get suggestions",
      "Apply corrections",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Educational Technology (EdTech)",
    ],
    image: "https://source.unsplash.com/800x600/?writing",
    officialLink: "https://www.grammarly.com",
    docLink: "https://support.grammarly.com",
    tutorialLink: "https://www.grammarly.com/blog",
    githubLink: "N/A",
  },
  {
    id: 60,
    name: "Brain FM",
    category: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
      "Medical & Health Technology",
    ],
    whatItDoes: "AI-generated music for focus, relaxation, and sleep.",
    howToUse: [
      "Open Brain FM",
      "Select purpose",
      "Play music",
      "Adjust settings",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
      "Medical & Health Technology",
    ],
    image: "https://source.unsplash.com/800x600/?music",
    officialLink: "https://www.brain.fm",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 61,
    name: "Airtable AI",
    category: [
      "Information Technology",
      "Artificial Intelligence",
      "Cloud Computing",
    ],
    whatItDoes:
      "AI-powered database assistant for automating workflows and managing data.",
    howToUse: [
      "Open Airtable",
      "Add AI assistant",
      "Automate workflows",
      "Analyze data",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Information Technology",
      "Cloud Computing",
    ],
    image: "https://source.unsplash.com/800x600/?database",
    officialLink: "https://airtable.com",
    docLink: "https://support.airtable.com",
    tutorialLink: "https://airtable.com/learn",
    githubLink: "N/A",
  },
  {
    id: 62,
    name: "Llama",
    category: [
      "Artificial Intelligence",
      "Machine Learning",
      "Information Technology",
    ],
    whatItDoes:
      "Open-source large language model for research and AI applications.",
    howToUse: [
      "Download model",
      "Integrate into project",
      "Run prompts",
      "Analyze output",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Science / Software Development",
    ],
    image: "https://source.unsplash.com/800x600/?ai-model",
    officialLink: "https://ai.facebook.com/llama",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "https://github.com/facebookresearch/llama",
  },
  {
    id: 63,
    name: "YesChat AI",
    category: [
      "Artificial Intelligence",
      "Information Technology",
      "Educational Technology (EdTech)",
    ],
    whatItDoes: "AI-powered chatbot for conversational learning and support.",
    howToUse: [
      "Open YesChat",
      "Start conversation",
      "Ask questions",
      "Get AI responses",
    ],
    techRelevance: ["Artificial Intelligence", "Information Technology"],
    image: "https://source.unsplash.com/800x600/?chatbot",
    officialLink: "N/A",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 64,
    name: "Synthesia AI",
    category: [
      "Media & Entertainment Technology",
      "Educational Technology (EdTech)",
      "Artificial Intelligence",
    ],
    whatItDoes:
      "AI video generation platform to create professional videos from text.",
    howToUse: [
      "Enter script",
      "Choose avatar",
      "Generate video",
      "Export content",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
      "Educational Technology (EdTech)",
    ],
    image: "https://source.unsplash.com/800x600/?ai-video",
    officialLink: "https://www.synthesia.io",
    docLink: "N/A",
    tutorialLink: "https://www.synthesia.io/tutorials",
    githubLink: "N/A",
  },
  {
    id: 65,
    name: "Branche AI",
    category: [
      "Artificial Intelligence",
      "Financial Technology (FinTech)",
      "Web Development",
    ],
    whatItDoes: "AI tool for analyzing financial data and investment insights.",
    howToUse: [
      "Connect data source",
      "Run analysis",
      "Generate insights",
      "Export report",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Financial Technology (FinTech)",
    ],
    image: "https://source.unsplash.com/800x600/?finance",
    officialLink: "N/A",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 66,
    name: "Visme",
    category: [
      "Media & Entertainment Technology",
      "Educational Technology (EdTech)",
      "Web Development",
    ],
    whatItDoes:
      "AI-powered platform for creating presentations, infographics, and visual content.",
    howToUse: [
      "Choose template",
      "Add content",
      "Apply AI design",
      "Export visuals",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
      "Web Development",
    ],
    image: "https://source.unsplash.com/800x600/?infographic",
    officialLink: "https://www.visme.co",
    docLink: "https://www.visme.co/help",
    tutorialLink: "https://www.visme.co/learn",
    githubLink: "N/A",
  },
  {
    id: 67,
    name: "Gemma",
    category: [
      "Educational Technology (EdTech)",
      "Media & Entertainment Technology",
      "Artificial Intelligence",
    ],
    whatItDoes:
      "AI tool for content creation, learning, and interactive tutorials.",
    howToUse: [
      "Enter content",
      "Select style",
      "Generate output",
      "Use for learning",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Educational Technology (EdTech)",
    ],
    image: "https://source.unsplash.com/800x600/?learning",
    officialLink: "N/A",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 68,
    name: "Nano Banana",
    category: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
      "Web Development",
    ],
    whatItDoes:
      "AI design tool for creating graphics, animations, and digital assets.",
    howToUse: [
      "Enter prompt",
      "Select template",
      "Generate design",
      "Export output",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
    ],
    image: "https://source.unsplash.com/800x600/?design",
    officialLink: "N/A",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 69,
    name: "Ideogram",
    category: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
      "Computer Science / Software Development",
    ],
    whatItDoes:
      "AI platform to generate visual diagrams and conceptual illustrations from text.",
    howToUse: ["Input text", "Select style", "Generate diagram", "Download"],
    techRelevance: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
      "Computer Science / Software Development",
    ],
    image: "https://source.unsplash.com/800x600/?diagram",
    officialLink: "https://www.ideogram.ai",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 70,
    name: "Seedream",
    category: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
      "Web Development",
    ],
    whatItDoes:
      "AI tool for generating creative visuals and concept art from prompts.",
    howToUse: [
      "Enter prompt",
      "Select style",
      "Generate image",
      "Export creative assets",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
    ],
    image: "https://source.unsplash.com/800x600/?creative",
    officialLink: "https://www.seedream.ai",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 71,
    name: "Whimsical Diagrams",
    category: [
      "Educational Technology (EdTech)",
      "Media & Entertainment Technology",
      "Web Development",
    ],
    whatItDoes:
      "AI tool to create flowcharts, mind maps, and diagrams collaboratively.",
    howToUse: [
      "Create diagram",
      "Add elements",
      "Apply AI suggestions",
      "Export output",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Educational Technology (EdTech)",
      "Media & Entertainment Technology",
    ],
    image: "https://source.unsplash.com/800x600/?diagram",
    officialLink: "https://whimsical.com",
    docLink: "https://whimsical.com/help",
    tutorialLink: "https://whimsical.com/learn",
    githubLink: "N/A",
  },
  {
    id: 72,
    name: "Quizlet",
    category: [
      "Educational Technology (EdTech)",
      "Artificial Intelligence",
      "Information Technology",
    ],
    whatItDoes:
      "AI-powered learning platform for flashcards, quizzes, and study tools.",
    howToUse: [
      "Create set",
      "Add content",
      "Use AI suggestions",
      "Study and test",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Educational Technology (EdTech)",
    ],
    image: "https://source.unsplash.com/800x600/?study",
    officialLink: "https://quizlet.com",
    docLink: "https://quizlet.com/help",
    tutorialLink: "https://quizlet.com/learn",
    githubLink: "N/A",
  },
  {
    id: 73,
    name: "Koalendar",
    category: [
      "Information Technology",
      "Artificial Intelligence",
      "Web Development",
    ],
    whatItDoes: "AI scheduling and calendar management tool for professionals.",
    howToUse: [
      "Connect calendar",
      "Set preferences",
      "AI schedule suggestions",
      "Sync events",
    ],
    techRelevance: ["Artificial Intelligence", "Information Technology"],
    image: "https://source.unsplash.com/800x600/?calendar",
    officialLink: "https://koalendar.com",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 74,
    name: "Motion",
    category: ["Artificial Intelligence", "Web Development", "Productivity"],
    whatItDoes:
      "AI-powered task and time management tool to optimize productivity.",
    howToUse: [
      "Create workspace",
      "Add tasks",
      "Enable AI features",
      "Track progress",
    ],
    techRelevance: ["Artificial Intelligence", "Information Technology"],
    image: "https://source.unsplash.com/800x600/?productivity",
    officialLink: "https://www.usemotion.com",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 75,
    name: "Trevor AI",
    category: [
      "Artificial Intelligence",
      "Productivity",
      "Mobile App Development",
    ],
    whatItDoes:
      "AI calendar and productivity assistant for personal and team management.",
    howToUse: [
      "Connect calendar",
      "Create tasks",
      "Use AI assistant",
      "Track schedule",
    ],
    techRelevance: ["Artificial Intelligence", "Mobile App Development"],
    image: "https://source.unsplash.com/800x600/?calendar",
    officialLink: "https://trevor.ai",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 76,
    name: "Hook Generator GPT",
    category: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
      "Web Development",
    ],
    whatItDoes: "AI tool to generate marketing hooks, slogans, and ad content.",
    howToUse: [
      "Enter product details",
      "Select tone/style",
      "Generate hooks",
      "Export content",
    ],
    techRelevance: ["Artificial Intelligence", "Marketing", "Web Development"],
    image: "https://source.unsplash.com/800x600/?marketing",
    officialLink: "N/A",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 77,
    name: "Decktopus",
    category: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
      "Web Development",
    ],
    whatItDoes: "AI-powered presentation creator and automation platform.",
    howToUse: [
      "Choose template",
      "Add content",
      "Use AI design",
      "Export presentation",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
      "Web Development",
    ],
    image: "https://source.unsplash.com/800x600/?presentation",
    officialLink: "https://www.decktopus.com",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 78,
    name: "Syllaby",
    category: [
      "Educational Technology (EdTech)",
      "Artificial Intelligence",
      "Information Technology",
      "Web Development",
    ],
    whatItDoes:
      "AI tool for creating interactive learning content and syllabi quickly.",
    howToUse: [
      "Select course topic",
      "Generate syllabus",
      "Customize content",
      "Export and share",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Educational Technology (EdTech)",
      "Web Development",
    ],
    image: "https://source.unsplash.com/800x600/?education",
    officialLink: "https://syllaby.com",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 79,
    name: "Pinned Comment GPT",
    category: [
      "Information Technology",
      "Artificial Intelligence",
      "Web Development",
    ],
    whatItDoes:
      "AI tool to automatically generate pinned comments for videos, blogs, or posts.",
    howToUse: [
      "Connect account",
      "Generate comment",
      "Customize output",
      "Pin it on platform",
    ],
    techRelevance: ["Artificial Intelligence", "Information Technology"],
    image: "https://source.unsplash.com/800x600/?comments",
    officialLink: "https://pinnedcommentgpt.com",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 80,
    name: "Vadoo TV",
    category: [
      "Media & Entertainment Technology",
      "Artificial Intelligence",
      "Web Development",
    ],
    whatItDoes: "AI-powered video hosting and analytics platform.",
    howToUse: [
      "Upload video",
      "Analyze audience",
      "Generate insights",
      "Share or embed",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
    ],
    image: "https://source.unsplash.com/800x600/?video",
    officialLink: "https://vadoo.tv",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 81,
    name: "Veo 3",
    category: [
      "Media & Entertainment Technology",
      "Artificial Intelligence",
      "Web Development",
    ],
    whatItDoes: "AI tool for automated video editing and event capture.",
    howToUse: [
      "Upload footage",
      "Enable AI edits",
      "Review result",
      "Export final video",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
    ],
    image: "https://source.unsplash.com/800x600/?video-editing",
    officialLink: "https://veo3.com",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 82,
    name: "Invideo AI",
    category: [
      "Media & Entertainment Technology",
      "Artificial Intelligence",
      "Web Development",
    ],
    whatItDoes:
      "AI-powered video creation and editing platform for marketing content.",
    howToUse: [
      "Select template",
      "Add content",
      "AI generates video",
      "Export project",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
    ],
    image: "https://source.unsplash.com/800x600/?video-creation",
    officialLink: "https://invideo.io",
    docLink: "https://invideo.io/docs",
    tutorialLink: "https://invideo.io/tutorials",
    githubLink: "N/A",
  },
  {
    id: 83,
    name: "King AI",
    category: [
      "Artificial Intelligence",
      "Information Technology",
      "Web Development",
    ],
    whatItDoes:
      "AI assistant for automating workflows and generating insights.",
    howToUse: [
      "Connect tools",
      "Define workflow",
      "Generate AI output",
      "Review results",
    ],
    techRelevance: ["Artificial Intelligence", "Information Technology"],
    image: "https://source.unsplash.com/800x600/?ai",
    officialLink: "N/A",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 84,
    name: "ICAI GPT",
    category: [
      "Educational Technology (EdTech)",
      "Artificial Intelligence",
      "Information Technology",
    ],
    whatItDoes:
      "AI assistant for accounting and finance professionals to answer queries and generate content.",
    howToUse: [
      "Ask question",
      "Upload files",
      "Generate answer",
      "Save or export output",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Educational Technology (EdTech)",
    ],
    image: "https://source.unsplash.com/800x600/?finance",
    officialLink: "N/A",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 85,
    name: "Design",
    category: [
      "Media & Entertainment Technology",
      "Artificial Intelligence",
      "Web Development",
    ],
    whatItDoes:
      "AI-powered tool for generating designs, templates, and visuals.",
    howToUse: [
      "Enter design prompt",
      "Select style",
      "Generate output",
      "Download design",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
    ],
    image: "https://source.unsplash.com/800x600/?design",
    officialLink: "N/A",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 86,
    name: "Framer",
    category: [
      "Web Development",
      "Artificial Intelligence",
      "Media & Entertainment Technology",
    ],
    whatItDoes: "AI-powered web and UI prototyping tool.",
    howToUse: [
      "Create prototype",
      "Add AI interactions",
      "Preview design",
      "Export project",
    ],
    techRelevance: ["Artificial Intelligence", "Web Development"],
    image: "https://source.unsplash.com/800x600/?ui-ux",
    officialLink: "https://www.framer.com",
    docLink: "https://www.framer.com/docs",
    tutorialLink: "https://www.framer.com/learn",
    githubLink: "N/A",
  },
  {
    id: 87,
    name: "Lindy",
    category: [
      "Educational Technology (EdTech)",
      "Artificial Intelligence",
      "Information Technology",
    ],
    whatItDoes:
      "AI tool to organize learning resources and track study progress.",
    howToUse: [
      "Add courses",
      "Generate study plan",
      "Track progress",
      "Review insights",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Educational Technology (EdTech)",
    ],
    image: "https://source.unsplash.com/800x600/?learning",
    officialLink: "N/A",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 88,
    name: "TopazLabs",
    category: [
      "Media & Entertainment Technology",
      "Artificial Intelligence",
      "Web Development",
    ],
    whatItDoes: "AI image and video enhancement platform.",
    howToUse: [
      "Upload media",
      "Select enhancement",
      "Apply AI",
      "Download output",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
    ],
    image: "https://source.unsplash.com/800x600/?image-editing",
    officialLink: "https://topazlabs.com",
    docLink: "https://topazlabs.com/docs",
    tutorialLink: "https://topazlabs.com/tutorials",
    githubLink: "N/A",
  },
  {
    id: 89,
    name: "Deckpilot",
    category: [
      "Media & Entertainment Technology",
      "Artificial Intelligence",
      "Web Development",
    ],
    whatItDoes: "AI platform for generating presentations and pitch decks.",
    howToUse: [
      "Choose template",
      "Enter content",
      "Generate AI slides",
      "Export deck",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Media & Entertainment Technology",
    ],
    image: "https://source.unsplash.com/800x600/?presentation",
    officialLink: "https://deckpilot.ai",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 90,
    name: "Flourish",
    category: ["Data Science", "Artificial Intelligence", "Web Development"],
    whatItDoes: "AI-powered data visualization and analytics tool.",
    howToUse: [
      "Upload dataset",
      "Generate charts",
      "Customize visuals",
      "Export results",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Data Science",
      "Web Development",
    ],
    image: "https://source.unsplash.com/800x600/?data",
    officialLink: "https://flourish.studio",
    docLink: "https://flourish.studio/docs",
    tutorialLink: "https://flourish.studio/tutorials",
    githubLink: "N/A",
  },
  {
    id: 91,
    name: "Julius",
    category: [
      "Artificial Intelligence",
      "Educational Technology (EdTech)",
      "Information Technology",
    ],
    whatItDoes:
      "AI assistant for voice interactions, transcription, and productivity tasks.",
    howToUse: [
      "Record audio",
      "Generate transcription",
      "Ask queries",
      "Export results",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Educational Technology (EdTech)",
    ],
    image: "https://source.unsplash.com/800x600/?voice",
    officialLink: "N/A",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 92,
    name: "Darktrace",
    category: [
      "Cybersecurity",
      "Artificial Intelligence",
      "Information Technology",
    ],
    whatItDoes: "AI-driven threat detection and network monitoring.",
    howToUse: [
      "Deploy Darktrace agent",
      "Monitor network traffic",
      "AI detects threats",
      "Review insights and alerts",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Cybersecurity",
      "Computer Science / Software Development",
    ],
    image: "https://source.unsplash.com/800x600/?cybersecurity,ai",
    officialLink: "https://www.darktrace.com",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 93,
    name: "CrowdStrike Falcon",
    category: [
      "Cybersecurity",
      "Artificial Intelligence",
      "Information Technology",
    ],
    whatItDoes: "AI-powered endpoint protection and threat prevention.",
    howToUse: [
      "Install Falcon agent",
      "Monitor endpoints",
      "AI detects malware",
      "Respond to threats",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Cybersecurity",
      "Computer Science / Software Development",
    ],
    image: "https://source.unsplash.com/800x600/?cybersecurity,ai",
    officialLink: "https://www.crowdstrike.com",
    docLink: "https://www.crowdstrike.com/resources",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 94,
    name: "Cylance",
    category: [
      "Cybersecurity",
      "Artificial Intelligence",
      "Information Technology",
    ],
    whatItDoes: "AI antivirus and malware prevention tool.",
    howToUse: [
      "Install Cylance software",
      "Run AI scan",
      "Detect threats",
      "Prevent attacks",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Cybersecurity",
      "Computer Science / Software Development",
    ],
    image: "https://source.unsplash.com/800x600/?cybersecurity,ai",
    officialLink: "https://www.cylance.com",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 95,
    name: "Vectra AI",
    category: [
      "Cybersecurity",
      "Artificial Intelligence",
      "Information Technology",
    ],
    whatItDoes: "Network detection and response using AI.",
    howToUse: [
      "Deploy Vectra sensors",
      "Monitor network",
      "AI detects anomalies",
      "Respond to incidents",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Cybersecurity",
      "Computer Science / Software Development",
    ],
    image: "https://source.unsplash.com/800x600/?cybersecurity,ai",
    officialLink: "https://www.vectra.ai",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 96,
    name: "Sophos Intercept X",
    category: [
      "Cybersecurity",
      "Artificial Intelligence",
      "Information Technology",
    ],
    whatItDoes: "AI-based malware and ransomware protection.",
    howToUse: [
      "Install Sophos Intercept X",
      "Enable AI protection",
      "Monitor devices",
      "Respond to threats",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Cybersecurity",
      "Computer Science / Software Development",
    ],
    image: "https://source.unsplash.com/800x600/?cybersecurity,ai",
    officialLink: "https://www.sophos.com/en-us/products/intercept-x",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 97,
    name: "Splunk (AI Modules)",
    category: [
      "Cybersecurity",
      "Artificial Intelligence",
      "Information Technology",
    ],
    whatItDoes:
      "Security information and event management (SIEM) with AI insights.",
    howToUse: [
      "Deploy Splunk",
      "Ingest security logs",
      "Use AI modules",
      "Analyze alerts",
    ],
    techRelevance: ["Artificial Intelligence", "Cybersecurity", "Data Science"],
    image: "https://source.unsplash.com/800x600/?cybersecurity,ai",
    officialLink: "https://www.splunk.com",
    docLink: "https://docs.splunk.com",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 98,
    name: "IBM QRadar Advisor with Watson",
    category: [
      "Cybersecurity",
      "Artificial Intelligence",
      "Information Technology",
    ],
    whatItDoes: "AI-assisted threat analysis and incident response.",
    howToUse: [
      "Integrate QRadar",
      "Collect security data",
      "Use Watson AI for analysis",
      "Respond to incidents",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Cybersecurity",
      "Computer Science / Software Development",
    ],
    image: "https://source.unsplash.com/800x600/?cybersecurity,ai",
    officialLink: "https://www.ibm.com/security/qradar",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 99,
    name: "Exabeam",
    category: [
      "Cybersecurity",
      "Artificial Intelligence",
      "Information Technology",
    ],
    whatItDoes: "AI-based user behavior analytics for security monitoring.",
    howToUse: [
      "Integrate with logs",
      "Monitor user activity",
      "AI detects anomalies",
      "Investigate threats",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Cybersecurity",
      "Computer Science / Software Development",
    ],
    image: "https://source.unsplash.com/800x600/?cybersecurity,ai",
    officialLink: "https://www.exabeam.com",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 100,
    name: "FireEye Helix",
    category: [
      "Cybersecurity",
      "Artificial Intelligence",
      "Information Technology",
    ],
    whatItDoes:
      "AI-driven security operations platform for threat detection and response.",
    howToUse: [
      "Deploy FireEye Helix",
      "Collect security events",
      "AI analyzes threats",
      "Respond to incidents",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Cybersecurity",
      "Computer Science / Software Development",
    ],
    image: "https://source.unsplash.com/800x600/?cybersecurity,ai",
    officialLink: "https://www.fireeye.com",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 101,
    name: "LogRhythm",
    category: [
      "Cybersecurity",
      "Artificial Intelligence",
      "Information Technology",
    ],
    whatItDoes: "AI and machine learning for threat detection and response.",
    howToUse: [
      "Deploy LogRhythm",
      "Collect logs",
      "Use AI for analysis",
      "Respond to alerts",
    ],
    techRelevance: [
      "Artificial Intelligence",
      "Cybersecurity",
      "Computer Science / Software Development",
    ],
    image: "https://source.unsplash.com/800x600/?cybersecurity,ai",
    officialLink: "https://logrhythm.com",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 102,
    name: "ThingWorx",
    category: [
      "Internet of Things (IoT)",
      "Artificial Intelligence",
      "Cloud Computing",
    ],
    whatItDoes:
      "AI-driven IoT platform for smart device management and analytics.",
    howToUse: [
      "Connect IoT devices",
      "Analyze device data",
      "Generate insights",
      "Automate actions",
    ],
    techRelevance: ["IoT", "AI", "Data Science", "Cloud Computing"],
    image: "https://source.unsplash.com/800x600/?IoT",
    officialLink: "https://www.ptc.com/en/products/thingworx",
    docLink: "https://support.ptc.com",
    tutorialLink: "https://www.ptc.com/learning",
    githubLink: "N/A",
  },
  {
    id: 103,
    name: "C3 AI IoT",
    category: [
      "Internet of Things (IoT)",
      "Artificial Intelligence",
      "Enterprise Software",
    ],
    whatItDoes:
      "Enterprise AI platform for IoT applications and predictive maintenance.",
    howToUse: [
      "Connect IoT devices",
      "Apply AI models",
      "Predict failures",
      "Optimize operations",
    ],
    techRelevance: ["IoT", "AI", "Data Science", "Predictive Analytics"],
    image: "https://source.unsplash.com/800x600/?IoT",
    officialLink: "https://c3.ai/products/c3-iot/",
    docLink: "https://docs.c3.ai",
    tutorialLink: "https://c3.ai/resources/",
    githubLink: "N/A",
  },
  {
    id: 104,
    name: "AWS IoT Analytics",
    category: [
      "Internet of Things (IoT)",
      "Cloud Computing",
      "Artificial Intelligence",
    ],
    whatItDoes: "Analyze IoT device data using AI/ML on AWS cloud platform.",
    howToUse: [
      "Ingest IoT data",
      "Run AI/ML analytics",
      "Visualize insights",
      "Trigger actions",
    ],
    techRelevance: ["IoT", "AI", "Cloud Computing", "Data Science"],
    image: "https://source.unsplash.com/800x600/?IoT",
    officialLink: "https://aws.amazon.com/iot-analytics/",
    docLink: "https://docs.aws.amazon.com/iotanalytics/",
    tutorialLink: "https://aws.amazon.com/training/",
    githubLink: "N/A",
  },
  {
    id: 105,
    name: "IBM Watson IoT",
    category: [
      "Internet of Things (IoT)",
      "Artificial Intelligence",
      "Cloud Computing",
    ],
    whatItDoes: "Connect and manage IoT devices with AI-powered insights.",
    howToUse: [
      "Register devices",
      "Monitor data",
      "Analyze with AI",
      "Generate reports",
    ],
    techRelevance: ["IoT", "AI", "Cloud Computing", "Data Science"],
    image: "https://source.unsplash.com/800x600/?IoT",
    officialLink: "https://www.ibm.com/internet-of-things",
    docLink: "https://www.ibm.com/docs/en/watson-iot",
    tutorialLink: "https://developer.ibm.com/technologies/iot/",
    githubLink: "N/A",
  },
  {
    id: 106,
    name: "Azure IoT Central",
    category: [
      "Internet of Things (IoT)",
      "Cloud Computing",
      "Artificial Intelligence",
    ],
    whatItDoes:
      "Microsoft AI-enabled IoT platform for monitoring and analytics.",
    howToUse: [
      "Connect IoT devices",
      "Visualize data",
      "Apply AI insights",
      "Automate processes",
    ],
    techRelevance: ["IoT", "AI", "Cloud Computing", "Data Science"],
    image: "https://source.unsplash.com/800x600/?IoT",
    officialLink: "https://azure.microsoft.com/en-us/services/iot-central/",
    docLink: "https://docs.microsoft.com/azure/iot-central/",
    tutorialLink: "https://learn.microsoft.com/en-us/training/azure/",
    githubLink: "N/A",
  },
  {
    id: 107,
    name: "Siemens MindSphere",
    category: [
      "Internet of Things (IoT)",
      "Artificial Intelligence",
      "Industrial Technology",
    ],
    whatItDoes:
      "Industrial IoT platform using AI for predictive analytics and operations.",
    howToUse: [
      "Connect industrial devices",
      "Analyze operational data",
      "Predict maintenance",
      "Optimize production",
    ],
    techRelevance: [
      "IoT",
      "AI",
      "Industrial Technology",
      "Predictive Analytics",
    ],
    image: "https://source.unsplash.com/800x600/?IoT",
    officialLink: "https://www.mindsphere.io",
    docLink: "https://documentation.mindsphere.io",
    tutorialLink: "https://www.siemens.com/mindsphere-learning",
    githubLink: "N/A",
  },
  {
    id: 108,
    name: "GE Predix",
    category: [
      "Internet of Things (IoT)",
      "Artificial Intelligence",
      "Industrial Technology",
    ],
    whatItDoes: "Industrial AI platform for IoT and asset optimization.",
    howToUse: [
      "Connect assets",
      "Collect data",
      "Analyze with AI",
      "Optimize performance",
    ],
    techRelevance: [
      "IoT",
      "AI",
      "Industrial Technology",
      "Predictive Analytics",
    ],
    image: "https://source.unsplash.com/800x600/?IoT",
    officialLink: "https://www.ge.com/digital/iiot-platform",
    docLink: "https://www.ge.com/digital/documentation",
    tutorialLink: "https://www.ge.com/digital/learning",
    githubLink: "N/A",
  },
  {
    id: 109,
    name: "Google Cloud IoT",
    category: [
      "Internet of Things (IoT)",
      "Cloud Computing",
      "Artificial Intelligence",
    ],
    whatItDoes: "IoT data processing and AI-driven analytics on Google Cloud.",
    howToUse: [
      "Connect devices",
      "Ingest IoT data",
      "Analyze with AI",
      "Automate actions",
    ],
    techRelevance: ["IoT", "AI", "Cloud Computing", "Data Science"],
    image: "https://source.unsplash.com/800x600/?IoT",
    officialLink: "https://cloud.google.com/iot",
    docLink: "https://cloud.google.com/iot/docs",
    tutorialLink: "https://cloud.google.com/training",
    githubLink: "N/A",
  },
  {
    id: 110,
    name: "FogHorn",
    category: [
      "Internet of Things (IoT)",
      "Artificial Intelligence",
      "Edge Computing",
    ],
    whatItDoes: "Edge AI platform for real-time IoT analytics and processing.",
    howToUse: [
      "Deploy at edge",
      "Collect sensor data",
      "Analyze with AI",
      "Trigger real-time actions",
    ],
    techRelevance: ["IoT", "AI", "Edge Computing", "Data Science"],
    image: "https://source.unsplash.com/800x600/?IoT",
    officialLink: "https://www.foghorn.io",
    docLink: "https://docs.foghorn.io",
    tutorialLink: "https://www.foghorn.io/learning",
    githubLink: "N/A",
  },
  {
    id: 111,
    name: "PTC Kepware",
    category: [
      "Internet of Things (IoT)",
      "Artificial Intelligence",
      "Industrial Technology",
    ],
    whatItDoes:
      "IoT connectivity platform integrated with AI-based predictive tools for industrial automation.",
    howToUse: [
      "Connect industrial devices",
      "Integrate AI models",
      "Monitor operations",
      "Optimize processes",
    ],
    techRelevance: ["IoT", "AI", "Industrial Technology", "Automation"],
    image: "https://source.unsplash.com/800x600/?IoT",
    officialLink: "https://www.kepware.com",
    docLink: "https://www.kepware.com/docs",
    tutorialLink: "https://www.kepware.com/learning",
    githubLink: "N/A",
  },
  {
    id: 112,
    name: "RoboDK",
    category: [
      "Robotics",
      "Artificial Intelligence",
      "Computer Science / Software Development",
    ],
    whatItDoes:
      "Offline programming and simulation software for industrial robots.",
    howToUse: [
      "Select robot",
      "Simulate tasks",
      "Generate code",
      "Deploy to robot",
    ],
    techRelevance: ["Robotics", "AI", "Automation & Control Systems"],
    image: "https://source.unsplash.com/800x600/?robot",
    officialLink: "https://robodk.com",
    docLink: "https://robodk.com/doc",
    tutorialLink: "https://robodk.com/learn",
    githubLink: "N/A",
  },
  {
    id: 113,
    name: "OpenAI Gym",
    category: ["Robotics", "Artificial Intelligence", "Machine Learning"],
    whatItDoes:
      "Toolkit for developing and comparing reinforcement learning algorithms for robotics.",
    howToUse: [
      "Set up environment",
      "Train AI agent",
      "Simulate tasks",
      "Evaluate performance",
    ],
    techRelevance: ["Robotics", "AI", "Machine Learning"],
    image: "https://source.unsplash.com/800x600/?robotics",
    officialLink: "https://gym.openai.com",
    docLink: "https://gym.openai.com/docs",
    tutorialLink: "https://gym.openai.com/tutorials",
    githubLink: "https://github.com/openai/gym",
  },
  {
    id: 114,
    name: "ROS (Robot Operating System)",
    category: [
      "Robotics",
      "Artificial Intelligence",
      "Computer Science / Software Development",
    ],
    whatItDoes:
      "Open-source framework for robot software development and AI integration.",
    howToUse: [
      "Install ROS",
      "Write nodes",
      "Integrate AI models",
      "Run robot simulations",
    ],
    techRelevance: ["Robotics", "AI", "Automation & Control Systems"],
    image: "https://source.unsplash.com/800x600/?robotics-software",
    officialLink: "https://www.ros.org",
    docLink: "https://docs.ros.org",
    tutorialLink: "https://www.ros.org/tutorials",
    githubLink: "https://github.com/ros",
  },
  {
    id: 115,
    name: "VEX Robotics AI",
    category: [
      "Robotics",
      "Artificial Intelligence",
      "Educational Technology (EdTech)",
    ],
    whatItDoes:
      "AI-enabled robotics kits and programming tools for education and research.",
    howToUse: [
      "Assemble robot",
      "Program AI tasks",
      "Test in simulation",
      "Deploy robot",
    ],
    techRelevance: ["Robotics", "AI", "EdTech"],
    image: "https://source.unsplash.com/800x600/?robotics-kids",
    officialLink: "https://www.vex.com/ai",
    docLink: "https://www.vex.com/docs",
    tutorialLink: "https://www.vex.com/education",
    githubLink: "N/A",
  },
  {
    id: 116,
    name: "Rethink Robotics",
    category: ["Robotics", "Artificial Intelligence", "Industrial Technology"],
    whatItDoes:
      "Collaborative AI robots for industrial automation and smart manufacturing.",
    howToUse: [
      "Deploy robot",
      "Train AI behaviors",
      "Monitor tasks",
      "Optimize processes",
    ],
    techRelevance: ["Robotics", "AI", "Industrial Technology"],
    image: "https://source.unsplash.com/800x600/?industrial-robot",
    officialLink: "https://www.rethinkrobotics.com",
    docLink: "https://www.rethinkrobotics.com/docs",
    tutorialLink: "https://www.rethinkrobotics.com/learning",
    githubLink: "N/A",
  },
  {
    id: 117,
    name: "Boston Dynamics AI",
    category: [
      "Robotics",
      "Artificial Intelligence",
      "Automation & Control Systems",
    ],
    whatItDoes: "AI for advanced robotics mobility, perception, and autonomy.",
    howToUse: [
      "Program motion",
      "Train AI models",
      "Test navigation",
      "Deploy autonomous robots",
    ],
    techRelevance: ["Robotics", "AI", "Automation & Control Systems"],
    image: "https://source.unsplash.com/800x600/?boston-dynamics",
    officialLink: "https://www.bostondynamics.com",
    docLink: "N/A",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 118,
    name: "NVIDIA Isaac",
    category: [
      "Robotics",
      "Artificial Intelligence",
      "Computer Science / Software Development",
    ],
    whatItDoes:
      "AI platform for robotics simulation, training, and deployment with GPU acceleration.",
    howToUse: [
      "Set up simulator",
      "Train AI agents",
      "Test in virtual environment",
      "Deploy to physical robots",
    ],
    techRelevance: ["Robotics", "AI", "Machine Learning", "Simulation"],
    image: "https://source.unsplash.com/800x600/?nvidia-robotics",
    officialLink: "https://developer.nvidia.com/isaac",
    docLink: "https://developer.nvidia.com/isaac/docs",
    tutorialLink: "https://developer.nvidia.com/isaac/tutorials",
    githubLink: "https://github.com/NVIDIA-ISAAC",
  },
  {
    id: 119,
    name: "Fetch Robotics AI",
    category: ["Robotics", "Artificial Intelligence", "Industrial Technology"],
    whatItDoes:
      "AI-enabled autonomous mobile robots for logistics and warehousing.",
    howToUse: [
      "Deploy robots",
      "Monitor AI tasks",
      "Optimize routes",
      "Analyze performance",
    ],
    techRelevance: [
      "Robotics",
      "AI",
      "Industrial Technology",
      "Logistics Automation",
    ],
    image: "https://source.unsplash.com/800x600/?warehouse-robot",
    officialLink: "https://fetchrobotics.com",
    docLink: "https://fetchrobotics.com/docs",
    tutorialLink: "https://fetchrobotics.com/learning",
    githubLink: "N/A",
  },
  {
    id: 120,
    name: "ABB Robotics AI",
    category: ["Robotics", "Artificial Intelligence", "Industrial Technology"],
    whatItDoes:
      "AI-powered industrial robots for assembly, welding, and automation.",
    howToUse: [
      "Program robot",
      "Train AI models",
      "Monitor tasks",
      "Optimize production",
    ],
    techRelevance: [
      "Robotics",
      "AI",
      "Industrial Technology",
      "Automation & Control Systems",
    ],
    image: "https://source.unsplash.com/800x600/?robotics-industry",
    officialLink: "https://new.abb.com/products/robotics",
    docLink: "https://new.abb.com/docs",
    tutorialLink: "https://new.abb.com/learning",
    githubLink: "N/A",
  },
  {
    id: 121,
    name: "Chainalysis KYT",
    category: [
      "Blockchain",
      "Artificial Intelligence",
      "Cybersecurity",
      "Financial Technology (FinTech)",
    ],
    whatItDoes:
      "Real-time AI-powered transaction monitoring and compliance for blockchain networks.",
    howToUse: [
      "Connect blockchain wallet",
      "Monitor transactions",
      "Flag suspicious activity",
      "Generate reports",
    ],
    techRelevance: ["Blockchain", "AI", "FinTech", "Cybersecurity"],
    image: "https://source.unsplash.com/800x600/?blockchain",
    officialLink: "https://www.chainalysis.com",
    docLink: "https://www.chainalysis.com/docs",
    tutorialLink: "https://www.chainalysis.com/learning",
    githubLink: "N/A",
  },
  {
    id: 122,
    name: "Covalent AI",
    category: [
      "Blockchain",
      "Artificial Intelligence",
      "Data Science",
      "Financial Technology (FinTech)",
    ],
    whatItDoes:
      "AI-based analytics platform providing unified blockchain data for apps and research.",
    howToUse: [
      "Connect blockchain APIs",
      "Query data",
      "Analyze trends",
      "Integrate insights",
    ],
    techRelevance: ["Blockchain", "AI", "Data Science", "FinTech"],
    image: "https://source.unsplash.com/800x600/?crypto",
    officialLink: "https://www.covalenthq.com",
    docLink: "https://www.covalenthq.com/docs",
    tutorialLink: "https://www.covalenthq.com/learn",
    githubLink: "https://github.com/covalenthq",
  },
  {
    id: 123,
    name: "Numerai",
    category: [
      "Blockchain",
      "Artificial Intelligence",
      "Machine Learning",
      "Financial Technology (FinTech)",
    ],
    whatItDoes:
      "AI-driven hedge fund powered by blockchain-based data science competitions.",
    howToUse: [
      "Submit ML models",
      "Evaluate predictions",
      "Stake NMR tokens",
      "Earn rewards",
    ],
    techRelevance: ["Blockchain", "AI", "Machine Learning", "FinTech"],
    image: "https://source.unsplash.com/800x600/?finance",
    officialLink: "https://numer.ai",
    docLink: "https://numer.ai/docs",
    tutorialLink: "https://numer.ai/learn",
    githubLink: "https://github.com/numerai",
  },
  {
    id: 124,
    name: "DeepBrain Chain",
    category: [
      "Blockchain",
      "Artificial Intelligence",
      "Cloud Computing",
      "Machine Learning",
    ],
    whatItDoes:
      "Decentralized AI computing platform using blockchain for AI training cost optimization.",
    howToUse: [
      "Deploy AI tasks",
      "Connect blockchain nodes",
      "Train AI models",
      "Monitor usage",
    ],
    techRelevance: ["Blockchain", "AI", "Cloud Computing", "Machine Learning"],
    image: "https://source.unsplash.com/800x600/?ai-blockchain",
    officialLink: "https://www.deepbrainchain.org",
    docLink: "https://www.deepbrainchain.org/docs",
    tutorialLink: "https://www.deepbrainchain.org/tutorials",
    githubLink: "N/A",
  },
  {
    id: 125,
    name: "SingularityNET",
    category: [
      "Blockchain",
      "Artificial Intelligence",
      "Decentralized AI",
      "Machine Learning",
    ],
    whatItDoes:
      "AI marketplace powered by blockchain for decentralized AI services and models.",
    howToUse: [
      "Browse AI services",
      "Purchase with AGI token",
      "Integrate APIs",
      "Deploy AI solutions",
    ],
    techRelevance: [
      "Blockchain",
      "AI",
      "Machine Learning",
      "Decentralized Systems",
    ],
    image: "https://source.unsplash.com/800x600/?ai-marketplace",
    officialLink: "https://singularitynet.io",
    docLink: "https://docs.singularitynet.io",
    tutorialLink: "https://singularitynet.io/learn",
    githubLink: "https://github.com/singnet",
  },
  {
    id: 126,
    name: "Velas AI",
    category: [
      "Blockchain",
      "Artificial Intelligence",
      "Smart Contracts",
      "Machine Learning",
    ],
    whatItDoes:
      "AI-powered blockchain platform for smart contract optimization and autonomous decision-making.",
    howToUse: [
      "Deploy smart contracts",
      "Enable AI optimization",
      "Monitor performance",
      "Automate tasks",
    ],
    techRelevance: ["Blockchain", "AI", "Smart Contracts", "Machine Learning"],
    image: "https://source.unsplash.com/800x600/?smart-contracts",
    officialLink: "https://velas.com",
    docLink: "https://velas.com/docs",
    tutorialLink: "https://velas.com/learn",
    githubLink: "N/A",
  },
  {
    id: 127,
    name: "Cortex AI",
    category: [
      "Blockchain",
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Science / Software Development",
    ],
    whatItDoes:
      "Decentralized AI platform on blockchain for deploying AI models and DApps.",
    howToUse: [
      "Upload AI models",
      "Deploy on blockchain",
      "Monitor AI inference",
      "Earn rewards",
    ],
    techRelevance: ["Blockchain", "AI", "Machine Learning", "DApps"],
    image: "https://source.unsplash.com/800x600/?decentralized-ai",
    officialLink: "https://www.cortexlabs.ai",
    docLink: "https://docs.cortexlabs.ai",
    tutorialLink: "https://www.cortexlabs.ai/learn",
    githubLink: "https://github.com/CortexFoundation",
  },
  {
    id: 128,
    name: "Fetch.ai",
    category: [
      "Blockchain",
      "Artificial Intelligence",
      "Internet of Things (IoT)",
      "Machine Learning",
    ],
    whatItDoes:
      "Autonomous AI agents on blockchain for IoT, finance, and optimization tasks.",
    howToUse: [
      "Deploy AI agents",
      "Connect IoT devices",
      "Perform autonomous tasks",
      "Analyze outcomes",
    ],
    techRelevance: ["Blockchain", "AI", "IoT", "Machine Learning"],
    image: "https://source.unsplash.com/800x600/?autonomous-agent",
    officialLink: "https://fetch.ai",
    docLink: "https://docs.fetch.ai",
    tutorialLink: "https://learn.fetch.ai",
    githubLink: "https://github.com/fetchai",
  },
  {
    id: 129,
    name: "Ocean Protocol",
    category: [
      "Blockchain",
      "Artificial Intelligence",
      "Data Science",
      "Machine Learning",
    ],
    whatItDoes:
      "Blockchain-based AI data marketplace for sharing and monetizing datasets securely.",
    howToUse: [
      "Publish datasets",
      "Access datasets via smart contracts",
      "Train AI models",
      "Analyze results",
    ],
    techRelevance: ["Blockchain", "AI", "Data Science", "Machine Learning"],
    image: "https://source.unsplash.com/800x600/?data-marketplace",
    officialLink: "https://oceanprotocol.com",
    docLink: "https://docs.oceanprotocol.com",
    tutorialLink: "https://oceanprotocol.com/learn",
    githubLink: "https://github.com/oceanprotocol",
  },
  {
    id: 130,
    name: "AIChain",
    category: [
      "Blockchain",
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Science / Software Development",
    ],
    whatItDoes:
      "Platform for integrating AI models with blockchain for analytics, predictions, and smart contracts.",
    howToUse: [
      "Deploy AI on blockchain",
      "Train predictive models",
      "Integrate smart contracts",
      "Generate insights",
    ],
    techRelevance: ["Blockchain", "AI", "Machine Learning", "Analytics"],
    image: "https://source.unsplash.com/800x600/?ai-blockchain",
    officialLink: "https://aichain.org",
    docLink: "https://docs.aichain.org",
    tutorialLink: "https://aichain.org/learn",
    githubLink: "N/A",
  },
  {
    id: 131,
    name: "Atomwise",
    category: [
      "Biotechnology",
      "Artificial Intelligence",
      "Machine Learning",
      "Medical & Health Technology",
    ],
    whatItDoes:
      "AI-driven drug discovery platform using deep learning to predict molecular binding.",
    howToUse: [
      "Input target protein",
      "Run AI model",
      "Analyze predicted molecules",
      "Select candidates",
    ],
    techRelevance: [
      "AI",
      "Machine Learning",
      "Biotechnology",
      "Drug Discovery",
    ],
    image: "https://source.unsplash.com/800x600/?biotech",
    officialLink: "https://www.atomwise.com",
    docLink: "https://www.atomwise.com/docs",
    tutorialLink: "https://www.atomwise.com/learning",
    githubLink: "N/A",
  },
  {
    id: 132,
    name: "Benchling",
    category: [
      "Biotechnology",
      "Artificial Intelligence",
      "Data Science",
      "Medical & Health Technology",
    ],
    whatItDoes:
      "Cloud-based platform for life sciences R&D with AI-powered data analysis and workflow automation.",
    howToUse: [
      "Upload experimental data",
      "Use AI insights",
      "Collaborate with team",
      "Track results",
    ],
    techRelevance: ["Biotechnology", "AI", "Data Science", "Lab Automation"],
    image: "https://source.unsplash.com/800x600/?laboratory",
    officialLink: "https://www.benchling.com",
    docLink: "https://docs.benchling.com",
    tutorialLink: "https://www.benchling.com/learning",
    githubLink: "N/A",
  },
  {
    id: 133,
    name: "Insilico Medicine",
    category: [
      "Biotechnology",
      "Artificial Intelligence",
      "Machine Learning",
      "Medical & Health Technology",
    ],
    whatItDoes: "AI-powered drug discovery and biomarker development platform.",
    howToUse: [
      "Upload biological data",
      "Run AI algorithms",
      "Analyze predictions",
      "Select candidate compounds",
    ],
    techRelevance: [
      "Biotechnology",
      "AI",
      "Machine Learning",
      "Drug Discovery",
    ],
    image: "https://source.unsplash.com/800x600/?dna",
    officialLink: "https://www.insilico.com",
    docLink: "https://www.insilico.com/docs",
    tutorialLink: "https://www.insilico.com/learning",
    githubLink: "N/A",
  },
  {
    id: 134,
    name: "Recursion Pharmaceuticals",
    category: [
      "Biotechnology",
      "Artificial Intelligence",
      "Data Science",
      "Medical & Health Technology",
    ],
    whatItDoes:
      "AI and machine learning platform for high-throughput cellular imaging and drug discovery.",
    howToUse: [
      "Input cellular data",
      "Run AI analysis",
      "Identify phenotypes",
      "Generate drug candidates",
    ],
    techRelevance: [
      "Biotechnology",
      "AI",
      "Machine Learning",
      "Drug Discovery",
    ],
    image: "https://source.unsplash.com/800x600/?cellular",
    officialLink: "https://www.recursion.com",
    docLink: "https://www.recursion.com/docs",
    tutorialLink: "https://www.recursion.com/learning",
    githubLink: "N/A",
  },
  {
    id: 135,
    name: "Deep Genomics",
    category: [
      "Biotechnology",
      "Artificial Intelligence",
      "Machine Learning",
      "Medical & Health Technology",
    ],
    whatItDoes:
      "AI platform for genetic medicine development by predicting how genetic variants affect disease.",
    howToUse: [
      "Input genomic data",
      "Run AI prediction",
      "Analyze therapeutic targets",
      "Develop treatments",
    ],
    techRelevance: ["Biotechnology", "AI", "Genomics", "Drug Discovery"],
    image: "https://source.unsplash.com/800x600/?genomics",
    officialLink: "https://www.deepgenomics.com",
    docLink: "https://www.deepgenomics.com/docs",
    tutorialLink: "https://www.deepgenomics.com/learning",
    githubLink: "N/A",
  },
  {
    id: 136,
    name: "BenevolentAI",
    category: [
      "Biotechnology",
      "Artificial Intelligence",
      "Machine Learning",
      "Medical & Health Technology",
    ],
    whatItDoes:
      "AI-powered drug discovery and development platform to accelerate pharmaceutical research.",
    howToUse: [
      "Input target disease",
      "Run AI analysis",
      "Predict drug candidates",
      "Optimize compounds",
    ],
    techRelevance: ["Biotechnology", "AI", "Machine Learning", "Pharma"],
    image: "https://source.unsplash.com/800x600/?pharma",
    officialLink: "https://www.benevolent.com",
    docLink: "https://www.benevolent.com/docs",
    tutorialLink: "https://www.benevolent.com/learning",
    githubLink: "N/A",
  },
  {
    id: 137,
    name: "Exscientia",
    category: [
      "Biotechnology",
      "Artificial Intelligence",
      "Machine Learning",
      "Medical & Health Technology",
    ],
    whatItDoes:
      "AI-driven drug design platform optimizing small molecule development for speed and efficiency.",
    howToUse: [
      "Define target protein",
      "Run AI optimization",
      "Select compounds",
      "Proceed to trials",
    ],
    techRelevance: ["Biotechnology", "AI", "Machine Learning", "Drug Design"],
    image: "https://source.unsplash.com/800x600/?molecule",
    officialLink: "https://www.exscientia.ai",
    docLink: "https://www.exscientia.ai/docs",
    tutorialLink: "https://www.exscientia.ai/learning",
    githubLink: "N/A",
  },
  {
    id: 138,
    name: "BioXcel Therapeutics",
    category: [
      "Biotechnology",
      "Artificial Intelligence",
      "Machine Learning",
      "Medical & Health Technology",
    ],
    whatItDoes:
      "AI-assisted drug discovery platform targeting neurological and psychiatric disorders.",
    howToUse: [
      "Input data",
      "Analyze via AI",
      "Identify drug candidates",
      "Move to clinical trials",
    ],
    techRelevance: [
      "Biotechnology",
      "AI",
      "Machine Learning",
      "Drug Discovery",
    ],
    image: "https://source.unsplash.com/800x600/?neuroscience",
    officialLink: "https://www.bioxceltherapeutics.com",
    docLink: "https://www.bioxceltherapeutics.com/docs",
    tutorialLink: "https://www.bioxceltherapeutics.com/learning",
    githubLink: "N/A",
  },
  {
    id: 139,
    name: "Insitro",
    category: [
      "Biotechnology",
      "Artificial Intelligence",
      "Machine Learning",
      "Medical & Health Technology",
    ],
    whatItDoes:
      "AI-driven platform integrating biology and machine learning for drug discovery and disease modeling.",
    howToUse: [
      "Input biological datasets",
      "Run AI models",
      "Analyze predictions",
      "Select therapeutic candidates",
    ],
    techRelevance: [
      "Biotechnology",
      "AI",
      "Machine Learning",
      "Drug Discovery",
    ],
    image: "https://source.unsplash.com/800x600/?drug-discovery",
    officialLink: "https://www.insitro.com",
    docLink: "https://www.insitro.com/docs",
    tutorialLink: "https://www.insitro.com/learning",
    githubLink: "N/A",
  },
  {
    id: 140,
    name: "Zymergen",
    category: [
      "Biotechnology",
      "Artificial Intelligence",
      "Automation & Control Systems",
      "Clean / Green Technology",
    ],
    whatItDoes:
      "AI-powered platform for bio-manufacturing, optimizing molecular design and materials production.",
    howToUse: [
      "Input design parameters",
      "Run AI simulations",
      "Analyze molecular outputs",
      "Scale production",
    ],
    techRelevance: ["Biotechnology", "AI", "Automation", "Clean Technology"],
    image: "https://source.unsplash.com/800x600/?biomanufacturing",
    officialLink: "https://www.zymergen.com",
    docLink: "https://www.zymergen.com/docs",
    tutorialLink: "https://www.zymergen.com/learning",
    githubLink: "N/A",
  },
  {
    id: 141,
    name: "IBM Environmental Intelligence Suite",
    category: [
      "Environmental Technology",
      "Artificial Intelligence",
      "Data Science",
      "Cloud Computing",
    ],
    whatItDoes:
      "AI-driven platform for weather, climate risk, and environmental event predictions.",
    howToUse: [
      "Input location data",
      "Analyze environmental risks",
      "Generate AI insights",
      "Plan mitigation strategies",
    ],
    techRelevance: [
      "Environmental Technology",
      "AI",
      "Data Science",
      "Cloud Computing",
    ],
    image: "https://source.unsplash.com/800x600/?environment",
    officialLink:
      "https://www.ibm.com/products/environmental-intelligence-suite",
    docLink: "https://www.ibm.com/docs/en/environmental-intelligence",
    tutorialLink: "https://www.ibm.com/learning/environmental-intelligence",
    githubLink: "N/A",
  },
  {
    id: 142,
    name: "Descartes Labs",
    category: [
      "Environmental Technology",
      "Artificial Intelligence",
      "Machine Learning",
      "Remote Sensing",
    ],
    whatItDoes:
      "AI-powered geospatial analytics platform for environmental monitoring and predictive modeling.",
    howToUse: [
      "Upload satellite imagery",
      "Run AI analysis",
      "Interpret results",
      "Plan interventions",
    ],
    techRelevance: [
      "Environmental Technology",
      "AI",
      "Machine Learning",
      "Remote Sensing",
    ],
    image: "https://source.unsplash.com/800x600/?satellite",
    officialLink: "https://www.descarteslabs.com",
    docLink: "https://docs.descarteslabs.com",
    tutorialLink: "https://www.descarteslabs.com/learning",
    githubLink: "N/A",
  },
  {
    id: 143,
    name: "Climate AI",
    category: [
      "Environmental Technology",
      "Artificial Intelligence",
      "Data Science",
      "Cloud Computing",
    ],
    whatItDoes:
      "AI platform predicting climate risks and enabling resilient planning for agriculture and infrastructure.",
    howToUse: [
      "Input environmental data",
      "Run AI models",
      "Analyze risks",
      "Generate mitigation plans",
    ],
    techRelevance: [
      "Environmental Technology",
      "AI",
      "Data Science",
      "Cloud Computing",
    ],
    image: "https://source.unsplash.com/800x600/?climate",
    officialLink: "https://www.climate.ai",
    docLink: "https://docs.climate.ai",
    tutorialLink: "https://www.climate.ai/learning",
    githubLink: "N/A",
  },
  {
    id: 144,
    name: "Pachama",
    category: [
      "Environmental Technology",
      "Artificial Intelligence",
      "Remote Sensing",
      "Data Science",
    ],
    whatItDoes:
      "AI-powered forest monitoring platform using satellite and drone data for carbon offset verification.",
    howToUse: [
      "Upload drone/satellite data",
      "Run AI analysis",
      "Monitor forest health",
      "Generate carbon reports",
    ],
    techRelevance: [
      "Environmental Technology",
      "AI",
      "Data Science",
      "Remote Sensing",
    ],
    image: "https://source.unsplash.com/800x600/?forest",
    officialLink: "https://www.pachama.com",
    docLink: "https://docs.pachama.com",
    tutorialLink: "https://www.pachama.com/learning",
    githubLink: "N/A",
  },
  {
    id: 145,
    name: "X, formerly Climeworks AI",
    category: [
      "Environmental Technology",
      "Artificial Intelligence",
      "Clean / Green Technology",
    ],
    whatItDoes:
      "AI-driven carbon capture monitoring and optimization platform.",
    howToUse: [
      "Connect capture facility",
      "Analyze CO2 data",
      "Optimize capture efficiency",
      "Generate reports",
    ],
    techRelevance: [
      "Environmental Technology",
      "AI",
      "Clean Technology",
      "Data Science",
    ],
    image: "https://source.unsplash.com/800x600/?carbon-capture",
    officialLink: "https://www.climeworks.com",
    docLink: "https://www.climeworks.com/docs",
    tutorialLink: "https://www.climeworks.com/learning",
    githubLink: "N/A",
  },
  {
    id: 146,
    name: "Airly",
    category: [
      "Environmental Technology",
      "Artificial Intelligence",
      "IoT",
      "Data Science",
    ],
    whatItDoes:
      "AI-powered air quality monitoring using IoT sensors and predictive modeling.",
    howToUse: [
      "Deploy sensors",
      "Collect real-time data",
      "Run AI predictions",
      "Generate insights/reports",
    ],
    techRelevance: ["Environmental Technology", "AI", "IoT", "Data Science"],
    image: "https://source.unsplash.com/800x600/?air-quality",
    officialLink: "https://airly.org",
    docLink: "https://docs.airly.org",
    tutorialLink: "https://airly.org/learning",
    githubLink: "N/A",
  },
  {
    id: 147,
    name: "Jupiter Intelligence",
    category: [
      "Environmental Technology",
      "Artificial Intelligence",
      "Data Science",
      "Climate Risk Management",
    ],
    whatItDoes:
      "AI platform assessing climate risks to infrastructure, agriculture, and urban planning.",
    howToUse: [
      "Input environmental data",
      "Run AI models",
      "Evaluate risks",
      "Generate mitigation plans",
    ],
    techRelevance: [
      "Environmental Technology",
      "AI",
      "Data Science",
      "Risk Management",
    ],
    image: "https://source.unsplash.com/800x600/?infrastructure",
    officialLink: "https://www.jupiterintel.com",
    docLink: "https://docs.jupiterintel.com",
    tutorialLink: "https://www.jupiterintel.com/learning",
    githubLink: "N/A",
  },
  {
    id: 148,
    name: "Enview",
    category: [
      "Environmental Technology",
      "Artificial Intelligence",
      "Remote Sensing",
      "IoT",
    ],
    whatItDoes:
      "AI-powered platform for monitoring environmental changes using satellite and drone imagery.",
    howToUse: [
      "Upload imagery",
      "Run AI analysis",
      "Track changes",
      "Generate environmental reports",
    ],
    techRelevance: ["Environmental Technology", "AI", "Remote Sensing", "IoT"],
    image: "https://source.unsplash.com/800x600/?satellite-imagery",
    officialLink: "https://www.enview.com",
    docLink: "https://www.enview.com/docs",
    tutorialLink: "https://www.enview.com/learning",
    githubLink: "N/A",
  },
  {
    id: 149,
    name: "Cloverly",
    category: [
      "Environmental Technology",
      "Artificial Intelligence",
      "Clean / Green Technology",
      "Data Science",
    ],
    whatItDoes:
      "AI platform automating carbon offsetting for businesses with analytics and sustainability insights.",
    howToUse: [
      "Connect business data",
      "Run AI analytics",
      "Calculate emissions",
      "Purchase offsets",
    ],
    techRelevance: [
      "Environmental Technology",
      "AI",
      "Clean Technology",
      "Data Science",
    ],
    image: "https://source.unsplash.com/800x600/?sustainability",
    officialLink: "https://www.cloverly.com",
    docLink: "https://www.cloverly.com/docs",
    tutorialLink: "https://www.cloverly.com/learning",
    githubLink: "N/A",
  },
  {
    id: 150,
    name: "Descartes Labs Environmental Suite",
    category: [
      "Environmental Technology",
      "Artificial Intelligence",
      "Remote Sensing",
      "Cloud Computing",
    ],
    whatItDoes:
      "AI platform providing environmental monitoring, natural resource management, and predictive modeling.",
    howToUse: [
      "Input geospatial data",
      "Run AI models",
      "Generate environmental insights",
      "Plan actions",
    ],
    techRelevance: [
      "Environmental Technology",
      "AI",
      "Remote Sensing",
      "Data Science",
    ],
    image: "https://source.unsplash.com/800x600/?environmental-monitoring",
    officialLink: "https://www.descarteslabs.com",
    docLink: "https://docs.descarteslabs.com",
    tutorialLink: "https://www.descarteslabs.com/learning",
    githubLink: "N/A",
  },
  {
    id: 151,
    name: "Orbital Insight",
    category: [
      "Space Technology",
      "Artificial Intelligence",
      "Data Science",
      "Remote Sensing",
    ],
    whatItDoes:
      "AI platform analyzing satellite imagery for space and earth observation insights.",
    howToUse: [
      "Upload satellite images",
      "Run AI analysis",
      "Extract insights",
      "Generate reports",
    ],
    techRelevance: ["Space Technology", "AI", "Data Science", "Remote Sensing"],
    image: "https://source.unsplash.com/800x600/?satellite-space",
    officialLink: "https://www.orbitalinsight.com",
    docLink: "https://docs.orbitalinsight.com",
    tutorialLink: "https://www.orbitalinsight.com/learning",
    githubLink: "N/A",
  },
  {
    id: 152,
    name: "LeoLabs",
    category: [
      "Space Technology",
      "Artificial Intelligence",
      "IoT",
      "Data Science",
    ],
    whatItDoes:
      "AI-driven platform for tracking satellites and debris in Low Earth Orbit.",
    howToUse: [
      "Connect tracking data",
      "Run AI models",
      "Monitor orbit objects",
      "Generate risk reports",
    ],
    techRelevance: ["Space Technology", "AI", "IoT", "Data Science"],
    image: "https://source.unsplash.com/800x600/?satellite-debris",
    officialLink: "https://www.leolabs.space",
    docLink: "https://docs.leolabs.space",
    tutorialLink: "https://www.leolabs.space/learning",
    githubLink: "N/A",
  },
  {
    id: 153,
    name: "SpaceKnow",
    category: [
      "Space Technology",
      "Artificial Intelligence",
      "Remote Sensing",
      "Data Science",
    ],
    whatItDoes:
      "AI platform for analyzing satellite imagery to monitor economic and environmental activities on Earth.",
    howToUse: [
      "Upload satellite data",
      "Run AI analysis",
      "Extract patterns",
      "Generate actionable insights",
    ],
    techRelevance: ["Space Technology", "AI", "Remote Sensing", "Data Science"],
    image: "https://source.unsplash.com/800x600/?earth-observation",
    officialLink: "https://www.spaceknow.com",
    docLink: "https://docs.spaceknow.com",
    tutorialLink: "https://www.spaceknow.com/learning",
    githubLink: "N/A",
  },
  {
    id: 154,
    name: "ExoAnalytic Solutions",
    category: [
      "Space Technology",
      "Artificial Intelligence",
      "Data Science",
      "Networking / Telecommunications",
    ],
    whatItDoes:
      "AI-powered space situational awareness platform for satellite tracking and orbital analysis.",
    howToUse: [
      "Connect telemetry data",
      "Run AI algorithms",
      "Analyze satellite paths",
      "Generate alerts",
    ],
    techRelevance: [
      "Space Technology",
      "AI",
      "Data Science",
      "Networking / Telecommunications",
    ],
    image: "https://source.unsplash.com/800x600/?satellite-orbit",
    officialLink: "https://www.exoanalytic.com",
    docLink: "https://docs.exoanalytic.com",
    tutorialLink: "https://www.exoanalytic.com/learning",
    githubLink: "N/A",
  },
  {
    id: 155,
    name: "Analytical Space",
    category: [
      "Space Technology",
      "Artificial Intelligence",
      "IoT",
      "Data Science",
    ],
    whatItDoes:
      "AI platform for analyzing satellite communications, sensor data, and space operations.",
    howToUse: [
      "Upload sensor data",
      "Run AI analysis",
      "Monitor communications",
      "Generate reports",
    ],
    techRelevance: ["Space Technology", "AI", "IoT", "Data Science"],
    image: "https://source.unsplash.com/800x600/?satellite-communications",
    officialLink: "https://www.analyticalspace.com",
    docLink: "https://docs.analyticalspace.com",
    tutorialLink: "https://www.analyticalspace.com/learning",
    githubLink: "N/A",
  },
  {
    id: 156,
    name: "Upstream Tech",
    category: [
      "Space Technology",
      "Artificial Intelligence",
      "Remote Sensing",
      "Environmental Technology",
    ],
    whatItDoes:
      "AI-powered satellite analytics for monitoring water, environmental changes, and land use from space.",
    howToUse: [
      "Upload satellite imagery",
      "Run AI models",
      "Extract environmental insights",
      "Generate reports",
    ],
    techRelevance: [
      "Space Technology",
      "AI",
      "Remote Sensing",
      "Environmental Technology",
    ],
    image: "https://source.unsplash.com/800x600/?satellite-environment",
    officialLink: "https://www.upstream.tech",
    docLink: "https://docs.upstream.tech",
    tutorialLink: "https://www.upstream.tech/learning",
    githubLink: "N/A",
  },
  {
    id: 157,
    name: "Orbital Dynamics AI",
    category: [
      "Space Technology",
      "Artificial Intelligence",
      "Robotics",
      "Data Science",
    ],
    whatItDoes:
      "AI simulation and analysis tool for spacecraft trajectory, orbital mechanics, and mission planning.",
    howToUse: [
      "Input spacecraft parameters",
      "Run AI simulations",
      "Analyze trajectory",
      "Generate mission plans",
    ],
    techRelevance: ["Space Technology", "AI", "Robotics", "Data Science"],
    image: "https://source.unsplash.com/800x600/?spacecraft",
    officialLink: "https://www.orbitaldynamics.ai",
    docLink: "https://docs.orbitaldynamics.ai",
    tutorialLink: "https://www.orbitaldynamics.ai/learning",
    githubLink: "N/A",
  },
  {
    id: 158,
    name: "Analytical Graphics Inc (AGI) - STK AI",
    category: [
      "Space Technology",
      "Artificial Intelligence",
      "Robotics",
      "Data Science",
    ],
    whatItDoes:
      "AI-enhanced simulation and modeling platform for satellite missions, space situational awareness, and orbital analysis.",
    howToUse: [
      "Setup satellite models",
      "Run AI analysis",
      "Simulate missions",
      "Generate reports",
    ],
    techRelevance: ["Space Technology", "AI", "Robotics", "Data Science"],
    image: "https://source.unsplash.com/800x600/?satellite-simulation",
    officialLink: "https://www.agi.com/products/stk",
    docLink: "https://docs.agi.com/stk",
    tutorialLink: "https://www.agi.com/learning",
    githubLink: "N/A",
  },
  {
    id: 159,
    name: "Spire Global",
    category: [
      "Space Technology",
      "Artificial Intelligence",
      "IoT",
      "Data Science",
    ],
    whatItDoes:
      "AI-driven satellite constellation for tracking weather, ships, and global environmental data.",
    howToUse: [
      "Access satellite feeds",
      "Run AI models",
      "Analyze data",
      "Generate insights",
    ],
    techRelevance: ["Space Technology", "AI", "IoT", "Data Science"],
    image: "https://source.unsplash.com/800x600/?satellite-data",
    officialLink: "https://www.spire.com",
    docLink: "https://docs.spire.com",
    tutorialLink: "https://www.spire.com/learning",
    githubLink: "N/A",
  },
  {
    id: 160,
    name: "Astro Digital",
    category: [
      "Space Technology",
      "Artificial Intelligence",
      "Remote Sensing",
      "Data Science",
    ],
    whatItDoes:
      "AI-powered Earth observation platform analyzing satellite imagery for climate, environmental, and resource management.",
    howToUse: [
      "Upload satellite images",
      "Run AI analysis",
      "Extract insights",
      "Generate actionable reports",
    ],
    techRelevance: ["Space Technology", "AI", "Remote Sensing", "Data Science"],
    image: "https://source.unsplash.com/800x600/?earth-observation-satellite",
    officialLink: "https://www.astrodigital.com",
    docLink: "https://docs.astrodigital.com",
    tutorialLink: "https://www.astrodigital.com/learning",
    githubLink: "N/A",
  },
  {
    id: 161,
    name: "Prospera",
    category: [
      "Agricultural Technology",
      "Artificial Intelligence",
      "Data Science",
      "IoT",
    ],
    whatItDoes:
      "AI platform for monitoring crops, analyzing growth patterns, and predicting yield.",
    howToUse: [
      "Install sensors",
      "Collect field data",
      "Run AI analysis",
      "Generate insights and reports",
    ],
    techRelevance: ["Agricultural Technology", "AI", "IoT", "Data Science"],
    image: "https://source.unsplash.com/800x600/?farm-crops",
    officialLink: "https://www.prospera.ag",
    docLink: "https://docs.prospera.ag",
    tutorialLink: "https://www.prospera.ag/learning",
    githubLink: "N/A",
  },
  {
    id: 162,
    name: "Taranis",
    category: [
      "Agricultural Technology",
      "Artificial Intelligence",
      "Remote Sensing",
      "Data Science",
    ],
    whatItDoes:
      "AI-driven crop intelligence platform using aerial imagery to detect disease, pests, and nutrient deficiencies.",
    howToUse: [
      "Collect drone imagery",
      "Upload to platform",
      "Run AI analysis",
      "Take action based on insights",
    ],
    techRelevance: [
      "Agricultural Technology",
      "AI",
      "Remote Sensing",
      "Data Science",
    ],
    image: "https://source.unsplash.com/800x600/?drone-farm",
    officialLink: "https://www.taranis.ag",
    docLink: "https://docs.taranis.ag",
    tutorialLink: "https://www.taranis.ag/learning",
    githubLink: "N/A",
  },
  {
    id: 163,
    name: "John Deere See & Spray",
    category: [
      "Agricultural Technology",
      "Artificial Intelligence",
      "Robotics",
      "IoT",
    ],
    whatItDoes:
      "AI-powered precision agriculture robotics for selective spraying and weed control.",
    howToUse: [
      "Deploy robotic sprayer",
      "Enable AI targeting",
      "Monitor operation",
      "Adjust settings",
    ],
    techRelevance: ["Agricultural Technology", "AI", "Robotics", "IoT"],
    image: "https://source.unsplash.com/800x600/?tractor-farm",
    officialLink: "https://www.deere.com/en/technology-products/see-and-spray/",
    docLink: "https://www.deere.com/en/technology-products/see-and-spray/docs",
    tutorialLink:
      "https://www.deere.com/en/technology-products/see-and-spray/learning",
    githubLink: "N/A",
  },
  {
    id: 164,
    name: "CropX",
    category: [
      "Agricultural Technology",
      "Artificial Intelligence",
      "IoT",
      "Data Science",
    ],
    whatItDoes: "AI-based soil sensing and irrigation optimization platform.",
    howToUse: [
      "Install soil sensors",
      "Collect moisture data",
      "Run AI recommendations",
      "Adjust irrigation systems",
    ],
    techRelevance: ["Agricultural Technology", "AI", "IoT", "Data Science"],
    image: "https://source.unsplash.com/800x600/?irrigation",
    officialLink: "https://www.cropx.com",
    docLink: "https://docs.cropx.com",
    tutorialLink: "https://www.cropx.com/learning",
    githubLink: "N/A",
  },
  {
    id: 165,
    name: "Aker Technologies",
    category: [
      "Agricultural Technology",
      "Artificial Intelligence",
      "Data Science",
      "IoT",
    ],
    whatItDoes:
      "AI solutions for smart farming, crop health monitoring, and automated farming decisions.",
    howToUse: [
      "Deploy IoT devices",
      "Collect farm data",
      "Run AI analysis",
      "Receive actionable insights",
    ],
    techRelevance: ["Agricultural Technology", "AI", "IoT", "Data Science"],
    image: "https://source.unsplash.com/800x600/?smart-farming",
    officialLink: "https://aker.ag",
    docLink: "https://docs.aker.ag",
    tutorialLink: "https://aker.ag/learning",
    githubLink: "N/A",
  },
  {
    id: 166,
    name: "Plantix",
    category: [
      "Agricultural Technology",
      "Artificial Intelligence",
      "Mobile App Development",
      "Data Science",
    ],
    whatItDoes:
      "AI-powered mobile app for plant disease detection and management.",
    howToUse: [
      "Take plant photo",
      "Upload to app",
      "Run AI diagnosis",
      "Follow treatment recommendations",
    ],
    techRelevance: [
      "Agricultural Technology",
      "AI",
      "Mobile App Development",
      "Data Science",
    ],
    image: "https://source.unsplash.com/800x600/?plant-health",
    officialLink: "https://plantix.net",
    docLink: "https://docs.plantix.net",
    tutorialLink: "https://plantix.net/learning",
    githubLink: "N/A",
  },
  {
    id: 167,
    name: "eAgronom",
    category: [
      "Agricultural Technology",
      "Artificial Intelligence",
      "Data Science",
      "Cloud Computing",
    ],
    whatItDoes:
      "AI-based farm management software with yield forecasting, planning, and resource optimization.",
    howToUse: [
      "Input farm data",
      "Run AI analysis",
      "Optimize resources",
      "Track performance",
    ],
    techRelevance: [
      "Agricultural Technology",
      "AI",
      "Data Science",
      "Cloud Computing",
    ],
    image: "https://source.unsplash.com/800x600/?farm-management",
    officialLink: "https://eagronom.com",
    docLink: "https://docs.eagronom.com",
    tutorialLink: "https://eagronom.com/learning",
    githubLink: "N/A",
  },
  {
    id: 168,
    name: "PEAT",
    category: [
      "Agricultural Technology",
      "Artificial Intelligence",
      "Mobile App Development",
      "Data Science",
    ],
    whatItDoes:
      "AI mobile app for plant health diagnosis and pest detection using image recognition.",
    howToUse: [
      "Take plant image",
      "Upload to app",
      "AI identifies disease",
      "Apply recommendations",
    ],
    techRelevance: [
      "Agricultural Technology",
      "AI",
      "Mobile App Development",
      "Data Science",
    ],
    image: "https://source.unsplash.com/800x600/?plant-disease",
    officialLink: "https://peat.ai",
    docLink: "https://docs.peat.ai",
    tutorialLink: "https://peat.ai/learning",
    githubLink: "N/A",
  },
  {
    id: 169,
    name: "Gamaya",
    category: [
      "Agricultural Technology",
      "Artificial Intelligence",
      "Remote Sensing",
      "Data Science",
    ],
    whatItDoes:
      "AI drone platform for crop monitoring, nutrient mapping, and pest management.",
    howToUse: [
      "Fly drones over fields",
      "Collect multispectral data",
      "Run AI analysis",
      "Generate insights",
    ],
    techRelevance: [
      "Agricultural Technology",
      "AI",
      "Remote Sensing",
      "Data Science",
    ],
    image: "https://source.unsplash.com/800x600/?drone-crop",
    officialLink: "https://www.gamaya.com",
    docLink: "https://docs.gamaya.com",
    tutorialLink: "https://www.gamaya.com/learning",
    githubLink: "N/A",
  },
  {
    id: 170,
    name: "Arable",
    category: [
      "Agricultural Technology",
      "Artificial Intelligence",
      "IoT",
      "Data Science",
    ],
    whatItDoes:
      "AI platform with IoT sensors for microclimate monitoring, crop prediction, and irrigation optimization.",
    howToUse: [
      "Install Arable sensors",
      "Collect environmental data",
      "Run AI models",
      "Adjust farming decisions",
    ],
    techRelevance: ["Agricultural Technology", "AI", "IoT", "Data Science"],
    image: "https://source.unsplash.com/800x600/?farm-sensor",
    officialLink: "https://www.arable.com",
    docLink: "https://docs.arable.com",
    tutorialLink: "https://www.arable.com/learning",
    githubLink: "N/A",
  },
  {
    id: 171,
    name: "Arista Networks Cognitive WiFi",
    category: [
      "Networking / Telecommunications",
      "Artificial Intelligence",
      "Cloud Computing",
    ],
    whatItDoes:
      "AI-driven WiFi and network performance management platform for enterprises.",
    howToUse: [
      "Deploy network devices",
      "Enable AI monitoring",
      "Analyze network performance",
      "Optimize WiFi and routing",
    ],
    techRelevance: ["Networking / Telecommunications", "AI", "Cloud Computing"],
    image: "https://source.unsplash.com/800x600/?networking",
    officialLink: "https://www.arista.com/en/products/cognitive-wifi",
    docLink: "https://www.arista.com/en/products/cognitive-wifi/docs",
    tutorialLink: "https://www.arista.com/en/products/cognitive-wifi/learning",
    githubLink: "N/A",
  },
  {
    id: 172,
    name: "Cisco DNA Center",
    category: [
      "Networking / Telecommunications",
      "Artificial Intelligence",
      "Cybersecurity",
      "Cloud Computing",
    ],
    whatItDoes:
      "AI-powered network management, automation, and assurance platform.",
    howToUse: [
      "Integrate network devices",
      "Enable AI analytics",
      "Monitor network health",
      "Automate configurations",
    ],
    techRelevance: [
      "Networking / Telecommunications",
      "AI",
      "Cybersecurity",
      "Cloud Computing",
    ],
    image: "https://source.unsplash.com/800x600/?network",
    officialLink:
      "https://www.cisco.com/c/en/us/products/cloud-systems-management/dna-center/index.html",
    docLink: "https://www.cisco.com/c/en/us/td/docs/dna-center/",
    tutorialLink:
      "https://www.cisco.com/c/en/us/td/docs/dna-center/tutorials.html",
    githubLink: "N/A",
  },
  {
    id: 173,
    name: "Juniper Mist AI",
    category: [
      "Networking / Telecommunications",
      "Artificial Intelligence",
      "Cloud Computing",
      "IoT",
    ],
    whatItDoes:
      "AI-driven network operations for wireless and wired networks with insights and anomaly detection.",
    howToUse: [
      "Connect network devices",
      "Enable Mist AI",
      "Monitor network",
      "Analyze insights",
    ],
    techRelevance: [
      "Networking / Telecommunications",
      "AI",
      "Cloud Computing",
      "IoT",
    ],
    image: "https://source.unsplash.com/800x600/?telecom",
    officialLink:
      "https://www.juniper.net/us/en/products-services/mist-ai.html",
    docLink: "https://www.juniper.net/documentation/mist-ai/",
    tutorialLink: "https://www.juniper.net/documentation/mist-ai/tutorials/",
    githubLink: "N/A",
  },
  {
    id: 174,
    name: "NetBrain",
    category: [
      "Networking / Telecommunications",
      "Artificial Intelligence",
      "Data Science",
    ],
    whatItDoes:
      "Network automation and mapping platform using AI for troubleshooting and insights.",
    howToUse: [
      "Discover network",
      "Generate network maps",
      "Enable AI analytics",
      "Resolve issues automatically",
    ],
    techRelevance: ["Networking / Telecommunications", "AI", "Data Science"],
    image: "https://source.unsplash.com/800x600/?network-map",
    officialLink: "https://www.netbraintech.com",
    docLink: "https://docs.netbraintech.com",
    tutorialLink: "https://www.netbraintech.com/learning",
    githubLink: "N/A",
  },
  {
    id: 175,
    name: "HPE Aruba ESP",
    category: [
      "Networking / Telecommunications",
      "Artificial Intelligence",
      "IoT",
      "Cloud Computing",
    ],
    whatItDoes:
      "AI-powered networking platform for automation, assurance, and security.",
    howToUse: [
      "Deploy Aruba devices",
      "Enable AI insights",
      "Monitor network health",
      "Optimize performance",
    ],
    techRelevance: [
      "Networking / Telecommunications",
      "AI",
      "IoT",
      "Cloud Computing",
    ],
    image: "https://source.unsplash.com/800x600/?aruba-network",
    officialLink: "https://www.arubanetworks.com/products/networking/esp/",
    docLink: "https://www.arubanetworks.com/techdocs/",
    tutorialLink: "https://www.arubanetworks.com/learning/",
    githubLink: "N/A",
  },
  {
    id: 176,
    name: "Extreme Networks ExtremeAI",
    category: [
      "Networking / Telecommunications",
      "Artificial Intelligence",
      "Cloud Computing",
      "Cybersecurity",
    ],
    whatItDoes:
      "AI-driven analytics platform for network operations and performance monitoring.",
    howToUse: [
      "Deploy network devices",
      "Enable ExtremeAI",
      "Collect metrics",
      "Generate insights",
    ],
    techRelevance: [
      "Networking / Telecommunications",
      "AI",
      "Cloud Computing",
      "Cybersecurity",
    ],
    image: "https://source.unsplash.com/800x600/?network-analytics",
    officialLink: "https://www.extremenetworks.com/products/extremeai/",
    docLink: "https://docs.extremenetworks.com/extremeai",
    tutorialLink: "https://www.extremenetworks.com/learning/extremeai/",
    githubLink: "N/A",
  },
  {
    id: 177,
    name: "Segrata",
    category: [
      "Networking / Telecommunications",
      "Artificial Intelligence",
      "Cybersecurity",
    ],
    whatItDoes:
      "AI-based security monitoring and threat detection for enterprise networks.",
    howToUse: [
      "Integrate with network",
      "Enable AI threat detection",
      "Monitor events",
      "Generate alerts",
    ],
    techRelevance: ["Networking / Telecommunications", "AI", "Cybersecurity"],
    image: "https://source.unsplash.com/800x600/?network-security",
    officialLink: "https://www.segrata.com",
    docLink: "https://docs.segrata.com",
    tutorialLink: "https://www.segrata.com/learning",
    githubLink: "N/A",
  },
  {
    id: 178,
    name: "ExtraHop",
    category: [
      "Networking / Telecommunications",
      "Artificial Intelligence",
      "Data Science",
      "Cybersecurity",
    ],
    whatItDoes:
      "AI-driven network detection and response platform to identify anomalies and threats.",
    howToUse: [
      "Connect network",
      "Enable AI monitoring",
      "Analyze traffic",
      "Respond to anomalies",
    ],
    techRelevance: [
      "Networking / Telecommunications",
      "AI",
      "Data Science",
      "Cybersecurity",
    ],
    image: "https://source.unsplash.com/800x600/?network-monitoring",
    officialLink: "https://www.extrahop.com",
    docLink: "https://docs.extrahop.com",
    tutorialLink: "https://www.extrahop.com/learning",
    githubLink: "N/A",
  },
  {
    id: 179,
    name: "Anuta Networks",
    category: [
      "Networking / Telecommunications",
      "Artificial Intelligence",
      "Automation & Control Systems",
    ],
    whatItDoes:
      "AI-powered network automation and orchestration platform for enterprise networks.",
    howToUse: [
      "Integrate network devices",
      "Configure workflows",
      "Enable AI automation",
      "Monitor performance",
    ],
    techRelevance: [
      "Networking / Telecommunications",
      "AI",
      "Automation & Control Systems",
    ],
    image: "https://source.unsplash.com/800x600/?network-automation",
    officialLink: "https://www.anutanetworks.com",
    docLink: "https://docs.anutanetworks.com",
    tutorialLink: "https://www.anutanetworks.com/learning",
    githubLink: "N/A",
  },
  {
    id: 180,
    name: "NetScout",
    category: [
      "Networking / Telecommunications",
      "Artificial Intelligence",
      "Data Science",
      "Cloud Computing",
    ],
    whatItDoes:
      "AI analytics platform for real-time network performance, anomaly detection, and monitoring.",
    howToUse: [
      "Connect network devices",
      "Enable AI analytics",
      "Monitor performance",
      "Analyze insights",
    ],
    techRelevance: [
      "Networking / Telecommunications",
      "AI",
      "Data Science",
      "Cloud Computing",
    ],
    image: "https://source.unsplash.com/800x600/?network-performance",
    officialLink: "https://www.netscout.com",
    docLink: "https://docs.netscout.com",
    tutorialLink: "https://www.netscout.com/learning",
    githubLink: "N/A",
  },
  {
    id: 181,
    name: "Buildots",
    category: [
      "Civil Engineering & Construction Technology",
      "Artificial Intelligence",
      "Automation & Control Systems",
    ],
    whatItDoes:
      "AI-powered construction site monitoring using computer vision and cameras to track progress.",
    howToUse: [
      "Install cameras on site",
      "Enable AI tracking",
      "Monitor construction progress",
      "Generate insights and reports",
    ],
    techRelevance: [
      "Civil Engineering & Construction Technology",
      "AI",
      "Automation & Control Systems",
    ],
    image: "https://source.unsplash.com/800x600/?construction-site",
    officialLink: "https://www.buildots.com",
    docLink: "https://www.buildots.com/docs",
    tutorialLink: "https://www.buildots.com/learning",
    githubLink: "N/A",
  },
  {
    id: 182,
    name: "OpenSpace AI",
    category: [
      "Civil Engineering & Construction Technology",
      "Artificial Intelligence",
      "Automation & Control Systems",
    ],
    whatItDoes:
      "AI solution for 360° photo documentation and construction site progress tracking.",
    howToUse: [
      "Capture 360° images",
      "Upload to OpenSpace",
      "AI analyzes progress",
      "Track project milestones",
    ],
    techRelevance: [
      "Civil Engineering & Construction Technology",
      "AI",
      "Automation & Control Systems",
    ],
    image: "https://source.unsplash.com/800x600/?construction-progress",
    officialLink: "https://www.openspace.ai",
    docLink: "https://www.openspace.ai/docs",
    tutorialLink: "https://www.openspace.ai/learn",
    githubLink: "N/A",
  },
  {
    id: 183,
    name: "Doxel AI",
    category: [
      "Civil Engineering & Construction Technology",
      "Artificial Intelligence",
      "Robotics",
    ],
    whatItDoes:
      "AI and robotics for automated construction progress tracking using LiDAR and cameras.",
    howToUse: [
      "Deploy robotic camera system",
      "Scan construction site",
      "AI analyzes data",
      "Generate progress reports",
    ],
    techRelevance: [
      "Civil Engineering & Construction Technology",
      "AI",
      "Robotics",
    ],
    image: "https://source.unsplash.com/800x600/?construction-robotics",
    officialLink: "https://www.doxel.ai",
    docLink: "https://www.doxel.ai/docs",
    tutorialLink: "https://www.doxel.ai/learning",
    githubLink: "N/A",
  },
  {
    id: 184,
    name: "Alice Technologies",
    category: [
      "Civil Engineering & Construction Technology",
      "Artificial Intelligence",
      "Data Science",
    ],
    whatItDoes:
      "AI-based construction planning software to optimize scheduling and resource allocation.",
    howToUse: [
      "Upload project plans",
      "Enable AI optimization",
      "Analyze schedule",
      "Adjust resources",
    ],
    techRelevance: [
      "Civil Engineering & Construction Technology",
      "AI",
      "Data Science",
    ],
    image: "https://source.unsplash.com/800x600/?construction-planning",
    officialLink: "https://www.alicetechnologies.com",
    docLink: "https://www.alicetechnologies.com/docs",
    tutorialLink: "https://www.alicetechnologies.com/learning",
    githubLink: "N/A",
  },
  {
    id: 185,
    name: "Smartvid.io",
    category: [
      "Civil Engineering & Construction Technology",
      "Artificial Intelligence",
      "Media & Entertainment Technology",
    ],
    whatItDoes:
      "AI platform for visual safety monitoring, risk detection, and progress tracking on construction sites.",
    howToUse: [
      "Upload site images/videos",
      "Enable AI analysis",
      "Detect safety issues",
      "Generate reports",
    ],
    techRelevance: [
      "Civil Engineering & Construction Technology",
      "AI",
      "Media & Entertainment Technology",
    ],
    image: "https://source.unsplash.com/800x600/?construction-safety",
    officialLink: "https://www.smartvid.io",
    docLink: "https://www.smartvid.io/docs",
    tutorialLink: "https://www.smartvid.io/learning",
    githubLink: "N/A",
  },
  {
    id: 186,
    name: "Venture AI",
    category: [
      "Civil Engineering & Construction Technology",
      "Artificial Intelligence",
      "Data Science",
    ],
    whatItDoes:
      "AI for predictive analytics in construction projects to prevent delays and cost overruns.",
    howToUse: [
      "Input project data",
      "Enable AI predictions",
      "Analyze forecasts",
      "Optimize project management",
    ],
    techRelevance: [
      "Civil Engineering & Construction Technology",
      "AI",
      "Data Science",
    ],
    image: "https://source.unsplash.com/800x600/?construction-forecast",
    officialLink: "https://www.venture.ai",
    docLink: "https://www.venture.ai/docs",
    tutorialLink: "https://www.venture.ai/learning",
    githubLink: "N/A",
  },
  {
    id: 187,
    name: "Versatile.ai",
    category: [
      "Civil Engineering & Construction Technology",
      "Artificial Intelligence",
      "Robotics",
    ],
    whatItDoes:
      "AI and robotics for automated site inspections, quality assurance, and progress tracking.",
    howToUse: [
      "Deploy AI drones/robots",
      "Scan construction site",
      "Analyze collected data",
      "Generate reports",
    ],
    techRelevance: [
      "Civil Engineering & Construction Technology",
      "AI",
      "Robotics",
    ],
    image: "https://source.unsplash.com/800x600/?construction-drone",
    officialLink: "https://www.versatile.ai",
    docLink: "https://www.versatile.ai/docs",
    tutorialLink: "https://www.versatile.ai/learning",
    githubLink: "N/A",
  },
  {
    id: 188,
    name: "Indus.ai",
    category: [
      "Civil Engineering & Construction Technology",
      "Artificial Intelligence",
      "Data Science",
      "Robotics",
    ],
    whatItDoes:
      "AI-powered construction monitoring platform using drones and computer vision for real-time insights.",
    howToUse: [
      "Deploy drones on site",
      "Enable AI monitoring",
      "Collect images/videos",
      "Generate analytics reports",
    ],
    techRelevance: [
      "Civil Engineering & Construction Technology",
      "AI",
      "Data Science",
      "Robotics",
    ],
    image: "https://source.unsplash.com/800x600/?construction-drone-survey",
    officialLink: "https://www.indus.ai",
    docLink: "https://www.indus.ai/docs",
    tutorialLink: "https://www.indus.ai/learning",
    githubLink: "N/A",
  },
  {
    id: 189,
    name: "Deepomatic",
    category: [
      "Civil Engineering & Construction Technology",
      "Artificial Intelligence",
      "Automation & Control Systems",
    ],
    whatItDoes:
      "AI computer vision platform for construction site automation, defect detection, and progress monitoring.",
    howToUse: [
      "Install cameras",
      "Enable AI analysis",
      "Detect defects",
      "Generate progress dashboards",
    ],
    techRelevance: [
      "Civil Engineering & Construction Technology",
      "AI",
      "Automation & Control Systems",
    ],
    image: "https://source.unsplash.com/800x600/?construction-automation",
    officialLink: "https://www.deepomatic.com",
    docLink: "https://www.deepomatic.com/docs",
    tutorialLink: "https://www.deepomatic.com/learning",
    githubLink: "N/A",
  },
  {
    id: 190,
    name: "Sablono",
    category: [
      "Civil Engineering & Construction Technology",
      "Artificial Intelligence",
      "Data Science",
      "Automation & Control Systems",
    ],
    whatItDoes:
      "AI-based project management and monitoring platform for construction with predictive analytics.",
    howToUse: [
      "Input project schedule",
      "Enable AI monitoring",
      "Analyze progress",
      "Optimize workflow",
    ],
    techRelevance: [
      "Civil Engineering & Construction Technology",
      "AI",
      "Data Science",
      "Automation & Control Systems",
    ],
    image: "https://source.unsplash.com/800x600/?construction-management",
    officialLink: "https://www.sablono.com",
    docLink: "https://www.sablono.com/docs",
    tutorialLink: "https://www.sablono.com/learning",
    githubLink: "N/A",
  },
  {
    id: 191,
    name: "AutoGrid",
    category: [
      "Energy / Sustainable Technology",
      "Artificial Intelligence",
      "Data Science",
    ],
    whatItDoes:
      "AI platform for energy management, grid optimization, and predictive analytics for utilities.",
    howToUse: [
      "Input energy data",
      "Enable AI predictions",
      "Analyze grid performance",
      "Optimize energy usage",
    ],
    techRelevance: [
      "Energy / Sustainable Technology",
      "Artificial Intelligence",
      "Data Science",
    ],
    image: "https://source.unsplash.com/800x600/?energy",
    officialLink: "https://www.auto-grid.com",
    docLink: "https://www.auto-grid.com/docs",
    tutorialLink: "https://www.auto-grid.com/learning",
    githubLink: "N/A",
  },
  {
    id: 192,
    name: "Uptake",
    category: [
      "Energy / Sustainable Technology",
      "Artificial Intelligence",
      "Machine Learning",
    ],
    whatItDoes:
      "AI-driven predictive maintenance and analytics for energy assets and sustainable operations.",
    howToUse: [
      "Upload asset data",
      "Enable AI analysis",
      "Monitor performance",
      "Generate maintenance insights",
    ],
    techRelevance: [
      "Energy / Sustainable Technology",
      "AI",
      "Machine Learning",
    ],
    image: "https://source.unsplash.com/800x600/?renewable-energy",
    officialLink: "https://www.uptake.com",
    docLink: "https://www.uptake.com/docs",
    tutorialLink: "https://www.uptake.com/learning",
    githubLink: "N/A",
  },
  {
    id: 193,
    name: "Verdigris",
    category: [
      "Energy / Sustainable Technology",
      "Artificial Intelligence",
      "IoT",
    ],
    whatItDoes:
      "AI platform for smart building energy management, consumption analytics, and efficiency optimization.",
    howToUse: [
      "Install IoT sensors",
      "Connect to Verdigris AI",
      "Analyze energy usage",
      "Optimize building performance",
    ],
    techRelevance: [
      "Energy / Sustainable Technology",
      "Artificial Intelligence",
      "IoT",
    ],
    image: "https://source.unsplash.com/800x600/?smart-building",
    officialLink: "https://www.verdigris.co",
    docLink: "https://www.verdigris.co/docs",
    tutorialLink: "https://www.verdigris.co/learning",
    githubLink: "N/A",
  },
  {
    id: 194,
    name: "Grid4C",
    category: [
      "Energy / Sustainable Technology",
      "Artificial Intelligence",
      "Data Science",
    ],
    whatItDoes:
      "AI-powered predictive analytics for energy consumption, load forecasting, and renewable integration.",
    howToUse: [
      "Input consumption data",
      "Enable AI forecasting",
      "Analyze results",
      "Optimize grid operation",
    ],
    techRelevance: ["Energy / Sustainable Technology", "AI", "Data Science"],
    image: "https://source.unsplash.com/800x600/?electric-grid",
    officialLink: "https://www.grid4c.com",
    docLink: "https://www.grid4c.com/docs",
    tutorialLink: "https://www.grid4c.com/learning",
    githubLink: "N/A",
  },
  {
    id: 195,
    name: "C3.ai Energy Management",
    category: [
      "Energy / Sustainable Technology",
      "Artificial Intelligence",
      "Cloud Computing",
    ],
    whatItDoes:
      "AI platform for energy efficiency, predictive analytics, and emission reduction strategies.",
    howToUse: [
      "Connect building/facility data",
      "Enable AI models",
      "Generate analytics",
      "Optimize energy consumption",
    ],
    techRelevance: ["Energy / Sustainable Technology", "AI", "Cloud Computing"],
    image: "https://source.unsplash.com/800x600/?energy-management",
    officialLink: "https://www.c3.ai/solutions/energy",
    docLink: "https://www.c3.ai/docs",
    tutorialLink: "https://www.c3.ai/learning",
    githubLink: "N/A",
  },
  {
    id: 196,
    name: "Sense",
    category: [
      "Energy / Sustainable Technology",
      "Artificial Intelligence",
      "IoT",
    ],
    whatItDoes:
      "AI and IoT platform to monitor and optimize residential and commercial energy usage.",
    howToUse: [
      "Install Sense monitor",
      "Connect to AI dashboard",
      "Analyze usage patterns",
      "Receive optimization suggestions",
    ],
    techRelevance: [
      "Energy / Sustainable Technology",
      "Artificial Intelligence",
      "IoT",
    ],
    image: "https://source.unsplash.com/800x600/?home-energy",
    officialLink: "https://sense.com",
    docLink: "https://sense.com/docs",
    tutorialLink: "https://sense.com/learning",
    githubLink: "N/A",
  },
  {
    id: 197,
    name: "Enel X",
    category: [
      "Energy / Sustainable Technology",
      "Artificial Intelligence",
      "Data Science",
    ],
    whatItDoes:
      "AI solutions for smart grids, energy storage, and predictive energy management.",
    howToUse: [
      "Connect facility/grid data",
      "Enable AI analysis",
      "Monitor energy flows",
      "Optimize performance",
    ],
    techRelevance: [
      "Energy / Sustainable Technology",
      "Artificial Intelligence",
      "Data Science",
    ],
    image: "https://source.unsplash.com/800x600/?renewable-energy-plant",
    officialLink: "https://www.enelx.com",
    docLink: "https://www.enelx.com/docs",
    tutorialLink: "https://www.enelx.com/learning",
    githubLink: "N/A",
  },
  {
    id: 198,
    name: "Verdant AI",
    category: [
      "Energy / Sustainable Technology",
      "Artificial Intelligence",
      "Machine Learning",
    ],
    whatItDoes:
      "AI platform for optimizing renewable energy generation and reducing carbon footprint.",
    howToUse: [
      "Upload generation data",
      "Enable AI optimization",
      "Analyze outputs",
      "Adjust operations",
    ],
    techRelevance: [
      "Energy / Sustainable Technology",
      "Artificial Intelligence",
      "Machine Learning",
    ],
    image: "https://source.unsplash.com/800x600/?solar-energy",
    officialLink: "https://www.verdant.ai",
    docLink: "https://www.verdant.ai/docs",
    tutorialLink: "https://www.verdant.ai/learning",
    githubLink: "N/A",
  },
  {
    id: 199,
    name: "Kahua",
    category: [
      "Energy / Sustainable Technology",
      "Artificial Intelligence",
      "Automation & Control Systems",
    ],
    whatItDoes:
      "AI platform for monitoring and optimizing energy operations and sustainability workflows.",
    howToUse: [
      "Connect facility data",
      "Enable AI monitoring",
      "Analyze results",
      "Generate reports",
    ],
    techRelevance: [
      "Energy / Sustainable Technology",
      "Artificial Intelligence",
      "Automation & Control Systems",
    ],
    image: "https://source.unsplash.com/800x600/?energy-optimization",
    officialLink: "https://www.kahua.com",
    docLink: "https://www.kahua.com/docs",
    tutorialLink: "https://www.kahua.com/learning",
    githubLink: "N/A",
  },
  {
    id: 200,
    name: "GridBright",
    category: [
      "Energy / Sustainable Technology",
      "Artificial Intelligence",
      "Data Science",
      "Cloud Computing",
    ],
    whatItDoes:
      "AI software for predictive maintenance, load balancing, and energy distribution optimization.",
    howToUse: [
      "Input grid data",
      "Enable AI models",
      "Analyze outputs",
      "Optimize energy flow",
    ],
    techRelevance: [
      "Energy / Sustainable Technology",
      "Artificial Intelligence",
      "Data Science",
      "Cloud Computing",
    ],
    image: "https://source.unsplash.com/800x600/?smart-grid",
    officialLink: "https://www.gridbright.com",
    docLink: "https://www.gridbright.com/docs",
    tutorialLink: "https://www.gridbright.com/learning",
    githubLink: "N/A",
  },
  {
    id: 220,
    name: "Waymo Driver AI",
    category: [
      "Transportation Technology",
      "Autonomous Vehicles",
      "Computer Vision",
      "AI",
    ],
    whatItDoes:
      "Self-driving car AI system for navigation, perception and real-time decision-making.",
    howToUse: [
      "Integrate vehicle sensors",
      "Load navigation dataset",
      "Enable self-driving mode",
      "Monitor AI decisions",
    ],
    techRelevance: ["Autonomous Driving", "Computer Vision", "Deep Learning"],
    image: "https://source.unsplash.com/800x600/?self-driving-car",
    officialLink: "https://waymo.com",
    docLink: "https://waymo.com/research",
    tutorialLink: "https://waymo.com/tech",
    githubLink: "N/A",
  },
  {
    id: 221,
    name: "Cruise Autonomous AI",
    category: ["Transportation Technology", "Autonomous Vehicles", "AI"],
    whatItDoes:
      "Urban mobility AI for autonomous ride-hailing and self-driving navigation.",
    howToUse: [
      "Connect to vehicle sensors",
      "Enable cruise mapping",
      "Run simulation mode",
      "Deploy autonomous mode",
    ],
    techRelevance: ["Autonomous Driving", "Urban Mobility", "AI"],
    image: "https://source.unsplash.com/800x600/?autonomous-car",
    officialLink: "https://getcruise.com",
    docLink: "https://getcruise.com/tech",
    tutorialLink: "https://getcruise.com/research",
    githubLink: "N/A",
  },
  {
    id: 222,
    name: "NVIDIA Drive",
    category: [
      "Transportation Technology",
      "AI Hardware",
      "Autonomous Vehicles",
    ],
    whatItDoes:
      "AI platform for perception, mapping, trajectory planning and self-driving simulation.",
    howToUse: [
      "Install Drive SDK",
      "Load training datasets",
      "Enable ADAS models",
      "Deploy on vehicle hardware",
    ],
    techRelevance: ["Autonomous Driving", "Edge AI", "Computer Vision"],
    image: "https://source.unsplash.com/800x600/?nvidia,car",
    officialLink: "https://www.nvidia.com/drive",
    docLink: "https://developer.nvidia.com/drive/documentation",
    tutorialLink: "https://developer.nvidia.com/drive/learn",
    githubLink: "https://github.com/NVIDIA",
  },
  {
    id: 223,
    name: "Tesla Autopilot AI",
    category: ["Transportation Technology", "ADAS", "Computer Vision"],
    whatItDoes:
      "AI-based driver assistance system with lane detection, smart navigation, and autopilot.",
    howToUse: [
      "Activate vehicle autopilot",
      "Monitor dashboard data",
      "Enable Full Self Driving Beta",
      "Review safety alerts",
    ],
    techRelevance: ["ADAS", "Autonomous Navigation", "Deep Learning"],
    image: "https://source.unsplash.com/800x600/?tesla,autopilot",
    officialLink: "https://www.tesla.com/autopilot",
    docLink: "https://www.tesla.com/support/autopilot",
    tutorialLink: "https://www.tesla.com/technology",
    githubLink: "N/A",
  },
  {
    id: 224,
    name: "Comma.ai OpenPilot",
    category: ["Transportation Technology", "ADAS", "Open Source AI"],
    whatItDoes:
      "Open-source ADAS AI providing lane-keeping, adaptive cruise, and vehicle automation.",
    howToUse: [
      "Install OpenPilot hardware",
      "Pair with supported cars",
      "Load firmware",
      "Enable ADAS mode",
    ],
    techRelevance: ["Open Source", "Self Driving", "ADAS"],
    image: "https://source.unsplash.com/800x600/?openpilot,car",
    officialLink: "https://comma.ai",
    docLink: "https://docs.comma.ai",
    tutorialLink: "https://comma.ai/setup",
    githubLink: "https://github.com/commaai",
  },
  {
    id: 225,
    name: "Uber Movement AI",
    category: ["Transportation Technology", "Traffic Analytics", "AI"],
    whatItDoes:
      "Traffic analysis AI for predicting congestion and optimizing urban transport routes.",
    howToUse: [
      "Upload traffic datasets",
      "Run route analysis",
      "Use prediction models",
      "Optimize traffic patterns",
    ],
    techRelevance: ["Traffic Optimization", "Predictive Analytics"],
    image: "https://source.unsplash.com/800x600/?traffic,city",
    officialLink: "https://movement.uber.com",
    docLink: "https://movement.uber.com/resources",
    tutorialLink: "https://movement.uber.com/learn",
    githubLink: "N/A",
  },
  {
    id: 226,
    name: "HERE Traffic AI",
    category: ["Transportation Technology", "Navigation", "AI"],
    whatItDoes:
      "Real-time traffic prediction and smart routing system for navigation apps.",
    howToUse: [
      "Integrate HERE API",
      "Enable traffic layers",
      "Run navigation models",
      "Analyze movement data",
    ],
    techRelevance: ["Navigation", "Smart City", "Traffic AI"],
    image: "https://source.unsplash.com/800x600/?navigation,map",
    officialLink: "https://www.here.com",
    docLink: "https://developer.here.com/documentation",
    tutorialLink: "https://developer.here.com/tutorials",
    githubLink: "https://github.com/heremaps",
  },
  {
    id: 227,
    name: "TransitFlow AI",
    category: ["Transportation Technology", "Public Transport", "AI"],
    whatItDoes:
      "AI system for optimizing bus, metro and public transport routes and schedules.",
    howToUse: [
      "Upload transport data",
      "Enable demand prediction",
      "Run route optimizer",
      "Deploy schedules",
    ],
    techRelevance: ["Smart Public Transport", "Urban Planning"],
    image: "https://source.unsplash.com/800x600/?public-transport",
    officialLink: "https://transitflow.ai",
    docLink: "https://transitflow.ai/docs",
    tutorialLink: "https://transitflow.ai/tutorials",
    githubLink: "N/A",
  },
  {
    id: 228,
    name: "Siemens Mobility AI",
    category: ["Transportation Technology", "Railway", "Automation"],
    whatItDoes:
      "AI for rail automation, traffic control, predictive maintenance, and smart mobility.",
    howToUse: [
      "Integrate rail data",
      "Enable predictive models",
      "Run smart routing",
      "Monitor IoT dashboards",
    ],
    techRelevance: ["Rail Automation", "Smart Cities", "IoT + AI"],
    image: "https://source.unsplash.com/800x600/?train,railway",
    officialLink: "https://www.mobility.siemens.com",
    docLink: "https://www.mobility.siemens.com/global/en/services.html",
    tutorialLink: "https://www.siemens.com/learning",
    githubLink: "N/A",
  },
  {
    id: 229,
    name: "Blue Yonder Luminate",
    category: ["Transportation Technology", "Logistics", "AI"],
    whatItDoes:
      "AI for logistics planning, route optimization, and transportation scheduling.",
    howToUse: [
      "Upload logistics data",
      "Run AI optimizer",
      "Improve delivery routes",
      "Monitor supply chain KPIs",
    ],
    techRelevance: ["Logistics", "Route Optimization", "AI Planning"],
    image: "https://source.unsplash.com/800x600/?logistics,truck",
    officialLink: "https://blueyonder.com",
    docLink: "https://docs.blueyonder.com",
    tutorialLink: "https://blueyonder.com/resources",
    githubLink: "N/A",
  },
  {
    id: 230,
    name: "Siemens MindSphere",
    category: [
      "Manufacturing / Industrial Technology",
      "IoT",
      "AI",
      "Cloud Computing",
    ],
    whatItDoes:
      "Industrial IoT platform for AI-driven analytics, predictive maintenance, and factory optimization.",
    howToUse: [
      "Connect industrial machines",
      "Upload sensor data",
      "Run AI analytics",
      "Monitor dashboards",
    ],
    techRelevance: ["Industrial IoT", "Predictive Maintenance", "AI Analytics"],
    image: "https://source.unsplash.com/800x600/?factory,iot",
    officialLink: "https://siemens.mindsphere.io",
    docLink: "https://documentation.mindsphere.io",
    tutorialLink: "https://siemens.mindsphere.io/en/resources",
    githubLink: "N/A",
  },
  {
    id: 231,
    name: "GE Predix",
    category: ["Manufacturing / Industrial Technology", "Industrial IoT", "AI"],
    whatItDoes:
      "AI platform for asset performance management, analytics, and industrial automation.",
    howToUse: [
      "Integrate machine data",
      "Enable predictive models",
      "Analyze equipment health",
      "Automate maintenance",
    ],
    techRelevance: ["Industrial AI", "Automation", "Predictive Analytics"],
    image: "https://source.unsplash.com/800x600/?industrial,machine",
    officialLink: "https://www.ge.com/digital/predix",
    docLink: "https://www.ge.com/digital/documentation",
    tutorialLink: "https://www.ge.com/digital/resources",
    githubLink: "N/A",
  },
  {
    id: 232,
    name: "IBM Maximo",
    category: [
      "Manufacturing / Industrial Technology",
      "Asset Management",
      "AI",
    ],
    whatItDoes:
      "AI-powered asset monitoring, predictive maintenance, and industrial automation.",
    howToUse: [
      "Connect assets",
      "Enable Maximo Monitor",
      "Analyze data",
      "Automate asset lifecycle",
    ],
    techRelevance: ["Asset Management", "Industrial AI"],
    image: "https://source.unsplash.com/800x600/?industrial,automation",
    officialLink: "https://www.ibm.com/products/maximo",
    docLink: "https://www.ibm.com/docs/en/maximo",
    tutorialLink: "https://www.ibm.com/training/maximo",
    githubLink: "N/A",
  },
  {
    id: 233,
    name: "Plex Smart Manufacturing Platform",
    category: ["Manufacturing / Industrial Technology", "AI", "Automation"],
    whatItDoes:
      "AI-driven MES (Manufacturing Execution System) for real-time production monitoring and automation.",
    howToUse: [
      "Connect production lines",
      "Monitor operations",
      "Run AI quality checks",
      "Optimize workflows",
    ],
    techRelevance: ["MES", "Smart Manufacturing", "Predictive AI"],
    image: "https://source.unsplash.com/800x600/?manufacturing,robotics",
    officialLink: "https://www.plex.com",
    docLink: "https://www.plex.com/resources",
    tutorialLink: "https://www.plex.com/learn",
    githubLink: "N/A",
  },
  {
    id: 234,
    name: "Tulip",
    category: ["Manufacturing / Industrial Technology", "IoT", "AI"],
    whatItDoes:
      "No-code industrial app builder with AI automation for production lines.",
    howToUse: [
      "Build workflows",
      "Integrate sensors",
      "Use AI widgets",
      "Deploy to factory floor",
    ],
    techRelevance: ["Industrial Automation", "IoT Apps"],
    image: "https://source.unsplash.com/800x600/?factory,workflow",
    officialLink: "https://tulip.co",
    docLink: "https://support.tulip.co",
    tutorialLink: "https://tulip.co/learn",
    githubLink: "N/A",
  },
  {
    id: 235,
    name: "Sight Machine",
    category: ["Manufacturing / Industrial Technology", "AI", "Data Analytics"],
    whatItDoes:
      "AI platform for real-time manufacturing analytics and productivity optimization.",
    howToUse: [
      "Connect machine data",
      "Enable real-time analytics",
      "Detect inefficiencies",
      "Optimize throughput",
    ],
    techRelevance: ["Manufacturing Analytics", "AI Optimization"],
    image: "https://source.unsplash.com/800x600/?machine,data",
    officialLink: "https://sightmachine.com",
    docLink: "https://sightmachine.com/resources",
    tutorialLink: "https://sightmachine.com/learn",
    githubLink: "N/A",
  },
  {
    id: 236,
    name: "Vanti AI",
    category: [
      "Manufacturing / Industrial Technology",
      "Quality Control",
      "AI",
    ],
    whatItDoes:
      "AI platform for manufacturing defect detection and no-code quality prediction models.",
    howToUse: [
      "Upload quality data",
      "Train AI model",
      "Detect defects",
      "Improve production",
    ],
    techRelevance: ["Quality Assurance", "Predictive Maintenance"],
    image: "https://source.unsplash.com/800x600/?quality-control,factory",
    officialLink: "https://www.vanti.ai",
    docLink: "https://www.vanti.ai/resources",
    tutorialLink: "https://www.vanti.ai/blog",
    githubLink: "N/A",
  },
  {
    id: 237,
    name: "Instrumental AI",
    category: [
      "Manufacturing / Industrial Technology",
      "Computer Vision",
      "AI",
    ],
    whatItDoes:
      "Uses AI and computer vision to detect product defects and analyze assembly issues.",
    howToUse: [
      "Install cameras",
      "Capture assembly line footage",
      "Run defect detection",
      "Analyze root causes",
    ],
    techRelevance: ["Computer Vision", "Quality Inspection"],
    image: "https://source.unsplash.com/800x600/?inspection,machine",
    officialLink: "https://instrumental.com",
    docLink: "https://instrumental.com/resources",
    tutorialLink: "https://instrumental.com/blog",
    githubLink: "N/A",
  },
  {
    id: 238,
    name: "Seebo Process AI",
    category: [
      "Manufacturing / Industrial Technology",
      "AI",
      "Process Optimization",
    ],
    whatItDoes:
      "AI for preventing production losses and optimizing industrial processes.",
    howToUse: [
      "Upload process data",
      "Enable AI models",
      "Identify root-cause issues",
      "Optimize processes",
    ],
    techRelevance: ["Process Optimization", "Industrial AI"],
    image: "https://source.unsplash.com/800x600/?industrial,process",
    officialLink: "https://www.seebo.com",
    docLink: "https://www.seebo.com/resources",
    tutorialLink: "https://www.seebo.com/learn",
    githubLink: "N/A",
  },
  {
    id: 239,
    name: "Automation Anywhere",
    category: ["Manufacturing / Industrial Technology", "RPA", "AI"],
    whatItDoes:
      "AI-powered robotic process automation for repetitive industrial and manufacturing tasks.",
    howToUse: [
      "Create automation bots",
      "Integrate workflows",
      "Enable AI decision-making",
      "Deploy to factory operations",
    ],
    techRelevance: ["RPA", "Industrial Automation", "AI Workflows"],
    image: "https://source.unsplash.com/800x600/?robotic,automation",
    officialLink: "https://www.automationanywhere.com",
    docLink: "https://docs.automationanywhere.com",
    tutorialLink: "https://university.automationanywhere.com",
    githubLink: "N/A",
  },
  {
    id: 240,
    name: "IBM Quantum",
    category: ["Quantum Computing", "Artificial Intelligence", "Data Science"],
    whatItDoes:
      "AI-assisted quantum computing platform for running quantum circuits on real quantum hardware.",
    howToUse: [
      "Create IBM Quantum account",
      "Build circuits with Qiskit",
      "Run on quantum simulator",
      "Deploy on real quantum devices",
    ],
    techRelevance: [
      "Quantum Computing",
      "Artificial Intelligence",
      "Machine Learning",
    ],
    image: "https://source.unsplash.com/800x600/?quantum,computer",
    officialLink: "https://quantum-computing.ibm.com",
    docLink: "https://docs.quantum.ibm.com",
    tutorialLink: "https://learning.quantum.ibm.com",
    githubLink: "https://github.com/Qiskit",
  },
  {
    id: 241,
    name: "Google Cirq",
    category: [
      "Quantum Computing",
      "Computer Science / Software Development",
      "Artificial Intelligence",
    ],
    whatItDoes:
      "Python framework for developing quantum algorithms and AI-enhanced quantum circuits.",
    howToUse: [
      "Install Cirq",
      "Build quantum circuits",
      "Simulate using Google tools",
      "Run experiments",
    ],
    techRelevance: ["Quantum Computing", "AI", "Software Development"],
    image: "https://source.unsplash.com/800x600/?google,quantum",
    officialLink: "https://quantumai.google/cirq",
    docLink: "https://quantumai.google/cirq/api",
    tutorialLink: "https://quantumai.google/cirq/tutorials",
    githubLink: "https://github.com/quantumlib/Cirq",
  },
  {
    id: 242,
    name: "Qiskit Machine Learning",
    category: [
      "Quantum Computing",
      "Machine Learning",
      "Artificial Intelligence",
    ],
    whatItDoes:
      "Quantum machine learning library that blends classical and quantum neural networks.",
    howToUse: [
      "Install Qiskit ML",
      "Load datasets",
      "Build QNN models",
      "Train and evaluate",
    ],
    techRelevance: ["Quantum ML", "AI", "Data Science"],
    image: "https://source.unsplash.com/800x600/?machine-learning,quantum",
    officialLink: "https://qiskit.org",
    docLink: "https://qiskit.org/documentation/machine-learning",
    tutorialLink: "https://qiskit.org/learn",
    githubLink: "https://github.com/Qiskit/qiskit-machine-learning",
  },
  {
    id: 243,
    name: "Xanadu PennyLane",
    category: [
      "Quantum Computing",
      "Machine Learning",
      "Artificial Intelligence",
    ],
    whatItDoes:
      "Hybrid quantum-classical ML framework for AI research & quantum deep learning.",
    howToUse: [
      "Install PennyLane",
      "Create hybrid models",
      "Train QML networks",
      "Run on simulators or hardware",
    ],
    techRelevance: ["Quantum ML", "AI", "Research"],
    image: "https://source.unsplash.com/800x600/?deep-learning,quantum",
    officialLink: "https://pennylane.ai",
    docLink: "https://docs.pennylane.ai",
    tutorialLink: "https://pennylane.ai/qml",
    githubLink: "https://github.com/PennyLaneAI/pennylane",
  },
  {
    id: 244,
    name: "Amazon Braket",
    category: [
      "Quantum Computing",
      "Cloud Computing",
      "Artificial Intelligence",
    ],
    whatItDoes:
      "Quantum computing service to build, simulate, and run quantum algorithms on AWS.",
    howToUse: [
      "Open AWS Braket",
      "Choose device",
      "Run circuits",
      "Analyze AI-based optimizations",
    ],
    techRelevance: ["Quantum Computing", "Cloud Computing", "AI"],
    image: "https://source.unsplash.com/800x600/?aws,quantum",
    officialLink: "https://aws.amazon.com/braket",
    docLink: "https://docs.aws.amazon.com/braket",
    tutorialLink: "https://aws.amazon.com/braket/resources",
    githubLink: "https://github.com/aws/amazon-braket-sdk-python",
  },
  {
    id: 245,
    name: "TensorFlow Quantum",
    category: [
      "Quantum Computing",
      "Machine Learning",
      "Artificial Intelligence",
    ],
    whatItDoes:
      "Quantum machine learning extension of TensorFlow for creating hybrid AI models.",
    howToUse: [
      "Install TFQ",
      "Build hybrid circuits",
      "Train AI models",
      "Run experiments",
    ],
    techRelevance: ["Quantum ML", "AI", "Deep Learning"],
    image: "https://source.unsplash.com/800x600/?tensorflow,quantum",
    officialLink: "https://www.tensorflow.org/quantum",
    docLink: "https://www.tensorflow.org/quantum/api_docs",
    tutorialLink: "https://www.tensorflow.org/quantum/tutorials",
    githubLink: "https://github.com/tensorflow/quantum",
  },
  {
    id: 246,
    name: "D-Wave Leap",
    category: ["Quantum Computing", "Optimization", "Artificial Intelligence"],
    whatItDoes:
      "Quantum annealer platform for optimization, routing, scheduling, and AI problem-solving.",
    howToUse: [
      "Create account",
      "Use Ocean SDK",
      "Submit QUBO problems",
      "Analyze AI solutions",
    ],
    techRelevance: ["Quantum Optimization", "AI", "Operations Research"],
    image: "https://source.unsplash.com/800x600/?quantum,annealing",
    officialLink: "https://cloud.dwavesys.com",
    docLink: "https://docs.dwavesys.com",
    tutorialLink: "https://cloud.dwavesys.com/learn",
    githubLink: "https://github.com/dwavesystems",
  },
  {
    id: 247,
    name: "Zapata Orquestra",
    category: [
      "Quantum Computing",
      "Automation & Control Systems",
      "Artificial Intelligence",
    ],
    whatItDoes:
      "Enterprise AI + Quantum workflow platform for simulation and optimization.",
    howToUse: [
      "Design workflow",
      "Choose quantum backend",
      "Run simulations",
      "Optimize AI output",
    ],
    techRelevance: ["Quantum Simulation", "AI", "Industrial Optimization"],
    image: "https://source.unsplash.com/800x600/?workflow,quantum",
    officialLink: "https://www.zapatacomputing.com",
    docLink: "https://www.zapatacomputing.com/platform",
    tutorialLink: "N/A",
    githubLink: "N/A",
  },
  {
    id: 248,
    name: "Rigetti Forest",
    category: [
      "Quantum Computing",
      "Software Development",
      "Artificial Intelligence",
    ],
    whatItDoes:
      "Quantum SDK for running AI-driven circuits on Rigetti quantum processors.",
    howToUse: [
      "Install pyQuil",
      "Write QASM programs",
      "Run on QVM",
      "Deploy on QPU",
    ],
    techRelevance: ["Quantum Computing", "AI", "Software Engineering"],
    image: "https://source.unsplash.com/800x600/?rigetti,quantum",
    officialLink: "https://www.rigetti.com",
    docLink: "https://docs.rigetti.com",
    tutorialLink: "https://qcs.rigetti.com",
    githubLink: "https://github.com/rigetti/pyquil",
  },
  {
    id: 249,
    name: "Classiq",
    category: [
      "Quantum Computing",
      "Artificial Intelligence",
      "Automation & Control Systems",
    ],
    whatItDoes:
      "AI-driven quantum circuit synthesis platform that automatically designs optimized quantum programs.",
    howToUse: [
      "Define problem",
      "Generate circuit via AI",
      "Optimize",
      "Run on quantum backend",
    ],
    techRelevance: ["Quantum Automation", "AI", "Optimization"],
    image: "https://source.unsplash.com/800x600/?quantum,circuit",
    officialLink: "https://www.classiq.io",
    docLink: "https://docs.classiq.io",
    tutorialLink: "https://university.classiq.io",
    githubLink: "N/A",
  },
];
