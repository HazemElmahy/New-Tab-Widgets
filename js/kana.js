import kana_obj from "../data/kana.json" assert { type: "json" };

var kata = "";

const katakana = Object.keys(kana_obj);
const kat_input = document.getElementById("kat_input");
const hint = document.getElementById("hint");
const meaningElement = document.getElementById("meaning");
get_random_character();

function set_random_character() {
  // var keys = Object.keys(katakana);
  var random_index = Math.random()
  random_index = random_index * random_index ;
  random_index = Math.floor(random_index * katakana.length)
  kata = katakana[random_index];
  if (kana_obj[kata].wk_meanings) {
    meaning.textContent = kana_obj[kata].wk_meanings
  } else {
    meaning.textContent = ""
  }
  // answer = katakana[random_katakana];

  //   random_katakana = katakana[keys[(keys.length * Math.random()) << 0]];
  const katakana_holder = document.getElementById("katakana_char");
  katakana_holder.textContent = kata;
}

document.onkeydown = function (e) {
  e = e || window.event;
  // use e.keyCode
  if (e.ctrlKey & e.shiftKey & e.altKey) {
console.log(katakana.length)
    if (kana_obj[kata].readings_kun) {
      hint.textContent = kana_obj[kata].readings_kun + '-' + kana_obj[kata].readings_on
    } else if (kana_obj[kata].readings_on)  {
      hint.textContent = kana_obj[kata].readings_on
    } else if (kana_obj[kata].hint) {
      hint.textContent = kana_obj[kata].hint
    }
  } 
};



var inputtedCharacters = 0;

function get_random_character() {
  set_random_character();
  kat_input.addEventListener("input", function () {
    if (/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/.test(this.value.charAt(this.value.length-1))) {
      inputtedCharacters = parseInt(inputtedCharacters) + 1;
    }
    var inputCount = document.getElementById("kana-count");
    if (this.value.toUpperCase() == kata) {
      kat_input.style.backgroundColor = "#99ef99";
      kat_input.disabled = true;
      meaningElement.classList.add("small")
      var scoreElement = document.getElementById("kana-score");
      hint.textContent = ""
      if (!scoreElement) {
          scoreElement = document.createElement("div");
          scoreElement.setAttribute("id", "kana-score");
          scoreElement.className="light"
          inputCount = document.createElement("span");
          inputCount.setAttribute("id", "kana-count");
          document.body.appendChild(scoreElement);
          var scoreText = document.createElement("span");
          scoreElement.appendChild(scoreText)
          scoreText.textContent = 1;
          scoreElement.appendChild(inputCount)
          inputCount.textContent = inputtedCharacters;
        } else {
          scoreElement.children[0].textContent = parseInt(scoreElement.children[0].textContent) + 1;
        scoreElement.classList.add("light")
        }
      delay(1000).then(function () {
        if (scoreElement) {
          scoreElement.classList.remove("light")
        }
        meaningElement.classList.remove("small")
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
        var scoreElement = document.getElementById("kana-score");
      }
    }
    if (inputCount) {
      inputCount.textContent = inputtedCharacters;
    }
  });
}
