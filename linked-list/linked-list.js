class LinkedListNode {
  constructor(value, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.amount = 0;
  }

  push(value) {
    const newNode = new LinkedListNode(value);

    if (this.tail) {
      this.tail.next = newNode;
    }

    newNode.previous = this.tail;
    this.tail = newNode;

    if (!this.head) {
      this.head = newNode;
    }

    this.amount++;

    return this;
  }

  pop() {
    if (!this.tail) {
      return null;
    }

    const deleteTail = this.tail;

    if (this.tail.previous) {
      this.tail = this.tail.previous;
      this.tail.next = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.amount--;

    return deleteTail.value;
  }

  iterate(func) {
    let current = this.head;
    while (current) {
      func(current);
      current = current.next;
    }
  }

  insertAfter(item, value) {
    const newNode = new LinkedListNode(value);
    if (this.head) {
      let current = this.head;
      const cb = (cell) => {
        if (cell.value === item) {
          current = cell;
        }
      };
      this.iterate(cb);

      if (current.value === item) {
        newNode.next = current.next;
        newNode.previous = current;
        current.next = newNode;
        this.amount++;
        return true;
      }
      return false;
    }
    return false;
  }

  removeItem(value) {
    if (!this.tail) {
      return null;
    }

    if (this.head) {
      let current = this.head;
      const cb = (cell) => {
        if (cell.value === value) {
          current = cell;
        }
      };
      this.iterate(cb);

      if (current.value === value) {
        if (current.previous) {
          current = current.previous;
          current.next = null;
        } else {
          current = null;
        }
        this.amount--;
        return true;
      }
      return false;
    }
    return false;
  }
}
