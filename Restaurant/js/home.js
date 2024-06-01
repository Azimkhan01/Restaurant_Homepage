let arr ={
    delivery:"https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVsaXZlcnl8ZW58MHx8MHx8fDA%3D",
    party:"https://images.unsplash.com/photo-1481671703460-040cb8a2d909?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxUUnNKT2d0SmRsY3x8ZW58MHx8fHx8",
    dinein:"https://images.unsplash.com/photo-1520869578617-557561d7b114?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlubmluZyUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
    parcel:"https://images.unsplash.com/photo-1603067389396-a3acf81e5cb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2QlMjBwYWNraW5nJTIwaW4lMjBib3h8ZW58MHx8MHx8fDA%3D",
}
let parcel = document.getElementById("parcel")
let delivery = document.getElementById("delivery")
let dinein = document.getElementById("dine")
let party = document.getElementById("party")
// console.log(list)
parcel.addEventListener("mouseenter",function(event){
 console.log("mouse clicked")
 document.getElementById("page5").style.cssText = 'background-image:url("'+arr["parcel"]+'");background-size:cover;transition:all 0.8s ease-in-out'
})
parcel.addEventListener("mouseleave",()=>{
    document.getElementById("page5").style.cssText = "dispaly:none"
})
party.addEventListener("mouseenter",function(event){
    console.log("mouse enter")
    document.getElementById("page5").style.cssText = 'background-image:url("'+arr["party"]+'");background-size:cover;transition:all 0.8s ease-in-out'
   })
   party.addEventListener("mouseleave",()=>{
    document.getElementById("page5").style.cssText = "dispaly:none"
})
   
delivery.addEventListener("mouseenter",function(event){
    console.log("mouse clicked")
    document.getElementById("page5").style.cssText = 'background-image:url("'+arr["delivery"]+'");background-size:cover;transition:all 0.8s ease-in-out'
   })
   delivery.addEventListener("mouseleave",()=>{
    document.getElementById("page5").style.cssText = "dispaly:none"
})
   
dinein.addEventListener("mouseenter",function(event){
    console.log("mouse clicked")
    document.getElementById("page5").style.cssText = 'background-image:url("'+arr["dinein"]+'");background-size:cover;transition:all 0.8s ease-in-out'
   })
   dinein.addEventListener("mouseleave",()=>{
    document.getElementById("page5").style.cssText = "dispaly:none"
})
// let p1 = document.getElementById("page1")
// let p2 = document.getElementById("page2")
// let p3 = document.getElementById("page3")
// // let p4 = document.getElementById("page4")
// let p5 = document.getElementById("page5")
// p1.addEventListener("mouseenter",()=>{
//  document.getElementById("footer").style.cssText = 'display:none;transition:all 0.5s linear';   
// })
// p2.addEventListener("mouseenter",()=>{
//     document.getElementById("footer").style.cssText = 'display:none;transition:all 0.5s linear';   
//    })
//    p3.addEventListener("mouseenter",()=>{
//     document.getElementById("footer").style.cssText = 'display:none;transition:all 0.5s linear';   
//    })
//    p4.addEventListener("mouseenter",()=>{
//     document.getElementById("footer").style.cssText = 'display:none;transition:all 0.5s linear';   
//    })
//    p5.addEventListener("mouseenter",()=>{
//     document.getElementById("footer").style.cssText = 'display:none;transition:all 0.5s linear';   
//    })
//    p1.addEventListener("mouseleave",()=>{
//     document.getElementById("footer").style.cssText = 'display:flex;transition:all 0.5s linear';   
//    })
//    p2.addEventListener("mouseleave",()=>{
//        document.getElementById("footer").style.cssText = 'display:flex;transition:all 0.5s linear';   
//       })
//       p3.addEventListener("mouseleave",()=>{
//        document.getElementById("footer").style.cssText = 'display:flex;transition:all 0.5s linear';   
//       })
//       p4.addEventListener("mouseenter",()=>{
//        document.getElementById("footer").style.cssText = 'display:none;transition:all 0.5s linear';   
//       })
//       p5.addEventListener("mouseleave",()=>{
//        document.getElementById("footer").style.cssText = 'display:flex;transition:all 0.5s linear';   
//       })
   
