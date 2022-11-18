function toCsvText(array) {
    let myRep = "";
  for(let i = 0; i< array.length; i++){
    myRep += array[i].toString() + "\n"
  }
  return myRep.slice(0, -1)
}
