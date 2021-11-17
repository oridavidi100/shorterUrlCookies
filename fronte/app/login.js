//login
document.getElementById('login-nav-btn').addEventListener('click', () => {
  const loginBar = document.querySelector('.login-form');
  loginBar.style.display = 'flex';
});
const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', async () => {
  const userName = document.getElementById('userNamelogin').value;
  const passWord = document.getElementById('loginPassWord').value;
  console.log(userName, passWord);
  const loginform = document.querySelector('.login-form');
  loginform.style.display = 'none';
  try {
    let response = await axios.post('api/login', {
      userName: userName,
      passWord: passWord,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
});
