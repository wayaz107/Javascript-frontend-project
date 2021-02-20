const BACKEND_URL = 'http://localhost:3000/api/v1';
const ALLPERFUMES_URL = `${BACKEND_URL}/perfumes`;
const ALLREVIEWS_URL = `${BACKEND_URL}/reviews`;

document.addEventListener('DOMContentLoaded', function(e){
    
})

fetch('http://localhost:3000/api/v1/perfumes')
  .then(response => response.json())
  .then(data => console.log(data));