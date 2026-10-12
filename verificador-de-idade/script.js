
function verificar(){
    let date = new Date()
    let ano = date.getFullYear()
    let tn1 = document.querySelector ('input#txtn1').value.trim()
    let anoInserido = Number(tn1)
    let masculino = document.querySelector('input#masc').checked
    let feminino = document.querySelector('input#fem').checked
    let idade = Number(ano - anoInserido)
    let res = document.querySelector('div#resultado')
    let img = document.getElementById('imagem')

    if (/\D/.test(tn1)) {
        res.innerHTML = 'Digite apenas <strong>números</strong>'
    }
    else if (tn1.length == 0){
        res.innerHTML = '<strong>informe</strong> uma data.'
    }
    else if (anoInserido > ano) {
        res.innerHTML = '<p>O ano inserido é <strong>MAIOR</strong> do que o ano atual.</p>'
        res.innerHTML += '<p>Informe uma data <strong>válida!</strong></p>'
    }
    else if (anoInserido < 1920) {
        res.innerHTML = `<p><strong>${anoInserido}</strong> é uma data muito antiga!</p>`
        res.innerHTML += 'Informe uma data mais recente.'
    }
    else if (!masculino && !feminino){
        res.innerHTML = 'Marque uma das <strong>opções</strong> acima!'

    } 
    
    else {
        img.style.width = '220px'
        img.style.height = '220px'
        img.style.borderRadius = '127px'
        img.style.boxShadow = '5px 10px 5px rgba(0, 0, 0, 0.63)'
        img.style.paddingTop = '10px'
        if (!feminino){
        if (idade == 1 ){
            res.innerHTML = `Você é um <strong>bebê</strong> de ${idade} ano!`
            img.src = 'baby-homem.jpg'
        } else if ( idade >= 0 && idade <= 2 ) {
            res.innerHTML = `Você é um <strong>bebê</strong> de ${idade} anos!`
            img.src = 'baby-homem.jpg'
        } else if (idade <= 18) {
            res.innerHTML = `Você é um <strong>homem jovem</strong> de ${idade} anos!`
            img.src = 'jovem-homem.jpg'
        } else if (idade > 18 && idade <= 60) {
            res.innerHTML = `Você é um <strong>homem adulto</strong> de ${idade} anos!`
            img.src = 'adulto-homem.jpg'
        } else {
            res.innerHTML = `Você é um <strong>homem idoso</strong> de ${idade} anos!`
            img.src = 'homem-idoso.jpg'
        } 

    } else if (idade == 1 ){
            res.innerHTML = `Você é uma <strong>bebê</strong> de ${idade} ano!`
            img.src = 'baby-mulher.jpg'
        } else if ( idade >= 0 && idade <= 2 ) {
            res.innerHTML = `Você é uma <strong>bebê</strong> de ${idade} anos!`
            img.src = 'baby-mulher.jpg'
        } else if (idade <= 18) {
            res.innerHTML = `Você é uma <strong>mulher jovem</strong> de ${idade} anos!`
            img.src = 'jovem-mulher.jpg'
        } else if (idade > 18 && idade <= 60) {
            res.innerHTML = `Você é uma <strong>mulher adulta</strong> de ${idade} anos!`
            img.src = 'mulher-adulta.jpg'
        } else {
            res.innerHTML = `Você é uma <strong>mulher idosa</strong> de ${idade} anos!`
            img.src = 'mulher-idosa.jpg'
        }
    }

    
    
}