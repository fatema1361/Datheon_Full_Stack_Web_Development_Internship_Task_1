const themeButton=document.getElementById("theme-toggle");
const menuButton=document.getElementById("menu-toggle");
const navLinks=document.getElementById("nav-toggle");
const moreButton=document.getElementById("more-toggle");
const moreOptions=document.getElementById("more-options");

const savedTheme=localStorage.getItem("portfolio-theme");
if(savedTheme==="light"){
    document.body.classList.add("light-mode");
}
else{
    document.body.classList.remove("light-mode");
}
function updateThemeIcon(){
    if(document.body.classList.contains("light-mode")){
       themeButton.textContent="🌙" ;
       themeButton.setAttribute("aria-label","Switch to dark mode");
    }
    else{
        themeButton.textContent="☀️";
        themeButton.setAttribute("aria-label","Switch to light mode");
    }
}
updateThemeIcon();

themeButton.addEventListener("click",function(){
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        localStorage.setItem("portfolio-theme","light");

    }
    else{
        localStorage.setItem("portfolio-theme","dark");
    }
    updateThemeIcon();

});

menuButton.addEventListener("click",function(){
    const isOpen=navLinks.classList.toggle("show-menu");
    menuButton.textContent=isOpen?"✕":"☰";
    menuButton.setAttribute("aria-expanded",isOpen);
});

const navigationLinks=navLinks.querySelectorAll("a");
navigationLinks.forEach(function(link){
   link.addEventListener("click",function(){
      navLinks.classList.remove("show-menu");
      menuButton.textContent="☰";
      menuButton.setAttribute("aria-expanded","false");
   });
});
// three dot
moreButton.addEventListener("click",function(){
    const isHidden=moreOptions.hidden;
    moreOptions.hidden=!isHidden;
    moreButton.setAttribute("aria-expanded",isHidden);
});
const moreLinks=moreOptions.querySelectorAll("a");

moreLinks.forEach(function(link){
    link.addEventListener("click",function(){
    moreOptions.hidden=true;
    moreButton.setAttribute("aria-expanded","false");
  });
});

document.addEventListener("click",function(event){
    if(
        !event.target.closest(".more-menu")&&
        !moreOptions.hidden
    ){
        moreOptions.hidden=true;
        moreButton.setAttribute("aria-expanded","false");
    }
});

const yearElement=document.getElementById("current-year");
yearElement.textContent=new Date().getFullYear();
