class Node {
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

//LIFO -> Last In (is the) First Out
//(BFS -> GRAFOS) que te dice el camino mas corto
//pop -> saca un elemento(quita el ultimo y devuelve la pila)
//push -> añade un elemento(lo añade arriba y devuelve la pila)
//peek -> te da el siguiente(devuelve el que hay arriba)

class Stack {
    constructor(){
        this.top=null;
        this.bottom=null;
        this.length=0;
    }

    peek(){
        return this.top;
    }

    pop(){
        if(!this.top)
            return null;

        this.top=this.top.next;
        this.length--;
        return this;
    }

    push(value){
        const newNode = new Node(value);
        if(this.length===0){
            this.top=newNode;
            this.bottom=newNode;
        }
        else{
            newNode.next=this.top;
            this.top=newNode;
        }
        this.length++;
        return this;
    }
}
