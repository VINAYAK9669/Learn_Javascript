let data;
function fetchData(cb){
   setTimeout(()=>{
      data={pCode:1001,pName:'Orange'};
      cb();
   },2000)
}
 
console.log("Program starts here....");
fetchData(function(){
    console.log(data);
    console.log("Program ends here....");
});