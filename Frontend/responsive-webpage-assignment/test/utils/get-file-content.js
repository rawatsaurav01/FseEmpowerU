const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const getFileContent = async (filePath) => {
  const fileContent = await readFile(filePath, 'utf8');
  return fileContent;
};

module.exports = getFileContent;
