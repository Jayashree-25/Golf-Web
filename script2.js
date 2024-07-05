var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x - 80 +"px"
    blur.style.top = dets.y - 80+"px"
})
var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
       elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
       })
       elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
       })
})

gsap.to("#nav",{
    backgroundColor:"#000",
    height:"100px",
    duration: 0.6,
    scrollTrigger: {
        trigger:"#nav",
        scroller:"body",
        //markers : true,
        start: "top -10%", //halka sa scroll kaerne par dikhega
        end: "top -11%",
        scrub: 1,
    }
})

gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        //markers :true,
        start: "top -30%",
        end : "top -85%",
        scrub : 2,
    }
})
gsap.from("#about-us img, #about-us-in",{ //TO MOVE OUR ABOUT US PAGE
    y: 90,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#about-us",
        scroller: "body",
       /* marker: true,*/
        start:"top 70%",
        end:"top 65%",
        scrub:2,
    }
})
gsap.from(".Card",{ //TO MOVE OUR ABOUT US PAGE
    scale: 0.8,
    opacity: 0,
    duration: 0.5,
    stagger:
    0.1, //ek ek krke aaega about us page mein jo hai
    scrollTrigger:{
        trigger:".Card",
        scroller: "body",
       /* marker:true,*/
        start:"top 50%",
        end:"top 48%",
        scrub:1,
    }
})
gsap.from("#colon1",{
    y: -70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller: "body",
       // markers:true,
        start:"top 66%", //niche ki taraf shift karta hai
        end:"top 55%",
        scrub:3,
    }
})
gsap.from("#colon2",{
    y: 70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller: "body",
        //markers:true,
        start:"top 56%", //niche ki taraf shift karta hai
        end:"top 65%",
        scrub:3,
    }
})
gsap.from("#page4 h1",{
    y: 50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller: "body",
        //markers:true,
        start:"top 55%",
        end: "top 60%",
        scrub: 3,
    }
})
