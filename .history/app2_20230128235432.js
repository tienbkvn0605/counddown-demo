window.addEventListener("load", function () {
  const daysTime = document.querySelector(".days");
  const hoursTime = document.querySelector(".hours");
  const minutesTime = document.querySelector(".minutes");
  const secondsTime = document.querySelector(".seconds");

  function countDow(date) {
    const endDate = new Date(date).getTime();
    const currentTime = new Date().getTime();
    if (isNaN(endDate) || endDate - currentTime < 0) return console.log("err");
    setInterval(function () {
      let days, hours, minutes, seconds;
      const now = new Date();
      const startDate = now.getTime();
      let timeRemaning = parseInt((endDate - startDate) / 1000);
      if (timeRemaning >= 0) {
        days = parseInt(timeRemaning / 86400);
        timeRemaning = timeRemaning % 86400;
        hours = parseInt(timeRemaning / 3600);
        timeRemaning = timeRemaning % 3600;
        minutes = parseInt(timeRemaning / 60);
        timeRemaning = parseInt(timeRemaning % 60);
        seconds = parseInt(timeRemaning);
        daysTime.textContent = `0${days}`.slice(-2);
        hoursTime.textContent = `0${hours}`.slice(-2);
        minutesTime.textContent = `0${minutes}`.slice(-2);
        secondsTime.textContent = `0${seconds}`.slice(-2);
      } else {
        console.log("err");
      }
    }, 1000);
  }
  countDow("Wed Oct 10 2023 00:00:00 GMT+0900 (Japan Standard Time)");
});

// countDown("Wed Oct 07 2022 00:00:00 GMT+0900 (Japan Standard Time)");
