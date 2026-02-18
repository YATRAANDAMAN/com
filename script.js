new Swiper(".heroSwiper", {
loop:true,
autoplay:{delay:3000}
});

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

const packages=[
"3N/4D Budget Tour",
"4N/5D Andaman Delight",
"5N/6D Honeymoon Special",
"6N/7D Family Package",
"Luxury 5N Tour",
"Adventure Special",
"Neil Island Tour",
"Havelock Premium",
"Rangat Baratang",
"Corporate Group",
"Student Tour",
"Romantic Escape",
"Island Explorer",
"Scuba Combo",
"Complete 8N Tour"
];

const container=document.getElementById("packageContainer");

packages.forEach(pkg=>{
container.innerHTML+=`
<div class="card">
<img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e">
<h3>${pkg}</h3>
<p>Starting ₹19,999</p>
<button onclick="book('${pkg}')">Book Now</button>
</div>`;
});

function book(title){
window.open(`https://wa.me/919679548741?text=I want to book ${title}`,"_blank");
}

document.getElementById("bookingForm").addEventListener("submit",function(e){
e.preventDefault();
let name=name.value;
let phone=phone.value;
let msg=message.value;

window.open(`https://wa.me/919679548741?text=Name:${name}%0APhone:${phone}%0AMessage:${msg}`);
});
