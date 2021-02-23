class App{
    lists = []
    seasons = []
    url = "http://localhost:3000"


    getLists(){
        fetch(`${this.url}/lists`)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }
}