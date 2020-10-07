const time = document.querySelector("#currentTime");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  time.innerText = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
