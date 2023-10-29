
// this is for moving rectangle code 
window.addEventListener("mousemove",function(details){
    let rec=document.querySelector("#rect2");
    let xval=gsap.utils.mapRange(0,window.innerWidth,100+rec.getBoundingClientRect().width/2,window.innerWidth-(300+rec.getBoundingClientRect().width/2),details.clientX)
    gsap.to('#rect2',{
    //   left:details.clientX+"px",
      left:xval+"px",
      ease:Power3

    });
})