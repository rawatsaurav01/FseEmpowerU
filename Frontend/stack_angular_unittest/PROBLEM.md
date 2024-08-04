## Problem Statement: Writing Krama unit test cases for the given solution ##

**This exercise should be completed by writing a unittest cases in spec.ts for all available components**

- Below is the summary of the solution provided

- This exercise contains a simple issue tracker frontend that uses json server to perform backend operation :
  - `issue.servie.ts` file contains 3 methods to perform addIssue, getIssue, and deleteIssue

- Some of the mandatory test cases

    - In `issue.component.spec.ts`:
      + Check if Issue component exists
      + Check onSubmit method existence
      + Check ngOnInit method existence
      + Check clearForm method existence
      + Check if title form field validates input correctly
      + Check if description form field validates input correctly
      + Check onSubmit is calling IssueService or not

    - In `issues-list.component.spec.ts`:
      + Check if component exist
      + Check ngOnInit method existence
      + Check deleteIssue is calling IssueService or not
      + Check ngOnInit is calling IssueService or not

    - In `issue.service.spes.ts`:
      + Test to check if service exist
      + Testing service for addIssue method
      + Testing service for getIssues method
      + Testing service for deleteIssue method
      
- Test cases should be written for positive and negative scenarios, wherever applicable
- Test methods should follow the naming convention
- Test coverage should be 100%

## Instructions

- Take care of whitespace/trailing whitespace
- Do not change the provided class/method names unless instructed
- Follow best practices while coding
