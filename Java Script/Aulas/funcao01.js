//ex1
function parimpar (n) {
  if(n%2 == 0) {
    return 'Par'
  } else {
    return 'Impar'
  }
}
console.log(parimpar(222))

//ex2
function soma(n1, n2, n3=0) {
  return n1 + n2 + n3
}
console.log(soma(2, 5))

//ex3
let v = function(x) {
  return x*2
}
console.log(v(5))

//ex4

function fatorial(m) {
  let fat = 1
  for(let c = m; c > 1; c--) {
    fat *= c
  }
    return fat
}
console.log(fatorial(5))

//ex5 RECURSIVIDADE
function fatorial(n) {
  if (n == 1) {
    return 1
  } else {
    return n * fatorial(n-1)
  }
}
//n! = n x (n-1)!
console.log(fatorial(5))