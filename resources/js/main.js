$(document).ready(function(){
    
    
    //STICK MENU
    $(".js__services_section").waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky");
           }
           else{
               $("nav").removeClass("sticky");
           }
           
    })
    
//    // ACTIVE LINK
    $("nav ul li").click(function(){
        $("nav ul li").removeClass("active");
        $(this).addClass("active");
    });
    
    $("nav a img.logo").click(function(){
        $("nav ul li").removeClass("active");
        $("nav ul li:first-child").addClass("active");
    });
    
    
     
    
    
    
    // MIXITUP (PORTFOLIO SECTION)
    var mixer = mixitup(".container");
    
    
    // SMOOTH SCROL FOR IE / EDGE / SAFARI
    
    $("a").on("click",function(event){
        if(this.hash !== ""){
           event.preventDefault();
           var hash = this.hash;
            $("html,body").animate({
                scrollTop: $(hash).offset().top,},800 , function(){
                window.location.hash=hash;
            });
           }
    });
    
 
    

})



function openNave(){
    document.getElementById("myNav").style.width="100%";
}

function closeNav(){
    document.getElementById("myNav").style.width="0%";
}