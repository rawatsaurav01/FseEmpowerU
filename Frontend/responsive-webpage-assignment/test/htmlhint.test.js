const chalk = require('chalk');
const htmlhint = require('htmlhint').default;
const cheerio = require('cheerio');

const getHtmlFiles = require('./utils/get-html-files');
const getFileContent = require('./utils/get-file-content');
const htmlHintConfig = require('./config/htmlhint.config');

// A Utility Function to merge all the errors
const createErrorMessage = lintErrors => lintErrors.files.reduce((errorString, file) => {
  const errorsOfFile = file.messages.reduce((error, message) => {
    const errorMessage = `
      ${chalk.underline.bold(file.filename)} Line: ${chalk.bold(message.line)} Col: ${chalk.bold(message.col)} ${chalk.red(message.message)}
      ${chalk.red.bold(message.evidence)}
      Details can be found at ${message.rule.link}`;
    return [error, errorMessage].join('\n');
  }, '');
  return [errorString, errorsOfFile].join('');
}, '');

describe('HTML Lint Cases', () => {
  test('Should adhere to all the HTML Hint Configuration', async () => {
    // Lint all the HTML Files
    const htmlFiles = getHtmlFiles();
    const lintErrors = await htmlFiles.reduce(async (errors, file) => {
      const content = await getFileContent(file);
      const messages = htmlhint.verify(content, htmlHintConfig);
      const lintErrorsOfAllFiles = errors;
      if (messages.length)
      {
        lintErrorsOfAllFiles.files.push({ filename: file, messages });
        lintErrorsOfAllFiles.count += messages.length;
      }
      return lintErrorsOfAllFiles;
    },{ files: [], count: 0 });

    const lintErrorsAsString = createErrorMessage(lintErrors);
    expect(lintErrors.count, lintErrorsAsString).toBe(0);
  });
});

