function verificarEdad(age){
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
                if (age >= 18){
                    resolve("Compra permitida");
                }else{
                    reject("Debes ser mayor de edad para comprar este producto");
                }
        },3000);
    })

};
verificarEdad(19)
.then((message)=>console.log(message))
.catch(err=>console.log(err));

verificarEdad(12)
.then((message)=>console.log(message))
.catch(err=>console.log(err));
