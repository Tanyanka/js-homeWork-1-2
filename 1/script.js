function pow(a, b) {
  var result = a;

 for (var i = 1; i < b; i++) {
   result *= a;
 }

  return result;
}

var a = prompt("Введите число:", '');
var b = prompt("Введите степень:", '');

if (b <= 1) {
  alert('Степень = ' + b +
   ', пожалуйста, введите целую степень, большую 1');
} else {
  console.log( pow(a, b) );
}
