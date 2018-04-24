ENGINE.init(function()
{
  ENGINE.ticketing.onClose(function(min, max)
  {
    $("#progress").width(((100.0 / max) * min) + "%");
  });

  // Bind to element
  ENGINE.binding.bind("#container");

  // Load menus
  ENGINE.menu.load("main");
  ENGINE.menu.load("console");

  // Load materials
  ENGINE.material.loadCube("plains");

  ENGINE.material.load("ground");

  ENGINE.material.load("fins2");
  ENGINE.material.load("shadow");

  ENGINE.material.load("vitsippa");

  ENGINE.material.load("bob2");

  ENGINE.material.load("rock");
  ENGINE.material.load("rock-normal");

  ENGINE.material.load("leaves");
  ENGINE.material.load("branch");
  ENGINE.material.load("cap");

  ENGINE.material.load("diffuse-birch");
  ENGINE.material.load("normal-birch");

  ENGINE.material.load("grey");
  ENGINE.material.load("normal");
  ENGINE.material.load("occlusion");

  ENGINE.material.load("ray");

  // Load shaders
  ENGINE.shader.loadPair("flower");
  ENGINE.shader.loadPair("grass");
  ENGINE.shader.loadPair("particle");
  ENGINE.shader.loadPair("ray");
  ENGINE.shader.loadPair("tree");

  // Load models
  ENGINE.model.load("tree");
  ENGINE.model.load("butterfly");

  // Load sounds
  ENGINE.sound.load("ambient");

  // Connect to backend
  ENGINE.network.connect("http://127.0.0.1:88");
  //ENGINE.network.connect("http://fw.kthx.at:88");

  // Assign controls
  ENGINE.controls.assign(ENGINE.controls.key.F5, function()
  {
    window.location.reload();
  });

  // Load game components
  ENGINE.components.load("js/game/components/", [
    "constant",
    "variable",
    "commands",
    "network",
    "authentication",
    "controls",
    "players",
    "frame",
    "start",
    "scene",
    "camera",
    "particles",
    "butterfly",
    "physics",
    "grass",
    "trees",
    "rays"
  ]);
});

ENGINE.ready(function()
{
  if (ENGINE.hasWebGL)
  {
    GAME.start();
  }
  else
  {
    ENGINE.notify.error("WebGL not supported");
  }
});
