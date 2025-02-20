

function ProcesarPago(monto){
    return new Promise((resolve, reject) => {
        console.log("entro");
        setTimeout(() => {
            if (monto>0) {
                resolve("Pago exitoso de $monto");

            } else {
                reject("Error: Monto invalido");
                
            }
        }, 3000);

    })
}
ProcesarPago(4)
.then(mensaje => console.log(mensaje))
.catch((Error)=> console.log(Error));
