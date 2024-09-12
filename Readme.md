# leetcode-questions

This is a [typescript](https://www.typescriptlang.org/) repository of my personal responses to several [Leetcode](https://leetcode.com) questions.

Each question has their own subfolder, with the following content:

- `00_problem.md` - The problem description as seen in leetcode
- `01_test.ts` - The test driver for the problem implementation
- `02_implementation.ts` - The problem description as seen in leetcode
- `files` - Optional folder that may contain images or files needed to run the problem

> Feel free to use this repository as a template to practice your own implementations 💻👾🖱️

## Problem index

- [#11. Container With Most Water](11_container-most-water/problem.md)
- [#79. Word Search](79_word-search/problem.md)
- [#125. Valid Palindrome](125_valid-palindrome/problem.md)
- [#151. Reverse Words in a String](151_reverse-words/problem.md)
- [#238. Product of Array Except Self](238_product-of-array/01-problem-238.test.ts)
- [#283. Move Zeroes](283_move-zeroes/problem.md)
- [#334. Increasing Triplet Subsequence](334_increasing-triplet-sub/problem.md)
- [#392. Is Subsequence](392_is-subsequence/problem.md)
- [#443. String Compression](443_string-compression/problem.md)
- [#547. Number of Provinces](547_number-of-provinces/problem.md)
- [#643. Maximum Average Subarray I](643_max-average-subarray/problem.md)

## General Approach

Like my dad always used to say, there's [many ways to skin a cat](https://english.stackexchange.com/questions/32123/origin-of-the-phrase-theres-more-than-one-way-to-skin-a-cat). I was never sure what that meant, but I can tell you that there are a great many ways to approach a coding problem.

I have [a lot of experience in software](https://felipemullen.com), and I have my own [passions to focus](https://ind3x.games) on. So for the most part, I avoided spending more than 10-15 minutes per problem. This means some of the code will be sloppy, and a lot of solutions are not optimal.

That's ok. I am not [John Carmac](https://en.wikipedia.org/wiki/John_Carmack), just a lowly programmer.

## Running a problem

The easiest way to run a problem is with [Bun](https://bun.sh/). All you need to do is run a test file directly, i.e.:

```shell
# Run a specific test
bun test 151_reverse-words/01-problem-151.test.ts

# Run all tests
bun test

# Run all tests and watch for changes
bun test --watch
```

If you don't have/want `Bun`, ~~you're crazy~~ you can use [Node](https://nodejs.org) if you want, but you will either need to install `tsc` to compile the typescript and then run it directly, or install a package like `ts-node` to run it directly. If you feel like going down that path, check out the [NodeJs typescript documentation](https://nodejs.org/en/learn/getting-started/nodejs-with-typescript) page.

You will also have to change the test files to use a test package like `jest` instead of the built in bun helpers.