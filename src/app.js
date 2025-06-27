
import "./style.css";


window.onload = function () {

    function generateCard(){
    
        //NÚMERO DE CARTA ALEATORIO
        let cardNumber = document.getElementById("cardNumber");

        function aleatoryCard() {
            let number = Math.floor(Math.random() * 12) + 1;

            if (number === 1) {
                number = "A";
            } else if (number === 10) {
                number = "J";
            } else if (number === 11) {
                number = "Q";
            } else if (number === 12) {
                number = "K";
            }
            return number;
        }
        
        cardNumber.innerHTML = aleatoryCard();

        //PALO DE LA BARAJA ALEATORIO
        let suit = document.getElementById("suit");
        let suit2 = document.getElementById("suit2");

        let suitcard = ["♦", "♥", "♠", "♣"];
        const aleatorySuit = suitcard[Math.floor(Math.random() * suitcard.length)];

        if (aleatorySuit === "♦" || aleatorySuit === "♥") {
            suit.style.color = "red";
            suit2.style.color = "red";
            cardNumber.style.color = "red";
        }

        suit.innerHTML = aleatorySuit;
        suit2.innerHTML = aleatorySuit;
    }
    
    generateCard();

    //BOTON
    const boton = document.getElementById("botonGenerar"); 
    boton.addEventListener("click", generateCard);

    //TEMPORIZADOR
    let tiempo = 10; 
    const display = document.getElementById("temporizador"); 

    const cuentaAtras = ()=> {
        display.innerText = tiempo; 
        tiempo--;  

        if (tiempo < 0){
            generateCard();
            tiempo = 10;
        } 
        
        setTimeout(() => cuentaAtras(), 1000);
        
    };

    cuentaAtras(); 
    
}; 