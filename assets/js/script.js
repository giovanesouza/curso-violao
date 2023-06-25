let contents = document.querySelector('.contents');


// Exibe os conteúdos por nível
assuntos.map((item) => {
  contents.innerHTML += ` 
    <div class="col">
    <div class="card h-100 ${item.card} text-justify">
    <div class="card-body">
    <h3 class="card-title text-center mb-4 ${item.title}">${item.level}</h3>
        <p class="card-text">${item.description}</p>
   
      </div>
    </div>
  </div>
    `;
})