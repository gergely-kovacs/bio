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

<nav
  class="navbar navbar-expand-lg {$isDarkModeEnabled ? 'navbar-dark' : 'navbar-light'}">

  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#menu">
    <span class="navbar-toggler-icon" />
  </button>

  <div class="collapse navbar-collapse" id="menu">
    <div class="navbar-nav">
      <a
        class="nav-item nav-link text-center rounded-0"
        use:active
        href="#/">
        Intro
      </a>
      <a
        class="nav-item nav-link text-center rounded-0"
        use:active
        href="#/movies">
        Movies
      </a>
      <a
        class="nav-item nav-link text-center rounded-0"
        use:active
        href="#/music">
        Music
      </a>
      <a
        class="nav-item nav-link text-center rounded-0"
        use:active
        href="#/games">
        My games
      </a>
      <!-- <a
        class="nav-item nav-link text-center rounded-0"
        use:active
        href="#/gaming">
        Gaming
      </a> -->
      <!-- <a
        class="nav-item nav-link text-center rounded-0"
        use:active
        href="#/hiking">
        Hiking
      </a> -->
      <!-- <a
        class="nav-item nav-link text-center rounded-0"
        use:active
        href="#/climbing">
        Climbing
      </a> -->
    </div>
    <label
      class="switch ml-auto mb-0 d-flex align-items-center {$isDarkModeEnabled ? 'bg-secondary' : 'bg-primary'}">
      <input
        type="checkbox"
        class="d-none"
        on:change={isDarkModeEnabled.toggle}
        checked />
      <span class="slider {$isDarkModeEnabled ? 'bg-light' : 'bg-warning'}" />
    </label>
  </div>
</nav>
