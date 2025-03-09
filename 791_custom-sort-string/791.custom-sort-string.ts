/*
 * @lc app=leetcode id=791 lang=typescript
 *
 * [791] Custom Sort String
 */

// @lc code=start
function customSortString(order: string, s: string): string {
  const map: Record<string, number> = {};
  for (const c of s) {
    if (!map[c]) {
      map[c] = 1;
    } else {
      map[c] = map[c] + 1;
    }
  }

  let result = '';
  for (const c of order) {
    if (map[c]) {
      const count = map[c];
      for (let i = 0; i < count; ++i) {
        result += c;
      }

      delete map[c];
    }
  }

  for (const [c, count] of Object.entries(map)) {
    for (let i = 0; i < count; ++i) {
      result += c;
    }
  }

  return result;
};
// @lc code=end

// OBSERVATIONS
// This can be solved by iterating through each character in "order",
// and subsequently looking for all instances of it in "s".
// This would take O(n * m) where m is the length of s, so it is not ideal

// ALGORITHM
// instead of iterating multiple times through s, iterate once and build a map.
// Then, iterate through "order", appending the character as many times are there
// are occurrences in the map
// 1. Iterate through order
// 2. increment the count of each character in the map
// 3. iterate through s
// 4. look for s in map, note the number of occurrences
// 5. append s to a new string as many times as there are occurrences

const output = customSortString("cba", "abcd");
console.log(output); // should be "cbad"

const output2 = customSortString("bcafg", "abcd");
console.log(output2); // should be "bcad"
