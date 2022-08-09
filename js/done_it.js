const today = new Date();
const today_str = today.toDateString();

const done_it_btn = document.getElementById("done_it");
const task_1_input = document.getElementById("task1");
const reminder_text = document.getElementsByClassName("reminder_text")[0];

var done_it = false;

if (localStorage["done_it_" + today_str]) {
  var done_it = JSON.parse(localStorage["done_it_" + today_str]);
}

if (done_it) {
  console.log(reminder_text.classList);
  reminder_text.classList.add("hidden");
  console.log(reminder_text.classList);
}

task_1_input.checked = done_it;

done_it_btn.addEventListener("click", function () {
  localStorage["done_it_" + today_str] = task_1_input.checked;
  if (task_1_input.checked) {
    reminder_text.classList.add("hidden");
  } else {
    reminder_text.classList.remove("hidden");
  }
});
