export function canVisitAllRooms(rooms: number[][]): boolean {
    let keys = new Set<number>([0]);
    let visited = new Set<number>();

    function visit(roomNumber: number) {
        visited.add(roomNumber);

        const room = rooms[roomNumber];
        room.forEach(k => keys.add(k));

        for (const k of keys) {
            if (!visited.has(k)) {
                visit(k);
            }
        }
    }

    visit(0);

    return keys.size === rooms.length;
}
