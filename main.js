const form = document.querySelector("form");
const campoA = document.querySelector("#campoA");
const campoB = document.querySelector("#campoB");
let msg = ""; //mensagem que vai aparecer depois que o usuario clicar no botao enviar


form.addEventListener("submit", function(e){
    e.preventDefault();
    const textMessage = document.querySelector("#text-message");

    if(campoB.value > campoA.value) {
        textMessage.classList.remove("error");
        textMessage.classList.add("success");
        msg = `Formulário válido !!`;
        textMessage.innerHTML = msg;
    } else {
        textMessage.classList.remove("success");
        textMessage.classList.add("error");
        msg =  `Formulário inválido !!`;
        textMessage.innerHTML = msg;
    }
});

