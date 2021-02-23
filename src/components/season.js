class Season {
    constructor(name){
        this.name = name
        this.seasonsAdapter = new SeasonsAdapter()
        this.listsAdapter = new ListsAdapter()
    }


   addListenerToSeason(){
       const seasonNames = document.querySelectorAll(".season-name")
       seasonNames.forEach(season => {
           season.addEventListener("click", (e) => {
               e.preventDefault();
              const container = document.querySelector(".container")
              container.style.display = "flex"
            switch(season.textContent) {
                 case "Summer":
                    this.clearPage()
                    this.renderSummerLists()
                    break
                  case "Winter":
                    this.clearPage()
                    this.renderWinterLists()
                      break
                  case "Fall":
                    this.clearPage()
                    this.renderFallLists()
                      break
                   default:
                    this.clearPage()
                    this.renderAllLists()
                    
              }
           })
       })

    }

    clearPage(){
        const clearLists = document.querySelectorAll(".list-card")
        Array.from(clearLists).forEach(list => {
            list.remove()
        })

    }


    renderSummerLists(){
        this.seasonsAdapter.getSeasons().then(seasons => {
            seasons[0].attributes.lists.forEach(list =>{
                const summerList = new List(list.name, list.description, list.id, list.season_id)
                summerList.createListCard()
            })
        })
    }


   
   renderWinterLists(){
      this.seasonsAdapter.getSeasons().then(seasons => {
          seasons[1].attributes.lists.forEach(list =>{
            const winterList = new List(list.name, list.description, list.id, list.season_id)
            winterList.createListCard()
          })
       })
    }

    renderFallLists(){
        this.seasonsAdapter.getSeasons().then(seasons => {
            seasons[2].attributes.lists.forEach(list =>{
              const fallList = new List(list.name, list.description, list.id, list.season_id)
              fallList.createListCard()
            })
         })
      }


    renderAllLists(){
        
        this.listsAdapter.getLists().then(lists => {
            lists.forEach(list => {
                const listObj = new List(list.attributes.name, list.attributes.description, list.id, list.attributes.season.id, list.attributes.season.name)
                listObj.createListCard()
            });
         
        })
  
    }





}