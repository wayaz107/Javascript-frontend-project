let seasonAdapter = new SeasonsAdapter("http://localhost:3000/seasons")
seasonAdapter.getSeasons()


//
//     .then(response => {
//          location.reload()
//         })
//         .catch(err => alert("Please try again"))
//  }
   
    
//      //removes perfume 
//     // e.target.parentElement.remove() 

//     //removes the reviews but delete button still there
//     // let el = document.getElementById(`review-${id}`)
//     // el.remove()
//     // console.log("removed!")

  
// function reviewHandler(e) {
//     e.preventDefault()
//     let bodyInput = document.querySelector('#reviewBody').value
//     let perfumeInput = e.target.id
//     addReview(perfumeInput, bodyInput)
// }

// function addReview(perfume_id, body) {
//     const reviewData = {perfume_id, body}
//     fetch(`${ALLREVIEWS_URL}`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify({
//             perfume_id: reviewData.book_id,
//             body: reviewData.body
//         })
//     })
//     .then(response => response.json())
//     .then(review => {
//         new Review(review)
//         location.reload()
//      })
//      .catch(err => alert("Review Failed: Please try again."))
// }

