function calcularImc() {
    // Capturar os elementos HTML
    let alturaCapturada = document.getElementById('heightOne'); // Altura em centímetros
    let pesoCapturado = document.getElementById('weightOne'); // Peso em quilos

    // Capturar os valores dos inputs
    let valorAltura = parseFloat(alturaCapturada.value); 
    let valorPeso = parseFloat(pesoCapturado.value);

    // Verificar se os valores são válidos
    if (isNaN(valorAltura) || isNaN(valorPeso) || valorAltura <= 0 || valorPeso <= 0) {
         alert('Por favor, insira valores válidos para altura e peso.');
    return; // Interrompe a execução da função se os valores são inválidos
    }

    // Converter altura para metros
    valorAltura = valorAltura / 100;

    // Calcular o IMC
    const imc = valorPeso / (valorAltura * valorAltura);

    // Determinar a classificação do IMC
    const abaixoDoPeso = imc < 18.5;
    const pesoNormal = imc >= 18.5 && imc < 24.9;
    const sobrepeso = imc >= 25 && imc < 29.9;
    const obesidadeClassUm = imc >= 30 && imc < 34.9;
    const obesidadeClassDois = imc >= 35 && imc < 39.9;
    const obesidadeClassTres = imc >= 40;

    // Mensagem para exibir
    let mensagemParaResultado;
    if (abaixoDoPeso) {
        mensagemParaResultado = `Seu IMC é ${imc.toFixed(1)}, ou seja, você está abaixo do peso.`;
    } else if (pesoNormal) {
        mensagemParaResultado = `Seu IMC é ${imc.toFixed(1)}, ou seja, você está com peso normal.`;
    } else if (sobrepeso) {
        mensagemParaResultado = `Seu IMC é ${imc.toFixed(1)}, ou seja, você está com sobrepeso.`;
    } else if (obesidadeClassUm) {
        mensagemParaResultado = `Seu IMC é ${imc.toFixed(1)}, ou seja, você está com obesidade classe I.`;
    } else if (obesidadeClassDois) {
        mensagemParaResultado = `Seu IMC é ${imc.toFixed(1)}, ou seja, você está com obesidade classe II.`;
    } else if (obesidadeClassTres) {
        mensagemParaResultado = `Seu IMC é ${imc.toFixed(1)}, ou seja, você está com obesidade classe III.`;
    }

    // Atualizar a área de resposta
    document.getElementById('responseArea').textContent = mensagemParaResultado;
}