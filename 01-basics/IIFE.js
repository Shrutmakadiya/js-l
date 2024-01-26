// Immediately Invoked Function Expressions (IIFE)
//Use IIFE for remove the global scope polution and IIFE is execute immediately 

(function coffee(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('shrut')