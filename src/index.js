const BACKEND_URL = 'http://localhost:3000/api/v1';
const ALLPERFUMES_URL = `${BACKEND_URL}/perfumes`;
const ALLREVIEWS_URL = `${BACKEND_URL}/reviews`;

// document.addEventListener('DOMContentLoaded', function(e){

// })

// load perfumes 
function getPerfumes(){
    fetch(ALLPERFUMES_URL)
    .then(response => response.json())
    .then(perfumes =>{
      perfumes.forEach(perfume => {
          let newPerfume = new Perfume(perfume)
      })
    })
}

getPerfumes()