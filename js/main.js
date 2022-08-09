var i,
  checkboxes = document.querySelectorAll("input");

const widgets = document.getElementsByClassName("widget");
Array.from(widgets).forEach((widget) => dragElement(widget));

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

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
    e.srcElement.classList.add("dragging");
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
    document.getElementsByClassName("dragging")[0].classList.remove("dragging");
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
