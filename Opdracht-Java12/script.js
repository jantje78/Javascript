//let selectedColours = ["Yellow", "Red", "Blue"];
/*
while (selectedColours) {

    console.log(selectedColours);

    selectedColours++;
}


let selectedColours = ["Yellow", "Red", "Blue"];
for (let i = 0; i = selectedColours.length; selectedColours++) {

    console.log(selectedColours)
}

const colors = ["Yellow", "Red", "Blue"];

colors.forEach(Element => console.log(Element));
*/
// 7lines
// 2 lines
// array method is easy to read en write. especially in arrow.
//

const user = {

    name: 'jan',

    email: 'joepie@hjdkk.nl',

    age: 25,

    birthdate: '01-04-1978',

    active: true
};



for (const key in user) {

    console.log(`${key}: ${user[key]}`);
}


