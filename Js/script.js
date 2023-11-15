// partiamo con l'esercizio delle mail 
// ci creiamo un arrey con una lista di mail fittizie
const listEmail = ["lamiamail@bella.it", "lamiasecondamail@bella.it", "lamiaterzamail@bella.it"]; 

// ci creiamo sul html un form dove il cliente inserirà i dati 
const inputEmail = document.querySelector(".input-email");
const buttonSend = document.querySelector(".input-button");
const risultatoElement = document.getElementById("valore");
let trovata = false;

// prendiamo il bottone e creiamo una lista di eventi al suo click
buttonSend.addEventListener("click", function(){
    const userEmail = inputEmail.value;

    let trovata = false;

    for(let index = 0; index < listEmail.length; index++){
        if (listEmail[index] === userEmail) {        
            trovata = true;
            
        } 
    };   
    
    console.log("trovata: " + trovata );

    if(trovata === true ) {
        risultatoElement.innerHTML = "Email esatta!"
    } else {
        risultatoElement.innerHTML = "Email errata!"
    }
});


// Gioco dei dadi
let result = document.querySelector("#result");
// creiamo dove andare a prendere il bottone per iniziare il nostro gioco
let buttonGame = document.querySelector(".button-game");

// ci creiamo la condizione in cui cliccando sul bottone selezionato si genera un gioco
buttonGame.addEventListener("click", function () {

// genero due costanti che saranno i numeri generati dal cliente e dal computer
    const userNumber = Math.floor(Math.random() * 6) +1;
    const aiNumber = Math.floor(Math.random() * 6) +1;

// se il numero dell'utente è maggiore del numero dell'ai , verra' creato in pagina una scritta hai vinto, con entrambi i numeri, il br sta per farli andare a capo
    if (userNumber > aiNumber) {
    result.innerHTML = "<br> You Wins!" + "<br> Il tuo numero: " + userNumber + "<br> il mio numero: " + aiNumber;

// se il numero dell'utente è minore del numero dell'ai , verra' creato in pagina una scritta hai vinto, con entrambi i numeri, il br sta per farli andare a capo
    } else if (userNumber < aiNumber){
    result.innerHTML = "<br> You Loser!" + "<br> Il tuo numero: " + userNumber + "<br> il mio numero: " + aiNumber;

// se il numero dell'utente è uguale al numero dell'ai , verra' creato in pagina una scritta hai vinto, con entrambi i numeri, il br sta per farli andare a capo
    } else {
        result.innerHTML = "<br> Parity!" + "<br> Il tuo numero: " + userNumber + "<br> il mio numero: " + aiNumber;
    }
// prendo il pulsante dal html per far in modo che funzioni il tutto al click
});