let variable= 4

if (variable % 3) {
    console.log("se cumplio")
} else {
    console.log("no se cumplio")
}



const lista = [
    "cebolla",
    "aceite",
    "cafe",
    "flips",
    "pimenton",
    "leche",
    "toddy",
    "harina",
]

const usuario = {
    name: "Leonardo",
    age: 22,
    password: "1234",
    job: "Frontend develop",
}

undefined

null


console.log(usuario.jobs)


const tracklist = document.getElementById("track-list")


axios.get("https://leonardoapi.onrender.com/songs")
    .then((res) => {
        console.log(res.data.songs)

        res.data.songs.map( (song) => {

        // generación de canciones
            const div = document.createElement("div")

            div.classList.add ("section_cards")
            div.innerHTML = ''
            
            tracklist.appendChild(div)

        })
    })
// const button = document.getElementById("handler-button")


// if (button !==null) {

// button.addEventListener("click", () =>{
//     const Cadena = "Esto es una cadena de texto"
//     console.log(Cadena)
// })
// }
