function cSqr(n,cb){
    setTimeout(()=>{
        cb(n*n)
    },2000)
 }
  
 cSqr(2,function(res){
     console.log(res);
     cSqr(res,function(res1){
         console.log(res1);
     })
 }) 