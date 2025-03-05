/*
 * @lc app=leetcode id=71 lang=typescript
 *
 * [71] Simplify Path
 */

// @lc code=start
function simplifyPath(path: string): string {
    const result: string[] = [];
    const parts = path.split('/');

    for (const part of parts) {
        if (part === '.' || part === '') {
            continue;
        }

        if (part === '..') {
            result.pop();
            continue;
        }

        result.push(part);
    }

    return '/' + result.join('/');
};
// @lc code=end

// OBSERVATIONS
// an easy solution is to write out a bunch of javascript conditionals and
// logic for each scenario and test each path

// ALGORITHM
// A stack should be used for the path, so that we can manage '..' properly
// 1. split the string by '/'
// 2a. encountering '.' can be ignored
// 2b. encountering '..' should pop the stack once

const output = simplifyPath('/home/');
console.log(output); // should be "/home"

const output2 = simplifyPath('/home//foo');
console.log(output2); // should be "/home"

const output3 = simplifyPath('/home/user/Documents/../Pictures');
console.log(output3); // should be "/home/user/Pictures"

const output4 = simplifyPath('/../');
console.log(output4); // should be "/"

const output5 = simplifyPath('/.../a/../b/c/../d/./');
console.log(output5); // should be "/.../b/d"
