
/*=========================================================================================*/
/*LANDING PAGE*/

/*$("#landing-page").mousemove(function(e) {
	var moveX = (e.pageX * -1/25);
	var moveY = (e.pageY * -1/25);

	$(this).css("background-position", moveX + 'px ' + moveX + 'px');
});*/

$('#landing-page').backgroundMove({
	  movementStrength:'30'
});


/*=========================================================================================*/
/*NAVBAR*/

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("nav_button").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("nav_button").style.display = "block";
}



/*=========================================================================================*/
/*PROJECTS*/

/*var tl = new TimelineMax({onUpdate:updatePercentage});
var tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from('blockquote', .5, {x:200, opacity: 0});
tl.from('.line', 1, { width: 0}, "=-.5");*/
/*tl.from('#office', .5, {x:-200, opacity: 0,ease: Power4.easeInOut});*/
/*tl.from('#building', 1, {x:200, opacity: 0, ease: Power4.easeInOut}, "=-.7");*/

/*tl2.from("#box", 1, {opacity: 0, scale: 0});
tl2.to("#box", .5, {left: "20%", scale: 1.3, borderColor: 'white', borderWidth: 12, boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.09)'})*/

/*const scene = new ScrollMagic.Scene({
  triggerElement: ".arrow1",
            triggerHook: "onLeave",
            duration: "50%"
})
.setPin(".sticky")
.setTween(tl)
.addTo(controller);*/

/*const scene2 = new ScrollMagic.Scene({
  triggerElement: "blockquote"
})
.setTween(tl2)
.addTo(controller);*/

/*
function updatePercentage() {
  //percent.innerHTML = (tl.progress() *100 ).toFixed();
  tl.progress();
  console.log(tl.progress());
}
*/




/*$("#mySidenav").click(function(){
	  $("#mySidenav").cascadelines({
	  		color: '#00F'
	  		direction: 'lr'
	  		lines: 10
	  		speed: 100
	  		zindex: "2"
	  });
});*/

/*=========================================================================================*/

/*window.addEventListener("scroll", function(e) 
{
	const target = document.querySelectorAll(".scroll");
	var index = 0, length = target.length;
    for (index; index < length; index++) 
    {
    	var pos = window.pageYOffset * target[index].dataset.rate;
		target[index].style.transform = 'translate3d('+pos+'px, 0px, 0px)';
    }

});*/


/*window.onscroll = function() {DIYkit();};

  function DIYkit() {
    if (document.body.scrollTop > 0 && document.body.scrollTop < 1105 || document.documentElement.scrollTop >= 0 && document.documentElement.scrollTop < 1105) {
      document.getElementById("name").display= "block";
  	} 
    else {
      document.getElementById("name").display= "block";
    }
  }

window.addEventListener('scroll', function(f) {

            const target = document.querySelectorAll('.scroll');


            var index = 0, length = target.length;
            for (index; index < length; index++) {
                var pos = window.pageYOffset * target[index].dataset.rate;

                if(target[index].dataset.direction === "vertical") {
                    target[index].style.transform = 'translate3d(0px,'+pos+'px, 0px)';
                } else if(target[index].dataset.direction === "horizontal") {
                    var posX = window.pageYOffset * target[index].dataset.ratex;
                    var posY = window.pageYOffset * target[index].dataset.ratey;
                    
                    target[index].style.transform = 'translate3d('+pos+'px, 0px, 0px)';
                }
            }


        });*/