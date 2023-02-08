const loginBtn = document.getElementById('submit');

const pwdInput = document.getElementById('psw');
const unameInput = document.getElementById('uname');


loginBtn.addEventListener("click", () => {

    if(pwdInput.value === 3 && unameInput.value === 4) {

        window.location.href='../capstone.html'
    }
   else {
    console.log('failure')
   }

});


console.log(unameInput)
console.log(pwdInput)