var kata = "";
var i,
  checkboxes = document.querySelectorAll("input");
dragElement(document.getElementById("kana_widget"));
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
  } else if (e.ctrlKey && e.key == "m") {
    hint.textContent = katakana_obj[kata];
    hint.classList.add("hint_shown");
    hint.classList.remove("hint_hidden");
    delay(500).then(function () {
      hint.classList.remove("hint_shown");
      hint.classList.add("hint_hidden");
      delay(200).then(() => (hint.textContent = ""));
    });
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
