

function guessNumber() {
    let person = prompt("Uw naam aub", "Klaas Bruins");

    if (person != null) {
        window.alert("Hallo!" + person + " Heb je zin aan een spelletje??");
    } let randomNum = Math.floor(Math.random() * 25 + 1);
    console.log(randomNum);
    let guess = prompt("Voer uw nummer in");



    if (guess < randomNum) {
        window.alert("U nummer is te laag! ");
    } else if (guess > randomNum) {
        window.alert("Uw nummer is te hoog!");
    } else if (guess == randomNum) {
        window.alert("Gefeliciteerd! U heeft gewonnen!");
        document.write("Dit is het einde van het spel");
    } else {
        window.alert("Error!!");
    }




}











    // let number = prompt("Hallo!" + person + " Heb je zin aan een spelletje?? Voer dan een nummer in!");
    // if (number != null && number != "") {
    // document.write("Very good");

