const { doesNotMatch } = require('assert');
const express = require('express');
const router = express.Router();
const fs=require('fs')
const path = require("path");
const moment=require("moment")

const baseUrl="https://shorturl-ori.herokuapp.com/api"

router.post("/",(req,res)=>{
    const longUrl=`${req.body.longUrl}`;
    let  userName=req.body.userName
     if (userName==="") userName="DB"
    const iD='_' + Math.random().toString(36).substr(2, 9)
    const shortUrl=baseUrl +"/"+ iD;
    if (fs.existsSync(`./backEnd/${userName}.json`)) {
        dataBase = JSON.parse(fs.readFileSync(`./backEnd/${userName}.json`, "utf-8"));
        for (let key in dataBase){
            if (dataBase[key].longUrl===longUrl){
                return res.send({"shortUrl":`${baseUrl}/${key}/${userName}`,"id":key})
            }
        }
        dataBase[iD] ={"longUrl":longUrl,"date":moment().format('LL'),"numOfEntr":0};
        fs.writeFileSync(`./backEnd/${userName}.json`, JSON.stringify(dataBase));
        res.send({"shortUrl":`${shortUrl}/${userName}`,"id":iD});
    }
    else {
        fs.writeFileSync(`./backEnd/${userName}.json`, "{}");
        const dataBase = JSON.parse(fs.readFileSync(`./backEnd/${userName}.json`, "utf-8"));
        dataBase[iD] ={"longUrl":longUrl,"date":moment().format('LL'),"numOfEntr":0};
        fs.writeFileSync(`./backEnd/${userName}.json`, JSON.stringify(dataBase));
        res.send({"shortUrl":`${shortUrl}/${userName}`,"id":iD});
      }

})




router.get("/:id/:userName", (req, res) => { 
    let userName=req.params.userName
    if (userName==="") userName="DB"
    const id=req.params.id
    let dataBase = JSON.parse(fs.readFileSync(`./backEnd/${userName}.json`, "utf-8"));
    dataBase[id]["numOfEntr"]+=1
    fs.writeFileSync(`./backEnd/${userName}.json`, JSON.stringify(dataBase));
    res.status(301).header("location", dataBase[id].longUrl);
    res.end()
})



router.get("/statistic/:id/:userName" ,(req,res)=>{
    let  userName=req.params.userName
    if (userName==="") userName="DB"
    const id=req.params.id;
    let dataBase = JSON.parse(fs.readFileSync(`./backEnd/${userName}.json`, "utf-8"));
    let data={"date":dataBase[id]["date"],"redirectCount":dataBase[id]["numOfEntr"]}
    res.send(data)
})




module.exports = router;

