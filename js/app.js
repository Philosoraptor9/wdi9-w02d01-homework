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

// const crazyObject = {
//     taco: [
//       {
//         meat: 'steak',
//         cheese: ['panela', 'queso', 'chihuahua']
//       },
//       {
//         meat: 'chicken',
//         salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
//       },
//     ],
//     larry: {
//       nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
//       quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
//       characters: [
//         {
//           name: "Jeff",
//           occupation: "manager"
//         },
//         {
//           name: "funkhauser",
//           occupation: "tv dude"
//         },
//         {
//           name: "susie",
//           occupation: "jeffs wife",
//           favourtieHobby: "Swearing at Larry and Jeff"
//         },
//       ]
//     }
//   }


// console.log(crazyObject.taco[1].salsa[5]);
// console.log(crazyObject.larry.quotes[0]);
// console.log(crazyObject.larry.characters[2].favourtieHobby);
// console.log(crazyObject.larry.nicknames[1]);
// console.log(crazyObject.larry.characters[1]);


// 4. OBJECT-CEPTION
// const inception = {
//     reality: {
//         dreamLayer1: {
//             dreamLayer2: {
//                 dreamLayer3: {
//                     dreamLayer4: {
//                         dreamLayer5: {
//                             dreamLayer6: {
//                                 limbo: "Joseph Gordon Levitt"
//                            }
//                         }
//                     }
//                 }
//             }
//         }
//     }
//  }

//  inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
// console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);


// 5- 7. BOND FILMS

const bondFilms = [
    { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
    { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
    { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
    { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
    { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
    { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
    { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
    { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
    { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
    { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
    { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
    { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
    { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
    { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
    { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
    { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
    { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
    { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
    { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
    { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
    { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
    { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
    { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
  ];


// 5.
// let bondTitles = [];
// for (let i = 0; i < bondFilms.length; i++){
//     bondTitles.push(bondFilms[i].title);
// }
// console.log(bondTitles);

// 6.
// let oddBonds = [];
// for (let i = 0; i < bondFilms.length; i++){
//     if (bondFilms[i].year % 2 !== 0){
//         oddBonds.push(bondFilms[i]);
//     }
// }
// console.log(oddBonds);

// 7.
let bondGross = 0;

for (let i = 0; i < bondFilms.length; i++){
    let newStr = bondFilms[i].gross.replace(/,/gi, "").replace("$","");
    bondGross += parseInt(newStr, 10)
}
console.log(bondGross);

// find the total gross
// change it to a number (parseInt)
// push it to totalGross
// add to the total in totalGross