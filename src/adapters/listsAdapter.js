class ListsAdapter{
    constructor(){
        this.baseURL = "http://localhost:3000/lists"
    }

    // constructor(baseURL){
    //     this.baseURL = baseURL
    //   }

    getLists(){
        return fetch(this.baseURL)
        .then(resp => resp.json())
        .then(json => json.data)
    }

    postLists(data) {
        return fetch(this.baseURL, {
            method: "POST",
            headers:{ 
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .catch(err => alert(err))
    }

   deleteLists(id){
       return fetch(`${this.baseURL}/${id}`, {
           method: "DELETE",
           headers: {
            "Content-Type": "application/json"
           }
       })
       .then(resp => resp.json())
   }



}