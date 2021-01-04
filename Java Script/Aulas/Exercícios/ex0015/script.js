function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if(fano.value.length == 0 || fano.value > ano) {
    alert('[ERRO] Verifique seus dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      gênero = 'Homem'
      if (idade > 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'bebeh.png')
      } else if (idade < 50) {
        //jovem
        img.setAttribute('src', 'jovemh.png')
      } else {
        //idoso
        img.setAttribute('src', 'idosoh.png')
      }
    } else if (fsex[1].checked) {
      gênero = 'Mulher'
      if (idade > 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'bebem.png')
      } else if (idade < 50) {
        //jovem
        img.setAttribute('src', 'jovemm.png')
      } else {
        //idoso
        img.setAttribute('src', 'idosom.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
  } 

}