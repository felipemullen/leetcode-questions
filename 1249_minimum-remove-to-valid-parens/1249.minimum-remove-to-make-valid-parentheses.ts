// /*
//  * @lc app=leetcode id=1249 lang=typescript
//  *
//  * [1249] Minimum Remove to Make Valid Parentheses
//  */

// // @lc code=start
function minRemoveToMakeValid(s: string): string {

    let result = '';

    // 2. start a counter at 0
    let open = 0;
    let close = 0;

    // 1. Iterate through the string
    for (const c of s) {
        if (c == '(') {
            result += c;
            open++;
        } else if (c == ')') {
            if (open <= 0) {
                // Do not add
            } else if (open > close) {
                result += c;
                close++;
            }
        } else {
            result += c;
        }
    }

    while (open > close) {
        let found = result.lastIndexOf('(');
        if (found >= 0) {
            result = result.substring(0, found) + result.substring(found + 1, result.length);
            open--;
        }

        // const lastIndex = result.lastIndexOf('(');
        // result = result.substring(0, lastIndex - 1) + result.substring(lastIndex, result.length);
    }

    return result;
};
// @lc code=end

// 1. keep a counter for valid open and valid close parens
// 2. iterate through s
// 3a. if c is '(' increment open
// 3b. if c is ')' && open > close decrement open
// 3c. if c is ')' && open <= close increment close
// 4. iterate from the close and remove ')' while close > 0
// 5. iterate from the open and remove '(' while open > 0
// 6. return s

const input = 'lee(t(c)o)de)';
// const input = '))((';
// const input = 'a)b(c)d';
// const input = '())()(((';
const output = minRemoveToMakeValid(input);
console.log(output);
