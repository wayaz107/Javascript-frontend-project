class SeasonsAdapter{
    constructor(baseURL) {
        this.baseURL = baseURL
    }

    getSeasons() {
        return fetch(this.baseURL)
        .then(resp => resp.json())
        .then(json => console.log(json.data));
    }

}