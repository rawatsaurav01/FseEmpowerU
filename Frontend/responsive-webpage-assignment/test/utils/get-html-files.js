const glob = require('glob');

const getHtmlFiles = () => glob.sync('src/**.html');

module.exports = getHtmlFiles;
