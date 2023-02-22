const lift = document.createElement("div");
lift.style.backgroundColor = "red";
lift.style.border = "2px solid green";
lift.style.padding = "4px";
lift.style.height = "100px";
lift.style.width = "100px";
lift.style.position = "absolute";
lift.style.top = "500px";
lift.style.left = "100px";

lift.setAttribute("id", "liftObject");

function colorLift() {
  var lift = document.getElementById("liftObject");
  lift.style.backgroundColor = "green";
}

document.body.appendChild(lift);
