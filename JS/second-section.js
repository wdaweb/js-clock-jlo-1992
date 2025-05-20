const songs = [{
  title: 'BIRDS OF A FEATHER',
  singer: 'Billie Eilish',
  album: 'HIT ME HARD AND SOFT',
  time: '3:30',
  minutes: 3,
  seconds: 30
},
{
  title: 'Good Luck, Babe!',
  singer: 'Chappell Roan',
  album: 'The Rise and Fall of a Midwest Princess',
  time: '3:34',
  minutes: 3,
  seconds: 34
},
{
  title: 'Taste',
  singer: 'Sabrina Carpenter',
  album: "Short n' Sweet",
  time: '2:38',
  minutes: 2,
  seconds: 38
},
{
  title: 'Fortnight',
  singer: 'Taylor Swift feat. Post Malone',
  album: "The Tortured Poets Department",
  time: '4:10',
  minutes: 4,
  seconds: 10
},
{
  title: 'we can’t be friends (wait for your love)',
  singer: 'Ariana Grande',
  album: "Eternal Sunshine",
  time: '3:48',
  minutes: 3,
  seconds: 48
}, {
  title: 'Love Hangover',
  singer: 'JENNIE',
  album: "Ruby",
  time: '3:01',
  minutes: 3,
  seconds: 1
},
{
  title: 'Unwritten',
  singer: 'Natasha Bedingfield',
  album: "Unwritten",
  time: '4:20',
  minutes: 4,
  seconds: 20
},
{
  title: 'Toxic Till the End',
  singer: 'ROSÉ',
  album: "rosie",
  time: '2:37',
  minutes: 2,
  seconds: 37
}]

const backIcon = document.getElementById('back-icon')
const playIcon = document.getElementById('play-icon')
const nextIcon = document.getElementById('next-icon')
const noteIcon = document.getElementById('note-icon')
const timeTotalM = document.getElementById('time-total-m')
const timeTotalColon = document.getElementById('time-total-colon')
const timeTotalS = document.getElementById('time-total-s')
const currentTimeM = document.getElementById('current-time-m')
const currentTimeColon = document.getElementById('current-time-colon')
const currentTimeS = document.getElementById('current-time-s')
const progressSquare = document.getElementById('progress-square')
const title = document.getElementById('title')
const singer = document.getElementById('singer')
const album = document.getElementById('album')
const allTitles = document.getElementById('all-titles')
let currentIndex = 0;
let timer;
let currentMinute = 0;
let currentSecond = 0;
let isPlaying = false;
let currentSong;


function playSong(index) {
  // 清除計時器
  isPlaying = false
  clearInterval(timer)
  currentMinute = 0;
  currentSecond = 0;
  progressSquare.style.backgroundImage = `linear-gradient(to right, #051805 0%, #626f5e 0%)`
  currentSong = songs[index]

  currentTimeS.innerText = '00'
  currentTimeM.innerText = '00'
  timeTotalM.innerText = currentSong.minutes.toString().padStart(2, '0')
  timeTotalS.innerText = currentSong.seconds.toString().padStart(2, '0')
  title.innerText = currentSong.title
  singer.innerText = currentSong.singer
  album.innerText = currentSong.album

  startTimer();
}

function startTimer() {
  if (isPlaying) return
  isPlaying = true

  timer = setInterval(function () {
    currentSecond++
    if (currentSecond === 60) {
      currentMinute++
      currentSecond = 0
    }

    playIcon.src = './images/pause.png'
    currentTimeS.innerText = (currentSecond % 60).toString().padStart(2, '0')
    currentTimeM.innerText = currentMinute.toString().padStart(2, '0')

    const totalSeconds = currentSong.minutes * 60 + currentSong.seconds
    const currentSeconds = currentMinute * 60 + currentSecond

    if (currentSeconds <= totalSeconds) {
      const progress = (currentSeconds / totalSeconds) * 100;
      progressSquare.style.backgroundImage = `linear-gradient(to right, #051805 ${progress.toFixed(2)}%, #626f5e ${progress.toFixed(2)}%)`
      // console.log('當前進度:' + progress.toFixed(2) + '%')
    } else {
      clearInterval(timer)
      isPlaying = false
      currentIndex++
      if (currentIndex > songs.length - 1) {
        currentIndex = 0
      }
      playSong(currentIndex)
    }
  }, 1000)
}


function pauseTimer() {
  clearInterval(timer)
  isPlaying = false
}


playIcon.addEventListener('click', function () {
  if (!isPlaying) {
    if (!currentSong) {
      playSong(currentIndex)
    }
    else {
      startTimer()
      isPlaying = true
      playIcon.src = './images/pause.png'
    }
  } else {
    pauseTimer()
    playIcon.src = './images/play.png'
  }
})

nextIcon.addEventListener('click', function () {
  currentIndex++
  if (currentIndex > songs.length - 1) {
    currentIndex = 0
  }
  playSong(currentIndex)


})

backIcon.addEventListener('click', function () {
  currentIndex--
  if (currentIndex < 0) {
    currentIndex = songs.length - 1
  }
  playSong(currentIndex)

})

function showPlayList() {
  allTitles.innerHTML = ''
  songs.forEach(function (song) {
    const p = document.createElement('p')
    p.innerText = `${song.title}`
    p.classList.add('playlist')
    allTitles.appendChild(p)
  })
}

noteIcon.addEventListener('click', function () {
  console.log('noteIcon clicked');
  title.style.display = 'none'
  singer.style.display = 'none'
  album.style.display = 'none'
  progressSquare.style.display = 'none'
  timeTotalM.style.display = 'none'
  timeTotalColon.style.display = 'none'
  timeTotalS.style.display = 'none'
  currentTimeM.style.display = 'none'
  currentTimeColon.style.display = 'none'
  currentTimeS.style.display = 'none'
  if (allTitles.innerHTML === '') {
    showPlayList()
  } else {
    allTitles.innerHTML = ''
    title.style.display = 'block'
    singer.style.display = 'block'
    album.style.display = 'block'
    progressSquare.style.display = 'block'
    timeTotalM.style.display = 'block'
    timeTotalColon.style.display = 'block'
    timeTotalS.style.display = 'block'
    currentTimeM.style.display = 'block'
    currentTimeColon.style.display = 'block'
    currentTimeS.style.display = 'block'
  }

})

