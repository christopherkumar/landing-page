// This file contains all your project data
// To add new projects, simply add new objects to the appropriate array

const codingProjects = [
  {
    title: "Audio Transforms",
    description:
      "Powerful audio processing toolkit for real-time transformations and manipulations. Features DSP algorithms for filtering, effects, and spectral analysis of audio files.",
    technologies: ["DSP", "JavaScript", "HTML/CSS"],
    siteUrl: "https://audio-transforms.netlify.app",
    githubUrl: "https://github.com/christopherkumar/audio-transforms",
  },
  {
    title: "Audible Time to Percentage",
    description:
      "Convert Audible audiobook timestamps into percentage progress for easy tracking. Simple tool that calculates reading progress and remaining time from chapter timestamps.",
    technologies: ["JavaScript", "HTML/CSS"],
    siteUrl: "https://audible-time-to-percentage.netlify.app",
    githubUrl: "https://github.com/christopherkumar/audible_time-to-percentage",
  },
  {
    title: "CV Terminal Website",
    description:
      "Interactive terminal-style portfolio website with command-line interface navigation. Type commands to explore projects, skills, and experience in a unique developer-friendly way.",
    technologies: ["HTML/CSS", "JavaScript", "Terminal UI"],
    siteUrl: "https://christopherkumar.netlify.app",
    githubUrl: "https://github.com/christopherkumar/cv-terminalWebsite",
  },
  {
    title: "Simple Ollama Chatbot",
    description:
      "Lightweight chatbot interface for Ollama language models with clean UI and local LLM support. Built for developers to quickly prototype and test LLM applications locally.",
    technologies: ["Python", "Ollama", "LLM"],
    siteUrl: null, // No deployed site
    githubUrl: "https://github.com/christopherkumar/simple-ollama-chatbot",
  },
  // Add more coding projects here following the same structure
];

const researchProjects = [
  {
    title: "Camera Hardware Impact on ML Classification",
    technologies: ["PyTorch", "Python", "MATLAB"],
    description:
      "Investigation into how camera hardware and settings impact ML image classification accuracy. Analyzed various camera models to identify key factors affecting model performance.",
    paperUrl:
      "https://drive.google.com/file/d/1EebltMSemESHyryEF65LBV-ht4Ff9U0w/view",
    githubUrl: null, // Set to null if no GitHub repo
  },
  {
    title: "LLM Automated Grading Performance Study",
    technologies: ["LLM", "OpenAI", "HuggingFace", "Ollama"],
    description:
      "Comparative analysis of LLM performance in automated grading across Python programming and short answer assessments using different rubrics. Developed with a custom prompt engineering framework.",
    paperUrl:
      "https://drive.google.com/file/d/1SM_kGf_Xn0rDWYnz6JT5i9v6w1HTkGaa/view",
    githubUrl: "https://github.com/christopherkumar/prompt_engineering_test",
    githubLabel: "View on GitHub", // Optional custom label
  },
  {
    title: "Applied RAG Framework Evaluation",
    technologies: ["LLM", "RAG", "NLP", "Python"],
    description:
      "Comprehensive evaluation methodology and metrics for assessing RAG systems in various applications. Developed benchmarks for measuring retrieval quality and generation accuracy.",
    paperUrl:
      "https://drive.google.com/file/d/1JAXUuQq4u81rpQDBn9JNBb98mEz8RrmO/view",
    githubUrl: "https://github.com/christopherkumar/RAG-evaluation",
  },
  // Add more research projects here following the same structure
];
