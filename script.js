//bring my articles here just in case
let articleOne = document.getElementById('articleOne')
let articleTwo = document.getElementById('articleTwo')
let articleThree = document.getElementById('articleThree')
let articleFour = document.getElementById('articleFour')
let articleFive = document.getElementById('articleFive')
let articleSix = document.getElementById('articleSix')
let articleSeven = document.getElementById('articleSeven')
let articleEight = document.getElementById('articleEight')
let articleNine = document.getElementById('articleNine')
let articleTen = document.getElementById('articleTen')
let articleEleven = document.getElementById('articleEleven')
let articleTwelve = document.getElementById('articleTwelve')


//my article array for searching thing
let myArticles = ['<a class="makeLinksBetterLoooking" target="_blank" href="index1.html">shein & temu about to increase in price, consumers are upset</a>',
    '<a class="makeLinksBetterLoooking" target="_blank" href="index2.html">how to start investing</a>',
    '<a class="makeLinksBetterLoooking" target="_blank" href="index3.html">stores closing in the big ‘25</a>',
    '<a class="makeLinksBetterLoooking" target="_blank" href="index4.html">an investigation of the university of waterloo effect</a>',
    '<a class="makeLinksBetterLoooking" target="_blank" href="index5.html">the rise of quantum computing</a>',
    '<a class="makeLinksBetterLoooking" target="_blank" href="index6.html">the long term consequences of crispr and gene editing</a>',
    '<a class="makeLinksBetterLoooking" target="_blank" href="index7.html">hollywood’s 12 most well known actors (unranked)</a>',
    '<a class="makeLinksBetterLoooking" target="_blank" href="index8.html">what’s going on with justin & hailey bieber?</a>',
    '<a class="makeLinksBetterLoooking" target="_blank" href="index9.html">disney’s snow white live action controversy</a>',
    '<a class="makeLinksBetterLoooking" target="_blank" href="index10.html">are solar panels a good idea?</a>',
    '<a class="makeLinksBetterLoooking" target="_blank" href="index11.html">chatgpt is bad for the environment, here’s why</a>',
    '<a class="makeLinksBetterLoooking" target="_blank" href="index12.html">a deep dive into japan’s intriguing electricity sidewalks</a>']

//must check if whatever user puts in matches any of the words in 
//those strings and then display whatever's with key words in them
//thru unordered list
let userInputArray = []

document.getElementById("submitBtn").addEventListener("click", function () {

    //get the user stuff
    let userInput = document.getElementById("searchInput").value.toLowerCase();


    //list the results gets added to
    let searchStuff = document.getElementById("searchStuff")


    //emptying the list after uses
    searchStuff.innerText = ''

    if (userInput) {
        //pushes into array to make the thing compare
        userInputArray.push(userInput);
        for (let i = 0; i < myArticles.length; i++) {
            if (myArticles[i].includes(userInput)) {

                let li = document.createElement("li")
                li.classList.add(
                    "list-group-item",
                    "d-block",
                    "justify-content-center",
                    "align-items-center"
                )



                li.innerHTML = myArticles[i];

                searchStuff.appendChild(li);


            } else if(!userInput.includes(myArticles[i])) {
                document.getElementById("paragraph").textContent='Nothing found'
            }
        }
    }



})






