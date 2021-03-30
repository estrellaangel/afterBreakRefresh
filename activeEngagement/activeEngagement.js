let day = [
    ['school', 6],
    ['food', 1],
    ['driving', 2],
    ['free time', 8],
    ['sleeping', 7],
];

day.splice(3, 0, ['study', 2]);
day[4][1] -=2;

let day2 = [
    ['school', 6],
    ['food', 1],
    ['driving', 2],
    ['study', 2],
    ['free time', 6],
    ['sleeping', 7],
]

day2.splice(5, 0, ['programming', 1]);
day2[6][1] -= 1;


for(activities in day2){
    let percent = Math.round(((day2[i][1])/24)*100);
    day2[i][2] = percent+"%";
}

console.table(day2);

//Loop the rows (vertically)
for(let i =0; i <activities.length; i++){
    //loop the collumns (horizonatally)
    for(let j = 0; j<activities[i].length; i++){
        console.log(`[ ${i} , ${j} ] = ${activities[i][j]}`);
    }
}