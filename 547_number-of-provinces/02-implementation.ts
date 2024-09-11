export function findCircleNum(isConnected: number[][]): number {
    let groups = new Set<string>();
    let allAreSameGroup = true;

    for (const connections of isConnected) {
        const key = connections.reduce((final, c) => final + c, '');

        const ones = connections.filter(c => c === 1);
        if (ones.length !== isConnected.length - 1) {
            allAreSameGroup = false;
        }

        if (!groups.has(key)) {
            groups.add(key);
        }
    }

    return allAreSameGroup ? 1 : groups.size;
}
