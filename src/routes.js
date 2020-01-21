import Intro from './components/Intro.svelte';
import Movies from './components/Movies.svelte';
import Music from './components/Music.svelte';
import MedievalWars from './components/MedievalWars.svelte';

export const routes = {
  '/': Intro,
  '/movies': Movies,
  '/music': Music,
  // TODO: nest individual games in /games/??
  '/games': MedievalWars
  // TODO: implement a not found page
  // '*': NotFound,
};
