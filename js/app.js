function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector(".dashboard__item__img");
    let botao = gameClicado.querySelector(".dashboard__item__button");
    if(imagem.classList.contains(`dashboard__item__img--rented`)){
        if(confirm(`Tem certeza que deseja devolver este item?`)){
            imagem.classList.remove(`dashboard__item__img--rented`);
            botao.classList.remove(`dashboard__item__button--return`);
            botao.textContent = `Alugar`;
        }
    } else {
        imagem.classList.add(`dashboard__item__img--rented`);
        botao.classList.add(`dashboard__item__button--return`);
        botao.textContent = `Devolver`;
    }
    imprimirConsole();
}

function imprimirConsole(){
    let soma = document.getElementsByClassName(`dashboard__item__img--rented`).length;
    console.log(`${soma} jogo(s) alugado(s).`)
}


/*===============================================CODIGO PARA ESTUDO===================================================================*/
/*let palavraParaVerificacaoPalindromo = prompt(`Insira uma palavra para saber se ela é um palíndromo.`)
function verificacaoPalindromo(palavra) {
    if(palavra == palavra.split("").reverse().join("")){
        alert(`A palavra ${palavra} é um palíndromo.`)
    }else{
        alert(`A palavra ${palavra} não é um palíndromo.`)
    }
}

verificacaoPalindromo(palavraParaVerificacaoPalindromo);*/

/*
let num1 = prompt(`Insira um numero`);
let num2 = prompt(`Insira um numero`);
let num3 = prompt(`Insira um numero`);


function ordemCrescente(a, b, c) {
    let arrayNumeros = [];
    if(Number(a)<Number(b) && Number(a)<Number(c)){ 
        arrayNumeros.push(a);
    }else if(Number(b)<Number(a) && Number(b)<Number(c)){  
        arrayNumeros.push(b);
    }else{
        arrayNumeros.push(c)
    }

    if((Number(a)<Number(b) || arrayNumeros.includes(b)) && (Number(a)<Number(c) || arrayNumeros.includes(c)) && !(arrayNumeros.includes(a))){ //
        arrayNumeros.push(a);
    }else if((Number(b)<Number(a) || arrayNumeros.includes(a)) && (Number(b)<Number(c) || arrayNumeros.includes(c)) && !(arrayNumeros.includes(b))){
        arrayNumeros.push(b);
    }else{
        arrayNumeros.push(c)
    }

    if(!(arrayNumeros.includes(a))){
        arrayNumeros.push(a);
    }else if(!(arrayNumeros.includes(b))){
        arrayNumeros.push(b);
    }else{
        arrayNumeros.push(c);
    }
    alert(`A lista e: ${arrayNumeros}`);
}

ordemCrescente(num1, num2, num3);
*/

/* ===================== CODIGO FORNECIDO PELO PROFESSOR =======================================
function ordenarNumeros(a, b, c) {
    const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}

// Exemplo de uso:
ordenarNumeros(3, 1, 5); // Deve exibir "Números ordenados: 1, 3, 5" */
