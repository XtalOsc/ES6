//ARROW FUNCTION
var a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
console.log(a);
var a2 = a.map(function(s){ return s.length });
console.log(a2);
var a3 = a.map( s => s.length );
console.log(a3);

//*********

//ES5
var multiply = function (x,y){
  return x * y;
}

//ES6
var multiply = (x,y) => { return x * y };

//*********

var arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

//ES5
var divisibleByThreeES5 = arrayOfNumbers.filter(function (ar){
  return ar % 3 == 0;
});

//ES6
var divisibleByThreeES6 = arrayOfNumbers.filter (ar => ar % 3 == 0);
