<script>
  import { onMount } from "svelte";
  import active from "svelte-spa-router/active";
  import { isDarkModeEnabled } from "../stores/theme";

  onMount(() => isDarkModeEnabled.toggle({ target: { checked: true } }));
</script>

<style>
  .switch {
    width: 3.5em;
    height: 2em;
    border-radius: 2em;
  }

  .slider {
    width: 1.5em;
    height: 1.5em;
    border-radius: 1.5em;
    margin-left: 0.25em;
    transition: 0.33s;
    cursor: pointer;
  }

  input:checked + .slider {
    transform: translateX(1.5em);
  }
</style>

<div class="navbar px-0 pt-0 pb-4">
  <nav class="nav nav-pills w-75">
    <a class="nav-link col text-center rounded-0" use:active href="#/">Intro</a>
    <a class="nav-link col text-center rounded-0" use:active href="#/movies">
      Movies
    </a>
    <a class="nav-link col text-center rounded-0" use:active href="#/music">
      Music
    </a>
    <a class="nav-link col text-center rounded-0" use:active href="#/gaming">
      Gaming
    </a>
    <a class="nav-link col text-center rounded-0" use:active href="#/hiking">
      Hiking
    </a>
    <a class="nav-link col text-center rounded-0" use:active href="#/climbing">
      Climbing
    </a>
  </nav>
  <label
    class="mb-0 switch d-flex align-items-center {$isDarkModeEnabled ? 'bg-secondary' : 'bg-primary'}">
    <input
      type="checkbox"
      class="d-none"
      on:change={isDarkModeEnabled.toggle}
      checked />
    <span class="slider {$isDarkModeEnabled ? 'bg-light' : 'bg-warning'}" />
  </label>
</div>
