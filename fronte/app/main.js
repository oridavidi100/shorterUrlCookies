import "./styles/public/style.css"
document.getElementById("submit").addEventListener("click",shortApi)
document.getElementById("statistic").addEventListener("click",showData)
document.getElementById("copy").addEventListener("click",copyTextfunction)
let id ;
let userName;
let shortUrl;
const baseUrl="http://localhost:3000/"
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
    let response= await axios.post(`${baseUrl}/api`,{
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
        let response = await axios.get(`${baseUrl}/api/statistic/${id}/${userName}`)
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




//login
document.getElementById("login-nav-btn").addEventListener("click",()=>{
    const loginBar=document.querySelector(".login-form")
        loginBar.style.display="flex"
})
const loginBtn = document.getElementById('login-btn')
loginBtn.addEventListener('click', async () => {
    const userName=document.getElementById("userNamelogin").value
    const passWord=document.getElementById("loginPassWord").value
    console.log(userName,passWord)
    const loginform = document.querySelector('.login-form');
    loginform.style.display = 'none';
    try{
        let response = await axios.post('api/login',{
            "userName" : userName,
            "passWord" : passWord
        })
        console.log(response)

    }
    catch(error){
        console.log(error)
    }
  });





//signUp

  document.getElementById("signUp-nav-btn").addEventListener("click",()=>{
    const signUpBar=document.querySelector(".signUp-form")
    signUpBar.style.display="flex"
})

const signUpBtn = document.getElementById("signUp-btn")
signUpBtn.addEventListener('click', async() => {
    const userName=document.getElementById("signUpUserName").value
    const passWord=document.getElementById("signUpPassWord").value
    console.log(userName,passWord)
    const signUpform = document.querySelector(".signUp-form");
    signUpform.style.display = 'none';
    try{
        const response = await axios.post('api/newUser',{
            "userName":userName,
            "passWord":passWord
        }) 
        console.log("הצליח ")
        console.log(response)
    }
    catch{

    }
  });