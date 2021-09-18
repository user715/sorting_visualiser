
var arrSize;


function getAlgo()
{
    var dropDown=document.querySelector("#algoSelect");
    return dropDown.value;
}

function disable()
{
    document.querySelector("#algoSelect").setAttribute("disabled","");
    document.getElementById("runBtn").setAttribute("disabled","");
    document.getElementById("arraySize").setAttribute("disabled","");
    document.getElementById("speed").setAttribute("disabled","");
}

function enable()
{
    document.querySelector("#algoSelect").removeAttribute("disabled");
    document.getElementById("runBtn").removeAttribute("disabled");
    document.getElementById("arraySize").removeAttribute("disabled");
    document.getElementById("speed").removeAttribute("disabled");
}

var runBtn=document.getElementById("runBtn");
runBtn.addEventListener("click",function (){
    var algoValue=getAlgo();
    disable();
    switch(algoValue)
    {
        case "0":bubbleSort();break;
        case "1":break;
        case "2":break;
        case "3":break;
        case "4":break;
        case "5":break;
    }
});


var container=document.getElementById("container");
var maxHeight=window.innerHeight-document.querySelector("header").style.height-300;
var barWidth=10;

var inputArr=document.getElementById("arraySize");
inputArr.addEventListener("input",function (){
    newArray();
});
newArray();

var speed=50;
var inputSpeed=document.getElementById("speed");
inputSpeed.addEventListener("input",function (){
    speed=inputSpeed.value;
});


///new array
function newArray(){
container.innerHTML="";
var barHeight;
arrSize=Math.floor(inputArr.value);
for(var i=0;i<arrSize;i++)
{
    barHeight=Math.random()*maxHeight;
    var temp=document.createElement("div");
    temp.id=i.toString();
    temp.style.width="10px";
    temp.style.height=barHeight.toString()+"px";
    temp.class="bar";
    temp.style.display="inline";
    temp.style.margin="2px";
    temp.style.float="left";
    temp.style.backgroundColor="rgb(0,255,0)";
    container.appendChild(temp);
}
}
///new array


///BUBBLE SORT
function green(e1,e2)
{
    e1.style.backgroundColor="rgb(0,255,0)";
    e2.style.backgroundColor="rgb(0,255,0)";
}

var delay=10;

function Update(ele,colour)
{
    ele.style.backgroundColor=colour;
}

function swap(e1,e2)
{
    var h1=parseInt(e1.style.height.toString());
    var h2=parseInt(e2.style.height.toString());
    if(h1>h2)
    {
        var swapTemp=e2.style.height;
        e2.style.height=e1.style.height;
        e1.style.height=swapTemp;
    }
}

function bubbleSort(){
    disable();
    delay=0;
    console.log("Bubble");
    var tempSize=arrSize;
    console.log(tempSize);
    while(tempSize!=0)
    {
        for(var j=0;j<tempSize-1;j++)
        {
            var e1=document.getElementById(j.toString());
            var e2=document.getElementById((j+1).toString());
            setTimeout(Update,delay,e2,"rgb(255,0,0)");
            setTimeout(Update,delay,e1,"rgb(255,0,0)");
            delay+=10-speed/10;
            setTimeout(swap,delay,e1,e2);
            delay+=10-speed/10;
            setTimeout(Update,delay,e2,"rgb(0,255,0)");
            setTimeout(Update,delay,e1,"rgb(0,255,0)");
            delay+=10-speed/10;
        }
        setTimeout(last,delay,tempSize);
        tempSize--;
    }
    setTimeout(enable,delay);
}

function last(tempSize) {document.getElementById((tempSize-1).toString()).style.backgroundColor="rgb(0,0,255)"}
///BUBBLE SORT


