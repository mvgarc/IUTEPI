document.getElementById('user-input-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();

    if (message) {
        // Mostrar el mensaje del usuario en el chat
        appendMessage(message, 'user-message');

        // Enviar el mensaje al servidor Flask
        fetch('/get_response', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: message })
        })
        .then(response => response.json())
        .then(data => {
            // Mostrar la respuesta del bot en el chat
            appendMessage(data.response, 'bot-message');
        });

        // Limpiar el campo de entrada
        userInput.value = '';
    }
});

function appendMessage(message, className) {
    const chatLog = document.getElementById('chat-log');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', className);
    messageDiv.textContent = message;
    chatLog.appendChild(messageDiv);
    chatLog.scrollTop = chatLog.scrollHeight; // Auto-scroll
}