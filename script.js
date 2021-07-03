const button=document.getElementById('button')
const content=document.getElementById('word-content')
button.addEventListener('click', getRandomWord);

function getRandomWord(){
    url="http://localhost:3000/random"
    fetch(url)
    .then(res=>res.json())
    .then(data => {
        button.innerHTML = data.value
    })
        
    .catch(error=>(error)) 
}

getRandomWord()