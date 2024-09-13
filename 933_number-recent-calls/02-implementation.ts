export class RecentCounter {
    private _callQueue: number[] = [];

    constructor() {
    }

    public ping(t: number): number {
        let first = this._callQueue[0];
        let last = t;

        while (first !== undefined && last - first > 3000) {
            this._callQueue.shift();
            first = this._callQueue[0];
        }

        this._callQueue.push(t);

        return this._callQueue.length;
    }
}