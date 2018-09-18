console.log('its too early for this shit')

// 1. DATA TYPES
// // * A light switch that can be either on or off -  Boolean variable, true is on, false is off
// const lightSwitchOn = true;
// // * A user's email address - string
// const email = "usersemail@GA.com";
// // * A spaceship with a hull, laser blasters, tractor beam, and warp drive - array
// const spaceship = ["hull", "laser blasters", "tractor beam", "warp drive"];
// // * A list of student names from our class - array
// const classRoll = ["Philip", "Kelly", "James", "Max", "Jack", "Deirdre", "Liz"];
// // * A list of student names from our class, each with a location - array of objects
// const studentLocation = [
//     {name: "Philip", location: "his bed"},
//     {name: "Jack", location: "not his bed"},
//     {name: "Ryan", location: "in the kitchen making another giant cookie"}
// ]
// // * A list of student names from our class, each with a location and each with a list of favorite tv shows - array of objects, 
// // eacn with an array for the list of favorite shows
// const studentLocationAndFavShows = [
//     {name: "Phil", location: "Cheesman park", 
//     favoriteShows: ["Star Trek", "The Office", "Rick & Morty"]},
//     {name: "Liz", location: "somewhere",
//     favoriteShows: ["The New Girl", "Friends", "Naked and Afraid"]},
//     {name: "Donny", location: "somewhere else",
//     favoriteShows: ["The Wire", "The Daily Show", "American Horror Story"]}
// ]

// 2. TAKE IT EASY
// // 1.
// const rainbowColors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];
// // 2.
// console.log(rainbowColors[4]);
// // 3.
// const Philip = {
//     favoriteFood: "chicken curry",
//     hobby: "singing",
//     town: "Denver",
//     favoriteDataType: "object" 
// }
// // 4.
// console.log(Philip.hobby);


// 3. CRAZY OBJECT

const crazyObject = {
    taco: [
      {
        meat: 'steak',
        cheese: ['panela', 'queso', 'chihuahua']
      },
      {
        meat: 'chicken',
        salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
      },
    ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [
        {
          name: "Jeff",
          occupation: "manager"
        },
        {
          name: "funkhauser",
          occupation: "tv dude"
        },
        {
          name: "susie",
          occupation: "jeffs wife",
          favourtieHobby: "Swearing at Larry and Jeff"
        },
      ]
    }
  }


console.log(crazyObject.taco[1].salsa[5]);
console.log(crazyObject.larry.quotes[0]);
console.log(crazyObject.larry.characters[2].favourtieHobby);
console.log(crazyObject.larry.nicknames[1]);
console.log(crazyObject.larry.characters[1]);
