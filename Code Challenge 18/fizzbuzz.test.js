const { fizzBuzz, tree, findTheBuzz } = require('./fizzbuzz');

describe('FizzBuzz Binary Tree', () => {
    it('should work', () => {
        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        findTheBuzz(tree); 

        expect(consoleLogSpy).toHaveBeenCalledTimes(13);
        consoleLogSpy.mockRestore();
    });
});