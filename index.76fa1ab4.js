const e={day:document.querySelector(".date-day"),date:document.querySelector(".date"),month:document.querySelector(".date-month"),year:document.querySelector(".date-year"),digitalClock:document.querySelector(".digital-clock"),arrowSecond:document.querySelector(".clock-seconds__arrow"),arrowMinute:document.querySelector(".clock-minutes__arrow"),arrowHour:document.querySelector(".clock-hours__arrow")},t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],r=["January","February","March","April","May","June","July","September","October","November","December"];setInterval((()=>{const o=new Date,a=t[o.getDay()],n=o.getDate(),d=r[o.getMonth()],c=o.getFullYear(),u=o.getHours(),y=o.getMinutes(),l=o.getSeconds(),S=6*l,m=6*y,s=30*u+.5*y,g=`${u.toString().padStart(2,"0")} : ${y.toString().padStart(2,"0")} : ${l.toString().padStart(2,"0")}`;e.day.textContent=a,e.date.textContent=n,e.month.textContent=d,e.year.textContent=c,e.digitalClock.textContent=`Current time: ${g}`,e.arrowSecond.style.transform=`rotate(${S}deg)`,e.arrowMinute.style.transform=`rotate(${m}deg)`,e.arrowHour.style.transform=`rotate(${s}deg)`}),1e3);
//# sourceMappingURL=index.76fa1ab4.js.map