function autenticarUsuario(user, password){
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
                if (user ==="admin" && password ==="1234"){
                    resolve(
                        administrador={
                            user,
                            rol:"Administrador",
                            mensaje: "Inicio de sesión exitoso"
                        }
                    );
                }else{
                    reject(error={ error: "Credenciales incorrectas", codigo: 401 });
                }
        },2000);
    })

};

autenticarUsuario("admin", "1234")
.then((obj)=>console.log(obj))
.catch(err=>console.log(err));

