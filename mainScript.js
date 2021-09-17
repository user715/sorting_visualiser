function getAlgo()
{
    var dropDown=document.querySelector("#algoSelect");
    return dropDown.value;
}


var runBtn=document.getElementById("runBtn");
runBtn.addEventListener("click",function (){
    var algoValue=getAlgo();
    console.log(algoValue);
});

var container=document.getElementById("container");
