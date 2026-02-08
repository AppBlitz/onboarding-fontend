document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("registroForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // evita recargar la página

        const formData = new FormData(form);

        fetch("http://localhost:8000/api/empleados/", {
            method: "POST",
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error en la respuesta del servidor");
            }
            return response.json();
        })
        .then(data => {
            alert("Empleado registrado correctamente");
            console.log("Respuesta Django:", data);
            form.reset(); // limpia el formulario
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Error al registrar el empleado");
        });
    });

});
