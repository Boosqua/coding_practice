class Boo {
   constructor(){
      this.memo = {}
      this.fibs = {}
   }

   count(){
      if(!this.memo.count){
         this.memo.count = 1
      } else {
         this.memo.count++
      }

      return this.memo.count
   }
   fib(n){
      if( n === 1 || n === 2){
         return 1
      }else if( this.fibs[n] ){
         return this.fibs[n]
      } else {
         let newFib = this.fib(n - 1) + this.fib(n - 2)
         this.fibs[n] = newFib
         return newFib
      }
   }
}

const boo = new Boo();
// for( let i = 60; i > 0; i-- ){
//    console.log(boo.fib(i))
// }
// console.log(boo.fib(10))
// console.log(boo.fib(11))

console.log("memo start:" + Date.now())
console.log( boo.fib(45))
console.log("memo end:" + Date.now())
console.log("norm start:" + Date.now())
const recFib = (n) => {
   if( n=== 1 || n === 2 ){
      return 1
   }
   else return recFib(n - 1) + recFib(n - 2)
}
console.log( recFib(45))
console.log("norm end:" + Date.now())