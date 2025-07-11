function updateClock() {
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const ampmEl = document.getElementById("ampm");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = h >= 12 ? "PM" : "AM";

  h = h % 12;
  h = h ? h : 12; // Convert '0' to '12'
  
  hoursEl.innerText = h < 10 ? "0" + h : h;
  minutesEl.innerText = m < 10 ? "0" + m : m;
  secondsEl.innerText = s < 10 ? "0" + s : s;
  ampmEl.innerText = ampm;
}

setInterval(updateClock, 1000);
updateClock(); // initial call
