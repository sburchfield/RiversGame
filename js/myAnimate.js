$("document").ready(function(){
  $(".correct").click(function(){
    $(".correct").css("border", "10px solid #30D400");
    $(".goodjob").animate({left:"185"}, 2000, "linear");
    $(".goodjob img").css({

      //for firefox
      "-moz-animation-name":"rotatebox",
      "-moz-animation-duration":"2.5s",
      "-moz-animation-iteration-count":"1",
        "-moz-animation-fill-mode":"forwards",

      //for safari & chrome
      "-webkit-animation-name":"rotatebox",
      "-webkit-animation-duration":"2.5s",
      "-webkit-animation-iteration-count":"1",
      "-webkit-animation-fill-mode" : "forwards",

    });
  });
  $(".wrong").click(function(){
    $(".wrong").css("border", "10px solid #CD0003");
    $(".tryagain").animate({left:"1600"}, 9000, "linear");
  });

  

	 $(".playRight").click(function() {
		 
		 var obj = document.createElement("audio");
		   obj.src="audio/tada.mp3";
		   obj.autoPlay=false;
		   obj.volume=0.20;
		   obj.preLoad=true;
		   
		   function jumpPage(){
			   location.href = "dad.html"
		   };
		obj.addEventListener('ended', window.setTimeout(jumpPage, 6000), false);
		 
		 obj.play();
	 });



	$(".playWrong").click(function() {
		
		var obj2 = document.createElement("audio");
		  obj2.src="audio/choo_choo.mp3";
		  obj2.autoPlay=false;
		  obj2.volume=0.10;
		  obj2.preLoad=true;
		
		obj2.play();
	});

	

	
});
