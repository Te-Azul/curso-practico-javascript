
function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento= 100 - descuento;
    const precioConDescuento = precio * (porcentajePrecioConDescuento/100);
    return precioConDescuento;
}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });

var coupons = {
    Santander: 5,
    ARG600: 6,
    CODE20: 20,
};

function onClickButtonPriceDiscount(){
    const price = document.getElementById("InputPrice").value;
    const discount = Number(document.getElementById("InputDiscount").value);
    const resultP = document.getElementById("ResultP");
    const coupon = document.getElementById("InputCoupon").value;
    if(coupons[coupon] != null){
        let precioConDescuento = calcularPrecioConDescuento(price, discount + Number(coupons[coupon]));
        resultP.innerText = "El precio con descuento + CUPON es: $" + precioConDescuento.toFixed(2);
    }
    else if(coupon != ""){
        resultP.innerText = "El cupon ingresado es invalido";
    }
    else{
        const precioConDescuento = calcularPrecioConDescuento(price, discount);
        resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
    }
    
}