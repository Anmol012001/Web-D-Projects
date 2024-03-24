const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXY";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const special = "!@#$%^&*(){}|?/";
const number = "0123456789";
const password = document.getElementById("psswd");
const allchar = uppercase + lowercase+ number +special;
const length = 12;

function checkpsswd(){
    let psswd = "";
    psswd += uppercase[Math.floor(Math.random() * uppercase.length)];
    psswd += lowercase[Math.floor(Math.random() * lowercase.length)];
    psswd += special[Math.floor(Math.random() * special.length)];
    psswd += number[Math.floor(Math.random() * number.length)];

    while(psswd.length < length)
    {
        psswd += allchar[Math.floor(Math.random()*allchar.length)];
    }
    
    password.value = psswd;
    console.log("HI");
}

const copybtn = document.querySelector(".copybtn");
function copypsswd(){
    password.select();
    document.execCommand('copy');
}

copybtn.addEventListener('click', copypsswd);
