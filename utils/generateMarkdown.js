// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'None'){
    return '[![License: WTFPL](https://img.shields.io/badge/License-${license}.svg)]'
  }
  return '';
}

//This does not need an 'else' statement, because 'return' takes the place of else.



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None'){
    return `\n* [License](#license)\n`
  }
}

// the \n is to make sure nothing is around it.

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  $(renderLicenseBadge)(data.licensure)

  ##Table of Contents
  $(data.description)
  $(data.media)
  $(data.installation)
  $(data.contact)
  $(data.futureDevelopment)
  $(data.projectStatus)

`;
}

module.exports = generateMarkdown;
