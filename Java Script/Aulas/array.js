let num = [8, 1, 7, 4, 2, 9]

console.log(num)
console.log(`O vetor tem ${num.length} posições`)

for(let pos = 0; pos<num.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

num.sort()
console.log(num)

//Fomra simplificada do FOR
for(let pos in num) {
  console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log(`O 7 está na array: ${num.indexOf(7)}`)