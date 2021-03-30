let print = [];

for(let i =1; i<=100; i++){
    if(i%3 == 0 && i%5 == 0){
        print.push('FizzBuzz')
    }else if(i%3 == 0){
        print.push('Fizz');
    }else if(i%5 == 0){
        print.push(`Buzz`);
    }else{
        print.push(i);
    }
};

print = print.join(`, `);

console.log(print);