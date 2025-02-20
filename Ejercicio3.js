// Crea el objeto con las existencias disponibles
let stock = { "laptop": 5, "mouse": 10, "teclado": 0 };

// Función para comprar productos con sus respectivas existencias
function checkStock(product, quantity) {
    // Se crea la promesa
    return new Promise((resolve, reject) => {
        // Simulación de tiempo de respuesta en 2 segundos
        setTimeout(() => {
            // Se verifica el inventario
            if (stock[product] >= quantity && stock[product] !== 0) {
                // Si hay productos disponibles, se resuelve la promesa con el mensaje de stock disponible
                resolve("Stock disponible, procediendo con la compra");
            } else {
                // Si no hay productos disponibles, se rechaza la promesa con el mensaje de stock insuficiente
                reject("Stock insuficiente.");
            }
        }, 2000)
    });
}

// Llama la función checkStock con el producto y la cantidad como parámetos
checkStock("laptop", 2)
    // Se muestra el resultado en consola cuando la promesa se resuelve o rechaza
    .then(message => console.log(message)) 
    .catch(error => console.error(error));