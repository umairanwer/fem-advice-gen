function retrieveQuote(){
    fetch('https://api.adviceslip.com/advice')
        .then(response =>
            {
                if(!response.ok)
                    throw new Error(`HTTP error: ${response.status}`);
                return response.text();
            }).then(text => updateQuoteDisplay(JSON.parse(text)));
        }

function updateQuoteDisplay(slipObj){
    var quoteObj = slipObj['slip'];
    var {id, advice} = quoteObj;
    document.querySelector("#advice-id").textContent = id;
    document.querySelector(".advice-text").textContent = '"'+advice+'"';
}

document.querySelector('.dice-container')
        .addEventListener('click', retrieveQuote);

retrieveQuote();

