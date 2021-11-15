
import "./styles/public/style.css"
document.getElementById("submit").addEventListener("click",shortApi)
document.getElementById("statistic").addEventListener("click",showData)
document.getElementById("copy").addEventListener("click",copyTextfunction)
let id ;
let userName;
let shortUrl;

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

async function shortApi(){
    let div=document.getElementById("shorter")
    removeAllChildNodes(div)
    removeAllChildNodes(document.getElementById("data"))
    userName=document.getElementById("userName").value
    let longUrl=document.getElementById("url_input").value
    document.getElementById("short").style.display ="block"
   try{
    let response= await axios.post("/api",{
        "userName":userName,
        "longUrl":longUrl
    })
    shortUrl=response.data.shortUrl
    let p=document.createElement("span")
    p.innerText="your new url:\n"+"  "+(shortUrl)
    p.setAttribute("id","shorter")
    div.appendChild(p)
     id=response.data.id
}  
catch(error){
    div.innerText=(error.response.data.error)
}
}


async function showData(){
        if (userName==="") userName="DB"
        let div=document.getElementById("data")
        removeAllChildNodes(div)
        let response = await axios.get(`api/statistic/${id}/${userName}`)
        let data=(response.data)
        let p = document.createElement("p")
        p.innerText=(`creation Date:${data.date}  
        redirect Count:${data.redirectCount}`)
        div.appendChild(p)
}  

function copyTextfunction() {
    /* Get the text field */
    var copyText =shortUrl;
    console.log(shortUrl)
    const url = copyText.split('copy')[0];
    navigator.clipboard.writeText(url);
  }