function finalScore (omr) {
 if (
 typeof omr !== "object" ||
 typeof omr.right !== "number" ||
 typeof omr.wrong !== "number" ||
  typeof omr.skip !== "number"
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
 
const result1=finalScore({ right: 50, wrong: 50, skip: 0 });
console.log(result1);


