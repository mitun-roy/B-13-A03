
function newPrice(currentPrice , discount ) {
    if ( typeof currentPrice !=='number' || 100<discount>0){
        return 'invalide';
    }
   const result = currentPrice * (discount/100);
   
    
  return result.toFixed(3);
          
}
const result = newPrice(1500,200);
console.log(result);
