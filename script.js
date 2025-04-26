// Seleciona os elementos
let formulario = document.querySelector(".fale-conosco");
let mascara = document.querySelector(".mascara-form");

// Função para exibir o formulário
function cliqueiNoBotao() {
    formulario.style.left = "700px"; // Move o formulário para a direita
    mascara.style.visibility = "visible"; // Torna a máscara visível
}

// Função para esconder o formulário
function sumirFormulario() {
    formulario.style.left = "-320px"; // Move o formulário para fora da tela
    mascara.style.visibility = "hidden"; // Esconde a máscara
}

// Função para tratar o envio do formulário
function enviarFormulario(event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

    // Esconde o formulário antes de enviar
    formulario.style.left = "-320px"; // Move o formulário para fora da tela
    mascara.style.visibility = "hidden"; // Esconde a máscara

    // Dá um pequeno atraso (500ms) para garantir que o formulário desapareça antes de ser enviado
    setTimeout(() => {
        formulario.submit(); // Submete o formulário manualmente após o tempo
    }, 500);

    // Abre a nova página após o envio do formulário
    window.open("https://pattymarwebdev.github.io/sitebemfeitomultiservicos/", "_blank"); 
}
