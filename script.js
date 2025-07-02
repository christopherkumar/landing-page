// Function to create coding project cards
function createCodingProjectCard(project) {
  const techTags = project.technologies
    .map((tech) => `<span class="tech-tag">${tech}</span>`)
    .join("");

  let links = "";

  // Only add Visit Site link if siteUrl exists
  if (project.siteUrl) {
    links += `
      <a href="${project.siteUrl}" target="_blank" class="project-link">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
          Visit Site
      </a>
    `;
  }

  // Always add GitHub link
  links += `
      <a href="${project.githubUrl}" target="_blank" class="project-link">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View on GitHub
      </a>
  `;

  return `
        <div class="project-card">
            <div class="title-section">
                <h2 class="project-title">${project.title}</h2>
            </div>
            <div class="description-section">
                <p class="project-description">${project.description}</p>
            </div>
            <div class="tags-section">
                <div class="tech-stack">${techTags}</div>
            </div>
            <div class="links-section">
                <div class="project-links">${links}</div>
            </div>
        </div>
    `;
}

// Function to create research project cards
function createResearchProjectCard(project) {
  const techTags = project.technologies
    .map((tech) => `<span class="tech-tag">${tech}</span>`)
    .join("");

  let links = `
        <a href="${project.paperUrl}" target="_blank" class="research-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            View Paper
        </a>
    `;

  if (project.githubUrl) {
    const githubLabel = project.githubLabel || "View on GitHub";
    links += `
            <a href="${project.githubUrl}" target="_blank" class="research-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                ${githubLabel}
            </a>
        `;
  }

  return `
        <div class="research-card">
            <div class="title-section">
                <h2 class="research-title">${project.title}</h2>
            </div>
            <div class="description-section">
                <p class="project-description">${project.description}</p>
            </div>
            <div class="tags-section">
                <div class="tech-stack">${techTags}</div>
            </div>
            <div class="links-section">
                <div class="research-links">${links}</div>
            </div>
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

  // Force indicator initialization with multiple attempts
  const forceInitialize = () => {
    const success = initializeIndicator();

    if (!success) {
      // If failed, try again
      setTimeout(forceInitialize, 200);
    }
  };

  // Try multiple initialization strategies
  forceInitialize();
  setTimeout(forceInitialize, 100);
  setTimeout(forceInitialize, 500);
  setTimeout(forceInitialize, 1000);
});

// Also try on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    initializeIndicator();
  }, 100);
});

// Also initialize immediately if DOM is already loaded
if (
  document.readyState === "complete" ||
  document.readyState === "interactive"
) {
  setTimeout(() => {
    initializeIndicator();
  }, 100);
}

// Final fallback - initialize after everything is settled
setTimeout(() => {
  const activeButton = document.querySelector(".tab-button.active");
  if (activeButton) {
    updateIndicatorPosition(activeButton);
  }
}, 2000);

// Also check after fonts are loaded (important for button sizing)
if ("fonts" in document) {
  document.fonts.ready.then(() => {
    const activeButton = document.querySelector(".tab-button.active");
    if (activeButton) {
      updateIndicatorPosition(activeButton);
    }
  });
}

// MutationObserver as ultimate fallback for dynamic content
const observer = new MutationObserver(() => {
  const activeButton = document.querySelector(".tab-button.active");
  const indicator = document.getElementById("tabIndicator");

  // Only update if indicator doesn't have inline styles yet
  if (activeButton && indicator && !indicator.style.width) {
    updateIndicatorPosition(activeButton);
  }
});

// Start observing after a delay
setTimeout(() => {
  const nav = document.querySelector(".tab-nav");
  if (nav) {
    observer.observe(nav, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"],
    });

    // Disconnect after 5 seconds to prevent performance issues
    setTimeout(() => observer.disconnect(), 5000);
  }
}, 500);

// Emergency fallback for stubborn mobile browsers
window.addEventListener(
  "touchstart",
  () => {
    const indicator = document.getElementById("tabIndicator");
    if (indicator && !indicator.hasAttribute("data-initialized")) {
      const activeButton = document.querySelector(".tab-button.active");
      if (activeButton) {
        updateIndicatorPosition(activeButton);
        indicator.setAttribute("data-initialized", "true");
      }
    }
  },
  { once: true, passive: true }
);

// Handle font loading which can affect button sizes
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(() => {
    setTimeout(() => {
      const activeButton = document.querySelector(".tab-button.active");
      if (activeButton) {
        updateIndicatorPosition(activeButton);
      }
    }, 100);
  });
}

// Update indicator on window resize
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    const activeButton = document.querySelector(".tab-button.active");
    if (activeButton) {
      updateIndicatorPosition(activeButton);
    }
  }, 100);
});

// Also update on orientation change for mobile
window.addEventListener("orientationchange", () => {
  setTimeout(() => {
    const activeButton = document.querySelector(".tab-button.active");
    if (activeButton) {
      updateIndicatorPosition(activeButton);
    }
  }, 300); // Delay to ensure layout has updated
});

// Handle viewport changes on mobile (when browser UI shows/hides)
let viewportHeight = window.innerHeight;
window.addEventListener("scroll", () => {
  if (window.innerHeight !== viewportHeight) {
    viewportHeight = window.innerHeight;
    const activeButton = document.querySelector(".tab-button.active");
    if (activeButton) {
      updateIndicatorPosition(activeButton);
    }
  }
});

// Use VisualViewport API if available for better mobile support
if ("visualViewport" in window) {
  window.visualViewport.addEventListener("resize", () => {
    const activeButton = document.querySelector(".tab-button.active");
    if (activeButton) {
      updateIndicatorPosition(activeButton);
    }
  });
}

// Additional mobile browser fix: recalculate on first touch/click
let hasInteracted = false;
document.addEventListener(
  "touchstart",
  () => {
    if (!hasInteracted) {
      hasInteracted = true;
      setTimeout(() => {
        const activeButton = document.querySelector(".tab-button.active");
        if (activeButton) {
          updateIndicatorPosition(activeButton);
        }
      }, 100);
    }
  },
  { once: true }
);

// Recalculate when page becomes visible (tab switching on mobile)
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    setTimeout(() => {
      const activeButton = document.querySelector(".tab-button.active");
      if (activeButton) {
        updateIndicatorPosition(activeButton);
      }
    }, 100);
  }
});

// Also handle window focus for better mobile support
window.addEventListener("focus", () => {
  setTimeout(() => {
    const activeButton = document.querySelector(".tab-button.active");
    if (activeButton) {
      updateIndicatorPosition(activeButton);
    }
  }, 100);
});

// Debug helper: triple-tap anywhere to force indicator recalculation
let tapCount = 0;
let tapTimer;
document.addEventListener("touchstart", (e) => {
  tapCount++;
  clearTimeout(tapTimer);

  if (tapCount === 3) {
    // Force recalculation and log debug info
    const activeButton = document.querySelector(".tab-button.active");
    const indicator = document.getElementById("tabIndicator");
    const nav = document.querySelector(".tab-nav");

    console.log("Debug - Active button:", activeButton);
    console.log("Debug - Indicator:", indicator);
    console.log("Debug - Nav:", nav);

    if (activeButton) {
      updateIndicatorPosition(activeButton);

      // Log computed styles
      if (indicator) {
        console.log("Debug - Indicator styles:", {
          width: indicator.style.width,
          left: indicator.style.left,
          opacity: window.getComputedStyle(indicator).opacity,
        });
      }
    }

    tapCount = 0;
  }

  tapTimer = setTimeout(() => {
    tapCount = 0;
  }, 500);
});

// Make switchTab globally accessible
window.switchTab = switchTab;
