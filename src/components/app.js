class App{
   static lists = []
    seasons = []
    url = "http://localhost:3000"


    getLists(){
        fetch(`${this.url}/lists`)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }
}

.then(lists => {
    const allSeason = {
        summer: [],
        winter: [],
        fall: []
    }
    lists.data.forEach(list => {
        const seasonList = new list(list.attributes.name, list.attributes.description, list.id, list.attributes.season.id, list.attributes.season.name)

        switch (seasonList.season_name) {
            case "summer":
                allSeasons.summer.push(seasonList)
                break
            case "winter":
                allSeasons.winter.push(seasonList)
                break
            case "fall":
                allSeasons.fall.push(seasonList)
                break
            default:
                console.log("Something went wrong here...")
                break
        }
    })
    this.renderLists();
})
// call renderLists
.catch(err => alert(err))

}

renderLists(){
// create DOM nodes and insert data into them to render in the DOM

}
}
