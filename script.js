// Function to create coding project cards
function createCodingProjectCard(project) {
  const techTags = project.technologies
    .map((tech) => `<span class="tech-tag">${tech}</span>`)
    .join("");

  return `
        <div class="project-card">
            <h2 class="project-title">${project.title}</h2>
            <p class="project-description">${project.description}</p>
            <div class="tech-stack">${techTags}</div>
            <div class="project-links">
                <a href="${project.siteUrl}" target="_blank" class="project-link">
                    Visit Site
                    <svg fill="currentColor" viewBox="0 0 20 20" style="width: 18px; height: 18px;">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                    </svg>
                </a>
                <a href="${project.githubUrl}" target="_blank" class="project-link">
                    View on GitHub
                    <svg fill="currentColor" viewBox="0 0 20 20" style="width: 18px; height: 18px;">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                    </svg>
                </a>
            </div>
        </div>
    `;
}

// Function to create research project cards
function createResearchProjectCard(project) {
  let links = `
        <a href="${project.paperUrl}" target="_blank" class="research-link">
            View Paper 
            <svg fill="currentColor" viewBox="0 0 20 20" style="width: 18px; height: 18px;">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
            </svg>
        </a>
    `;

  if (project.githubUrl) {
    const githubLabel = project.githubLabel || "View on GitHub";
    links += `
            <a href="${project.githubUrl}" target="_blank" class="research-link">
                ${githubLabel} 
                <svg fill="currentColor" viewBox="0 0 20 20" style="width: 18px; height: 18px;">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                </svg>
            </a>
        `;
  }

  return `
        <div class="research-card">
            <h2 class="research-title">${project.title}</h2>
            <span class="research-type">${project.type}</span>
            <p class="project-description">${project.description}</p>
            <div class="research-links">${links}</div>
        </div>
    `;
}

// Render all projects
function renderProjects() {
  // Render coding projects
  const codingContainer = document.getElementById("coding-projects-container");
  codingContainer.innerHTML = codingProjects
    .map((project) => createCodingProjectCard(project))
    .join("");

  // Render research projects
  const researchContainer = document.getElementById(
    "research-projects-container"
  );
  researchContainer.innerHTML = researchProjects
    .map((project) => createResearchProjectCard(project))
    .join("");
}

// Tab switching functionality
function switchTab(tabId, button) {
  // Remove active class from all tabs and buttons
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.classList.remove("active");
  });
  document.querySelectorAll(".tab-button").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Add active class to selected tab and button
  document.getElementById(tabId).classList.add("active");
  button.classList.add("active");

  // Move the indicator
  updateIndicatorPosition(button);
}

// Update indicator position
function updateIndicatorPosition(activeButton) {
  const indicator = document.getElementById("tabIndicator");
  const navRect = activeButton.parentElement.getBoundingClientRect();
  const buttonRect = activeButton.getBoundingClientRect();

  indicator.style.width = `${buttonRect.width}px`;
  indicator.style.left = `${buttonRect.left - navRect.left}px`;
}

// Initialize on page load
window.addEventListener("load", () => {
  // Render all projects
  renderProjects();

  // Initialize indicator position
  const activeButton = document.querySelector(".tab-button.active");
  if (activeButton) {
    updateIndicatorPosition(activeButton);
  }
});

// Make switchTab globally accessible
window.switchTab = switchTab;
