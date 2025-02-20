// Función que simula el procesamiento de un pago en línea
function ProcesarPago(monto) {
    return new Promise((resolve, reject) => {
        console.log("entro"); // Mensaje de depuración para confirmar que la función se ejecutó

        // Simula un retraso de 3 segundos antes de procesar el pago
        setTimeout(() => {
            // Verifica si el monto es mayor a 0
            if (monto > 0) {
                resolve(`Pago exitoso de $${monto}`); // Resuelve la promesa con un mensaje de éxito
            } else {
                reject("Error: Monto inválido"); // Rechaza la promesa con un mensaje de error
            }
        }, 3000); // Simula el tiempo de espera con setTimeout
    });
}

// Llamada a la función con un monto de 4
ProcesarPago(4)
    .then(mensaje => console.log(mensaje)) // Maneja la respuesta exitosa de la promesa
    .catch(error => console.log(error)); // Maneja el error si la promesa es rechazada
