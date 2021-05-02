// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'None'){
    return '[![License: WTFPL](https://img.shields.io/badge/License-${license}.svg)]'
  }else{
    return '';
  }
}

//This does not need an 'else' statement, because 'return' takes the place of else.

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None'){
    return `\n* [License](#license)\n`
  }else{
    return '';
  }
}
// the \n is a line break.

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None'){
    return `## License
    This project is licensed under the ${license} license`;
  }else{
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.licensure)}

  ## Table of Contents

  * [decription](#Description)

  * [media](#Media)

  * [installation](#Installation)

  * [contributors](#Contributors)

  * [contact](#Contact)

  * (#Future Development)

  * [projectStatus](#Project Status)


  ## Description
  ${data.description}

  ## Media
  ${data.media}
  
  ## Installation Instruction
  ${data.installation}

  ## Contributors
  ${data.contributors}

  ## Contact
  If you have any questions about this repository, email ${data.contact}:
  ${data.email}


  ## Plans for Future Development
  ${data.futureDevelopment}

  ## Project Status
  ${data.projectStatus}

`;
}

module.exports = generateMarkdown;
