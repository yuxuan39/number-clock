import moment from 'moment'

import './styles/style.scss'

const hr1 = document.getElementById('hr1')
const hr2 = document.getElementById('hr2')
const min1 = document.getElementById('min1')
const min2 = document.getElementById('min2')
const sec1 = document.getElementById('sec1')
const sec2 = document.getElementById('sec2')
const btn = document.querySelector('.btn')
const body = document.querySelector('body')

const HOST = 'https://free-gce.akiya.com.tw'

let mode = 'local'

const fetchTime = () => fetch(`${HOST}/utils/now`).then(res => res.json())

let x = 0
const movingBg = () => {
  x = x + 0.1
  body.style.backgroundPosition = `${x}% 0%`
}

let timer = null
const modeHandler = evt => {
  evt.stopPropagation()
  if (evt.target.tagName === 'LABEL' || evt.target.tagName === 'I') return
  if (mode === 'local') {
    if (timer) clearInterval(timer)
    timer = setInterval(movingBg, 0)
    return (mode = 'remote')
  }
  if (mode === 'remote') {
    if (timer) clearInterval(timer)
    return (mode = 'local')
  }
}

const getTime = mode => {
  if (mode === 'remote') {
    return fetchTime()
      .then(data => {
        let time = data.data.now
        return {
          hr: moment(time)
            .hour()
            .toString(),
          min: moment(time)
            .minute()
            .toString(),
          sec: moment(time)
            .second()
            .toString()
        }
      })
      .catch(err => console.error('get time failed', err))
  }

  const time = new Date()
  return Promise.resolve({
    hr: time.getHours(),
    min: time.getMinutes(),
    sec: time.getSeconds()
  })
}

btn.addEventListener('click', modeHandler)

const updateTime = () => {
  getTime(mode).then(obj => {
    let hr = obj.hr
    let min = obj.min
    let sec = obj.sec

    if (hr < 10) {
      hr = `0${hr}`
    }
    if (min < 10) {
      min = `0${min}`
    }
    if (sec < 10) {
      sec = `0${sec}`
    }

    changeNumber(hr, min, sec)
    setTimeout(updateTime, 500)
  })
}

const changeNumber = (hr, min, sec) => {
  const hourTD = hr.toString()[0]
  const hourUD = hr.toString()[1]
  const minTD = min.toString()[0]
  const minUD = min.toString()[1]
  const secTD = sec.toString()[0]
  const secUD = sec.toString()[1]

  hr1.classList = 'number'
  hr2.classList = 'number'
  min1.classList = 'number'
  min2.classList = 'number'
  sec1.classList = 'number'
  sec2.classList = 'number'

  hr1.classList.add(`no${hourTD}`)
  hr2.classList.add(`no${hourUD}`)
  min1.classList.add(`no${minTD}`)
  min2.classList.add(`no${minUD}`)
  sec1.classList.add(`no${secTD}`)
  sec2.classList.add(`no${secUD}`)
}

updateTime()
