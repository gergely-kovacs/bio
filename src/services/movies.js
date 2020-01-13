const OMDB_URL = 'https://www.omdbapi.com/';
const OMDB_API_KEY = '&apikey=6416b521';
const FAVORITE_MOVIES = [
  '?t=The+Sunset+Limited&y=2011',
  '?t=K-PAX&y=2001',
  '?t=American Beauty&y=1999',
  '?t=Seven Pounds&y=2008',
  '?t=Tangerines&y=2013'
];

export function generateQueryUrls () {
  return FAVORITE_MOVIES.map(movie => `${OMDB_URL}${movie}${OMDB_API_KEY}`);
}
