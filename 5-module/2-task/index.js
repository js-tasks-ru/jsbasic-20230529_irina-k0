function toggleText() {
  let button = document.getElementsByClassName("toggle-text-button")[0];

  button.addEventListener("click", function() {
    let div = document.getElementById("text");
    div.hidden = !div.hidden;
  });
}
