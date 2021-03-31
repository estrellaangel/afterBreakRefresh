let exArray =   [2, 1, 3, 4, 2, 1, 6];

function jumpingIndexes(array){
    let jumps = 0;
    let numberChecking = [Number(array[0])];
    for(i in array){
        for(nums in numberChecking){
            let possibleIndivPlaces = [];
            for(let j = 0; j<numberChecking[nums]; j++){
            possibleIndivPlaces.push(array[Number(j)+Number(i)+1]);
            }
            numberChecking = possibleIndivPlaces;
        }
        jumps++;
        for(num in numberChecking){
            if(Number(numberChecking[num]) == array[(array.length -1)]){
                return jumps;
            } 
        }
    }
}

console.log(jumpingIndexes(exArray));
