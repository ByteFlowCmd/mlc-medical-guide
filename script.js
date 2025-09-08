// Updated and comprehensive flag requirements data based on audit
const flagData = [
  // Priority Flags - Updated per audit
  {
    name: "Marshall Islands",
    code: "MH",
    categories: ["special", "electronic"],
    acceptanceSummary:
      "Accepts MI-105M or any STCW-compliant medical from a practitioner recognized by the competent authority where examined",
    approvedDoctorRule:
      "No global approved doctors list; use duly qualified practitioners recognized locally",
    forms: "MI-105M (Medical Examination Report/Certificate)",
    validity: "2 years (1 year for under 18); colour vision 6 years",
    nationalityControls:
      "MI-105M preference for some nationalities is operational, not a published rule",
    electronicValidation: "Contact IRI for verification queries",
    specialNotes: "3-month extension if expires at sea",
    lastUpdated: "June 2024 (MG-7-47-1)",
    sources: [
      {
        title: "Guidance on Medical Exams MG-7-47-1",
        link: "https://register-iri.com/",
        lastUpdated: "June 2024",
      },
    ],
    verificationContact: "IRI Contact Page",
    doctorsList: "Contact IRI offices for verification",
  },
  {
    name: "Liberia",
    code: "LR",
    categories: ["special", "approved", "electronic"],
    acceptanceSummary: "Accepts RLM-105M or STCW/MLC-compliant medicals",
    approvedDoctorRule:
      "Required - actively operates registration/approval system for clinics and doctors",
    forms: "RLM-105M (with serial number for tracking)",
    validity: "2 years (1 year for under 18); colour vision 6 years",
    nationalityControls:
      "Medical Certificate Platform with serialized ID/validation workflow",
    electronicValidation: "Medical Certificate Platform with Certificate ID",
    specialNotes: "Only Liberian Approved Doctors may issue RLM-105M",
    lastUpdated: "December 2024",
    sources: [
      {
        title: "Approved Medical Practitioners",
        link: "https://liscr.com/",
        lastUpdated: "Current",
      },
      {
        title: "Medical Certificate Platform",
        link: "https://liscr.com/medical-platform",
        lastUpdated: "Current",
      },
    ],
    verificationContact: "seafarers@liscr.com",
    doctorsList: "Liberia Approved Medical Practitioners list available",
  },
  {
    name: "Panama",
    code: "PA",
    categories: ["special", "approved", "electronic"],
    acceptanceSummary:
      "STCW/MLC acceptance baseline with controlled nationality requirements",
    approvedDoctorRule:
      "Required for specific nationalities - check AMP recognized doctors by country",
    forms: "PMA medical certificate through approved system",
    validity: "2 years (1 year for under 18); colour vision 6 years",
    nationalityControls:
      "Philippines, India, Myanmar, Vietnam, Korea, Indonesia and Panama - must use recognized doctors",
    electronicValidation: "PMA medical certificate platform (pmamedcert.com)",
    specialNotes: "Nationality controls may change - verify before scheduling",
    lastUpdated: "December 2024",
    sources: [
      {
        title: "AMP Recognized Doctors",
        link: "https://amp.gob.pa/",
        lastUpdated: "Current",
      },
    ],
    verificationContact: "medicals@amp.gob.pa",
    doctorsList: "AMP Recognized Doctors page with country lists",
  },
  {
    name: "Malta",
    code: "MT",
    categories: ["approved", "eng1"],
    acceptanceSummary:
      "Requires TM Medical Fitness Certificate format per MS Notice 107 Rev.1",
    approvedDoctorRule:
      "Required - must be licensed by Malta Medical Council for Malta-issued certificates",
    forms: "TM Medical Fitness Certificate (TM/MSD/SCU-010)",
    validity: "2 years (1 year for under 18); colour vision 6 years",
    nationalityControls: "None",
    electronicValidation: "Seafarer Portal with QR codes for authentication",
    specialNotes:
      "UK ENG1 equivalence only when issued in Malta by Malta-licensed doctor",
    lastUpdated: "October 2024 (MS Notice 107 Rev.1)",
    sources: [
      {
        title: "MS Notice 107 Rev.1",
        link: "https://www.transport.gov.mt/maritime",
        lastUpdated: "October 2024",
      },
    ],
    verificationContact: "Transport Malta Seafarer Portal",
    doctorsList: "Malta Medical Council register for verification",
  },
  {
    name: "United Kingdom",
    code: "GB",
    categories: ["approved", "eng1"],
    acceptanceSummary: "Requires ENG1 certificate or equivalent per MSN 1815",
    approvedDoctorRule: "Required - MCA Approved Doctors only",
    forms: "ENG1 Medical Fitness Certificate",
    validity:
      "Maximum 2 years; varies by age and position; 3-month extension at sea",
    nationalityControls: "None",
    electronicValidation: "Not applicable",
    specialNotes:
      "OGUK/UKOG is not a substitute; equivalents list maintained on GOV.UK",
    lastUpdated: "July 2024",
    sources: [
      {
        title: "MSN 1815 Medical Standards",
        link: "https://www.gov.uk/government/publications/msn-1815-m-medical-and-eyesight-standards",
        lastUpdated: "Current",
      },
      {
        title: "MSN 1887 Validity Extension",
        link: "https://www.gov.uk/government/publications/msn-1887",
        lastUpdated: "Current",
      },
    ],
    verificationContact: "MCA Medical Section",
    doctorsList: "MCA Approved Doctors (UK and Overseas lists)",
  },
  {
    name: "Denmark (DIS)",
    code: "DK",
    categories: ["standard", "approved"],
    acceptanceSummary:
      "Accepts foreign STCW/MLC medicals for crew on Danish ships",
    approvedDoctorRule:
      "Required only if examined in Denmark - must use DMA-appointed maritime doctor",
    forms: "Danish 'Blue Book' if examined in Denmark",
    validity: "2 years (1 year for under 18); colour vision 6 years",
    nationalityControls: "None",
    electronicValidation: "Not applicable",
    specialNotes: "Policy change since 2019 - foreign certificates accepted",
    lastUpdated: "December 2024",
    sources: [
      {
        title: "DMA Seafarers' Rights",
        link: "https://www.dma.dk/",
        lastUpdated: "Current",
      },
    ],
    verificationContact: "Danish Maritime Authority",
    doctorsList: "Søfartslæger (approved maritime doctors) list",
  },
  {
    name: "Gibraltar",
    code: "GI",
    categories: ["standard", "eng1"],
    acceptanceSummary: "Accepts STCW/MLC medicals; implements MLC A1.2 in law",
    approvedDoctorRule: "Not required - accepts recognized practitioners",
    forms: "No unique Gibraltar-only format mandated",
    validity: "2 years (1 year for under 18); colour vision 6 years",
    nationalityControls: "None",
    electronicValidation: "Not applicable",
    specialNotes: "As REG flag, accepts ENG1 and equivalents",
    lastUpdated: "December 2024",
    sources: [
      {
        title: "Gibraltar Maritime Administration",
        link: "https://www.gibraltar.gov.gi/maritime",
        lastUpdated: "Current",
      },
    ],
    verificationContact: "maritime.seafarers@gibraltar.gov.gi",
    doctorsList: "Contact GMA for case checks",
  },
  {
    name: "Portugal (MAR)",
    code: "PT",
    categories: ["standard", "approved"],
    acceptanceSummary: "STCW/MLC framework under DGRM",
    approvedDoctorRule:
      "Required - recognized doctor lists for Mainland and Madeira",
    forms: "Standard STCW/MLC format",
    validity: "2 years (1 year for under 18); colour vision 6 years",
    nationalityControls: "None",
    electronicValidation: "Not applicable",
    specialNotes: "MAR (Madeira registry) under Portugal's framework",
    lastUpdated: "December 2024",
    sources: [
      {
        title: "DGRM Certificação Médica",
        link: "https://www.dgrm.mm.gov.pt/",
        lastUpdated: "Current",
      },
    ],
    verificationContact: "DGRM Seafarer Support",
    doctorsList: "DGRM recognized doctor lists (Mainland & Madeira)",
  },
  // Second-wave flags
  {
    name: "Cyprus",
    code: "CY",
    categories: ["standard", "approved"],
    acceptanceSummary:
      "Accepts MLC/ILO certificate from doctor recognized in the country of examination",
    approvedDoctorRule:
      "Required - List of Approved Doctors/Hospitals published",
    forms: "Standard MLC/STCW format",
    validity: "2 years (1 year for under 18); colour vision 6 years",
    nationalityControls: "None",
    electronicValidation: "SDM Authentication eServices",
    specialNotes: "2025 circular with updated approved doctors list",
    lastUpdated: "January 2025",
    sources: [
      {
        title: "SDM Approved Doctors",
        link: "http://www.mcw.gov.cy/mcw/dms/dms.nsf",
        lastUpdated: "2025",
      },
    ],
    verificationContact: "Cyprus Shipping Deputy Ministry",
    doctorsList: "List of Approved Doctors/Hospitals circular",
  },
  {
    name: "Singapore",
    code: "SG",
    categories: ["standard"],
    acceptanceSummary:
      "Accepts MLC/ILO certificate from locally recognized doctor",
    approvedDoctorRule:
      "Singapore-licensed practitioners familiar with guidelines; STCW white list doctors acceptable",
    forms: "Standard MLC/STCW format",
    validity: "2 years (1 year for under 18); colour vision 6 years",
    nationalityControls: "None",
    electronicValidation: "Not applicable",
    specialNotes: "Shipping Circular No. 11 of 2021 provides guidance",
    lastUpdated: "December 2024",
    sources: [
      {
        title: "MPA Shipping Circular",
        link: "https://www.mpa.gov.sg/",
        lastUpdated: "2021",
      },
    ],
    verificationContact: "coc@mpa.gov.sg",
    doctorsList: "MPA Singapore approved list",
  },
  {
    name: "Hong Kong",
    code: "HK",
    categories: ["standard", "approved"],
    acceptanceSummary: "Accepts local MLC/ILO certificate",
    approvedDoctorRule: "Recognized registered medical practitioners required",
    forms: "Standard MLC/STCW format",
    validity: "2 years (1 year for under 18); colour vision 6 years",
    nationalityControls: "None",
    electronicValidation: "Not applicable",
    specialNotes: "Local Seafarer Medical Assessment Corner available",
    lastUpdated: "December 2024",
    sources: [
      {
        title: "HKMD Medical Practitioners",
        link: "https://www.mardep.gov.hk/",
        lastUpdated: "Current",
      },
    ],
    verificationContact: "Hong Kong Marine Department",
    doctorsList: "Recognized registered medical practitioners list",
  },
  {
    name: "Isle of Man",
    code: "IM",
    categories: ["standard", "eng1"],
    acceptanceSummary: "As REG flag, accepts ENG1 and statutory equivalents",
    approvedDoctorRule: "Not required - follows MCA equivalence list",
    forms: "ENG1 or equivalent",
    validity: "2 years (1 year for under 18); colour vision 6 years",
    nationalityControls: "None",
    electronicValidation: "Not applicable",
    specialNotes: "REG flag - follows UK MCA standards",
    lastUpdated: "December 2024",
    sources: [
      {
        title: "IOMSR Registry",
        link: "https://www.gov.im/categories/transport-travel-and-mobility/ship-registry/",
        lastUpdated: "Current",
      },
    ],
    verificationContact: "Isle of Man Ship Registry",
    doctorsList: "Refer to MCA approved doctors",
  },
  {
    name: "Belgium",
    code: "BE",
    categories: ["approved"],
    acceptanceSummary: "Requires certificate from accredited doctor",
    approvedDoctorRule: "Required - Belgian or recognized foreign doctor",
    forms: "Standard format from accredited practitioner",
    validity: "2 years (1 year for under 18); colour vision 6 years",
    nationalityControls: "None",
    electronicValidation: "Not applicable",
    specialNotes: "FPS Mobility maintains approved list",
    lastUpdated: "December 2024",
    sources: [
      {
        title: "FPS Mobility",
        link: "https://mobilit.belgium.be/",
        lastUpdated: "Current",
      },
    ],
    verificationContact: "FPS Mobility",
    doctorsList: "Belgium FPS Mobility approved list",
  },
  {
    name: "Nigeria",
    code: "NG",
    categories: ["approved"],
    acceptanceSummary:
      "Requires certificate exclusively from NIMASA accredited facilities",
    approvedDoctorRule: "Required - NIMASA accredited only",
    forms: "NIMASA standard format",
    validity: "2 years (1 year for under 18); colour vision 6 years",
    nationalityControls: "None",
    electronicValidation: "Not applicable",
    specialNotes: "Only NIMASA accredited facilities accepted",
    lastUpdated: "December 2024",
    sources: [
      {
        title: "NIMASA Approved List",
        link: "https://nimasa.gov.ng/",
        lastUpdated: "Current",
      },
    ],
    verificationContact: "NIMASA",
    doctorsList: "NIMASA accredited hospitals/clinics/doctors",
  },
  {
    name: "Norway",
    code: "NO",
    categories: ["approved"],
    acceptanceSummary: "Requires approved seafarer's doctor",
    approvedDoctorRule: "Required - NMA approved seafarers' doctors",
    forms: "Norwegian medical certificate",
    validity: "2 years (1 year for under 18); colour vision 6 years",
    nationalityControls: "None",
    electronicValidation: "Not applicable",
    specialNotes: "Global directory searchable by country",
    lastUpdated: "December 2024",
    sources: [
      {
        title: "NMA Approved Doctors",
        link: "https://www.sdir.no/",
        lastUpdated: "Current",
      },
    ],
    verificationContact: "Norwegian Maritime Authority",
    doctorsList: "NMA Approved seafarers' doctors directory",
  },
  {
    name: "Netherlands",
    code: "NL",
    categories: ["approved"],
    acceptanceSummary: "Requires appointed examining doctor",
    approvedDoctorRule: "Required - ILT appointed examining doctors",
    forms: "Dutch seafarer medical certificate",
    validity: "2 years (1 year for under 18); colour vision 6 years",
    nationalityControls: "None",
    electronicValidation: "Not applicable",
    specialNotes: "List updated August 2025",
    lastUpdated: "August 2025",
    sources: [
      {
        title: "ILT Keuringsartsen",
        link: "https://www.ilent.nl/",
        lastUpdated: "August 2025",
      },
    ],
    verificationContact: "ILT Netherlands",
    doctorsList: "ILT Appointed examining doctors",
  },
  // Additional flags
  {
    name: "Bahamas",
    code: "BS",
    categories: ["standard"],
    acceptanceSummary: "Accepts local MLC/ILO certificate",
    approvedDoctorRule: "Not required - local authority approved",
    forms: "Standard MLC/STCW format",
    validity: "2 years (1 year for under 18); colour vision 6 years",
    nationalityControls: "None",
    electronicValidation: "Not applicable",
    specialNotes: "Standard MLC compliance",
    lastUpdated: "December 2024",
    sources: [
      {
        title: "Bahamas Maritime Authority",
        link: "https://www.bahamasmaritime.com/",
        lastUpdated: "Current",
      },
    ],
    verificationContact: "Bahamas Maritime Authority",
    doctorsList: "Local maritime authority approved",
  },
  {
    name: "Belize",
    code: "BZ",
    categories: ["standard"],
    acceptanceSummary: "Accepts local MLC/ILO certificate",
    approvedDoctorRule: "Not required - local authority approved",
    forms: "Standard MLC/STCW format",
    validity: "2 years (1 year for under 18); colour vision 6 years",
    nationalityControls: "None",
    electronicValidation: "Not applicable",
    specialNotes: "Standard MLC compliance",
    lastUpdated: "December 2024",
    sources: [
      {
        title: "IMMARBE",
        link: "https://www.immarbe.com/",
        lastUpdated: "Current",
      },
    ],
    verificationContact: "IMMARBE",
    doctorsList: "IMMARBE approved doctors",
  },
  {
    name: "Cayman Islands",
    code: "KY",
    categories: ["standard", "eng1"],
    acceptanceSummary: "Accepts local MLC/ILO certificate",
    approvedDoctorRule: "Not required - standard compliance",
    forms: "Standard MLC/STCW format",
    validity: "2 years (1 year for under 18); colour vision 6 years",
    nationalityControls: "None",
    electronicValidation: "Not applicable",
    specialNotes: "REG flag - accepts ENG1",
    lastUpdated: "December 2024",
    sources: [
      {
        title: "CISR",
        link: "https://www.cishipping.com/",
        lastUpdated: "Current",
      },
    ],
    verificationContact: "Cayman Islands Shipping Registry",
    doctorsList: "Standard approved practitioners",
  },
  {
    name: "Vanuatu",
    code: "VU",
    categories: ["special"],
    acceptanceSummary:
      "Requires Vanuatu Medical Certificate (Form MED-1C) or MLC/STCW from accepted doctor",
    approvedDoctorRule: "Accepted doctors list maintained",
    forms: "Form MED-1C",
    validity: "2 years (1 year for under 18); colour vision 6 years",
    nationalityControls: "None",
    electronicValidation: "Not applicable",
    specialNotes: "Specific Form MED-1C or approved equivalent",
    lastUpdated: "December 2024",
    sources: [
      {
        title: "Vanuatu Maritime Services",
        link: "https://www.vanuatuships.com/",
        lastUpdated: "Current",
      },
    ],
    verificationContact: "Vanuatu Maritime Services",
    doctorsList: "VMS approved list",
  },
  {
    name: "Cook Islands",
    code: "CK",
    categories: ["approved"],
    acceptanceSummary:
      "Requires Medical Certificate from approved medical practitioner on MCI list",
    approvedDoctorRule: "Required - MCI approved doctors only",
    forms: "Standard format from MCI approved doctor",
    validity: "2 years (min 6 months remaining at application)",
    nationalityControls: "None",
    electronicValidation: "Not applicable",
    specialNotes: "Minimum 6 months validity upon application",
    lastUpdated: "December 2024",
    sources: [
      {
        title: "Maritime Cook Islands",
        link: "https://www.maritimecookislands.com/",
        lastUpdated: "Current",
      },
    ],
    verificationContact: "Maritime Cook Islands",
    doctorsList: "MCI approved practitioners list",
  },
  {
    name: "Palau",
    code: "PW",
    categories: ["approved"],
    acceptanceSummary:
      "Requires medical certificate per ILO/IMO Guidelines from approved doctor",
    approvedDoctorRule: "Palau-approved or state-approved doctor required",
    forms: "Standard ILO/IMO format",
    validity: "2 years (1 year for under 18); colour vision 6 years",
    nationalityControls: "None",
    electronicValidation: "Not applicable",
    specialNotes: "English or official translation required",
    lastUpdated: "December 2024",
    sources: [
      {
        title: "Palau International Ship Registry",
        link: "https://palaureg.com/",
        lastUpdated: "Current",
      },
    ],
    verificationContact: "PISR",
    doctorsList: "PISR approved medical examiners",
  },
];

// Doctors verification data
const doctorsData = [
  {
    flag: "Marshall Islands",
    howToVerify:
      "No public global list; use duly qualified practitioners recognized by local competent authority",
    listLink: null,
    portalLink: "https://register-iri.com/",
    contactEmail: "Contact via IRI offices",
    contactPhone: null,
  },
  {
    flag: "Liberia",
    howToVerify: "Public Approved Medical Practitioners list available",
    listLink: "https://liscr.com/medical-practitioners",
    portalLink: "https://liscr.com/medical-platform",
    contactEmail: "seafarers@liscr.com",
    contactPhone: null,
  },
  {
    flag: "Panama",
    howToVerify: "Reconocimiento de Médicos page with country lists",
    listLink: "https://amp.gob.pa/medicos",
    portalLink: "https://pmamedcert.com",
    contactEmail: "medicals@amp.gob.pa",
    contactPhone: null,
  },
  {
    flag: "Malta",
    howToVerify: "Verify doctor on Malta Medical Council register",
    listLink: "https://www.mcps.org.mt/",
    portalLink: "Transport Malta Seafarer Portal",
    contactEmail: null,
    contactPhone: null,
  },
  {
    flag: "United Kingdom",
    howToVerify: "MCA Approved Doctors lists (UK and Overseas)",
    listLink: "https://www.gov.uk/government/publications/mca-approved-doctors",
    portalLink: null,
    contactEmail: null,
    contactPhone: null,
  },
  {
    flag: "Denmark",
    howToVerify: "Søfartslæger (approved maritime doctors) list",
    listLink: "https://www.dma.dk/seafarers",
    portalLink: null,
    contactEmail: null,
    contactPhone: null,
  },
  {
    flag: "Gibraltar",
    howToVerify: "Contact GMA directly - no separate public list",
    listLink: null,
    portalLink: null,
    contactEmail: "maritime.seafarers@gibraltar.gov.gi",
    contactPhone: null,
  },
  {
    flag: "Portugal",
    howToVerify: "DGRM recognized doctor lists",
    listLink: "https://www.dgrm.mm.gov.pt/",
    portalLink: null,
    contactEmail: null,
    contactPhone: null,
  },
  {
    flag: "Cyprus",
    howToVerify: "List of Approved Doctors/Hospitals circular",
    listLink: "http://www.mcw.gov.cy/",
    portalLink: "SDM Authentication eServices",
    contactEmail: null,
    contactPhone: null,
  },
  {
    flag: "Singapore",
    howToVerify: "Medical acceptance guidance; contact for verification",
    listLink: null,
    portalLink: null,
    contactEmail: "coc@mpa.gov.sg",
    contactPhone: null,
  },
  {
    flag: "Hong Kong",
    howToVerify: "Recognized registered medical practitioners",
    listLink: "https://www.mardep.gov.hk/",
    portalLink: null,
    contactEmail: null,
    contactPhone: null,
  },
  {
    flag: "Nigeria",
    howToVerify: "NIMASA approved hospitals/clinics/doctors list",
    listLink: "https://nimasa.gov.ng/",
    portalLink: null,
    contactEmail: null,
    contactPhone: null,
  },
  {
    flag: "Norway",
    howToVerify: "NMA Approved seafarers' doctors directory",
    listLink: "https://www.sdir.no/",
    portalLink: null,
    contactEmail: null,
    contactPhone: null,
  },
  {
    flag: "Netherlands",
    howToVerify: "ILT Appointed examining doctors",
    listLink: "https://www.ilent.nl/",
    portalLink: null,
    contactEmail: null,
    contactPhone: null,
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
const doctorsContainer = document.getElementById("doctors-container");

// Initialize application
document.addEventListener("DOMContentLoaded", function () {
  initializeTheme();
  setupEventListeners();
  renderFlags();
  renderDoctors();
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
    let categoryMatch = currentFilter === "all";

    if (!categoryMatch) {
      if (currentFilter === "special") {
        categoryMatch = flag.categories.includes("special");
      } else if (currentFilter === "approved") {
        categoryMatch = flag.approvedDoctorRule.includes("Required");
      } else if (currentFilter === "eng1") {
        categoryMatch = flag.categories.includes("eng1");
      } else if (currentFilter === "electronic") {
        categoryMatch = flag.categories.includes("electronic");
      }
    }

    // Search filter
    const searchMatch =
      searchTerm === "" ||
      flag.name.toLowerCase().includes(searchTerm) ||
      flag.acceptanceSummary.toLowerCase().includes(searchTerm) ||
      flag.specialNotes.toLowerCase().includes(searchTerm) ||
      flag.forms.toLowerCase().includes(searchTerm);

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
  const highlightedName = highlightSearchTerm(flag.name, searchTerm);
  const highlightedAcceptance = highlightSearchTerm(
    flag.acceptanceSummary,
    searchTerm
  );

  // Create category badges
  const categoryBadges = flag.categories
    .map((cat) => {
      const badgeInfo = getCategoryBadgeInfo(cat);
      return `<span class="flag-badge ${badgeInfo.class}">${badgeInfo.label}</span>`;
    })
    .join(" ");

  return `
    <div class="flag-card" data-categories="${flag.categories.join(" ")}">
      <div class="flex items-start justify-between mb-4">
        <div class="flex items-center space-x-3">
          <div class="w-8 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded flex items-center justify-center">
            <span class="text-xs font-bold text-white">${flag.code}</span>
          </div>
          <h3 class="text-lg font-semibold">${highlightedName}</h3>
        </div>
      </div>
      
      <div class="mb-3 flex flex-wrap gap-2">
        ${categoryBadges}
      </div>
      
      <div class="space-y-3 mb-4">
        <div>
          <h4 class="font-medium text-gray-700 dark:text-gray-300 mb-1">Acceptance:</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">${highlightedAcceptance}</p>
        </div>
        
        <div>
          <h4 class="font-medium text-gray-700 dark:text-gray-300 mb-1">Approved Doctors:</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">${
            flag.approvedDoctorRule
          }</p>
        </div>
        
        <div>
          <h4 class="font-medium text-gray-700 dark:text-gray-300 mb-1">Forms:</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">${flag.forms}</p>
        </div>
        
        <div>
          <h4 class="font-medium text-gray-700 dark:text-gray-300 mb-1">Validity:</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">${
            flag.validity
          }</p>
        </div>
        
        ${
          flag.nationalityControls !== "None"
            ? `
        <div>
          <h4 class="font-medium text-gray-700 dark:text-gray-300 mb-1">Nationality Controls:</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">${flag.nationalityControls}</p>
        </div>
        `
            : ""
        }
        
        ${
          flag.electronicValidation !== "Not applicable"
            ? `
        <div>
          <h4 class="font-medium text-gray-700 dark:text-gray-300 mb-1">E-Validation:</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">${flag.electronicValidation}</p>
        </div>
        `
            : ""
        }
        
        <div>
          <h4 class="font-medium text-gray-700 dark:text-gray-300 mb-1">Special Notes:</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">${highlightSearchTerm(
            flag.specialNotes,
            searchTerm
          )}</p>
        </div>
      </div>
      
      <div class="border-t border-gray-200 dark:border-gray-700 pt-3">
        <div class="flex items-center justify-between">
          <span class="text-xs text-gray-500 dark:text-gray-400">Last updated: ${
            flag.lastUpdated
          }</span>
          ${
            flag.sources[0].link
              ? `
          <a href="${flag.sources[0].link}" target="_blank" rel="noopener noreferrer" 
             class="inline-flex items-center text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
            Official Info
            <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
          `
              : ""
          }
        </div>
      </div>
    </div>
  `;
}

function getCategoryBadgeInfo(category) {
  const categoryMap = {
    special: { label: "Flag Form Required", class: "badge-special" },
    approved: { label: "Approved Doctors", class: "badge-approved" },
    standard: { label: "Standard MLC", class: "badge-standard" },
    eng1: { label: "Accepts ENG1", class: "badge-approved" },
    electronic: { label: "E-Validation", class: "badge-special" },
  };

  return categoryMap[category] || { label: category, class: "badge-standard" };
}

function renderDoctors() {
  if (!doctorsContainer) return;

  doctorsContainer.innerHTML = doctorsData
    .map((doctor) => createDoctorCard(doctor))
    .join("");
}

function createDoctorCard(doctor) {
  return `
    <div class="card">
      <div class="flex items-center mb-4">
        <div class="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
          <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h3 class="text-lg font-semibold">${doctor.flag}</h3>
      </div>
      
      <div class="space-y-3">
        <div>
          <h4 class="font-medium text-gray-700 dark:text-gray-300 mb-1">How to Verify:</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">${
            doctor.howToVerify
          }</p>
        </div>
        
        <div class="flex flex-col space-y-2">
          ${
            doctor.listLink
              ? `
          <a href="${doctor.listLink}" target="_blank" rel="noopener noreferrer" 
             class="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
            View Approved List
          </a>
          `
              : ""
          }
          
          ${
            doctor.portalLink
              ? `
          <a href="${doctor.portalLink}" target="_blank" rel="noopener noreferrer" 
             class="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
            Verification Portal
          </a>
          `
              : ""
          }
          
          ${
            doctor.contactEmail
              ? `
          <a href="mailto:${doctor.contactEmail}" 
             class="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            ${doctor.contactEmail}
          </a>
          `
              : ""
          }
        </div>
      </div>
    </div>
  `;
}

function highlightSearchTerm(text, term) {
  if (!term) return text;

  const regex = new RegExp(`(${term})`, "gi");
  return text.replace(regex, '<span class="search-highlight">$1</span>');
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

// Expose utility functions globally
window.mlcApp = {
  scrollToSection,
  toggleTheme,
};
