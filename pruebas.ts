function holaMundo(nombre) {
    return "Hola Mundo!! Soy "+nombre;
}

var nombre = "Diana Moncada";
var resultado = holaMundo(nombre);


var etiqueta = <HTMLElement>document.getElementById("container");
etiqueta.innerHTML = resultado;


//Variables y tipos
var nombre:string = "Dianita Moncada";
var edad:number = 28;
var programador:boolean = true;
var langs:Array<string> = ["PHP", "JavaScript", "CSS"];

nombre = "Gordito";
edad = 43;

etiqueta.innerHTML = nombre+" - tiene "+edad+" años de edad";

var a = 7;
var b = 12;

if (a === 7){
    let a = 4;
    var b = 1;

    console.log("Dentro del If: "+a+" - "+b);
}
    
console.log("Fuera del IF: "+a+" - "+b);

//Funciones y tipado

function devuelveNumero(num:number):string{
    return "Número devuelto: "+num;
}

function devuelveString(texto:string):boolean{
    var num = false;
    if(texto == "hola"){
        num = true;
    }
    return num;
}

alert(devuelveNumero(34));
alert(devuelveString("hola"));