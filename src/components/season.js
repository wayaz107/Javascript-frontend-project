class Season {
    constructor(name){
        this.name = name
        this.seasonsAdapter = new SeasonsAdapter()
        this.listsAdapter = new ListsAdapter()
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