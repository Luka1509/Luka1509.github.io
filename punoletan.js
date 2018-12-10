/**
var god = prompt("unesi godiste");
if(god<=2000) alert("punoletan");
else alert("nisi punoletan");

var god = prompt("unesi godiste");
function godiste(){
if(god<=2000) alert("punoletan");
else alert("nisi punoletan");
}
godiste();

var god = prompt("unesi godiste");
function godiste(godiste){
if(godiste<=2000) alert("punoletan");
else alert("nisi punoletan");
}
godiste(god);

**/
var god = prompt("unesi godiste"); 

function godiste(){
if(god<=2000) return "punoletan";
else return "nisi punoletan";
}

alert(godiste());