class List {
    constructor(name, description, id, season_id, season_name){
        this.name = name
        this.description = description
        this.id = id
        this.season_id = season_id
        this.season_name = season_name
        this.listsAdapter = new ListsAdapter()
    }

 //dom elements

 createListCard(){
     const container = document.querySelector(".container")
     const listCard = document.createElement("div")
     listCard.className = "list-card"
     listCard.setAttribute("data-id", `${this.id}`)
     listCard.setAttribute("data-menu-id", `${this.season_id}`)

     

 }







} 