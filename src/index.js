import './styles/style.scss'

const updateTime = () => {
    const date = new Date()
    let hr = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDay
    
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
    setTimeout(updateTime, 500);
}


updateTime()
