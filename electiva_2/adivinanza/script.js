let numeroSecreto = Math.floor(Math.random()*100)+1;
let intentos = 0;

const input = document.getElementById('guessInput');
const checkBtn = document.getElementById('checkBtn');
const message = document.getElementById('message');
const attemptsText = document.getElementById('attempts');
const resetBtn = document.getElementById('resetBtn');

checkBtn.addEventListener('click', () =>{
    const intento = Number(input.value);
    intentos++;
    attemptsText.textContent = `Intentos: ${intentos}`;

    if (intento=== numeroSecreto){
        message.textContent = `¡Correcto! El número era ${numeroSecreto}`;
        message.style.color = 'green';
        checkBtn.disabled = true;
        input.disabled = true;
        resetBtn.classList.remove('hidden');
    }else if (intento < numeroSecreto){
        message.textContent = 'Demasiado bajo... intenta con un número mayor.';
        message.style.color = 'blue';
    }else{
        message.textContent = 'Demasiado alto... intenta con un número menor.';
        message.style.color = 'orange';
    }

    input.value = '';
    input.focus();

});

resetBtn.addEventListener('click', () =>{
    numeroSecreto = Math.floor(Math.random()*100)+1;
    intentos = 0;
    attemptsText.textContent = `Intentos: 0`;
    message.textContent = '';
    input.value='';
    checkBtn.disabled = false;
    input.disabled = false;
    resetBtn.classList.add('hidden');


});