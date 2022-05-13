console.log("linked");


let upbtn = document.querySelector(".up");

let upbtn_function =()=>{
    window.addEventListener("scroll",()=>{
        value = window.pageYOffset ;
        // console.log(value)
        if (value>200) {
            upbtn.classList.add("upbtn-show")
        }else{
            upbtn.classList.remove("upbtn-show")
        }
    })
}
upbtn_function();
upbtn.addEventListener("click",()=>{
    scrollTo(0,0);
});




// skillbars...


let html_fill = document.querySelector(".html");
let about = document.querySelector(".about-section");
let  bdy= document.querySelector("body");

 console.log( "about" + about.clientHeight)
//  window.addEventListener("scroll",()=>{

    
//  })

// about.addEventListener("wheel",()=>{
//     value2 = about.scrollTop;
//     console.log(value2);

//     if (value2 > 500){

//     html_fill.classList.add("html-bar-fill")

//     } else {
//         html_fill.classList.remove("html-bar-fill")
//     }
// })



let menuitem = document.querySelectorAll(".menuitem");

for (var i = 0; i < menuitem.length; i++) {
    menuitem[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }
    
// }
// menuitem.forEach((menu)=>{
// menu.addEventListener("click",()=>{
//     // menu.classList.add("focus");
//   "focus"
// })
// })

let modebtn = document.querySelector(".mode");
modebtn.addEventListener("click",()=>{
    let container = document.querySelector(".container");
    let section = document.querySelector(".section");
    let about_section = document.querySelector(".about-section");
    let nav = document.querySelector("nav");
    let skill_section = document.querySelector(".skill-section");
    // console.log(container);
    let about1 = about_section.querySelector(".content");
    console.log(about1);

about1.classList.toggle("day-mode");






    
    //    container.style.background = "white";
//    nav.style.background = "white";
//    section.style.background = "white";
//    about_section.style.background = "white";
   x = [nav, section ,about , container,skill_section];
//    console.log(x);
   x.forEach((element) => {
       element.classList.toggle("day-mode");
    //    element.style.color= "black";
       
   });
  
})


let scss_bar = document.querySelector(".scss");
let technica_skill = document.querySelector(".technical-skill");
console.log(technica_skill);
window.addEventListener("wheel",()=>{
 scss_bar.classList.add("skill-bar-fill-90");
 html_fill.classList.add("html-bar-fill")
})
