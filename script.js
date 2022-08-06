/* 
- "asynchronous" programming allows a program to do more than one thing at a time.  We deal with APIs with asychronous code.

APIs: stands for "Application Programming Interface"  It is not the database/server.  It allows for communication with these things (through endpoints).

RES = Representational State Transfer
- process of creating an object of requested data, and sending values as a response to the user making the request.

CRUD = Create, Read, Update, Delete
*/

/*
Pokemon 
    const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '8'

    const {url, type, id} = apiData
    const apiUrl = `${url}${type}/${id}`
*/
    const main = document.getElementById("main")
    const search = document.getElementById("search")
    
    const fetchPokemon = () => {
            const res = fetch("https://pokeapi.co/api/v2/pokemon-species")
            const data = res.json()
            displayPokemon(data[0])
    
        .catch (err); {
            console.log(`Error: ${err}`)
        }
    }
        const getPokemonResults = () => {
        const searchInput = document.getElementById("search")

        fetch(`https://pokeapi.co/api/v2/name=${searchInput.value}`)
            .then(res => res.json())
            .then(data => {
                if(data.error) {
                    const errorMessage = document.createElement("h3")

                    errorMessage.textContent = data.error
                    errorMessage.style.color = "orange"

                    searchDiv.appendChild(errorMessage)
                } else {
                    searchDiv.innerHTML = ""

                    data.results.forEach(char => {
                        makeCharDiv(char.pokemonName, char.pokemonImage, char.pokemonDescription, searchDiv)
                    })
                }
            })
    }
        // logic for removing original search button from page

        // * "<element>.firstElementChild" used to check if there is a child element inside of element being specified

        search.firstElementChild != null
        
        function lowCaseSearch(string) {
        return string.toLowerCase();

        //logic for adding new Pokemon to the page
        const pokemonDescription = document.createElement('p')
        pokemonDescription.style = "font-size: 3rem; font-family: billionDreams; color: #3a2718;"
        
        const pokemonName = document.createElement('h3')
        pokemonName.innerText = name
        pokemonName.style = "font-family: pinewood; color: #3a2718;"
       
        const pokemonImage = document.createElement("img")
        pokemonImage.src = image
        pokemonImage.style = "height: 350px; width: auto;"
        
        container.appendChild (pokemonDescription)
        container.appendChild (pokemonName)
        container.appendChild (pokemonImage)
        
        image.addEventListener("click", () => {
            container.removeChild (pokemonDescription)
            container.removeChild (pokemonName)
            container.removeChild (pokemonImage)
            
            fetchPokemon()
        })

    search.addEventListener("click", fetchPokemon)
    
    }