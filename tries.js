const ALPH = "abcdefghijklmnopqrstuvwxyz"
class StackNode {
   constructor(val = null){
      this.val = val;
      this.next = null
   }
}

class Stack {
   constructor(){
      this.node = null
   }
   empty(){
      return this.node === null
   }
   peek(){
      return this.node.val;
   }
   pop(){
      let current = this.node
      let next = current.next
      this.node = next;
      return current.val;
   }
   push(val){
      let prev = this.node;
      let current = new StackNode(val);
      current.next = prev;
      this.node = current;
   }
}

class Node{
   constructor(){
      this.val = null;
      this.parent = null;
      this.children = new Array(26);
      this.complete = false
      this.word = null
   }
   addChild(node){
      let i = this.index(node.val);
      this.children[i] = node;
   }
   index(val){
      return ALPH.indexOf(val)
   }
   has(val){
      let i = this.index(val)
      return !!this.children[i]
   }
   get(val){
      let i = this.index(val)
      return this.children[i]
   }
   getChildren(){
      return this.children.filter( node => !!node )
   }
}
class MyTries {
   constructor(){
      this.root = new Node();
   }
   add(word){
      let currentNode = this.root;
      for(let i = 0; i < word.length; i++) {
         let currentChar = word[i];
         let nextNode = currentNode.get(currentChar)
         if(!!!nextNode){
            nextNode = new Node();
            nextNode.val = currentChar;
            currentNode.addChild(nextNode)
         }
         currentNode = nextNode;
      }
      currentNode.complete = true
      currentNode.word = word
      return true
   }
   has(word){
      let currentNode = this.root;
      for( let i = 0; i < word.length; i++){
         let currentChar = word[i];
         let nextNode = currentNode.get(currentChar)
         if( !!!nextNode ){
            return false
         } 
         currentNode = nextNode
      }
      return currentNode.complete
   }
   prefix(string){
      let currentNode = this.root;
      let result = []
      for(let i = 0; i < string.length; i++) { // s time where s = string.length
         let currentChar = string[i];
         let nextNode = currentNode.get(currentChar);
         if(!!!nextNode){
            return result;
         }
         currentNode = nextNode
      }
      let stack = new Stack()
      stack.push(currentNode)
      while( !stack.empty() ){
         currentNode = stack.pop()
         if( currentNode.complete){
            result.push(currentNode.word);
         }
         let nextNodes = currentNode.getChildren();
         nextNodes.forEach( node => stack.push(node))
      }
      return result;
   }

   // findWords(node){
   //    let children = node.getChildren();
   //    if( children.length === 0 ){
   //       return node.val
   //    }
   //    let result = new Stack()
   //    if(node.complete){
   //       result.push(node.val)
   //    }

   // }
}



const testTrie = new MyTries();
const words = []
function testTime(word){
   if( word.length > 4){
      return
   }
   let stack = new Stack();
   for( let i = 0; i < 26; i++ ) {
      let newWord = word + ALPH[i];
      testTrie.add(newWord);
      words.push(newWord)
      stack.push(newWord)
   }

   while(!stack.empty()){
      testTime(stack.pop());
   }
}
testTime("a")
let time = Date.now();
console.log(testTrie.prefix('abc'))
console.log( Date.now() - time)
time = Date.now();
words.filter( word => {
   let checking = "abc";
   for( let i = 0; i < "abc".length; i++ ){
      if(word[i] !== checking[i]){
         return false;
      }
      return true
   }
})
console.log(Date.now() - time);