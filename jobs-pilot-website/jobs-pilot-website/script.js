/*
 * JOBS PILOT — IT CAREERS & OPPORTUNITIES
 * Job listings and search/filter functionality.
 *
 * Verify job availability, eligibility and deadlines on
 * the employer's application page before applying.
 */

const jobs = [
  {
  company: "Infosys",
  initials: "INF",
  role: "Digital Specialist Engineer (DSE)",
  category: "Full-time",
  location: "Hyderabad, Bengaluru, Delhi NCR",
  degree: "Check Official Listing",
  experience: "0–2 Years",
  salary: "₹7 LPA",
  batch: "2024–2027",
  url: "https://www.naukri.com/job-listings-digital-specialist-engineer-trainee-infosys-hyderabad-bengaluru-delhi-ncr-0-to-2-years-151026022319",
  summary: "Infosys is hiring Digital Specialist Engineers (DSE) with a reported package of ₹7 LPA. Candidates from the 2024–2027 batches may be eligible, with 0–2 years of experience. Locations include Hyderabad, Bengaluru, and Delhi NCR. Check the job listing for exact educational qualifications, eligibility criteria, and current application availability."
},
  {
  company: "Levi Strauss & Co.",
  initials: "LSC",
  role: "Tech Support Specialist",
  category: "Full-time",
  location: "Bengaluru, Karnataka",
  degree: "Bachelor's Degree in a Technology Field or Equivalent Experience",
  experience: "4+ Years",
  salary: "Not Disclosed",
  batch: "4+ Years Experience",
  url: "https://levistraussandco.wd5.myworkdayjobs.com/en-US/External/job/GCC-Office--ITC-Green-Center-Bengaluru-Karnataka-India/Tech-Support-Specialist_R-0157639",
  summary: "Levi Strauss & Co. is hiring a Tech Support Specialist for its GCC Office at ITC Green Center in Bengaluru, Karnataka. Candidates should have 4+ years of experience in IT support, technical support, command center operations, or monitoring. Responsibilities include system monitoring, incident triage, troubleshooting, ticket management, escalation, and operational documentation. Knowledge of ITIL Incident Management and ticketing platforms is beneficial. Apply by 28 October 2026."
},
  {
  company: "Wipro",
  initials: "WIP",
  role: "Graduate Engineer Trainee",
  category: "Full-time",
  location: "Gurugram",
  degree: "B.Tech / BE (CS, IT, ECE) / MCA",
  experience: "Freshers",
  salary: "₹3.5–4.5 LPA",
  batch: "2023/2024/2025/2026",
  url: "https://careers.wipro.com/job/Gurugram-Graduate-Engineer-Trainee-IND-122016/212634-en_US/",
  summary: "Wipro is hiring Graduate Engineer Trainees for the 2023, 2024, 2025, and 2026 batches. Eligible candidates include B.Tech/BE graduates in Computer Science, IT, and ECE, as well as MCA graduates. Check the official listing for current eligibility and application details."
},
{
  company: "Barclays",
  initials: "BAR",
  role: "Software Engineer - I (Full Stack Engineer)",
  category: "Full-time",
  location: "Pune, India",
  degree: "Any Bachelor's / Master's Degree",
  experience: "Freshers / 0–2 Years",
  salary: "₹6–9 LPA",
  batch: "Check official listing",
  url: "https://search.jobs.barclays/job/-/-/13015/99013663152?src=JB-12860",
  summary: "Barclays is hiring Software Engineer I for a full-stack development role in Pune. Candidates with any bachelor's or master's degree and 0–2 years of experience may be eligible. Check the official listing for current eligibility and application details."
},
  {
    company: "Deloitte",
    initials: "DTT",
    role: "Analyst",
    category: "Full-time",
    location: "Pune, Bengaluru",
    degree: "Any Graduate",
    experience: "Freshers / 0–2 Years",
    salary: "₹5.5–8.5 LPA",
    batch: "Check official listing",
    url: "https://southasiacareers.deloitte.com/job/Pune-Analyst-S&P-Procurement-Theme-Supply-Chain-&-Network-Operations/599408044/",
    summary:
      "Explore the Analyst opportunity at Deloitte in Pune or Bengaluru. Open to any graduate, including freshers with 0–2 years of experience. Check the official listing for current eligibility and availability.",
},
  {
    company: "HCLTech",
    initials: "HCL",
    role: "Analyst - Gen AI Intern",
    category: "Internships",
    location: "Noida, Hyderabad, Chennai, Bengaluru, Pune",
    degree: "Any Bachelor's / Master's Degree",
    experience: "Freshers / 0–3 Years",
    salary: "₹4–8 LPA",
    batch: "Check official listing",
    url: "https://careers.hcltech.com/job/Analyst-%28Support-%26-Operations%29/166721-en_US/",
    summary:
      "Explore the Analyst - Gen AI Intern opportunity. Check the official listing for current requirements and availability.",
  },
  {
    company: "Accenture",
    initials: "ACN",
    role: "Custom Software Engineering Associate",
    category: "IT Jobs",
    location: "Bengaluru, India",
    degree: "Any Graduate",
    experience: "0–2 Years",
    salary: "₹3.2–6.6 LPA",
    batch: "Check official listing",
    url: "https://www.accenture.com/in-en/careers/jobdetails?id=ATCI-5349571-S1958852_en",
    summary:
      "An entry-level software engineering opportunity. Review the official job description for role requirements.",
  },
  {
    company: "KPMG",
    initials: "KPMG",
    role: "Analyst",
    category: "Freshers",
    location: "Gurugram, India",
    degree: "BA, B.Com, B.Ed, BE or BCA",
    experience: "0–2 Years",
    salary: "Not disclosed",
    batch: "2024, 2025, 2026, 2027",
    url: "https://ejgk.fa.em2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_3/job/30050866/",
    summary:
      "Analyst opportunity for eligible graduates. Confirm the accepted qualifications and application status on the official portal.",
  },
  {
    company: "L&T",
    initials: "L&T",
    role: "GenAI Trainee",
    category: "Freshers",
    location: "Across India",
    degree: "BE / ME / BTech / MTech",
    experience: "0–2 Years",
    salary: "Not disclosed",
    batch: "2024, 2025, 2026, 2027",
    url: "https://larsentoubrocareers.peoplestrong.com/job/detail/LNT_GT_1820286?Source=Linkedin",
    summary:
      "GenAI Trainee opportunity for engineering graduates. Visit the official recruitment portal for details.",
  },
  {
    company: "Razorpay",
    initials: "RZP",
    role: "Data Analyst / Business Finance",
    category: "IT Jobs",
    location: "Bengaluru, India",
    degree: "Bachelor's Degree",
    experience: "0–2 Years",
    salary: "₹5–9 LPA",
    batch: "2024, 2025, 2026, 2027",
    url: "https://job-boards.greenhouse.io/razorpaysoftwareprivatelimited/jobs/4744129005",
    summary:
      "Explore the Data Analyst and Business Finance opportunity. Check the application page for the exact role and eligibility.",
  },
  {
    company: "Infosys",
    initials: "INF",
    role: "Systems Engineer / Specialist Programmer Trainee",
    category: "Freshers",
    location: "Multiple locations across India",
    degree: "Graduates; role-specific criteria apply",
    experience: "Entry-level",
    salary: "₹4–21 LPA, role-dependent",
    batch: "2024, 2025, 2026, 2027",
    url: "https://surveys.infosysapps.com/r/a/SEcampusregistration2027batch",
    alternateUrl:
      "https://www.naukri.com/job-listings-specialist-programmer-trainee-infosys-hyderabad-bengaluru-delhi-ncr-0-to-2-years-151026016759",
    summary:
      "Explore Systems Engineer and Specialist Programmer Trainee opportunities. Pay and eligibility depend on the selected role.",
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

// Employer logos. These are loaded from company websites.
const companyLogos = {
  HCLTech: "https://www.google.com/s2/favicons?domain=hcltech.com&sz=128",
  Accenture: "https://www.google.com/s2/favicons?domain=accenture.com&sz=128",
  KPMG: "https://www.google.com/s2/favicons?domain=kpmg.com&sz=128",
  "L&T": "https://www.google.com/s2/favicons?domain=larsentoubro.com&sz=128",
  Razorpay: "https://www.google.com/s2/favicons?domain=razorpay.com&sz=128",
  Infosys: "https://www.google.com/s2/favicons?domain=infosys.com&sz=128",
};

// Escape text before inserting it into HTML.
function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => {
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

// Only accept HTTP or HTTPS links.
function safeURL(value) {
  try {
    const parsedURL = new URL(value);

    if (
      (parsedURL.protocol === "https:" || parsedURL.protocol === "http:") &&
      parsedURL.hostname
    ) {
      return parsedURL.href;
    }
  } catch {
    // Return an empty string for invalid URLs.
  }

  return "";
}

// Add locations from the job listings to the dropdown.
function populateLocations() {
  const locations = new Set();

  jobs.forEach((job) => {
    job.location.split(",").forEach((location) => {
      const cleanedLocation = location.trim();

      if (cleanedLocation) {
        locations.add(cleanedLocation);
      }
    });
  });

  const sortedLocations = [...locations].sort((a, b) => a.localeCompare(b));

  locationFilter.innerHTML = '<option value="all">All locations</option>';

  sortedLocations.forEach((location) => {
    const option = document.createElement("option");
    option.value = location;
    option.textContent = location;
    locationFilter.appendChild(option);
  });
}

// Check whether a job matches the selected location.
function matchesLocation(job, selectedLocation) {
  if (selectedLocation === "all") {
    return true;
  }

  return job.location
    .split(",")
    .some(
      (location) =>
        location.trim().toLowerCase() === selectedLocation.trim().toLowerCase(),
    );
}

// Render the job cards.
function renderJobs() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;
  const selectedLocation = locationFilter.value;

  const filteredJobs = jobs.filter((job) => {
    const searchableText = [
      job.company,
      job.role,
      job.location,
      job.category,
      job.degree,
      job.experience,
      job.salary,
      job.batch,
      job.summary,
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch = searchableText.includes(searchTerm);

    const matchesCategory =
      selectedCategory === "all" ||
      job.category === selectedCategory ||
      (selectedCategory === "Freshers" &&
        /fresher|entry-level/i.test(job.experience));

    const locationMatches = matchesLocation(job, selectedLocation);

    return matchesSearch && matchesCategory && locationMatches;
  });

  jobCount.textContent = jobs.length;

  jobList.innerHTML = filteredJobs
    .map((job) => {
      const applicationURL = safeURL(job.url);
      const alternateURL = safeURL(job.alternateUrl);
      const logoURL = safeURL(companyLogos[job.company]);

      const logoMarkup = logoURL
        ? `<img
             src="${escapeHTML(logoURL)}"
             alt="${escapeHTML(job.company)} logo"
             loading="lazy"
             onerror="this.style.display='none'; this.nextElementSibling.hidden=false;"
           >
           <span hidden>${escapeHTML(job.initials)}</span>`
        : escapeHTML(job.initials);

      const applyButton = applicationURL
        ? `<a
             class="apply-btn"
             href="${escapeHTML(applicationURL)}"
             target="_blank"
             rel="noopener noreferrer"
           >
             Apply Now <span aria-hidden="true">↗</span>
           </a>`
        : `<span class="apply-btn">Link unavailable</span>`;

      const alternateLink = alternateURL
        ? `<a
             href="${escapeHTML(alternateURL)}"
             target="_blank"
             rel="noopener noreferrer"
             class="alternate-apply"
           >View alternate listing ↗</a>`
        : "";

      return `
        <article class="job-card">
          <div class="job-card-header">
            <div class="company-logo">
              ${logoMarkup}
            </div>

            <div class="company-details">
              <h3 class="job-title">${escapeHTML(job.role)}</h3>
              <div class="company-name">${escapeHTML(job.company)}</div>
            </div>

            <span class="job-badge">${escapeHTML(job.category)}</span>
          </div>

          <p class="job-summary">${escapeHTML(job.summary)}</p>

          <div class="job-meta">
            <div class="meta-item">
              <span class="meta-label">Salary / Package</span>
              <span class="meta-value salary-value">${escapeHTML(job.salary)}</span>
            </div>

            <div class="meta-item">
              <span class="meta-label">Experience</span>
              <span class="meta-value">${escapeHTML(job.experience)}</span>
            </div>

            <div class="meta-item">
              <span class="meta-label">Qualification</span>
              <span class="meta-value">${escapeHTML(job.degree)}</span>
            </div>

            <div class="meta-item">
              <span class="meta-label">Eligible batches</span>
              <span class="meta-value">${escapeHTML(job.batch)}</span>
            </div>
          </div>

          <div class="job-tags">
            <span class="category-tag">${escapeHTML(job.category)}</span>
            <span class="category-tag">India</span>
          </div>

          <div class="job-card-footer">
            <div class="location">
              <span aria-hidden="true">⌖</span>
              ${escapeHTML(job.location)}
            </div>

            ${applyButton}
          </div>

          ${alternateLink}
        </article>
      `;
    })
    .join("");

  emptyState.hidden = filteredJobs.length !== 0;
}

// Search jobs as the user types.
searchInput.addEventListener("input", renderJobs);

// Apply category and location filters.
categoryFilter.addEventListener("change", renderJobs);
locationFilter.addEventListener("change", renderJobs);

// Clear all filters.
clearFilters.addEventListener("click", () => {
  searchInput.value = "";
  categoryFilter.value = "all";
  locationFilter.value = "all";

  renderJobs();
});

// Initialize the job board.
populateLocations();
renderJobs();
