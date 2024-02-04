// function to generate markdown for README
function generateMarkdown(data) {
  // make outputMarkdown variable to contain MD syntax string for output
  const outputMarkdown = `# ${data.title}

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
