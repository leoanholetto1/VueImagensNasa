document.getElementById('search-btn').addEventListener('click', async () => {
    const query = document.getElementById('search-query').value;
    const response = await fetch(`http://localhost:8081/buscaFlexivel?filtro=${query}`);

    const results = await response.json();
    displayResults(results);
});
  
document.getElementById('genre-search-btn').addEventListener('click', async () => {
  const selectedGenres = Array.from(document.querySelectorAll('input[name="genre"]:checked')).map(el => el.value);

  if (selectedGenres.length === 0) {
      alert('Por favor, selecione pelo menos um gênero.');
      return;
  }

  try {
      const response = await fetch('http://localhost:8081/buscaGeneros', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ filtro : selectedGenres })
      });

      if (!response.ok) {
          throw new Error('Erro ao buscar os filmes.');
      }

      const results = await response.json();
      displayResults(results);
  } 
  catch (error) {
    console.error('Erro:', error);
    alert('Houve um erro ao buscar os filmes. Tente novamente mais tarde.');
  }
});
  
async function loadGenres() {
    const response = await fetch('http://localhost:8081/retornaGeneros');
    const genreData = await response.json();

    const container = document.getElementById('genres-container');
    const uniqueGenres = new Set();

    genreData.forEach(item => {
        item.genres.forEach(genre => {
            uniqueGenres.add(genre);
        });
    });

    uniqueGenres.forEach(genre => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'genre';
        checkbox.value = genre;
        
        const label = document.createElement('label');
        label.textContent = genre;
        
        container.appendChild(checkbox);
        container.appendChild(label);
        container.appendChild(document.createElement('br')); 
      });
}
  
function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    results.forEach(movie => {
      const movieItem = document.createElement('div');
      movieItem.textContent = `${movie.title} - ${movie.genres.join(', ')} - ${movie.year}`;
      resultsContainer.appendChild(movieItem);
    });
}
  
loadGenres();