// Flag requirements data
const flagData = [
  {
    name: "Marshall Islands",
    code: "MH",
    category: "special",
    requirements:
      "Requires form MI-105M for Filipino and Indian nationals. Others can use local MLC/STCW from recognized doctors.",
    formLink: "https://register-iri.com/",
    validity: "2 years (1 year for under 18)",
    specialNotes: "MI-105M form required for specific nationalities",
    doctorsList: "MI Approved Medical Examiners list available",
    officialLink: "https://classnk.or.jp/hp/pdf/forms/mi/mi118.pdf",
  },
  {
    name: "Liberia",
    code: "LR",
    category: "special",
    requirements:
      "Requires form RLM-105M (with serial number) for Filipino and Indian nationals. Others - local MLC/STCW.",
    formLink: "https://liscr.com/",
    validity: "2 years (1 year for under 18)",
    specialNotes:
      "Serial numbered certificates required for some nationalities",
    doctorsList: "Liberia Approved Medical Examiners",
    officialLink: "https://media.liscr.com/documents/RLM-118.pdf",
  },
  {
    name: "Panama",
    code: "PA",
    category: "special",
    requirements:
      "Requires registration/transfer in PMA system for nationals from Philippines, India, Indonesia, China, Vietnam, Myanmar, South Korea.",
    formLink: "https://amp.gob.pa/",
    validity: "2 years (1 year for under 18)",
    specialNotes: "Electronic validation system for specific nationalities",
    doctorsList: "Contact Panama Maritime Authority",
    officialLink: "https://amp.gob.pa/",
  },
  {
    name: "Cyprus",
    code: "CY",
    category: "standard",
    requirements:
      "Accepts MLC/ILO certificate from doctor recognized in the country of examination.",
    formLink: "http://www.mcw.gov.cy/mcw/dms/dms.nsf",
    validity: "2 years (1 year for under 18)",
    specialNotes: "Standard MLC compliance",
    doctorsList: "Local maritime authority approved doctors",
    officialLink: "http://www.mcw.gov.cy/mcw/dms/dms.nsf",
  },
  {
    name: "Singapore",
    code: "SG",
    category: "standard",
    requirements: "Accepts MLC/ILO certificate from locally recognized doctor.",
    formLink: "https://www.mpa.gov.sg/",
    validity: "2 years (1 year for under 18)",
    specialNotes: "Standard MLC compliance",
    doctorsList: "MPA Singapore approved list",
    officialLink: "https://www.mpa.gov.sg/",
  },
  {
    name: "Malta",
    code: "MT",
    category: "approved",
    requirements:
      "Requires own 'Medical Fitness Certificate' format compliant with Transport Malta requirements.",
    formLink: "https://www.transport.gov.mt/maritime",
    validity: "2 years (1 year for under 18)",
    specialNotes: "Specific Transport Malta format required",
    doctorsList: "Transport Malta approved medical examiners",
    officialLink: "https://www.transport.gov.mt/maritime",
  },
  {
    name: "Hong Kong",
    code: "HK",
    category: "standard",
    requirements: "Accepts local MLC/ILO certificate.",
    formLink: "https://www.mardep.gov.hk/",
    validity: "2 years (1 year for under 18)",
    specialNotes: "Standard MLC compliance",
    doctorsList: "Hong Kong Marine Department approved",
    officialLink: "https://www.mardep.gov.hk/",
  },
  {
    name: "Isle of Man",
    code: "IM",
    category: "standard",
    requirements: "Accepts local MLC/ILO certificate.",
    formLink:
      "https://www.gov.im/categories/transport-travel-and-mobility/ship-registry/",
    validity: "2 years (1 year for under 18)",
    specialNotes: "Standard MLC compliance",
    doctorsList: "Isle of Man approved doctors",
    officialLink:
      "https://www.gov.im/categories/transport-travel-and-mobility/ship-registry/",
  },
  {
    name: "United Kingdom",
    code: "GB",
    category: "approved",
    requirements:
      "Requires ENG1 certificate or equivalent according to MSN 1815. Doctor must be MCA Approved.",
    formLink: "https://www.gov.uk/maritime-and-coastguard-agency",
    validity: "Varies by age and position (typically 2 years)",
    specialNotes: "Specific ENG1 format or MSN 1815 equivalent required",
    doctorsList: "MCA Approved Doctors (including Overseas)",
    officialLink:
      "https://www.gov.uk/government/publications/msn-1815-m-medical-and-eyesight-standards",
  },
  {
    name: "Belgium",
    code: "BE",
    category: "approved",
    requirements:
      "Requires certificate from accredited doctor (Belgian or recognized foreign doctor).",
    formLink: "https://mobilit.belgium.be/",
    validity: "2 years (1 year for under 18)",
    specialNotes: "Must use accredited medical practitioners",
    doctorsList: "Belgium FPS Mobility approved list",
    officialLink: "https://mobilit.belgium.be/",
  },
  {
    name: "Vanuatu",
    code: "VU",
    category: "special",
    requirements:
      "Requires Vanuatu Medical Certificate (Form MED-1C) or MLC/STCW from accepted doctor.",
    formLink: "https://www.vanuatuships.com/",
    validity: "2 years (1 year for under 18)",
    specialNotes: "Specific Form MED-1C or approved equivalent",
    doctorsList: "Vanuatu Maritime Services approved",
    officialLink: "https://www.vanuatuships.com/",
  },
  {
    name: "Cook Islands",
    code: "CK",
    category: "approved",
    requirements:
      "Requires Medical Certificate from approved medical practitioner on MCI list. Minimum 6 months validity upon application.",
    formLink: "https://www.maritimecookislands.com/",
    validity: "2 years (min 6 months remaining at application)",
    specialNotes: "Must use MCI approved doctors only",
    doctorsList: "Maritime Cook Islands approved practitioners list",
    officialLink: "https://www.maritimecookislands.com/",
  },
  {
    name: "Tuvalu",
    code: "TV",
    category: "contact",
    requirements:
      "Requires Tuvalu Seafarer's Medical Examination Report/Certificate or MLC/STCW equivalent from recognized doctor.",
    formLink: "Contact Tuvalu Ship Registry",
    validity: "2 years (1 year for under 18)",
    specialNotes: "Contact administration for current requirements",
    doctorsList: "Contact Tuvalu administration",
    officialLink: "Contact administration directly",
  },
  {
    name: "Palau",
    code: "PW",
    category: "approved",
    requirements:
      "Requires medical certificate per ILO/IMO Guidelines from Palau-approved doctor or state-approved doctor.",
    formLink: "https://palaureg.com/",
    validity: "2 years (1 year for under 18)",
    specialNotes: "English language or official translation required",
    doctorsList: "PISR approved medical examiners",
    officialLink: "https://palaureg.com/",
  },
  {
    name: "Nigeria",
    code: "NG",
    category: "approved",
    requirements:
      "Requires certificate exclusively from NIMASA accredited facilities/doctors.",
    formLink: "https://nimasa.gov.ng/",
    validity: "2 years (1 year for under 18)",
    specialNotes: "Only NIMASA accredited facilities accepted",
    doctorsList: "NIMASA accredited medical centers",
    officialLink: "https://nimasa.gov.ng/",
  },
  {
    name: "Ethiopia",
    code: "ET",
    category: "approved",
    requirements:
      "Requires MLC/STCW certificate from doctor approved by Ethiopian Maritime Authority (EMA).",
    formLink: "https://etmaritime.com/",
    validity: "2 years (1 year for under 18)",
    specialNotes: "EMA approved medical examiners required",
    doctorsList: "Ethiopian Maritime Authority approved list",
    officialLink: "https://etmaritime.com/",
  },
  {
    name: "Azerbaijan",
    code: "AZ",
    category: "contact",
    requirements:
      "Contact State Maritime and Port Agency for current requirements. MLC/STCW compliant medical with English translation recommended.",
    formLink: "Contact SMPA",
    validity: "2 years (1 year for under 18)",
    specialNotes: "Verify requirements with administration",
    doctorsList: "Contact administration",
    officialLink: "Contact State Maritime and Port Agency",
  },
  {
    name: "Libya",
    code: "LY",
    category: "contact",
    requirements:
      "Contact Libyan Ports & Maritime Transport Authority. MLC/STCW medical in English or with translation recommended.",
    formLink: "Contact LP&MTA",
    validity: "2 years (1 year for under 18)",
    specialNotes: "Check with authority for current requirements",
    doctorsList: "Contact LP&MTA",
    officialLink: "Contact Libyan Ports & Maritime Transport Authority",
  },
  {
    name: "Togo",
    code: "TG",
    category: "contact",
    requirements:
      "Contact Togo Registrar/Administration. MLC/STCW compliant medical (≤12 months) typically required.",
    formLink: "https://togoregistrar.com/",
    validity: "Typically ≤12 months at application",
    specialNotes: "Verify current requirements with registrar",
    doctorsList: "Contact Togo Registrar",
    officialLink: "https://togoregistrar.com/",
  },
  {
    name: "Bahamas",
    code: "BS",
    category: "standard",
    requirements: "Accepts local MLC/ILO certificate.",
    formLink: "https://www.bahamasmaritime.com/",
    validity: "2 years (1 year for under 18)",
    specialNotes: "Standard MLC compliance",
    doctorsList: "Local maritime authority approved",
    officialLink: "https://www.bahamasmaritime.com/",
  },
  {
    name: "Belize",
    code: "BZ",
    category: "standard",
    requirements: "Accepts local MLC/ILO certificate.",
    formLink: "https://www.immarbe.com/",
    validity: "2 years (1 year for under 18)",
    specialNotes: "Standard MLC compliance",
    doctorsList: "IMMARBE approved doctors",
    officialLink: "https://www.immarbe.com/",
  },
  {
    name: "Gibraltar",
    code: "GI",
    category: "standard",
    requirements: "Accepts local MLC/ILO certificate.",
    formLink: "https://www.gibraltar.gov.gi/",
    validity: "2 years (1 year for under 18)",
    specialNotes: "Standard MLC compliance",
    doctorsList: "Gibraltar Maritime Administration approved",
    officialLink: "https://www.gibraltar.gov.gi/",
  },
  {
    name: "Denmark (DIS)",
    code: "DK",
    category: "standard",
    requirements: "Accepts local MLC/ILO certificate.",
    formLink: "https://www.dma.dk/",
    validity: "2 years (1 year for under 18)",
    specialNotes: "Standard MLC compliance",
    doctorsList: "Danish Maritime Authority approved",
    officialLink: "https://www.dma.dk/",
  },
  {
    name: "Portugal",
    code: "PT",
    category: "standard",
    requirements: "Accepts local MLC/ILO certificate.",
    formLink: "https://www.dgrm.mm.gov.pt/",
    validity: "2 years (1 year for under 18)",
    specialNotes: "Standard MLC compliance",
    doctorsList: "DGRM Portugal approved",
    officialLink: "https://www.dgrm.mm.gov.pt/",
  },
  {
    name: "Cayman Islands",
    code: "KY",
    category: "standard",
    requirements: "Accepts local MLC/ILO certificate.",
    formLink: "https://www.caymanmamaritime.com/",
    validity: "2 years (1 year for under 18)",
    specialNotes: "Standard MLC compliance",
    doctorsList: "Cayman Maritime approved",
    officialLink: "https://www.caymanmaritim.com/",
  },
];

// Application state
let currentFilter = "all";
let searchTerm = "";
let filteredFlags = [...flagData];

// DOM elements
const themeToggle = document.getElementById("theme-toggle");
const darkIcon = document.getElementById("theme-toggle-dark-icon");
const lightIcon = document.getElementById("theme-toggle-light-icon");
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const searchInput = document.getElementById("search-input");
const flagsContainer = document.getElementById("flags-container");
const formsContainer = document.getElementById("forms-container");

// Initialize application
document.addEventListener("DOMContentLoaded", function () {
  initializeTheme();
  setupEventListeners();
  renderFlags();
  renderForms();
  setupFAQ();
  setupSmoothScrolling();
});

// Theme Management
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    darkIcon.classList.add("hidden");
    lightIcon.classList.remove("hidden");
  } else {
    document.documentElement.classList.remove("dark");
    darkIcon.classList.remove("hidden");
    lightIcon.classList.add("hidden");
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.contains("dark");
  if (isDark) {
    document.documentElement.classList.remove("dark");
    darkIcon.classList.remove("hidden");
    lightIcon.classList.add("hidden");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    darkIcon.classList.add("hidden");
    lightIcon.classList.remove("hidden");
    localStorage.setItem("theme", "dark");
  }
}

// Event Listeners Setup
function setupEventListeners() {
  // Theme toggle
  themeToggle.addEventListener("click", toggleTheme);

  // Mobile menu
  mobileMenuButton.addEventListener("click", toggleMobileMenu);

  // Search functionality
  searchInput.addEventListener("input", handleSearch);

  // Filter buttons
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => handleFilter(button.dataset.filter));
  });

  // Navigation links
  setupNavigationLinks();
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("hidden");
}

function handleSearch(e) {
  searchTerm = e.target.value.toLowerCase();
  filterAndRenderFlags();
}

function handleFilter(filter) {
  currentFilter = filter;

  // Update active filter button
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  document.querySelector(`[data-filter="${filter}"]`).classList.add("active");

  filterAndRenderFlags();
}

function filterAndRenderFlags() {
  filteredFlags = flagData.filter((flag) => {
    // Category filter
    const categoryMatch =
      currentFilter === "all" || flag.category === currentFilter;

    // Search filter
    const searchMatch =
      searchTerm === "" ||
      flag.name.toLowerCase().includes(searchTerm) ||
      flag.requirements.toLowerCase().includes(searchTerm) ||
      flag.specialNotes.toLowerCase().includes(searchTerm) ||
      flag.category.toLowerCase().includes(searchTerm);

    return categoryMatch && searchMatch;
  });

  renderFlags();
}

// Rendering Functions
function renderFlags() {
  if (filteredFlags.length === 0) {
    flagsContainer.innerHTML = `
            <div class="col-span-full text-center py-12">
                <div class="text-gray-400 dark:text-gray-500 mb-4">
                    <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-.881-6.172-2.328l-.828-.828m0 0L3 14l2-2m0 0L3 10l2 2"/>
                    </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">No flags found</h3>
                <p class="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
        `;
    return;
  }

  flagsContainer.innerHTML = filteredFlags
    .map((flag) => createFlagCard(flag))
    .join("");

  // Add animation to cards
  const cards = flagsContainer.querySelectorAll(".flag-card");
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.classList.add("animate-fadeIn");
  });
}

function createFlagCard(flag) {
  const categoryInfo = getCategoryInfo(flag.category);
  const highlightedName = highlightSearchTerm(flag.name, searchTerm);
  const highlightedRequirements = highlightSearchTerm(
    flag.requirements,
    searchTerm
  );

  return `
        <div class="flag-card" data-category="${flag.category}">
            <div class="flex items-start justify-between mb-4">
                <div class="flex items-center space-x-3">
                    <div class="w-8 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded flex items-center justify-center">
                        <span class="text-xs font-bold text-white">${
                          flag.code
                        }</span>
                    </div>
                    <h3 class="text-lg font-semibold">${highlightedName}</h3>
                </div>
                <span class="flag-badge ${categoryInfo.class}">${
    categoryInfo.label
  }</span>
            </div>
            
            <div class="space-y-3 mb-4">
                <div>
                    <h4 class="font-medium text-gray-700 dark:text-gray-300 mb-1">Requirements:</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">${highlightedRequirements}</p>
                </div>
                
                <div>
                    <h4 class="font-medium text-gray-700 dark:text-gray-300 mb-1">Validity:</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">${
                      flag.validity
                    }</p>
                </div>
                
                ${
                  flag.specialNotes
                    ? `
                <div>
                    <h4 class="font-medium text-gray-700 dark:text-gray-300 mb-1">Special Notes:</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">${highlightSearchTerm(
                      flag.specialNotes,
                      searchTerm
                    )}</p>
                </div>
                `
                    : ""
                }
            </div>
            
            <div class="flex flex-wrap gap-2">
                ${
                  flag.officialLink &&
                  flag.officialLink !== "Contact administration directly"
                    ? `
                <a href="${flag.officialLink}" target="_blank" rel="noopener noreferrer" 
                   class="inline-flex items-center text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
                    Official Info
                    <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                </a>
                `
                    : ""
                }
                
                <span class="inline-flex items-center text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                    ${flag.doctorsList}
                </span>
            </div>
        </div>
    `;
}

function getCategoryInfo(category) {
  const categoryMap = {
    special: { label: "🔴 Special Requirements", class: "badge-special" },
    approved: {
      label: "🟡 Approved Doctors Required",
      class: "badge-approved",
    },
    standard: { label: "🟢 Standard MLC", class: "badge-standard" },
    contact: { label: "⚫ Contact Administration", class: "badge-contact" },
  };

  return categoryMap[category] || { label: category, class: "badge-standard" };
}

function highlightSearchTerm(text, term) {
  if (!term) return text;

  const regex = new RegExp(`(${term})`, "gi");
  return text.replace(regex, '<span class="search-highlight">$1</span>');
}

function renderForms() {
  const formLinks = [
    {
      title: "Marshall Islands MI-105M",
      description: "Official form for Filipino and Indian nationals",
      link: "https://register-iri.com/",
      category: "Official Forms",
    },
    {
      title: "Liberia RLM-105M",
      description: "Serial numbered certificate form",
      link: "https://liscr.com/",
      category: "Official Forms",
    },
    {
      title: "Malta Medical Fitness Certificate",
      description: "Transport Malta specific format",
      link: "https://www.transport.gov.mt/maritime",
      category: "Official Forms",
    },
    {
      title: "UK MSN 1815",
      description: "Medical and eyesight standards guidance",
      link: "https://www.gov.uk/government/publications/msn-1815-m-medical-and-eyesight-standards",
      category: "Guidelines",
    },
    {
      title: "Vanuatu Form MED-1C",
      description: "Vanuatu medical certificate form",
      link: "https://www.vanuatuships.com/",
      category: "Official Forms",
    },
    {
      title: "Belgium Approved Doctors",
      description: "List of recognized maritime medical practitioners",
      link: "https://mobilit.belgium.be/",
      category: "Doctor Lists",
    },
  ];

  formsContainer.innerHTML = formLinks
    .map(
      (form) => `
        <div class="form-link-card">
            <div class="flex items-start justify-between mb-3">
                <div>
                    <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-1">${form.title}</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400">${form.description}</p>
                </div>
                <span class="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">${form.category}</span>
            </div>
            <a href="${form.link}" target="_blank" rel="noopener noreferrer" 
               class="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                Access Resource
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
            </a>
        </div>
    `
    )
    .join("");
}

// FAQ Setup
function setupFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = question.querySelector("svg");

    question.addEventListener("click", () => {
      const isOpen = !answer.classList.contains("hidden");

      // Close all other FAQ items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          const otherAnswer = otherItem.querySelector(".faq-answer");
          const otherIcon = otherItem.querySelector(".faq-question svg");
          otherAnswer.classList.add("hidden");
          otherIcon.style.transform = "rotate(0deg)";
        }
      });

      // Toggle current item
      if (isOpen) {
        answer.classList.add("hidden");
        icon.style.transform = "rotate(0deg)";
      } else {
        answer.classList.remove("hidden");
        icon.style.transform = "rotate(180deg)";
      }
    });
  });
}

// Navigation Setup
function setupNavigationLinks() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Close mobile menu if open
        if (!mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.add("hidden");
        }
      }
    });
  });
}

function setupSmoothScrolling() {
  // Intersection Observer for active nav highlighting
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  const observerOptions = {
    rootMargin: "-80px 0px -80px 0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute("id");

        // Remove active class from all nav links
        navLinks.forEach((link) => {
          link.classList.remove("text-blue-600", "dark:text-blue-400");
          link.classList.add("text-gray-700", "dark:text-gray-300");
        });

        // Add active class to current nav link
        const activeLink = document.querySelector(
          `nav a[href="#${currentId}"]`
        );
        if (activeLink) {
          activeLink.classList.remove("text-gray-700", "dark:text-gray-300");
          activeLink.classList.add("text-blue-600", "dark:text-blue-400");
        }
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

// Utility Functions
function scrollToSection(sectionId) {
  const targetElement = document.getElementById(sectionId);
  if (targetElement) {
    const headerOffset = 80;
    const elementPosition = targetElement.offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

// Loading and Error States
function showLoadingState(container) {
  container.innerHTML = `
        <div class="col-span-full flex items-center justify-center py-12">
            <div class="text-center">
                <div class="loading-shimmer w-16 h-16 rounded-full mx-auto mb-4"></div>
                <p class="text-gray-500 dark:text-gray-400">Loading...</p>
            </div>
        </div>
    `;
}

function showErrorState(container, message = "An error occurred") {
  container.innerHTML = `
        <div class="col-span-full text-center py-12">
            <div class="text-red-400 mb-4">
                <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </div>
            <h3 class="text-lg font-semibold text-red-600 dark:text-red-400 mb-2">Error</h3>
            <p class="text-red-500 dark:text-red-400">${message}</p>
        </div>
    `;
}

// Analytics and Tracking (Optional)
function trackFlagView(flagName) {
  // Implementation for analytics if needed
  console.log(`Flag viewed: ${flagName}`);
}

function trackSearch(searchTerm) {
  // Implementation for search analytics if needed
  console.log(`Search performed: ${searchTerm}`);
}

function trackFormAccess(formName) {
  // Implementation for form access tracking if needed
  console.log(`Form accessed: ${formName}`);
}

// Keyboard Navigation Support
document.addEventListener("keydown", (e) => {
  // ESC to close mobile menu
  if (e.key === "Escape" && !mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.add("hidden");
  }

  // Ctrl/Cmd + K to focus search
  if ((e.ctrlKey || e.metaKey) && e.key === "k") {
    e.preventDefault();
    searchInput.focus();
  }
});

// Print Support
function printPage() {
  window.print();
}

// Export functionality (if needed for future enhancements)
function exportFlagData(format = "json") {
  if (format === "json") {
    const dataStr = JSON.stringify(filteredFlags, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "mlc-flag-requirements.json";
    link.click();

    URL.revokeObjectURL(url);
  }
}

// Performance monitoring
function measurePerformance() {
  if ("performance" in window) {
    window.addEventListener("load", () => {
      const perfData = performance.getEntriesByType("navigation")[0];
      console.log(
        `Page load time: ${perfData.loadEventEnd - perfData.loadEventStart}ms`
      );
    });
  }
}

// Initialize performance monitoring
measurePerformance();

// Service Worker Registration (for PWA capabilities if needed)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    // Service worker registration can be added here for PWA functionality
    console.log("Service Worker support detected");
  });
}

// Global error handling
window.addEventListener("error", (e) => {
  console.error("Global error caught:", e.error);
  // Could implement error reporting here
});

window.addEventListener("unhandledrejection", (e) => {
  console.error("Unhandled promise rejection:", e.reason);
  // Could implement error reporting here
});

// Expose utility functions globally for potential use
window.mlcApp = {
  scrollToSection,
  toggleTheme,
  exportFlagData,
  printPage,
  trackFlagView,
  trackSearch,
  trackFormAccess,
};
