window.addEventListener("load", function () {
  const daysTimer = document.querySelector(".days");
  const hoursTimer = document.querySelector(".hours");
  const minutesTimer = document.querySelector(".minutes");
  const secondsTimer = document.querySelector(".seconds");

  //Tue Oct 06 2022 23:33:35 GMT+0900 (Japan Standard Time)

  function countDown(date) {
    let day, hour, minute, second;
    const now = new Date();
    const startDate = now.getTime();
    const endDate = new Date(date).getTime();
    let timeRemaning = parseInt((endDate - startDate) / 1000); //miliseconds to seconds

    // 1 day = 24 * 60 * 60 = 86400 seconds
    day = parseInt(timeRemaning / 86400);
    timeRemaning = timeRemaning % 86400;
    //1 hour = 60 * 60
    hour = parseInt(timeRemaning / 3600);
    timeRemaning = timeRemaning % 3600;
    minute = parseInt(timeRemaning / 60);
    timeRemaning = timeRemaning % 60;
    daysTimer.textContent = day;
    hoursTimer.textContent = hour;
    minutesTimer.textContent = minute;
    secondsTimer.textContent = timeRemaning;
    console.log(timeRemaning);
  }
  countDown("Tue Oct 06 2022 23:33:35 GMT+0900 (Japan Standard Time)");
});
