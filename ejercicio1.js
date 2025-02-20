// Función que simula la descarga de un archivo
function descargarArchivo(tamaño) {
    return new Promise((resolve, reject) => {
        // Simula un tiempo de espera de 3 segundos antes de procesar la descarga
        setTimeout(() => {
            console.log("entro"); // Mensaje para verificar que la función se ejecutó
            
            // Verifica si el tamaño del archivo es menor o igual a 50MB
            if (tamaño <= 50) {
                resolve("Descarga Completada"); // Resuelve la promesa con un mensaje de éxito
            } else {
                reject("El archivo es demasiado grande"); // Rechaza la promesa con un mensaje de error
            }   
        }, 3000); // Simula el tiempo de espera con setTimeout
    });
}

// Llamada a la función con un tamaño de 50MB
descargarArchivo(50)
    .then(mensaje => console.log(mensaje)) // Maneja la respuesta exitosa de la promesa
    .catch(error => console.log(error)); // Maneja el error si la promesa es rechazada
