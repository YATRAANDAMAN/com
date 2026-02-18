// HERO SLIDER
new Swiper(".heroSwiper", {
loop:true,
autoplay:{delay:3000},
});

// ACTIVITY SLIDER
new Swiper(".activitySwiper", {
slidesPerView:3,
spaceBetween:20,
loop:true,
breakpoints:{
0:{slidesPerView:1},
768:{slidesPerView:2},
1024:{slidesPerView:3}
}
});

// 15 DYNAMIC PACKAGES
const packages = [
{title:"3N/4D Budget Tour",price:"₹14,999",img:"images/p1.jpg"},
{title:"4N/5D Andaman Delight",price:"₹18,999",img:"images/p2.jpg"},
{title:"5N/6D Honeymoon Special",price:"₹24,999",img:"images/p3.jpg"},
{title:"6N/7D Family Package",price:"₹29,999",img:"images/p4.jpg"},
{title:"Luxury Andaman 5N",price:"₹35,000",img:"images/p5.jpg"},
{title:"Adventure Package",price:"₹22,000",img:"images/p6.jpg"},
{title:"Neil Island Special",price:"₹16,000",img:"images/p7.jpg"},
{title:"Havelock Premium Stay",price:"₹27,000",img:"images/p8.jpg"},
{title:"Rangat + Baratang Tour",price:"₹19,000",img:"images/p9.jpg"},
{title:"Corporate Group Tour",price:"₹32,000",img:"images/p10.jpg"},
{title:"Student Special",price:"₹12,500",img:"images/p11.jpg"},
{title:"Romantic Escape",price:"₹28,500",img:"images/p12.jpg"},
{title:"Island Explorer 7N",price:"₹38,000",img:"images/p13.jpg"},
{title:"Scuba Combo Package",price:"₹26,000",img:"images/p14.jpg"},
{title:"Complete Andaman 8N",price:"₹45,000",img:"images/p15.jpg"},
];

const container = document.getElementById("packageContainer");

packages.forEach(pkg=>{
container.innerHTML += `
<div class="package-card">
<img src="${pkg.img}">
<h3>${pkg.title}</h3>
<p>${pkg.price}</p>
<button onclick="bookPackage('${pkg.title}')">View & Book</button>
</div>`;
});

function bookPackage(title){
window.open(`https://wa.me/919679548741?text=I want to book ${title}`,"_blank");
}

// BOOKING FORM → WhatsApp + Gmail
document.getElementById("bookingForm").addEventListener("submit",function(e){
e.preventDefault();

let name=document.getElementById("name").value;
let phone=document.getElementById("phone").value;
let msg=document.getElementById("message").value;

let whatsappURL=`https://wa.me/919679548741?text=Name:${name}%0APhone:${phone}%0AMessage:${msg}`;
window.open(whatsappURL,"_blank");

window.location.href=`mailto:yatratoursandtravels@gmail.com?subject=New Booking&body=Name:${name}%0APhone:${phone}%0AMessage:${msg}`;
});
