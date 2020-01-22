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
  let map = [[]];
  let updateState;
  let renderState;
  let controls;

  onMount(() => {
    if (!isRunnable()) {
      showError();
      return;
    }
    map = initMap();
    initControls();
    updateState = setInterval(gameLoop, 500);
    renderState = setInterval(renderLoop, 125);
  });

  onDestroy(() => endGame());

  function isRunnable() {
    const canvas = document.getElementById("canvas");
    return !!canvas.getContext;
  }

  function showError() {
    isErrorShown = true;
  }

  function initControls() {
    controls = debounce(function(event) {
      if (event.keyCode === 65) {
        movePlayer(map, "left");
      }
      if (event.keyCode === 68) {
        movePlayer(map, "right");
      }
      if (event.keyCode === 32) {
        alert("The 'Space' key was pressed.");
      }
    }, 125);
    document.addEventListener("keydown", controls);
  }

  function endGame() {
    document.removeEventListener("keydown", controls);
    clearInterval(updateState);
    clearInterval(renderState);
  }

  function renderGameOverText() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.font = "50px serif";
    context.fillText("Game Over", 50, 90);
  }

  function gameLoop() {
    map = advanceMobs(map);
    map = spawnMobs(map);

    if (isLoseConditionMet(map)) {
      renderGameOverText();
      endGame();
    }
  }

  function renderLoop() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    clearCanvas(canvas, context);
    renderPlayer(context);
    renderMobs(context);
  }

  function clearCanvas(canvas, context) {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  function renderPlayer(context) {
    const player = new Image();
    player.src = Player;
    const playerPosition = map[10].indexOf("player");
    context.drawImage(player, 32 * playerPosition, 320);
  }

  function renderMobs(context) {
    const warrior = new Image();
    warrior.src = MobWarrior;
    map.forEach((row, rowIndex) => {
      row.forEach((cell, index) => {
        if (cell !== "mob_warrior") {
          return;
        }
        context.drawImage(warrior, 32 * index, 32 * rowIndex);
      });
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
