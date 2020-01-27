import Intro from './components/Intro.svelte';
import Movies from './components/Movies.svelte';
import Music from './components/Music.svelte';
import Skillshot from './components/Skillshot.svelte';

export const routes = {
  '/': Intro,
  '/movies': Movies,
  '/music': Music,
  // TODO: nest individual games in /games/??
  '/games': Skillshot
  // TODO: implement a not found page
  // '*': NotFound,
};
