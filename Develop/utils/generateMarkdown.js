// Function that returns a license badge based on which license is passed in
// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";
  let licenseLink = "";
  if (license === "Apache 2.0 License") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
    licenseLink = "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "GNU GPLv3") {
    licenseBadge =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
    licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
  } else if (license === "BSD 3-Clause License") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
    licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
  } else if (license === "MIT") {
    licenseBadge =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    licenseLink = "https://opensource.org/licenses/MIT";
  } else if (license === "Eclipse Public License 1.0") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]";
    licenseLink = "https://opensource.org/licenses/EPL-1.0";
  }
  return { licenseBadge, licenseLink };
}

// function that returns the license section of README. Returns and empty string if there is no license
function renderLicenseSection(license) {
  if (license) {
    const licenseObj = renderLicenseBadge(license);
    return `This project is licensed under the ${license} license. ${licenseObj.licenseBadge} ${licenseObj.licenseLink}
    [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  return "";
}

//function to generate markdown for README
function generateMarkdown(response) {
  return `
  
  # ${response.title}

  ${response.description}
---
  ## About
  ${response.about}

  ---
  ## Installation
  ${response.installation}
  ---
  ## Usage
  ${response.usage}

  [The deployed application can be viewed here](${response.URL})
---
## Credits
  ${response.credits}
  ---
## License
  ${renderLicenseSection(response.license)}

`;
}

module.exports = generateMarkdown;
