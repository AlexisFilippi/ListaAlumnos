function calcularPromedio(nota1, nota2) {
    // let alumno = prompt("Ingrese su nombre");
    // let nota1 = Number(prompt("Ingrese su nota 1:"));
    // let nota2 = Number(prompt("Ingrese su nota 2:"));
    let promedio = (nota1 + nota2) / 2;
    alert(`Su promedio es ${promedio.toFixed(1)}`);

    if (promedio >= 8 && promedio <= 10) {
        alert("Promocionó");
    } else if (promedio >= 4 && promedio < 8) {
        alert("Regular");
    } else {
        alert("Libre");
    }
}

// for (let i = 0; i < 5; i++ ){
//     calcularPromedio();
// } 

function Alumno() {
    this.nombre = prompt("Ingrese su nombre");
    this.nota1 = Number(prompt("Ingrese su nota 1"));
    this.nota2 = Number(prompt("Ingrese su nota 2"));
    this.promocion = calcularPromedio(this.nota1, this.nota2);
}

const alumnos = [];

for (let i = 0; i < 5; i++) {
    alumnos.push(new Alumno());
}

