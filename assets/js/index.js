const botao = document.querySelector("#botao");
const campoTexto = document.querySelector("#campo-texto");
const resultado = document.querySelector("#resultado");

let numeroAleatorio = Math.round(Math.random()*10);

if(numeroAleatorio == 0) numeroAleatorio = 10;

console.log(`Numero aleatorio gerado: ${numeroAleatorio}`);

function comparaNumero(numeroDigitado, numeroAleatorio, tentativas){
    if(isNaN(numeroDigitado)){
        resultado.classList.remove("resultado-vazio");
        resultado.classList.add("resultados");
        resultado.innerHTML = `Você não digitou um número. Ainda resta ${tentativas} tentativas. Tente novamente e digite apenas números`;
    } else if(numeroDigitado < 1 || numeroDigitado > 10){
        resultado.classList.remove("resultado-vazio");
        resultado.classList.add("resultados");
        resultado.innerHTML = `Você não digitou um número válido. Ainda resta ${tentativas} tentativa(s). Tente novamente e digite apenas números entre 1 e 10`;
    }
    else if(numeroDigitado === numeroAleatorio){
        resultado.classList.remove("resultado-vazio");
        resultado.classList.add("resultados");
        resultado.innerHTML = `Você escolheu: ${numeroDigitado}. Parabéns você acertou!`;
        alert('Você acertou. Deseja jogar novamente?');
        window.location.reload();
    } else{
        resultado.classList.remove("resultado-vazio");
        resultado.classList.add("resultados");
        resultado.innerHTML = `Você escolheu: ${numeroDigitado}. Que pena você errou. Ainda resta ${tentativas} tentativa(s). Tente novamente`;
    }
}

let tentativas = 3;

botao.addEventListener("click", function(){
    const numeroDigitado = Number(campoTexto.value);
    
    if(tentativas > 0){
        comparaNumero(numeroDigitado, numeroAleatorio, tentativas);
        console.log(tentativas);
        campoTexto.value = ''; 
    }else{
        alert('Suas tentativas acabaram. Tentar novamente?');
        window.location.reload();
    }

    tentativas--;
});
 


