export function minReorder(n: number, connections: number[][]): number {
    let changesMade = 0;

    function follow(previous: number, conn: number[]) {
        let [from, to] = conn;
        if (from === previous) {
            conn[0] = to;
            conn[1] = from;
            [from, to] = conn;
            ++changesMade;
        }

        const thisNode = from;
        const nextConnections = connections.filter(c => c.includes(thisNode) && !c.includes(previous));
        for (const c of nextConnections) {
            follow(thisNode, c);
        }
    }

    let start = connections.filter(x => x.includes(0));

    for (const c of start) {
        follow(0, c);
    }

    return changesMade;
}
