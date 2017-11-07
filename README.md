```
# Base26

A simple library to perform basic +/- arithmatic on an alphabet-based number system.

a + 1 = b
b + 5 = g
z + 1 = aa
abc - 4 = aay

A practical usecase: spreadsheet column names.


---

## API

### base26.add(alpha: string, num: number): string

Increment alpha num times

add('a', 10) -> 'k'
add('aab', 10) -> 'aal'
add('x', 5), -> 'ac'
add('zc', 26), -> 'aac'



### base26.subtract(alpha: string, num: number): string

Decrement alpha num times.  Function throws if the result is not positive.

subtract('f', 5) -> 'a'
subtract('aag', 5) -> 'aab'
subtract('aag', 26) -> 'zg'
subtract('b', 2) -> throws



### base26.alpha2Decimal(alpha: string): number

Convert number comprised of lowercase a-z alphabetical digits to the equivalent base10 number

alpha2Decimal('a') -> 1
alpha2Decimal('z') -> 26
alpha2Decimal('aab') -> 704
alpha2Decimal('A') -> throws
alpha2Decimal('1') -> throws



### base26.decimal2Alpha(decimal: number): string

Convert positive base10 number (> 0) to alphabetical digits

decimal2Alpha(1) -> 'a'
decimal2Alpha(26) -> 'z'
decimal2Alpha(704) -> 'aab'
decimal2Alpha(0) -> throws
decimal2Alpha(-10) -> throws
```
