for (let i = 0; i < 4; i++) {

  document.querySelectorAll(".instrument")[i].addEventListener("click", function(){

    var audio = new Audio("sounds/instrument" + (i) + ".wav");

    audio.play();
    });
  };
