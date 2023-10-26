const { sortByTitle } = require('./sort');

describe('sortByTitle', () => {
  it('should sort movies alphabetically by title (ignoring common prefixes)', () => {
    const movies = [
      { title: 'The Movie', year: 2018, genres: ['Drama'] },
      { title: 'A Movie', year: 2020, genres: ['Action'] },
      { title: 'An Example Movie', year: 2019, genres: ['Comedy'] },
    ];

    const sortedMovies = sortByTitle(movies);

    // should be -> "A movie" -> "An example movie" -> "The Movie"
    expect(sortedMovies[0].title).toBe('A Movie');
    expect(sortedMovies[1].title).toBe('An Example Movie');
    expect(sortedMovies[2].title).toBe('The Movie');
  });

  it('should not modify movies with no common prefixes', () => {
    const movies = [
      { title: 'Titanic', year: 1997, genres: ['Drama'] },
      { title: 'Gladiator', year: 2000, genres: ['Action'] },
    ];

    const sortedMovies = sortByTitle(movies);

    // this should be the same since there is no similar prefix
    expect(sortedMovies[0].title).toBe('Titanic');
    expect(sortedMovies[1].title).toBe('Gladiator');
  });

  it('should handle different case variations of common prefixes', () => {
    const movies = [
      { title: 'the Godfather', year: 1972, genres: ['Crime'] },
      { title: 'An American in Paris', year: 1951, genres: ['Drama'] },
      { title: 'A Clockwork Orange', year: 1971, genres: ['Drama'] },
    ];

    const sortedMovies = sortByTitle(movies);

    // Should be -> "A Clockwork Orange" -> "An American in Paris" -> "the Godfather"
    expect(sortedMovies[0].title).toBe('A Clockwork Orange');
    expect(sortedMovies[1].title).toBe('An American in Paris');
    expect(sortedMovies[2].title).toBe('the Godfather');
  });
});
