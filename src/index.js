function integerDivision(denominator, divider){
  return (denominator - denominator % divider) / divider;
}
module.exports = function makeExchange(currency) { 
let  balance = currency;
let exChange = {},
  error = {error: "You are rich, my friend! We don't have so much coins for exchange"};

  if (balance > 10000) return error

  if ( integerDivision( balance, 50 ) > 0 ){
    exChange.H = integerDivision(balance, 50);
    balance = balance - exChange.H*50;
  }
   if ( integerDivision( balance, 25 ) > 0 ){
    exChange.Q = integerDivision(balance, 25);
    balance = balance - exChange.Q*25;
  }
   if ( integerDivision( balance, 10 ) > 0 ){
    exChange.D = integerDivision(balance, 10);
    balance = balance - exChange.D*10;
  }
   if ( integerDivision( balance, 5 ) > 0 ){
    exChange.N = integerDivision(balance, 5);
    balance = balance - exChange.N*5;
  }
   if ( integerDivision( balance, 1 ) > 0 ){
    exChange.P = integerDivision(balance, 1);
  }
  return exChange;
};
