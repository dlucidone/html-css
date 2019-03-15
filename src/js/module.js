var module = (function(){
var x = {}
function print(args){
    console.log("you have enetered the print section");
   var a =  document.getElementById(args).innerHTML="abc";
   console.log(a)
}
function addPod(){
    var value  =  document.getElementById('searchBox').value;
    document.getElementById('searchBox').value='';
    var div = document.createElement('ul');
    div.className = "pod"
      div.innerHTML =
        '<div>'+
        '<p>'+value+'</p></div>';
        div.onclick = removePod;

    document.getElementById('ct').appendChild(div);
}

function removePod(e){
console.log("here",e.target.parentElement)
 e.target.parentElement.removeChild(e.target);
}
return{
    addPod:addPod,
    print:print,
    removePod
}
}())