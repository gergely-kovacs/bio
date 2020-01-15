<script>
  import { onMount } from "svelte";
  import { generateQueryUrls } from "../services/movies";
  import { isDarkModeEnabled } from "../stores/theme";

  let movies = [];

  onMount(async () => {
    const queryUrls = generateQueryUrls();
    const requests = queryUrls.map(url => fetch(url));
    const responses = await Promise.all(requests);
    const objects = responses.map(response => response.json());
    movies = await Promise.all(objects);
  });
</script>

<style>

</style>

<div class="container">
  <h4>Genres</h4>
  My favorite genres in order are:
  <ol>
    <li>Drama</li>
    <li>Comedy</li>
    <li>Documentary</li>
    <li>Action</li>
  </ol>
  <h4 class="mt-4">Films</h4>
  You can check out the complete list of my favorites
  <a href="https://www.imdb.com/list/ls093225661/">here.</a>
  <br />
  Here's my top 5 as a preview:
  <table
    class="table table-borderless {$isDarkModeEnabled ? 'table-dark' : ''}">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Poster</th>
        <th scope="col">Title (Year)</th>
        <th scope="col">Director</th>
        <th scope="col">Actors</th>
        <th scope="col">Plot</th>
      </tr>
    </thead>
    <tbody>
      {#each movies as movie, index}
        <tr>
          <th scope="row">{index + 1}</th>
          <td>
            <img src={movie.Poster} alt={movie.Title} />
          </td>
          <td>{movie.Title} ({movie.Year})</td>
          <td>{movie.Director}</td>
          <td>{movie.Actors}</td>
          <td>{movie.Plot}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
