// Переменные
const item = document.querySelectorAll(".works-bottom__item");
const video = document.querySelectorAll(".works-bottom__video");

// Код от Ивана - можно найти всё! И даже нервные клетки...

// Функция перевода в нормальное время
// её скопировал
function secondsToTime(time) {
  var h = Math.floor(time / (60 * 60)),
    dm = time % (60 * 60),
    m = Math.floor(dm / 60),
    ds = dm % 60,
    s = Math.ceil(ds);
  if (s === 60) {
    s = 0;
    m = m + 1;
  }
  if (s < 10) {
    s = "0" + s;
  }
  if (m === 60) {
    m = 0;
    h = h + 1;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (h === 0) {
    fulltime = m + ":" + s;
  } else {
    fulltime = h + ":" + m + ":" + s;
  }
  return fulltime;
}

// Всё, что ниже - писал сам.
// Загрузка времени видео при загрузки страницы
for (videoElement of video) {
  const item = videoElement.closest(".works-bottom__item");
  const timeOut = item.querySelector(".works-bottom__video-timer");
  const videoSmall = item.querySelector(".works-bottom__video");
  const btn = item.querySelector(".works-bottom__video-button");

  videoSmall.addEventListener("loadeddata", function () {
    timeOut.innerHTML = secondsToTime(videoSmall.duration);
  });

  // Воспроизведение видео
  videoSmall.addEventListener("click", function () {
    if (videoSmall.paused) {
      videoSmall.play();
      btn.style.backgroundImage = 'url("images/works-bottom/pause-button.png")';
      videoSmall.controls = true;
    } else {
      videoSmall.pause();
      btn.style.backgroundImage = 'url("images/works-bottom/play-button.png")';
      videoSmall.controls = false;
      this.src = this.src;
    }
  });

  // Условия при окончании видео
  videoSmall.addEventListener("ended", function () {
    btn.style.backgroundImage = 'url("images/works-bottom/play-button.png")';
    this.src = this.src;
    videoSmall.controls = false;
  });

  // Расчет времени
  videoSmall.addEventListener(
    "timeupdate",
    function () {
      timeOut.innerHTML = secondsToTime(videoSmall.currentTime);
    },
    false
  );
}
//
