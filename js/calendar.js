const date = new Date();
var day = date.getDay();
// day = 1;
// day_number =  8;
var day_number = date.getUTCDate();
var last_day = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
var calendarDays = document.getElementsByTagName("td");
var extra_day = 1;
var start = false;
var increase = false;
var selected_days = [];
if (localStorage.selected_days != null) {
  selected_days = JSON.parse(localStorage.getItem("selected_days"));
}
Array.from(calendarDays).forEach(function (el) {
  console.log(el.id);
  if (start == false && el.id == day) {
    el.classList.add("today");
    start = true;
  } else {
    el.classList.remove("today");
  }
  if (start == true) {
    el.textContent = day_number;
    day_number++;
    if (day_number == last_day + 2) {
      // start = false;
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
    el.classList.add("over");
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
