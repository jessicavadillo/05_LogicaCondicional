var a= prompt("Dame un primer numero");
var a= parseInt(a);
var b= prompt("Dame un segundo numero");
var b= parseInt(b);
var c= prompt("Dame un tercer numero");
var c= parseInt(c);

    if (a>b && a>c){
        console.log("El primer numero es el mayor")
    }
    else if (b>a && b>c){
        console.log("El segundo numero es el mayor")
    }
    else if (c>a && c>b){
        console.log("El tercer numero es el mayor")
    }
    else{
        console.log("Error, ingresaste algo mal")
    }