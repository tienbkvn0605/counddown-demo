window.addEventListener("load", function () {
  const daysTimer = document.querySelector(".days");
  const hoursTimer = document.querySelector(".hours");
  const minutesTimer = document.querySelector(".minutes");
  const secondsTimer = document.querySelector(".seconds");

  //Tue Oct 06 2022 23:33:35 GMT+0900 (Japan Standard Time)

  function countDown(date) {
    const now = new Date();\
    const startDate = now.getTime();
    const endDate = date.getTime();
    let timeRemaning = 
    console.log(timeRemaning);
  }
  countDown("Tue Oct 06 2022 23:33:35 GMT+0900 (Japan Standard Time)");
});
