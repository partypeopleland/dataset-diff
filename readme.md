

## getDiff([dataSet1,dataSet2], compareCondition)

Provide two sets of collection and comparison conditions, and return the difference data

### Parameter

| params           | desc                   |
| ---------------- | ---------------------- |
| DataSets         | two sets of collection |
| compareCondition | comparison conditions  |

### Sample Code

```javascript
var tool = require('dataset-diff');

var data1 = [
	{ id: 1, tag: 'apple', score: 71, age: 18 },
	{ id: 2, tag: 'apple', score: 71, age: 18 },
];

var data2 = [
	{ id: 1, tag: 'apple', score: 71, age: 18 },
	{ id: 2, tag: 'apple', score: 71, age: 18 },
	{ id: 3, tag: 'apple', score: 71, age: 18 },
];
var result = tool.getDiff([data1, data2], ['tag', 'id']);

console.log(result); // [{ id: 3, tag: 'apple', score: 71, age: 18 }]
```
