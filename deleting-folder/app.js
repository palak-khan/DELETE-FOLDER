const fs = require("fs");
fs.rmdir("sampleFolder",{ recursive:true},(err)=>{
   
    if(err){
        console.log(err)
    }else{
        console.log("Folder Deleted")
    }
})
// rmdir delete only empty folder
// recursive true se sari files ke sath folder delete ho jata hai