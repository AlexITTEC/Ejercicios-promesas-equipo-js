// Base de datos simulada con información del clima para algunas ciudades
const baseDeDatosClima = {
    "Madrid": { temperatura: 22, condicion: "Soleado" },
    "Ciudad de México": { temperatura: 18, condicion: "Nublado" },
    "Buenos Aires": { temperatura: 20, condicion: "Lluvioso" },
    "Bogotá": { temperatura: 15, condicion: "Parcialmente nublado" }
};

// Función que consulta el clima de una ciudad y devuelve una promesa
function consultarClima(ciudad) {
    return new Promise((resolve, reject) => {
        // Verifica si la ciudad existe en la base de datos
        if (baseDeDatosClima[ciudad]) {
            // Si la ciudad existe, resuelve la promesa con los datos de clima
            resolve({ ciudad, ...baseDeDatosClima[ciudad] });
        } else {
            // Si la ciudad no existe, rechaza la promesa con un error y código 404
            reject({ error: "Ciudad no encontrada", codigo: 404 });
        }
    });
}

// Ejemplo de uso de la función consultarClima
consultarClima("Madrid")
    .then(datos => console.log("Clima en", datos.ciudad, ":", datos.temperatura, "°C y", datos.condicion)) // Maneja el éxito
    .catch(error => console.error("Error:", error.error, "(Código:", error.codigo, ")")); // Maneja el error
