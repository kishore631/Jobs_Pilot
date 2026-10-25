/*
  JOBS PILOT — JOB LISTINGS

  The entries below are examples, not verified live vacancies.
  Replace them with confirmed jobs and official application URLs.
*/

const jobs = [
  {
    company: "HackerRank",
    initials: "HR",
    role: "Intern — Off-Campus Hiring Drive",
    location: "Bengaluru, India",
    category: "Internships",
    url: "https://job-boards.greenhouse.io/hackerrank/jobs/8229735",
  },
  {
    company: "Tata Consultancy Services",
    initials: "TCS",
    role: "Entry-Level IT Opportunities",
    location: "India",
    category: "Freshers",
    url: "https://www.tcs.com/careers",
  },
  {
    company: "Infosys",
    initials: "IN",
    role: "Systems Engineer",
    location: "India",
    category: "IT Jobs",
    url: "https://www.infosys.com/careers/",
  },
  {
    company: "Accenture",
    initials: "AC",
    role: "Application Development",
    location: "India",
    category: "IT Jobs",
    url: "https://www.accenture.com/in-en/careers",
  },
  {
    company: "Wipro",
    initials: "WI",
    role: "IT Support Opportunities",
    location: "India",
    category: "Freshers",
    url: "https://careers.wipro.com/",
  },
  {
    company: "Microsoft",
    initials: "MS",
    role: "Student and Graduate Roles",
    location: "India",
    category: "Internships",
    url: "https://careers.microsoft.com/",
  },
  {
    company: "IBM",
    initials: "IBM",
    role: "Early Professional Roles",
    location: "India",
    category: "Work From Home",
    url: "https://www.ibm.com/careers",
  },
];

// HTML elements
const jobList = document.getElementById("jobList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const locationFilter = document.getElementById("locationFilter");
const emptyState = document.getElementById("emptyState");
const jobCount = document.getElementById("jobCount");
const clearFilters = document.getElementById("clearFilters");

// Escape text before inserting it into HTML
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

// Only allow HTTP or HTTPS application URLs
function safeURL(value) {
  try {
    const parsedURL = new URL(value);

    if (parsedURL.protocol === "https:" || parsedURL.protocol === "http:") {
      return parsedURL.href;
    }
  } catch (error) {
    // Invalid URL
  }

  return "";
}

// Populate the location dropdown automatically
function populateLocations() {
  const locations = [...new Set(jobs.map((job) => job.location))].sort();

  locations.forEach((location) => {
    const option = document.createElement("option");

    option.value = location;
    option.textContent = location;

    locationFilter.appendChild(option);
  });
}

// Render matching jobs
function renderJobs() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  const selectedCategory = categoryFilter.value;
  const selectedLocation = locationFilter.value;

  const filteredJobs = jobs.filter((job) => {
    const searchableText = [job.company, job.role, job.location, job.category]
      .join(" ")
      .toLowerCase();

    const matchesSearch = searchableText.includes(searchTerm);

    const matchesCategory =
      selectedCategory === "all" || job.category === selectedCategory;

    const matchesLocation =
      selectedLocation === "all" || job.location === selectedLocation;

    return matchesSearch && matchesCategory && matchesLocation;
  });

  jobCount.textContent = jobs.length;

  jobList.innerHTML = filteredJobs
    .map((job, index) => {
      const applicationURL = safeURL(job.url);

      const applyButton = applicationURL
        ? `<a class="apply-btn"
              href="${escapeHTML(applicationURL)}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit ${escapeHTML(job.company)} careers page">
              Apply Now <span aria-hidden="true">↗</span>
           </a>`
        : `<span class="apply-btn">Link unavailable</span>`;

      return `
        <article class="job-row">
          <div class="company-cell">
            <div class="company-logo color-${index % 5}">
              ${escapeHTML(job.initials)}
            </div>

            <div>
              <div class="job-title">
                ${escapeHTML(job.role)}
              </div>

              <div class="company-name">
                ${escapeHTML(job.company)}
              </div>
            </div>
          </div>

          <div>
            <span class="category-tag">
              ${escapeHTML(job.category)}
            </span>
          </div>

          <div class="location">
            <span aria-hidden="true">⌖</span>
            ${escapeHTML(job.location)}
          </div>

          ${applyButton}
        </article>
      `;
    })
    .join("");

  emptyState.hidden = filteredJobs.length !== 0;
}

// Search as the user types
searchInput.addEventListener("input", renderJobs);

// Update jobs when filters change
categoryFilter.addEventListener("change", renderJobs);
locationFilter.addEventListener("change", renderJobs);

// Reset all filters
clearFilters.addEventListener("click", () => {
  searchInput.value = "";
  categoryFilter.value = "all";
  locationFilter.value = "all";

  renderJobs();
});

// Initialize the website
populateLocations();
renderJobs();
