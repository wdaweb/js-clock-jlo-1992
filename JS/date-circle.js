
const ring = document.getElementById('progress-ring')
for (let i = 0; i < 60; i++) {
  const tick = document.createElement('div')
  tick.className = 'tick'
  tick.style.transform = `rotate(${i * 6}deg) translateX(-92px)`
  ring.appendChild(tick)
}
const triangle = document.getElementById('triangle-wrapper')
const circleDate = document.getElementById('circle-date')
const circleMonth = document.getElementById('circle-month')
const monthNames = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

function dateClock() {
  const now = new Date()
  const elMonth = now.getMonth()
  const elDate = now.getDate()
  triangle.style.transform = `rotate(${elDate * 12 + 90}deg)`
  circleDate.innerText = elDate
  circleMonth.innerText = monthNames[elMonth]
  ring.style.background = `conic-gradient(#575757 0deg ${elDate * 12}deg, #f58c3b ${elDate * 12}deg 360deg)`
}

dateClock()