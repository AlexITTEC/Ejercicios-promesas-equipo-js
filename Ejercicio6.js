// Crea el objeto con las cuentas y su respectivo saldo
let accounts = { "airam": 1000, "alexis": 1200, "alexander": 1100 };

// Función para verificar el saldo de una cuenta y realizar la transacción
function checkBalance(account, amount) {
    // Se crea la promesa
    return new Promise((resolve, reject) => {
        // Simulación de tiempo de respuesta en 2 segundos
        setTimeout(() => {
            // Se verifica el saldo
            if (accounts[account] >= amount) {
                // Si hay fondos, se resuleve la promesar con el nuevo saldo y el mensaje de la transacción aprobada
                let newBalance = accounts[account] - amount;
                resolve({ account: account, remainingBalance: newBalance, message: "Transacción aprobada" });
            } else {
                // Si no hay fondos, se rechaza la promesa con un error con el mensaje y el saldo disponible
                reject({ error: "Fondos insuficientes", availableBalance: accounts[account], code: 402 });
            }
        }, 2000)
    });
}
// Llama la función checkBalance con la cuenta y el monto
checkBalance("airam", 200)
    // Se muestra el resultado en consola cuando la promesa se resuelve o rechaza
    .then(response => console.log(response))
    .catch(error => console.error(error));