function calcular (operador){
    const inputNum1 = document.getElementById('num1');
    const inputNum2 = document.getElementById('num2');
    const h2Resultado = document.getElementById('resultado');

    //Ler os valores e converter para numeros
    const num1 = parseFloat(inputNum1.value);
    const num2 = Number(inputNum2.value);

    //validar para evitar erros
    if(isNaN(num1) || isNaN(num2)) {
        h2Resultado.textContent = "Insira Numeros validos"
        return;
    }
    let resultadoFinal;
    
    if(operador === '+'){
        resultadoFinal = num1 + num2;
    }

    else if (operador === '-'){
        resultadoFinal = num1 - num2;}
    
    else if (operador === '*'){
        resultadoFinal = num1 * num2;}

    else if (operador === '/'){
        resultadoFinal = num1 / num2;
        if(num2 === 0){
        h2Resultado.textContent = 'Divisão por zero não é permitida';
        return}
    
     }
        
        
   //exibir o resultado
   h2Resultado.textContent = `Resultado: ${resultadoFinal}`;
}