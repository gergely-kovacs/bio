<script>
  import { onMount } from "svelte";
  import active from "svelte-spa-router/active";

  const DARK_THEME_CLASSES = ["bg-dark", "text-light"];
  const LIGHT_THEME_CLASSES = ["bg-light", "text-dark"];

  onMount(() =>
    toggleTheme({
      target: {
        checked: true
      }
    })
  );

  function toggleTheme(event) {
    const isDarkThemeEnabled = event.target.checked;
    const classesToAdd = isDarkThemeEnabled
      ? DARK_THEME_CLASSES
      : LIGHT_THEME_CLASSES;
    const classesToRemove = !isDarkThemeEnabled
      ? DARK_THEME_CLASSES
      : LIGHT_THEME_CLASSES;
    document.querySelector("body").classList.add(...classesToAdd);
    document.querySelector("body").classList.remove(...classesToRemove);
  }
</script>

<style>
  .switch {
    width: 3.5em;
    height: 2em;
    border-radius: 2em;
    background-color: #777;
  }

  .slider {
    width: 1.5em;
    height: 1.5em;
    border-radius: 1.5em;
    margin-left: 0.25em;
    transition: 0.25s;
    cursor: pointer;
    background-color: #2196f3;
  }

  input:checked + .slider {
    transform: translateX(1.5em);
    background-color: #222;
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
  <label class="mb-0 switch d-flex align-items-center">
    <input type="checkbox" class="d-none" on:change={toggleTheme} checked />
    <span class="slider" />
  </label>
</div>
