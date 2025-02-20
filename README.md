# Ejercicios-promesas-equipo-js
repositorio de ejercicios de promesas de JavaScript


## **ejercico 1.-**
Para resolver este ejercicio, pensé en cómo funcionan las promesas en JavaScript y cómo se pueden utilizar para simular una operación asíncrona, como la descarga de un archivo.  

### **Paso 1: Creación de la Promesa**
La función `descargarArchivo(tamaño)` devuelve una **nueva promesa**. Dentro de esta promesa, utilicé `setTimeout` para simular un **proceso asíncrono** que tarda 3 segundos en completarse (`3000ms`). Esto representa el tiempo que tomaría la descarga de un archivo en la vida real.  

### **Paso 2: Evaluación de la Condición**
Dentro de `setTimeout`, agregué un `if` para verificar si el tamaño del archivo es menor o igual a 50MB:  
- Si el tamaño es **50MB o menos**, la promesa se **resuelve** con el mensaje `"Descarga Completada"`.  
- Si el tamaño es **mayor a 50MB**, la promesa se **rechaza** con el mensaje `"El archivo es demasiado grande"`.  

También agregué un `console.log("entro")` para confirmar que la función estaba siendo ejecutada correctamente.  

### **Paso 3: Manejo de la Promesa**
Al llamar `descargarArchivo(50)`, usé `.then()` y `.catch()` para manejar el resultado:  
- `.then(mensaje => console.log(mensaje))` imprime `"Descarga Completada"` si la promesa se resuelve correctamente.  
- `.catch(error => console.log(error))` imprime `"El archivo es demasiado grande"` si la promesa es rechazada.  

### **Resultado Final**
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







## **ejercicio 4**

Para resolver este ejercicio, pensé en cómo funcionan las promesas y en cómo simular un proceso de pago en línea, que normalmente toma unos segundos en completarse.  

### **Paso 1: Creación de la Promesa**  
La función `ProcesarPago(monto)` devuelve una **nueva promesa**. Dentro de esta promesa, incluí un `setTimeout` para simular el tiempo de procesamiento del pago (3 segundos). Esto imita el tiempo real que un sistema de pago podría tardar en validar una transacción.  

También agregué un `console.log("entro")` al inicio de la función para verificar que la función se ejecuta correctamente.  

### **Paso 2: Evaluación de la Condición**  
Dentro del `setTimeout`, agregué una condición `if` para verificar el monto del pago:  
- Si el **monto es mayor a 0**, la promesa se **resuelve** con el mensaje `"Pago exitoso de $monto"`.  
- Si el **monto es 0 o menor**, la promesa se **rechaza** con el mensaje `"Error: Monto inválido"`.  

### **Paso 3: Manejo de la Promesa**  
Al llamar `ProcesarPago(4)`, usé `.then()` y `.catch()` para manejar la respuesta:  
- `.then(mensaje => console.log(mensaje))` imprime `"Pago exitoso de $monto"` si el pago es válido.  
- `.catch(error => console.log(error))` imprime `"Error: Monto inválido"` si el monto es 0 o menor.  

### **Error en el Código Original**
Me di cuenta de que en `resolve("Pago exitoso de $monto")` el valor de `monto` no se estaba interpolando correctamente en la cadena de texto. Para solucionarlo, lo corregí con **template literals**:
```js
resolve(`Pago exitoso de $${monto}`);
```

### **Resultado Final**
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

