class CustomHashTable {
    constructor(size){

    }

    hashFunction(key){
        let hash =0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;            
        }
        return hash;
    }
    //insert
    set(key, value) {
    }
    //search
    get(key) {

    }
    //delete
    delete(key){

    }

}