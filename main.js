function calcularPrecioPorPersona (precioTotal, descuento, numeroDeAmigos){
    return (precioTotal - descuento) / numeroDeAmigos
}

const precioTotal = 120;
const descuento = 18;
const numeroDeAmigos = 6;
const precioPorPersona = calcularPrecioPorPersona (precioTotal, descuento, numeroDeAmigos)

console.log(`El precio por persona es: ${precioPorPersona}`);
console.log(`El precio que pago yo es: ${precioPorPersona + descuento}`);