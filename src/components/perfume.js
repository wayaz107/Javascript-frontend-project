class Perfume {
  static allPerfume = [];

  constructor({id, name, brand, image, reviews = []}){
       this.id = id
       this.name = name
       this.brand = brand
       this.image = image
       this.reviews = reviews

       Perfume.allPerfume.push(this)
   }

  renderPerfume() {
    const perfumes = document.querySelector('#perfumes');

    // create div
    const perfumeDiv = document.createElement('div');

    //render review
    if (this.reviews !=0){
      this.renderPerfumeReviews()
    }
    else {
      // manipulate div
    perfumeDiv.innerHTML = `
      <h3class="card-title"> Name: ${this.name}</h3><br>
      <h5class="card-content"> Brand: ${this.brand}</h5> 
      <img class="card-img-top" src='${this.image}' />
     `
      // insert div 
      perfumeDiv.setAttribute('data.id', `${this.id}`)
      perfumeDiv.className = 'card col s6'
      perfumes.appendChild(perfumeDiv)

      //add button
      const button = document.createElement('button')
      button.setAttribute('id', this.id)
      button.innerText = 'Add Review'
      button.addEventListener('click', (e) =>{
        //new review
        const span = document.createElement('span')
        
      })
      
       
    }
  }

  renderPerfumeReviews(){

        this.reviews.forEach(review => {

        //create div
        const reviews = document.querySelector('#reviews');
        const perfumeDiv = document.createElement('div');

        //manipulate div

        perfumeDiv.innerHTML += `
        <img src='${this.image}' />
        <h3 class= "card-title"> Name: <br><br> ${this.name}</h3>
        <br>
        <h5> Review: </h5>
        <ul id= "review-${review.id}">
        <li class= "card-content" data.review.id="${review['id']}">${review['body']}</li>
        </ul>
        `
        //insert div
        perfumeDiv.setAttribute('data.id', `${this.id}`)
            perfumeDiv.className = 'card'
            reviews.appendChild(perfumeDiv)

        //remove button
        const button = document.createElement('button')
        button.setAttribute("id", review['id'])
        button.innerText = 'Delete Review'
        button.addEventListener('click', (e) => removeReview(e))
        perfumeDiv.appendChild(button)
        });
  }

  reviewForm(){
    const form = document.createElement('form')
    form.setAttribute('class', 'addReview')
    

  }

}
