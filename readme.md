## Feature

### updateData(source, newData, condition)

給予更新資料，原始資料應該要被更新

| param     | describe     |
| --------- | ------------ |
| source    | 原始資料     |
| newData   | 更新資料     |
| condition | 識別屬性集合 |

### sample
```js
const tool = require('dataset-diff');
let condition = ['id', 'name'];
let source = [
	{ id: 1, name: 'art', status: 'sleep' },
	{ id: 2, name: 'mary', status: 'sleep' },
	{ id: 3, name: 'joe', status: 'sleep' },
];
let newData = [
	{ id: 1, name: 'art', status: 'jump' },
	{ id: 2, name: 'mary', status: 'jump' },
];

let result = tool.updateData(source, newData, condition);
/*
[
	{ id: 1, name: 'art', status: 'jump' },
	{ id: 2, name: 'mary', status: 'jump' },
	{ id: 3, name: 'joe', status: 'sleep' },
];
*/
```

### removeData(source, removeData, condition)

原始資料應移除刪除名單的資料

| param      | describe     |
| ---------- | ------------ |
| source     | 原始資料     |
| removeData | 刪除清單     |
| condition  | 識別屬性集合 |

### sample

```js
const tool = require('dataset-diff');
let condition = ['id', 'name'];
let source = [
	{ id: 1, name: 'art', status: 'sleep' },
	{ id: 2, name: 'mary', status: 'sleep' },
	{ id: 3, name: 'joe', status: 'sleep' },
];
let removeData = [
	{ id: 1, name: 'art', status: 'jump' },
	{ id: 2, name: 'mary', status: 'jump' },
];

let result = tool.removeData(source, removeData, condition);
/*
[
	{ id: 1, name: 'art', status: 'sleep' },
	{ id: 2, name: 'mary', status: 'sleep' },
];
*/
```
