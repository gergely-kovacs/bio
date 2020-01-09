<script>
  import Navbar from "./Navbar.svelte";
  import Intro from "./Intro.svelte";
  import Router from "svelte-spa-router";
  import { routes } from "../routes";
</script>

<style>

</style>

<Navbar />
<Router {routes} />
