let exArray = [2, 1, 3, 4, 2, 1, 6];

//make a function that first has to loop through every number but once it loops through one number ot goes through all the possibilities then all the posibiliteis of that until it finds the goal number


function jumpingIndexes(array) {
    let jumps = 0;
    let numberChecking = [Number(array[0])];
    for (i in array) {
        let possibleIndivPlaces = [];
        for (nums in numberChecking) {
            for (let j = 0; j < numberChecking[nums]; j++) {
                possibleIndivPlaces.push(array[Number(j) + Number(i) + 1]);
            }
            numberChecking = Number(possibleIndivPlaces);
        }
        jumps++;
        for (num in numberChecking) {
            if (Number(numberChecking[num]) == array[(array.length - 1)]) {
                return Number(jumps);
            }
        }
    }
}

function jumpingInd(arr){
    let jumps = 0;
    let finishingNum = arr[arr.length-1];
    let found = false;
    for(i in arr){
        let first = arr[i];
        let posNums = [];
        let current = 0;
        while(found == false){
            for(first; first<arr.length; first++){
                jumps++;
                for(let j = 1; j<=first; j++){
                    if(arr[+j+1] == finishingNum){
                        found = true;
                    }
                    let numberThatUrOn = +i+j;
                    posNums.push(arr[numberThatUrOn]);
                }
                console.log(`new jump ${posNums}`);
                current++;
            }
        }
        if(i == 0){
            break;
        }
    };
}

function jumping(array){
    let possibilities = [];
    let spacesToMove = array[0];
    for(let i = 0; i<spacesToMove; i++){
        possibilities.push(array[i]);
    }


}



//Inside each jump once you add to the array y

console.log(jumpingInd(exArray));
