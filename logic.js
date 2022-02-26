// ....Univesal declaration and others.....
const RANDOM_QUOTE_API_URI = 'http://api.quotable.io/random'
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')


function getRandomQuote(){
    return fetch(RANDOM_QUOTE_API_URI).then(response=>response.json()).then(data=>data.content)
}



// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::



// .....All Element Selection will be undernith here...........
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// .....All EventListener go undernith here...........
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::



// ......All Function will go  undernith here..........
async function getNextQuote(){
    const quote = await getRandomQuote()
    
    quoteDisplayElement.innerHTML = ''
    quote.split('').forEach(character => {
        const spanElement = document.createElement('span')
        spanElement.innerText = character
    
        quoteDisplayElement.appendChild(spanElement)
    });
    quoteInputElement.innerText = null
    
}

getNextQuote()
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//All code will be deleted here.............
function printOut(text){
    const div = document.createElement('div')
    div.innerHTML = text
    document.body.appendChild(div)
}
// addEventListener('click',()=>{
//     alert("this is working")
// })
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::