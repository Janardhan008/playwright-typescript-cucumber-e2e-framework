import * as fs from 'fs';

class ListNode<T> {
    val: T;
    next: ListNode<T> | null;

    constructor(val: T, next: ListNode<T> | null = null) {
        this.val = val;
        this.next = next;
    }
}

function findMiddleNodeValue<T>(values: T[]): T | null {
    if (values.length === 0) return null;

    // 1. Build the singly linked list
    const head: ListNode<T> = new ListNode(values[0]);
    let current: ListNode<T> = head;

    for (let i = 1; i < values.length; i++) {
        current.next = new ListNode(values[i]);
        current = current.next;
    }

    // 2. Slow and fast pointer technique
    let slow: ListNode<T> | null = head;
    let fast: ListNode<T> | null = head;

    // Fast moves 2 steps, slow moves 1 step
    while (fast !== null && fast.next !== null) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    return slow ? slow.val : null;
}

function main(): void {
    const input: string = fs.readFileSync(0, 'utf-8').trim();
    if (!input) return;

    const values: number[] = input.split(/\s+/).map(Number);
    const result: number | null = findMiddleNodeValue(values);

    if (result !== null) {
        console.log(result);
    }
}

main();