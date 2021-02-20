class Perfume{
   static allPerfume = [];

   constructor({id, name, brand}){
       this.id = id
       this.name = name
       this.brand = brand
    //    this.image = image
    //    this.reviews = reviews

       Perfume.allPerfume.push(this)
   }

   renderPerfume(){
      const perfumes = document.querySelector('#perfumes');

    // create div
       const perfumeDiv = document.createElement('div');

    // manipulate div
       perfumeDiv.innnerHTML = `
         <h3> class="card-title"> Name: ${this.name}</h3>
         <h5> class="card-content"> Brand: ${this.brand}</h5> 
       `

    // insert div 
    perfumeDiv.setAttribute('data.id', `${this.id}`)
    perfumeDiv.className = 'card col s6'
    perfumes.appendChild(perfumeDiv)
   }
}