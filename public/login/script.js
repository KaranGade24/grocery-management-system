const emailInput = document.querySelector(".email-input");
const password = document.querySelector(".pass-input");
const loginBtn = document.querySelector("#login-btn");

// console.log(password);


const userName = localStorage.getItem("userName");
const userPassword = localStorage.getItem("userPassword");

// console.log(window.location);





//
//
async function auth(userData) {
  const res = await  fetch("/login",{
method:"POST",
headers:{
    "Content-Type":"application/json",
},
body: JSON.stringify({userData})
    })

  const  msg = await res.json();
//   console.log(res , msg);
  
  if (res.status != 401) {
      alert(msg);
      localStorage.setItem("userName",userData.name)
      localStorage.setItem("userPassword",userData.password);
    window.location.href = "/";
  }
  else{
    alert(msg); 
  }
   }



//    loginBtn.addEventListener("click",()=>{console.log("dfguik");})

loginBtn.addEventListener("click",()=>{
    // console.log("clicked");
    
  var userData = {
    name: emailInput.value,
    password: password.value,
  }

//   console.log(userData);
  
  auth(userData);

   emailInput.value = ""
 password.value = ""

})
