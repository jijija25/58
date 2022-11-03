function send2()
{
    var nombres= document.getElementById ("nombre").value;
    var apellido= document.getElementById ("apellido").value;
    console.log (nombres + apellido);
    var nombrecompleto= nombres.concat (apellido);
    console.log (nombrecompleto);
    document.getElementById ("nombre_completo").innerHTML =nombrecompleto;
    document.getElementById ("longitud_nombre_completo").innerHTML= nombrecompleto.length;
var longitud= nombrecompleto.length;
sumale=Number(longitud+3);
console.log (sumale);
var multiplicale =Number (sumale * 2);
console.log (multiplicale);
var sumalecuatro = Number (multiplicale+4);
console.log (sumalecuatro);
var dividir= Number(sumalecuatro/2);
console.log (dividir);
var resta= Number ( dividir-longitud);
console.log (resta);
if (resta==5){
    document.getElementById("correcto").innerHTML="FELICIDADES ☻"
}
}