const btns = document.querySelectorAll('Button');

for (let btn of btns){
    btn.addEventListener("click",()=>console.log("Button Click"));
}