document.addEventListener("DOMContentLoaded", () => {
    // URL de la API
    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    // Elemento donde se mostrarán los datos
    const userDataElement = document.getElementById("userData");

    // Fetch API para obtener datos
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("La solicitud no fue exitosa");
            }
            return response.json();
        })
        .then((data) => {
            // Manipulación de datos y presentación en el componente
            const users = data.slice(0, 9); // Tomar solo los primeros 5 usuarios para este ejemplo
            users.forEach((user) => {
                const userDiv = document.createElement("div");
                userDiv.classList.add("card"); // Agregar la clase 'card' a la tarjeta
                userDiv.innerHTML = `<strong>${user.name}</strong><br>Email: ${user.email}<br>Username: ${user.username}<br><br>`;
                userDataElement.appendChild(userDiv);
            });
        })
        .catch((error) => {
            // Manejo de errores
            console.error("Error en la solicitud:", error.message);
            userDataElement.innerHTML =
                "Ocurrió un error al obtener los datos.";
        });
});