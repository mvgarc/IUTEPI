let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

const input = document.getElementById('guessInput');
const checkBtn = document.getElementById('checkBtn');
const message = document.getElementById('message');
const attemptsText = document.getElementById('attempts');
const resetBtn = document.getElementById('resetBtn');

checkBtn.addEventListener('click', () => {
    const intento = Number(input.value);

    // 💡 Validación de entrada para mejor UX
    if (input.value === '' || isNaN(intento) || intento < 1 || intento > 100) {
        message.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
        message.style.color = '#dc3545'; // Rojo para error
        input.value = '';
        input.focus();
        return;
    }

    intentos++;
    attemptsText.textContent = `Intentos: ${intentos}`;

    if (intento === numeroSecreto) {
        message.textContent = `🎉 ¡Correcto! El número era ${numeroSecreto}`;
        message.style.color = '#0984e3'; // Color principal para el éxito
        checkBtn.disabled = true;
        input.disabled = true;
        resetBtn.classList.remove('hidden');
    } else if (intento < numeroSecreto) {
        message.textContent = 'Demasiado bajo... intenta con un número mayor.';
        message.style.color = '#0984e3'; // Color principal para el feedback
    } else {
        message.textContent = 'Demasiado alto... intenta con un número menor.';
        message.style.color = '#0984e3'; // Color principal para el feedback
    }

    input.value = '';
    input.focus();
});

resetBtn.addEventListener('click', () => {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    intentos = 0;
    attemptsText.textContent = `Intentos: 0`;
    message.textContent = '';
    input.value = '';
    checkBtn.disabled = false;
    input.disabled = false;
    resetBtn.classList.add('hidden');

    // Restaurar color del mensaje por si acaso
    message.style.color = '#0984e3'; 
    input.focus();
});

document.getElementById('currentYear').textContent = new Date().getFullYear();