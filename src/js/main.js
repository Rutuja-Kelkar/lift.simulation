const lift = document.createElement("div");
lift.style.backgroundColor = "red";
lift.style.border = "2px solid green";
lift.style.padding = "4px";
lift.style.height = "100px";
lift.style.width = "100px";
lift.style.position = "absolute";
lift.style.top = "200px";
lift.style.left = "100px";

lift.setAttribute("id", "liftObject");

function moveLiftUp() {
  var lift = document.getElementById("liftObject");
  lift.style.top = lift.offsetTop + 10 + "px";
}

function moveLiftDown() {
  var lift = document.getElementById("liftObject");
  lift.style.top = lift.offsetTop - 10 + "px";
}

document.body.appendChild(lift);
