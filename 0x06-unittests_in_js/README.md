### Unittests in JavaScript

1. How to use Mocha to write a test suite
2. How to use different assertion libraries (Node or Chai)
3. How to present long test suites
4. When and how to use spies
5. When and how to use stubs
6. What are hooks and when to use them
7. Unit testing with Async functions
8. How to write integration tests with a small node server

**What are Assertions ?**
Assertions are functions that verify that a result meets a specific expectation.

1. _assert.equal() :
A test using this function will pass when the two values we’re verifying are equal. In non-strict mode, it works similarly to the “==” operator.
Syntax:
```
assert.equal(actual, expected, message);
```