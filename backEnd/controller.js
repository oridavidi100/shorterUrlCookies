const URL=require('./model')
const baseUrl="http://localhost:3000/api"


exports.createNewShortUrl = async (req, res, next) => {
    try {
        const {longUrl}=req.body; 
        let  {userName}=req.body
        if (userName==="") userName="DB"
        const iD='_' + Math.random().toString(36).substr(2, 9)
        const shortUrl=baseUrl +"/"+ iD+"/"+userName;
        const userUrlArr=await URL.find({userName:userName})
        if (userUrlArr.length===0){
            const newURL = await URL.create({
                userName: userName,
                longUrl:longUrl,
                _id:iD,
                shortUrl: shortUrl,
                numOfEnter:0,
            });
            res.status(200).send({"shortUrl":`${shortUrl}`,"id":iD});
        }
        // res.send({"shortUrl":`${shortUrl}/${userName}`,"id":iD});
        else{
            for (let url of userUrlArr){
                if (url.longUrl==longUrl)
                return  res.send({"shortUrl":`${url.shortUrl}`,"id": url._id}) 
            }
            const newURL = await URL.create({
                userName: userName,
                longUrl:longUrl,
                _id:iD,
                shortUrl: shortUrl,
                numOfEnter: 0,
            });
            return  res.send({"shortUrl":`${shortUrl}`,"id":iD})
        }
    } catch (error) {
        next(error);
    }
};







