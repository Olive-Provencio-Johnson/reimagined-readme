// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";
  let licenseLink = "";
  if (license === "Apache 2.0 License") {
    licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
    licenseLink = "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "GNU GPLv3") {
    licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
    licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
  } else if (license === "BSD 3-Clause License") {
    licenseBadge =  "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
    licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
  } else if (license === "MIT") {
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    licenseLink = "https://opensource.org/licenses/MIT";
  } else if (license === "Eclipse Public License 1.0") {
    licenseBadge = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]";
    licenseLink = "https://opensource.org/licenses/EPL-1.0";
  }
  return (licenseBadge, licenseLink);
}

// Function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}
// combining this in the function above 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ${data.description}
---
  ## About
  ${data.about}

  ---
  ## Installation
  ${data.installation}
  ---
  ## Usage
  ${data.usage}

  [The deployed application can be viewed here](${data.URL})
---
## Credits
  ${data.credits}
  ---
## License
  ${data.license}
  ${renderLicenseBadge(data.license)}

`;
}

module.exports = generateMarkdown;
