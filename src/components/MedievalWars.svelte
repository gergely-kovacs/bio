<script>
  import MobWarrior from "../../assets/mob_warrior.png";
  import Player from "../../assets/player.png";
  import { onMount, onDestroy } from "svelte";
  import {
    initMap,
    advanceMobs,
    spawnMobs,
    isLoseConditionMet,
    movePlayer
  } from "../services/medieval-wars.js";
  import { debounce } from "../services/common";

  let isErrorShown = false;
  let map = [];
  let controls;
  let canvas;
  let context;
  let lastUpdate;

  onMount(() => {
    canvas = document.getElementById("canvas");
    if (!isRunnable()) {
      showError();
      return;
    }
    context = canvas.getContext("2d");
    map = initMap();
    initControls();
    gameLoop();
  });

  onDestroy(() => endGame());

  function isRunnable() {
    return !!canvas.getContext;
  }

  function showError() {
    isErrorShown = true;
  }

  function initControls() {
    controls = event => {
      if (event.keyCode === 65) {
        movePlayer(map, "left");
      }
      if (event.keyCode === 68) {
        movePlayer(map, "right");
      }
      if (event.keyCode === 81) {
        alert("The 'Q' key was pressed.");
      }
    };
    document.addEventListener("keydown", controls);
  }

  function endGame() {
    document.removeEventListener("keydown", controls);
  }

  function renderGameOverText() {
    context.font = "50px serif";
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
    map = spawnMobs(map);
  }

  function renderState() {
    clearCanvas();
    renderPlayer();
    renderMobs();
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
</script>

<style>

</style>

<div class="container">
  <h4>Medieval Wars</h4>
  <p>
    Your task is do defend against the attackers using your bow and arrows.
    <br />
    You can move your character (at the bottom) left and right with the A and D
    keys.
    <br />
    You can shoot an arrow with the Space key.
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
