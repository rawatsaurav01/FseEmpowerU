## Problem Statement: Writing Krama unit test cases for the given solution by HTTP mock and Async testing ##

**This exercise should be completed by writing a unittest cases in spec.ts for all available components**

- Below is the summary of the solution provided

- This exercise contains a simple frontend view that gets its data from free open source API:
  - `data.service.ts` file contains method to get data from https://jsonplaceholder.typicode.com

- Some of the mandatory test cases
  - In `data-display.component.spec.ts` file
    + The first test case (should display data from the service) demonstrates mocking an HTTP call and checking if the component displays the data correctly.
    + The second test case (should handle error from the service gracefully) simulates an error in the service call and checks if the component handles it appropriately.
    + The third test case (should update data after a delay) introduces a delay using fakeAsync and tick to test asynchronous behavior.
    + The fourth test case (should handle asynchronous data retrieval) uses fakeAsync and tick to test if asynchronous data retrieval triggers the expected behavior in the component.
      
- Test cases should be written for positive and negative scenarios, wherever applicable
- Test methods should follow the naming convention
- Test coverage should be 100%

## Instructions

- Take care of whitespace/trailing whitespace
- Do not change the provided class/method names unless instructed
- Follow best practices while coding
