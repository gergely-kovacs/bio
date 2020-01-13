import Intro from './components/Intro.svelte';
import Movies from './components/Movies.svelte';
import Music from './components/Music.svelte';

export const routes = {
  '/': Intro,
  '/movies': Movies,
  '/music': Music
  // '*': NotFound,
};
