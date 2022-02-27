// ....Univesal declaration and others.....
const RANDOM_QUOTE_API_URI = 'http://api.quotable.io/random'
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::



// .....All Element Selection will be undernith here.......
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
let timer = document.getElementById('timer')


// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// ......All Function will go  undernith here..........
function getRandomQuote(){
    return fetch(RANDOM_QUOTE_API_URI)
    .then(response=>response.json())
    .then(data=>data.content)
}
async function getNextQuote(){
    const quote = await getRandomQuote()
    quoteDisplayElement.innerText = ''
    quote.split('').forEach(character => {
        const spanElement = document.createElement('span')
        spanElement.innerText = character
        quoteDisplayElement.appendChild(spanElement)
    });
    clearInput()
    
}

getNextQuote()

let everyThingIsCorrect = true

quoteInputElement.addEventListener('input',()=>{
    const quoteArray = quoteDisplayElement.querySelectorAll('span')
    const inputArray = quoteInputElement.value.split('')
   
    for(let i = 0; i < quoteArray.length; i++){
        if(inputArray[i] == null){
            
            quoteArray[i].classList.remove('incorrect')
            quoteArray[i].classList.remove('correct')
            everyThingIsCorrect = false
        }
        else if(inputArray[i] == quoteArray[i].innerHTML){
            quoteArray[i].classList.remove('incorrect')
            quoteArray[i].classList.add('correct')
            everyThingIsCorrect = true
            
            
        } else{
            quoteArray[i].classList.remove('correct')
            quoteArray[i].classList.add('incorrect')
            everyThingIsCorrect = false
        }
    }
    if(everyThingIsCorrect){
        clearInput()
        getNextQuote()
        
    } 
})

function clearInput(){
    quoteInputElement.value = ''
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::

