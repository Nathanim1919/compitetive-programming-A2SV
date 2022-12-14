/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let myArry = [];
    for(let i = 1; i <= n; i++){
          if(i % 3 == 0 && i % 5 == 0){
                myArry.push("FizzBuzz");
            }
            else if(i % 3 == 0 && i % 5 != 0){
                myArry.push("Fizz");
            }
            else if(i % 3 != 0 && i % 5 == 0){
                myArry.push("Buzz");
            }else{
                myArry.push(i.toString());
            }
    }
    return myArry;
    
};
