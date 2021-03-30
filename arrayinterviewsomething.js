let exArray = ["9", "3", "4", "8", "2", "9", "5"];

function removeExtras(array){
    let newArr = array;
    for(i in array){
        for(let j = +i+1; j<array.length; j++){
            if(array[i] == array[j]){
                newArr[j] = "";
            }
        }
    }
    return newArr;
}   

console.log(removeExtras(exArray));