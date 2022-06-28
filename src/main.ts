const sum = (a: any = 0, b: any = 0, positions: number = 4): number => {
  const factor = Math.pow(10, positions);
  return (a.toFixed(positions) * factor + b.toFixed(positions) * factor) / factor;
};

const metic = {
  add: function (a: number, b: number, positions: number = 4) {
    if (positions <= 0) {
      throw '[Positions] parameter is not a valid number!';
    }
    return sum(a, b, positions);
  },
};

export default metic;
export {metic};
