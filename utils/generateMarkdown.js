// function to generate markdown for README
function generateMarkdown(data) {

  // generate a Table of Contents MD string
  // for the title - we split the string and join it again with dashes in order to make a MD link for the TOC
  const TOC = 
`
## Table of Contents

[*${data.title}*](#${data.title.split(' ').join('-').toLowerCase()})
1. [Table of Contents](#table-of-contents)
2. [Description](#description)
3. [Installation](#installation)
4. [Usage](#usage)
5. [License](#license)
6. [Contributing](#contributing)
7. [Tests](#tests)
8. [Questions](#questions)
<hr>
`
  // make outputMarkdown variable to contain MD syntax string for output
  const outputMarkdown = `# ${data.title}

${TOC}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions or need to contact me about the code, you can do that through my GitHub Repository [github.com/${data.github}](https://github.com/${data.github}), or you can write to my email: ${data.email}
`;
  return outputMarkdown;
}

module.exports = generateMarkdown;
