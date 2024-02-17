export class Event {
    #id
    #thumbnail =[]
    #creatorsandcharacters =[]
    #comics = []
    #series = []
    #stories = []


    setId(id){this.#id = id}
    getId() { return this.#id }

    setThumbnail(thumbnail){this.#thumbnail = thumbnail}
    getThumbnail() { return this.#thumbnail }


    setCreatorsAndCharacters(creatorsandcharacters){ this.#creatorsandcharacters = creatorsandcharacters }
    getCreatorsAndCharacters(){ return this.#creatorsandcharacters}

    addComics(comics){
        this.#comics.push(comics)
    }
    getComics() { return this.#comics}

    addSeries(series){
        this.#series.push(series)
    }
    getSeries() { return this.#series }

    addStories(stories){
        this.#stories.push(stories)
    }
    getStories() { return this.#stories}

}