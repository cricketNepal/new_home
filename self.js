{/* <i name="menu" id="bar" class="fa fa-bars" aria-hidden="true"></i>
        <i name="close" id="cross" class="fa fa-times" aria-hidden="true"></i> */}

        const start=document.querySelector(".mobile")
        const head=document.querySelector(".header");
        const mainDiv=document.querySelector("#main");

const activeClass=()=>{
    head.classList.toggle("active");
}
 mainDiv.addEventListener('click',()=>{
        head.classList.remove("active");
    });

start.addEventListener('click',activeClass);


const message=document.querySelector(".send");
const you=document.getElementById("okay")
const done=document.querySelector("#show");
let refrence;
const send=()=>{
refrence=setTimeout(()=>{
    you.innerHTML="Thank you for your message";
},5);
}

message.addEventListener('click',send);


done.addEventListener('change',()=>{
   clearTimeout(refrence);
});


const contact=document.querySelector("#phone");
const main=document.querySelector(".main");

const clicked=()=>{
main.classList.toggle("don");
}

contact.addEventListener('click',clicked);
