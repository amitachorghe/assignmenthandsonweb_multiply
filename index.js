function mul(){
    var a, b ,c ,d
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);
    c=Number(document.getElementById("third").value);
    d=a*b*c;
    document.getElementById("answer").value = d;
}
a=document.getElementById("first").value;
a.addEventListener("clicl", mul());

function multiply(a,b){
    var c=a*b;
    return c;

   
}