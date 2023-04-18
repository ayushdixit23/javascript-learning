
let count=0;
let ayush= document.getElementById("zero");
let dixit=document.getElementById("text");

function increase()
{
    count+=1;
    ayush.innerText=count;
}

function save(){
    dixit.textContent=count;
}