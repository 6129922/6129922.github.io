$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(300, 0, 25, 200, "black");
createPlatform(10, 299, 200, 40, "blue");
createPlatform(300, 500, 200, 40, "red");
createPlatform(645, 400, 200, 40, "yellow");
createPlatform(1050, 490, 200, 40, "orange");
createPlatform(1130, 0, 25, 400, "white")
createPlatform(650, 600, 200, 40, "purple");



    // TODO 3 - Create Collectables
createCollectable("database", 385, 170, 0.5, 0.5);
createCollectable("max", 730, 170, 0.5, 0.5);
createCollectable("steve", 1089, 170, 0.5, 0.5);


    
    // TODO 4 - Create Cannons
createCannon("left", 400, 800);
createCannon("left", 650, 0.0);
createCannon("top", 460, 800);
createCannon("top", 800, 800);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
