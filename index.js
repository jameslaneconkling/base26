const alpha2Decimal = exports.alpha2Decimal = (alpha) => {
  const letters = alpha.split('');
  let out = 0;

  for (let i = 0; i < letters.length; i++) {
    out += (letters[letters.length - 1 - i].charCodeAt() - 96) * Math.pow(26, i);
  }

  return out;
};


const decimal2Alpha = exports.decimal2Alpha = (decimal) => {
  if (decimal <= 0) {
    throw new Error('Number must be > 0');
  }

  let out = '';

  while (true) {
    out = String.fromCharCode(((decimal - 1) % 26) + 97) + out;
    decimal = Math.floor((decimal - 1) / 26);

    if (decimal === 0) {
      break;
    }
  }

  return out;
};


exports.add = (alpha, num) => decimal2Alpha(alpha2Decimal(alpha) + num);

exports.subtract = (alpha, num) => decimal2Alpha(alpha2Decimal(alpha) - num);
