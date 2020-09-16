//let a : Array<any> = [2,3,4,5,6,7];

let chunk = (arr : Array<any>,chsize : number) => {
    let slicedarr = [];
    let temparr = [];
    for(let i=0,j=0;i<arr.length;i++,j++){
        if(j === chsize){
            slicedarr.push(temparr);
            temparr = [];
            j = 0; 
        }
        temparr[j] = arr[i];
    }
    slicedarr.push(temparr);
    return slicedarr;
}

let reduce = (arr: Array<any>, fun: Function, init:number) => {
    for(let i in arr){
        init = fun(init,arr[i]);
    }
    return init;
}

let filter = (arr: Array<any>, fun: Function) => {
    let filarr = [];
    for(let i in arr){
        if(fun(arr[i]))
            filarr.push(arr[i])
    }
    return filarr;
}

let find = (arr: Array<any>, fun: Function, startindex : number) => {
    if(!startindex)
        startindex = 0
    for(let i=startindex;i<arr.length;i++){
        if(fun(arr[i]))
            return arr[i];
    }
    return undefined;
}

let sum = (arr : Array<any>) => {
    let sumtot = 0;
    for(let i in arr){
        sumtot += arr[i];
    }
    return sumtot;
}

let doChunk = () => {
    let txtboxval = document.getElementById('txtbox').value;
    if (!txtboxval){
        alert("Please enter some values in the text-box to do the operation")
        return;
    }
    let  a= txtboxval.split(",");
    let chunksize = parseInt(prompt("Please enter the chunk size"));
    if(chunksize){
        let k = chunk(a,chunksize);
        alert("Chunked arrays:\n" + k.join("\n"));
    }
    else{
        alert("Only enter numerical values for the chunk size");
    }
}

let doReduce = () => {
    let txtboxval = document.getElementById('txtbox').value;
    if (!txtboxval){
        alert("Please enter some values in the text-box to do the operation")
        return;
    }
    let  b= txtboxval.split(",");
    let a =[];
    for(let i in b){
        a[i] = parseFloat(b[i]);
        if(!a[i]){
            alert("Please only enter numbers seperated by , to use reduce function");
            return;
        }
    }
    let reducetype = (prompt("Please enter the reduce type(sum/mul)"));
    if(!reducetype)
        return;
    if(reducetype.toLowerCase() === 'sum' || reducetype.toLowerCase() === 'mul'){
        if(reducetype.toLowerCase() === 'sum'){
            let reducetot = reduce(a,(sum : number,item : number) => sum+item,0);
            alert("Reduced value after doing sum: " + reducetot)
        }
        else{
            let reducetot = reduce(a,(sum : number,item : number) => sum*item,1);
            alert("Reduced value after doing multiplication: " + reducetot);
        }
    }
    else{
        alert("Please only enter sum or mul to use reduce");
    }
}

let doFilter =() => {
    let txtboxval = document.getElementById('txtbox').value;
    if (!txtboxval){
        alert("Please enter some values in the text-box to do the operation")
        return;
    }
    let  b= txtboxval.split(",");
    let a =[];
    for(let i in b){
        a[i] = parseFloat(b[i]);
        if(!a[i]){
            alert("Please only enter numbers seperated by , to use Filter function");
            return;
        }
    }
    let filterval = parseInt(prompt("Please enter a value. All the values greater than the given value will be showed"));
    if(filterval){
        let k = filter(a,(value : number) => value > filterval);
        alert("Filtered values that are greater than " + filterval + " are: " +k);
    }
    else{
        alert("Only enter numerical values for the filter value");
    }
}

let doFind = () => {
    let txtboxval = document.getElementById('txtbox').value;
    if (!txtboxval){
        alert("Please enter some values in the text-box to do the operation")
        return;
    }
    let  b= txtboxval.split(",");
    let a =[];
    for(let i in b){
        a[i] = parseFloat(b[i]);
        if(!a[i]){
            alert("Please only enter numbers seperated by , to use Find function");
            return;
        }
    }
    let findval = parseInt(prompt("Please enter a value. First value greater than the given value will be displayed"));
    let strt = parseInt(prompt("Enter the index from where the search should start"))
    if(findval){
        let k = find(a,(value : number) => value > findval, strt);
        alert("Found value that is greater than " + findval + " starting from index " + strt + " is: " +k);
    }
    else{
        alert("Only enter numerical values for the find value");
    }
}

let doSum = () => {
    let txtboxval = document.getElementById('txtbox').value;
    if (!txtboxval){
        alert("Please enter some values in the text-box to do the operation")
        return;
    }
    let  b= txtboxval.split(",");
    let a =[];
    for(let i in b){
        a[i] = parseFloat(b[i]);
        if(!a[i]){
            alert("Please only enter numbers seperated by , to use reduce function");
            return;
        }
    }
    let sumtot = sum(a);
    alert("Sum of all the values in the array is " + sumtot);
}

let maindiv = document.createElement('div');
maindiv.setAttribute('class','container');


let div1 = document.createElement('div');
div1.setAttribute('class','text-center mt-5');

let label1 = document.createElement('label');
label1.setAttribute('class','m-2');
label1.setAttribute('for','txtbox');
label1.innerHTML = "Enter the array values(, seperated)"

let txtbox = document.createElement('input');
txtbox.setAttribute('id','txtbox');
txtbox.setAttribute('type','text');
txtbox.value = '';

let div2 = document.createElement('div');
div2.setAttribute('class','text-center');


let chunkbutton = document.createElement('button');
chunkbutton.setAttribute('id','chunkbutton');
chunkbutton.setAttribute('class','btn btn-dark m-2');
chunkbutton.addEventListener('click',doChunk);
chunkbutton.innerText = "Chunk"

let reducebutton = document.createElement('button');
reducebutton.setAttribute('id','reducebutton');
reducebutton.setAttribute('class','btn btn-dark m-2');
reducebutton.addEventListener('click',doReduce);
reducebutton.innerText = "Reduce"

let filterbutton = document.createElement('button');
filterbutton.setAttribute('id','filterbutton');
filterbutton.setAttribute('class','btn btn-dark m-2');
filterbutton.addEventListener('click',doFilter);
filterbutton.innerText = "Filter"

let findbutton = document.createElement('button');
findbutton.setAttribute('id','findbutton');
findbutton.setAttribute('class','btn btn-dark m-2');
findbutton.addEventListener('click',doFind);
findbutton.innerText = "Find"

let sumbutton = document.createElement('button');
sumbutton.setAttribute('id','sumbutton');
sumbutton.setAttribute('class','btn btn-dark m-2');
sumbutton.addEventListener('click',doSum);
sumbutton.innerText = "Sum"


div1.append(label1, txtbox);

div2.append(chunkbutton, reducebutton, filterbutton, findbutton, sumbutton);

maindiv.append(div1,div2);

document.body.appendChild(maindiv);



