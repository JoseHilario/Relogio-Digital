const Horas = document.getElementById('Horas')
const Minutos = document.getElementById('Minutos')
const Segundos = document.getElementById('Segundos')

const Relogio = setInterval(function time() {
  let dateToday = new Date()
  let hour = dateToday.getHours()
  let min = dateToday.getMinutes()
  let sec = dateToday.getSeconds()
  
  if (hour < 10) hour = '0' + hour
  if (min < 10) min = '0' + min
  if (sec < 10) sec = '0' * sec
  
  Horas.textContent = hour
  Minutos.textContent = min
  Segundos.textContent = sec

}) 

