import './styles/style.scss'

const updateTime = () => {
    const date = new Date()
    const hr = date.getHours()
    const min = date.getMinutes()
    const sec = date.getSeconds()
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDay
    const time = document.getElementById('time')
    const newTime = hr + ':' + min + ':' + sec

    time.innerHTML = newTime
    setTimeout(updateTime, 500);
}

updateTime()
