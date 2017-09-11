import './styles/style.scss'

const hr1 = document.getElementById('hr1')
const hr2 = document.getElementById('hr2')
const min1 = document.getElementById('min1')
const min2 = document.getElementById('min2')
const sec1 = document.getElementById('sec1')
const sec2 = document.getElementById('sec2')

const updateTime = () => {
    const date = new Date()
    let hr = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

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
    setTimeout(updateTime, 1000)
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
// const updateDate = () => {
//     const date = new Date()
//     const year = date.getFullYear()
//     const month = date.getMonth()
//     const dt = date.getDate()
//     const day = date.getDay()
//     const today = document.getElementById('today')
//     const whatDay = document.getElementById('whatday')
//     const newToday = year + '/' + month + '/' + dt
//     const array = ['日','一','二','三','四','五','六']

//     today.innerHTML = newToday
//     whatDay.innerHTML = '星期'+ array[day]
// }



// updateDate()
// let x = 0
// const movingBg = () => {
//     x = x + 0.2
//     let bgPosition = document.getElementById('body').style.backgroundPosition = x +'%' + '0%'
//     // console.log(bgPosition)
//     setTimeout(movingBg, 30)
// }

// movingBg()