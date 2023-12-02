const input =document.getElementById('input');
let pass_generator=document.getElementById("pass-generator");
let copy=document.getElementById("copy")
console.log(pass_generator)
let len=12;

let uppercase ="QWERTYUIOPASDFGHJKLMNBVCXZ";
let lower="qwertyuioplkjhgfdsazxcvnbmn";
let num="1234567890";
let special="!@#$%^&*"
let allchar=uppercase+lower+num+special;
pass_generator.addEventListener('click',()=>{
        let password = "";
        password+=uppercase[Math.floor(Math.random()*uppercase.length)]
        password+=lower[Math.floor(Math.random()*lower.length)]
        password+=num[Math.floor(Math.random()*num.length)]
        password+=special[Math.floor(Math.random()*special.length)]

        while (len>password.length) {
            password+=allchar[Math.floor(Math.random()*allchar.length)]
        }
        input.value = password;
    }

)

copy.addEventListener('click',()=>{
    input.select();
    // document.execCommand("copy")
})
