// array

//Shallow copy
    /*
        => Java-Script array-copy operations create shallow copy
        => shallow copy share the same reference of the source object from which the copy was made.
    */

//deep copy
    /*
        => deep copy do not share the same reference of the source object from which the copy was made. 
    */

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(30));
    /* if indexOf(n)  n  is not available in array so output is = -1 */

// const newArr = myArr.join() 
    /* join() convert array to string */
// console.log(newArr);

// console.log(myArr);
// console.log( newArr);



// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

/* 
    *Slice
        =>return new array
        =>do not disturb (changes) in original array
        =>don't count the range 

    *Splice
        =>return original modified array
        =>disturb original array
        =>count the range
*/

// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);




const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);



// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



// console.log(Array.isArray("Shrut"))
// console.log(Array.from("Shrut"))
// console.log(Array.from({name: "Shrut"})) // interesting
// console.log(Array.from([1, 2, 3], (x) => x + x));

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));