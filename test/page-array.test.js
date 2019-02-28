import pageArray from '../src/page-array.js';

const test = QUnit.test;

QUnit.module('Making array slices');

const array = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen'
];

test('first page with 4 per page', assert => {
    // arange
    const expected = [
        'one',
        'two',
        'three',
        'four'
    ];
    const pagingOptions = {
        currentPage: 1,
        perPage: 4
    };
    // act
    const result = pageArray(array, pagingOptions);
    // assert
    assert.deepEqual(result, expected);
});

test('second page with 3 per page', assert => {
    // arrange
    const expected = [
        'four',
        'five',
        'six'
    ];
    const pagingOptions = {
        currentPage: 2,
        perPage: 3
    };
     // act
    const result = pageArray(array, pagingOptions);
     // assert
    assert.deepEqual(result, expected);
});

test('third page with 5 per page', assert => {
    // arrange
    const expected = [
        'eleven',
        'twelve',
        'thirteen'
    ];
    const pagingOptions = {
        currentPage: 3,
        perPage: 5
    };
     // act
    const result = pageArray(array, pagingOptions);
     // assert
    assert.deepEqual(result, expected);
});