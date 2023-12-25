
var quotes = [

    'A room without books is like a body without a soul. -Marcus Tullius Cicero',
    'A friend is someone who knows all about you and still loves you. -Elbert Hubbard',
    'It is better to be hated for what you are than to be loved for what you are not. -Andre Gide, Autumn Leaves',
    'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. -Ralph Waldo Emerson',
    
    
];




function quote() {
    
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];
    
    var quoteElement = document.getElementById("quoteText");
    quoteElement.innerHTML = randomQuote;

}

