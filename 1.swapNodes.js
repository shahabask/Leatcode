// Swap Nodes in Pairs

// Given a linked list, swap every two adjacent nodes and return its head.
//  You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)



// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to convert a linked list to an array
function linkedListToArray(head) {
    const result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

var swapPairs = function(head) {
    if (head == null || head.next == null) {
        return head;
    }
    let first = head;
    let second = first.next;
    let temp = first.val;
    first.val = second.val;
    second.val = temp;
    if (second.next) {
        if (second.next.next) {
            first = second.next;
            swapPairs(first);
        }
    }
    return head;
};

let inputArray = [1, 2, 3, 4];
let linkedList = createLinkedList(inputArray);
let result = swapPairs(linkedList);
console.log(linkedListToArray(result)); // Output: [2, 1, 4, 3]
