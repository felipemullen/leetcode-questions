# leetcode-questions

This is a [typescript](https://www.typescriptlang.org/) repository of my personal responses to several [Leetcode](https://leetcode.com) questions.

Each question has their own subfolder, with the following content:

- `00_problem.md` - The problem description as seen in leetcode
- `01_test.ts` - The test driver for the problem implementation
- `02_implementation.ts` - The problem description as seen in leetcode
- `files` - Optional folder that may contain images or files needed to run the problem

The easiest way to run a problem is with [Bun](https://bun.sh/). All you need to do is run

```
bun run ./79_word-search/01_test.ts
```

If you don't have/want Bun, ~~you're crazy~~ you can use [Node](https://nodejs.org) if you want, but you will either need to install `tsc` to compile the typescript and then run it directly, or install a package like `ts-node` to run it directly. If you feel like going down that path, check out the [NodeJs typescript documentation](https://nodejs.org/en/learn/getting-started/nodejs-with-typescript) page.