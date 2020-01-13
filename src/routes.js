import Intro from './components/Intro.svelte';
import Movies from './components/Movies.svelte';

export const routes = {
  '/': Intro,
  '/movies': Movies
  // '*': NotFound,
};
