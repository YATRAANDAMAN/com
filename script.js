new Swiper(".heroSwiper",{loop:true,autoplay:{delay:3000}});
new Swiper(".activitySwiper",{loop:true,breakpoints:{
0:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:3}
}});

function scrollToSection(id){
document.getElementById(id).scrollIntoView({behavior:"smooth"});
}
function openMore(){
window.open("https://wa.me/919679548741?text=I want full Andaman tour details");
}

const packages=[
{
name:"Honeymoon Special (5N/6D)",
price:"₹24,999",
img:"https://images.unsplash.com/photo-1523438885200-e635ba2c371e",
details:"Romantic beach stay, candle dinner, private cab"
},
{
name:"Family Holiday Package",
price:"₹19,999",
img:"https://images.unsplash.com/photo-1509099836639-18ba1795216d",
details:"Family hotels, sightseeing, kids friendly"
},
{
name:"Luxury Andaman Tour",
price:"₹39,999",
img:"https://images.unsplash.com/photo-1493558103817-58b2924bce98",
details:"Luxury resorts, premium cruise, private guide"
},
{
name:"Adventure Tour",
price:"₹29,999",
img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5",
details:"Scuba, sea walk, snorkeling included"
}
];

const container=document.getElementById("packageContainer");
packages.forEach(p=>{
container.innerHTML+=`
<div class="card">
<img src="${p.img}">
<h3>${p.name}</h3>
<p>${p.price}</p>
<button onclick='openPopup("${p.name}","${p.price}","${p.details}")'>View Details</button>
</div>`;
});

function openPopup(title,price,details){
document.getElementById("popup").style.display="block";
popupTitle.innerText=title;
popupPrice.innerText=price;
popupDetails.innerText=details;
popupBtn.onclick=()=>window.open(
`https://wa.me/919679548741?text=I want to book ${title} (${price})`
);
}
function closePopup(){popup.style.display="none";}
