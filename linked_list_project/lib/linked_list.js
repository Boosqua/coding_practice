// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
  constructor(val, next=null) {
    this.value = val;
    this.next = next;
  }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null
    this.length = 0;
  }

  // TODO: Implement the addToTail method here
  addToTail(val) {
    this.length++
    let newNode = new Node(val);
    if( this.length === 1 ){
      this.head = newNode
      this.head.next = null
    }
    let oldTail = this.tail
    this.tail = newNode
    if(this.length >= 2) {
      oldTail.next = this.tail
    }
    return this
  }

  // TODO: Implement the removeTail method here
  removeTail() {
    this.length--
    if( this.length === -1 ){
      return undefined;
    } 
    let removedNode = this.tail
    if( this.length === 0 ){
      this.head = null
      this.tail = null
      return  removedNode
    }
    let newTail = this.head;
    for( let i = 1; i < this.length; i++ ){
      newTail = newTail.next;
    }
    this.tail = newTail
    newTail.next = null
    return removedNode
  }

  // TODO: Implement the addToHead method here
  addToHead(val) {
    if( this.length === 0 ){
      return this.addToTail(val)
    }
    this.head = new Node( val, this.head )
    this.length++
    return this

  }

  // TODO: Implement the removeHead method here
  removeHead() {
    if( this.length <= 1 ){
      return this.removeTail()
    }

    let oldHead = this.head
    this.head = oldHead.next
    this.length--
    return oldHead
  }

  // TODO: Implement the contains method here
  contains(target) {
    if(this.length === 0 ) return false;
    let node = this.head
    for(let i = 0; i < this.length; i++ ){
      if(node.value === target){
        return true;
      }
      node = node.next
    }
    return false
  }

  // TODO: Implement the get method here
  get(index) {
    if (index > this.length - 1){
      return null
    }

    let j = 0;
    let node = this.head;
    while( j < index ){
      node = node.next;
      j++
    }

    return node
  }

  // TODO: Implement the set method here
  set(index, val) {
    if (index > this.length - 1) {
      return false;
    }
    let node = this.get(index)
    node.value = val
    return true
  }

  // TODO: Implement the insert method here
  insert(index, val) {
    if (index > this.length - 1) {
      return false;
    }
    if( index === 0 ){
      this.addToHead(val)
      return true
    }
    this.length++
    let node = this.get(index - 1);
    node.next = new Node(val, node.next)
    return true
  }

  // TODO: Implement the remove method here
  remove(index) {
    if (index === 0) {
      return this.removeHead();
    } else if (this.length === index ) {
      return this.removeTail;
    } else if (index > this.length - 1) {
      return undefined;
    }

    this.length--
    let node = this.get(index - 1);
    let removedNode = node.next;
    node.next = node.next.next;

    return removedNode
  }

  // TODO: Implement the size method here
  size() {
    return this.length
  }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
