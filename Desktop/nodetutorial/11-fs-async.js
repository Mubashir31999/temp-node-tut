
const { error } = require('console')
const {readFile,writeFile}=require('fs')
readFile('./content/first.txt','utf8',(error,result)=>{
    if(error){
        console.log(error)
        return
    }
    const first=result;
    readFile('./content/second.txt','utf8',(error,result)=>{
        if(error){
            console.log(error)
            return
        }
        const second=result;
        writeFile('./content/result-sync.txt','Here is the result:'+first+','+second,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})
