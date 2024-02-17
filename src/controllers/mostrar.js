import { Event} from "../models/Event.js"

let events=[]

export const setinfo = function(res){
    events = res
}

export const setEvents =function(){
    events.forEach(element => {
        const obt =new Event()
        obt.setId(element.id)
        obt.setThumbnail(element.thumbnail)
        obt.setComics(element.comics)
        obt.setSeries(element.series)
        obt.setStories(element.stories)
    });
    return events;
} 

