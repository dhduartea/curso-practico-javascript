let prueba=[1,2,4,6,7,3,4,10]
let prueba2=[1,2,3,4,5,6]
let prueba3="1,2,3,4,5, 6"

let salida;
let salida2;

salida=prueba2.reduce((previousValue, currentValue)=>previousValue+currentValue)/prueba2.length;
prueba3=prueba3.replace(" ", "");
salida2=prueba3.split(",");
console.log(salida2);
console.log(salida);


