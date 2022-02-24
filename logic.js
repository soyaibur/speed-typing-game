// ....Univesal declaration and others......

// How to Call an API
const RANDOM_QUOTE_API_URI = 'http://api.quotable.io/random'

function getRandomQuote(){
    return fetch(RANDOM_QUOTE_API_URI)
    .then(response => response.json())
    .then(data => data.content)
}

async function getNextQuote(){
    const quote = await getRandomQuote()
   console.log(quote)
}

getNextQuote()



// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::



// .....All Element Selection will be undernith here...........
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// .....All EventListener go undernith here...........
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::



// ......All Function will go here undernith..........
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