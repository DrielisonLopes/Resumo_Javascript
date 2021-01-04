function contar() {
  let ini = document.getElementById('txti')
  let fim = document.getElementById('txtf')
  let passo = document.getElementById('txtp')
  let res = document.getElementById('res')

  if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    //alert('[ERRO] Faltam dados!')
    res.innerHTML = 'Impossível contar!'
  } else {
    res.innerHTML = 'Contando... <br>'
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0) {
      alert('Passo inválido! Considerando Passo = 1')
      p = 1
    }

    if(i < f) {
      //contagem crescente
      for(let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F473} `
      }
    } else {
      //contagem decrescente
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} \u{1F473}`
      }
    }
    res.innerHTML += ` \u{1F3C1}`
    }  
}