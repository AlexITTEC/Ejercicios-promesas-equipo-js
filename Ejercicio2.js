function verificarEdad(age){
    
    return new Promise((resolve, reject)=>{//Creamos la promesa
        setTimeout(()=>{//Timeout para simular el tiempo de carga que tendria la solicitud y la respuesta de un servidor
                if (age >= 18){//Comprobamos la edad
                    resolve("Compra permitida");//En caso de ser mayor de edad la compra es valida
                }else{
                    reject("Debes ser mayor de edad para comprar este producto");//En caso de ser menor de edad se rechaza la compra
                }
        },3000);//Milisegundos de simulacion del servidor
    })

};
verificarEdad(19)//Ejecutamos la funcion con mayoria de edad
.then((message)=>console.log(message))//En caso de exito se arroja el mensaje del resolve
.catch(err=>console.log(err));//En caso de ser menor de edad arrojamos el mensaje de error del reject

verificarEdad(12)
.then((message)=>console.log(message))
.catch(err=>console.log(err));
