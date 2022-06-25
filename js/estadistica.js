function separadorArray() {
    let array=document.getElementById("medidaNumeros").value;
    array = array.replace(" ", "");
    array = array.split(",");
    array=array.map(x=>parseInt(x));
    console.log(array);
    return array;
}

function calcularMediaGeometrica() {
    const outputText = document.getElementById("outputMedida");
    const array=separadorArray();
    const mediaGeometrica=(array.reduce((previousValue, currentValue) => previousValue * currentValue))**(1/array.length);
    outputText.innerText=(`La media geométrica de [${array}] es ${mediaGeometrica.toFixed(1)}`);
}
function calcularPromedio() {
    const outputText = document.getElementById("outputMedida");
    const array=separadorArray();
    const promedio=array.reduce((previousValue, currentValue) => previousValue + currentValue) / array.length;
    outputText.innerText=(`El promedio de [${array}] es ${promedio.toFixed(1)}`);
}

function calcularMediana() {
    const outputText = document.getElementById("outputMedida");
    let mediana;
    let array=separadorArray();
    array=array.sort((a,b)=>a-b);
    if (array.length%2) {
        mediana=array[Math.floor(array.length/2 )];
    } else {
        mediana=array[Math.floor(array.length/2)]+array[Math.floor(array.length/2)-1];
        mediana/=2;
    }
    outputText.innerText=(`La mediana de [${array}] es ${mediana}`);
}
function calcularModa() {
    const outputText = document.getElementById("outputMedida");
    let numeros=[];
    let contador=[];
    let moda=[];
    
    let array=separadorArray();
    for (let index = 0; index < array.length; index++) {
        if (numeros.indexOf(array[index])>-1) {
            contador[numeros.indexOf(array[index])]++;
        } else {
            numeros.push(array[index]);
            contador.push(1);
        }
    }
    const mayor=Math.max(...contador);
    for (let index = 0; index < contador.length; index++) {
        if (contador[index]>=mayor) {
            moda.push(numeros[index]);
        }
    }

    
}