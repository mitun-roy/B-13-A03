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
const result= gonoVote(["ha", "ha","ha"]) ; 

console.log(result);
gonoVote(["ha", "na"]); 

