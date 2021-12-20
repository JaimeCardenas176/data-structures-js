// 1 --> 2 --> 3 --> 4 --> 5 --> null

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}



class LinkedList {
    
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    preppend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    insert(index, value){
        const firstPointer = this.findIndex(index); // Buscar el elemento del index
        const newNode = new Node(value);

        const holdingValue = firstPointer.next;
        firstPointer.next=newNode;
        newNode.next = holdingValue;

        this.length++;
        return this;
    }

    findIndex(index) {
        let currentNode = this.head;
        let contador = 0;
        while (contador != index) {
            currentNode = currentNode.next;
            contador++;
        }
        return currentNode;
    };

    
}