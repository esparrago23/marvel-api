/*export class CreatorsandCharacters {
    #creators =[]
    #characters =[]

    constructor(creators, characters){
        this.#creators = creators;
        this.#characters = characters;
       // this.#sprites=sprites
    }

    getCreators() {
        return this.#creators
    }
    setCreators(creators){ this.#creators = creators}
    getCharacters() {
        return this.#characters
    }
    setCharacters(characters){ this.#characters = characters}

}*/

export class CreatorsandCharacters {
    #creators =[]
    #characters =[]

    constructor(){
        
    }

    getCreators() {
        return this.#creators
    }
    addCreators(creators){
        this.#creators.push(creators)
    }
    getCharacters() {
        return this.#characters
    }
    addCharacters(characters){
        this.#characters.push(characters)
    }

}