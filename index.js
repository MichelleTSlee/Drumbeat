for (let i = 0; i < 3; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", () => {
    var audio = new Audio("sounds/audio" + i + ".wav");
    document.querySelectorAll(".drum")[i].classList.add("gold_border");
    audio.play();
    setTimeout(function () {
      document.querySelectorAll(".drum")[i].classList.remove("gold_border");
    }, 300); //
  });
}
