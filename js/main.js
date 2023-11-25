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



const calcularPromedio = document.getElementById("calcularPromedio").addEventListener("click", function () {
    let nombre = document.getElementById("nombre").value;
    let materia = document.getElementById("materia").value;
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);

    if (nombre === "" || materia === "" || isNaN(nota1) || isNaN(nota2)) {
        Swal.fire({
            title: "Complete todos los campos",
            text: "Los campos no pueden estar vacios",
            icon: "warning"
        });
        return false;
    }

    if (nota1 > 10 || nota2 > 10) {
        Swal.fire({
            title: "La nota no puede ser mayor a 10",
            //text: "Los campos no pueden estar vacios",
            icon: "warning"
        })
        return false
    }

    let promedio = (nota1 + nota2) / 2;
    let condicion;
    if (promedio >= 8 && promedio <= 10) {
        condicion = "Promocionó";
    } else if (promedio >= 4 && promedio < 8) {
        condicion = "Regular";
    } else {
        condicion = "Libre";
    }

    Swal.fire({
        position: "center",
        icon: "success",
        title: "Alumno cargado en memoria",
        showConfirmButton: false,
        timer: 1500
    });


    let parrafo = document.createElement("p");
    parrafo.classList.add("letraParrafo")
    parrafo.innerHTML = `Nombre y Apellido: ${nombre} - Materia: ${materia} - Nota 1: ${nota1} - Nota 2: ${nota2} - Promedio: ${promedio} - Condicion: ${condicion}`
    let resultado = document.getElementById("resultado")
    resultado.append(parrafo)

    document.getElementById("nombre").value = "";
    document.getElementById("materia").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    guardadoMemoria("arrayAlumno", JSON.stringify(parrafo.innerHTML));

});

function guardadoMemoria(nombre, stringArray) {
    const arrayMemoria = leerMemoria(nombre);
    if (arrayMemoria === null) {
        const array = []
        array.push(stringArray)
        localStorage.setItem(nombre, JSON.stringify(array))
    } else {
        arrayMemoria.push(stringArray)
        localStorage.setItem(nombre, JSON.stringify(arrayMemoria));
    }
}

function leerMemoria(nombre) {
    console.log("arrayMemoria");

    const arrayMemoria1 = localStorage.getItem(nombre);
    if (arrayMemoria1 !== null) {
        return JSON.parse(arrayMemoria1);
    }
    return null;
}

document.getElementById("traerMemoria").addEventListener("click", function () {
    const arrayMemoria = leerMemoria("arrayAlumno");
    if (arrayMemoria !== null) {
        let resultado = document.getElementById("resultado")
        arrayMemoria.forEach(alumno => {
            let parrafo = document.createElement("p");
            parrafo.classList.add("letraParrafoMemoria")
            parrafo.innerHTML = JSON.parse(alumno);
            resultado.append(parrafo)
        });
    }
})

const eliminarMemoria = document.getElementById("eliminarMemoria").addEventListener("click", function () {
    localStorage.removeItem("arrayAlumno")
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = ""
    Swal.fire({
        title: "Estas Seguro?",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Memoria Borrada!",
                text: "Se ha borrado la memoria",
                icon: "success"
            });
        }
    });
})