
const asuntoInput = document.getElementById("asunto");
const ccInput = document.getElementById("cc");
const cuerpoInput = document.getElementById("cuerpo");

const errorAsunto = document.getElementById("errorAsunto");
const errorCC = document.getElementById("errorCC");
const errorCuerpo = document.getElementById("errorCuerpo");


asuntoInput.addEventListener("blur", () => {
    if (asuntoInput.value.trim() === "") {
        asuntoInput.classList.remove("input-correcto");
        asuntoInput.classList.add("input-incorrecto");
        errorAsunto.textContent = "El asunto no puede estar vacío.";
    } else {
        asuntoInput.classList.remove("input-incorrecto");
        asuntoInput.classList.add("input-correcto");
        errorAsunto.textContent = "";
    }
});

ccInput.addEventListener("blur", () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(ccInput.value)) {
        ccInput.classList.remove("input-correcto");
        ccInput.classList.add("input-incorrecto");
        errorCC.textContent = "Por favor, introduce un correo electrónico válido.";
    } else {
        ccInput.classList.remove("input-incorrecto");
        ccInput.classList.add("input-correcto");
        errorCC.textContent = ""; 
    }
});


cuerpoInput.addEventListener("blur", () => {
    if (cuerpoInput.value.trim() === "") {
        cuerpoInput.classList.remove("input-correcto");
        cuerpoInput.classList.add("input-incorrecto");
        errorCuerpo.textContent = "El cuerpo del mensaje no puede estar vacío.";
    } else {
        cuerpoInput.classList.remove("input-incorrecto");
        cuerpoInput.classList.add("input-correcto");
        errorCuerpo.textContent = ""; 
    }
});
