# Ejercicios-promesas-equipo-js
Repositorio de ejercicios de promesas de JavaScript


## **Ejercico 1**
### **Instrucción:**
Crea una función descargarArchivo(tamaño) que devuelva una promesa.
- Si el tamaño es menor o igual a 50MB, la promesa se resuelve con "Descarga completada".
- Si el tamaño es mayor a 50MB, la promesa se rechaza con "El archivo es demasiado grande".
### **Solución:**
Para resolver este ejercicio, pensé en cómo funcionan las promesas en JavaScript y cómo se pueden utilizar para simular una operación asíncrona, como la descarga de un archivo.  

#### **Paso 1: Creación de la Promesa**
La función `descargarArchivo(tamaño)` devuelve una **nueva promesa**. Dentro de esta promesa, utilicé `setTimeout` para simular un **proceso asíncrono** que tarda 3 segundos en completarse (`3000ms`). Esto representa el tiempo que tomaría la descarga de un archivo en la vida real.  

#### **Paso 2: Evaluación de la Condición**
Dentro de `setTimeout`, agregué un `if` para verificar si el tamaño del archivo es menor o igual a 50MB:  
- Si el tamaño es **50MB o menos**, la promesa se **resuelve** con el mensaje `"Descarga Completada"`.  
- Si el tamaño es **mayor a 50MB**, la promesa se **rechaza** con el mensaje `"El archivo es demasiado grande"`.  

También agregué un `console.log("entro")` para confirmar que la función estaba siendo ejecutada correctamente.  

#### **Paso 3: Manejo de la Promesa**
Al llamar `descargarArchivo(50)`, usé `.then()` y `.catch()` para manejar el resultado:  
- `.then(mensaje => console.log(mensaje))` imprime `"Descarga Completada"` si la promesa se resuelve correctamente.  
- `.catch(error => console.log(error))` imprime `"El archivo es demasiado grande"` si la promesa es rechazada.  

#### **Resultado Final**
Cuando se ejecuta `descargarArchivo(50)`, después de 3 segundos, se muestra en consola:  
```
entro  
Descarga Completada  
```
Si en su lugar llamáramos `descargarArchivo(60)`, el resultado sería:  
```
entro  
El archivo es demasiado grande  
```
Este ejercicio me ayudó a reforzar el uso de promesas y su manejo con `.then()` y `.catch()`, además de entender cómo simular procesos asíncronos con `setTimeout()`.

## **Ejercicio 2**
### **Instrucción:**
Crea una función verificarEdad(edad) que devuelva una promesa.
- Si la edad es 18 o más, la promesa se resuelve con "Compra permitida".
- Si la edad es menor de 18, la promesa se rechaza con "Debes ser mayor de edad para comprar este producto".
### **Solución:**

## **Ejercicio 3**
### **Instrucción:**
Crea una función verificarStock(producto, cantidad) que devuelva una promesa.
- Si el producto existe en inventario y la cantidad está disponible, la promesa se resuelve con "Stock disponible, procediendo con la compra".
- Si no hay suficiente stock, la promesa se rechaza con "Stock insuficiente".

Considere el siguiente objeto para hacer las búsquedas:

let inventario = { "laptop": 5, "mouse": 10, "teclado": 0 };  

### **Solución:**
Se creó el objeto con el nombre del producto y la cantidad disponible en inventario, después se creó la funcion `checkStock(product, quantity)`, dentro de la función simulamos el tiempo de respuesta con `setTimeout()` en la que ponemos como primer parámetro la función que verfica la existencia del producto mediante un if, si la cantidad en stock es igual o mayor a la cantidad de producto solicitada se resuelve la promesa con el mensaje "Stock disponible, procediendo con la compra" y en caso contrario se rechaza la promesa con el mensaje "Stock insuficiente". Como segundo parámetro de `setTimeout()` indicamos 2000 milisegundos (2 segundos) de espera para resolver la promesa. 
Finalmente, llamamos a la función `checkStock()` enviando como parámetro el nombre de un producto y la cantidad de producto que se quiere comprar, e imprimimos en consola el resultado de la promesa en caso de que se haya resuelto o rechazado con `.then()` y `.catch()`.

## **Ejercicio 4**
### **Instrucción:**
Crea una función procesarPago(monto) que devuelva una promesa.
- Si el monto es mayor a 0, la promesa se resuelve con "Pago exitoso de $monto".
- Si el monto es 0 o menor, la promesa se rechaza con "Error: Monto inválido".
### **Solución:**
Para resolver este ejercicio, pensé en cómo funcionan las promesas y en cómo simular un proceso de pago en línea, que normalmente toma unos segundos en completarse.  

#### **Paso 1: Creación de la Promesa**  
La función `ProcesarPago(monto)` devuelve una **nueva promesa**. Dentro de esta promesa, incluí un `setTimeout` para simular el tiempo de procesamiento del pago (3 segundos). Esto imita el tiempo real que un sistema de pago podría tardar en validar una transacción.  

También agregué un `console.log("entro")` al inicio de la función para verificar que la función se ejecuta correctamente.  

#### **Paso 2: Evaluación de la Condición**  
Dentro del `setTimeout`, agregué una condición `if` para verificar el monto del pago:  
- Si el **monto es mayor a 0**, la promesa se **resuelve** con el mensaje `"Pago exitoso de $monto"`.  
- Si el **monto es 0 o menor**, la promesa se **rechaza** con el mensaje `"Error: Monto inválido"`.  

#### **Paso 3: Manejo de la Promesa**  
Al llamar `ProcesarPago(4)`, usé `.then()` y `.catch()` para manejar la respuesta:  
- `.then(mensaje => console.log(mensaje))` imprime `"Pago exitoso de $monto"` si el pago es válido.  
- `.catch(error => console.log(error))` imprime `"Error: Monto inválido"` si el monto es 0 o menor.  

#### **Error en el Código Original**
Me di cuenta de que en `resolve("Pago exitoso de $monto")` el valor de `monto` no se estaba interpolando correctamente en la cadena de texto. Para solucionarlo, lo corregí con **template literals**:
```js
resolve(`Pago exitoso de $${monto}`);
```

#### **Resultado Final**
Si ejecutamos `ProcesarPago(4)`, después de 3 segundos, se muestra en consola:  
```
entro  
Pago exitoso de $4  
```
Si en su lugar ejecutamos `ProcesarPago(0)`, el resultado sería:  
```
entro  
Error: Monto inválido  
```
Este ejercicio me permitió reforzar el uso de promesas y cómo utilizarlas en situaciones del mundo real, como el procesamiento de pagos en línea. También aprendí a usar `setTimeout` para simular retrasos y a corregir errores en la interpolación de cadenas. 🚀

## **Ejercicio 5**
### **Instrucción:**
Crea una función autenticarUsuario(usuario, contraseña) que devuelva una promesa con el siguiente comportamiento:
- Si el usuario es "admin" y la contraseña es "1234", la promesa se resuelve con un objeto que contiene { usuario, rol: "Administrador", mensaje: "Inicio de sesión exitoso" }.
- Si los datos son incorrectos, la promesa se rechaza con un objeto { error: "Credenciales incorrectas", codigo: 401 }.
### **Solución:**


## **Ejercicio 6**
### **Instrucción:**
Crea una función verificarSaldo(cuenta, monto) que devuelva una promesa con el siguiente comportamiento:
- Si el saldo de la cuenta es suficiente para la transacción, la promesa se resuelve con { cuenta, saldoRestante, mensaje: "Transacción aprobada" }.
- Si el saldo no es suficiente, la promesa se rechaza con { error: "Fondos insuficientes", saldoDisponible, codigo: 402 }.

### **Solución:**
Se creó el objeto accounts con el nombre de la cuenta y su respectivo saldo disponible, después se creó la función checkBalance(account, amount), dentro de la función simulamos el tiempo de respuesta con `setTimeout()` en la que ponemos como primer parámetro la función que verfica el saldo disponible mediante un if, si el saldo disponible es igual o mayor a la cantidad que se quiere usar para la transacción se resuelve la promesa retornando un objeto con la cuenta, el nuevo saldo disponible y el mensaje "Transacción aprobada" y en caso contrario se rechaza la promesa con un objeto con el mensaje de error "Fondos insuficientes", el saldo disponible en la cuenta y el código 402. Como segundo parámetro de `setTimeout()` indicamos 2000 milisegundos (2 segundos) de espera para resolver la promesa. 
Finalmente, llamamos a la función `checkBalance()` enviando como parámetro una cuenta y el monto, e imprimimos en consola el resultado de la promesa en caso de que se haya resuelto o rechazado con `.then()` y `.catch()`.

## **Ejercicio 7**
### **Instrucción:**
Crea una función consultarClima(ciudad) que devuelva una promesa con el siguiente comportamiento:
- Si la ciudad existe en una base de datos local, la promesa se resuelve con { ciudad, temperatura, condicion }.
- Si la ciudad no existe, la promesa se rechaza con { error: "Ciudad no encontrada", codigo: 404 }.

### **Solución:**
Para resolver este ejercicio, pensé en cómo simular una consulta de clima utilizando una **base de datos local** y **promesas** en JavaScript.  

---

#### **Paso 1: Definir la Base de Datos**  
Se creó un objeto llamado `baseDeDatosClima` que actúa como una "base de datos" en memoria. Este objeto contiene el clima de algunas ciudades con sus respectivas **temperaturas** y **condiciones climáticas**.  

```js
const baseDeDatosClima = {
    "Madrid": { temperatura: 22, condicion: "Soleado" },
    "Ciudad de México": { temperatura: 18, condicion: "Nublado" },
    "Buenos Aires": { temperatura: 20, condicion: "Lluvioso" },
    "Bogotá": { temperatura: 15, condicion: "Parcialmente nublado" }
};
```
---

#### **Paso 2: Crear la Función `consultarClima(ciudad)`**  
La función `consultarClima(ciudad)` devuelve una **promesa** que se resuelve o se rechaza dependiendo de si la ciudad existe en la base de datos.  

Dentro de la promesa:  
1. Se verifica si la ciudad existe en `baseDeDatosClima`.  
2. Si la ciudad **existe**, la promesa **se resuelve** con un objeto que contiene `{ ciudad, temperatura, condicion }`.  
3. Si la ciudad **no existe**, la promesa **se rechaza** con un objeto de error `{ error: "Ciudad no encontrada", codigo: 404 }`.  

Código de la función:
```js
function consultarClima(ciudad) {
    return new Promise((resolve, reject) => {
        if (baseDeDatosClima[ciudad]) {
            resolve({ ciudad, ...baseDeDatosClima[ciudad] });
        } else {
            reject({ error: "Ciudad no encontrada", codigo: 404 });
        }
    });
}
```
Aquí usé `...baseDeDatosClima[ciudad]` para extraer directamente los valores de temperatura y condición sin tener que escribirlos manualmente.  

---

#### **Paso 3: Llamar la Función y Manejar la Promesa**  
Para probar la función, la llamé con `.then()` y `.catch()`:  

```js
consultarClima("Madrid")
    .then(datos => console.log("Clima en", datos.ciudad, ":", datos.temperatura, "°C y", datos.condicion))
    .catch(error => console.error("Error:", error.error, "(Código:", error.codigo, ")"));
```

---

#### **Resultado Final**  
Si consultamos `consultarClima("Madrid")`, la salida será:
```
Clima en Madrid : 22 °C y Soleado
```
Si intentamos `consultarClima("Londres")` (que no está en la base de datos), la salida será:
```
Error: Ciudad no encontrada (Código: 404)
```

Este ejercicio me ayudó a reforzar el uso de promesas para manejar **operaciones asíncronas**, como consultar una base de datos. También me permitió practicar cómo **estructurar objetos de respuesta y error** en un formato claro y manejable. 

