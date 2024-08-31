const cart=[{name:"AIR Force",price:"199",img :"images/air.png",  backgroundcolor1:" rgba(177, 175, 175, 0.458)",color1:"black",color2:"blue",i:"0"},
    {name:"JORDAN",price:"180",img :"images/jordan.png",backgroundcolor1:"rgb(193, 181, 156) ;",color1:"white",color2:"green",i:"1"}
    ,{name:"blazer",price:"150",img :"images/blazer.png",backgroundcolor1:"rgb(177, 36, 64) ;",color1:"white",color2:"green",i:"2"}
    ,{name:"CRATER",price:"99",img :"images/crater.png",backgroundcolor1:"aliceblue",color1:"black",color2:"white",i:"3"},
    {name:"HIPPIE",price:"80",img:"images/hippie.png",backgroundcolor1:"lightyellow",color1:"grey",color2:"black",i:"4"}
]
const cart2=[{i:0,img:"images/air2.png"},
    {i:1,img:"images/jordan2.png"},
    {i:2,img:"images/blazer2.png"},
    {i:3,img:"images/crater2.png"},
    {i:4,img:"images/hippie2.png"}
]
let html=``;
let html2=``;
let html3=``;
const features = document.querySelector(`.features-container`)
const n1=document.querySelector(`.offers`)
const color=document.querySelector(`.image-container`)
const product = document.querySelector(`.product-container`)

const offers=document.querySelector(`.offers`)

cart.forEach((ELEMENT)=>{
 
  html = html +`<div class="n">
<div class="image-container" style="background-color:${ELEMENT.backgroundcolor1}"><img class="image" src=${ELEMENT.img} ></div>
<div class="name"> <h1 >${ELEMENT.name}</h1></div>
<div class="age">${ELEMENT.price}$</div>
<a href="#pr">
<button style="background-color:${ELEMENT.backgroundcolor1}" class="btn"> Buy Now </button></a></div>`
 offers.innerHTML=html
html2 = html2+` <div class="div-feartures"><img src="images/shipping.png" ><h4>FREE SHIPPING</h4><P class="p1">Free wordlwide shipping on all oeders.</P></div> <div class="div-feartures"> <img src="images/return (1).png" ><h4>30 DAYS RETURN</h4><p class="p1">No questuon return and easy refund in 14 days.</p></div>
<div class="div-feartures"><img src="images/gift.png"><h4>GIFT CARDS</h4><p class="p1">Buy gift cards and use coupon codes easily.</p></div><div class="div-feartures"><img src="images/contact.png" ><h4>CONTACT US</h><p class="p1">Keep in touch via email and support system.</p></div>`
 features.innerHTML=html2
 html3=html3+`<div class="product">
    <div class="image2-container"><img class="image-options${ELEMENT.i}"  src="${ELEMENT.img}" ></div>
    <div class="info-container">
<div><h1>${ELEMENT.name}</h1></div>
<div><p>$${ELEMENT.price}</p></div>
<div><p class="Lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, blanditiis voluptates? Minus debitis sapiente, placeat et dolores esse perferendis repellat eius? Ducimus blanditiis tempora, ut nemo magnam eum. Alias, aspernatur.</p></div>
<div class="color3">
    <div class="color1" style="background-color:${ELEMENT.color1}"></div>
   
    <div class="color2" style="background-color:${ELEMENT.color2}"></div></div>

<div><button>41</button><button>42</button><button>43</button></div>
<div class="btn-buy"><button style="cursor:pointer;" class="btntobuy" >BUY NOW!</button></div>
    </div>
   
</div>
`
product.innerHTML=html3



})

const features_div = document.querySelector(`.div-feartures`)


const boots= document.querySelectorAll(`.lik`)
boots.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        console.log("hi")
        features.style.transform=`translateX(${-100*index}vw)`

n1.style.transform=`translateX(${-100*index}vw)`
product.style.transform=`translateX(${-100*index}vw)`


    })
})
const btntoscroldown= document.querySelectorAll(`.btn`)
const big_container= document.querySelector(`.big-container`)

const color1=document.querySelectorAll(`.color1`)
const color2 =document.querySelectorAll(`.color2`)

   color2.forEach((color,index)=>{
    const image_options=document.querySelector(`.image-options${index}`)
    
    color.addEventListener(`click`,()=>{
        console.log(index)
        image_options.src=cart2[index].img
    })
   })
   
   color1.forEach((color,index)=>{
    const image_options=document.querySelector(`.image-options${index}`)
    
    color.addEventListener(`click`,()=>{
        console.log(index)
        image_options.src=cart[index].img
    })
   })
 const xmark=document.querySelector(`.xmark`)  
const buy=document.querySelectorAll(`.btntobuy`)
const information_container=document.querySelector(`.Information-container`)
buy.forEach((btnbuy,index)=>{

    btnbuy.addEventListener(`click`,()=>{
        console.log(index)
        information_container.classList.add(`active`)
    })
})
  xmark.addEventListener(`click`,()=>{
    information_container.classList.remove(`active`)
  })
   