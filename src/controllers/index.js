import { listEvent } from "./dependecies.js"
import { Event } from "../models/Event.js"
import { CreatorsandCharacters } from "../models/CreatorsandCharacters.js"


let api = document.getElementById("btn-api")
api.addEventListener("click", function(){
    let url = "https://gateway.marvel.com/v1/public/events?ts=10&apikey=95381b925349d2dc8a01bebbee78fcce&hash=fafea61cb838e76976bd1529d599bbf5"
    fetch(url).then(
        response => response.json()
    ).then (
        data1 => {
            listEvent.setPage(1)
            data1.data.results.forEach(element => {
                let event = new Event()
                let creatorsandcharacters = new CreatorsandCharacters()
                event.setId(element.id)
                listEvent.setPage(1)
        
                event.setThumbnail(element.thumbnail.path+"."+element.thumbnail.extension)
                console.log(element.thumbnail.path+"."+element.thumbnail.extension)

                element.characters.items.forEach(elements => {
                    creatorsandcharacters.addCharacters(elements.name)
                })

                element.creators.items.forEach(elements => {
                    creatorsandcharacters.addCreators(elements.name)
                })

                event.setCreatorsAndCharacters(creatorsandcharacters)
                element.series.items.forEach(elements => {
                    event.addSeries(elements.name)
                })

                element.stories.items.forEach(elements => {
                    event.addStories(elements.name)
                })

                element.comics.items.forEach(elements => {
                    event.addComics(elements.name)

                })
                listEvent.addEvent(event)
                
            })}
    )
}
)


const btnView = document.getElementById("btn-view")
btnView.addEventListener("click", ()=>{
    
    listEvent.getEvent().forEach(item => {

        const card=document.createElement("div");
        card.className = "card ";
        cards.appendChild(card)

        let front=document.createElement("div");
        front.className = "face ";
        card.appendChild(front)

        let back=document.createElement("div");
        back.className = "back";
        card.appendChild(back)

         let back2=document.createElement("div");
         back2.className = "back";
         card.appendChild(back2)

         let back3=document.createElement("div");
         back3.className = "back";
         card.appendChild(back3)
        
         let back4=document.createElement("div");
         back4.className = "back";
         card.appendChild(back4)

        let char3 = document.createElement("div")
        char3.className = "characters";
        char3.innerText = item.getCreatorsAndCharacters().getCharacters()
        back.appendChild(char3)

        const char4=document.createElement("div");
        char4.className = "characters";
        char4.innerText = item.getCreatorsAndCharacters().getCreators()
        back.appendChild(char4)

        let Thumbnails = document.createElement("img")
        Thumbnails.className = "imagenes";
        Thumbnails.src = item.getThumbnail()
        front.appendChild(Thumbnails)

        let Ids = document.createElement("p")
        Ids.className = "text";
        Ids.innerText = item.getId()
        front.appendChild(Ids)

        let button1= document.createElement("button")
        button1.innerText = "Mostrar Personajes y creadores"
        button1.className = "button";
        front.appendChild(button1)

        button1.addEventListener("click", ()=>{
            front.className = "back ";
            back.className = "front ";
            back.appendChild(button5)
        })


        let comics = document.createElement("p")
        comics.innerText = item.getComics()
        back2.appendChild(comics)

        let button2= document.createElement("button")
        button2.innerText = "Mostrar comics "
        button2.className = "button2";
        front.appendChild(button2)
        
        button2.addEventListener("click", ()=>{
            front.className = "back ";
            back2.className = "face ";
            back2.appendChild(button5)
        })

        let series = document.createElement("p")
        series.innerText = item.getSeries()
        back3.appendChild(series)
        
        let button3= document.createElement("button")
        button3.innerText = "Mostrar series"
        button3.className = "button3";
        front.appendChild(button3)

        button3.addEventListener("click", ()=>{
            front.className = "back ";
            back3.className = "face ";
            back3.appendChild(button5)
        })
        
        let stories = document.createElement("p")
        stories.innerText = item.getStories()
        back4.appendChild(stories)
        
        let button4= document.createElement("button")
        button4.innerText = "Mostrar stories"
        button4.className = "button4";
        front.appendChild(button4)

        button4.addEventListener("click", ()=>{
            front.className = "back ";
            back4.className = "face ";
            back4.appendChild(button5)
        })
        let button5= document.createElement("button")
        button5.innerText = "Menu"
        button5.className = "button5";
        button5.addEventListener("click", ()=>{
            front.className = "face ";
            back.className = "back ";
            back2.className = "back ";
            back3.className = "back ";
            back4.className = "back ";
            
        })
  
            })

        })

        