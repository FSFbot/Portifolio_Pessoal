const fetchJson = (url) => fetch(url).then((res) => res.json()); 
const setHtml = (selector, text) => { 
  document.querySelector(selector).innerHTML = text; 
}; 

document.addEventListener("DOMContentLoaded", async () => { 
  setHtml(".filmes", '<div class = "col-md-12"> Carregando...</div>'); 
  
  // Perceba que agora a requisição leva só 1 linha para ser feita
  const films = await fetchJson("https://api.b7web.com.br/cinema/");
   
  setHtml( 
    ".filmes", 
    films 
      .map( 
        ({ avatar, titulo }) => ` 
          <div class="col-md-4 filme"> 
            <img src="${avatar}" /> 
            <h2>${titulo}</h2> 
          </div> 
        ` 
      ) 
      .join("") 
  ); 
});