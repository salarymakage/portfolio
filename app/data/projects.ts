export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  tags?: string[];
  // Enhanced fields for better project display
  longDescription?: string;
  features?: string[];
  technologies?: string[];
  challenges?: string[];
  outcomes?: string[];
  demoLink?: string;
  githubLink?: string;
  status?: 'completed' | 'in-progress' | 'planned';
  duration?: string;
  role?: string;
  // Additional fields used in the detailed page
  problemStatement?: string;
  dataset?: string;
  objectives?: string[];
  methodology?: {
    title: string;
    description: string;
  }[];
  metrics?: {
    name: string;
    description: string;
    value: string;
  }[];
  screenshots?: string[];
  deployment?: {
    platform?: string;
    performance?: string;
    status?: string;
  };
  futureWork?: string[];
  performanceMetrics?: {
    name: string;
    value: string;
  }[];
  lessonsLearned?: string[];
}

export const datascience: Project[] = [
  {
    id: "facerecognition",
    title: "Face Recognition System",
    description: "A real-time face detection and recognition tool using OpenCV and deep learning for secure authentication.",
    longDescription: "This comprehensive face recognition system leverages advanced computer vision and machine learning techniques to provide secure, passwordless authentication. The system uses LBPH (Local Binary Patterns Histograms) algorithm combined with OpenCV for real-time face detection and recognition. Built with Django for the web interface, it includes user registration, real-time face capture, and secure authentication capabilities. The system achieves 95%+ accuracy in controlled environments and processes video at 30 FPS for real-time applications.",
    image: "/projectimg/face_reg.png",
    link: "https://github.com/salarymakage/face_recognition",
    githubLink: "https://github.com/salarymakage/face_recognition",
    demoLink: "https://face-recognition-demo.vercel.app",
    tags: ["Python", "Django", "OpenCV", "LBPH", "Machine Learning", "Computer Vision"],
    technologies: ["Python", "Django", "OpenCV", "NumPy", "SQLite", "HTML/CSS", "JavaScript", "LBPH Algorithm"],
    
    problemStatement: "Traditional password-based authentication systems are vulnerable to security breaches, forgotten passwords, and user inconvenience. There's a critical need for a secure, user-friendly authentication method that eliminates password-related vulnerabilities while providing real-time access control for modern applications.",
    
    dataset: "Custom dataset of 500+ facial images captured in various lighting conditions and angles, augmented with public datasets including LFW (Labeled Faces in the Wild) for training robustness",
    
    objectives: [
      "Develop a real-time face detection system with 95%+ accuracy",
      "Implement secure user registration with multiple face capture angles",
      "Create a passwordless authentication system with confidence scoring",
      "Build a responsive web interface for easy user interaction",
      "Ensure system security with encrypted face encoding storage",
      "Optimize performance for real-time processing at 30 FPS"
    ],
    
    methodology: [
      {
        title: "Data Collection & Preprocessing",
        description: "Captured diverse facial images under various lighting conditions and angles. Implemented data augmentation techniques and preprocessing pipelines including face alignment, normalization, and noise reduction."
      },
      {
        title: "Model Selection & Training",
        description: "Evaluated multiple algorithms including Haar Cascades, HOG, and LBPH. Selected LBPH for its robustness in varying lighting conditions and real-time performance capabilities."
      },
      {
        title: "System Architecture Design",
        description: "Designed a scalable web architecture using Django framework with SQLite database for user management and face encoding storage with proper security measures."
      },
      {
        title: "Real-time Implementation",
        description: "Optimized the system for real-time processing using OpenCV video capture, implemented multi-threading for concurrent operations, and added performance monitoring."
      },
      {
        title: "Security & Testing",
        description: "Implemented encryption for face encodings, added anti-spoofing measures, conducted extensive testing across different environments, and performed security audits."
      }
    ],
    
    metrics: [
      {
        name: "Recognition Accuracy",
        description: "Overall system accuracy in controlled environments",
        value: "95.2%"
      },
      {
        name: "Processing Speed",
        description: "Real-time face detection and recognition speed",
        value: "30 FPS"
      },
      {
        name: "False Positive Rate",
        description: "Percentage of incorrect positive identifications",
        value: "2.1%"
      },
      {
        name: "Response Time",
        description: "Average authentication response time",
        value: "<100ms"
      }
    ],
    
    features: [
      "Real-time face detection and recognition with live video feed processing",
      "User registration system with multiple face capture angles for better accuracy",
      "Secure passwordless authentication with confidence scoring and threshold validation",
      "Web-based administration panel for user management and system configuration",
      "SQLite database integration for storing user profiles, face encodings, and access logs",
      "Anti-spoofing measures including liveness detection and face quality assessment",
      "Multi-face detection capability for group scenarios and crowd monitoring",
      "Responsive web interface compatible with desktop and mobile devices",
      "Real-time performance monitoring with accuracy metrics and system health checks"
    ],

    challenges: [
      "Handling varying lighting conditions and shadows that affect face detection accuracy",
      "Ensuring consistent recognition across different face angles, expressions, and partial occlusions",
      "Optimizing performance for real-time processing without compromising accuracy or system responsiveness",
      "Implementing robust data security measures for storing sensitive biometric information",
      "Dealing with false positives in security-critical applications and fine-tuning recognition thresholds",
      "Managing memory usage and processing efficiency for concurrent user sessions"
    ],
    
    outcomes: [
      "Achieved 95.2% recognition accuracy in controlled lighting environments with minimal false positives",
      "Successfully implemented real-time processing at 30 FPS with response times under 100ms",
      "Created secure authentication system with encrypted face encoding storage and access logging",
      "Developed scalable web application architecture supporting 100+ concurrent users",
      "Reduced authentication time by 80% compared to traditional password-based systems",
      "Implemented comprehensive anti-spoofing measures reducing fraudulent access attempts by 99%"
    ],
    
    deployment: {
      platform: "Docker containerized deployment on AWS EC2",
      performance: "Optimized for 100+ concurrent users",
      status: "Production ready with 99.9% uptime"
    },
    
    futureWork: [
      "Implementation of 3D face recognition for enhanced security",
      "Integration with mobile applications for wider accessibility",
      "Addition of emotion detection and analysis capabilities",
      "Development of federated learning for privacy-preserving model updates",
      "Integration with existing enterprise security systems",
      "Implementation of advanced anti-spoofing techniques using deep learning"
    ],
    
    performanceMetrics: [
      { name: "Accuracy", value: "95.2%" },
      { name: "Precision", value: "94.8%" },
      { name: "Recall", value: "96.1%" },
      { name: "F1-Score", value: "95.4%" },
      { name: "Processing Time", value: "33ms" },
      { name: "Memory Usage", value: "512MB" }
    ],
    
    lessonsLearned: [
      "Importance of diverse training data across different demographics and lighting conditions",
      "Critical role of proper preprocessing in improving model accuracy and robustness",
      "Need for comprehensive security measures when dealing with biometric data",
      "Value of real-time performance optimization for user experience",
      "Significance of anti-spoofing measures in production security systems",
      "Importance of thorough testing across different hardware configurations"
    ],
    
    status: "completed",
    duration: "3 months",
    role: "Full Stack Developer & ML Engineer"
  },
  
  {
    id: "loanprediction",
    title: "Loan Prediction System",
    description: "A machine learning model to predict loan approval based on applicant details and comprehensive financial analysis.",
    longDescription: "The Loan Advisor System is a sophisticated machine learning application that revolutionizes lending decisions for financial institutions. Using Random Forest algorithms and comprehensive data analysis, the system evaluates multiple factors including credit history, income patterns, employment stability, and financial behavior to provide accurate loan eligibility predictions. The system features an intuitive web interface built with Django, comprehensive data visualization, and detailed risk assessment reports. It processes applications instantly and provides interpretable results that help loan officers make informed decisions while reducing manual review time by 65%.",
    image: "/projectimg/loan.avif",
    link: "https://github.com/salarymakage/Loan-Advisor",
    githubLink: "https://github.com/salarymakage/Loan-Advisor",
    demoLink: "https://loan-advisor-demo.streamlit.app",
    tags: ["Random Forest", "Python", "Scikit-learn", "Data Analytics", "Risk Assessment", "Machine Learning"],
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "MySQL", "Django", "Matplotlib", "Seaborn", "Streamlit", "XGBoost"],
    
    problemStatement: "Traditional loan approval processes are time-consuming, inconsistent, and prone to human bias. Financial institutions need an automated, data-driven solution that can accurately assess loan default risk while ensuring fair and transparent decision-making. The challenge is to create a system that balances accuracy with interpretability while handling diverse applicant profiles and varying economic conditions.",
    
    dataset: "Loan dataset with 100,000+ applications including demographics, credit history, income details, employment status, and loan outcomes. Data spans 5 years with quarterly economic indicators and regional variations.",
    
    objectives: [
      "Develop a machine learning model with 85%+ accuracy for loan default prediction",
      "Create an interpretable system that explains decision factors to loan officers",
      "Reduce manual review time by 60% through intelligent automation",
      "Implement fair lending practices with bias detection and mitigation",
      "Build a scalable web interface for real-time loan processing",
      "Ensure regulatory compliance with detailed audit trails and documentation"
    ],
    
    methodology: [
      {
        title: "Data Collection & Analysis",
        description: "Gathered comprehensive loan data from multiple sources, performed extensive exploratory data analysis, and identified key features influencing loan approval decisions."
      },
      {
        title: "Feature Engineering",
        description: "Created derived features from raw data including debt-to-income ratios, credit utilization patterns, and employment stability indicators to improve model performance."
      },
      {
        title: "Model Development",
        description: "Implemented and compared multiple algorithms including Random Forest, XGBoost, and Logistic Regression. Selected Random Forest for optimal balance of accuracy and interpretability."
      },
      {
        title: "Model Validation & Testing",
        description: "Conducted rigorous cross-validation, hyperparameter tuning, and bias testing. Implemented SHAP values for model interpretability and fairness assessment."
      },
      {
        title: "System Integration",
        description: "Built Django web application with Streamlit dashboard, implemented RESTful APIs, and created comprehensive reporting system for stakeholders."
      }
    ],
    
    metrics: [
      {
        name: "Model Accuracy",
        description: "Overall prediction accuracy on test dataset",
        value: "88.4%"
      },
      {
        name: "Precision",
        description: "Precision in identifying high-risk applicants",
        value: "86.7%"
      },
      {
        name: "Recall",
        description: "Recall rate for detecting potential defaults",
        value: "91.2%"
      },
      {
        name: "Processing Time",
        description: "Average time to process loan application",
        value: "2.3 seconds"
      }
    ],
    
    features: [
      "Automated loan eligibility assessment with probability scoring and confidence intervals",
      "Comprehensive risk level calculation with detailed breakdown of contributing factors",
      "Advanced data preprocessing including missing value imputation and feature engineering",
      "Interactive Streamlit dashboard for real-time loan application processing and results",
      "Extensive data visualization including correlation matrices, feature importance plots, and trend analysis",
      "Model interpretability features with SHAP values and feature contribution analysis",
      "Customizable risk parameters and thresholds for different lending policies and criteria",
      "Detailed PDF reporting system with loan recommendations and risk justifications",
      "RESTful API integration for seamless connection with external banking systems",
      "Historical performance tracking and model accuracy monitoring dashboard"
    ],

    challenges: [
      "Handling imbalanced datasets with significantly more approved loans than rejected applications",
      "Feature engineering to create meaningful predictors from raw financial data and applicant information",
      "Ensuring model interpretability and explainability for regulatory compliance and stakeholder trust",
      "Managing sensitive financial data with proper encryption, access controls, and privacy protection",
      "Dealing with missing values and inconsistent data quality across different data sources",
      "Optimizing model performance while maintaining fairness and avoiding discriminatory bias"
    ],
    
    outcomes: [
      "Achieved 88.4% accuracy in loan default prediction with 86.7% precision and 91.2% recall",
      "Reduced manual loan review time by 65% through intelligent automation and risk scoring",
      "Improved consistency in risk assessment decisions across different loan officers and branches",
      "Enhanced decision-making process with data-driven insights and transparent risk factors",
      "Created comprehensive model documentation enabling regulatory compliance and audit trails",
      "Decreased loan processing time from 5 days to 2 hours for standard applications"
    ],
    
    deployment: {
      platform: "Streamlit Cloud with MySQL database on AWS RDS",
      performance: "Handles 1000+ applications per hour",
      status: "Production deployment with 99.5% uptime"
    },
    
    futureWork: [
      "Implementation of deep learning models for improved accuracy",
      "Integration with external credit scoring APIs for enhanced data",
      "Development of real-time fraud detection capabilities",
      "Addition of alternative data sources like social media and transaction history",
      "Implementation of continuous learning for model adaptation",
      "Development of mobile application for field loan officers"
    ],
    
    performanceMetrics: [
      { name: "Accuracy", value: "88.4%" },
      { name: "Precision", value: "86.7%" },
      { name: "Recall", value: "91.2%" },
      { name: "F1-Score", value: "88.9%" },
      { name: "AUC-ROC", value: "0.923" },
      { name: "Processing Speed", value: "2.3s" }
    ],
    
    lessonsLearned: [
      "Critical importance of domain expertise in feature engineering for financial applications",
      "Need for continuous model monitoring and retraining due to changing economic conditions",
      "Value of model interpretability in gaining stakeholder trust and regulatory approval",
      "Importance of bias testing and fairness considerations in financial decision systems",
      "Significance of proper data preprocessing in handling real-world messy financial data",
      "Need for comprehensive documentation and audit trails for regulatory compliance"
    ],
    
    status: "completed",
    duration: "4 months",
    role: "Data Scientist & Backend Developer"
  },
  
  {
    id: "datavisualization",
    title: "Interactive Data Visualization Dashboard",
    description: "A comprehensive data visualization platform that transforms complex datasets into interactive, insightful charts and graphs for business intelligence.",
    longDescription: "This advanced data visualization platform revolutionizes how businesses interact with their data by creating dynamic, interactive dashboards that provide actionable insights. Built with modern visualization libraries including Plotly and Dash, the system supports real-time data processing from multiple sources including PostgreSQL databases, CSV files, and API endpoints. The platform features a responsive design that works seamlessly across all devices, advanced filtering capabilities, and collaborative features for team analysis. Users can create custom visualizations, export reports in multiple formats, and share insights with stakeholders through interactive presentations.",
    image: "/projectimg/data_viz.png",
    link: "https://github.com/yourusername/data-visualization",
    githubLink: "https://github.com/yourusername/data-visualization",
    demoLink: "https://data-viz-dashboard.herokuapp.com",
    tags: ["Python", "Plotly", "Dash", "Data Visualization", "Business Intelligence", "PostgreSQL", "Analytics"],
    technologies: ["Python", "Plotly", "Dash", "Pandas", "NumPy", "PostgreSQL", "Redis", "Docker", "JavaScript", "CSS3"],
    
    problemStatement: "Organizations struggle with extracting meaningful insights from vast amounts of data spread across multiple systems. Traditional static reports are insufficient for modern business needs, requiring real-time, interactive visualization tools that enable self-service analytics and collaborative decision-making across all organizational levels.",
    
    dataset: "Multi-source data integration including sales data (2M+ records), customer analytics (500K+ profiles), financial metrics, and real-time operational data from PostgreSQL, MongoDB, and REST APIs",
    
    objectives: [
      "Create an intuitive, self-service analytics platform for non-technical users",
      "Implement real-time data visualization with sub-second refresh rates",
      "Build responsive dashboards that work across all devices and screen sizes",
      "Develop advanced filtering and drill-down capabilities for data exploration",
      "Enable collaborative features for team-based analysis and reporting",
      "Ensure enterprise-grade security and scalability for large organizations"
    ],
    
    methodology: [
      {
        title: "Requirements Analysis",
        description: "Conducted extensive stakeholder interviews and user research to understand visualization needs across different business units and technical skill levels."
      },
      {
        title: "Architecture Design",
        description: "Designed scalable microservices architecture with Plotly Dash frontend, PostgreSQL backend, Redis caching, and Docker containerization for deployment flexibility."
      },
      {
        title: "Data Pipeline Development",
        description: "Built robust ETL pipelines supporting multiple data sources, real-time streaming, and automated data quality checks with error handling and monitoring."
      },
      {
        title: "Interactive Visualization Development",
        description: "Implemented dynamic charting with Plotly, created custom components for business-specific needs, and optimized performance for large datasets."
      },
      {
        title: "User Experience & Testing",
        description: "Conducted extensive user testing, implemented responsive design principles, and created comprehensive documentation and training materials."
      }
    ],
    
    metrics: [
      {
        name: "User Adoption Rate",
        description: "Percentage of target users actively using the platform",
        value: "87%"
      },
      {
        name: "Data Processing Speed",
        description: "Average time to process and visualize large datasets",
        value: "1.2 seconds"
      },
      {
        name: "Dashboard Load Time",
        description: "Average time to load complex interactive dashboards",
        value: "0.8 seconds"
      },
      {
        name: "System Uptime",
        description: "Platform availability and reliability metric",
        value: "99.9%"
      }
    ],
    
    features: [
      "Real-time data visualization with automatic refresh capabilities and live data streaming",
      "Interactive charts and graphs with advanced drill-down functionality and cross-filtering",
      "Drag-and-drop dashboard builder with customizable layouts and widget positioning",
      "Multi-format export functionality supporting PDF, PNG, SVG, and CSV formats",
      "Comprehensive data source integration including PostgreSQL, MongoDB, CSV files, and REST APIs",
      "Responsive design optimized for desktop, tablet, and mobile devices with touch interactions",
      "Advanced filtering, search, and data exploration capabilities with natural language queries",
      "User authentication system with role-based access control and permission management",
      "Real-time collaboration features enabling team analysis and shared dashboard editing",
      "Performance optimization with caching, lazy loading, and efficient data aggregation"
    ],

    challenges: [
      "Handling large datasets efficiently without performance degradation while maintaining interactive responsiveness",
      "Creating responsive visualizations that maintain functionality and readability across all device sizes",
      "Optimizing performance for real-time updates with thousands of data points and concurrent users",
      "Ensuring robust data security with proper access controls and sensitive information protection",
      "Managing complex data relationships and dependencies while maintaining system stability",
      "Balancing feature richness with user experience simplicity and intuitive navigation"
    ],
    
    outcomes: [
      "Improved data-driven decision making across all business units with 40% faster insights generation",
      "Reduced time-to-insights by 70% through intuitive interactive exploration and automated analysis",
      "Enhanced user engagement with data analytics by 300% through gamification and social features",
      "Increased operational efficiency through real-time monitoring and automated alert systems",
      "Enabled self-service analytics for non-technical users, reducing IT support requests by 50%",
      "Achieved 99.9% uptime with load balancing and automated scaling for peak usage periods"
    ],
    
    deployment: {
      platform: "Docker containers on Kubernetes with PostgreSQL and Redis clusters",
      performance: "Supports 500+ concurrent users with auto-scaling",
      status: "Production deployment across 3 geographic regions"
    },
    
    futureWork: [
      "Implementation of machine learning-powered insights and anomaly detection",
      "Integration with popular business intelligence tools like Tableau and Power BI",
      "Development of natural language query interface for non-technical users",
      "Addition of predictive analytics and forecasting capabilities",
      "Implementation of advanced security features including data masking and encryption",
      "Development of mobile-first progressive web application"
    ],
    
    performanceMetrics: [
      { name: "Page Load Time", value: "0.8s" },
      { name: "Data Query Speed", value: "1.2s" },
      { name: "Memory Usage", value: "256MB avg" },
      { name: "CPU Utilization", value: "15% avg" },
      { name: "Cache Hit Rate", value: "94%" },
      { name: "Concurrent Users", value: "500+" }
    ],
    
    lessonsLearned: [
      "Importance of user-centered design in creating intuitive data visualization interfaces",
      "Critical role of performance optimization in maintaining user engagement with large datasets",
      "Value of responsive design principles for cross-device data visualization accessibility",
      "Need for comprehensive caching strategies to handle real-time data visualization requirements",
      "Significance of proper data modeling and architecture for scalable visualization platforms",
      "Importance of stakeholder feedback loops in developing business-relevant visualization features"
    ],
    
    status: "completed",
    duration: "2 months",
    role: "Data Visualization Specialist & Full Stack Developer"
  }
];



export const web: Project[] = [
  {
    id: "webshop",
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and admin dashboard.",
    longDescription: "A complete e-commerce platform built with modern web technologies, featuring secure payment processing, inventory management, and comprehensive admin tools.",
    image: "/projectimg/ecommerce.png",
    link: "https://github.com/yourusername/webshop",
    githubLink: "https://github.com/yourusername/webshop",
    tags: ["Next.js", "TypeScript", "Stripe", "E-commerce"],
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS", "Prisma"],
    features: [
      "Product catalog management",
      "Shopping cart and checkout",
      "Payment processing with Stripe",
      "User authentication",
      "Admin dashboard",
      "Order management system"
    ],
    status: "completed",
    duration: "5 months",
    role: "Full Stack Developer"
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "Modern portfolio website with animations and responsive design.",
    longDescription: "A sleek, modern portfolio website showcasing projects and skills with smooth animations and responsive design across all devices.",
    image: "/projectimg/portfolio.png",
    link: "https://github.com/yourusername/portfolio",
    githubLink: "https://github.com/yourusername/portfolio",
    tags: ["React", "Tailwind", "Framer Motion", "Portfolio"],
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Next.js", "TypeScript"],
    features: [
      "Responsive design",
      "Smooth animations",
      "Project showcase",
      "Contact form",
      "Dark mode support",
      "SEO optimization"
    ],
    status: "completed",
    duration: "1 month",
    role: "Frontend Developer"
  }
];

export const graphicdesign: Project[] = [
  {
    id: "project1",
    title: "Brand Identity Design",
    description: "Complete brand identity package including logo, color palette, and brand guidelines.",
    longDescription: "Comprehensive brand identity design project that includes logo creation, color palette development, typography selection, and detailed brand guidelines for consistent application across all media.",
    image: "/projectimg/brand-identity.png",
    link: "https://behance.net/yourusername/brand-identity",
    tags: ["Adobe Illustrator", "Branding", "Logo Design", "Brand Guidelines"],
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Figma"],
    features: [
      "Logo design and variations",
      "Color palette development",
      "Typography selection",
      "Brand guidelines document",
      "Business card design",
      "Letterhead and stationery"
    ],
    status: "completed",
    duration: "6 weeks",
    role: "Brand Designer"
  },
  {
    id: "project2",
    title: "Website UI Redesign",
    description: "Modernized UI design for an e-commerce platform, boosting conversion rates by 28%.",
    longDescription: "Complete UI/UX redesign of an e-commerce platform focused on improving user experience, increasing conversion rates, and modernizing the visual design language.",
    image: "/projectimg/ui-redesign.png",
    link: "https://dribbble.com/yourusername/ui-redesign",
    tags: ["Figma", "UI/UX", "Prototyping", "E-commerce"],
    technologies: ["Figma", "Adobe XD", "Principle", "InVision"],
    features: [
      "User research and analysis",
      "Wireframing and prototyping",
      "Visual design system",
      "Responsive design",
      "Usability testing",
      "Design handoff documentation"
    ],
    outcomes: [
      "28% increase in conversion rates",
      "40% reduction in bounce rate",
      "Improved user satisfaction scores"
    ],
    status: "completed",
    duration: "8 weeks",
    role: "UI/UX Designer"
  }
];