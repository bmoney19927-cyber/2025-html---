const prompt = require("prompt-sync")();
function table(x,y,a,b){
    for(let i = x; i <= y; i++){
        console.log(`\nMultiplication of table $(i): `);

        for(let j = a; j <= b; j++) {console.log(`${i} * ${j} = ${1 * j}`);

        }
    }
}
table(1,2,1,4); 