$(function () {
  const szamologep = new Szamologep()
  let a = 3
  let b = 4
  $('.a').text(a)
  $('.b').text(b)
  $('.eredmeny').text(szamologep.osszead(a, b))
})

class Szamologep {
  constructor() {}

  osszead(a, b) {
    if (isNaN(a) || isNaN(b)) {
      return 'Legalább az egyik pareméter nem szám!'
    }
    if (Number(a) + Number(b) > Number.MAX_SAFE_INTEGER) {
      return 'Túlcsordulás!'
    }
    if (Number(a) + Number(b) < Number.MIN_SAFE_INTEGER) {
      return 'Túlcsordulás!'
    }
    return Number(a) + Number(b)
  }

  kivonas(a, b) {
    return a - b
  }
}
