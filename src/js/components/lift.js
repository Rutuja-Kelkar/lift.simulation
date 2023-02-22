function generateLiftElement() {
  const lift = document.createElement("div");
  lift.style.backgroundColor = "red";
  lift.style.border = "2px solid green";
  lift.style.padding = "4px";
  lift.style.height = "100px";
  lift.style.width = "100px";
  lift.style.position = "absolute";
  lift.style.top = "150px";
  lift.style.left = "250px";
  lift.setAttribute("id", "liftObject");

  document.body.appendChild(lift);

  return lift;
}

export { generateLiftElement };
