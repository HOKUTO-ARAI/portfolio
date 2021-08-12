$(function(){
    $(".btn-gnavi").on("click", function(){
var rightVal=0;
if($(this).hasClass("open")){
    rightVal=-300;
    $(this).removeClass("open");
}else{
    $(this).addClass("open");   
}
        
$("#menu-navi").stop().animate({
    right: rightVal
},200);
    }); 
});

/*テキスト*/
$(function (){
    $("#section01 h1" ).textillate  ({
       loop:true,
     in:{
        effect:'flash',
        delay: 50,
        shuffle: true
    },
    out:{
        effect: 'flash',
        delay: 50
    }
    });
})

//スライドショー
var imgList = [
       "images/slider/IMG_01.JPG",
       "images/slider/IMG_02.JPG"
    ];
for(var i =0; i< imgList.length; i++){
    var slide = document.createElement("Li");
    slide.innerHTML = "<img src='"+ imgList[i]
    +"'>";
    document.getElementsByClassName("slider-inner")
    [0].appendChild(slide);
    var nav = document.createElement("Li");
    nav.setAttribute("data-nav-index", i);
    nav.style.backgroundImage="url("+
        imgList[i]+")";
    nav.style.width = 100 / imgList.length + "%";
		document.getElementsByClassName("nav")[0].appendChild(nav);
}
var length = imgList.length - 1;
	var slider = document.getElementsByClassName("slider-inner")[0].getElementsByTagName("li");
	var nav = document.getElementsByClassName("nav")[0].getElementsByTagName("li");
	var nowIndex = 0;
	var isChanging = false;
	var slideTimer;
	slider[nowIndex].classList.add("show");
	nav[nowIndex].classList.add("current");

	function sliderSlide(val) {
		if(isChanging) return false;
		isChanging = true;
		slider[nowIndex].classList.remove("show");
		nav[nowIndex].classList.remove("current");
		nowIndex = val;
		slider[nowIndex].classList.add("show");
		nav[nowIndex].classList.add("current");
		slideTimer = setTimeout(function(){
			isChanging = false;
		}, 600);
	}
	document.getElementById("arrow-prev").addEventListener("click", function(){
		var index = nowIndex - 1;
		if(index < 0) index = length;
		sliderSlide(index);
	}, false);
	document.getElementById("arrow-next").addEventListener("click", function(){
		var index = nowIndex + 1;
		if(index > length) index = 0;
		sliderSlide(index);
	}, false);
	for(var i = 0; i < nav.length; i++) {
		nav[i].onclick = function(){
			var index = Number(this.getAttribute("data-nav-index"));
			sliderSlide(index);
		};
	}



   


ScrollReveal().reveal('.anime',{
    duration:800,
    viewFactor:0.3,
    opacity: 0.3,
    reset:true
});









