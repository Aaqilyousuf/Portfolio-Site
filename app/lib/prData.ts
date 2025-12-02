export interface PRIdentifier {
    owner: string;
    repo: string;
    number: number;
    orgName?: string; // Optional override for display
}

export const prList: PRIdentifier[] = [
    // AlphaOneLabs
    { owner: "alphaonelabs", repo: "alphaonelabs-education-website", number: 665, orgName: "AlphaOneLabs" },
    { owner: "alphaonelabs", repo: "alphaonelabs-education-website", number: 661, orgName: "AlphaOneLabs" },
    { owner: "alphaonelabs", repo: "alphaonelabs-education-website", number: 668, orgName: "AlphaOneLabs" },
    { owner: "alphaonelabs", repo: "alphaonelabs-education-website", number: 670, orgName: "AlphaOneLabs" },

    // OpenScienceLabs
    { owner: "OpenScienceLabs", repo: "opensciencelabs.github.io", number: 220, orgName: "OpenScienceLabs" },
    { owner: "OpenScienceLabs", repo: "opensciencelabs.github.io", number: 224, orgName: "OpenScienceLabs" },
    { owner: "osl-incubator", repo: "scicookie", number: 347, orgName: "OpenScienceLabs" },
    { owner: "osl-incubator", repo: "scicookie", number: 349, orgName: "OpenScienceLabs" },
    { owner: "osl-incubator", repo: "scicookie", number: 351, orgName: "OpenScienceLabs" },

    // EbookFoundation
    { owner: "EbookFoundation", repo: "free-programming-books", number: 11929, orgName: "EbookFoundation" },
    { owner: "EbookFoundation", repo: "free-programming-books", number: 11930, orgName: "EbookFoundation" },
    { owner: "EbookFoundation", repo: "free-programming-books", number: 11939, orgName: "EbookFoundation" },
    { owner: "EbookFoundation", repo: "free-programming-books", number: 12316, orgName: "EbookFoundation" },
    { owner: "EbookFoundation", repo: "free-programming-books", number: 12304, orgName: "EbookFoundation" },

    // Joomla-CMS
    { owner: "joomla", repo: "joomla-cms", number: 46121, orgName: "Joomla-CMS" }, // Note: User said 45121 but link was 46121, assuming 46121 based on link
    { owner: "joomla", repo: "joomla-cms", number: 46195, orgName: "Joomla-CMS" },
    { owner: "joomla", repo: "joomla-cms", number: 46251, orgName: "Joomla-CMS" },

    // Vacanza/holidays
    { owner: "vacanza", repo: "holidays", number: 2953, orgName: "Vacanza/holidays" },
    { owner: "vacanza", repo: "holidays", number: 2962, orgName: "Vacanza/holidays" },

    // Excalidraw
    { owner: "excalidraw", repo: "excalidraw", number: 10350, orgName: "Excalidraw" },
];
