class Node {
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

//FIFO -> First In First Out
//(DFS -> GRAFOS) que te dice el camino mas corto

//enqueue -> encola un elemento lo añade al final y devuelve la cola
//dequeue -> desencola un elemento el primero que llego y devuelve l cola
//peek -> que devuelve el que tocaria desencolar
class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length=0;
    }
    peek(){
        return this.first;
    }

    enqueue(value){
        const newNode = new Node(value);
        if(this.length ===0){
            this.first = newNode;
            this.last=newNode;
        }else{
            newNode.next=this.last;
            this.last=newNode;
        }
        this.length++;
        return this;
    }
    
    dequeue(){
        this.first=this.first.next;
        this.length--;
        return this;
    }
}