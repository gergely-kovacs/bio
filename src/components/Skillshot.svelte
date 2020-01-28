<script>
  import MobWarrior from "../../assets/mob_warrior.png";
  import Player from "../../assets/player.png";
  import { onMount, onDestroy } from "svelte";
  import {
    initMap,
    advanceMobs,
    advanceProjectiles,
    spawnMobs,
    spawnProjectileQ,
    detectHits,
    isLoseConditionMet,
    movePlayer
  } from "../services/skillshot.js";
  import { debounce } from "../services/common";

  const KEYCODES = Object.freeze({
    Q: 81,
    W: 87,
    E: 69,
    R: 82
  });

  let isErrorShown = false;
  let map = [];
  let keyDownHandler;
  let keyUpHandler;
  let mouseMoveHandler;
  let canvas;
  let context;
  let lastUpdate;
  let pressedKeys = {
    [KEYCODES.Q]: false,
    [KEYCODES.W]: false,
    [KEYCODES.E]: false,
    [KEYCODES.R]: false
  };
  let cursorPosition = {
    x: 0,
    y: 0
  };

  onMount(() => {
    canvas = document.getElementById("canvas");
    if (!isRunnable()) {
      showError();
      return;
    }
    context = canvas.getContext("2d");
    map = initMap();
    initControls();
    attachClickToStart();
    renderClickToStartText();
  });

  onDestroy(() => endGame());

  function isRunnable() {
    return !!canvas.getContext;
  }

  function showError() {
    isErrorShown = true;
  }

  function initControls() {
    const abilityKeys = Object.values(KEYCODES);

    keyDownHandler = event => {
      if (event.keyCode === 65) {
        movePlayer(map, "left");
      }
      if (event.keyCode === 68) {
        movePlayer(map, "right");
      }
      if (abilityKeys.includes(event.keyCode) && !pressedKeys[event.keyCode]) {
        pressedKeys[event.keyCode] = true;
      }
    };

    keyUpHandler = event => {
      if (abilityKeys.includes(event.keyCode) && pressedKeys[event.keyCode]) {
        pressedKeys[event.keyCode] = false;
      }
      if (event.keyCode === KEYCODES.Q) {
        map = spawnProjectileQ(map, cursorPosition);
      }
    };

    mouseMoveHandler = event => {
      cursorPosition = {
        x: event.offsetX,
        y: event.offsetY
      };
    };

    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyUpHandler);
    canvas.addEventListener("mousemove", mouseMoveHandler);
  }

  function endGame() {
    document.removeEventListener("keydown", keyDownHandler);
    document.removeEventListener("keyup", keyUpHandler);
    canvas.removeEventListener("mousemove", mouseMoveHandler);
  }

  function clickToStart(event) {
    gameLoop();
    canvas.removeEventListener("click", clickToStart);
  }

  function attachClickToStart() {
    canvas.addEventListener("click", clickToStart);
  }

  function renderClickToStartText() {
    context.font = "50px serif";
    context.fillStyle = "black";
    context.fillText("Click to start!", 45, 90);
  }

  function renderGameOverText() {
    context.font = "50px serif";
    context.fillStyle = "black";
    context.fillText("Game Over", 50, 90);
  }

  function gameLoop(elapsedTime) {
    if (!lastUpdate && elapsedTime) {
      lastUpdate = elapsedTime;
    }

    const delta = elapsedTime - lastUpdate || 16.67;

    updateState(delta);
    renderState();

    if (isLoseConditionMet(map)) {
      renderGameOverText();
      endGame();
      return;
    }

    lastUpdate = elapsedTime;
    requestAnimationFrame(gameLoop);
  }

  function updateState(delta) {
    map = advanceMobs(map, delta);
    map = advanceProjectiles(map, delta);
    map = detectHits(map);
    map = spawnMobs(map);
  }

  function renderState() {
    clearCanvas();
    renderPlayer();
    renderMobs();
    renderSkillCues();
    renderProjectiles();
  }

  function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  function renderPlayer() {
    const playerImage = new Image();
    playerImage.src = Player;
    const player = map.find(entity => entity.type === "player");
    context.drawImage(playerImage, player.position.x, player.position.y);
  }

  function renderMobs() {
    const warriorImage = new Image();
    warriorImage.src = MobWarrior;
    const mobs = map.filter(entity => entity.type === "mob_warrior");
    mobs.forEach(mob => {
      context.drawImage(warriorImage, mob.position.x, mob.position.y);
    });
  }

  function renderSkillCues() {
    const player = map.find(entity => entity.type === "player");
    if (pressedKeys[KEYCODES.Q]) {
      context.beginPath();
      context.moveTo(player.position.x + 16, player.position.y);
      context.lineTo(cursorPosition.x, cursorPosition.y);
      context.strokeStyle = "blue";
      context.lineWidth = 4;
      context.stroke();
    }
  }

  function renderProjectiles() {
    const projectiles = map.filter(entity => entity.type === "projectile_q");
    projectiles.forEach(projectile => {
      context.lineWidth = 4;
      context.strokeStyle = "black";
      context.beginPath();
      context.moveTo(projectile.position.x, projectile.position.y);
      context.arc(
        projectile.position.x,
        projectile.position.y,
        2,
        0,
        2 * Math.PI
      );
      context.stroke();
    });
  }
</script>

<style>

</style>

<div class="container">
  <h4>Skillshot warmup (WIP)</h4>
  <p>
    This game is made to help you warm up for skillshots in MOBA games.
    <br />
    You can move your character left and right with the A and D keys.
    <br />
    You'll be able to shoot several kinds of skillshots with Q, W, E, and R.
    (W, E, R are not yet implemented)
  </p>
  <div class="text-center">
    {#if isErrorShown}
      <div>
        Canvas seems to be disabled (or unsupported) in your browser, sorry!
      </div>
    {/if}
    <canvas id="canvas" class="border" width="352" height="352" />
  </div>
</div>
