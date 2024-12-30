/*years = [1996, 2000, 1997,1994];
function leapYear(ele) {
if((ele%4 === 0 || ele%400 === 0) && ele%100 !== 0) {
    return ele;
}
}
const leap = console.log(leapYear(years));*/

// map function
var array = [1,2,3,4,5,6];
var sq_arr = array.map(function(ele){
    return ele *ele;
})
console.log(array);
console.log("New array: ",sq_arr);

//filter function
var array = [1,2,3,4,5,6];
const even = array.filter((ele)=> ele%2 === 0 );
console.log(even);

//Reduce function
var array = [1,2,3,4,5,6];
const sum = array.reduce((acc , ele) => acc+ele, 0);
console.log("Final sum:", sum);
