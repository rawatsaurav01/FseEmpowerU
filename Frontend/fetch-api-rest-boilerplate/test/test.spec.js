// test.js
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const getPost = require('../src/apiCall');

chai.use(chaiAsPromised);
const { expect } = chai;

describe('API Call Test', () => {

  it("should be a function", function () {
    const _fetchAPI = getPost;
    expect(typeof(_fetchAPI)).equal("function");
  });

  it('should make a successful GET API call check userId', async () => {
    const result = await getPost('https://jsonplaceholder.typicode.com/posts/1');
    expect(result).to.have.property('userId');
  });

  it('should make a successful GET API call check userId', async () => {
    const result = await getPost('https://jsonplaceholder.typicode.com/posts/1');
    expect(result).to.have.property('id');
  });

  it('should make a successful GET API call check userId', async () => {
    const result = await getPost('https://jsonplaceholder.typicode.com/posts/1');
    expect(result).to.have.property('title');
  });

  it('should make a successful GET API call check userId', async () => {
    const result = await getPost('https://jsonplaceholder.typicode.com/posts/1');
    expect(result).to.have.property('body');
  });

  it('should handle API call errors', async () => {
    // Simulate a non-existent URL to trigger an error
    const invalidUrl = 'https://example.com/nonexistent';
    const invalidCall = () => getPost(invalidUrl);

    await expect(invalidCall()).to.be.rejectedWith('Error fetching data: Failed to fetch data. Status: 404');
  });
});
