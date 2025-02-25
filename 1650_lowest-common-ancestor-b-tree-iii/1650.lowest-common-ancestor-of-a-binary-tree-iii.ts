/*
 * @lc app=leetcode id=1650 lang=typescript
 *
 * [1650] Lowest Common Ancestor of a Binary Tree III
 */

// @lc code=start
/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     parent: _Node | null
 *     
 *     constructor(v: number) {
 *         this.val = v;
 *         this.left = null;
 *         this.right = null;
 *         this.parent = null;
 *     }
 * }
 */

class _Node {
  val: number
  left: _Node | null
  right: _Node | null
  parent: _Node | null

  constructor(v: number) {
    this.val = v;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function lowestCommonAncestor(p: _Node | null, q: _Node | null): _Node | null {

  // 1. if p.parent === q.parent return (p.parent)
  if (p?.parent != undefined && p?.parent === q?.parent) {
    return p?.parent;
  }

  const pAncestors: _Node[] = [];
  const qAncestors: _Node[] = [];

  // 4. keep pointers for each path
  let qPath: _Node | null = q;
  let pPath: _Node | null = p;

  // 2. for each (p,q) traverse upwards
  while (true) {
    // 3b. if p is ancestor of q, return p
    if (p && qAncestors.includes(p)) {
      return p;
    }

    // 3a. if q is ancestor of p, return q
    if (q && pAncestors.includes(q)) {
      return q;
    }
    
    // 5. if pointers meet, return node
    if (qPath === pPath) {
      return qPath;
    }

    if (qPath?.parent) {
      qAncestors.push(qPath.parent);
      qPath = qPath?.parent!;
    } else {
      qPath = p;
    }

    if (pPath?.parent) {
      pAncestors.push(pPath.parent);
      pPath = pPath?.parent!;
    } else {
      pPath = q;
    }
  }

  return null;
};
// @lc code=end

// Algorithm
// 1. if p.parent === q.parent return (p.parent)
// 2. for each (p,q) traverse upwards
// 3a. if q is ancestor of p, return q
// 3b. if p is ancestor of q, return p
// 4. keep pointers for each path
// 5. if pointers meet, return node

// const three = new _Node(3);
// const five = new _Node(5);
// const one = new _Node(1);
// one.parent = three;
// five.parent = three;

// const output = lowestCommonAncestor(five, one);
// console.log(output?.val); // expect 3

// const three = new _Node(3);
// const five = new _Node(5);
// const one = new _Node(1);
// const two = new _Node(2);
// const four = new _Node(4);
// one.parent = three;
// five.parent = three;
// four.parent = two;
// two.parent = five;

// const output = lowestCommonAncestor(five, four);
// console.log(output?.val); // expect five

const three = new _Node(3);
const five = new _Node(5);
const one = new _Node(1);
const two = new _Node(2);
const four = new _Node(4);
const eight = new _Node(8);
one.parent = three;
five.parent = three;
four.parent = two;
two.parent = five;
eight.parent = one;

const output = lowestCommonAncestor(five, eight);
console.log(output?.val); // expect 3