/**Intermediate Algorithm Scripting: Map the Debris
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

 */

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var newArr = [];
  
    for (let elem = 0; elem < arr.length; elem++) {
      //Rounding off the orbital period value
      var orbitalPer = Math.round(
        2 * Math.PI * Math.sqrt(Math.pow(arr[elem].avgAlt + earthRadius, 3) / GM)
      );
    //Adding new object with   orbitalPeriod property
      newArr.push({name: arr[elem].name, orbitalPeriod: orbitalPer});
      };
  
    return newArr;
  }
  
  console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]))
  
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]))
  