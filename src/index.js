import './styles/style.scss'

const updateTime = () => {
    const date = new Date()
    let hr = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    
    if (hr < 10) {
        hr = '0'+ hr
    }
    if (min < 10) {
        min = '0' + min
    }
    if (sec < 10) {
        sec = '0' + sec
    }
    
    const time = document.getElementById('time')
    
    const newTime = hr + ':' + min + ':' + sec
    time.innerHTML = newTime
    setTimeout(updateTime, 500)

}

const updateDate = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    const dt = date.getDate()
    const day = date.getDay()
    const today = document.getElementById('today')
    const whatDay = document.getElementById('whatday')
    const newToday = year + '/' + month + '/' + dt
    const array = ['日','一','二','三','四','五','六']

    today.innerHTML = newToday
    whatDay.innerHTML = '星期'+ array[day]
}


let x = 0

const movingBg = () => {
    x = x + 0.2
    let bgPosition = document.getElementById('body').style.backgroundPosition = x +'%' + '0%'
    // console.log(bgPosition)
    setTimeout(movingBg, 30)
}

updateTime()
updateDate()
movingBg()