'use strict';

module.exports = function(value, srcLow, srcHigh, destLow, destHigh) {
  return (value - srcLow) / (srcHigh - srcLow) * (destHigh - destLow) + destLow;
};
