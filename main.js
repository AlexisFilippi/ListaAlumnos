// function calcularPromedio(nota1, nota2) {
//     let promedio = (nota1 + nota2) / 2;
//     //alert(`Su promedio es ${promedio.toFixed(1)}`);

//     if (promedio >= 8 && promedio <= 10) {
//         //alert("Promocionó");
//     } else if (promedio >= 4 && promedio < 8) {
//         //alert("Regular");
//     } else {
//        // alert("Libre");
//     }


// }

// function agregarNotas(){
//     const alumno = Alumno()

// }

// function Alumno() {
//     const alumno = {}
//     alumno.nombre = document.getElementById("nombre").value;
//     alumno.nota1 = document.getElementById("nota1").value;
//     alumno.nota2 = document.getElementById("nota2").value;
//     alumno.promocion = calcularPromedio(alumno.nota1, alumno.nota2);
//     return alumno
// }

// const alumnos = [];


// for (let i = 0; i < 2; i++) {
//     alumnos.push(new Alumno());
// }

// // function buscarAlumno (nombre){
// //     const alumnoEncontrado = alumnos.find((alumno) => alumno.nombre === nombre);

// //     if (alumnoEncontrado){
// //        // alert(`Nombre: ${alumnoEncontrado.nombre}`)
// //         calcularPromedio(alumnoEncontrado.nota1 , alumnoEncontrado.nota2)
// //     } else {
// //         //alert("Alumno no encontrado")
// //     }
// // }

// // const buscarNombre = //prompt("Ingrese el nombre del alumno que desea buscar");
// // buscarAlumno(buscarNombre);

// // //console.log(alumnos);

/***********************************************************************************************************************************************/
document.getElementById("calcularPromedio").addEventListener("click", function () {
    let nombre = document.getElementById("nombre").value;
    let materia = document.getElementById("materia").value;
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);

    let promedio = (nota1 + nota2) / 2;
    let condicion;
    if (promedio >= 8 && promedio <= 10) {
        condicion = "Promocionó";
    } else if (promedio >= 4 && promedio < 8) {
       condicion =  "Regular";
    } else {
        condicion = "Libre";
    }

      
  });