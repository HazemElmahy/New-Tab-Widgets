kata = "";
var i,
  checkboxes = document.querySelectorAll("input");
dragElement(document.getElementById("kana_widget"));

katakana = [
  "ア",
  "エ",
  "イ",
  "ウ",
  "オ",
  "ラ",
  "レ",
  "リ",
  "ル",
  "ロ",
  "タ",
  "テ",
  "チ",
  "ツ",
  "ト",
  "サ",
  "セ",
  "シ",
  "ス",
  "ソ",
  "ハ",
  "ヘ",
  "ヒ",
  "フ",
  "ホ",
  "カ",
  "ケ",
  "キ",
  "ク",
  "コ",
  "ナ",
  "ネ",
  "ニ",
  "ヌ",
  "ノ",
  "マ",
  "メ",
  "ミ",
  "ム",
  "モ",
  "ヤ",
  "ユ",
  "ヨ",
  "ワ",
  "ヲ",
  "ン",
];
kat_input = document.getElementById("kat_input");
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

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
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
