const url = "https://jsonplaceholder.typicode.com/users";
const listaProfesores = document.getElementById("profesores");

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        setTimeout(() => {
            data.forEach(profesor => {
                const li = document.createElement("li");
                li.classList.add("letraLista");
                li.innerHTML = profesor.name + " - <tr>Telefono: " + profesor.phone + " - <tr>Email: " + profesor.email;
                listaProfesores.append(li);
            });
        }, 2000);
    });
