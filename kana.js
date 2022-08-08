import kana_obj from "./kana.json" assert { type: "json" };

var kata = "";

const katakana = Object.keys(kana_obj);
const kat_input = document.getElementById("kat_input");
const hint = document.getElementById("hint");
get_random_character();

function set_random_character() {
  // var keys = Object.keys(katakana);
  kata = katakana[Math.floor(Math.random() * katakana.length)];
  // answer = katakana[random_katakana];

  //   random_katakana = katakana[keys[(keys.length * Math.random()) << 0]];
  const katakana_holder = document.getElementById("katakana_char");
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