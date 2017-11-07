const test = require('tape');
const alpha2Decimal = require('./index').alpha2Decimal;
const decimal2Alpha = require('./index').decimal2Alpha;
const add = require('./index').add;
const subtract = require('./index').subtract;


test('converts letters to numbers', (t) => {
  t.plan(11);

  t.equals(alpha2Decimal('a'), 1);
  t.equals(alpha2Decimal('j'), 10);
  t.equals(alpha2Decimal('z'), 26);
  t.equals(alpha2Decimal('aa'), 27);
  t.equals(alpha2Decimal('aj'), 36);
  t.equals(alpha2Decimal('az'), 52);
  t.equals(alpha2Decimal('ba'), 53);
  t.equals(alpha2Decimal('zz'), 702);
  t.equals(alpha2Decimal('aaa'), 703);
  t.throws(() => alpha2Decimal('A'), 703, 'Should not handle any characters besides a-z');
  t.throws(() => alpha2Decimal(''), 703, 'Should not handle empty string');
});


test('converts numbers to letters', (t) => {
  t.plan(9);

  t.equals(decimal2Alpha(1), 'a');
  t.equals(decimal2Alpha(10), 'j');
  t.equals(decimal2Alpha(26), 'z');
  t.equals(decimal2Alpha(27), 'aa');
  t.equals(decimal2Alpha(36), 'aj');
  t.equals(decimal2Alpha(52), 'az');
  t.equals(decimal2Alpha(53), 'ba');
  t.equals(decimal2Alpha(702), 'zz');
  t.equals(decimal2Alpha(703), 'aaa');
});

test('performs math', (t) => {
  t.plan(8);

  t.equals(add('b', 10), 'l', 'Should add with single digit');
  t.equals(add('aab', 10), 'aal', 'Should add with multiple digits');
  t.equals(add('x', 5), 'ac', 'Should add with carry');
  t.equals(add('zc', 27), 'aad', 'Should add with multiple digits and carry');
  t.equals(subtract('g', 5), 'b', 'Should subtract');
  t.equals(subtract('aag', 5), 'aab', 'Should subtract with multiple digits');
  t.equals(subtract('aag', 29), 'zd', 'Should subtract with multiple digits and carry');
  t.throws(() => subtract('aa', 27), 'Should not handle negative results');
});
