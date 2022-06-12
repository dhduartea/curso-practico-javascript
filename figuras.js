//Cuadrado
// console.group("Cuadrados")
// let ladoCuadrado=5;
// console.log(`Los lados del Cuadrado miden ${ladoCuadrado}cm`);
const perimetroCuadrado=(ladoCuadrado)=>ladoCuadrado*4;


// console.log(`El perímetro es ${perimetroCuadrado(ladoCuadrado)}cm`);

const areaCuadrado=(ladoCuadrado)=>ladoCuadrado**2


// console.log(`El área es ${areaCuadrado(ladoCuadrado)}cm^2`);
// console.groupEnd();

//Triángulo
// console.group("Triángulos")
// let ladoTriangulo=[6,6,4]
// console.log(`Los lados del Triangulo miden 
//     ${ladoTriangulo[0]}cm, 
//     ${ladoTriangulo[1]}cm y 
//     ${ladoTriangulo[2]}cm`
// );

function perimetroTriangulo(ladoTriangulo) {
    return ladoTriangulo.reduce((previousValue, currentValue) => previousValue+currentValue);
};

// console.log(`El perímetro del Triángulo es ${perimetroTriangulo(ladoTriangulo)}cm`);

function areaTriangulo(ladoTriangulo) {
    let semiPerimetro=perimetroTriangulo(ladoTriangulo)/2;
    return Math.sqrt(semiPerimetro*ladoTriangulo.reduce((previousValue,currentValue)=>previousValue*(semiPerimetro-currentValue),1));
}

// console.log(`El área del Triángulo es ${areaTriangulo(ladoTriangulo)}cm^2`);
// console.groupEnd();

//Círculo
// console.group("Círculo");
// let radioCirculo=5;
// console.log(`El radio del Círculo es ${radioCirculo} y su diámetro es ${radioCirculo*2}`);

const perimetroCirculo=(radioCirculo)=>radioCirculo*2*Math.PI;
// console.log(`El perímetro del Círculo es ${perimetroCirculo(radioCirculo)}cm`);

const areaCirculo =(radioCirculo)=>Math.PI*Math.pow(radioCirculo,2);

// console.log(`El área del Círculo es ${areaCirculo(radioCirculo)}cm^2`);
// console.groupEnd();

//HTML

function calcularAreaPerimetroCuadrado() {
    const input=document.getElementById("ladoCuadrado");
    const value=input.value;

    const perimetro=perimetroCuadrado(value);
    const area=areaCuadrado(value);
    alert(`El cuadrado tiene un perímetro es ${perimetro}cm y su área es ${area}cm^2`);
}

function calcularAreaPerimetroTriangulo() {
    let valor=[];
    valor.push(parseInt(document.getElementById("ladoTriangulo1").value));
    valor.push(parseInt(document.getElementById("ladoTriangulo2").value));
    valor.push(parseInt(document.getElementById("ladoTriangulo3").value));
    
    const perimetro=perimetroTriangulo(valor);
    const area=areaTriangulo(valor);
    alert(`El Triangulo tiene un perímetro es ${perimetro}cm y su área es ${area}cm^2`);
}
function calcularAreaPerimetroCirculo() {
    const input=document.getElementById("radioCirculo");
    const value=input.value;

    const perimetro=perimetroCirculo(value);
    const area=areaCirculo(value);
    alert(`El círculo tiene un perímetro es ${perimetro}cm y su área es ${area}cm^2`);
}