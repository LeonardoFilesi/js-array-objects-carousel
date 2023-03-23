
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
    `<div class="card item text-bg-dark">
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


//Creo un ulteriore variabile che lego all'elemento o elementi html, in questo caso i div che conterranno le img, specificando
// con l'etichetta 0 in questo caso, che il primo elemento, oltre la classe di defaul .item gli si debba aggiungere anche
//la classe .active che nello specifico la faccia apparire anziche restare hidden come le altre

// IMPOSTO PRIMO SLIDE OPACITA' 1

let rowItem = document.getElementsByClassName("item");
let index = 0;

rowItem[index].classList.add("active");


// MILESTONE 3

// BONUS 2 

// creazione variabili legate ai 2 button

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
console.log(prev, next);

// creo variabile in cui nell'html conterrà l'immagine attuale grande
let actualImage = document.querySelector(".actual-image");
console.log(actualImage, typeof actualImage);

// Alla pressione del tasto next........

next.addEventListener ("click", function(){    
    
    // tolgo lo stato di opacita 1 all'img attuale sulla dx
    rowItem[index].classList.remove("active");
    
    // incremento l'indice
    index++;
    
    // Controllo per cominciare da capo
    if (index === arrayItems.length){
        // rowItem[index].classList.remove("active");
        index = 0;
        // rowItem[index].classList.add("active");        
    }
    
    // ingrandisco a sx l'immagine selezionata
    actualImage.innerHTML = rowItem[index].innerHTML;

    // aggiungo lo stato di opacità 1 all img successiva sulla dx
    rowItem[index].classList.add("active");
    
})



// Alla pressione del tasto prev........
prev.addEventListener ("click", function(){    
    
    // tolgo lo stato di non opacità all'img attuale
    rowItem[index].classList.remove("active");
    
    // decremento l'indice
    index--;

    // eseguo un HTMLFormControlsCollection, se l'indice diventa negativo, lo resetto alla max lunghezza
    if (index < 0){
       index = arrayItems.length-1;       
    }
    
    // aggiungo lo stato di opacità all img successiva, o quella retro per meglio dire
    rowItem[index].classList.add("active");
    
    actualImage.innerHTML = rowItem[index].innerHTML;


})