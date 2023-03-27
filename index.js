let movies=[
    {
        name:"falcon and the winter soldier",
        des:
         "lorem ipsum dolor sit amet consecturer adipisiting kjfhn hmfd fk,k rjyfm, gdsqsfvlhtg ssjhorg sdhho reyesuhsr5us4ri6 dhtsh",
        image:"images/slider 2.png"
    },
    {
        name:"falcon and the winter soldier",
        des:
         "lorem ipsum dolor sit amet consecturer adipisiting kjfhn hmfd fk,k rjyfm, gdsqsfvlhtg ssjhorg sdhho reyesuhsr5us4ri6 dhtsh",
        image:"images/slider 1.png"
    },
    {
        name:"falcon and the winter soldier",
        des:
         "lorem ipsum dolor sit amet consecturer adipisiting kjfhn hmfd fk,k rjyfm, gdsqsfvlhtg ssjhorg sdhho reyesuhsr5us4ri6 dhtsh",
        image:"images/slider 3.png"
    },
    {
        name:"falcon and the winter soldier",
        des:
         "lorem ipsum dolor sit amet consecturer adipisiting kjfhn hmfd fk,k rjyfm, gdsqsfvlhtg ssjhorg sdhho reyesuhsr5us4ri6 dhtsh",
        image:"images/slider 4.png"
    },
    {
        name:"falcon and the winter soldier",
        des:
         "lorem ipsum dolor sit amet consecturer adipisiting kjfhn hmfd fk,k rjyfm, gdsqsfvlhtg ssjhorg sdhho reyesuhsr5us4ri6 dhtsh",
        image:"images/slider 5.png"
    }
];
console.log(movies[1].name);

const carousel=document.querySelector('.carousel');
let sliders=[];

let slideIndex=0;

const createSlide= () => {
    if(slideIndex>=movies.length){
        slideIndex=0;
    }

    let slide=document.createElement('div');
    var imgElement=document.createElement('img');
    let content=document.createElement('div');
    let h1=document.createElement('h1');
    let p=document.createElement('p');
    
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    imgElement.src=movies[slideIndex].image;
    slideIndex++;

    slide.className="slider";
    content.className="slide-content";
    h1.className="movie-title";
    p.className="movie-des";

    sliders.push(slide);

    if(sliders.length){
        sliders[0].style.marginLeft=`calc(-${100*(sliders.length-2)}% - ${30*(sliders.length-2)}px)`;;
    }
}

for(let i=0;i<3;i++){
    createSlide();
}

setInterval(()=>{
    createSlide();
},3000);

const videoCards=[...document.querySelectorAll('.video-card')];

videoCards.forEach(item=>{
    item.addEventListener('mouseover',()=>{
        let video=item.children[1];
        video.play();
    });
    item.addEventListener('mouseleave',()=>{
        let video=item.children[1];
        video.pause();
    });
});

let cardContainers=[...document.querySelectorAll('.card-container')];
let preBtns=[...document.querySelectorAll('.pre-btn')];
let nxtBtns=[...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item,i)=>{
    let containerDimensions=item.getBoundingClientRect();
    let containerWidth=containerDimensions.width;

    nxtBtns[i].addEventListener('click',()=>{
        item.scrollLeft+= containerWidth-200;
    })
    preBtns[i].addEventListener('click',()=>{
        item.scrollLeft-= containerWidth+200;
    })

})
