function autenticarUsuario(user, password){
    
    return new Promise((resolve, reject)=>{//Creamos la promesa con sus resectivos parametros de exito y fracaso
        setTimeout(()=>{//Timeout para simular el tiempo de respuesta de un servidor
                if (user ==="admin" && password ==="1234"){//Asegurarnos de que las credenciales sean correctas
                    resolve(//En caso de ser exitoso retornamos el objeto administrador
                        administrador={
                            user,
                            rol:"Administrador",
                            mensaje: "Inicio de sesión exitoso"
                        }
                    );
                }else{//En caso de fracasar se retorna el objeto del error
                    reject(error={ error: "Credenciales incorrectas", codigo: 401 });
                }
        },2000);
    })

};

autenticarUsuario("admin", "1234") //Ejecutamos la funcion
.then((obj)=>console.log(obj))//Imprime el objeto en la consola
.catch(err=>console.log(err));//Imprime el objeto de error en la consola

