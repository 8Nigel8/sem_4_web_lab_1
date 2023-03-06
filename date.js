
function getMaxOfArray(array) {
    let max = array[0];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
}
let dateArray = [Date('now'),Date('December 17, 1995 03:24:00'),Date('December 17, 1995 03:24:00')]

console.log(getMaxOfArray(dateArray))