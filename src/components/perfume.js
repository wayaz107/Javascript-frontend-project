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

   renderPerfume(){
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
      <h3class="card-title"> Name: <br> ${this.name}</h3>
      <h5class="card-content"> Brand: <br> ${this.brand}</h5> 
      <img src='${this.image}' />
    `
      // insert div 
      perfumeDiv.setAttribute('data.id', `${this.id}`)
      perfumeDiv.className = 'card col s6'
      perfumes.appendChild(perfumeDiv)

       }
    }

     renderPerfumeReviews() {

        this.reviews.forEach(review => {


        //create div
        const reviews = document.querySelector('#reviews');
        const perfumeDiv = document.createElement('div');

        //manipulate div

        perfumeDiv.innerHTML = `
        <h3 class= "card-title"> Name: <br><br> ${this.name}</h3>
        <img src='${this.image}' />
        <br>
        <h5> Reviews: </h5>
        <br>
        <ul>
        <li class= "card-content" data.review.id="${review['id']}">${review['body']}</li>
        </ul>
        `
        //insert div
        perfumeDiv.setAttribute('data.id', `${this.id}`)
            perfumeDiv.className = 'card'
            reviews.appendChild(perfumeDiv)

        });
    }

  
   }
