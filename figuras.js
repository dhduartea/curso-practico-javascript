//Cuadrado
// console.group("Cuadrados")
// let ladoCuadrado=5;
// console.log(`Los lados del Cuadrado miden ${ladoCuadrado}cm`);
const perimetroCuadrado = (ladoCuadrado) => ladoCuadrado * 4;


// console.log(`El perímetro es ${perimetroCuadrado(ladoCuadrado)}cm`);

const areaCuadrado = (ladoCuadrado) => ladoCuadrado ** 2


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
    return ladoTriangulo.reduce((previousValue, currentValue) => previousValue + currentValue);
};

// console.log(`El perímetro del Triángulo es ${perimetroTriangulo(ladoTriangulo)}cm`);

function areaTriangulo(ladoTriangulo) {
    let semiPerimetro = perimetroTriangulo(ladoTriangulo) / 2;
    return Math.sqrt(semiPerimetro * ladoTriangulo.reduce((previousValue, currentValue) => previousValue * (semiPerimetro - currentValue), 1));
}

// console.log(`El área del Triángulo es ${areaTriangulo(ladoTriangulo)}cm^2`);
// console.groupEnd();

//Círculo
// console.group("Círculo");
// let radioCirculo=5;
// console.log(`El radio del Círculo es ${radioCirculo} y su diámetro es ${radioCirculo*2}`);

const perimetroCirculo = (radioCirculo) => radioCirculo * 2 * Math.PI;
// console.log(`El perímetro del Círculo es ${perimetroCirculo(radioCirculo)}cm`);

const areaCirculo = (radioCirculo) => Math.PI * Math.pow(radioCirculo, 2);

// console.log(`El área del Círculo es ${areaCirculo(radioCirculo)}cm^2`);
// console.groupEnd();

//HTML

function calcularAreaPerimetroCuadrado() {
    const input = document.getElementById("ladoCuadrado");
    const value = input.value;
    const outputText=document.getElementById("outputRectangle");
    const perimetro = perimetroCuadrado(value);
    const area = areaCuadrado(value);
    outputText.innerText=`El cuadrado tiene un perímetro es ${perimetro}cm y su área es ${area}cm^2`;
}

function calcularAreaPerimetroTriangulo() {
    let valor = parseToNumberTriangle();
    const perimetro = perimetroTriangulo(valor);
    const area = areaTriangulo(valor);
    const outputText=document.getElementById("outputTriangle");
    outputText.innerText=`El Triangulo tiene un perímetro es ${perimetro}cm y su área es ${area}cm^2`;
}
function calcularAreaPerimetroCirculo() {
    const input = document.getElementById("radioCirculo");
    const value = input.value;
    const outputText=document.getElementById("outputCircle");
    const perimetro = perimetroCirculo(value);
    const area = areaCirculo(value);
    outputText.innerText=`El círculo tiene un perímetro de ${perimetro}cm y su área es ${area}cm^2`;
}
//Reto, determinar qué tipo de triángulo es 
function tipoTriangulo() {
    let valor = parseToNumberTriangle();
    let altura;
    const outputText=document.getElementById("outputTriangle");
    
    if ((valor[0] === valor[1]) && (valor[0] === valor[2])) {
        altura = alturaTrianguloEquilateroIsosceles(valor[0], valor[0])
        outputText.innerText=`Triángulo Equilatero y su altura es ${altura}`;

    } else if (valor[0] === valor[1]) {

        altura = alturaTrianguloEquilateroIsosceles(valor[0], valor[2])
        outputText.innerText=`Triángulo Isósceles y su altura es ${altura}`;

    } else if (valor[0] === valor[2]) {
        altura = alturaTrianguloEquilateroIsosceles(valor[0], valor[1])
        outputText.innerText=`Triángulo Isósceles y su altura es ${altura}`;

    } else {
        outputText.innerText=`Triángulo Escaleno y su altura depende de qué lado se escoja como base`;

    }
}
function alturaTrianguloEquilateroIsosceles(lado, base) {
    let salida = (lado ** 2 - (base / 2) ** 2) ** (1 / 2);
    return salida;
}
function parseToNumberTriangle() {
    let valor = [];
    valor.push(parseInt(document.getElementById("ladoTriangulo1").value));
    valor.push(parseInt(document.getElementById("ladoTriangulo2").value));
    valor.push(parseInt(document.getElementById("ladoTriangulo3").value));
    return valor;
}