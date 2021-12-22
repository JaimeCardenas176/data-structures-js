//Grafos

//adjacent list
//map k:v -> nodo : lista de nodos vecinos
const graph = {
    1: [2,5],
    2: [1,3,5],
    3: [2,4],
    4: [3,5,6],
    5: [1,2,4],
    6: [4]
}

//adjacent list //1   //2   //3     //4
const grap1 = [  [2,5] [1,3,5], [2,4], [3,5,6], [1,2,4],[4]]


//edge list -> lista de aristas
const grapho = [
    [1,2],                              
    [1,5],
    [2,3],
    [2,5],
    [3,4],
    [4,5],
    [4,6]
]

//matriz de adyacencia
const grapM = [
    //1 cada array es un nodo, 
    //y contiene la conexion o
    //no conexion con el resto de nodos
    [0, 1, 0, 0, 1, 0],
    //2
    [1, 0, 1, 0, 1, 0],
    //3
    [0, 1, 0, 1, 0, 0],
    //4
    [0, 0, 1, 0, 1, 1],
    //5
    [1, 1, 0, 1, 0, 0],
    //6
    [0, 0, 0, 1, 0, 0],
]    

const graphs = {
    0: [0, 1, 0, 0, 1, 0],
    //2
    1: [1, 0, 1, 0, 1, 0],
    //3
    2: [0, 1, 0, 1, 0, 0],
    //4
    3: [0, 0, 1, 0, 1, 1],
    //5
    4: [1, 1, 0, 1, 0, 0],
    //6
    5: [0, 0, 0, 1, 0, 0],
}

class Graph {
    constructor() {
      this.nodes = 0;
      this.adjacentList = {};
    }
    addVertex(node) {
      this.adjacentList[node] = [];
      this.nodes++;
    }
    addEdge(node1, node2) {
      this.adjacentList[node1].push(node2);
      this.adjacentList[node2].push(node1);
    }
  }