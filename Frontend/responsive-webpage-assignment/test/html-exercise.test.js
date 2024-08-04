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
},'');

describe('Exercise Test Cases', () => {

  test('Header section must be implemented using header tag with class name (header-section) ', async () => {
    const htmlFiles = getHtmlFiles();
    const files = await htmlFiles.reduce(async (errors, file) => {
      const content = await getFileContent(file);
      const $ = cheerio.load(content);
      const menulist = $('.header-section');
      expect(menulist).toBeTruthy();
    }, { files: [], count: 0 });
  });


  test('Header must have logo image !!! ', async () => {
    const htmlFiles = getHtmlFiles();
    const files = await htmlFiles.reduce(async (errors, file) => {
      const content = await getFileContent(file);
      const $ = cheerio.load(content);
      const brandimage = $('.navbar-brand-img').attr('src');
      expect(brandimage).not.toBe(undefined);
    }, { files: [], count: 0 });
  });


  test('Header must have menu options by using nav link ', async () => {
    const htmlFiles = getHtmlFiles();
    const files = await htmlFiles.reduce(async (errors, file) => {
      const content = await getFileContent(file);
      const $ = cheerio.load(content);
      const menulist = $('.nav-link');
      expect(menulist).toBeTruthy();
    }, { files: [], count: 0 });
  });


  test('Header must have the button for search ', async () => {
    const htmlFiles = getHtmlFiles();
    const files = await htmlFiles.reduce(async (errors, file) => {
      const content = await getFileContent(file);
      const $ = cheerio.load(content);
      const signupbutton = $('.butsearch');
      expect(signupbutton).toBeTruthy();
    },{ files: [], count: 0 });
  });


  test('Carousel section must be implemented using section tag with class name (carousel-section) ', async () => {
    const htmlFiles = getHtmlFiles();
    const files = await htmlFiles.reduce(async (errors, file) => {
      const content = await getFileContent(file);
      const $ = cheerio.load(content);
      const menulist = $('.carousel-section');
      expect(menulist).toBeTruthy();
    }, { files: [], count: 0 });
  });


  test('Carousel section must contains items for displayinh images', async () => {
    const htmlFiles = getHtmlFiles();
    const files = await htmlFiles.reduce(async (errors, file) => {
      const content = await getFileContent(file);
      const $ = cheerio.load(content);
      const menulist = $('.carousel-item');
      expect(menulist).toBeTruthy();
    }, { files: [], count: 0 });
  });
  

test('Jumbotron section must be implemented using section tag with class name (jumbotron-section) ', async () => {
  const htmlFiles = getHtmlFiles();
  const files = await htmlFiles.reduce(async (errors, file) => {
    const content = await getFileContent(file);
    const $ = cheerio.load(content);
    const menulist = $('.jumbotron-section');
    expect(menulist).toBeTruthy();
  }, { files: [], count: 0 });
});



test('Product section must be implemented using section tag with class name (product-section) ', async () => {
  const htmlFiles = getHtmlFiles();
  const files = await htmlFiles.reduce(async (errors, file) => {
    const content = await getFileContent(file);
    const $ = cheerio.load(content);
    const menulist = $('.product-section');
    expect(menulist).toBeTruthy();
  }, { files: [], count: 0 });
});


test('Product Description section must be implemented using section tag with class name (product-description-section) ', async () => {
  const htmlFiles = getHtmlFiles();
  const files = await htmlFiles.reduce(async (errors, file) => {
    const content = await getFileContent(file);
    const $ = cheerio.load(content);
    const menulist = $('.product-description-section');
    expect(menulist).toBeTruthy();
  }, { files: [], count: 0 });
});

  test('Footer section must be implemented using footer tag with class name (footer-section) ', async () => {
    const htmlFiles = getHtmlFiles();
    const files = await htmlFiles.reduce(async (errors, file) => {
      const content = await getFileContent(file);
      const $ = cheerio.load(content);
      const menulist = $('.footer-section');
      expect(menulist).toBeTruthy();
    }, { files: [], count: 0 });
  });


  
  test('Responsiveness check for col-12 ', async () => {
    const htmlFiles = getHtmlFiles();
    const files = await htmlFiles.reduce(async (errors, file) => {
      const content = await getFileContent(file);
      const $ = cheerio.load(content);
      const menulist = $('.col-12');
      expect(menulist).toBeTruthy();
    }, { files: [], count: 0 });
  });

  test('Responsiveness check for col-lg-3', async () => {
    const htmlFiles = getHtmlFiles();
    const files = await htmlFiles.reduce(async (errors, file) => {
      const content = await getFileContent(file);
      const $ = cheerio.load(content);
      const menulist = $('.col-lg-3');
      expect(menulist).toBeTruthy();
    }, { files: [], count: 0 });
  });


  test('Responsiveness check for col-md-6', async () => {
    const htmlFiles = getHtmlFiles();
    const files = await htmlFiles.reduce(async (errors, file) => {
      const content = await getFileContent(file);
      const $ = cheerio.load(content);
      const menulist = $('.col-md-6');
      expect(menulist).toBeTruthy();
    }, { files: [], count: 0 });
  });


  test('Responsiveness check for images by using (img-fluid) ', async () => {
    const htmlFiles = getHtmlFiles();
    const files = await htmlFiles.reduce(async (errors, file) => {
      const content = await getFileContent(file);
      const $ = cheerio.load(content);
      const menulist = $('.img-fluid');
      expect(menulist).toBeTruthy();
    }, { files: [], count: 0 });
  });

});