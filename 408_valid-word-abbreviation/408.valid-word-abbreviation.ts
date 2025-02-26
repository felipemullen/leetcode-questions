/*
 * @lc app=leetcode id=408 lang=typescript
 *
 * [408] Valid Word Abbreviation
 */

// @lc code=start
function validWordAbbreviation(word: string, abbr: string): boolean {
  
  // 2. keep a pointer to location in word
  let pointer = 0;
  let greedyNumberBuffer = '';
  
  // 1. iterate through abbr
  for (let i = 0; i < abbr.length; i++) {
    const c = abbr[i];

    const numberValue = parseInt(c);

    // 2a. if c is letter, check that word[pointer] is c --> return false otherwise
    if (isNaN(numberValue)) {
      // 3. if greedy number > 0, skip pointer ahead by number
      if (greedyNumberBuffer) {
        // Invalid skip, cannot start with '0'
        if (greedyNumberBuffer.startsWith('0')) {
          return false;
        }
        
        const skip = parseInt(greedyNumberBuffer);

        // Invalid skip, cannot replace an empty substring
        if (skip === 0) {
          return false;
        }
        
        pointer += skip;
        greedyNumberBuffer = '';
      }
      
      if (word[pointer] !== c) {
        return false;
      }

      pointer++;
    } else {
      // 2b. if c is number, greedy until number is complete
      greedyNumberBuffer += c;
    }
  }

  // 4. if pointer > word.length, return false
  if (pointer > word.length) {
    return false;
  }
  
  return true;
};
// @lc code=end

const word = 'substitution';
const valid1 = 's10n';
const valid2 = 'sub4u4';
const invalid1 = 's55n';
const invalid2 = 's010n';
const invalid3 = 's0ubstitution';
const output = validWordAbbreviation(word, invalid2);
console.log(output);

// Algorithm:
// 1. iterate through abbr
// 2. keep a pointer to location in word
// 2a. if c is letter, check that word[pointer] is c --> return false otherwise
// 2b. if c is number, greedy until number is complete
// 3. if number > 0, skip pointer ahead by number
// 4. if pointer > word.length, return false
