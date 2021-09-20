
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
    delay=0;
    switch(algoValue)
    {
        case "0":bubbleSort();break;
        case "1":insertionSort();break;
        case "2":selectionSort();break;
        case "3":mergeSort(0,arrSize-1);break;
        case "4":break;
        case "5":break;
    }
});


var container=document.getElementById("container");
var maxHeight=window.innerHeight-document.querySelector("header").style.height-150;
var barWidth=10;

var inputArr=document.getElementById("arraySize");
inputArr.addEventListener("input",function (){
    newArray();
});
newArray();

var speed=50;
var inputSpeed=document.getElementById("speed");
inputSpeed.addEventListener("input",function (){
    speed=110-inputSpeed.value;
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
            delay+=speed;
            setTimeout(swap,delay,e1,e2);
            delay+=10-speed/10;
            setTimeout(Update,delay,e2,"rgb(0,255,0)");
            setTimeout(Update,delay,e1,"rgb(0,255,0)");
            delay+=speed;
        }
        setTimeout(last,delay,tempSize);
        tempSize--;
    }
    setTimeout(enable,delay);
}
function last(tempSize) {document.getElementById((tempSize-1).toString()).style.backgroundColor="rgb(0,0,255)"}
///BUBBLE SORT

// INSERTION SORT BEGINS.
function insertionSort()
{
    var i,j;
    i=1;
    j=0;
    var pj=arrSize; // index of previous object
    var ky=document.getElementById(i.toString()); // ith object
    var kyv=parseInt(ky.style.height.toString()); // value of ith object
    var itvl=setInterval(function(){
        pj=j;
        var nxtobj=document.getElementById((j+1).toString()); // next object
        if(j>=0)
        { 
           var currobj=document.getElementById(j.toString()); // current(jth) object
           var currobjv=parseInt(currobj.style.height.toString()); // jth object value
        }
        if(j<0)
        {
            nxtobj.style.height=kyv.toString()+"px";
            nxtobj.style.backgroundColor="rgb(0,0,255)";
            //changing the color of the sorted bar blue
            i++;
            j=i-1;
            if(i==arrSize)
            {
                clearInterval(itvl);
                enable();
            }
            else
            {
                ky=document.getElementById(i.toString());
                kyv=parseInt(ky.style.height.toString());
            }
        }
        
        if(pj>=0 && currobjv<=kyv)
        {
            nxtobj.style.height=kyv.toString()+"px";
            nxtobj.style.backgroundColor="rgb(0,0,255)";
            //changing the color of the sorted bar blue
            i++;
            j=i-1;
            if(i==arrSize)
            {
                clearInterval(itvl);
                enable();
            }
            else
            {
                ky=document.getElementById(i.toString());
                kyv=parseInt(ky.style.height.toString());
            }
        }
        else
        {
            nxtobj.style.height=currobjv.toString()+"px";
            currobj.style.backgroundColor="rgb(255,0,0)";
            nxtobj.style.backgroundColor="rgb(0,0,255)";
            j--;
        }
    },speed)
}
// INSERTION SORT ENDS.


// SELECTION SORT BEGINS
function swapone(e1,e2)
{  
    var swapTemp=e2.style.height;
    e2.style.height=e1.style.height;
    e1.style.height=swapTemp;
    e1.style.backgroundColor="rgb(0,0,255)";     
}
function selectionSort()
{
    var i,j;
    i=0;
    j=0;
    var mn; // object of current minimum
    var obj1; // object of current bar
    var obj1v; // value of current bar
    var mnval; // value of current minimum
    var midx; // index(id) of current minimum 
    var pj=-1; // index(id) of previous bar
    mn=document.getElementById(parseInt(0).toString());
    mnval=parseInt(mn.style.height.toString());
    midx=0;
var itvl=setInterval(function(){
    j++;
    if(j==arrSize)
    {
        var tm=document.getElementById(midx.toString()); 
        var mn=document.getElementById(i.toString());
        swapone(mn,tm);
        i++;
        j=i;
        if(i==arrSize)
        {
            clearInterval(itvl);
            enable();
        }
        else
        {
            mn=document.getElementById(i.toString());
            mnval=parseInt(mn.style.height.toString());
            midx=i;
        }
    }
    if(i!=arrSize)
    {    
        var prevobj;
        if(pj>-1)  
        {
            prevobj=document.getElementById(pj.toString());
            prevobj.style.backgroundColor="rgb(0,255,0)"; 
            // changing the colour of previous object to green                                                  
        }
        obj1=document.getElementById(j.toString());
        obj1v=parseInt(obj1.style.height.toString());
        obj1.style.backgroundColor="rgb(255,0,0)";
        // changing the colour of current object to red   
        if(mnval>obj1v)
        {
            mnval=obj1v;
            midx=j;
        }
    }pj=j;
},speed)
}
// SELECTION SORT ENDS



///MERGE SORT
var obj={"idxL":0,"idxR":0,"arrIdx":0};

function mergeUtil(sizeL,sizeR,Left,Right)
{

    if(obj.idxL<sizeL && obj.idxR<sizeR)
    {
        if(Left[obj.idxL]>Right[obj.idxR])
        {
            document.getElementById(obj.arrIdx.toString()).style.height=Right[obj.idxR].toString()+"px";
            obj.idxR++;
        }
        else 
        {
            document.getElementById(obj.arrIdx.toString()).style.height=Left[obj.idxL].toString()+"px";
            obj.idxL++;
        }
        obj.arrIdx++;
    }
    else if(obj.idxL<sizeL)
    {
        document.getElementById(obj.arrIdx.toString()).style.height=Left[obj.idxL].toString()+"px";
        obj.idxL++;
        obj.arrIdx++;
    }
    else if(obj.idxR<sizeR)
    {
        document.getElementById(obj.arrIdx.toString()).style.height=Right[obj.idxR].toString()+"px";
        obj.idxR++;
        obj.arrIdx++;
    }
}

function merge(begin,mid,end)
{
    begin=parseInt(begin);
    mid=parseInt(mid);
    end=parseInt(end);
    var m_delay=0;
    var Left=[],Right=[];
    var sizeL=mid-begin+1,sizeR=end-mid;
    for(var i=0;i<sizeL;i++)Left[i]=parseInt(document.getElementById((begin+i).toString()).style.height.toString());
    for(var i=0;i<sizeR;i++)Right[i]=parseInt(document.getElementById((mid+i+1).toString()).style.height.toString());
    
    obj.idxL=0;obj.idxR=0;obj.arrIdx=begin;
    for(var i=0;i<sizeL+sizeR;i++)
    {
        setTimeout(mergeUtil,m_delay,sizeL,sizeR,Left,Right);
        m_delay+=speed;
    }
}
function mergeSort(begin,end)
 {
    begin=parseInt(begin);
    end=parseInt(end);
    if (begin >= end) return;
  
    var mid = Math.floor(begin + (end - begin) / 2);
    mergeSort(begin, mid);
    mergeSort(mid + 1, end);

    setTimeout(merge,delay,begin,mid,end);

    for(var i=0;i<end-begin+1;i++)
    setTimeout(Update,delay,document.getElementById((begin+i),toString()) ,"rgb(255,0,0)");

    delay+=(end-begin+5)*(speed);
    if(begin==0 && end==arrSize-1)setTimeout(enable,delay);

    for(var i=0;i<end-begin+1;i++)
    {
        if(begin==0 && end==arrSize-1)setTimeout(Update,delay,document.getElementById((begin+i),toString()) ,"rgb(0,0,255)");
        else setTimeout(Update,delay,document.getElementById((begin+i),toString()) ,"rgb(0,255,0)");
    }
}
////MERGE SORT
