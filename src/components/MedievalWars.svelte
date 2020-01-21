<script>
  import MobWarrior from "../../assets/mob_warrior.png";
  import Player from "../../assets/player.png";
  import { onMount, onDestroy } from "svelte";
  import {
    initMap,
    advanceMobs,
    spawnMobs,
    isLoseConditionMet
  } from "../services/medieval-wars.js";

  let isErrorShown = false;
  let map = [[]];
  let tickTask;

  onMount(() => {
    map = initMap();
    tickTask = setInterval(advanceTime, 500);
  });

  onDestroy(() => clearInterval(tickTask));

  function advanceTime() {
    const canvas = document.getElementById("canvas");
    if (!canvas.getContext) {
      isErrorShown = true;
      clearInterval(tickTask);
      return;
    }

    const context = canvas.getContext("2d");

    map = advanceMobs(map);
    map = spawnMobs(map);
    clearCanvas(canvas, context);
    renderPlayer(context);
    renderMobs(context);

    if (isLoseConditionMet(map)) {
      context.font = '50px serif';
      context.fillText("Game Over", 50, 90);
      clearInterval(tickTask);
    }

    console.log("tickin");
  }

  function clearCanvas(canvas, context) {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  function renderPlayer(context) {
    const player = new Image();
    player.src = Player;
    context.drawImage(player, 160, 320);
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
