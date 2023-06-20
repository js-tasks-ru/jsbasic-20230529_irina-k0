function hideSelf() {
  let button = document.getElementsByClassName('hide-self-button')[0];

  button.addEventListener("click",  function() {
    button.hidden = true;
  });
}
