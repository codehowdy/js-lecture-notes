// CHALLENGE 1
// Who's name is longer?
/* BRONZE
Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.
 */
/* SILVER
Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
*/
/* GOLD
In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!



//bronze
let name1 = "aurthur";
let name2 = "bob";
let difference = name1.length - name2.length;

console.log(name1.length);
console.log(name2.length);


//silver

if(name1.length >name2.length){
    console.log(`the name ${name1} is longer than ${name2} by ${name1.length - name2.length} letters`)

} else if(name1.length < name2.length){
    console.log(`the name ${name2} is longer than ${name1} by ${name2.length - name1.length} letters.`)
}
else {
    console.log('The names are the same ');
}

//gold

/*

// CHALLENGE 2
// Types Challenge
/* BRONZE
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
 */
/* SILVER
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/

var x = {age:21, car:'submarine', yellow:true, parts:{ 
    cylinders:4,
    wheels:0,
    periscope:true
}}
console.log(typeof x.yellow);


if(
    typeof x.yellow =='string' || typeof x.yellow == 'number' || typeof x.yellow =='boolean') {
        console.log(typeof x.yellow);
    }else{
        console.log('What are you');
    }
