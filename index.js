//floor rounds down
console.log(Math.floor(1.7));
//round rounds to the nearest decimal point
console.log(Math.round(3.45));
//ceil rounds up the the nearest decimal
console.log(Math.ceil(0.38));
//random generates random numbers for you to use.. can be used with other math. methods
console.log(Math.round(Math.random() * 1000));
//function use of math.floor and random
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  console.log(getRandomInt(1000));

  //strings

    // .CharAt(index)
  console.log("Noel".charAt(1));
  //.sunstring(startindex, endindex)
  console.log("youtube".substring(3,6));

  
  var a = "aaa"
  var b = "ab"

  console.log(a<b);
  
  
  