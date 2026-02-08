
function validOtp(otp) {
          if ( typeof otp !=="string"  ){
             return"Invalid";
          } if(otp.length ===8 && otp.startsWith("ph-")){
            return true;
          }
            return false;
          
        
    }
const result =validOtp(12345);
console.log(result);









