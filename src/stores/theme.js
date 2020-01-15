import { writable } from 'svelte/store';

const { subscribe, set } = writable(true);

const DARK_THEME_CLASSES = ['bg-dark', 'text-light'];
const LIGHT_THEME_CLASSES = ['bg-light', 'text-dark'];

function toggleTheme (event) {
  const isDarkModeOn = event.target.checked;
  const classesToAdd = isDarkModeOn
    ? DARK_THEME_CLASSES
    : LIGHT_THEME_CLASSES;
  const classesToRemove = !isDarkModeOn
    ? DARK_THEME_CLASSES
    : LIGHT_THEME_CLASSES;
  document.querySelector('body').classList.add(...classesToAdd);
  document.querySelector('body').classList.remove(...classesToRemove);
  set(isDarkModeOn);
}

export const isDarkModeEnabled = {
  subscribe,
  toggle: toggleTheme
};
