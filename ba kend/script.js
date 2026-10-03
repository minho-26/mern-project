alert("Hello, World!");
[] //array can take any value diffrent typees of value  or we can put boolean value function or array inside array
//eg [1, "hello", true, false, [1, 2, 3]]

var arr = [1,2,3, "hello", true, false, ]; //array can take any value different types of values or we can put boolean value function or array inside array

console.log(arr); 

var newarr = arr.map(function (val){
    return 13; 
})
console.log(newarr);

//arr.filter do some function on given array and givve us a new array
var filteredArr = arr.filter(function(val){
    return val > 1;
});
console.log(filteredArr);

//arr.indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

//{} it is an object in javascript we can store key value pair inside object
{
    a:1
    b:2
    c:3
}

var obj = {
    a:1,
    b:2,
    c:3
}
console.log(obj); //accessing value of key a
object.freeze(obj); //object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In essence the object is made effectively immutable. The method returns the same object that was passed in.


//length of a function
function abcd(a, b, c){//no of parameter is length of funv=ction

    return a + b + c;
}

var ans = abcd(1, 2, 3);

await...abcd
  