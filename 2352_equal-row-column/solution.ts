export function equalPairs(grid: number[][]): number {
    const rowKeys: Record<string, number> = {};
    const columnKeys: string[] = [];

    for (let y = 0; y < grid.length; ++y) {
        const row = grid[y];

        let rowKey = '';
        for (let x = 0; x < row.length; ++x) {
            const column = row[x];
            rowKey += column;

            if (!columnKeys[x]) {
                columnKeys[x] = '';
            }

            columnKeys[x] += column;
        }

        if (!(rowKey in rowKeys)) {
            rowKeys[rowKey] = 0;
        }

        ++rowKeys[rowKey];
    }

    let overlap = 0;
    for (let i = columnKeys.length - 1; i >= 0; --i) {
        const key = columnKeys[i];
        if (key in rowKeys) {
            const count = rowKeys[key];
            overlap += count;

            delete rowKeys[key];
        }
        columnKeys.splice(i);
    }

    return overlap;
}