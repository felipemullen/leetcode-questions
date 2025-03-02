/*
 * @lc app=leetcode id=680 lang=typescript
 *
 * [680] Valid Palindrome II
 */

// @lc code=start
function validPalindrome(s: string): boolean {
  if (s.length < 2) {
    return true;
  }

  if (s.length == 2) {
    return false;
  }

  let once = false;
  let left = 0;
  let right = s.length - 1;
  
  while (left < right) {
    if (s[left] !== s[right]) {
      if (once === false) {
        if (s[left + 1] === s[right]) {
          ++left;
          once = true;
        } else if (s[left] === s[right + 1]) {
          --right;
          once = true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }

    ++left;
    --right;
  }

  return true;
};
// @lc code=end

// OBSERVATIONS
// The quick solution here would be to iterate through each character and check if the
// string is a palindrome without the character.
// This is not ideal because doing this would require O(n2) time since we have to iterate
// through the string more than once
// 1. check if the string is a palindrome as is
// 2. if yes, done
// 3. if no, iterate through entire string
// 4. for each character c, check if the string is a palindrome without c

// ALGORITHM
// Instead, implement a variation of palindrome check where we attempt to skip a character
// when there is no match
// 1. keep 2 pointers, each at opposite ends of the string
// 2. increment left and decrement right until they meet
// 3. when l does not match r, try skipping l or r to see if there is a match
// 4. in the event that they do match, set a flag and do not allow again

// const input = 'aba';
// const output = validPalindrome(input);
// console.log(output); // expect true

// const input = 'abca';
// const output = validPalindrome(input);
// console.log(output); // expect true

// const input = 'abc';
// const output = validPalindrome(input);
// console.log(output); // expect false

const input = 'ebcbbececabbacecbbcbe';
const output = validPalindrome(input);
console.log(output); // expect true
