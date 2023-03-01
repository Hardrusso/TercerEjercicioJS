var n1 = parseFloat(prompt("Ingrese la nota 1"));
while (n1 < 0.0 || n1 > 5.0 || isNaN(n1)) {
    alert("La nota ingresada no es válida. Debe estar entre 0.0 y 5.0.");
    n1 = parseFloat(prompt("Ingrese la nota 1"));
} 

var n2 = parseInt(prompt("Ingrese la nota 2"));
while (n2 < 0.0 || n2 > 5.0 || isNaN(n2)) {
    alert("La nota ingresada no es válida. Debe estar entre 0.0 y 5.0.");
    n2 = parseFloat(prompt("Ingrese la nota 2"));
}

var n3 = parseInt(prompt("Ingrese la nota 3"));
while (n3 < 0.0 || n3 > 5.0 || isNaN(n3)) {
    alert("La nota ingresada no es válida. Debe estar entre 0.0 y 5.0.");
    n3 = parseFloat(prompt("Ingrese la nota 3"));
}

var n4 = parseInt(prompt("Ingrese la nota 4"));
while (n4 < 0.0 || n4 > 5.0 || isNaN(n4)) {
    alert("La nota ingresada no es válida. Debe estar entre 0.0 y 5.0.");
    n4 = parseFloat(prompt("Ingrese la nota 4"));
}

var n5 = parseInt(prompt("Ingrese la nota 5"));
while (n5 < 0.0 || n5 > 5.0 || isNaN(n5)) {
    alert("La nota ingresada no es válida. Debe estar entre 0.0 y 5.0.");
    n5 = parseFloat(prompt("Ingrese la nota 5"));
}

var promedio = (n1+n2+n3+n4+n5)/5;

if (promedio <= 2.9) {
    document.write("Su promedio fue: "+promedio);
    document.write("<br>");
    document.write("Su promedio es Demasiado Bajo");
}else {
    if (promedio >= 3.0 && promedio<=3.5) {
        document.write("Su promedio fue: "+promedio);
        document.write("<br>");
        document.write("Su promedio es Bajo");

    }else{
        if (promedio >= 3.6 && promedio<=4.4) {
            document.write("Su promedio fue: "+promedio);
            document.write("<br>");
            document.write("Su promedio es Alto");

        }else{
            if (promedio >= 4.5 && promedio<=5.0) {
                document.write("Su promedio fue: "+promedio);
                document.write("<br>");
                document.write("Su promedio es Superior");
            }     
    }
    
    }
}