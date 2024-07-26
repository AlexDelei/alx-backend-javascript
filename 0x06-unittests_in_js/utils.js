const Utils = {
  calculateNumber: (type, a, b) => {
    if (type === 'SUM') {
      return Math.round(a) + Math.round(b);
    }
    if (type === 'SUBTRACT') {
      return Math.round(a) - Math.round(b);
    }
    if (type === 'DIVIDE') {
      if (Math.round(b) === 0) {
        return 'Error';
      }
      const res = Math.round(a) / Math.round(b);
      return res;
    }
  }
};

module.exports = Utils;
