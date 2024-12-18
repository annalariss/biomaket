// Exemplo de script para interatividade no futuro
document.addEventListener('DOMContentLoaded', function () {
    console.log('Página carregada com sucesso!');
    // Aqui você pode adicionar interatividade, como animações ou efeitos
});

// Função para exibir a mensagem de sucesso após o envio do formulário
function showSuccessMessage(event) {
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário
    document.getElementById('quiz-form').classList.add('d-none'); // Oculta o formulário
    document.getElementById('success-message').classList.remove('d-none'); // Exibe a mensagem de sucesso
}

// Adiciona o ouvinte de evento no formulário para quando ele for enviado
document.getElementById('quiz-form').addEventListener('submit', showSuccessMessage);

