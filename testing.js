// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
		if(this.contains(value)){
			return this
		}
		if( this.value > value ){
			if( this.left ){
				this.left.insert(value)
			} else {
				this.left = new BST(value)
			}
		} else if (this.value < value){
			if( this.right ){
				this.right.insert(value)
			} else {
				this.right = new BST(value)
			}
		}
    return this;
  }

  contains(value) {
    // Write your code here.
		//Base case 
		if( value === this.value ){
			return true
		} else if( 
			(this.value > value && !this.left) ||
			!this.right 
		){
			return false
		} 
		return this.value < value ? this.right.contains(value) : this.left.contains(value)
  }
	find(value){
		if(!this.contains(value)){
			return null
		} 
		if( this.value === value ){
			return [this]
		} else {
			let nextNode = this.value > value ? this.left.find(value) : this.right.find(value)
			return [this].concat(nextNode)
		}
	}
  remove( value, root = true ) {
    // Write your code here.
    // Do not edit the return statement of this method.
		if( !this.contains(value) || 
			(this.value === value && !this.left && !this.right && root ) ){
			return this
		} 
		const nodes = this.find(value)
		const removed = nodes[ nodes.length - 1 ]
		const parent = nodes[ nodes.length - 2 ]
		if( removed.right ){
			const replacementVal = removed.min()
			this.remove( replacementVal.value, false )
			removed.value = replacementVal.value
		} else {
			const replacement = removed.left? removed.left : null
			if( parent.right.value === value ){
				parent.right = replacement
			} else {
				parent.left = replacement
			}
		} 
    return this;
  }
	min(){
		if( !this.left ){
			return this
		} else {
			return this.left.min()
		}
	}
}

const bst = new BST(7)
// bst.insert(5)
// bst.insert(6)
// bst.insert(4)
// bst.insert(11)

// bst.insert(10)
// console.log(bst);
// bst.remove(10)
// console.log(bst)