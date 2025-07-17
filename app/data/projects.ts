export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
}

export const datascience: Project[] = [
  {
    
    id: "facerecognition",
    title: "Face Recognition App",
    description: "A web app for face recognition using machine learning.",
    image: "/projectimg/face_reg.png",
    link: "https://github.com/yourusername/face-recognition-app"
  },
  {
    id: "loanprediction",
    title: "Loan Prediction",
    description: "A data science project to predict loan approvals.",
    image: "/projectimg/loan.avif",
    link: "https://github.com/yourusername/loan-prediction"
  },
  {
    id: "project2",
    title: "Sample Project 1",
    description: "This is a placeholder project to enable /datascience/project1.",
    image: "/projectimg/face_reg.png",
    link: "https://github.com/yourusername/project1"
  }
];

export const web: Project[] = [
  {
    id: "webshop",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution.",
    image: "/projectimg/face_reg.png",
    link: "https://github.com/yourusername/webshop"
  }
];

export const graphicdesign: Project[] = [
  {
    id: "brandidentity",
    title: "Brand Identity Design",
    description: "A complete brand identity package.",
    image: "/projectimg/face_reg.png",
    link: "https://github.com/yourusername/brandidentity"
  }
]; 