function toggle(element) {
  var e = document.getElementById(element);
  if(e.style.display == "block") {
    e.style.display = "none";
  } else {
    e.style.display = "block";
  }
};