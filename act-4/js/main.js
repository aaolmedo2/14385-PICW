// Componente A
document
    .getElementById("interactiveButton")
    .addEventListener("click", function () {
        // Cambiar el color de fondo 
        document.body.style.backgroundColor = getRandomColor();

        // Crear un evento personalizado
        var customEvent = new CustomEvent("miEvento", {
            detail: { mensaje: "¡Se hizo clic en el botón!" },
        });

        // Despachar el evento personalizado
        document.dispatchEvent(customEvent);
    });

// Componente B
document.addEventListener("miEvento", function (event) {
    // Manejar el evento y actualizar la interfaz
    var infoElement = document.getElementById("eventInfo");
    infoElement.textContent =
        "Información del evento: " + event.detail.mensaje;
});
// Función para generar un color hexadecimal aleatorio
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}