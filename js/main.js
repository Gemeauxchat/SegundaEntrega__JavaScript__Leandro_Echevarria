//Utilice el constructor Invitado si quiere agregar invitados.
class Invitado {
    constructor(nombre, apellido, edad, sexo, email,acompañantes){
        this.nombre = nombre.toUpperCase();
        this.apellido = apellido.toUpperCase();
        this.edad = edad;
        this.sexo = sexo;
        this.email = email;
        this.acompañantes = parseInt(acompañantes);
    }
}


const invitados = [];
invitados.push(new Invitado("Juan", "Ordoñez",28,"m","juan.ordoñez@gmail.com",2)) 
invitados.push(new Invitado("Pablo", "Pedro",28,"m","pablo.pedro@gmail.com",1)) 
invitados.push(new Invitado("Manuel", "Ramos",28,"m","manuel.ramos@gmail.com",0)) 
invitados.push(new Invitado("Javier", "di Marco",28,"m","javier.dimarco@gmail.com",5)) 
invitados.push(new Invitado("Matías", "Agüero",28,"m","matias.aguero@gmail.com",4)) 
invitados.push(new Invitado("Franco", "Parmensano",28,"m","franco.parmesano@gmail.com",2)) 
invitados.push(new Invitado("Fiorella", "Guidi",28,"f","fiorella.guidi@gmail.com",0)) 
invitados.push(new Invitado("Maria", "Gaona",28,"f","maria.gaona@gmail.com",2)) 
invitados.push(new Invitado("Paula", "Perez",28,"f","paula.perez@gmail.com",2))
invitados.push(new Invitado("Tamara", "Franco",28,"f","tamara.franco@gmail.com",1)) 
invitados.push(new Invitado("Fabiana", "Rosso",28,"f","fabiana.rosso@gmail.com",0)) 
invitados.push(new Invitado("Guillermina", "Zigman",28,"f","guillermina.zigman@gmail.com",0)) 
invitados.push(new Invitado("Maria", "Guidi",28,"f","maria.guidi@gmail.com",1))


//Función borrar
function borrar(){
invitados.pop();
}


//borrar();

//Agragamos un invitado para testear la alerta.

//invitados.push(new Invitado("Romina", "Jacobs", 45,"f", "romina.jacobs@gmail.com",34))

//Función agregar invitados

function invitar(){
let name= prompt("Nombre del invitado")
let name1= name.toUpperCase()
let last= prompt("Apellido del invitado")
let last1=last.toUpperCase()
let age = prompt("Edad del invitado")
let sex= prompt("Sexo del invitado")
let sex1 =sex.toUpperCase()
let mail=prompt("Email del invitado")
let inv=prompt("Número de acompañantes")
invitados.push(new Invitado(name1,last1,age,sex1,mail,inv))
}

//Utilice la función diplayInvitados para ver la lista de invitados

function displayInvitados(){
    for(let i=0; i < invitados.length; i++){
console.log(invitados[i].nombre + " " + invitados[i].apellido + " asiste con " +invitados[i].acompañantes + " acompañantes.")

    }
}


//Capacidad Máxima del salón
const acompañantesTotal = invitados.reduce((previous, current) => {
    return previous + current.acompañantes;
  }, 0);

let invitadosTotales;
    for(let i=0;i<=invitados.length;i++){
    invitadosTotales = i;
    }

let total = acompañantesTotal + invitadosTotales

function maxCap(){
const capacidadMaxima = prompt("Capacidad máxima del salón en número de personas")


  console.log("Hay " + total + " Invitados más acompañantes.")


if(total > capacidadMaxima){
    alert("La capacidad máxima es de " + capacidadMaxima + " personas. Reduzca el número de invitados y/o de acompañantes.")
}
}

//Solucionar el tema de la alerta que no funciona.

//function consulta() cuántas mujeres hay en la lista de invitados?
function consulta(){
    let filtro = prompt("Filtrar por nombre")
    let f2 = filtro.toUpperCase()
    const resultado = invitados.filter((e1) => e1.nombre.includes(f2))
   {
    console.log(resultado)}
    
   }
  