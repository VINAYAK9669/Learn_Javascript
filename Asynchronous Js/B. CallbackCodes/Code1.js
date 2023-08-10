let data;
function fetchData(){
   setTimeout(()=>{
      data={pCode:1001,pName:'Orange'};
   },2000)
}
function displayData(){
    console.log(data);
    console.log("Program ends here....");
}
console.log("Program starts here....");
fetchData();
displayData();