$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scroll > 500){
            $('scroll-up-btn').addClass("show");
        }else{
            $('scroll-up-btn').removeClass("show"); 
        }
    });

    //slide-up

   const toTop = document.querySelector(".to-top");

   window.addEventListener("scroll", () => {
        if (window.pageYoffset > 500){
            topTop.classList.add("active");
        }else{
            toTop.classList.remove("active");
        }
   })

    //typing

    var typed = new Typed(".typing", {
        strings: ["Pentester", "Devoleper" , "Designer" , "Programmer" ,"youtuber" ],
        typeSpeed:100,
        backSpeed:60,
        loop :true
    });

    var typed = new Typed(".typing-2", {
        strings: ["\n"+"Pentester","Devoleper" , "Designer" , "Programmer" ,"youtuber" ],
        typeSpeed:100,
        backSpeed:60,
        loop :true
    });

    // navbar toggle

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

});



