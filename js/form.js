document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const button = document.querySelector(".form__button");
    
    button.addEventListener("click", function(event) {
        event.preventDefault(); // Evita el envío real del formulario
        
        // Crear la ventana emergente
        const popup = document.createElement("div");
        popup.style.position = "fixed";
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        popup.style.background = "white";
        popup.style.padding = "20px";
        popup.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
        popup.style.borderRadius = "5px";
        popup.style.textAlign = "center";
        
        const message = document.createElement("p");
        message.textContent = "¡Formulario enviado con éxito!";
        message.style.color = "green";
        message.style.fontSize = "18px";
        
        const closeButton = document.createElement("button");
        closeButton.textContent = "Cerrar";
        closeButton.style.marginTop = "10px";
        closeButton.style.padding = "5px 10px";
        closeButton.style.cursor = "pointer";
        
        closeButton.addEventListener("click", function() {
            document.body.removeChild(popup);
        });
        
        popup.appendChild(message);
        popup.appendChild(closeButton);
        document.body.appendChild(popup);
    });
});