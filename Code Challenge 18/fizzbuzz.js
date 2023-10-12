'use strict';

function fizzBuzz(value) {
    if (value % 3 === 0 && value % 5 === 0) {
        return "FizzBuzz";
    } else if (value % 3 === 0) {
        return "Fizz";
    } else if (value % 5 === 0) {
        return "Buzz";
    } else {
        return value;
    }
}
const tree = {
    value: 1,
    left: {
        value: 2,
        left: { value: 4 },
        right: { value: 5 },
    },
    right: {
        value: 3,
        left: { value: 6 },
        right: {
            value: 7,
            left: {
                value: 8,
                right: {
                    value: 9,
                    right: { value: 11 },
                },
            },
            right: {
                value: 13,
                left: { value: 14 },
            },
        },
    },
};

function findTheBuzz(node) {
    if (node) {
        console.log(fizzBuzz(node.value));
        findTheBuzz(node.left);
        findTheBuzz(node.right);
    }
}

findTheBuzz(tree);