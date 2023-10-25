const { mergeByakugan, sortByakugan } = require('./merge');

describe('mergeByakugan', () => {
    test('should merge and sort two arrays', () => {
        const hinata = ['Hinata', 'Naruto'];
        const neji = ['Neji', 'Sakura'];
        const result = mergeByakugan(hinata, neji);
        expect(result).toEqual(['Hinata', 'Naruto', 'Neji', 'Sakura']);
    });
});

describe('sortByakugan', () => {
    test('should sort an array using merge sort', () => {
        const ninjas = ['Sasuke', 'Naruto', 'Hinata', 'Neji', 'Sakura'];
        const result = sortByakugan(ninjas);
        expect(result).toEqual(['Hinata', 'Naruto', 'Neji', 'Sakura', 'Sasuke']);
    });
});