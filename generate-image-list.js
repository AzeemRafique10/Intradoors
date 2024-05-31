const fs = require('fs');
const path = require('path');

const assetsPath = 'src/assets/img'; // Change this to the path of your assets folder

function getFilenames(directory) {
  const filenames = fs.readdirSync(directory);
  return filenames.filter((filename) => fs.statSync(path.join(directory, filename)).isFile());
}

const imageNames = getFilenames(assetsPath);

fs.writeFileSync('./src/assets/image-names.json', JSON.stringify(imageNames, null, 2));
console.log('image-names.json generated in ./src/assets/ directory.');