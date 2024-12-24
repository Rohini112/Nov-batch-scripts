function add (a,b) {
    console.log(a+b);
}
add(5,3);

//function expression
const sub = function(a,b){
    console.log(a-b);
}
sub(200,100);

//arrow function
const mul = (a,b)=>{
    console.log(a*b);
}
mul(30,20);

const msg = ()=> "Hello World!";
let res = msg();

console.log(res);