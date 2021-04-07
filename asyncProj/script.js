let input = 
`'Martin Pratt: 53%',
'Kain Gibbs: 76%',
'Shantelle Shah: 82%',
'Ritik Alcock: 80%',
'Abdurahman Ratcliffe: 57%',
'Bailey Garcia: 68%',
'Freyja Joyce: 99%',
'Abraham Davison: 92%',
'Zarah Cote: 95%',
'Aayush Keith: 100%',
'Melvin Fischer: 58%',
'Blane Ayala: 68%',
'Gregg Zuniga: 76%',
'Rizwan Goodwin: 64%',
'Denise Turner: 84%',
'Shelly Reed: 89%',
'Robin Ellwood: 87%',
'Pollyanna Hopkins: 67%',
'Darcey Martins: 79%',
'Javan Rankin: 92%',
'Lina Flower: 99%',
'Millie-Rose Lacey: 65%',
'Lynda Whitley: 100%',
'Emrys Banks: 77%',
'Bradleigh Hodges: 60%',
'Aishah Knott: 94%',
'Shannen Blanchard: 90%',
'Ellise Watson: 56%',
'Kimora Carver: 54%',
'Elaina Allison: 59%',
'Kobe Odom: 61%',
'Keeleigh Searle: 97%',
'Coby Peters: 52%',
'Leslie Whitmore: 93%',
'Christian Cook: 65%',
'Esme Downes: 77%',
'Nico Clegg: 74%',
'Aine Welch: 82%',
'Noah Huber: 97%',
'Dewey Benton: 55%',
'Ubaid Shannon: 88%',
'Todd Chadwick: 81%'`;

input = input.split(',\n');
let studentNames = new Map;

//QUESTION 1
for(let i in input){
    let newStr = input[i];
    newStr = newStr.split(':');
    let newNa = newStr[0].split('');
    for(let j in newNa){
        if(`${newNa[j]}` == ` ` || `${newNa[j]}` == `'`){
            newNa.splice(j, 1);
        }
    }
    let name = newNa.join('');
    let percent = newStr[1].split('');
    for(let k in percent){
        if(`${percent[k]}` == ' ' || `${percent[k]}` == `'`){
            percent.splice(k, 1);
        }
    }
    let realPer = percent.join('');
    studentNames.set(name, realPer);
}

//QUESTION 2
console.table(studentNames)
console.log(studentNames.size);

//QUESTION 3
let additionalStudents = 
`Isobella Moyer: 95%
Star Mcdougall: 56%
Blade Lennon: 72%
Karishma Molloy: 92%
Gregor Garner: 63%
Alec Peterson: 100%
Letitia Benitez: 67%
Elicia Hoover: 55%`;

additionalStudents = additionalStudents.split('\n');

for(let p in additionalStudents){
    let newSmolArr = additionalStudents[p].split(`:`);
}

