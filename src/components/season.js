class Season {
    constructor(name){
        this.name = name
        this.seasonsAdapter = new SeasonsAdapter()
        this.listsAdapter = new ListsAdapter()
        this.form = document.querySelector("#create-season-list-form")
        this.populateSeasonNameToForm()
    }


   addListenerToSeason(){
       const seasonNames = document.querySelectorAll(".season-name")
       seasonNames.forEach(season => {
           season.addEventListener("click", (e) => {
               e.preventDefault()
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
                  case "Add New Lists":
                      this.clearPage()
                      this.renderAddSeasonListForm()
                      break
                   default:
                    this.clearPage()
                    this.renderAllLists()
                    
              }
           })
       })

    }

    clearPage() {
        const clearLists = document.querySelectorAll(".list-card")
        Array.from(clearLists).forEach(list => {
            list.remove()
        })
        this.form.style.display ="none"
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

    renderAddSeasonListForm(){
        this.form.style.display = "block"
        this.form.style.margin = "0 auto"
        this.form.addEventListener("submit", (e) => this.addNewSeasonList(e))
    }
    

    populateSeasonNameToForm(){
        this.seasonsAdapter.getSeasons().then(seasons => {
            seasons.forEach(season => {
                // console.log(season.id)
                const selectBox = document.querySelector("#season-select")
                const option = document.createElement("option")
                option.textContent = season.attributes.name
                option.value = season.id
                selectBox.append(option)
            })
        })
    }

    addNewSeasonList(e){
        e.preventDefault()
        const seasonNameSelect = document.querySelector("#season-select").value
        const listName = document.querySelector("#list-name").value
        const listDescription = document.querySelector("#description").value
        const data = {
            name: listName,
            description: listDescription,
            season_id: seasonNameSelect
        }
     this.listsAdapter.postLists(data).then(data => {
         alert("List created!")
         this.form.reset()
         this.clearPage()
         this.renderAllLists()
        })

    }






}