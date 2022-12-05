function update(){
const realDate = new Date();

let realMonth = realDate.getMonth();
let realDayOfMonth = realDate.getDate();
let realDay = realDate.getDay();
let realHour = realDate.getHours();
let realMinutes = realDate.getMinutes();
let realSeconds = realDate.getSeconds();
let dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

const dayElement = document.querySelector('#day');
const dayOfMonthElement = document.querySelector('#dayOfMonth');
const monthElement = document.querySelector('#month');
const hourElement = document.querySelector('#hour');
const minutesElement = document.querySelector('#minutes');
const secondsElement = document.querySelector('#seconds');


  dayElement.innerHTML = dayNames[realDay];
  dayOfMonthElement.innerHTML = realDayOfMonth;
  monthElement.innerHTML = realMonth;
  if(realHour < 10){
    hourElement.innerHTML = `0${realHour}`;
  }else{
    hourElement.innerHTML = realHour;
  }
  if(realMinutes < 10){
    minutesElement.innerHTML = `0${realMinutes}`;
  }else{
    minutesElement.innerHTML = realMinutes;
  }
  if(realSeconds < 10){
    secondsElement.innerHTML = `0${realSeconds}`;
  }else{
    secondsElement.innerHTML = realSeconds;
  }

  setTimeout(update, 1000);
}

update();

