export function debounce (callback, delay) {
  let debounceTimer;
  return function () {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => callback.apply(this, arguments), delay);
  };
}
