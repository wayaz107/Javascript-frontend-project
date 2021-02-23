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
     listCard.setAttribute("data-season-id", `${this.season_id}`)

     const listName = document.createElement("div")
     listName.className = "list-name"
     listName.textContent = this.name

     const listDesc = document.createElement("div")
     listDesc.className = "list-description"
     listDesc.textContent = this.description

     listCard.append(listName, listDesc)
     
     container.append(listCard)

 }







} 