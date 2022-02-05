/* let factroal =1;
for (let i=4;i>=1 ;i--){
    factroal = factroal*i;
}
console.log(factroal); */

// function use 

function factroal(i){
    if(i==1){
        return 1;   
    }
    const total =i*factroal(--i);
    return total; // total =i*factroal(--i);
}
console.log(factroal(4));

// i*factroal(--i)
// 4 * factroal(3)
//4*3 factroal(2)
//4*3*2factroal(1)
//4*3*2*1 = 24 ans