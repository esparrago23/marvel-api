export class ListEvent {
    #event = []
    #page

    setPage(page) {
        this.#page = page
    }

    getPage() {
        return this.#page
    }

    addEvent(event){
        this.#event.push(event)
    }

    getEvent() {
        return this.#event
    }
}
