<script>
  import { onMount } from "svelte";

  const QUERY_URL = `https://www.googleapis.com/youtube/v3/playlists
?part=snippet, contentDetails
&channelId=UCOleUkXcWkFBO8rLB_8H1AA
&maxResults=18
&key=AIzaSyB2MbgK-YueAQpKVm5IFkejmlq0qVX9mns`;

  let playlists = [];

  onMount(async () => {
    const response = await fetch(QUERY_URL);
    const responseJson = await response.json();
    playlists = responseJson.items.sort(
      (a, b) => b.contentDetails.itemCount - a.contentDetails.itemCount
    );
    playlists = playlists.map(playlist => {
      return {
        ...playlist,
        shouldLoad: false
      };
    });
  });
</script>

<style>

</style>

<div class="container">
  I don't play any instruments myself, but I really appreciate all the work
  artists are doing.
  <br />
  I enjoy most kinds of music, but liquid drum and bass is probably my favorite.
  <br />
  I made a few playlists, if you also enjoy, or you're curious about some of
  these genres, check them out on
  <a href="https://www.youtube.com/user/MrVarmi/playlists">YouTube!</a>
  <br />
  Alternatively, you can click the 'Embed' buttons below to load them
  individually on this site.
  <br />
  {#each playlists as list}
    <h4 class="mt-3">{list.snippet.title}</h4>
    {#if !list.shouldLoad}
      <button
        type="button"
        class="btn btn-secondary mb-2"
        on:click={() => {
          list.shouldLoad = true;
        }}>
        Embed
      </button>
    {:else}
      <iframe
        title={list.snippet.title}
        width="640"
        height="360"
        src="https://www.youtube.com/embed/videoseries?list={list.id}"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen />
    {/if}
  {/each}
</div>
