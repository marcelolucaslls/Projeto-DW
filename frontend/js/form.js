// Função principal para configurar o formulário de login
export function setupLoginForm() { 
    // Seleciona o formulário de login
    const form = document.querySelector('form');
    
    // Seleciona os campos de input para o nome de usuário e senha
    const usernameInput = document.querySelector('#username');
    const passwordInput = document.querySelector('#password');
    
    // Seleciona o modal de sucesso e os elementos do modal
    const successModal = document.querySelector('#success-modal');
    const closeModalButton = document.querySelector('#close-modal');
    const modalMessage = document.querySelector('#modal-message');

    // Adiciona o ouvinte de evento para o envio do formulário
    form.addEventListener('submit', (event) => {
        // Impede o comportamento padrão do formulário (recarregar a página)
        event.preventDefault();
        
        // Obtém os valores dos inputs, removendo espaços extras
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Verifica se ambos os campos foram preenchidos
        if (!username || !password) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        // Envia uma requisição fetch para verificar as credenciais
        fetch(`http://localhost:5000/users?username=${username}&password=${password}`)
            .then(response => response.json()) // Converte a resposta para JSON
            .then(data => {
                // Se a resposta retornar dados (usuário encontrado)
                if (data.length > 0) {
                    // Mensagem de sucesso no modal
                    modalMessage.textContent = 'Login realizado com sucesso!';
                    modalMessage.classList.remove('error-message'); // Remove estilo de erro
                    modalMessage.classList.add('success-message'); // Adiciona estilo de sucesso
                    successModal.style.display = 'flex'; // Exibe o modal

                    // Após 4 segundos, redireciona para a segunda página
                    setTimeout(() => {
                        window.location.href = "2pagina.html"; 
                    }, 4000);
                } else {
                    // Mensagem de erro no modal
                    modalMessage.textContent = 'Você errou, login não realizado!';
                    modalMessage.classList.remove('success-message'); // Remove estilo de sucesso
                    modalMessage.classList.add('error-message'); // Adiciona estilo de erro
                    successModal.style.display = 'flex'; // Exibe o modal
                }
            })
            .catch(error => {
                // Exibe um erro caso haja problema na requisição
                console.error('Erro ao fazer login:', error);
                alert('Ocorreu um erro ao se conectar ao servidor.');
            });
    });

    // Adiciona evento para fechar o modal ao clicar no botão de fechar
    closeModalButton.addEventListener('click', () => {
        successModal.style.display = 'none'; // Esconde o modal
    });
}
