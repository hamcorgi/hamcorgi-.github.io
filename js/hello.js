const helloo = document.querySelector(".helloo"); //h2 tag
const loginForm = document.querySelector("#loginForm"); // loginForm set
const loginFormTag = document.querySelector("#loginForm input"); // loginForm tag

function getUsername(event) {
  event.preventDefault();
  const username = loginFormTag.value;
  localStorage.setItem("username",username);
  paintName(username);

}

function paintName(username){
  helloo.innerText = `Hello, ${username}!`;
  helloo.classList.remove("hidden");
  loginForm.classList.add("hidden");
}
const localname = localStorage.getItem("username");

if( localname === null){
  helloo.classList.remove("hidden");
  loginForm.addEventListener("submit", getUsername);

}else{
  const username = localStorage.getItem("username");
  paintName(username);
  
}

