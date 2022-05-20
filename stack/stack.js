class StackNode {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

export class Stack {
  constructor() {
    this.head = null;
    this.last = null;
    this.size = 0;
    this.isEmpty = true;
  }

  push(value) {
    const newNode = new StackNode(value);

    if (this.last) {
      this.last.next = newNode;
    }

    newNode.prev = this.last;
    this.last = newNode;

    if (!this.head) {
      this.head = newNode;
    }

    this.size++;
    this.isEmpty = false;

    return this;
  }

  pop() {
    if (!this.last) {
      return null;
    }

    const deleteLast = this.last;

    if (this.last.prev) {
      this.last = this.last.prev;
      this.last.next = null;
    } else {
      this.head = null;
      this.last = null;
    }

    this.size--;
    if (this.size > 0) {
      this.isEmpty = false;
    } else {
      this.isEmpty = true;
    }

    return deleteLast.value;
  }
}
