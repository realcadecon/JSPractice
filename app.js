

/* console.log("hello world");
console.log(true);
var greeting = "hello"
console.log(greeting);
console.log({a:1, b:2});
console.table({a:1, b:2});
console.error("ahhh");
//console.clear();
console.time('start');
    console.log("hello");
    console.log("hello");
    console.log("hello");
    console.log("hello");
    console.log("hello");
    console.log("hello");
    console.log("hello");
    console.log("hello");
    console.log("hello");
console.timeEnd('start');

*/
import anime from './node_modules/animejs/lib/anime.es.js';
import {addEdgesToGraph, addVerticesToGraph, addMustVisitToGraph} from './data.js';

let val;



const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child')

val = listItem.nextElementSibling;

const li = document.createElement('li');
li.className = 'collection-item';
li.setAttribute('title', 'New Item')

//create new link element
const a = document.createElement('a');
a.className = 'delete-item'
a.innerHTML = '<i class ="fa fa-remove"></i>';

li.appendChild(a);

li.appendChild(document.createTextNode('Hello World'));
document.querySelector('ul.collection').appendChild(li);

const myButton = document.querySelector('button');

document.querySelector('li.collection-item').addEventListener('click', onClick);

function onClick(e){
    console.log(e);
}

const gameBoard = document.querySelector('div#game');
gameBoard.addEventListener('mousemove', myEvent);
const coords = document.getElementById('coord');

function myEvent(e){
    console.log(`Event Type ${e.type}`);
    coords.textContent = `X: ${e.offsetX}, Y:${e.offsetY}`;
    //document.body.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
}
document.querySelector('#form').addEventListener('submit', 
function(e){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    const task = document.getElementById('textInput').value;
    tasks.push(task);
    console.log(task);      
    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('Task saved');
    e.preventDefault();
});








//Group Project ---------------------------------------------------------------------------------------------


class Node {
    constructor (val, priority){
        this.val = val;
        this.priority = priority;
    }
}

//uses min heap
class PriorityQueue {
    constructor(){
        this.values = [];
    }

    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp(){
        let idx = this.values.length-1;
        const element = this.values[idx];
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority > parent.priority) {
                break;
            }
            if(element <= parent) {
                this.values[parentIdx] = element;
                this.values[idx] = parent;
                idx = parentIdx;
            }
        }
    }

    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while(true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if((!swap && rightChild.priority < element.priority) || 
                    (swap && rightChild.priority < leftChild.priority))
                {
                    swap = rightChildIdx;
                }
            }
            if(!swap){
                break;
            }
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }

    dequeue() { 
        let min = this.values[0];
        let end = this.values.pop();
        if(this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }

    isEmpty() {
        return (this.values.length === 0) 
    }
}

//vertMap to be used for fast lookups if node specs are needed and you only have name
let vertMap = new Map();

class Graph {
    constructor(size = 1){
        this.size = size;
        this.adjList = {}; //should be map[name of obj] = list of maps[name of adj obj] 
        this.mustVisit = [];
        this.costTable = {};
        this.permutations = [];
    }

    addMustVisit(v){
        if(v.name !== 'H51' && v.name !== 'E2_0'){
            this.mustVisit.push(v);
        }
        if(!this.costTable[v.name]){
            this.costTable[v.name] = {};
        }
    }

    addVertex(v){
        if(!this.adjList[v.name]) {
            this.adjList[v.name] = [];
            vertMap[v.name] = {x:v.x, y:v.y};
        }
    }
    
    addEdge(v, w) {
        let weight = 0;
        if(v.x === w.x){
            weight = Math.abs(v.y -  w.y);
        }
        else if (v.y === w.y){
            weight = Math.abs(v.x -  w.x); 
        }
        else{
            weight = Math.ceil(Math.sqrt(((v.x-w.x)*(v.x-w.x)) + ((v.y-w.y)*(v.y-w.y))));
            //console.log(v, w, weight);   
        }
        this.adjList[v.name].push({vertName:w.name, weight:weight});
        this.adjList[w.name].push({vertName:v.name, weight:weight});
    }

    printGraph(){
        for(const vertex in this.adjList){
            for(const x in this.adjList[vertex]){
                console.log(`${vertex}: ${JSON.stringify(this.adjList[vertex][x])}`);
            }
        }
    }

    //start and end are strings for vertex names
    dijkstra(start, end) { 
        const queue = new PriorityQueue();
        const distances = {};
        const previous = {};

        let path = []; //return at end
        let smallest;

        //init pq and distances
        for(let vertex in this.adjList) {
            if(vertex === start) {
                distances[vertex] = 0;
                queue.enqueue(vertex, 0);
            }
            else {
                distances[vertex] = Infinity;
                queue.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        //pathfinding
        while(!queue.isEmpty()) {
            //always take the shortest option next from the PQ
            smallest = queue.dequeue().val;
            if(smallest === end){
                //Backtrace shortest path and DONE
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if(smallest || distances[smallest] !== Infinity) {
                for(let neighbor in this.adjList[smallest]) {
                    let nextNode = this.adjList[smallest][neighbor]; 
                    let candidate = distances[smallest] + nextNode.weight; //neighbor weight + curr weight
                    let neighborVal = nextNode.vertName; //neighbor name

                    if(candidate < distances[neighborVal]){
                        distances[neighborVal] = candidate;
                        previous[neighborVal] = smallest;
                        queue.enqueue(neighborVal, candidate);
                    }

                }
            }
        }
        return path.concat(smallest).reverse();
    }

    generateCostTable() {
        for(let x in this.costTable) {
            for(let y in this.costTable) {
                if(x !== y) { //&& this.costTable[x][y] == null){ 
                    let shortestPath = this.dijkstra(x, y);
                    let cost = calcPathLength(shortestPath);
                    this.costTable[x][y] = {cost: cost.sum, path: cost.svgPath};
                    //this.costTable[y][x] ={cost: cost.sum, path: cost.svgPath};
                    //TODO: cut the loops in half here by including line above, but the path is reversed
                }
            }
        }
    }

    printList(list){
        let str = "";
        for(let item in list){
            str += list[item].name + " | ";
        }
        return str;
    }

    swap(a, i, j) {
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
        return a;
    }

    findPermutations(list, l, r) {
        if(l == r){
            // let str = this.printList(list);
            // let x = document.createElement('p');
            // x.innerText = str;
            // document.querySelector('#testPermutations').appendChild(x);
            let dup = [...list];
            this.permutations.push(dup);
        }
        else {
            for(let i = l; i <= r; i++){
                list = this.swap(list, l, i);
                this.findPermutations(list, l+1, r);
                list = this.swap(list, l, i);
            }
        }

    }

    findShortestPathThroughList() {
        this.findPermutations(this.mustVisit, 0, this.mustVisit.length-1);
        let shortestList;
        let minWeight = Infinity;
        console.log(this.costTable);
        for(let i = 0; i < this.permutations.length; i++){ //loop thru each permutation of node order
            let currWeight = 0;
            //add weight from starting point
            currWeight += this.costTable['E2_0'][this.permutations[i][0].name].cost;
            for(let j = 0; j < this.permutations[i].length-1; j++) { //loop thru nodes comparing two at a time
                currWeight += this.costTable[this.permutations[i][j].name][this.permutations[i][j+1].name].cost;
            }
            //add weight from last node to fitting room and then to exit
            currWeight += this.costTable['H51'][this.permutations[i][this.permutations[i].length-1].name].cost;
            currWeight += this.costTable['H51']['E2_0'].cost;
            if(currWeight < minWeight) {
                minWeight = currWeight;
                shortestList = [...this.permutations[i]];
            }
        }
        console.log(shortestList);

        let cleanedShortestList = ['E2_0'];
        let svgPath = " ";
        //add entrance to first point cost and path
        cleanedShortestList.push(shortestList[0].name);
        svgPath += this.costTable['E2_0'][shortestList[0].name].path;
        console.log('E2_0', shortestList[0].name, this.costTable['E2_0'][shortestList[0].name]);

        //loop through shortest path and record path details and cost
        for(let i = 0; i < shortestList.length - 1; i++){
            cleanedShortestList.push(shortestList[i+1].name);
            svgPath += this.costTable[shortestList[i].name][shortestList[i+1].name].path;

            //debug
            console.log(shortestList[i].name, shortestList[i+1].name, this.costTable[shortestList[i].name][shortestList[i+1].name]);
        }
        //add fitting room/exit costs and paths
        cleanedShortestList.push('H51');
        cleanedShortestList.push('E2_0');
        svgPath += this.costTable[shortestList[shortestList.length-1].name]['H51'].path;
        svgPath += this.costTable['H51']['E2_0'].path;
        console.log(svgPath);
        let shortestPathThroughListData = { shortestList: cleanedShortestList, cost: minWeight, svgPath: svgPath};
        return shortestPathThroughListData;
    }

}



let nordstromMap = new Graph();
addVerticesToGraph(nordstromMap);
addEdgesToGraph(nordstromMap);
addMustVisitToGraph(nordstromMap);

console.log(vertMap);
function calcPathLength(path){
    let pathStats = {sum: 0, svgPath: "M "};
    for(let i = 0; i < path.length-1; i++) {
        let v1 = vertMap[path[i]];
        let v2 = vertMap[path[i+1]];
        if(v1.x === v2.x) {
            pathStats.sum += Math.abs(v1.y - v2.y);
        }
        else if(v1.y === v2.y) {
            pathStats.sum += Math.abs(v1.x - v2.x)
        }
        else {
            let dist = Math.ceil(Math.sqrt(((v1.x-v2.x)*(v1.x-v2.x)) + ((v1.y-v2.y)*(v1.y-v2.y))));
            pathStats.sum += dist
        }
        pathStats.svgPath += `${v1.x} ${v1.y} L ${v2.x} ${v2.y} `;
    }
    //pathStats.svgPath += "Z";
    return pathStats;
}


let dest = "";
document.getElementById("pathSelection").addEventListener("click", () => {
    let sectElement = document.querySelector('#section');
    let tableElement = document.querySelector('#table');
    let sect = sectElement.options[sectElement.selectedIndex].text;
    let table = tableElement.options[tableElement.selectedIndex].text;
    if(sect === "H51") {
        dest = "H51";
    }
    else {
        dest = table + sect;
    }
    let shortestPath = nordstromMap.dijkstra("E2_0", dest);
    let pathLength = calcPathLength(shortestPath);
    let newPath = document.getElementById("shortestPath");
    newPath.setAttribute('d', pathLength.svgPath);
    let path = anime.path('#shortestPath');
    if(path){
      anime({
        targets: '#a',
        translateX: path('x'),
        translateY: path('y'),
        easing: 'linear',
        duration: 10000,
        loop: true
      });
    }
});


document.getElementById("multiItemButton").addEventListener("click", ()=> {
    nordstromMap.generateCostTable();
    let shortestMultiItem = nordstromMap.findShortestPathThroughList();
    //console.log(shortestMultiItem);
    let shortestMultiItemPath = shortestMultiItem.svgPath;
    
    let newPath = document.getElementById("shortestPath");
    newPath.setAttribute('d', shortestMultiItemPath);
    let path = anime.path('#shortestPath');
    if(path){
      anime({
        targets: '#a',
        translateX: path('x'),
        translateY: path('y'),
        easing: 'linear',
        duration: 15000,
        loop: true
      });
    }
});