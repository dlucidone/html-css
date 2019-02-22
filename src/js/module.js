var module = (function(){

function print(args){
    console.log("you have enetered the print section");
   var a =  document.getElementById(args).innerHTML="abc";
   console.log(a)
}

return{
    print:print
}
}())