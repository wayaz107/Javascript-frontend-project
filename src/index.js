const BACKEND_URL = 'http://localhost:3000/api/v1';
const ALLPERFUMES_URL = `${BACKEND_URL}/perfumes`;
const ALLREVIEWS_URL = `${BACKEND_URL}/reviews`;

document.addEventListener('DOMContentLoaded', function(e){
getPerfumes(e)
});

// load perfumes 
function getPerfumes(e) {
    e.preventDefault()
    fetch(ALLPERFUMES_URL)
    .then(response => response.json())
    .then(perfumes=> {
        if(perfumes.message) {
            alert(perfumes.message)
        } else
        perfumes.forEach(perfume => {
            let newPerfume= new Perfume(perfume)
            newPerfume.renderPerfume()
        })
    })
    .catch(err => alert(err.message))
}

// getPerfumes()