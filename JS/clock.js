const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')
const blockFront = document.getElementsByClassName('block-front')
const blockBack = document.getElementsByClassName('block-back')
const digitBlock = document.querySelectorAll('.digit-block')
const year = document.getElementById('year')
let rotateState = false
let prevHour = -1
let prevMinute = -1


const clock = () => {
  const date = new Date();
  const elHour = date.getHours()
  const elMinute = date.getMinutes()
  const elSecond = date.getSeconds()
  const elYear = date.getFullYear()
  hour.style.transform = `rotate(${elHour * (360 / (60 + 12)) - 90}deg)`
  minute.style.transform = `rotate(${elMinute * 6 - 90}deg)`
  second.style.transform = `rotate(${elSecond * 6 - 90}deg)`
  year.innerText = elYear
  if (elHour !== prevHour) {
    blockFront[0].innerText = `${elHour.toString().padStart(2, '0')}`
    blockBack[0].innerText = `${elHour.toString().padStart(2, '0')}`
    digitBlock[0].style.transform = `rotateX(${rotateState ? 180 : 0}deg)`
    rotateState = !rotateState
    prevHour = elHour
  }

  if (elMinute !== prevMinute) {
    blockFront[1].innerText = `${elMinute.toString().padStart(2, '0')}`
    blockBack[1].innerText = `${elMinute.toString().padStart(2, '0')}`
    digitBlock[1].style.transform = `rotateX(${rotateState ? 180 : 0}deg)`
    rotateState = !rotateState
    prevMinute = elMinute
  }
}
setInterval(clock, 1000)
clock()


const clockFace = document.getElementById('clock-face')
for (let i = 0; i < 60; i++) {
  const thinTick = document.createElement('div')
  thinTick.className = 'thin-tick'
  thinTick.style.transform = `rotate(${i * 6}deg) translateX(64px)`
  clockFace.appendChild(thinTick)
}

for (let i = 0; i < 12; i++) {
  const thickTick = document.createElement('div')
  thickTick.className = 'thick-tick'
  thickTick.style.transform = `rotate(${i * 60}deg) translateX(58px)`
  clockFace.appendChild(thickTick)
}





