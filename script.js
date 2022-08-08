var kata = "";
var i,
  checkboxes = document.querySelectorAll("input");

var snd = new Audio("assets/alarm.wav");

widgets = document.getElementsByClassName("widget");
Array.from(widgets).forEach((widget) => dragElement(widget));

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
kana_obj = {
  ア: "a",
  あ: "a",
  イ: "i",
  い: "i",
  ウ: "u",
  う: "u",
  エ: "e",
  え: "e",
  オ: "o",
  お: "o",
  カ: "ka",
  か: "ka",
  ガ: "ga",
  が: "ga",
  キ: "ki",
  き: "ki",
  ギ: "gi",
  ぎ: "gi",
  ク: "ku",
  く: "ku",
  グ: "gu",
  ぐ: "gu",
  ケ: "ke",
  け: "ke",
  ゲ: "ge",
  げ: "ge",
  コ: "ko",
  こ: "ko",
  ゴ: "go",
  ご: "go",
  キャ: "kya",
  きゃ: "kya",
  ギャ: "gya",
  ぎゃ: "gya",
  キュ: "kyu",
  きゅ: "kyu",
  ギュ: "gyu",
  ぎゅ: "gyu",
  キョ: "kyo",
  きょ: "kyo",
  ギョ: "gyo",
  ぎょ: "gyo",
  サ: "sa",
  さ: "sa",
  ザ: "za",
  ざ: "za",
  シ: "shi",
  し: "shi",
  ジ: "ji",
  じ: "ji",
  ス: "su",
  す: "su",
  ズ: "zu",
  ず: "zu",
  セ: "se",
  せ: "se",
  ゼ: "ze",
  ぜ: "ze",
  ソ: "so",
  そ: "so",
  ゾ: "zo",
  ぞ: "zo",
  シャ: "sha",
  しゃ: "sha",
  ジャ: "ja",
  じゃ: "ja",
  シュ: "shu",
  しゅ: "shu",
  ジュ: "ju",
  じゅ: "ju",
  ショ: "sho",
  しょ: "sho",
  ジョ: "jo",
  じょ: "jo",
  タ: "ta",
  た: "ta",
  ダ: "da",
  だ: "da",
  チ: "chi",
  ち: "chi",
  ヂ: "ji",
  ぢ: "ji",
  ツ: "tsu",
  つ: "tsu",
  ヅ: "zu",
  づ: "zu",
  テ: "te",
  て: "te",
  デ: "de",
  で: "de",
  ト: "to",
  と: "to",
  ド: "do",
  ど: "do",
  チャ: "cha",
  ちゃ: "cha",
  ヂャ: "ja",
  ぢゃ: "ja",
  チュ: "chu",
  ちゅ: "chu",
  ヂュ: "jo",
  ぢゅ: "ju",
  チョ: "cho",
  ちょ: "cho",
  ぢょ: "jo",
  ナ: "na",
  な: "na",
  ニ: "ni",
  に: "ni",
  ヌ: "nu",
  ぬ: "nu",
  ネ: "ne",
  ね: "ne",
  ノ: "no",
  の: "no",
  ニャ: "nya",
  にゃ: "nya",
  ニュ: "nyu",
  にゅ: "nyu",
  ニョ: "nyo",
  にょ: "nyo",
  ハ: "ha",
  は: "ha",
  バ: "ba",
  ば: "ba",
  パ: "pa",
  ぱ: "pa",
  ヒ: "hi",
  ひ: "hi",
  ビ: "bi",
  び: "bi",
  ピ: "pi",
  ぴ: "pi",
  フ: "fu",
  ふ: "fu",
  ブ: "bu",
  ぶ: "bu",
  プ: "pu",
  ぷ: "pu",
  ヘ: "he",
  へ: "he",
  ベ: "be",
  べ: "be",
  ペ: "pe",
  ぺ: "pe",
  ホ: "ho",
  ほ: "ho",
  ボ: "bo",
  ぼ: "bo",
  ポ: "po",
  ぽ: "po",
  ヒャ: "hya",
  ひゃ: "hya",
  ビャ: "bya",
  びゃ: "bya",
  ピャ: "pya",
  ぴゃ: "pya",
  ヒュ: "hyu",
  ひゅ: "hyu",
  ビュ: "byu",
  びゅ: "byu",
  ピュ: "pyu",
  ぴゅ: "pyu",
  ヒョ: "hyo",
  ひょ: "hyo",
  ビョ: "byo",
  びょ: "byo",
  ピョ: "pyo",
  ぴょ: "pyo",
  マ: "ma",
  ま: "ma",
  ミ: "mi",
  み: "mi",
  ム: "mu",
  む: "mu",
  メ: "me",
  め: "me",
  モ: "mo",
  も: "mo",
  ミャ: "mya",
  みゃ: "mya",
  ミュ: "myu",
  みゅ: "myu",
  ミョ: "myo",
  みょ: "myo",
  ヤ: "ya",
  や: "ya",
  ユ: "yu",
  ゆ: "yu",
  ヨ: "yo",
  よ: "yo",
  ラ: "ra",
  ら: "ra",
  リ: "ri",
  り: "ri",
  ル: "ru",
  る: "ru",
  レ: "re",
  れ: "re",
  ロ: "ro",
  ろ: "ro",
  リャ: "rya",
  りゃ: "rya",
  リュ: "ryu",
  りゅ: "ryu",
  リョ: "ryo",
  りょ: "ryo",
  ワ: "wa",
  わ: "wa",
  ヲ: "wo",
  を: "wo",
  ン: "n",
  ん: "n",
};
katakana = Object.keys(kana_obj);
kat_input = document.getElementById("kat_input");
hint = document.getElementById("hint");
get_random_character();

timer_containers = document.getElementsByClassName("timer_container");
timer_button = document.getElementById("timer_start");

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
      hint.textContent = kana_obj[kata];
      hint.classList.add("hint_shown");
      hint.classList.remove("hint_hidden");
      delay(500).then(function () {
        hint.classList.remove("hint_shown");
        hint.classList.add("hint_hidden");
        delay(200).then(() => (hint.textContent = ""));
      });
    }
  } else if ([].slice.call(timer_containers).includes(document.activeElement)) {
    if (e.key === "Enter") {
      timer_button.click();
    }
  } else if (e.key == "t") {
    timer_button.click();
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
  timer_button.setAttribute("onclick", "timer_start()");

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
  timer_button.setAttribute("onclick", "timer_stop()");
  // timer_button.classList.add('stop')
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

Array.from(widgets).forEach(function (widget) {
  const corner = document.createElement("div");
  corner.classList.add("corner");
  corner.id = widget.id + "_corner";
  // corner. = function () {
  //   widget.style.transform = "scale(1.5)";
  // };
  var posX = 0;
  var posY = 0;
  var scale = 1;

  corner.addEventListener(
    "mousedown",
    function (e) {
      posX = e.clientX;
      posY = e.clientY;
      window.addEventListener("mousemove", mousemove);

      window.addEventListener("mouseup", function (e) {
        window.removeEventListener("mousemove", mousemove);
        scale = Number(widget.style.transform.replace(/[^0-9\.]+/g, ""));
      });

      function mousemove(e) {
        currentX = posX - e.clientX;
        currentY = e.clientY - posY;
        widget.style.transform = `scale(${Math.max(
          scale + currentY * 0.017,
          scale + currentX * 0.017
        )})`;
      }
    }
    // false
  );
  widget.appendChild(corner);
});

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
    e.srcElement.classList.add("dragging")
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
    document.getElementsByClassName("dragging")[0].classList.remove("dragging")
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

date = new Date();
day = date.getDay();
// day = 1;
// day_number =  8;
day_number = date.getUTCDate();
last_day = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
calendarDays = document.getElementsByTagName("td");
extra_day = 1;
start = false;
increase = false;
var selected_days = [];
if (localStorage.selected_days != null) {
  selected_days = JSON.parse(localStorage.getItem("selected_days"));
}
Array.from(calendarDays).forEach(function (el) {
  if (el.id == day) {
    el.classList.add("today");
    start = true;
  } else {
    el.classList.remove("today");
  }
  if (start == true) {
    el.textContent = day_number;
    day_number++;
    if (day_number == last_day + 2) {
      start = false;
      increase = true;
      el.classList.add("over");
    }
  } else {
    el.textContent = "x";
    el.classList.add("over");
    el.classList.add("disabled");
  }
  if (start == true) {
    el.id = date.toDateString();
    date.setDate(date.getDate() + 1);
  }

  if (increase == true) {
    el.classList.remove("disabled");
    el.textContent = extra_day;
    extra_day++;
    el.id = date.toDateString();
    date.setDate(date.getDate() + 1);
  }
  if (selected_days.includes(el.id)) {
    el.classList.add("selected");
  }
  el.addEventListener("mousedown", function () {
    if (el.classList.contains("selected")) {
      const index = selected_days.indexOf(el.id);
      selected_days.splice(index, 1);
    } else {
      selected_days.push(el.id);
    }
    el.classList.toggle("selected");
    localStorage.setItem("selected_days", JSON.stringify(selected_days));
  });
});
