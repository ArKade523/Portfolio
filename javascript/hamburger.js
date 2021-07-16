function hamburger()
  var x = document.getElementById("top-bar");
  if (x.className === "topbar") {
    x.className += " responsive";
  } else {
    x.className = "topbar";
  }
}
