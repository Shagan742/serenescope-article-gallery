//bring my articles here
let articleOne=document.getElementById('articleOne')
let articleTwo=document.getElementById('articleTwo')
let articleThree=document.getElementById('articleThree')
let articleFour=document.getElementById('articleFour')
let articleFive=document.getElementById('articleFive')
let articleSix=document.getElementById('articleSix')
let articleSeven=document.getElementById('articleSeven')
let articleEight=document.getElementById('articleEight')
let articleNine=document.getElementById('articleNine')
let articleTen=document.getElementById('articleTen')
let articleEleven=document.getElementById('articleEleven')
let articleTwelve=document.getElementById('articleTwelve')


//my article array for searching thing
let myArticles=['SHEIN & Temu about to increase in price, consumers are upset', 
    'How to start investing', 
    'Stores closing in the big ‘25', 
    'An investigation of the University of Waterloo effect', 
    'The rise of quantum computing', 
    'The long term consequences of CRISPR and Gene Editing', 
    'Hollywood’s 12 most well known actors (unranked)', 
    'What’s going on with Justin & Hailey Bieber?', 
    'Disney’s Snow White live action controversy', 
    'Are solar panels a good idea?', 
    'ChatGPT is bad for the environment, here’s why', 
    'A deep dive into Japan’s intriguing electricity sidewalks']

//must check if whatever user puts in matches any of the words in 
//those strings and then display whatever's with key words in them
//thru unordered list

let userInput=document.getElementById("searchInput").value 
let userInputArray=[]

if(userInput) {
    userInputArray.push(userInput);
}

//check if userinput array has anything matching stuff in myarticles array
for(let i=0; i<12; i++) {
    if(myArticles[i].includes(userInput[i])) {
        let li=document.createElement("li")
        //adds bootstrap classes to try and style it
        li.classList.add(
            "list-group-item",
            "d-flex",
            "justify-content-between",
            "align-items-center"
        )


        //set innerHTML of li element w/ task list
        li.innerHTML=`${task}`;       

    }
}