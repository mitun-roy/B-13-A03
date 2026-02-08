function newPrice(currentPrice , discount ) {
    if ( typeof currentPrice !=='number'||typeof discount !=='number'|| 100<discount>0){
        return 'Invalid';
    }
     const discountPrice = (currentPrice * discount)/100;
        const result = currentPrice - discountPrice;
    
  return result.toFixed(3);
          
}
// const result = newPrice(2000,17.17);
// console.log(result);
