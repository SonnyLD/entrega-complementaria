/*
Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado.
Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.
Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.*/

//SOLUCION
//Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado.
let ingresarNumero = parseInt(prompt("Ingresar Numero"))
for (let i = 1; i <= 10; i++) {
 let resultado = ingresarNumero + i 
 alert("El resultado es: "+ resultado)
}
//Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.
let num = 1									
let datos = prompt("Ingresar un dato")
while(datos != "ESC" ){
    alert("N° "+num++ +" "+ datos)
    datos = prompt("Ingresar otro dato")
}  
//Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada. 
let repeticion = parseInt(prompt("Numero de repeticiones"))
for (let i = 1; i <= repeticion; i++) {
alert("hola")
}