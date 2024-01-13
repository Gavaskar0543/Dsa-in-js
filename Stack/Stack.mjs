//first in first out
  class stack{
    //constructior
    constructor(){
        this.data = [];
    }
    //inserting into stack
   pushintostack(val){
  this.data.push(val);
   }
   //poping from stack
   popfromstack(){
    this.data.pop()
   }
   //print the stack;
   printStack(){
    for(let i = this.data.length-1; i>=0;i--){
        console.log(this.data[i]);
    }
   }
   //top of the stack
   top(){
    return this.data[this.size()-1];
   }
   //get size of the stack
   size(){
    return this.data.length;
   }
   //check is empty
   isEmpty(){
    return this.data.length == 0 ;
   }
   //Empty the arr
   clear(){
    while(!this.isEmpty()){
        this.data.pop();
    }
   }
   //search the element in the stack return present in stack or not
   search(element){
    for(let i =0;i<this.size();i++){
      if(this.data[i] === element){
       return console.log(this.data[i],'found in the stack');
      }
    }
    return console.log(element,"not found in the stack");
   }

   toArray(){
    return [...this.data];
   }
   //copy the orignal stack and return the new stack
   copy() {
    const newStack = new stack();
    newStack.data = [...this.data];
    return newStack;
}
}



export default stack;