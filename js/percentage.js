function calcularDescuento() {
    const precioTotal = parseInt(document.getElementById("totalPrice").value);
    const porcentaje = parseInt(document.getElementById("percentageDiscount").value);
    const descuento = precioTotal * (1 - porcentaje / 100);
    const outputText = document.getElementById("outputDiscount");
    outputText.innerText = `El precio final del producto es $${descuento}`;
}
const arrayCupons = { "JSJSJS": 20, "AXIWNS": 30, "PLATZI": 15, "1CUPON": 50 };
function buscarCupon() {
    const coupons_selection = document.getElementById("coupons");
    for (const element in arrayCupons) {
        const option = document.createElement("option");
        option.value = element;
        option.text = element;
        coupons_selection.appendChild(option);
    };
    const btn = document.getElementById("buscarButton")
    btn.disabled = true;
}

let selectElement = document.getElementById("coupons");
selectElement.addEventListener("change", (event) => {
    const porcentajeField = document.getElementById("percentageDiscount");
    if (event.target.value !== "none") {
        porcentajeField.value = arrayCupons[event.target.value];
        porcentajeField.disabled = true;
    } else {
        porcentajeField.disabled = false;
        porcentajeField.value = "";
    }
})