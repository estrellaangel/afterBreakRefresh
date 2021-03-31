let exArray =   [2,3,0,1,4];

function jumping(arr){
    let currentNum = arr[0];
    let jumps = 0;
    for(i in arr){
        for(let j = +i+1; j<arr.length; j++){
            if(currentNum + 1 == arr[j]){
                jumps++;
                currentNum++;
            }
        }
        return jumps;
    }
    
}

console.log(jumping(exArray)); 