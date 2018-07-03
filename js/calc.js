document.addEventListener("DOMContentLoaded",function(){
  var posOp1 = document.getElementsByClassName('operator');
  var posNum1 = document.getElementsByClassName('buttonNum');
  var posEquals = document.getElementsByClassName("equals")
  var posClear = document.getElementsByClassName('buttonClear');
  var result;
  var number2

  for (var i = 0; i < posNum1.length; i++) {
    posNum1[i].addEventListener("click", function(){
      var number1 = this.innerHTML;
      console.log(number1 + " was clicked");
      return number1;
    })
  }

  for (var i = 0; i < posOp1.length; i++) {
  posOp1[i].addEventListener("click", function(number1){
    var operator1 = this.innerHTML;
    console.log(operator1 + " was clicked");
    if (operator1 == "+" || operator1 == "-" || operator1 == "/" || operator1 == "*") {
      for (var i = 0; i < posNum1.length; i++) {
        posNum1[i].addEventListener("click", function(){
          number2 = this.innerHTML;
          console.log(number2 + " was clicked");
          return number2;
          switch (operator1) {
            case "+":
              result = number1 + number2;
              break;
            case "-":
              if (number1<number2) {
                result = number2 - number1;
              }else{
                result = number1 - number2;
              }
              break;
            case "*":
              result = number1 * number2;
              break;
            case "/":
              if (number2 > 0 || number2 < 0) {
                result = number1/number2;
              }
              break;
            default:
            }
            alert(result);
          })
        }   //else
    }
    })
  }

  for (var i = 0; i < posEquals.length; i++) {
  posEquals[i].addEventListener("click", function(){
    var equals = this.innerHTML;
    console.log(equals + " was clicked");
    return equals;
    })
  }
})
