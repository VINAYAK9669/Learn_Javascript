// Compute the area of the square
function cSqr(n,cb){
    setTimeout(()=>{
        cb(n*n) // here calling the function and passing the arguments.
    },2000)
 }
  // Here we are calling cSqr function and passing the number and anonymous function
 cSqr(2,function(res){
     console.log(res); // 4
     //nested callback
     cSqr(res,function(res1){
         console.log(res1);//16
     })
 }) 
