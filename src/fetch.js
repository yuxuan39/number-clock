import './styles/style.scss'
import moment from 'moment'

const hr1 = document.getElementById('hr1')
const hr2 = document.getElementById('hr2')
const min1 = document.getElementById('min1')
const min2 = document.getElementById('min2')
const sec1 = document.getElementById('sec1')
const sec2 = document.getElementById('sec2')



const updateTime = () => {
    const HOST = 'https://free-gce.akiya.com.tw/utils/now'
    fetch(HOST, {
        method: 'GET'
    }).then(res => {
        return res.json()
        console.log('res', res)
    }).then(data => {
        let time = data.data.now
        let sec = moment(time).second().toString()
        let min = moment(time).minute().toString().toString()
        let hr = moment(time).hour().toString()

        if (hr < 10) {
            hr = `0${hr}`
        }
        if (min < 10) {
            min = `0${min}`
        }
        if (sec < 10) {
            sec = `0${sec}`
        }
        console.log(hr, min, sec)
        changeNumber(hr, min, sec)
        setTimeout(updateTime, 800)
    }).catch(err => {
        console.log('err', err)
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




export {updateTime}