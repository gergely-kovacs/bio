<script>
  import active from "svelte-spa-router/active";
</script>

<style>

</style>

<div class="navbar">
  <nav class="nav nav-pills">
    <a class="nav-link" use:active href="#/">Intro</a>
    <a class="nav-link" use:active href="#/movies">Movies</a>
    <a class="nav-link" use:active href="#/music">Music</a>
    <a class="nav-link" use:active href="#/gaming">Gaming</a>
    <a class="nav-link" use:active href="#/hiking">Hiking</a>
    <a class="nav-link" use:active href="#/climbing">Climbing</a>
  </nav>
</div>
