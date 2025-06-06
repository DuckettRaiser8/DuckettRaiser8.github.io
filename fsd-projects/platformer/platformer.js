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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(200, 630, 20, 40, "brown");
    createPlatform(250, 500, 20, 40, "brown");
    createPlatform(300, 370, 20, 40, "brown");
    createPlatform(400, 240, 400, 40, "brown");
    createPlatform(900, 110, 200, 40, "brown");
    createPlatform(850, 300, 100, 40, "brown");
    createPlatform(950, 490, 100, 40, "brown");
    createPlatform(500, 450, 200, 40, "brown");
    createPlatform(750, 530, 100, 40, "brown");
    createPlatform(1200, 200, 100, 40, "brown");
    createPlatform(1100, 400, 200, 40, "brown");
    createPlatform(1200, 600, 40, 100, "brown");
    createPlatform(1240, 700, 100, 40, "brown");
    createPlatform(1340, 600, 40, 100, "brown");



    // TODO 3 - Create Collectables
    createCollectable("dogtoy", 600, 400)
    

    // TODO 4 - Create Cannons
    createCannon("bottom", 550, 800);
    createCannon("right", 170, 2000);
    createCannon("top", 300, 3000);
    createCannon("right", 450, 2000);


    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
