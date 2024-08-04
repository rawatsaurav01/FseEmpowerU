# HTML/Bootstrap Assignment Evaluator

This evaluator checks is an Amalgamation of three components:
  1. **Bootlint**: Default Bootstrap Linting
  2. **HtmlHint**: Uses the following configuration
     ```
      {
        'tagname-lowercase': true,
        'attr-lowercase': true,
        'attr-value-double-quotes': true,
        'attr-value-not-empty': true,
        'attr-no-duplication': true,
        'doctype-first': true,
        'tag-pair': true,
        'empty-tag-not-self-closed': true,
        'spec-char-escape': true,
        'id-unique': true,
        'src-not-empty': true,
        'title-require': true,
        'alt-require': true,
        'doctype-html5': true,
        'style-disabled': true,
        'inline-style-disabled': true,
        'inline-script-disabled': true,
        'space-tab-mixed-disabled': 'space',
        'id-class-ad-disabled': false,
        'href-abs-or-rel': false,
        'attr-unsafe-chars': true,
        'head-script-disabled': true
      }
     ``` 
  3. **Lighthouse**: Audits on the following parameters
      ```
        [
          'image-alt',
          'document-title',
          'duplicate-id',
          'meta-viewport',
          'meta-description',
          'errors-in-console',
          'button-name',
          'link-name'
        ]
      ```

## Folder Structure:
All the project files is expected to go inside the `src/` folder 

## Instructions to run test case
```
# Installs all the dependencies
yarn install

# Runs the test case
yarn test
```

**Note:** The parameters of the linting and audits are chosen based on the concepts taught.