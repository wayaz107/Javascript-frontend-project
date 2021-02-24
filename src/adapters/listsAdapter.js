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

    postLists(){
        return fetch(this.baseURL,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify()
        })
        .then(resp => resp.json())
        .catch(err => alert(err))
    }

}