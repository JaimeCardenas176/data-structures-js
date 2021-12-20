//Listas -> arrays [1,2,3,4,5];


class List {
    
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }
    
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }
    delete(index){
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }

    shiftIndex(index) {
        for (let i = index; i < this.length-1; i++) {
            this.data[i] = this.data[i+1];            
        }
        delete this.data[this.length-1];
        this.length--;
    }


}

let lista = new List();
lista.push(10);
lista.push(100);
lista.push(1000);