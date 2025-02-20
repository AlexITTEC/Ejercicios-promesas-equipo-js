function descargarArchivo(tamaño) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("entro");
         if (tamaño<=50) {
           resolve("Descarga Completada"); 
         }else{
            reject("El archivo es demasiado grande");
         }   
        }, 3000);
    })
}
descargarArchivo(50)
.then(mensaje => console.log(mensaje))
.catch((Error)=> console.log(Error));
