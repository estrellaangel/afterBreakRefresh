// let exArray = ["9", "3", "4", "8", "2", "9", "5"];

// function removeExtras(array){
//     let newArr = array;
//     for(i in array){
//         for(let j = +i+1; j<array.length; j++){
//             if(array[i] == array[j]){
//                 newArr[j] = "";
//             }
//         }
//     }
//     return newArr;
// }   

// console.log(removeExtras(exArray));

//get array from 1 to 100, 1 number is missing
//find the missing number

let testArr = [1, 2, 3, 4, 5, 6, 7];
let randomMissingArr = [];

for(let i = 1; i<=100; i++){
    randomMissingArr.push(i);
}

let randomNum = Math.floor(Math.random()*100);
randomMissingArr.splice(randomNum, 1);
console.log(randomNum);


function findMissing(arr){
    let startNum = arr[0];
    let endNum = arr[arr.length -1];
    for(i in arr){
        let j = +i+1;
        if(j != arr[i]){
            console.log(`missing num is ${j}`);
            break;
        }
    }
}

findMissing(randomMissingArr);