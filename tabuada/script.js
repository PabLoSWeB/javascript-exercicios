function gerartabuada() {
    let numero = document.querySelector('input#caixa1').value.trim()
    let selectTabuada = document.querySelector('select#seltabuada')

    

    if (numero.length == 0) {
        alert('Insira um número.')
    } else {
        let numeroInserido = Number(numero)
        let resultado
        selectTabuada.innerHTML = ''
        for (i = 1; i <= 10; i++) {
            resultado = numero * i
            let item = document.createElement('option')
            item.text = `${numero} x ${i} = ${resultado}`
            item.value = `selectTabuada${i}`
            selectTabuada.appendChild(item)
        }
    }
}