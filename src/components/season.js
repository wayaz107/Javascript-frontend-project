class Season {
    constructor(name){
        this.name = name
        this.seasonsAdapter = new SeasonsAdapter()
        this.listsAdapter = new ListsAdapter()
    }

    renderSummerLists(){
        this.seasonsAdapter.getSeasons().then(seasons => {
            seasons[0].attributes.lists.forEach(list =>{
                const summerList = new List(list.name, list.description, list.id, list.season_id)
                summerList.createListCard()
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