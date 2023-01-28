window.addEventListener("load", function () {
  const daysTimer = document.querySelector(".days");
  const hoursTimer = document.querySelector(".hours");
  const minutesTimer = document.querySelector(".minutes");
  const secondsTimer = document.querySelector(".seconds");

  //Tue Oct 06 2022 23:33:35 GMT+0900 (Japan Standard Time)

  function countDown(date) {
    const endDate = new Date(date).getTime();
    const currentDate = new Date().getTime();
    if (isNaN(endDate) || endDate - currentDate <= 0) return;
    setInterval(function () {
      let day, hour, minute, second;
      const now = new Date();
      const startDate = now.getTime();
      let timeRemaning = parseInt((endDate - startDate) / 1000); //miliseconds to seconds
      if (timeRemaning > 0) {
        // 1 day = 24 * 60 * 60 = 86400 seconds
        day = parseInt(timeRemaning / 86400);
        timeRemaning = timeRemaning % 86400;
        //1 hour = 60 * 60
        hour = parseInt(timeRemaning / 3600);
        timeRemaning = timeRemaning % 3600;
        minute = parseInt(timeRemaning / 60);
        timeRemaning = timeRemaning % 60;
        second = parseInt(timeRemaning);
        daysTimer.textContent = `0${day}`.slice(-2);
        hoursTimer.textContent = `0${hour}`.slice(-2);
        minutesTimer.textContent = `0${minute}`.slice(-2);
        secondsTimer.textContent = `0${second}`.slice(-2);
      } else {
        return;
      }
    });
  }
  //   setInterval(function () {
  //     countDown("Wed Oct 07 2022 00:08:58 GMT+0900 (Japan Standard Time)");
  //   }, 1000);
});
