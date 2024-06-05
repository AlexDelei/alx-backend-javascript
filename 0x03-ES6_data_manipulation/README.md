_JavaScript Data Manipulation using arrays_

#### What is an array ? 
Arrays are generally described as "list-like objects"; they are basically single objects that contain multiple values stored in a list. Array objects can be stored in variables and dealt with in much the same way as any other type of value, the difference being that we can access each value inside the list individually, and do super useful and efficient things with the list, like loop through it and do the same thing to every value.

code.
```
const arr = [1, 2, 3, 4, 'alex', 'run', 'eat'];

const secondArr = new Array('del', 'big', 'data');

const thirdArr = (param) => ['what', 'is', 'this'];

export function fourthArr() { return ['meta', 'data'] }; // array literals are suggested
```

#### What are typed arrays ?
JavaScript typed arrays are array-like objects that provide a mechanism for reading and writing raw binary data in memory buffers.


- JavaScript typed arrays split the implementation into _buffers_ and _views_.

