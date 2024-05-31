const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, '.htaccess.template');
const outputPath = path.join(__dirname, 'dist', '.htaccess');

// Read the template .htaccess
const template = fs.readFileSync(templatePath, 'utf8');

// Write the template content to the dist directory
fs.writeFileSync(outputPath, template);

console.log('.htaccess generated in dist directory.');
