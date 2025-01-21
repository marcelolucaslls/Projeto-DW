export function setupLoginForm() {
    const form = document.querySelector('form');
    const usernameInput = document.querySelector('#username');
    const passwordInput = document.querySelector('#password');
    const successModal = document.querySelector('#success-modal');
    const closeModalButton = document.querySelector('#close-modal');
    const modalMessage = document.querySelector('#modal-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!username || !password) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        fetch(`http://localhost:5000/users?username=${username}&password=${password}`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    modalMessage.textContent = 'Login realizado com sucesso!';
                    modalMessage.classList.remove('error-message');
                    modalMessage.classList.add('success-message');
                    successModal.style.display = 'flex';
                } else {
                    modalMessage.textContent = 'Você errou, login não realizado!';
                    modalMessage.classList.remove('success-message');
                    modalMessage.classList.add('error-message');
                    successModal.style.display = 'flex';
                }
            })
            .catch(error => {
                console.error('Erro ao fazer login:', error);
                alert('Ocorreu um erro ao se conectar ao servidor.');
            });
    });

    closeModalButton.addEventListener('click', () => {
        successModal.style.display = 'none';
    });
}
