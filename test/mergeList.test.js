var mocha = require('mocha');
var chai = require('chai');
chai.should();

var tool = require('../src/index.js');

describe('更新資料測試', () => {
    it(`原始清單更新資料，art狀態應由【作業中】變更為【休息】`, () => {
        let source = [
            {id: 1, name: 'art', status: '作業中'},
            {id: 2, name: 'mars', status: '睡覺'},
            {id: 3, name: 'jack', status: '念書'}
        ]

        let newData = [
            {id: 1, name: 'art', status: '休息'}
        ]

        let condition = ['id', 'name']
        let expected = [
            {id: 1, name: 'art', status: '休息'},
            {id: 2, name: 'mars', status: '睡覺'},
            {id: 3, name: 'jack', status: '念書'}
        ]

        let actual = tool.mergeList(source, newData, condition)
        actual.should.be.deep.equal(expected)
    });
    it(`原始清單更新資料，jack狀態應由【念書】變更為【跳舞】`, () => {
        let source = [
            {id: 1, name: 'art', status: '作業中'},
            {id: 2, name: 'mars', status: '睡覺'},
            {id: 3, name: 'jack', status: '念書'}
        ]

        let newData = [
            {id: 3, name: 'jack', status: '跳舞'}
        ]

        let condition = ['id', 'name']
        let expected = [
            {id: 1, name: 'art', status: '作業中'},
            {id: 2, name: 'mars', status: '睡覺'},
            {id: 3, name: 'jack', status: '跳舞'}
        ]

        let actual = tool.mergeList(source, newData, condition)
        actual.should.be.deep.equal(expected)
    });
    it(`原始清單更新資料，mars,jack狀態應變更為【工作】`, () => {
        let source = [
            {id: 1, name: 'art', status: '作業中'},
            {id: 2, name: 'mars', status: '睡覺'},
            {id: 3, name: 'jack', status: '念書'}
        ]

        let newData = [
            {id: 2, name: 'mars', status: '工作'},
            {id: 3, name: 'jack', status: '工作'}
        ]

        let condition = ['id', 'name']
        let expected = [
            {id: 1, name: 'art', status: '作業中'},
            {id: 2, name: 'mars', status: '工作'},
            {id: 3, name: 'jack', status: '工作'}
        ]

        let actual = tool.mergeList(source, newData, condition)
        actual.should.be.deep.equal(expected)
    });
});

describe('新增資料測試', () => {
    it(`原始清單新增資料，清單追加david資料`,()=>{
        let source = [
            {id: 1, name: 'art', status: '作業中'},
            {id: 2, name: 'mars', status: '睡覺'},
            {id: 3, name: 'jack', status: '念書'}
        ]

        let newData = [
            {id: 4, name: 'david', status: '看電視'}
        ]

        let condition = ['id', 'name']
        let expected = [
            {id: 1, name: 'art', status: '作業中'},
            {id: 2, name: 'mars', status: '睡覺'},
            {id: 3, name: 'jack', status: '念書'},
            {id: 4, name: 'david', status: '看電視'}
        ]

        let actual = tool.mergeList(source, newData, condition)
        actual.should.be.deep.equal(expected)
    })
})

describe('新增、更新資料測試', () => {
    it(`原始清單新增david資料，並更新art狀態`,()=>{
        let source = [
            {id: 1, name: 'art', status: '作業中'},
            {id: 2, name: 'mars', status: '睡覺'},
            {id: 3, name: 'jack', status: '念書'}
        ]

        let newData = [
            {id: 1, name: 'art', status: '工作'},
            {id: 4, name: 'david', status: '發呆'}
        ]

        let condition = ['id', 'name']
        let expected = [
            {id: 1, name: 'art', status: '工作'},
            {id: 2, name: 'mars', status: '睡覺'},
            {id: 3, name: 'jack', status: '念書'},
            {id: 4, name: 'david', status: '發呆'}
        ]

        let actual = tool.mergeList(source, newData, condition)
        actual.should.be.deep.equal(expected)
    })
})