const today = new Date();
const today_str = today.toDateString();

const done_it_btn = document.getElementById("done_it");
const task_1_input = document.getElementById("task1");

var done_it = false;
if (localStorage["done_it_" + today_str]) {
  var done_it = JSON.parse(localStorage["done_it_" + today_str]);
}

task_1_input.checked = done_it;

done_it_btn.addEventListener("click", function () {
  localStorage["done_it_" + today_str] = task_1_input.checked;
});
