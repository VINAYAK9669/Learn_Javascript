let data;
// Now the function fetchData accepts callback function as parameter
function fetchData(cb){
   setTimeout(()=>{
      data={pCode:1001,pName:'Orange'};
      //The call back function is called inside the setTimeout() function and after the variable data is initialized.
      cb(); 
      // OUTPUT: {pCode:1001,pName:'Orange'}
       // OUTPUT:Program ends here....
      
   },2000)
}
 
console.log("Program starts here...."); // OUTPUT: Program starts here....
// Here we will call the fetchData function and will pass the arguments
fetchData(function(){
    console.log(data);
    console.log("Program ends here....");
});
