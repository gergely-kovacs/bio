<script>
  import { onMount } from "svelte";

  const QUERY_URL = `https://www.googleapis.com/youtube/v3/playlists
?part=snippet, contentDetails, player
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
  I have a few playlists on youtube, if you also enjoy some of these genres,
  <a href="https://www.youtube.com/user/MrVarmi/playlists">check them out!</a>
  <br />
  {#each playlists as list}
    <h4 class="mt-4">{list.snippet.title}</h4>
    {@html list.player.embedHtml}
  {/each}
</div>
