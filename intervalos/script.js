let botaoNumero = document.querySelector ('input#caixa1')
let listaSelect = document.querySelector ('select#tabselect')
let resultado = document.querySelector ('p#res')
let valores = []

function validacaoGeral (botaoNumero) {

    if ((botaoNumero.value.length) == 0) {
        resultado.innerHTML = 'Você precisa <strong>informar um número!</strong>'
        return false
    } else if (Number(botaoNumero.value) < 1 || Number(botaoNumero.value) > 100) {
        resultado.innerHTML = 'informe um número <strong>dentro do intervalo!</strong>'
        return false
    } else {
        return true
    }
}

function naLista (botaoNumero, valores) {
    if (valores.indexOf(Number(botaoNumero.value)) != -1) {
        resultado.innerHTML = 'Este número <strong>já existe</strong> na tabela!' 
        return false
    } else {
        return true
    }
}
function adicionar() {

    resultado.innerHTML = ''
    if (validacaoGeral(botaoNumero) && naLista(botaoNumero, valores)) {
        valores.push(Number(botaoNumero.value))
        let item = document.createElement('option')
        item.text = `Valor ${Number(botaoNumero.value)} adicionado!`
        listaSelect.appendChild(item)
        botaoNumero.value = ''
        botaoNumero.focus()

    } 
}

function finalizar() {
    if (valores.length != 0) {
        numerosCadastrados()
        maiorValorMenorValor(valores)
        somarValores (valores)
        mediaValores (valores)
    } else {
        resultado.innerHTML = '<p> <strong>Adicione valores</strong> antes de finalizar. </p>'
    }
 
}

function numerosCadastrados () {
    let numeroTotal = valores.length
    resultado.innerHTML = `<p> Ao todo, temos ${numeroTotal} números <strong>cadastrados.</strong><br></p>`
}

function maiorValorMenorValor (valores) {
    let maior = valores[0]
    let menor = valores[0]
    for (let i in valores) {
        if (maior < valores[i]){
            maior = valores[i]
        }
        
        if (menor > valores[i]) {
            menor = valores[i]
        }
        
    }
    resultado.innerHTML += `<p> O <strong>maior valor</strong> informado foi ${maior}. <br></p>`
    resultado.innerHTML += `<p> O <strong>menor valor</strong> informado foi ${menor}. <br></p>`
}

function somarValores (valores) {
    let soma = 0
    for (let i in valores) {
        soma += valores[i]
    }

    resultado.innerHTML += `<p> <strong>Somando</strong> todos os valores temos, ${soma}. <br></p>`
}

function mediaValores (valores) {
        let media = 0
        let soma = 0
        let numeroTotal
        for (let i in valores) {
            soma += valores[i]
        }
        numeroTotal = valores.length
        media = soma / numeroTotal
        resultado.innerHTML += `<p> A <strong>media dos valores</strong> digitados é ${media.toFixed(2).replace('.' , ',')}. <br></p>`  
}
    
