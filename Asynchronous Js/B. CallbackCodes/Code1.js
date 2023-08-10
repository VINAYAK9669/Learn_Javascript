let data;
function fetchData(){
   //  the data variable get initialized after 2000ms.
   setTimeout(()=>{
      data={pCode:1001,pName:'Orange'};
   },2000)
}
function displayData(){
    console.log(data);                     // Undefined               <<This will execute 2nd
    console.log("Program ends here....");  // Program ends here....   <<This will execute 3rd
}
console.log("Program starts here...."); // Program starts here....      <<This will execute 1st
fetchData();
displayData();

// Here we can observe that the output of the line 8 is "undefined" because in javascript asynchrounous process will not block other tasks hence the displayData() function will run immediately 
// but still the variable "data" is not initialized yet hence it will return undefined.

// Now to overcome this we will the next code-2 , how we can use callback function
