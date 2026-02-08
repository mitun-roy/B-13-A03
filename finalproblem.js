// problem solve 1
function newPrice(currentPrice , discount ) {
    if ( typeof currentPrice !=='number'||typeof discount !=='number'|| 100<discount>0){
        return 'Invalid';
    }
     const discountPrice = (currentPrice * discount)/100;
        const result = currentPrice - discountPrice;
    
  return result.toFixed(3);
          
}

// problem solve2
function validOtp(otp) {
          if ( typeof otp !=="string"  ){
             return"Invalid";
          } if(otp.length ===8 && otp.startsWith("ph-")){
            return true;
          }
            return false;       
    }


// problem solve 3
function finalScore (omr) {
 if (
 typeof omr !== "object" || typeof omr.right !== "number" || typeof omr.wrong !== "number" ||  typeof omr.skip !== "number"
) {
    return "Invalid";
}       
const omrTotal= omr.right + omr.wrong+omr.skip;
 if (omrTotal !==100){
    return "Invalid";
 }else{
const omrRight=(omr.right *1);
const omrWorng =(omr.wrong*-0.5)
const omrSkip = (omr.skip *0)
const omrScore= omrRight + omrWorng + omrSkip;
return Math.round(omrScore); 
 }
}


// problem solve 4 
function gonoVote(arrays) {
        if(!Array.isArray(arrays)){
            return "Invalid";
        }
let haVot =0;
let naVot = 0;
for (const array of arrays){
    if( array === "ha"){
        haVot ++;
    }else if( array === "na"){
        naVot ++;
    }
}
if(haVot> naVot){
    return true;
}else if(haVot === naVot){
    return "equal"
}else{
    return false;
}
}

// problem solve 5
function analyzeText(str) {

    if(typeof str !== "string" || str === "" )
     {
    return "Invalid";
  }
 const words = str.split(" ");
  let bigWord = "";
  for (let word of words) {
    while (word.length > bigWord.length) {
      bigWord = word;
    }
  }
  const totalleter = str.split(" ").join("").length;
  return {
    longwords:bigWord,
    token: totalleter
  };
}