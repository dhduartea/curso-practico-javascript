
function calcularPromedio() {
    const outputText = document.getElementById("outputPromedio");
    const array=separadorArray();
    const promedio=array.reduce((previousValue, currentValue) => previousValue + currentValue) / array.length;
    outputText.innerText=(`El promedio de [${array}] es ${promedio}`);
}

function separadorArray() {
    let array=document.getElementById("promedioNumeros").value;
    array = array.replace(" ", "");
    array = array.split(",");
    array=array.map(x=>parseInt(x));
    console.log(array);
    return array;
}

