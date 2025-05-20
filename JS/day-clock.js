const dayNames = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
const dayCircle = document.getElementById('day-circle')
for (let i = 0; i < 7; i++) {
  const dayName = document.createElement('div')
  dayName.className = 'dayNames'
  dayName.innerText = dayNames[i]
  dayName.style.transform = `rotate(${i * (360 / 7)}deg)`
  dayCircle.append(dayName)
  if (dayNames[i] === 'SAT' || dayNames[i] === 'SUN') {
    dayName.style.color = '#f58c3b'
  }
}
function dayClock() {
  const date = new Date();
  const day = date.getDay();
  const circleFace = document.getElementById('circle-face')
  circleFace.style.transform = `rotate(${day * 51 - 51}deg) translate(-50%, -50%)`
}
dayClock()