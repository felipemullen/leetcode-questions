import { beforeEach, describe, expect, test } from 'bun:test';
import { RecentCounter } from './02-implementation';

describe('#933. Number of Recent Calls', () => {
    let counter: RecentCounter;

    beforeEach(() => {
        counter = new RecentCounter();
    });

    test('example 1', () => {
        expect(counter.ping(1)).toEqual(1);
        expect(counter.ping(100)).toEqual(2);
        expect(counter.ping(3001)).toEqual(3);
        expect(counter.ping(3002)).toEqual(3);
    });
});