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

function removeReview(e){
    e.preventDefault()
    let id = e.target.id
    fetch(`${ALLREVIEWS_URL}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    .then(response => {
           console.log(response)
    })

}