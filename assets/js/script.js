let contents = document.querySelector('.contents');

let questionsAccordion = document.querySelector('#accordionFlushExample');


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


// Lista todas as perguntas
questions.map(item => {

  questionsAccordion.innerHTML += `
<div class="accordion-item">
<h2 class="accordion-header">
    <button class="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse"
        data-bs-target="#flush-collapse${item.id}" aria-expanded="false" aria-controls="flush-collapse${item.id}">
        ${item.question}
    </button>
</h2>
<div id="flush-collapse${item.id}" class="accordion-collapse collapse"
    data-bs-parent="#accordionFlushExample">
    <div class="accordion-body text-bg-dark">
        ${item.answer}
        <br />
        ${item.complement}
    </div>
</div>
</div>
`;

})