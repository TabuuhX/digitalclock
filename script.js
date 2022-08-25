const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')

const clock = setInterval(function time(){
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let mn = dateToday.getMinutes()
    let sc = dateToday.getSeconds()

    if(hr < 10) hr = '0' + hr
    if(mn < 10) mn = '0' + mn
    if(sc < 10) sc = '0' + sc

    hour.textContent = hr
    minute.textContent = mn
    second.textContent = sc
})