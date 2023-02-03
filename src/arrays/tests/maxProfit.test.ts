import maxProfit from '../maxProfit';

describe('maxProfit', () => {
  it('should return the maximum profit', () => {
    expect(maxProfit([7,1,5,3,6,4])).toBe(5);
  });

  it('should return 0 when given an array of length 1', () => {
    expect(maxProfit([7])).toBe(0);
  });

  it('should return 0 when given an array with no profitable trades', () => {
    expect(maxProfit([9,8,7])).toBe(0);
  });
});