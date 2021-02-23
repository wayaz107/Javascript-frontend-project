class SeasonsAdapter{
    constructor() {
        this.baseURL = "http://localhost:3000/seasons"
    }

    // constructor(baseURL){
    //     this.baseURL = baseURL
    //   }

    getSeasons() {
        return fetch(this.baseURL)
        .then(resp => resp.json())
        .then(json => json.data)
    }

}