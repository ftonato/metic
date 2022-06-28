import {metic} from '../src/main';

describe('Metic', () => {
  it('should inherit a object', () => {
    expect(metic).toBeDefined();
    expect(typeof metic).toBe('object');
    expect(metic instanceof Object).toBeTruthy();
  });

  it('should invoke the call method', async () => {
    const spyAdd = jest.spyOn(metic, 'add')
    const a = 100;
    const b = 200;

    metic.add(a, b);

    expect(spyAdd).toHaveBeenCalled();
    expect(spyAdd).toHaveBeenCalledTimes(1);
    expect(spyAdd).toHaveBeenCalledWith(a, b);
  });

  it('should calculate properly', () => {
    const operations = [
      {a: 0.1, b: 0.2, expected: 0.3},
      {a: -0.1, b: 0.2, expected: 0.1},
      {a: 0.1, b: -10, expected: -9.9},
      {a: -100, b: -500, expected: -600},
    ];

    for (let {a, b, expected} of operations) {
      expect(metic.add(a, b)).toBe(expected);
    }
  });

  it('should respect the decimals (1, 2, 3, 4)', () => {
    const operations = [
      {a: 0.1, b: 0.2, decimals: 1, expected: 0.3},
      {a: -0.1, b: 0.2, decimals: 1, expected: 0.1},
      {a: 0.1, b: -10, decimals: 1, expected: -9.9},
      {a: -100, b: -500, decimals: 1, expected: -600},

      {a: 0.1, b: 0.23, decimals: 2, expected: 0.33},
      {a: -0.1, b: 0.21, decimals: 2, expected: 0.11},
      {a: 0.1, b: -10.110, decimals: 2, expected: -10.01},
      {a: -100, b: -500, decimals: 2, expected: -600},

      {a: 0.1, b: 0.233, decimals: 3, expected: 0.333},
      {a: -0.1, b: 0.211, decimals: 3, expected: 0.111},
      {a: 0.1, b: -10.54321, decimals: 3, expected: -10.443},
      {a: -100, b: -500, decimals: 3, expected: -600},

      {a: 0.1, b: 0.2333, decimals: 4, expected: 0.3333},
      {a: -0.1, b: 0.2111, decimals: 4, expected: 0.1111},
      {a: 0.1, b: -10.1111, decimals: 4, expected: -10.0111},
      {a: -100, b: -500, decimals: 4, expected: -600},
    ];

    for (let {a, b, decimals, expected} of operations) {
      expect(metic.add(a, b, decimals)).toBe(expected);
    }
  });

  it('should throw an error message if positions is not valid', () => {
    const a = 10;
    const b = 10
    const positions = -1
    expect(() => metic.add(a, b, positions)).toThrowError('[Positions] parameter is not a valid number!')
  });
});
