const refs = {
    day: document.querySelector('.date-day'),
    date: document.querySelector('.date'),
    month: document.querySelector('.date-month'),
    year: document.querySelector('.date-year'),
    digitalClock: document.querySelector('.digital-clock'),
    arrowSecond: document.querySelector('.clock-seconds__arrow'),
    arrowMinute: document.querySelector('.clock-minutes__arrow'),
    arrowHour: document.querySelector('.clock-hours__arrow')
};

const arrDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'September', 'October', 'November', 'December'];

setInterval(() => {
    const currentTime = new Date();
    const currentDay = arrDay[currentTime.getDay()];
    const currentDate = currentTime.getDate();
    const currentMonth = monthList[currentTime.getMonth()];
    const currentYear = currentTime.getFullYear();
    const currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentSeconds = currentTime.getSeconds();

    const changeSeconds = 360 / 60 * currentSeconds;
    const changeMinutes = 360 / 60 * currentMinutes;
    const changeHours = (360 / 12) * currentHours + (360 / 12 / 60) * currentMinutes;

    const formatTime = `${currentHours.toString().padStart(2, '0')} : ${currentMinutes.toString().padStart(2, '0')} : ${currentSeconds.toString().padStart(2, '0')}`;
    
    refs.day.textContent = currentDay;
    refs.date.textContent = currentDate;
    refs.month.textContent = currentMonth;
    refs.year.textContent = currentYear;
    refs.digitalClock.textContent = `Current time: ${formatTime}`;

    refs.arrowSecond.style.transform = `rotate(${changeSeconds}deg)`;
    refs.arrowMinute.style.transform = `rotate(${changeMinutes}deg)`;
    refs.arrowHour.style.transform = `rotate(${changeHours}deg)`;
}, 1000)
