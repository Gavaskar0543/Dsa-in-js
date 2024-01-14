class Queue{
    constructor(){
        this._data = [];
        this._front = -1;
        this._rear = -1;
        this._size = 0;
    }
    //enque
    enqueue(x){
        if(this._size === 0){
            this._front = 0;
        }
        this._data[++this._rear] = x;
        this._size++;
    }
    dequeue(){
        if(this._size === 0){
            this._front = 0;
        }
        let temp = this._data[this._front];
        this._front++;
        this._size--;
        return temp;
    }
    //check queue is empty
    isEmpty(){
        return this._size === 0;
    }

    //get size
    getsize(){
        return this._size;
    }

    //front element
    getfront(){
        return this._data[this._front];
    }
    //rear element 
    getRear(){
        if(this._size === 0){
            return undefined;
        }
        return this._data[this._rear];
    }
    //print queue
    printQueu()
    {
        console.log(this._data.slice(this._front,this._rear+1));
    }
    clearQueue() {
        this._data = [];
        this._front = -1;
        this._rear = -1;
        this._size = 0;
      }
      reverseQueue() {
        this._data = this._data.slice(this._front, this._rear + 1).reverse();
        this._front = 0;
        this._rear = this._size - 1;
        return this._data;
      }
      
      

}

export default Queue;