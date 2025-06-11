window.addEventListener('DOMContentLoaded', () => {
    const welcomeSpan = document.getElementById('username');

    let username = prompt("Olá! Qual é o seu nome?");
    
    if (!username) {
        username = "visitor"; // Valor padrão se usuário cancelar ou não digitar nada
    }

    welcomeSpan.textContent = username;
});
