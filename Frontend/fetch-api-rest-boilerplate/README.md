## Practice Exercise

### Write JavaScript Program To Make a GET API Call using Fetch

#### Context

The fetch() method starts the process of fetching a resource from a server.

The fetch() method returns a Promise that resolves to a Response object.

#### Problem Statements

1. Create a function named getPost(url) in src/apiCall.js file.
2. Use fetch() to make GET api call to url: https://jsonplaceholder.typicode.com/posts/1.
3. Check if response if ok, and return response in json format.
4. If response is not ok, Then throw error with message `Failed to fetch data. Status: ${response.status}`
5. Catch any error using catch(), and return error as `Error fetching data: ${error.message}`

#### Instructions

1. Download and unzip the boilerplate code.  
2. Run the command `npm install` to install the dependencies.  
3. Open the boilerplate code in VSCode to develop the assignment solution.
4. Provide the solution code inside the respective `.js` file.
5. Function should return the resultant which can then be tested through automated test cases.
6. First, test the solution locally by running the command `npm start`.  
7. Make sure all test cases are passed by using `npm test` command
8. Refactor the solution to ensure all test cases are passing.  
9. DO NOT MODIFY THE PROVIDED CODE, ELSE THIS MAY IMPACT THE TEST CODE EXECUTION.
10. Zip the solution code by selecting all the files and folders **excluding the node_modules folder** and give the name same as assignment name to the zipped file.
11. Upload the zipped solution for submission to mentor.