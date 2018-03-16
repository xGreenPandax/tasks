function closestElement(arrayToLook,valueToCheck) {
  var temp, answer;
  arrayToLook.forEach(function(item, num){
    if(num == 0){
      temp = Math.abs(item-valueToCheck);
      answer=num;
    }else{
    if(temp > Math.abs(item-valueToCheck)){
      temp = Math.abs(item-valueToCheck);
      answer=num;
    }
    }
  })
  return "ans:"+arrayToLook[answer];
}