/* - - - - - - - - - - - - - - - -
    Author: River
    Date: 1/06/2025
    Description: This a 'Choose Your Own Adventure' where a user will choose between three Pokemon. 
                 What could await them next?
 - - - - - - - - - - - - - - - - */

 "use strict";

 window.onload = () => {

    //declare constants/variables

        const btn1 = document.getElementById("btn1");
        const btn2 = document.getElementById("btn2");
        const btn3 = document.getElementById("btn3");
        const btn4 = document.getElementById("btn4");
        const btn5 = document.getElementById("btn5");
        const btn6 = document.getElementById("btn6");
        const theEnd = document.getElementById("theEnd");
        let myImage = document.getElementById("myImage");
        let h1 = document.getElementById("h1");
        let p1 = document.getElementById("p1");
        const figCap = document.getElementById("figCap");

    //Do not show h2 element with id #theEnd when page loads

        theEnd.style.display = "none";

       

    //onclick event will run if user clicks btn1

        btn1.onclick = () => {
            if (btn1.value === "charmander"){
                myImage.src = "images/charmander.jpg";
                figCap.style.display = "none";
                h1.innerHTML = "Congrats Pokemon trainer! You have chosen your first Pokemon!"
                p1.innerHTML = "You have chosen Charmander! A great choice for someone as fierce as you. Where will you travel to with your new friend?";
                btn1.value = "johto";
                btn1.innerHTML = "Johto";
                btn2.value = "alola";
                btn2.innerHTML = "Alola";
                btn3.value = "galar";
                btn3.innerHTML = "Galar";
                console.log(btn1);
                
            } 
            else if (btn1.value === "johto") {
                myImage.src = "images/johto.png";
                myImage.width = "600";
                //myImage.height = "600";
                figCap.style.display = "none";
                p1.innerHTML = "You have chosen Johto as the first adventure with your new friend! What adventures will await you in the next episode? Your journey will continue..... in the next episode!";
                theEnd.style.display = "block";
                h1.style.display = "none";
                btn1.style.display = "none";
                btn2.style.display = "none";
                btn3.style.display = "none";
            }

        }

    //onclick event will run if user clicks btn2

        btn2.onclick = () => {
            if (btn2.value === "bulbasaur"){
                myImage.src = "images/bulbasaur.jpg";
                figCap.style.display = "none";
                h1.innerHTML = "Congrats Pokemon trainer! You have chosen your first Pokemon!"
                p1.innerHTML = "You have chosen Bulbasaur! A great choice for someone that likes to take initiative. Where will you travel to with your new friend?";
                btn1.value = "johto";
                btn1.innerHTML = "Johto";
                btn2.value = "alola";
                btn2.innerHTML = "Alola";
                btn3.value = "galar";
                btn3.innerHTML = "Galar";
                
            } 
            else if (btn2.value === "alola") {
                myImage.src = "images/alola.png";
                myImage.width = "600";
                figCap.style.display = "none";
                p1.innerHTML = "You have chosen Alola as the first adventure with your new friend! What adventures will await you in the next episode? Your journey will continue..... in the next episode!";
                theEnd.style.display = "block";
                h1.style.display = "none";
                btn1.style.display = "none";
                btn2.style.display = "none";
                btn3.style.display = "none";
            }

        }

    //onclick event will run if user clicks btn2

       btn3.onclick = () => {
            if (btn3.value === "squirtle"){
                myImage.src = "images/squirtle.jpg";
                figCap.style.display = "none";
                h1.innerHTML = "Congrats Pokemon trainer! You have chosen your first Pokemon!"
                p1.innerHTML = "You have chosen Bulbasaur! A great choice for someone that likes to be loyal. Where will you travel to with your new friend?";
                btn1.value = "johto";
                btn1.innerHTML = "Johto";
                btn2.value = "alola";
                btn2.innerHTML = "Alola";
                btn3.value = "galar";
                btn3.innerHTML = "Galar";
                    
            } 
            else if (btn3.value === "galar") {
                myImage.src = "images/galar.png";
                figCap.style.display = "none";
                p1.innerHTML = "You have chosen Galar as the first adventure with your new friend! What adventures will await you in the next episode? Your journey will continue..... in the next episode!";
                theEnd.style.display = "block";
                h1.style.display = "none";
                btn1.style.display = "none";
                btn2.style.display = "none";
                btn3.style.display = "none";
            }
    
        }

 } //onload end of function

