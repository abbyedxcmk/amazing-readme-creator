// function to generate markdown for README
function generateMarkdown(data) {
  // make outputMarkdown variable to contain MD syntax string for output
  const outputMarkdown = `# ${data.title}
 
  `;
  return outputMarkdown;
}

module.exports = generateMarkdown;
