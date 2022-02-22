//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getPicture)
function getPicture(){

    
    const url = "https://api.nasa.gov/planetary/apod?api_key=H4pxfB0l75Ejfxspb3YMJRhBjDuA8GtYhQvkS1Eu"
    const picture = document.querySelector('img')
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.date)
            console.log(data.url)
            picture.style.visibility = "visible";
            document.querySelector('img').src = data.url
            document.querySelector('h2').innerText = data.title
            document.querySelector('h3').innerText = data.explanation
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
       
}


    