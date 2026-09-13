export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  year: number;
  status: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  screenshots?: string[];
  features?: string[];
}

export const projects: Project[] = [
  {
    id: "diabetes-prediction",
    title: "Diabetes Prediction",
    description: "ML model to predict diabetes using patient health records (PIMA Indian dataset). Implemented using Scikit-learn with rigorous EDA and feature engineering.",
    category: "ML / Data Science",
    technologies: ["Python", "Pandas", "Scikit-Learn"],
    year: 2025,
    status: "Completed",
    githubUrl: "https://github.com/saravana5632/Diabetes_Prediction",
    liveUrl: "",
    image: "",
    screenshots: [],
    features: [
      "Analyzed PIMA Indian dataset with extensive Exploratory Data Analysis (EDA)",
      "Engineered features to improve model prediction accuracy",
      "Trained and evaluated multiple models using Scikit-learn"
    ]
  },
  {
    id: "ipl-score-forecasting",
    title: "IPL Score Forecasting",
    description: "Predictive model for IPL match scores using historical player and team data. Features real-time score estimation based on match progress.",
    category: "ML / Data Science",
    technologies: ["Python", "Machine Learning", "Data Analysis"],
    year: 2025,
    status: "Completed",
    githubUrl: "https://github.com/saravana5632/IPL_win_prediction",
    liveUrl: "",
    image: "",
    screenshots: [],
  },
  {
    id: "breast-cancer-prediction",
    title: "Breast Cancer Prediction",
    description: "ML model to predict likelihood of breast cancer using hospital datasets. Achieved high accuracy with ensemble methods.",
    category: "ML / Data Science",
    technologies: ["Python", "Scikit-Learn", "Medical AI"],
    year: 2025,
    status: "Completed",
    githubUrl: "https://github.com/saravana5632/Breast-Cancer-Prediction",
    liveUrl: "",
    image: "",
    screenshots: [],
  },
  {
    id: "employee-attrition-prediction",
    title: "Employee Attrition Prediction & Dashboard",
    description: "Developed a machine learning model to predict employee attrition using historical HR data. Built an interactive dashboard to visualize key factors influencing employee turnover.",
    category: "Data Analytics",
    technologies: ["Machine Learning", "Data Analysis", "Dashboard", "Python"],
    year: 2025,
    status: "Completed",
    githubUrl: "https://github.com/saravana5632/Employee_Attrition_Prediction",
    liveUrl: "https://employee-attrition-analysis-one.vercel.app/",
    image: "",
    screenshots: [],
  },
  {
    id: "uniflow-erp",
    title: "UniFlow ERP System",
    description: "A full-stack ERP web application to manage organizational workflows and data efficiently.",
    category: "Web Development",
    technologies: ["Full-Stack", "ERP", "React", "Node.js"],
    year: 2025,
    status: "Completed",
    githubUrl: "https://github.com/saravana5632/UniFlow-ERP",
    liveUrl: "https://uni-flow-erp.vercel.app/",
    image: "",
    screenshots: [],
  },
  {
    id: "loan-eligibility-prediction",
    title: "Loan Eligibility Prediction",
    description: "Machine learning model to automate the loan eligibility process based on customer detail provided while filling online application form.",
    category: "ML / Data Science",
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
    year: 2025,
    status: "Completed",
    githubUrl: "https://github.com/saravana5632/Loan-Eligibility-prediction",
    liveUrl: "",
  },
  {
    id: "ai-health-care",
    title: "AI Health Care",
    description: "An AI-driven healthcare solution repository focused on leveraging modern technologies for health analysis and tracking.",
    category: "ML / Data Science",
    technologies: ["Python", "AI", "Healthcare"],
    year: 2025,
    status: "Completed",
    githubUrl: "https://github.com/saravana5632/ai-health-care",
    liveUrl: "",
  },
  {
    id: "ecomind",
    title: "EcoMind",
    description: "A project aimed at building eco-friendly solutions and tracking environmental impact via an intuitive web interface.",
    category: "Web Development",
    technologies: ["React", "Web App"],
    year: 2025,
    status: "In Progress",
    githubUrl: "https://github.com/saravana5632/EcoMind",
    liveUrl: "",
  },
  {
    id: "traffic-intelligence",
    title: "Traffic Intelligence",
    description: "A data-driven project focused on analyzing and predicting traffic patterns for smart city routing.",
    category: "ML / Data Science",
    technologies: ["Python", "Data Analysis", "Predictive Modeling"],
    year: 2025,
    status: "Completed",
    githubUrl: "https://github.com/saravana5632/Traffic-intelligence",
    liveUrl: "",
  },
  {
    id: "campusai-student-companion",
    title: "CampusAI Student Companion",
    description: "An AI assistant and utility hub designed to help students manage their schedules, notes, and academic activities on campus.",
    category: "Web Development",
    technologies: ["AI", "React", "Student Utility"],
    year: 2025,
    status: "Completed",
    githubUrl: "https://github.com/saravana5632/campusai-student-companion",
    liveUrl: "",
  }
];
