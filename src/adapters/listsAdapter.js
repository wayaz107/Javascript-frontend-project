class ListsAdapter{
    constructor(){
        this.baseURL = "http://localhost:3000/lists"
    }

    getLists(){
        return fetch(this.baseURL)
        .then(resp => resp.json())
        .then(json => json.data)
    }

   
   

}