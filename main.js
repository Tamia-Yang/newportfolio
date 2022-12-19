const mouseCircle = document.querySelector(".mouse-circle");
const mouseDot = document.querySelector(".mouse-dot");
const circles = document.querySelectorAll(".circle");
const z = '2rem';
let prevX = 0, prevY = 0; // previeous Coordinates
window.addEventListener("mousemove",(e,x,y)=>{
   if(prevX < e.clientX){
    circles.forEach(circle =>{
        circle.style.right =z;
        circle.style.position=""
    })

   }else if(prevX > e.clientX){
    circles.forEach(circle =>{
        circle.style.right =`-2rem`;
    })
   }


   if(prevY < e.clientY){
    circles.forEach(circle =>{
        circle.style.bottom =z;
    })

   }else if(prevY > e.clientY){
    circles.forEach(circle =>{
        circle.style.bottom =`-2rem`;
    })
  
}
prevX = e.clientX;
prevY = e.clientY;


})



// mouse circle

// const mouseCircleFn= (x,y)=>{
//     mouseCircle.style.cssText =`top:${y}px; left:${x}px; opacity:1`;
//     mouseDot.style.cssText =`top:${y}px; left:${x}px; opacity:1`;
    
// }

// document.body.addEventListener('mousemove',(e)=>{

//     let x = e.clientX;
//     let y = e.clientY;

//     mouseCircleFn(x,y);
// })
// document.body.addEventListener('mouseleave',(e)=>{

//     mouseCircle.style.opacity="0";
//     mouseDot.style.opacity="0";
   
//     mouseCircleFn(x,y);
// })

// end of mouse circle

