const timer_containers = document.getElementsByClassName("timer_container");
const timer_button = document.getElementById("timer_start");
const snd = new Audio("assets/alarm.wav");
timer_button.addEventListener("click", timer_start);

var timerInterval;
// var beepInterval;

var s = "00";
var m = "00";
var h = "00";

const hours_input = document.getElementById("hours");
const minutes_input = document.getElementById("minutes");
const seconds_input = document.getElementById("seconds");

hours_input.addEventListener("input", function () {
  h = this.value;
});
minutes_input.addEventListener("input", function () {
  m = this.value;
});
seconds_input.addEventListener("input", function () {
  s = this.value;
});

function is_empty(input) {
  if (input.value == 0 || input.value == "") {
    return true;
  }
  return false;
}

function check_empty() {
  if (
    is_empty(hours_input) &&
    is_empty(minutes_input) &&
    is_empty(seconds_input)
  ) {
    timer_button.disabled = true;
  } else {
    timer_button.disabled = false;
  }
}

check_empty();

function timer_stop() {
  clearInterval(timerInterval);
  // clearInterval(beepInterval);
  snd.pause();
  snd.currentTime = 0;
  timer_button.textContent = "Start";
  // timer_button.setAttribute("onclick", "timer_start()");
  timer_button.removeEventListener("click", timer_stop);
  timer_button.addEventListener("click", timer_start);

  seconds_input.value = s;
  minutes_input.value = m;
  hours_input.value = h;

  addZero();
  Array.from(timer_containers).forEach(
    (container) => (container.disabled = false)
  );
}

snd.addEventListener("ended", function () {
  timer_stop();
});

function timer_start() {
  timer_button.textContent = "Stop!";
  // timer_button.setAttribute("onclick", "timer_stop()");
  timer_button.removeEventListener("click", timer_start);
  timer_button.addEventListener("click", timer_stop);
  // timer_button.
  // timer_button.classList.add('stop')
  Array.from(timer_containers).forEach(
    (container) => (container.disabled = true)
  );
  timerInterval = setInterval(function () {
    var hours = hours_input.value;
    var minutes = minutes_input.value;
    var seconds = seconds_input.value;

    if (seconds > 0) {
      seconds_input.value--;
    } else {
      if (minutes > 0) {
        minutes_input.value--;
        seconds_input.value = 59;
      } else {
        if (hours > 0) {
          hours_input.value--;
          minutes_input.value = 59;
        } else {
          if (Notification.permission !== "granted") {
            Notification.requestPermission();
          } else {
            var notification = new Notification("timer_finished", {
              icon: "https://cdn0.iconfinder.com/data/icons/basic-ui-elements-colored/700/09_bell-3-512.png",
              body: "timer finised",
            });
          }

          clearInterval(timerInterval);
          Array.from(timer_containers).forEach(
            (container) => (container.disabled = false)
          );
          setTimeout(function () {
            // beepInterval = setInterval(beep, 200);

            snd.play();
          }, 10);
        }
      }
    }
    addZero();
  }, 1000);
}

function addZero() {
  addZeroItem(seconds_input);
  addZeroItem(minutes_input);
  addZeroItem(hours_input);
}

function addZeroItem(input) {
  if (input.value != "" && ("" + input.value).length < 2) {
    input.value = "0" + input.value;
  }
  if (input.value == 0) {
    input.value = "";
  }
}

Array.from(timer_containers).forEach(function (container) {
  container.oninput = function () {
    check_empty();
    if (this.value == 0) {
      this.value = "";
    }
    var max = parseInt(this.max);

    if (parseInt(this.value) > max) {
      this.value = max;
    }
    // if (parseInt(this.value, 10) < 10) this.value = "0" + this.value;
  };
});
