const math = require('./math');

describe('math module', () => {
  describe('add method', () => {
    it('should do addition', () => {
      const result = math.add(1, 2);
      expect(result).toEqual(3);
    });
  });

  describe('subtract method', () => {
    it('should do subtraction', () => {
      const result = math.subtract(2, 1);
      expect(result).toEqual(1);
    });
  });
});
