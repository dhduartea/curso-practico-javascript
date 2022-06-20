function calcularDescuento(){
    let precioTotal=parseInt(document.getElementById("totalPrice").value);
    let porcentaje=parseInt(document.getElementById("percentageDiscount").value);
    let descuento=precioTotal*(1-porcentaje/100)
    const outputText=document.getElementById("outputDiscount");
    outputText.innerText=`El precio final del producto es $${descuento}`;
}
