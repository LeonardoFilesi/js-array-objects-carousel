
// MILESTONE 2

// Da consegna ho un array con all'iterno 5 elementi
const arrayItems = [
    {
        title : "Spider-man: Miles Morales",
        description : "Begin the Miles Morale's adventure in the Marvel Expanded Universe world",
        image : "img/01.webp",
    },  {
        title : "Rachet & Clank",
        description : "This new Rachet & Clank adventure will lead you in the multiverse",
        image : "img/02.webp",
    },  {
        title : "Fortnite",
        description : "Join our community and play as the popular character of the moment, we have literally everyone",
        image : "img/03.webp",
    }, {
        title : "Stray",
        description : "Play as a cat, need further reasons?",
        image : "img/04.webp",
    }, {
        title : "Marvel's Avengers",
        description : "Just the avengers, nothing particular",
        image : "img/05.webp",
    }, 
  
];

const itemCont = document.querySelector (".slider-items");

// tramite ciclo for, stampero in console log tutti questi elementi, che scorrerà ogni l'etichetta di arrayItems e da 0 a 4, cosi da creare image
// formato dai 5 elementi (da 0 a 4) dell'array di partenza arrayItems

for (let i = 0; i < arrayItems.length ; i++) {
    // creo una variabile d'appoggio "currentItem"
    const currentItem = arrayItems[i];
    // creo quindi ogni singolo elemento [] che comporrà l'array sfruttando un contatore
    const sliderItem = 
    `<div class="card item text-bg-dark" style="height: calc(100% / ${arrayItems.length})">
        <img src="${currentItem.image}" class="card-img">
        <div class="card-img-overlay">
            <h5 class="card-title">${currentItem.title}</h5>
            <p class="card-text">${currentItem.description}</p>
        </div>
    </div>`;

    // ora aggiungo in maniera dinamica all'interno di questa variabile contenitore precedenemnte dichiarata come aggancio a un elemento html, ogni
    // elemento array
    itemCont.innerHTML += sliderItem; 
    console.log (itemCont)    
}

// creo variabile in cui nell'html conterrà l'immagine attuale grande
let actualImage = document.querySelector(".actual-image");
console.log(actualImage, typeof actualImage);

//Creo un ulteriore variabile che lego all'elemento o elementi html, in questo caso i div che conterranno le img, specificando
// con l'etichetta 0 in questo caso, che il primo elemento, oltre la classe di defaul .item gli si debba aggiungere anche
//la classe .active che nello specifico la faccia apparire anziche restare hidden come le altre

// IMPOSTO PRIMO SLIDE OPACITA' 1

function bigImageActive() {
    actualImage.innerHTML = rowItem[index].innerHTML;
    rowItem[index].classList.add("active");
}

let rowItem = document.getElementsByClassName("item");
let index = 0;

bigImageActive();


// MILESTONE 3

// BONUS 2 
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
console.log(prev, next);

// Premo tasto next
next.addEventListener ("click", function(){    
    
    rowItem[index].classList.remove("active");
    
    index++;
    
    // Controllo per cominciare da capo
    if (index === arrayItems.length){
        index = 0;       
    }
    
    // ingrandisco a sx l'immagine selezionata
    bigImageActive();
    
})



// Premo tasto prev
prev.addEventListener ("click", function(){    
    
    rowItem[index].classList.remove("active");
    
    index--;

    // eseguo un HTMLFormControlsCollection, se l'indice diventa negativo, lo resetto alla max lunghezza
    if (index < 0){
       index = arrayItems.length-1;       
    }
    
    bigImageActive();

})

function nextButtonFunction() {
    rowItem[index].classList.remove("active");
    
    index++;

    // Controllo per cominciare da capo
    if (index === arrayItems.length){
        index = 0;       
    }

    // ingrandisco a sx l'immagine selezionata
   bigImageActive();
}

const clock = setInterval(nextButtonFunction, 3000);