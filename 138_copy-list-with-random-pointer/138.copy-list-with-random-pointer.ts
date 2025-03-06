/*
 * @lc app=leetcode id=138 lang=typescript
 *
 * [138] Copy List with Random Pointer
 */

// @lc code=start
/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */


function copyRandomList(head: _Node | null): _Node | null {
  if (head === null) {
    return null;
  }

  let n: _Node | null = head;
  // copy
  while (n) {
    const c: _Node = new _Node(n.val, n.next || undefined, n.random || undefined);
    n.next = c;

    n = n.next.next;
  }

  n = head.next;
  // fix randoms
  while (n) {
    n.random = n.random?.next || null;
    n = n.next?.next || null;
  }

  // detach list
  const copy: _Node | null = head.next;
  n = copy;
  while (n) {
    n.next = n.next?.next || null;
    n = n.next;
  }

  return copy;
};
// @lc code=end

class _Node {
  val: number
  next: _Node | null
  random: _Node | null
  // This field is just for testing, to know which nodes are copies
  copy = true

  constructor(val?: number, next?: _Node, random?: _Node) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
    this.random = (random === undefined ? null : random)
  }
}

function createLinkedList(data: (number | null)[][]): _Node | null {
  if (data.length === 0) return null;

  const nodes: _Node[] = data.map(([val]) => new _Node(val || undefined));

  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].copy = false;
    nodes[i].next = nodes[i + 1];
  }

  for (let i = 0; i < data.length; i++) {
    const [, randomIndex] = data[i];
    if (randomIndex !== null) {
      nodes[i].random = nodes[randomIndex];
    }
  }

  return nodes[0];
}

// OBSERVATIONS
// This copy can be achieved easily using two O(n) passes where the first one creates the
// list and sets up "next" pointers while storing nodes in a map, and the second iteration
// configures all the random pointers
// 1. iterate through the original list, copying all nodes and storing them in a map
// 2. iterate again, identifying the "random" node pointer and using the values in the map

// ALGORITHM
// instead of copying in two passes, we use one pass to copy each node as a next element.
// then, using a second pass, we fix all of the "random" pointers.
// In a third pass, we ensure the list is completely detached from the original list.
// 1. traverse the original list, and attach each node copy to original.next
// 2. traverse the original list, and set each newNode.random to newNode.random.next (the copy)
// 3. traverse the copy list and set each node.next to node.next.next to skip original nodes

// const head = createLinkedList([[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]);
// const output = copyRandomList(head);
// console.log(output);

// const head = createLinkedList([[1, 1], [2, 1]]);
// const output = copyRandomList(head);
// console.log(output);

const head = createLinkedList([[3, null], [3, 0], [3, null]]);
const output = copyRandomList(head);
console.log(output);

