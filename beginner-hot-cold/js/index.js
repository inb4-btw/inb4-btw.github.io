var points = document.getElementsByClassName("center-point");
for (var i = 0; i < points.length; i++) {
  var zonesHtml = '<div class="zones"><div class="zone visibly-shaking"></div><div class="zone incredibly-hot"></div><div class="zone very-hot"></div><div class="zone hot"></div><div class="zone warm"></div><div class="zone cold"></div><div class="zone very-cold hidden"></div></div>'
  points[i].innerHTML = zonesHtml;
}
applyCheckboxListeners();
function applyCheckboxListeners() {
  var els = document.getElementsByTagName("input");
  for (var i = 0; i < els.length; i++) {
    els[i].addEventListener("click", checkboxClicked, false);
  }
}

function checkboxClicked(evt) {
  var toggleEl;
  var el = evt.target;
  var dataTarget = el.getAttribute("data-target")
  if(el.classList.contains("zonetype-toggle")) {
    console.log("zone type toggle");
    var toggleEl = document.getElementsByClassName(dataTarget);
  } else if(el.classList.contains("zonegroup-toggle")) {
    console.log("entire zone group toggle");
    var toggleEl = [document.getElementById(dataTarget)];
  }
 
  if(toggleEl) {
    console.log(toggleEl.length);
    for (var i = 0; i < toggleEl.length; i++) {
      toggleEl[i].classList.toggle("hidden")
    }
  }
}

document.getElementById("zone-ice-mountain").scrollIntoView();