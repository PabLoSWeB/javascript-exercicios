function contar() {
    let contagem
    let caixaInicio = document.querySelector ('input#caixa1').value.trim()
    let caixaFim = document.querySelector ('input#caixa2').value.trim()
    let caixaPasso = document.querySelector ('input#caixa3').value.trim()

    let valorInicio = Number(caixaInicio)
    let valorFim = Number(caixaFim)
    let valorPasso = Number(caixaPasso)
    let resultado = document.querySelector ('div#res')

    
    //Validação de caixa em branco, valores iguais e passagem maior que o valor final/inicial
    if (caixaInicio.length == 0 || caixaFim.length == 0 || caixaPasso.length == 0) {
        resultado.innerHTML = '<p>Todos os campos <strong>precisam ser preechidos!</strong></p>'
    } 
    else if (valorInicio == valorFim) {
        resultado.innerHTML = 'Os valores informados de <strong>Início e Fim não podem ser iguais!</strong></p>'
    }
    else if (valorPasso == 0) {
        resultado.innerHTML = '<p> O valor da caixa <strong>Passo</strong> não pode ser zero(0)!</p>'
    } 
    else if (valorPasso <= 0) {
        resultado.innerHTML = '<p> O valor do caixa <strong>Passo</strong> não pode ser menor que zero(0)!</p>'
    }

    // Contagem Progressiva
    else if (valorInicio < valorFim) {
        if (valorPasso > valorFim) {
            resultado.innerHTML = '<p>O valor de <strong>Passagem</strong> não pode ser maior que o valor <strong>Final!</strong></p>'
        } else {
            resultado.innerHTML = ('<p>Contando...</p>')
            resultado.innerHTML += (` ${valorInicio} \u{1F449}`)
            while (valorFim > valorInicio) {
            contagem = valorInicio + valorPasso
            valorInicio += valorPasso
            resultado.innerHTML += (` ${contagem} \u{1F449}`)
            }
        }
        
    }

    //Contagem Regressiva
    else if (valorInicio > valorFim) {
        if (valorPasso > valorInicio) {
            resultado.innerHTML = '<p>O valor de <strong>Passagem</strong> não pode ser maior que o valor <strong>Inicial!</strong></p>'
        } else {
            resultado.innerHTML = ('<p>Contando...</p>')
            resultado.innerHTML += (` ${valorInicio} \u{1F449}`)
            while (valorInicio > valorFim) {
            contagem = valorInicio - valorPasso
            valorInicio -= valorPasso
            resultado.innerHTML += (` ${contagem} \u{1F449}`)
            }
        }
    
    }
    resultado.innerHTML += ` \u{1F3C1}`
      
}