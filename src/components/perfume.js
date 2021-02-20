class Perfume{
   static allPerfume = [];

   constructor({id, name, brand, image, reviews}){
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

    // manipulate div
       perfumeDiv.innnerHTML = `
         <h3> Name: ${this.name}</h3>
         <h5> Brand: ${this.brand}</h5> 
         <h5> Image: ${this.image}</h5>
       `

    // insert div
    



    
   }







}