declare module "base26" {
  /**
   * Increment alpha num times
   * @param {string} alpha 
   * @param {number} num 
   * @returns {string} 
   */
  function add(alpha: string, num: number): string;

  /**
   * Decrement alpha num times.  Function throws if the result is not positive.
   * @param {string} alpha 
   * @param {number} num 
   * @returns {string} 
   */
  function subtract(alpha: string, num: number): string;

  /**
   * Convert number comprised of lowercase a-z alphabetical digits to the equivalent base10 number
   * @param {string} alpha 
   * @returns {number} 
   */
  function from(alpha: string): number;

  /**
   * Convert positive base10 number (> 0) to alphabetical digits
   * @param {number} decimal 
   * @returns {string} 
   */
  function to(decimal: number): string;
}