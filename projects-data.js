// This file contains all your project data
// To add new projects, simply add new objects to the appropriate array

const codingProjects = [
  {
    title: "Audio Transforms",
    description:
      "A powerful audio processing toolkit for transformations and manipulations of audio files.",
    technologies: ["DSP", "JavaScript", "HTML/CSS"],
    siteUrl: "https://audio-transforms.netlify.app",
    githubUrl: "https://github.com/christopherkumar/audio-transforms",
  },
  {
    title: "Audible Time to Percentage",
    description:
      "Convert Audible audiobook timestamps into percentage progress for easy tracking.",
    technologies: ["JavaScript", "HTML/CSS"],
    siteUrl: "https://audible-time-to-percentage.netlify.app",
    githubUrl: "https://github.com/christopherkumar/audible_time-to-percentage",
  },
  {
    title: "CV Terminal Website",
    description:
      "Interactive terminal-style portfolio website with command-line interface navigation.",
    technologies: ["HTML/CSS", "JavaScript", "Terminal UI"],
    siteUrl: "https://christopherkumar.netlify.app",
    githubUrl: "https://github.com/christopherkumar/cv-terminalWebsite",
  },
  // Add more coding projects here following the same structure
];

const researchProjects = [
  {
    title: "Effect of Camera Model and Camera Settings in Image Classification",
    technologies: ["PyTorch", "Python", "MATLAB"],
    description:
      "Investigation into how different camera models and settings impact machine learning image classification accuracy and performance.",
    paperUrl:
      "https://drive.google.com/file/d/1EebltMSemESHyryEF65LBV-ht4Ff9U0w/view",
    githubUrl: null, // Set to null if no GitHub repo
  },
  {
    title:
      "The Grading Capabilities of Large Language Models: A Comparative Study of OpenAI and Ollama",
    technologies: ["LLM", "OpenAI", "HuggingFace", "Ollama", "Python"],
    description:
      "Comparative analysis of LLM performance in automated grading across Python programming and short answer assessments using different rubrics. Developed with a custom prompt engineering test framework.",
    paperUrl:
      "https://drive.google.com/file/d/1SM_kGf_Xn0rDWYnz6JT5i9v6w1HTkGaa/view",
    githubUrl: "https://github.com/christopherkumar/prompt_engineering_test",
    githubLabel: "View Framework on GitHub", // Optional custom label
  },
  {
    title: "RAG Evaluation",
    technologies: ["LLM", "RAG", "NLP", "Python"],
    description:
      "Comprehensive evaluation methodology and metrics for assessing Retrieval-Augmented Generation systems in various applications.",
    paperUrl:
      "https://drive.google.com/file/d/1JAXUuQq4u81rpQDBn9JNBb98mEz8RrmO/view",
    githubUrl: "https://github.com/christopherkumar/RAG-evaluation",
  },
  // Add more research projects here following the same structure
];
