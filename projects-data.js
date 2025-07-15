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
  // {
  //   title: "Contextual AI Chatbot with Vector Database",
  //   description:
  //     "AI-powered chatbot using vector embeddings and a retrieval-augmented model to store and retrieve contextual conversation history. Implemented memory-efficient summarisation and persistent time-stamped logging for continuous, relevant interactions across multiple sessions.",
  //   technologies: ["Python", "Ollama", "Vector Database", "RAG"],
  //   siteUrl: null,
  //   githubUrl: null, // Update with actual GitHub URL if available
  // },
  // {
  //   title: "AUSLAN Letter Recognition",
  //   description:
  //     "Developing a project using OpenCV and TensorFlow to identify and classify AUSLAN letters through real-time image recognition and machine learning techniques. Aimed at improving accessibility for the deaf and hard-of-hearing community.",
  //   technologies: ["Python", "TensorFlow", "OpenCV", "Computer Vision"],
  //   siteUrl: null,
  //   githubUrl: null, // Update with actual GitHub URL if available
  // },
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

const workExperience = [
  {
    title: "Junior AI Software Engineer",
    company: "",
    duration: "July 2025 - Present",
    description:
      "",
    technologies: ["Python"],
  },
  {
    title: "Software Engineering Intern",
    company: "Aubot",
    duration: "March 2025 - Present",
    description:
      "Stress-tested coding exercises to evaluate the robustness of the learning platform. Diagnosed and reported bugs, content gaps, and usability issues to improve overall platform quality and user experience.",
    technologies: ["Python", "Testing", "Quality Assurance", "User Experience"],
  },
  {
    title: "AI/LLM Engineering Intern",
    company: "University of Southern Queensland",
    duration: "March 2024 - June 2024",
    description:
      "Improved grading efficiency and accuracy by leveraging Large Language Models (LLMs) and prompt engineering for Python scripts and short-answer assessments. Optimised Retrieval-Augmented Generation (RAG) workflows to enhance performance in practical AI applications.",
    technologies: [
      "Python",
      "OpenAI",
      "Ollama",
      "HuggingFace",
      "RAG",
      "Prompt Engineering",
    ],
  },
  {
    title: "Data Annotator",
    company: "Centre for Agricultural Engineering, USQ",
    duration: "October 2021 - March 2022",
    description:
      "Annotated image data to support machine vision models for weed identification. Enhanced labelling software by improving the GUI and implementing additional annotation tools. Maintained high annotation quality through effective team collaboration and review processes.",
    technologies: [
      "Computer Vision",
      "Python",
      "Data Labeling",
      "GUI Development",
    ],
  },
  {
    title: "Volunteer / Youth Leader",
    company: "Vinnies SENSE",
    duration: "April 2019 - October 2020",
    description:
      "Led monthly hangouts for children who had transitioned from the Vinnies Buddies program. Created a fun, supportive space where kids felt comfortable opening up and building trust. Acted as a point of contact for any concerns, escalating issues to supervisors as needed for follow-up.",
    technologies: [
      "Leadership",
      "Mentoring",
      "Community Service",
      "Youth Development",
    ],
  },
  {
    title: "Barista / Cafe Worker",
    company: "Bounce Hub Cafe",
    duration: "October 2018 - March 2022",
    description:
      "Provided friendly and efficient customer service while managing point-of-sale (POS) transactions. Assisted with food preparation and inventory replenishment to support smooth daily operations. Maintained high standards of speed and quality during peak service periods.",
    technologies: ["Customer Service", "POS Systems", "Team Collaboration"],
  },
  // Add more work experience here
];

const education = [
  {
    degree: "Bachelor of Engineering (Honours), Computer Systems",
    institution: "University of Southern Queensland",
    duration: "2019 - 2023",
    description:
      "Comprehensive foundation in computer systems engineering with focus on machine learning, computer vision, and software development. Completed honours research project on the effect of camera models and settings on image classification accuracy.",
    highlights: [
      "Honours Research: Effect of Camera Model and Camera Settings on Image Classification",
      "Engineers Australia, Graduate Member",
      "Strong focus on AI/ML applications and embedded systems",
    ],
  },
  {
    degree: "Foundation Science Programme",
    institution: "The University of the South Pacific",
    duration: "2018",
    description:
      "Completed foundational studies in mathematics, physics, chemistry, and computing science. Prepared for advanced engineering studies with strong emphasis on analytical and problem-solving skills.",
    highlights: [
      "Mathematics and Physics focus",
      "Computer Science fundamentals",
      "Academic preparation for engineering degree",
    ],
  },
  {
    degree: "Year 12 Certificate",
    institution: "Mahatma Gandhi Memorial High School",
    duration: "2017",
    description:
      "Completed secondary education in Suva, Fiji with strong academic performance in STEM subjects. Participated in various extracurricular activities and developed leadership skills.",
    highlights: [
      "Strong performance in Mathematics and Sciences",
      "Active participation in school activities",
      "Foundation for engineering studies",
    ],
  },
  // Add more education entries here
];
