const num1 = 200;
const num2 = 200;
const barinda = (a,b) => {
    return new Promise((resolve, reject) => {
        if(a !== " " && b !== " " )
        {
            resolve( a + b);
        }
        else{
            reject(" enter the number");
        }
    });
}
module.exports = barinda(num1,num2);