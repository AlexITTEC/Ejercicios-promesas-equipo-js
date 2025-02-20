const baseDeDatosClima = {
    "Madrid": { temperatura: 22, condicion: "Soleado" },
    "Ciudad de México": { temperatura: 18, condicion: "Nublado" },
    "Buenos Aires": { temperatura: 20, condicion: "Lluvioso" },
    "Bogotá": { temperatura: 15, condicion: "Parcialmente nublado" }
};

function consultarClima(ciudad) {
    return new Promise((resolve, reject) => {
        if (baseDeDatosClima[ciudad]) {
            resolve({ ciudad, ...baseDeDatosClima[ciudad] });
        } else {
            reject({ error: "Ciudad no encontrada", codigo: 404 });
        }
    });
}

// Ejemplo de uso:
consultarClima("Madrid")
    .then(datos => console.log("Clima en", datos.ciudad, ":", datos.temperatura, "°C y", datos.condicion))
    .catch(error => console.error("Error:", error.error, "(Código:", error.codigo, ")"));
