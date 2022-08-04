var kata = "";
var i,
  checkboxes = document.querySelectorAll("input");

widgets = document.getElementsByClassName("widget");
Array.from(widgets).forEach((widget) => dragElement(widget));

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
katakana_obj = {
  ア: "A",
  エ: "E",
  イ: "I",
  ウ: "U",
  オ: "O",
  ラ: "RA",
  レ: "RE",
  リ: "RI",
  ル: "RU",
  ロ: "RO",
  タ: "TA",
  テ: "TE",
  チ: "TI",
  ツ: "TU",
  ト: "TO",
  サ: "SA",
  セ: "SE",
  シ: "SI",
  ス: "SU",
  ソ: "SO",
  ハ: "HA",
  ヘ: "HE",
  ヒ: "HI",
  フ: "FU",
  ホ: "HO",
  カ: "KA",
  ケ: "KE",
  キ: "KI",
  ク: "KU",
  コ: "KO",
  ナ: "NA",
  ネ: "NE",
  ニ: "NI",
  ヌ: "NU",
  ノ: "NO",
  マ: "MA",
  メ: "ME",
  ミ: "MI",
  ム: "MU",
  モ: "MO",
  ヤ: "YA",
  ユ: "YU",
  ヨ: "YO",
  ワ: "WA",
  ヲ: "WO",
  ン: "N",
  あ: "A",
  え: "E",
  い: "I",
  う: "U",
  お: "O",
  ら: "RA",
  れ: "RE",
  り: "RI",
  る: "RU",
  ろ: "RO",
  た: "TA",
  て: "TE",
  ち: "TI",
  つ: "TU",
  と: "TO",
  さ: "SA",
  せ: "SE",
  し: "SI",
  す: "SU",
  そ: "SO",
  は: "HA",
  へ: "HE",
  ひ: "HI",
  ふ: "FU",
  ほ: "HO",
  か: "KA",
  け: "KE",
  き: "KI",
  く: "KU",
  こ: "KO",
  な: "NA",
  ね: "NE",
  に: "NI",
  ぬ: "NU",
  の: "NO",
  ま: "MA",
  め: "ME",
  み: "MI",
  む: "MU",
  も: "MO",
  や: "YA",
  ゆ: "YU",
  よ: "YO",
  わ: "WA",
  を: "WO",
  ん: "N",
};
katakana = Object.keys(katakana_obj);
kat_input = document.getElementById("kat_input");
hint = document.getElementById("hint");
get_random_character();

document.onkeydown = function (e) {
  e = e || window.event;
  // use e.keyCode
  if (e.key == "k") {
    if (document.activeElement !== kat_input) {
      kat_input.focus(function () {});
      e.preventDefault();
    }
  } else if (e.key == "Escape") {
    kat_input.blur();
  } else if (document.activeElement === kat_input) {
    if (e.key === "Enter") {
      hint.textContent = katakana_obj[kata];
      hint.classList.add("hint_shown");
      hint.classList.remove("hint_hidden");
      delay(500).then(function () {
        hint.classList.remove("hint_shown");
        hint.classList.add("hint_hidden");
        delay(200).then(() => (hint.textContent = ""));
      });
    }
  }
};

load_();

function save() {
  for (i = 0; i < checkboxes.length; i++) {
    localStorage.setItem(checkboxes[i].value, checkboxes[i].checked);
  }

  for (i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked =
      localStorage.getItem(checkboxes[i].value) === "true" ? true : false;
  }
}

function load_() {
  for (i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked =
      localStorage.getItem(checkboxes[i].value) === "true" ? true : false;
  }
}

function set_random_character() {
  // var keys = Object.keys(katakana);
  kata = katakana[Math.floor(Math.random() * katakana.length)];
  // answer = katakana[random_katakana];

  //   random_katakana = katakana[keys[(keys.length * Math.random()) << 0]];
  katakana_holder = document.getElementById("katakana_char");
  katakana_holder.textContent = kata;
}

function get_random_character() {
  set_random_character();
  kat_input.addEventListener("input", function () {
    if (this.value.toUpperCase() == kata) {
      kat_input.style.backgroundColor = "#99ef99";
      kat_input.disabled = true;
      delay(1000).then(function () {
        kat_input.value = "";
        kat_input.style.backgroundColor = "white";
        kat_input.disabled = false;
        kat_input.focus();
        set_random_character();
      });
    } else {
      if (this.value.length <= 1) {
        kat_input.style.backgroundColor = "white";
      } else {
        kat_input.style.backgroundColor = "#fd5a5a";
      }
    }
  });
}

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
timer_containers = document.getElementsByClassName("timer_container");
timer_button = document.getElementById("timer_start");
timer_button.setAttribute("onclick", "timer_start()");

var timerInterval;
var beepInterval;

var s = "00";
var m = "00";
var h = "00";

hours_input = document.getElementById("hours");
minutes_input = document.getElementById("minutes");
seconds_input = document.getElementById("seconds");

hours_input.addEventListener("input", function () {
  h = this.value;
});
minutes_input.addEventListener("input", function () {
  m = this.value;
});
seconds_input.addEventListener("input", function () {
  s = this.value;
});

function timer_stop() {
  clearInterval(timerInterval);
  clearInterval(beepInterval);
  timer_button.textContent = "Start";
  timer_button.setAttribute("onclick", "timer_start()");

  seconds_input.value = s;
  minutes_input.value = m;
  hours_input.value = h;

  addZero();
  Array.from(timer_containers).forEach(
    (container) => (container.disabled = false)
  );
}

function timer_start() {
  console.log("here");
  timer_button.textContent = "Stop!";
  timer_button.setAttribute("onclick", "timer_stop()");
  // timer_button.classList.add('stop')
  // timer_button.onclick(() => console.log('asdasdasd'))
  Array.from(timer_containers).forEach(
    (container) => (container.disabled = true)
  );
  timerInterval = setInterval(function () {
    hours = hours_input.value;
    minutes = minutes_input.value;
    seconds = seconds_input.value;

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
          clearInterval(timerInterval);
          Array.from(timer_containers).forEach(
            (container) => (container.disabled = false)
          );
          beepInterval = setInterval(beep, 500);
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
}

Array.from(timer_containers).forEach(function (container) {
  console.log(container);
  container.oninput = function () {
    var max = parseInt(this.max);

    if (parseInt(this.value) > max) {
      this.value = max;
    }
    // if (parseInt(this.value, 10) < 10) this.value = "0" + this.value;
  };
});
function beep() {
  var snd = new Audio(
    "data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU="
  );
  snd.play();
}
