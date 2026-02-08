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
// const result = analyzeText('i an a boy');
// console.log(result);


