let num = document.getElementById('num')
let lista = document.querySelector('select#lista')
let res = document.getElementById('res')
let valores = []

function isNumber(n) {
	if(Number(n) >= 1 && Number(n) <= 100) {
		return true
	} else {
		return false
	}
}

function inLista(n, l) {
	if(l.indexOf(Number(n)) != -1) {
		return true
	} else {
		return false
	}
}

function adicionar() {
	if(isNumber(num.value) && !inLista(num.value, valores)) {
		valores.push(Number(num.value))		
		let item = document.createElement('option')
		item.text = `Valor ${num.value} adicionado`
		lista.appendChild(item)
	} else {
		alert('Valor inválido ou já possui na lista')
	}
	res.innerHTML = ''
	num.value = ''
	num.focus()
}

function finalizar() {
	if (valores.length == 0) {
		alert('Favor inserir algum valor na lista')
	} else {

	let total = valores.length
	let maior = valores[0]
	let menor = valores[0]
	let soma = 0
	let media = 0

	for(let pos in valores) {
		soma = soma + valores[pos]
		if(valores[pos] > maior)
			maior = valores[pos]
		if(valores[pos] < menor)
			menor = valores[pos]
	}

	media = soma / total

	res.innerHTML = 
  `Ao todo, temos ${total} números cadastrados.` +
  `<br>O maior número informado foi ${maior}.` +
  `<br>O menor valor informado foi ${menor}` +
  `<br>Somando todos os valores, temos ${soma}` +
  `<br>A média dos valores digitados é ${media}`
	}
}