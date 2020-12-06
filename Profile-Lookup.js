// contacts Array that hold multiiple complex objects
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

/* The function takes name and a property (prop) as arguments.
The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact. */
function lookUpProfile(name, prop){

// Using a for loop to cycle through the contacts list.
for (var i = 0; i < contacts.length; i++) {
    // Using a nested if statement to first check if the firstName matches, and then checks if the prop matches.
    if (contacts[i]["firstName"] === name) {
      if (contacts[i].hasOwnProperty(prop)) {
          return contacts[i][prop];
      // if prop doesnt match then we return this
      } else {
          return "No such property";
      }
    } 
 }
 // after all if the for loop went through all the elements and no value was found we return this
 return "No such contact";
}

lookUpProfile("Akira", "likes");