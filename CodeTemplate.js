$(document).ready(function(){
	
document.body.onmousedown = function() { return false; } //so page is unselectable

	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	initializeLib(ctx);
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	var mx, my;

	numObjects = 0;
	numObjectsLoaded =0;
	var screen = 0;
	
     var brick1 = createObjectPic("Images/red-rectangle-hi.png")
	  brick1.scale = 0.07
     var brick2 = createObjectPic("Images/red-rectangle-hi.png")
	   brick2.scale = 0.07
     var brick3 = createObjectPic("Images/red-rectangle-hi.png")
	   brick3.scale = 0.07
              var brick4 = createObjectPic("Images/red-rectangle-hi.png")
	   brick4.scale = 0.07
  var brick5 = createObjectPic("Images/red-rectangle-hi.png")
	   brick5.scale = 0.07
  var brick6 = createObjectPic("Images/red-rectangle-hi.png")
	  brick6.scale = 0.07
  var brick7 = createObjectPic("Images/red-rectangle-hi.png")
	  brick7.scale = 0.07
  var brick8 = createObjectPic("Images/red-rectangle-hi.png")
	  brick8.scale = 0.07
  var brick9 = createObjectPic("Images/red-rectangle-hi.png")
	  brick9.scale = 0.07
  var brick10 = createObjectPic("Images/red-rectangle-hi.png")
	  brick10.scale = 0.07
  var brick11 = createObjectPic("Images/red-rectangle-hi.png")
	  brick11.scale = 0.07
  var brick12 = createObjectPic("Images/red-rectangle-hi.png")
	  brick12.scale = 0.07
  var brick13 = createObjectPic("Images/red-rectangle-hi.png")
	  brick13.scale = 0.07
  var brick14 = createObjectPic("Images/red-rectangle-hi.png")
	  brick14.scale = 0.07
  var brick15 = createObjectPic("Images/red-rectangle-hi.png")
	  brick15.scale = 0.07
  var brick16 = createObjectPic("Images/red-rectangle-hi.png")
	  brick16.scale = 0.07
  var brick17 = createObjectPic("Images/red-rectangle-hi.png")
	  brick17.scale = 0.07
  var brick18 = createObjectPic("Images/red-rectangle-hi.png")
	  brick18.scale = 0.07
  var brick19 = createObjectPic("Images/red-rectangle-hi.png")
	  brick19.scale = 0.07
  var brick20 = createObjectPic("Images/red-rectangle-hi.png")
	  brick20.scale = 0.07
  var brick21 = createObjectPic("Images/red-rectangle-hi.png")
	  brick21.scale = 0.07
 var brick22 = createObjectPic("Images/red-rectangle-hi.png")
	  brick22.scale = 0.07
  var brick23 = createObjectPic("Images/red-rectangle-hi.png")
	  brick23.scale = 0.07
 //bricks24-50
  var brick24 = createObjectPic("Images/red-rectangle-hi.png")
	  brick24.scale = 0.07
  var brick25 = createObjectPic("Images/red-rectangle-hi.png")
	  brick25.scale = 0.07
  var brick26 = createObjectPic("Images/red-rectangle-hi.png")
	  brick26.scale = 0.07
  var brick27 = createObjectPic("Images/red-rectangle-hi.png")
	  brick27.scale = 0.07
  var brick28 = createObjectPic("Images/red-rectangle-hi.png")
	  brick28.scale = 0.07
  var brick29 = createObjectPic("Images/red-rectangle-hi.png")
	  brick29.scale = 0.07
  var brick30 = createObjectPic("Images/red-rectangle-hi.png")
	  brick30.scale = 0.07
  var brick31 = createObjectPic("Images/red-rectangle-hi.png")
	  brick31.scale = 0.07
  var brick32 = createObjectPic("Images/red-rectangle-hi.png")
	  brick32.scale = 0.07
   var brick33 = createObjectPic("Images/red-rectangle-hi.png")
	  brick33.scale = 0.07
  var brick34 = createObjectPic("Images/red-rectangle-hi.png")
	  brick34.scale = 0.07
	var brick35 = createObjectPic("Images/red-rectangle-hi.png")
	  brick35.scale = 0.07
	var brick36 = createObjectPic("Images/red-rectangle-hi.png")
	  brick36.scale = 0.07
	var brick37 = createObjectPic("Images/red-rectangle-hi.png")
	  brick37.scale = 0.07
	var brick38 = createObjectPic("Images/red-rectangle-hi.png")
	  brick38.scale = 0.07
	var brick39 = createObjectPic("Images/red-rectangle-hi.png")
	  brick39.scale = 0.07
	var brick40 = createObjectPic("Images/red-rectangle-hi.png")
	  brick40.scale = 0.07
	var brick41 = createObjectPic("Images/red-rectangle-hi.png")
	  brick41.scale = 0.07
	var brick42 = createObjectPic("Images/red-rectangle-hi.png")
	  brick42.scale = 0.07
	var brick43 = createObjectPic("Images/red-rectangle-hi.png")
	  brick43.scale = 0.07
	var brick44 = createObjectPic("Images/red-rectangle-hi.png")
	  brick44.scale = 0.07
	var brick45 = createObjectPic("Images/red-rectangle-hi.png")
	  brick45.scale = 0.07
	var brick46 = createObjectPic("Images/red-rectangle-hi.png")
	  brick46.scale = 0.07
	var brick47 = createObjectPic("Images/red-rectangle-hi.png")
	  brick47.scale = 0.07
	var brick48 = createObjectPic("Images/red-rectangle-hi.png")
	  brick48.scale = 0.07
	var brick49 = createObjectPic("Images/red-rectangle-hi.png")
	  brick49.scale = 0.07  
	var brick50 = createObjectPic("Images/red-rectangle-hi.png")
	  brick50.scale = 0.07  
	 var brick51 = createObjectPic("Images/red-rectangle-hi.png")
	  brick51.scale = 0.1 
	  
	  
	var ball = createObjectPic("Images/ball1.png")
	ball.scale = 0.5
	
	var ball2 = createObjectPic("Images/ball1.png")
	ball2.scale = 0.5
	
	var ball3 =createObjectPic("Images/ball1.png")
	ball3.scale = 0.5
	
	var rect = createObjectPic ("Images/paddle.png")
	rect.scale = 0.09
	rect.colour = '#CEF6EC'
	
	var rect2 = createObjectPic ("Images/paddle.png")
	rect2.scale = 0.09
	rect2.colour = '#CEF6E'
	
	var dude = createObjectPic("Images/red-rectangle-bye.png")
	dude.scale = 0.2


	
	//Buttons //main menu
	
	   var playlevel1 = createButton (200,96,200,50,null, "PLAY LEVEL 1")
	   playlevel1.colour = '#58FAD0'
	   playlevel1.job = function (){
	   init();
	   screen = 12;
	   speak("Hello soldier, the brick brigade has invaded the ski resorts and chalets of Switzerland. Your duty as a soldier in the army of breakers is to defeat the bricks. We have given you a new board and ball, but beware if the ball touches the ground, you're done for, Good bye and good luck")
	   }
	      //#2
		  var playlevel12 = createButton (200,400,200,50,null, "PLAY LEVEL 1")
	         playlevel12.colour = '#58FAD0'
	         playlevel12.job = function (){
	         init();
	         screen = 2;
	        }
	    
		var playlevel2 = createButton (200,156,200,50,null, " PLAY LEVEL 2")
		playlevel2.colour = '#58FAD0'
	    playlevel2.job = function (){
	    screen = 13
	    speak("Greetings soldier, ready for another mission? The brick brigade has penetrated the military base in the meadows of France. You know what to do, good bye and good luck.")
	   }
	   //#2
	       var playlevel22 = createButton (200,400,200,50,null, "PLAY LEVEL 2")
	         playlevel22.colour = '#58FAD0'
	         playlevel22.job = function (){
	         init();
	         screen = 7;
	        }
		
		
	   var playlevel3 = createButton (200,234,200,50, null, "PLAY LEVEL 3")
	    playlevel3.colour = '#58FAD0' 
	    playlevel3.job = function (){
		init();
	    screen = 14;
		speak("At ease soldier, good job on your last mission. I'm afraid you won't get much of a rest though. The brick brigade has taken over a beach in the Caribbean. We've given you an extra ball, you'll need it. Good bye and good luck.")
		}
     //#2
	       var playlevel32 = createButton (200,400,200,50,null, "PLAY LEVEL 3")
	         playlevel32.colour = '#58FAD0'
	         playlevel32.job = function (){
	         init();
	         screen = 9;
	        }
		
		var playlevel4 = createButton (200,312,200,50, null, "PLAY LEVEL 4")
	    playlevel4.colour = '#58FAD0' 
	    playlevel4.job = function (){
		init();
	    screen = 15;
		speak("There you are soldier, we have a final mission for you. The brick Brigade is hiding out in the Canadian shield, they are disguised as leaves. Your mission is to find, and break them. Good bye and good luck.")
		}
		
		//#2
	       var playlevel42 = createButton (200,400,200,50,null, "PLAY LEVEL 4")
	         playlevel42.colour = '#58FAD0'
	         playlevel42.job = function (){
	         init();
	         screen = 11;
	        }
		
		//Instructions
	  var Ibutton = createButton (200,390,200,50, null, "***INSTRUCTIONS***")
	  Ibutton.colour = '#58FAD0'
	  Ibutton.job = function (){
	  screen = 3;
	  }
	     var Iscreenback = createButton (200,320,200,50, null, "BACK")
		     Iscreenback.colour = '#58FAD0' 
	         Iscreenback.job = function (){
	         screen = 1;
	         }

	//stop
		var playscreenback= createButton (10,10,40,40, null, "STOP")
		 playscreenback.colour = '#58FAD0'
	     playscreenback.job = function (){
	     screen = 1;
	   	}		  
		   
	//game over button
	
	  var GO2 = createButton (200,400,200,50,null, "MAIN MENU")
	  GO2.colour = '#58FAD0'
	  GO2.job = function (){
	  screen = 1;
	  }
	  var playlevel1again = createButton (200,96,200,50, null, "PLAY  LEVEL 1 AGAIN")
	  playlevel1again.colour = '#58FAD0'
	  playlevel1again.job = function (){
	  init();
	  screen = 2;
	  }
	  var playlevel2again = createButton (200,156,200,50, null, "PLAY  LEVEL 2 AGAIN")
	  playlevel2again.colour = '#58FAD0'
	  playlevel2again.job = function (){
	  init();
	  screen = 7;
	  }
      var playlevel3again = createButton (200,234,200,50, null, "PLAY  LEVEL 3 AGAIN")
	  playlevel3again.colour = '#58FAD0'
	  playlevel3again.job = function (){
	  init();
	  screen = 9;
	  }
	 
	  var playlevel4again = createButton (200,312,200,50, null, "PLAY  LEVEL 4 AGAIN")
	  playlevel4again.colour = '#58FAD0'
	  playlevel4again.job = function (){
	  init();
	  screen = 11;
	  }
	 //Go to main menu
      var mainback = createButton (200,390,200,50, null, "MAIN MENU")
	  mainback.colour = '#58FAD0' 
      mainback.job = function (){
	  screen = 1;
	  }
	 
	//backgrounds
	  var line2 = makePicture("Images/4seasons.png")
	  var metal = makePicture("Images/winter.jpg")
	  var level2 = makePicture("Images/spring.jpg")
	  var level3 = makePicture("Images/summer.jpg")
      var fall = makePicture("Images/fall.jpg")
	
	  var mission = makePicture("Images/mission1.jpg")
	  var mission1 = makePicture("Images/winter.jpg")
	  var mission2 = makePicture("Images/Mission2.jpg")
	  var mission3 = makePicture("Images/mission3.jpg")
	  var mission4 = makePicture("Images/mission4.jpg")
	
	
	//leaves
	 var leaf1 = createObjectPic("Images/leaf.png")
	  leaf1.scale = 0.017
     var leaf2 = createObjectPic("Images/leaf.png")
	   leaf2.scale = 0.017
     var leaf3 = createObjectPic("Images/leaf.png")
	  leaf3.scale = 0.017
     var leaf4 = createObjectPic("Images/leaf.png")
	   leaf4.scale = 0.017
     var leaf5 = createObjectPic("Images/leaf.png")
	   leaf5.scale = 0.017
     var leaf6 = createObjectPic("Images/leaf.png")
	  leaf6.scale = 0.017
     var leaf7 = createObjectPic("Images/leaf.png")
	  leaf7.scale = 0.017
     var leaf8 = createObjectPic("Images/leaf.png")
	 leaf8.scale = 0.017
     var leaf9 = createObjectPic("Images/leaf.png")
	  leaf9.scale = 0.017
     var leaf10 = createObjectPic("Images/leaf.png")
	  leaf10.scale = 0.017
     var leaf11 = createObjectPic("Images/leaf.png")
   	  leaf11.scale = 0.017
     var leaf12 = createObjectPic("Images/leaf.png")
	  leaf12.scale = 0.017
     var leaf13 = createObjectPic("Images/leaf.png")
	  leaf13.scale = 0.017
     var leaf14 = createObjectPic("Images/leaf.png")
	  leaf14.scale = 0.017
     var leaf15 = createObjectPic("Images/leaf.png")
	  leaf15.scale = 0.017
     var leaf16 = createObjectPic("Images/leaf.png")
	  leaf16.scale = 0.017
     var leaf17 = createObjectPic("Images/leaf.png")
	  leaf17.scale = 0.017
     var leaf18 = createObjectPic("Images/leaf.png")
	  leaf18.scale = 0.017
     var leaf19 = createObjectPic("Images/leaf.png")
	  leaf19.scale = 0.017
     var leaf20 = createObjectPic("Images/leaf.png")
	  leaf20.scale = 0.017
     var leaf21 = createObjectPic("Images/leaf.png")
	  leaf21.scale = 0.017
     var leaf22 = createObjectPic("Images/leaf.png")
	  leaf22.scale = 0.017
     var leaf23 = createObjectPic("Images/leaf.png")
	  leaf23.scale = 0.017
 //bricks24-50
     var leaf24 = createObjectPic("Images/leaf.png")
	  leaf24.scale = 0.017
     var leaf25 = createObjectPic("Images/leaf.png")
	  leaf25.scale = 0.017
     var leaf26 = createObjectPic("Images/leaf.png")
	  leaf26.scale = 0.017
     var leaf27 = createObjectPic("Images/leaf.png")
	  leaf27.scale = 0.017
     var leaf28 = createObjectPic("Images/leaf.png")
	  leaf28.scale = 0.017
     var leaf29 = createObjectPic("Images/leaf.png")
	  leaf29.scale = 0.017
     var leaf30 = createObjectPic("Images/leaf.png")
	 leaf30.scale = 0.017
     var leaf31 = createObjectPic("Images/leaf.png")
	 leaf31.scale = 0.017
     var leaf32 = createObjectPic("Images/leaf.png")
	  leaf32.scale = 0.017
     var leaf33 = createObjectPic("Images/leaf.png")
	  leaf33.scale = 0.017
     var leaf34 = createObjectPic("Images/leaf.png")
	  leaf34.scale = 0.017
	 var leaf35 = createObjectPic("Images/leaf.png")
	  leaf35.scale = 0.017
	 var leaf36 = createObjectPic("Images/leaf.png")
	  leaf36.scale = 0.017
	 var leaf37 = createObjectPic("Images/leaf.png")
	  leaf37.scale = 0.017
	 var leaf38 = createObjectPic("Images/leaf.png")
	  leaf38.scale = 0.017
	 var leaf39 = createObjectPic("Images/leaf.png")
	  leaf39.scale = 0.017
	 var leaf40 = createObjectPic("Images/leaf.png")
	  leaf40.scale = 0.017
	 var leaf41 = createObjectPic("Images/leaf.png")
	  leaf41.scale = 0.017
	 var leaf42 = createObjectPic("Images/leaf.png")
	  leaf42.scale = 0.017
	 var leaf43 = createObjectPic("Images/leaf.png")
	  leaf43.scale = 0.017
	 var leaf44 = createObjectPic("Images/leaf.png")
	  leaf44.scale = 0.017
	 var leaf45 = createObjectPic("Images/leaf.png")
	  leaf45.scale = 0.017
	 var leaf46 = createObjectPic("Images/leaf.png")
	  leaf46.scale = 0.017
	 var leaf47 = createObjectPic("Images/leaf.png")
	  leaf47.scale = 0.017
	 var leaf48 = createObjectPic("Images/leaf.png")
	  leaf48.scale = 0.017
	 var leaf49 = createObjectPic("Images/leaf.png")
	  leaf49.scale = 0.017 
	 var leaf50 = createObjectPic("Images/leaf.png")
	  leaf50.scale = 0.017 
	
	
	
	////////////////
	//// state variable
	

	/////////////////////////////////
	////////////////////////////////
	////////	GAME INIT
	///////	Runs this code right away, as soon as the page loads.
	//////	Use this code to get everything in order before your game starts 
	//////////////////////////////
	/////////////////////////////
	function init()
	{
	/////////////////////
	///STATE VARIABLES
	/// All your variables get their start values here.
	dude.x = 300;
	dude.y = 300;
	dude.speedx = 5;
    dude.speedy = 5;
	
	rect.x = 300;
	rect.y = 400;
	rect.speedx = 0;
	
	rect2.x = 300;
	rect2.y = 400;
	rect2.speedx = 0;
   
	
	ball.x = 300;
	ball.y = 380;
	ball.speedx = 5;
    ball.speedy = 5;
	
	 ball2.x = 300;
	ball2.y = 380;
	ball2.speedx = 7;
    ball2.speedy = 7;
	
	 ball3.x = 300;
	ball3.y = 380;
	ball3.speedx = 5.2;
    ball3.speedy = 5.2;
	
	
	
	//brick1-23 x and y
	 //y=100
	brick1.x = 100;
	brick1.y = 100;
	
	brick2.x = 200;
	brick2.y = 100;
	
	brick3.x = 250;
	brick3.y = 100;
	
	brick23.x = 350;
	brick23.y = 100;
	
	brick4.x = 400;
	brick4.y = 100;
	
	brick5.x = 500;
	brick5.y = 100;
	 //y=200
	brick6.x = 50;
	brick6.y = 200;
	
	brick7.x = 100;
	brick7.y = 200;
	
	brick8.x = 150;
	brick8.y = 200;
	
	brick9.x = 200;
	brick9.y = 200;
	
	brick10.x = 250;
	brick10.y = 200;
	
	brick11.x = 300;
	brick11.y = 200;
	
	brick12.x = 350;
	brick12.y = 200;
	
	brick13.x = 400;
	brick13.y = 200;
	
	brick14.x = 450;
	brick14.y = 200;
	
	brick15.x = 500;
	brick15.y = 200;
	
	brick16.x = 550;
	brick16.y = 200;
	
	//y=300
	brick17.x = 100;
	brick17.y = 300;
	
	brick18.x = 200;
	brick18.y = 300;
	
	brick19.x = 300;
	brick19.y = 300;
	
	brick20.x = 400;
	brick20.y = 300;
	
	brick21.x = 500;
	brick21.y = 300;
	 
	//y=250 
	brick22.x = 50;
	brick22.y = 250; 
	
	//24-50 
	
	brick24.x = 100;
	brick24.y = 250;
	
	brick25.x = 250;
	brick25.y = 250;
	
	brick26.x = 300;
	brick26.y = 250;
	
	brick27.x = 350;
	brick27.y = 250;

	brick28.x = 400;
	brick28.y = 250;
	
	brick29x = 450;
	brick29.y = 250;
	
	brick30.x = 500;
	brick30.y = 250;
	
   brick31.x = 550;
	brick31.y = 250; 
	//y=150
	brick32.x = 50;
	brick32.y = 150;
	
	brick33.x = 100;
	brick33.y = 150;
	
	brick34.x = 150;
	brick34.y = 150;
	
	brick35.x = 200;
	brick35.y = 150;
	
    brick36.x = 250;
	brick36.y = 150; 
	
	brick37.x = 300;
	brick37.y = 150;
	
	brick38.x = 350;
	brick38.y = 150;
	
	brick39.x = 400;
	brick39.y = 150;
	
	brick40.x = 450;
	brick40.y = 150;
	
	brick41.x = 500;
	brick41.y = 150; 
	
	brick42.x = 550;
	brick42.y = 150;
	//y = random
	brick43.x = 600;
	brick43.y = 250;
	
	brick44.x = 600;
	brick44.y = 100;
	
	brick45.x = 600;
	brick45.y = 150;
	
    brick46.x = 600;
	brick46.y = 200; 
	
	brick47.x = 600;
	brick47.y = 300;
	
	brick48.x = 5;
	brick48.y = 200;
	
	brick49.x = 50;
	brick49.y = 300;
	
	brick50.x = 5;
	brick50.y = 100;
	
    brick51.x = 165;
	brick51.y = 218;
	
   //leaves
   
	//leaves1-23 x and y
	 //y=100
	leaf1.x = 100;
	leaf1.y = 100;
	
	leaf2.x = 200;
	leaf2.y = 100;
	
	leaf3.x = 250;
	leaf3.y = 100;
	
	leaf23.x = 350;
	leaf23.y = 100;
	
	leaf4.x = 400;
	leaf4.y = 100;
	
	leaf5.x = 500;
    leaf5.y = 100;
	 //y=200
	leaf6.x = 50;
	leaf6.y = 200;
	
	leaf7.x = 100;
	leaf7.y = 200;
	
	leaf8.x = 150;
	leaf8.y = 200;
	
	leaf9.x = 200;
	leaf9.y = 200;
	
	leaf10.x = 250;
	leaf10.y = 200;
	
	leaf11.x = 300;
	leaf11.y = 200;
	
	leaf12.x = 350;
	leaf12.y = 200;
	
	leaf13.x = 400;
    leaf13.y = 200;
	
	leaf14.x = 450;
	leaf14.y = 200;
	
	leaf15.x = 500;
	leaf15.y = 200;
	
	leaf16.x = 550;
	leaf16.y = 200;
	
	//y=300
	leaf17.x = 100;
	leaf17.y = 300;
	
    leaf18.x = 200;
	leaf18.y = 300;
	
   leaf19.x = 300;
	leaf19.y = 300;
	
	leaf20.x = 400;
	leaf20.y = 300;
	
	leaf21.x = 500;
	leaf21.y = 300;
	 
	//y=250 
	leaf22.x = 50;
	leaf22.y = 250; 
	
	//24-50 
	
	leaf24.x = 100;
	leaf24.y = 250;
	
	leaf25.x = 250;
	leaf25.y = 250;
	
	leaf26.x = 300;
	leaf26.y = 250;
	
	leaf27.x = 350;
	leaf27.y = 250;

	leaf28.x = 400;
	leaf28.y = 250;
	
	leaf29x = 450;
	leaf29.y = 250;
	
	leaf30.x = 500;
	leaf30.y = 250;
	
   leaf31.x = 550;
	leaf31.y = 250; 
	//y=150
	leaf32.x = 50;
	leaf32.y = 150;
	
	leaf33.x = 100;
	leaf33.y = 150;
	
	leaf34.x = 150;
	leaf34.y = 150;
	
	leaf35.x = 200;
	leaf35.y = 150;
	
    leaf36.x = 250;
	leaf36.y = 150; 
	
	leaf37.x = 300;
	leaf37.y = 150;
	
	leaf38.x = 350;
	leaf38.y = 150;
	
	leaf39.x = 400;
	leaf9.y = 150;
	
	leaf40.x = 450;
	leaf40.y = 150;
	
	leaf41.x = 500;
	leaf41.y = 150; 
	
	leaf42.x = 550;
	leaf42.y = 150;
	//y = random
	leaf43.x = 600;
	leaf43.y = 250;
	
	leaf44.x = 600;
	leaf44.y = 100;
	
	leaf45.x = 600;
	leaf45.y = 150;
	
    leaf46.x = 600;
	leaf46.y = 200; 
	
	leaf47.x = 600;
	leaf47.y = 300;
	
	leaf48.x = 5;
	leaf48.y = 200;
	
	leaf49.x = 50;
	leaf49.y = 300;
	
	leaf50.x = 5;
	leaf50.y = 100;
	
  
	
	
	
	//////////////////////
	///GAME ENGINE START
	//	This starts your game/program
	//	"paint is the piece of code that runs over and over again, so put all the stuff you want to draw in here
	//	"60" sets how fast things should go
	//	Once you choose a good speed for your program, you will never need to update this file ever again.

	if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 60);
	}

	init();	
	 



	
	
	
	///////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	////////	Main Game Engine
	////////////////////////////////////////////////////
	///////////////////////////////////////////////////
	function paint()
	{
		///////////////////////
		//	CLEAR THE SCREEN
		////////////////////
		ctx.fillStyle = 'white';
		ctx.fillRect(0,0, w, h);	
		
		
		
		if(screen == 0){ //dude+cat movement
		/////////////////////
		//	LOADING SCREEN
			ctx.fillStyle = 'red';
			ctx.fillText("Loading Images & Sounds: " + numObjectsLoaded + "/" + numObjects,100,100)
		
			if(numObjectsLoaded >= numObjects) screen = 1;
		
		}else if(screen == 1){
		////////////////////
		//	MAIN MENU
	       ctx.drawImage( line2, 0,0,640,480)
	
		   ctx.fillStyle = 'blue'
		   ctx.font = '40pt Ariel'
		   ctx.fillText("MAIN MENU",160,50);
		
		   dude.x = dude.x + dude.speedx
		   if(dude.x > w - dude.width || dude.x < 0) dude.speedx = dude.speedx * -1
		
		   dude.y = dude.y + dude.speedy
		   if(dude.y > h - dude.height || dude.y < 0) dude.speedy = dude.speedy * -1
		   dude.draw();
		
           playlevel1.draw();
	       Ibutton.draw();
		   playlevel2.draw();
		   playlevel3.draw();
		   playlevel4.draw();
		
		}else if(screen == 2){
		////////////////////
		//	GAME SCREEN 1
		
	    ctx.drawImage( metal, 0,0,640,480)
		
		ctx.fillStyle = 'blue'
		ctx.font = '20pt Ariel'
		ctx.fillText("LEVEL 1",280,25);
		
		playscreenback.draw();
		rect.draw();
		rect.x = rect.x + rect.speedx
		if(rect.x > w - rect.width || rect.x < 0) rect.speedx = rect.speedx * -1
		
	
		 ball.draw();
		 if(ball.collideObject(rect)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 ball.x = ball.x + ball.speedx
		 if(ball.x > w - ball.width || ball.x < 0) ball.speedx = ball.speedx * -1
		
		 ball.y = ball.y + ball.speedy
		 if(ball.y > h - ball.height || ball.y < 0) ball.speedy = ball.speedy * -1
		 
		
		//BRICK COLLIDE CODES
		 brick1.draw();
		 if(ball.collideObject(brick1)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick2.draw();
		 if(ball.collideObject(brick2)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick3.draw();
		 if(ball.collideObject(brick3)){
		 ball.speedy = ball.speedy * - 1;
		 }
		
		 brick4.draw();
		 if(ball.collideObject(brick4)){
		 ball.speedy = ball.speedy * - 1;
		 }
		  brick5.draw();
		 if(ball.collideObject(brick5)){
		  ball.speedy = ball.speedy * - 1;
		 }
		 brick6.draw();
		 if(ball.collideObject(brick6)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick7.draw();
		 if(ball.collideObject(brick7)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick8.draw();                                      
		 if(ball.collideObject(brick8)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick9.draw();
		 if(ball.collideObject(brick9)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick10.draw();
		 if(ball.collideObject(brick10)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick11.draw();
		 if(ball.collideObject(brick11)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick12.draw();
		 if(ball.collideObject(brick12)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick13.draw();
		 if(ball.collideObject(brick13)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick14.draw();
		 if(ball.collideObject(brick14)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick15.draw();
		 if(ball.collideObject(brick15)){
		  ball.speedy = ball.speedy * - 1;
		 }
		 brick16.draw();
		 if(ball.collideObject(brick16)){
		  ball.speedy = ball.speedy * - 1;
		 }
		 brick17.draw();
		 if(ball.collideObject(brick17)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick18.draw();
		 if(ball.collideObject(brick18)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick19.draw();
		 if(ball.collideObject(brick19)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick20.draw();
		 if(ball.collideObject(brick20)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick21.draw();
		 if(ball.collideObject(brick21)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick22.draw();
		 if(ball.collideObject(brick22)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick23.draw();
		 if(ball.collideObject(brick23)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 //24-50
		 brick24.draw();
		 if(ball.collideObject(brick24)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick25.draw();
		 if(ball.collideObject(brick25)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick26.draw();
		 if(ball.collideObject(brick26)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick27.draw();
		 if(ball.collideObject(brick27)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick28.draw();
		 if(ball.collideObject(brick28)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick29.draw();
		 if(ball.collideObject(brick29)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick30.draw();
		 if(ball.collideObject(brick30)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick31.draw();
		 if(ball.collideObject(brick31)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick32.draw();
		 if(ball.collideObject(brick32)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick33.draw();
		 if(ball.collideObject(brick33)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick34.draw();
		 if(ball.collideObject(brick34)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick35.draw();
		 if(ball.collideObject(brick35)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick36.draw();
		 if(ball.collideObject(brick36)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick37.draw();
		 if(ball.collideObject(brick37)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick38.draw();
		 if(ball.collideObject(brick38)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick39.draw();
		 if(ball.collideObject(brick39)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick40.draw();
		 if(ball.collideObject(brick40)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick41.draw();
		 if(ball.collideObject(brick41)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick42.draw();
		 if(ball.collideObject(brick42)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick43.draw();
		 if(ball.collideObject(brick43)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick44.draw();
		 if(ball.collideObject(brick44)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick45.draw();
		 if(ball.collideObject(brick45)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick46.draw();
		 if(ball.collideObject(brick46)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick47.draw();
		 if(ball.collideObject(brick47)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick48.draw();
		 if(ball.collideObject(brick48)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick49.draw();
		 if(ball.collideObject(brick49)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick50.draw();
		 if(ball.collideObject(brick50)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 
		
		 
		
		 //ball collide with brick codes pt2
		 if(ball.collideObject(brick1)){
		 brick1.x = 10000
		 brick1.y = 1000}
		 
		 if(ball.collideObject(brick2)){
		 brick2.x = 10000
		 brick2.y = 1000}
		 
		  if(ball.collideObject(brick3)){
		 brick3.x = 10000
		 brick3.y = 1000}
		 
		  if(ball.collideObject(brick4)){
		 brick4.x = 10000
		 brick4.y = 1000}
		 
		  if(ball.collideObject(brick5)){
		 brick5.x = 10000
		 brick5.y = 1000}
		 
		  if(ball.collideObject(brick6)){
		 brick6.x = 10000
		 brick6.y = 1000}
		 
		  if(ball.collideObject(brick7)){
		 brick7.x = 10000
		 brick7.y = 1000}
		 
		  if(ball.collideObject(brick8)){
		 brick8.x = 10000
		 brick8.y = 1000}
		 
		  if(ball.collideObject(brick9)){
		 brick9.x = 10000
		 brick9.y = 1000}
		 
		  if(ball.collideObject(brick10)){
		 brick10.x = 10000
		 brick10.y = 1000}
		 
		  if(ball.collideObject(brick11)){
		 brick11.x = 10000
		 brick11.y = 1000}
		 
		  if(ball.collideObject(brick12)){
		 brick12.x = 10000
		 brick12.y = 1000}
		 
		 if(ball.collideObject(brick13)){
		 brick13.x = 10000
		 brick13.y = 1000}
		 
		 if(ball.collideObject(brick14)){
		 brick14.x = 10000
		 brick14.y = 1000}
		 
		 if(ball.collideObject(brick15)){
		 brick15.x = 10000
		 brick15.y = 1000}
		 
		 if(ball.collideObject(brick16)){
		 brick16.x = 10000
		 brick16.y = 1000}
		 
		 if(ball.collideObject(brick17)){
		 brick17.x = 10000
		 brick17.y = 1000}
		 
		 if(ball.collideObject(brick18)){
		 brick18.x = 10000
		 brick18.y = 1000}
		 
		 if(ball.collideObject(brick19)){
		 brick19.x = 10000
		 brick19.y = 1000}
		 
		 if(ball.collideObject(brick20)){
		 brick20.x = 10000
		 brick20.y = 1000}
		 
		 if(ball.collideObject(brick21)){
		 brick21.x = 10000
		 brick21.y = 1000}
		 
		 if(ball.collideObject(brick22)){
		 brick22.x = 10000
		 brick22.y = 1000}
		 
		 if(ball.collideObject(brick23)){
		 brick23.x = 10000
		 brick23.y = 1000}
		 
		 //bricks24-50
		 if(ball.collideObject(brick24)){
		 brick24.x = 10000
		 brick24.y = 1000}
		 
		 if(ball.collideObject(brick25)){
		 brick25.x = 10000
		 brick25.y = 1000}
		 
		 if(ball.collideObject(brick26)){
		 brick26.x = 10000
		 brick26.y = 1000}
		 
		 if(ball.collideObject(brick27)){
		 brick27.x = 10000
		 brick27.y = 1000}
		 
		 if(ball.collideObject(brick28)){
		 brick28.x = 10000
		 brick28.y = 1000}
		 
		 if(ball.collideObject(brick29)){
		 brick29.x = 10000
		 brick29.y = 1000}
		 
		 if(ball.collideObject(brick30)){
		 brick30.x = 10000
		 brick30.y = 1000}
		 
		 
		 if(ball.collideObject(brick31)){
		 brick31.x = 10000
		 brick31.y = 1000}
		 
		  if(ball.collideObject(brick32)){
		 brick32.x = 10000
		 brick32.y = 1000}
		 
		 if(ball.collideObject(brick33)){
		 brick33.x = 10000
		 brick33.y = 1000}
		 
		 if(ball.collideObject(brick34)){
		 brick34.x = 10000
		 brick34.y = 1000}
		 
		 if(ball.collideObject(brick35)){
		 brick35.x = 10000
		 brick35.y = 1000}
		 
		 if(ball.collideObject(brick36)){
		 brick36.x = 10000
		 brick36.y = 1000}
		 
		 if(ball.collideObject(brick37)){
		 brick37.x = 10000
		 brick37.y = 1000}
		 
		 if(ball.collideObject(brick38)){
		 brick38.x = 10000
		 brick38.y = 1000}
		 
		 if(ball.collideObject(brick39)){
		 brick39.x = 10000
		 brick39.y = 1000}
		 
		 
		 if(ball.collideObject(brick40)){
		 brick40.x = 10000
		 brick40.y = 1000}
		 
			 if(ball.collideObject(brick41)){
		 brick41.x = 10000
		 brick41.y = 1000}
		 
		  if(ball.collideObject(brick42)){
		 brick42.x = 10000
		 brick42.y = 1000}
		 
		 if(ball.collideObject(brick43)){
		 brick43.x = 10000
		 brick43.y = 1000}
		 
		 if(ball.collideObject(brick44)){
		 brick44.x = 10000
		 brick44.y = 1000}
		 
		 if(ball.collideObject(brick45)){
		 brick45.x = 10000
		 brick45.y = 1000}
		 
		 if(ball.collideObject(brick46)){
		 brick46.x = 10000
		 brick46.y = 1000}
		 
		 if(ball.collideObject(brick47)){
		 brick47.x = 10000
		 brick47.y = 1000}
		 
		 if(ball.collideObject(brick48)){
		 brick48.x = 10000
		 brick48.y = 1000}
		 
		 if(ball.collideObject(brick49)){
		 brick49.x = 10000
		 brick49 .y = 1000}
		 
		 
		 if(ball.collideObject(brick50)){
		 brick50.x = 10000
		 brick50.y = 1000} 
		 
		 

		 //ball collide with brick codes
		 
		 if (ball.y > 425) screen = 5
		 if (brick1.y >h && brick2.y> h&&  brick3.y > h&& brick4.y > h&& brick5.y > h&& brick6.y > h&& brick7.y > h&& brick8.y > h&& brick9.y > h&& brick10.y > h&&brick11.y >h && brick12.y> h&&  brick13.y > h&& brick14.y > h&& brick15.y > h&& brick16.y > h&& brick17.y > h&& brick18.y > h&& brick19.y > h&& brick20.y > h&&brick21.y >h && brick22.y> h&&  brick23.y > h&& brick24.y > h&& brick25.y > h&& brick26.y > h&& brick27.y > h&& brick28.y > h&& brick29.y > h&& brick30.y > h&&brick31.y >h && brick32.y> h&&  brick33.y > h&& brick34.y > h&& brick35.y > h&& brick36.y > h&& brick37.y > h&& brick38.y > h&& brick39.y > h&& brick40.y > h&&brick41.y >h && brick42.y> h&&  brick43.y > h&& brick44.y > h&& brick45.y > h&& brick46.y > h&& brick47.y > h&& brick48.y > h&& brick49.y > h&& brick50.y > h )screen = 6
		


		
		
		}else if (screen == 3){
		
		 ctx.drawImage( line2, 0,0,640,480)
		
		 ctx.fillStyle = 'blue'
		 ctx.font = '15pt Ariel'
		 ctx.fillText("Welcome to Brick Breaker, Year  Of The breaker!!!", 130,100)
		 
		 ctx.fillStyle = 'blue' 
		 ctx.font = '15pt Ariel'
		 ctx.fillText("Press the arrows on your keyboard to make the board move",100,150)
		
		 ctx.fillStyle = 'blue'
		 ctx.font = '15pt Ariel'
		 ctx.fillText("(Left and Right).Bounce the ball of the board to break the bricks", 85,200)
		
		 ctx.fillStyle = 'blue'
		 ctx.font = '15pt Ariel'
		 ctx.fillText("Don't let the ball fall", 220,250) 

		 ctx.fillStyle = 'blue'
		 ctx.font = '15pt Ariel'
		 ctx.fillText("Break all the bricks to win", 200,300)
		 
		
		 
		 ctx.fillStyle = 'blue'
		 ctx.font = '12pt Ariel'
		 ctx.fillText("*Note: if paddle tries to go through the wall hold ", 170,400)
		 
		  ctx.fillStyle = '#2E2EFE'
		 ctx.font = 'blue'
		 ctx.fillText("down the arrow key opposite to the direction it's going*", 170,430)
		 
		 Iscreenback.draw();
		 
		  
		  
		//screen 5
		}else if(screen == 5){
		
		 ctx.drawImage( line2, 0,0,640,480)
		
		 ctx.fillStyle = 'red'
		 ctx.font = '30pt Ariel'
		 ctx.fillText("GAME OVER!!",190,50);
		
         dude.x = dude.x + dude.speedx
		 if(dude.x > w - dude.width || dude.x < 0) dude.speedx = dude.speedx * -1
		
		 dude.y = dude.y + dude.speedy
		 if(dude.y > h - dude.height || dude.y < 0) dude.speedy = dude.speedy * -1
		 dude.draw();
		
		 GO2.draw();
		 playlevel1again.draw();
		 playlevel2.draw();
		 playlevel3.draw();
		 playlevel4.draw();
		
		//screen 6
		}else if (screen == 6) {
		
		 ctx.drawImage( line2, 0,0,640,480)
		
		 ctx.fillStyle = 'blue'
		 ctx.font = '30pt Ariel'
		 ctx.fillText ("WINNER!!!",200,50);
		
		 GO2.draw();
		 playlevel1.draw();
	     playlevel2.draw();
		 playlevel3.draw();
		 playlevel4.draw();
	 
	
	
	
	
	
	
	
	
	
	   //screen 7 
	    }  else if (screen == 7) {
	     ctx.drawImage( level2, 0,0,640,480)
	   
	     ctx.fillStyle = 'blue'
	     ctx.font = '20pt Ariel'
	     ctx.fillText ('LEVEL 2',280,25)
	   
	     playscreenback.draw();
		 rect.draw();
		 rect.x = rect.x + rect.speedx
		 if(rect.x > w - rect.width || rect.x < 0) rect.speedx = rect.speedx * -1
		
	
	
	
	
		 ball2.draw();
		 if(ball2.collideObject(rect)){
		 ball2.speedy = ball2.speedy * - 1
		 }
		 ball2.x = ball2.x + ball2.speedx
		 if(ball2.x > w - ball2.width || ball2.x < 0) ball2.speedx = ball2.speedx * -1
		
		 ball2.y = ball2.y + ball2.speedy
		 if(ball2.y > h - ball2.height || ball2.y < 0) ball2.speedy = ball2.speedy * -1
		 
		
		//BRICK COLLIDE CODES
		 brick1.draw();
		 if(ball2.collideObject(brick1)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		 brick2.draw();
		 if(ball2.collideObject(brick2)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		 brick3.draw();
		 if(ball2.collideObject(brick3)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		
		 brick4.draw();
		 if(ball2.collideObject(brick4)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		  brick5.draw();
		 if(ball2.collideObject(brick5)){
		  ball2.speedy = ball2.speedy * - 1;
		 }
		 brick6.draw();
		 if(ball2.collideObject(brick6)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		 brick7.draw();
		 if(ball2.collideObject(brick7)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		 brick8.draw();                                      
		 if(ball2.collideObject(brick8)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		 brick9.draw();
		 if(ball2.collideObject(brick9)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		 brick10.draw();
		 if(ball2.collideObject(brick10)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		  brick11.draw();
		 if(ball2.collideObject(brick11)){
		  ball2.speedy = ball2.speedy * - 1;
		 }
		 brick12.draw();
		 if(ball2.collideObject(brick12)){
		ball2.speedy = ball2.speedy * - 1;
		 }
		 brick13.draw();
		if(ball2.collideObject(brick13)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		brick14.draw();
		 if(ball2.collideObject(brick14)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		 brick15.draw();
		 if(ball2.collideObject(brick15)){
		  ball2.speedy = ball2.speedy * - 1;
		 }
		 brick16.draw();
		 if(ball2.collideObject(brick16)){
		  ball2.speedy = ball2.speedy * - 1;
		 }
		 brick17.draw();
		 if(ball2.collideObject(brick17)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		 brick18.draw();
		 if(ball2.collideObject(brick18)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		 brick19.draw();
		 if(ball2.collideObject(brick19)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		 brick20.draw();
		 if(ball2.collideObject(brick20)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		 brick21.draw();
		 if(ball2.collideObject(brick21)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		 brick22.draw();
		 if(ball2.collideObject(brick22)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		 brick23.draw();
		 if(ball2.collideObject(brick23)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 //24-50
		 brick24.draw();
		 if(ball2.collideObject(brick24)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick25.draw();
		 if(ball2.collideObject(brick25)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick26.draw();
		 if(ball2.collideObject(brick26)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick27.draw();
		 if(ball2.collideObject(brick27)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick28.draw();
		 if(ball2.collideObject(brick28)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick29.draw();
		 if(ball2.collideObject(brick29)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick30.draw();
		 if(ball2.collideObject(brick30)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick31.draw();
		 if(ball2.collideObject(brick31)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick32.draw();
		 if(ball2.collideObject(brick32)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick33.draw();
		 if(ball2.collideObject(brick33)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick34.draw();
		 if(ball2.collideObject(brick34)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick35.draw();
		 if(ball2.collideObject(brick35)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick36.draw();
		 if(ball2.collideObject(brick36)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick37.draw();
		 if(ball2.collideObject(brick37)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick38.draw();
		 if(ball2.collideObject(brick38)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick39.draw();
		 if(ball2.collideObject(brick39)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick40.draw();
		 if(ball2.collideObject(brick40)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick41.draw();
		 if(ball2.collideObject(brick41)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick42.draw();
		 if(ball2.collideObject(brick42)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick43.draw();
		 if(ball2.collideObject(brick43)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick44.draw();
		 if(ball2.collideObject(brick44)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick45.draw();
		 if(ball2.collideObject(brick45)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick46.draw();
		 if(ball2.collideObject(brick46)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick47.draw();
		 if(ball2.collideObject(brick47)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick48.draw();
		 if(ball2.collideObject(brick48)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick49.draw();
		 if(ball2.collideObject(brick49)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick50.draw();
		 if(ball2.collideObject(brick50)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 
		
		 
		
		 //ball collide with brick codes pt2
		 if(ball2.collideObject(brick1)){
		 brick1.x = 10000
		 brick1.y = 1000}
		 
		 if(ball2.collideObject(brick2)){
		 brick2.x = 10000
		 brick2.y = 1000}
		 
		  if(ball2.collideObject(brick3)){
		 brick3.x = 10000
		 brick3.y = 1000}
		 
		  if(ball2.collideObject(brick4)){
		 brick4.x = 10000
		 brick4.y = 1000}
		 
		  if(ball2.collideObject(brick5)){
		 brick5.x = 10000
		 brick5.y = 1000}
		 
		  if(ball2.collideObject(brick6)){
		 brick6.x = 10000
		 brick6.y = 1000}
		 
		  if(ball2.collideObject(brick7)){
		 brick7.x = 10000
		 brick7.y = 1000}
		 
		  if(ball2.collideObject(brick8)){
		 brick8.x = 10000
		 brick8.y = 1000}
		 
		  if(ball2.collideObject(brick9)){
		 brick9.x = 10000
		 brick9.y = 1000}
		 
		  if(ball2.collideObject(brick10)){
		 brick10.x = 10000
		 brick10.y = 1000}
		 
		  if(ball2.collideObject(brick11)){
		 brick11.x = 10000
		 brick11.y = 1000}
		 
		  if(ball2.collideObject(brick12)){
		 brick12.x = 10000
		 brick12.y = 1000}
		 
		 if(ball2.collideObject(brick13)){
		 brick13.x = 10000
		 brick13.y = 1000}
		 
		 if(ball2.collideObject(brick14)){
		 brick14.x = 10000
		 brick14.y = 1000}
		 
		 if(ball2.collideObject(brick15)){
		 brick15.x = 10000
		 brick15.y = 1000}
		 
		 if(ball2.collideObject(brick16)){
		 brick16.x = 10000
		 brick16.y = 1000}
		 
		 if(ball2.collideObject(brick17)){
		 brick17.x = 10000
		 brick17.y = 1000}
		 
		 if(ball2.collideObject(brick18)){
		 brick18.x = 10000
		 brick18.y = 1000}
		 
		 if(ball2.collideObject(brick19)){
		 brick19.x = 10000
		 brick19.y = 1000}
		 
		 if(ball2.collideObject(brick20)){
		 brick20.x = 10000
		 brick20.y = 1000}
		 
		 if(ball2.collideObject(brick21)){
		 brick21.x = 10000
		 brick21.y = 1000}
		 
		 if(ball2.collideObject(brick22)){
		 brick22.x = 10000
		 brick22.y = 1000}
		 
		 if(ball2.collideObject(brick23)){
		 brick23.x = 10000
		 brick23.y = 1000}
		 
		 //bricks24-50
		 if(ball2.collideObject(brick24)){
		 brick24.x = 10000
		 brick24.y = 1000}
		 
		 if(ball2.collideObject(brick25)){
		 brick25.x = 10000
		 brick25.y = 1000}
		 
		 if(ball2.collideObject(brick26)){
		 brick26.x = 10000
		 brick26.y = 1000}
		 
		 if(ball2.collideObject(brick27)){
		 brick27.x = 10000
		 brick27.y = 1000}
		 
		 if(ball2.collideObject(brick28)){
		 brick28.x = 10000
		 brick28.y = 1000}
		 
		 if(ball2.collideObject(brick29)){
		 brick29.x = 10000
		 brick29.y = 1000}
		 
		 if(ball2.collideObject(brick30)){
		 brick30.x = 10000
		 brick30.y = 1000}
		 
		 
		 if(ball2.collideObject(brick31)){
		 brick31.x = 10000
		 brick31.y = 1000}
		 
		  if(ball2.collideObject(brick32)){
		 brick32.x = 10000
		 brick32.y = 1000}
		 
		 if(ball2.collideObject(brick33)){
		 brick33.x = 10000
		 brick33.y = 1000}
		 
		 if(ball2.collideObject(brick34)){
		 brick34.x = 10000
		 brick34.y = 1000}
		 
		 if(ball2.collideObject(brick35)){
		 brick35.x = 10000
		 brick35.y = 1000}
		 
		 if(ball2.collideObject(brick36)){
		 brick36.x = 10000
		 brick36.y = 1000}
		 
		 if(ball2.collideObject(brick37)){
		 brick37.x = 10000
		 brick37.y = 1000}
		 
		 if(ball2.collideObject(brick38)){
		 brick38.x = 10000
		 brick38.y = 1000}
		 
		 if(ball2.collideObject(brick39)){
		 brick39.x = 10000
		 brick39.y = 1000}
		 
		 
		 if(ball2.collideObject(brick40)){
		 brick40.x = 10000
		 brick40.y = 1000}
		 
	    if(ball2.collideObject(brick41)){
		 brick41.x = 10000
		 brick41.y = 1000}
		 
		  if(ball2.collideObject(brick42)){
		 brick42.x = 10000
		 brick42.y = 1000}
		 
		 if(ball2.collideObject(brick43)){
		 brick43.x = 10000
		 brick43.y = 1000}
		 
		 if(ball2.collideObject(brick44)){
		 brick44.x = 10000
		 brick44.y = 1000}
		 
		 if(ball2.collideObject(brick45)){
		 brick45.x = 10000
		 brick45.y = 1000}
		 
		 if(ball2.collideObject(brick46)){
		 brick46.x = 10000
		 brick46.y = 1000}
		 
		 if(ball2.collideObject(brick47)){
		 brick47.x = 10000
		 brick47.y = 1000}
		 
		 if(ball2.collideObject(brick48)){
		 brick48.x = 10000
		 brick48.y = 1000}
		 
		 if(ball2.collideObject(brick49)){
		 brick49.x = 10000
		 brick49 .y = 1000}
		 
		 
		 if(ball2.collideObject(brick50)){
		 brick50.x = 10000
		 brick50.y = 1000} 
		
         if (ball2.y > 425) screen = 8
         if (brick1.y >h && brick2.y> h&&  brick3.y > h&& brick4.y > h&& brick5.y > h&& brick6.y > h&& brick7.y > h&& brick8.y > h&& brick9.y > h&& brick10.y > h&&brick11.y >h && brick12.y> h&&  brick13.y > h&& brick14.y > h&& brick15.y > h&& brick16.y > h&& brick17.y > h&& brick18.y > h&& brick19.y > h&& brick20.y > h&&brick21.y >h && brick22.y> h&&  brick23.y > h&& brick24.y > h&& brick25.y > h&& brick26.y > h&& brick27.y > h&& brick28.y > h&& brick29.y > h&& brick30.y > h&&brick31.y >h && brick32.y> h&&  brick33.y > h&& brick34.y > h&& brick35.y > h&& brick36.y > h&& brick37.y > h&& brick38.y > h&& brick39.y > h&& brick40.y > h&&brick41.y >h && brick42.y> h&&  brick43.y > h&& brick44.y > h&& brick45.y > h&& brick46.y > h&& brick47.y > h&& brick48.y > h&& brick49.y > h&& brick50.y > h )screen = 6
	 




	 
	 
	 
	 //screeen 8 
	    }else if (screen == 8){
	
	     ctx.drawImage( line2, 0,0,640,480)
	
	     ctx.fillStyle = 'red'
	     ctx.font = '30pt Ariel'
	     ctx.fillText("GAME OVER!!",190,50);
	
	     playlevel1again.draw();
	     playlevel2again.draw();
	     playlevel3.draw();
	     playlevel4.draw();
	     GO2.draw();

	     dude.x = dude.x + dude.speedx
		 if(dude.x > w - dude.width || dude.x < 0) dude.speedx = dude.speedx * -1
		
		 dude.y = dude.y + dude.speedy
		 if(dude.y > h - dude.height || dude.y < 0) dude.speedy = dude.speedy * -1
		 dude.draw();
	
		
	
	
	    }else if (screen == 9){	
		 ctx.drawImage( level3, 0,0,640,480)
		
		 ctx.fillStyle = 'blue'
		 ctx.font = '20pt Ariel'
		 ctx.fillText("LEVEL 3",280,25);
		
		 playscreenback.draw();
		 
		 rect2.draw();
		 rect2.x = rect2.x + rect2.speedx
		 if(rect2.x > w - rect2.width || rect2.x < 0) rect2.speedx = rect2.speedx * -1
		
	    
		 ball.draw();
		 if(ball.collideObject(rect2)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 ball.x = ball.x + ball.speedx
		 if(ball.x > w - ball.width || ball.x < 0) ball.speedx = ball.speedx * -1
		
		 ball.y = ball.y + ball.speedy
		 if(ball.y > h - ball.height || ball.y < 0) ball.speedy = ball.speedy * -1
		 
		 
		 ball3.draw();
		 if(ball3.collideObject(rect2)){
		 ball3.speedy = ball3.speedy * - 1;
		 }
		 ball3.x = ball3.x + ball3.speedx
		 if(ball3.x > w - ball3.width || ball3.x < 0) ball3.speedx = ball3.speedx * -1
		
		 ball3.y = ball3.y + ball3.speedy
		 if(ball3.y > h - ball3.height || ball3.y < 0) ball3.speedy = ball3.speedy * -1
		
		//BRICK COLLIDE CODES
		 brick1.draw();
		 if(ball.collideObject(brick1)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick2.draw();
		 if(ball.collideObject(brick2)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick3.draw();
		 if(ball.collideObject(brick3)){
		 ball.speedy = ball.speedy * - 1;
		 }
		
		 brick4.draw();
		 if(ball.collideObject(brick4)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick5.draw();
		 if(ball.collideObject(brick5)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick6.draw();
		 if(ball.collideObject(brick6)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick7.draw();
		 if(ball.collideObject(brick7)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick8.draw();                                      
		 if(ball.collideObject(brick8)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick9.draw();
		 if(ball.collideObject(brick9)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick10.draw();
		 if(ball.collideObject(brick10)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick11.draw();
		 if(ball.collideObject(brick11)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick12.draw();
		 if(ball.collideObject(brick12)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick13.draw();
		 if(ball.collideObject(brick13)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick14.draw();
		 if(ball.collideObject(brick14)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick15.draw();
		 if(ball.collideObject(brick15)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick16.draw();
		 if(ball.collideObject(brick16)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick17.draw();
		 if(ball.collideObject(brick17)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick18.draw();
		 if(ball.collideObject(brick18)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick19.draw();
		 if(ball.collideObject(brick19)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick20.draw();
		 if(ball.collideObject(brick20)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick21.draw();
		 if(ball.collideObject(brick21)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick22.draw();
		 if(ball.collideObject(brick22)){
		 ball.speedy = ball.speedy * - 1;
		 }
		 brick23.draw();
		 if(ball.collideObject(brick23)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 //24-50
		 brick24.draw();
		 if(ball.collideObject(brick24)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick25.draw();
		 if(ball.collideObject(brick25)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick26.draw();
		 if(ball.collideObject(brick26)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick27.draw();
		 if(ball.collideObject(brick27)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick28.draw();
		 if(ball.collideObject(brick28)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick29.draw();
		 if(ball.collideObject(brick29)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick30.draw();
		 if(ball.collideObject(brick30)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick31.draw();
		 if(ball.collideObject(brick31)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick32.draw();
		 if(ball.collideObject(brick32)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick33.draw();
		 if(ball.collideObject(brick33)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick34.draw();
		 if(ball.collideObject(brick34)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick35.draw();
		 if(ball.collideObject(brick35)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick36.draw();
		 if(ball.collideObject(brick36)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick37.draw();
		 if(ball.collideObject(brick37)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick38.draw();
		 if(ball.collideObject(brick38)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick39.draw();
		 if(ball.collideObject(brick39)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick40.draw();
		 if(ball.collideObject(brick40)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick41.draw();
		 if(ball.collideObject(brick41)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick42.draw();
		 if(ball.collideObject(brick42)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick43.draw();
		 if(ball.collideObject(brick43)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick44.draw();
		 if(ball.collideObject(brick44)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick45.draw();
		 if(ball.collideObject(brick45)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick46.draw();
		 if(ball.collideObject(brick46)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick47.draw();
		 if(ball.collideObject(brick47)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick48.draw();
		 if(ball.collideObject(brick48)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick49.draw();
		 if(ball.collideObject(brick49)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 brick50.draw();
		 if(ball.collideObject(brick50)){
	     ball.speedy = ball.speedy * - 1;
		 }
		 
		
		 
		
		 //ball collide with brick codes pt2
		 if(ball.collideObject(brick1)){
		 brick1.x = 10000
		 brick1.y = 1000}
		 
		 if(ball.collideObject(brick2)){
		 brick2.x = 10000
		 brick2.y = 1000}
		 
		  if(ball.collideObject(brick3)){
		 brick3.x = 10000
		 brick3.y = 1000}
		 
		  if(ball.collideObject(brick4)){
		 brick4.x = 10000
		 brick4.y = 1000}
		 
		  if(ball.collideObject(brick5)){
		 brick5.x = 10000
		 brick5.y = 1000}
		 
		  if(ball.collideObject(brick6)){
		 brick6.x = 10000
		 brick6.y = 1000}
		 
		  if(ball.collideObject(brick7)){
		 brick7.x = 10000
		 brick7.y = 1000}
		 
		  if(ball.collideObject(brick8)){
		 brick8.x = 10000
		 brick8.y = 1000}
		 
		  if(ball.collideObject(brick9)){
		 brick9.x = 10000
		 brick9.y = 1000}
		 
		  if(ball.collideObject(brick10)){
		 brick10.x = 10000
		 brick10.y = 1000}
		 
		  if(ball.collideObject(brick11)){
		 brick11.x = 10000
		 brick11.y = 1000}
		 
		  if(ball.collideObject(brick12)){
		 brick12.x = 10000
		 brick12.y = 1000}
		 
		 if(ball.collideObject(brick13)){
		 brick13.x = 10000
		 brick13.y = 1000}
		 
		 if(ball.collideObject(brick14)){
		 brick14.x = 10000
		 brick14.y = 1000}
		 
		 if(ball.collideObject(brick15)){
		 brick15.x = 10000
		 brick15.y = 1000}
		 
		 if(ball.collideObject(brick16)){
		 brick16.x = 10000
		 brick16.y = 1000}
		 
		 if(ball.collideObject(brick17)){
		 brick17.x = 10000
		 brick17.y = 1000}
		 
		 if(ball.collideObject(brick18)){
		 brick18.x = 10000
		 brick18.y = 1000}
		 
		 if(ball.collideObject(brick19)){
		 brick19.x = 10000
		 brick19.y = 1000}
		 
		 if(ball.collideObject(brick20)){
		 brick20.x = 10000
		 brick20.y = 1000}
		 
		 if(ball.collideObject(brick21)){
		 brick21.x = 10000
		 brick21.y = 1000}
		 
		 if(ball.collideObject(brick22)){
		 brick22.x = 10000
		 brick22.y = 1000}
		 
		 if(ball.collideObject(brick23)){
		 brick23.x = 10000
		 brick23.y = 1000}
		 
		 //bricks24-50
		 if(ball.collideObject(brick24)){
		 brick24.x = 10000
		 brick24.y = 1000}
		 
		 if(ball.collideObject(brick25)){
		 brick25.x = 10000
		 brick25.y = 1000}
		 
		 if(ball.collideObject(brick26)){
		 brick26.x = 10000
		 brick26.y = 1000}
		 
		 if(ball.collideObject(brick27)){
		 brick27.x = 10000
		 brick27.y = 1000}
		 
		 if(ball.collideObject(brick28)){
		 brick28.x = 10000
		 brick28.y = 1000}
		 
		 if(ball.collideObject(brick29)){
		 brick29.x = 10000
		 brick29.y = 1000}
		 
		 if(ball.collideObject(brick30)){
		 brick30.x = 10000
		 brick30.y = 1000}
		 
		 
		 if(ball.collideObject(brick31)){
		 brick31.x = 10000
		 brick31.y = 1000}
		 
		  if(ball.collideObject(brick32)){
		 brick32.x = 10000
		 brick32.y = 1000}
		 
		 if(ball.collideObject(brick33)){
		 brick33.x = 10000
		 brick33.y = 1000}
		 
		 if(ball.collideObject(brick34)){
		 brick34.x = 10000
		 brick34.y = 1000}
		 
		 if(ball.collideObject(brick35)){
		 brick35.x = 10000
		 brick35.y = 1000}
		 
		 if(ball.collideObject(brick36)){
		 brick36.x = 10000
		 brick36.y = 1000}
		 
		 if(ball.collideObject(brick37)){
		 brick37.x = 10000
		 brick37.y = 1000}
		 
		 if(ball.collideObject(brick38)){
		 brick38.x = 10000
		 brick38.y = 1000}
		 
		 if(ball.collideObject(brick39)){
		 brick39.x = 10000
		 brick39.y = 1000}
		 
		 
		 if(ball.collideObject(brick40)){
		 brick40.x = 10000
		 brick40.y = 1000}
		 
		 if(ball.collideObject(brick41)){
		 brick41.x = 10000
		 brick41.y = 1000}
		 
		  if(ball.collideObject(brick42)){
		 brick42.x = 10000
		 brick42.y = 1000}
		 
		 if(ball.collideObject(brick43)){
		 brick43.x = 10000
		 brick43.y = 1000}
		 
		 if(ball.collideObject(brick44)){
		 brick44.x = 10000
		 brick44.y = 1000}
		 
		 if(ball.collideObject(brick45)){
		 brick45.x = 10000
		 brick45.y = 1000}
		 
		 if(ball.collideObject(brick46)){
		 brick46.x = 10000
		 brick46.y = 1000}
		 
		 if(ball.collideObject(brick47)){
		 brick47.x = 10000
		 brick47.y = 1000}
		 
		 if(ball.collideObject(brick48)){
		 brick48.x = 10000
		 brick48.y = 1000}
		 
		 if(ball.collideObject(brick49)){
		 brick49.x = 10000
		 brick49 .y = 1000}
		 
		 
		 if(ball.collideObject(brick50)){
		 brick50.x = 10000
		 brick50.y = 1000} 
		 
		 
     //BRICK COLLIDE CODES
		 
		 if(ball3.collideObject(brick1)){
		ball3.speedy = ball3.speedy * - 1;
		 }
	
		 if(ball3.collideObject(brick2)){
		  ball3.speedy = ball3.speedy * - 1;
		 }
			
		 if(ball3.collideObject(brick3)){
		  ball3.speedy = ball3.speedy * - 1;
		 }
		
		
		 if(ball3.collideObject(brick4)){
		 ball3.speedy = ball3.speedy * - 1;
		 }
		  
		 if(ball3.collideObject(brick5)){
		  ball3.speedy = ball3.speedy * - 1;
		 }
		 
		 if(ball3.collideObject(brick6)){
		 ball3.speedy = ball3.speedy * - 1;
		 }
		 
		 if(ball3.collideObject(brick7)){
		 ball3.speedy = ball3.speedy * - 1;
		 }
	                                    
		 if(ball3.collideObject(brick8)){
		 ball3.speedy = ball3.speedy * - 1;
		 }
		
		 if(ball3.collideObject(brick9)){
		 ball3.speedy = ball3.speedy * - 1;
		 }
		
		 if(ball3.collideObject(brick10)){
		 ball3.speedy = ball3.speedy * - 1;
		 }
	
		 if(ball3.collideObject(brick11)){
		  ball3.speedy = ball3.speedy * - 1;
		 }
		 
		 if(ball3.collideObject(brick12)){
		 ball3.speedy = ball3.speedy * - 1;
		 }
		 
		 if(ball3.collideObject(brick13)){
		 ball3.speedy = ball3.speedy * - 1;
		 }
		
		 if(ball3.collideObject(brick14)){
		 ball3.speedy = ball.speedy * - 1;
		 }
	
		 if(ball3.collideObject(brick15)){
		  ball3.speedy = ball3.speedy * - 1;
		 }
	
		 if(ball3.collideObject(brick16)){
		 ball3.speedy = ball3.speedy * - 1;
		 }
		
		 if(ball3.collideObject(brick17)){
		 ball3.speedy = ball3.speedy * - 1;
		 }
	
		 if(ball3.collideObject(brick18)){
		 ball3.speedy = ball3.speedy * - 1;
		 }
	
		 if(ball3.collideObject(brick19)){
		 ball3.speedy = ball3.speedy * - 1;
		 }

		 if(ball3.collideObject(brick20)){
		 ball3.speedy = ball3.speedy * - 1;
		 }
	
		 if(ball3.collideObject(brick21)){
		 ball3.speedy = ball3.speedy * - 1;
		 }

		 if(ball3.collideObject(brick22)){
		 ball3.speedy = ball3.speedy * - 1;
		 }
		
		 if(ball.collideObject(brick23)){
	     ball3.speedy = ball3.speedy * - 1;
		 }
		 //24-50
	
		 if(ball3.collideObject(brick24)){
	     ball3.speedy = ball3.speedy * - 1;
		 }
		
		 if(ball3.collideObject(brick25)){
	     ball3.speedy = ball3.speedy * - 1;
		 }
		
		 if(ball3.collideObject(brick26)){
	     ball3.speedy = ball3.speedy * - 1;
		 }
	
		 if(ball3.collideObject(brick27)){
	     ball3.speedy = ball3.speedy * - 1;
		 }
	
		 if(ball3.collideObject(brick28)){
	     ball3.speedy = ball3.speedy * - 1;
		 }
	
		 if(ball3.collideObject(brick29)){
	     ball3.speedy = ball3.speedy * - 1;
		 }
	
		 if(ball3.collideObject(brick30)){
	     ball3.speedy = ball3.speedy * - 1;
		 }
		
		 if(ball3.collideObject(brick31)){
	     ball3.speedy = ball3.speedy * - 1;
		 }
		
		 if(ball3.collideObject(brick32)){
	     ball3.speedy = ball3.speedy * - 1;
		 }
		
		 if(ball3.collideObject(brick33)){
	     ball3.speedy = ball3.speedy * - 1;
		 }
	
		 if(ball3.collideObject(brick34)){
	     ball3.speedy = ball3.speedy * - 1;
		 }
		
		 if(ball3.collideObject(brick35)){
	     ball3.speedy = ball3.speedy * - 1;
		 }
		 
		 if(ball3.collideObject(brick36)){
	     ball3.speedy = ball3.speedy * - 1;
		 }
	
		 if(ball3.collideObject(brick37)){
	     ball3.speedy = ball3.speedy * - 1;
		 }
		 
		 if(ball3.collideObject(brick38)){
	     ball3.speedy = ball3.speedy * - 1;
		 }
		
		 if(ball3.collideObject(brick39)){
	     ball3.speedy = ball3.speedy * - 1;
		 }
		
		 if(ball3.collideObject(brick40)){
	     ball3.speedy = ball3.speedy * - 1;
		 }
		 
		 if(ball3.collideObject(brick41)){
	     ball3.speedy = ball3.speedy * - 1;
		 }
		
		 if(ball3.collideObject(brick42)){
	     ball3.speedy = ball3.speedy * - 1;
		 }
		 
		 if(ball3.collideObject(brick43)){
	     ball3.speedy = ball3.speedy * - 1;
		 }
		 
		 if(ball3.collideObject(brick44)){
	     ball3.speedy = ball3.speedy * - 1;
		 }
		 
		 if(ball3.collideObject(brick45)){
	     ball3.speedy = ball3.speedy * - 1;
		 }
		 
		 if(ball3.collideObject(brick46)){
	     ball3.speedy = ball3.speedy * - 1;
		 }
		
		 if(ball3.collideObject(brick47)){
	     ball3.speedy = ball3.speedy * - 1;
		 }
		
		 if(ball3.collideObject(brick48)){
	     ball3.speedy = ball3.speedy * - 1;
		 }
		
		if(ball3.collideObject(brick49)){
	     ball3.speedy = ball3.speedy * - 1;
		 }
		 
		 if(ball3.collideObject(brick50)){
	     ball3.speedy = ball3.speedy * - 1;
		 }
		 
		
		 
		
		 //ball collide with brick codes pt2
		 if(ball3.collideObject(brick1)){
		 brick1.x = 10000
		 brick1.y = 1000}
		 
		 if(ball3.collideObject(brick2)){
		 brick2.x = 10000
		 brick2.y = 1000}
		 
		  if(ball3.collideObject(brick3)){
		 brick3.x = 10000
		 brick3.y = 1000}
		 
		  if(ball3.collideObject(brick4)){
		 brick4.x = 10000
		 brick4.y = 1000}
		 
		  if(ball3.collideObject(brick5)){
		 brick5.x = 10000
		 brick5.y = 1000}
		 
		  if(ball3.collideObject(brick6)){
		 brick6.x = 10000
		 brick6.y = 1000}
		 
		  if(ball3.collideObject(brick7)){
		 brick7.x = 10000
		 brick7.y = 1000}
		 
		  if(ball3.collideObject(brick8)){
		 brick8.x = 10000
		 brick8.y = 1000}
		 
		  if(ball3.collideObject(brick9)){
		 brick9.x = 10000
		 brick9.y = 1000}
		 
		  if(ball3.collideObject(brick10)){
		 brick10.x = 10000
		 brick10.y = 1000}
		 
		  if(ball3.collideObject(brick11)){
		 brick11.x = 10000
		 brick11.y = 1000}
		 
		  if(ball3.collideObject(brick12)){
		 brick12.x = 10000
		 brick12.y = 1000}
		 
		 if(ball3.collideObject(brick13)){
		 brick13.x = 10000
		 brick13.y = 1000}
		 
		 if(ball3.collideObject(brick14)){
		 brick14.x = 10000
		 brick14.y = 1000}
		 
		 if(ball3.collideObject(brick15)){
		 brick15.x = 10000
		 brick15.y = 1000}
		 
		 if(ball3.collideObject(brick16)){
		 brick16.x = 10000
		 brick16.y = 1000}
		 
		 if(ball3.collideObject(brick17)){
		 brick17.x = 10000
		 brick17.y = 1000}
		 
		 if(ball3.collideObject(brick18)){
		 brick18.x = 10000
		 brick18.y = 1000}
		 
		 if(ball3.collideObject(brick19)){
		 brick19.x = 10000
		 brick19.y = 1000}
		 
		 if(ball3.collideObject(brick20)){
		 brick20.x = 10000
		 brick20.y = 1000}
		 
		 if(ball3.collideObject(brick21)){
		 brick21.x = 10000
		 brick21.y = 1000}
		 
		 if(ball3.collideObject(brick22)){
		 brick22.x = 10000
		 brick22.y = 1000}
		 
		 if(ball3.collideObject(brick23)){
		 brick23.x = 10000
		 brick23.y = 1000}
		 
		 //bricks24-50
		 if(ball3.collideObject(brick24)){
		 brick24.x = 10000
		 brick24.y = 1000}
		 
		 if(ball3.collideObject(brick25)){
		 brick25.x = 10000
		 brick25.y = 1000}
		 
		 if(ball3.collideObject(brick26)){
		 brick26.x = 10000
		 brick26.y = 1000}
		 
		 if(ball3.collideObject(brick27)){
		 brick27.x = 10000
		 brick27.y = 1000}
		 
		 if(ball3.collideObject(brick28)){
		 brick28.x = 10000
		 brick28.y = 1000}
		 
		 if(ball3.collideObject(brick29)){
		 brick29.x = 10000
		 brick29.y = 1000}
		 
		 if(ball3.collideObject(brick30)){
		 brick30.x = 10000
		 brick30.y = 1000}
		 
		 
		 if(ball3.collideObject(brick31)){
		 brick31.x = 10000
		 brick31.y = 1000}
		 
		 if(ball3.collideObject(brick32)){
		 brick32.x = 10000
		 brick32.y = 1000}
		 
		 if(ball3.collideObject(brick33)){
		 brick33.x = 10000
		 brick33.y = 1000}
		 
		 if(ball3.collideObject(brick34)){
		 brick34.x = 10000
		 brick34.y = 1000}
		 
		 if(ball3.collideObject(brick35)){
		 brick35.x = 10000
		 brick35.y = 1000}
		 
		 if(ball3.collideObject(brick36)){
		 brick36.x = 10000
		 brick36.y = 1000}
		 
		 if(ball3.collideObject(brick37)){
		 brick37.x = 10000
		 brick37.y = 1000}
		 
		 if(ball3.collideObject(brick38)){
		 brick38.x = 10000
		 brick38.y = 1000}
		 
		 if(ball3.collideObject(brick39)){
		 brick39.x = 10000
		 brick39.y = 1000}
		 
		 
		 if(ball3.collideObject(brick40)){
		 brick40.x = 10000
		 brick40.y = 1000}
		 
		 if(ball3.collideObject(brick41)){
		 brick41.x = 10000
		 brick41.y = 1000}
		 
		 if(ball3.collideObject(brick42)){
		 brick42.x = 10000
		 brick42.y = 1000}
		 
		 if(ball3.collideObject(brick43)){
		 brick43.x = 10000
		 brick43.y = 1000}
		 
		 if(ball3.collideObject(brick44)){
		 brick44.x = 10000
		 brick44.y = 1000}
		 
		 if(ball3.collideObject(brick45)){
		 brick45.x = 10000
		 brick45.y = 1000}
		 
		 if(ball3.collideObject(brick46)){
		 brick46.x = 10000
		 brick46.y = 1000}
		 
		 if(ball3.collideObject(brick47)){
		 brick47.x = 10000
		 brick47.y = 1000}
		 
		 if(ball3.collideObject(brick48)){
		 brick48.x = 10000
		 brick48.y = 1000}
		 
		 if(ball3.collideObject(brick49)){
		 brick49.x = 10000
		 brick49 .y = 1000}
		 
		 
		 if(ball3.collideObject(brick50)){
		 brick50.x = 10000
		 brick50.y = 1000} 
		 
		 

		 //ball collide with brick codes
		 
		 if (ball3.y > 425) screen = 10
		 if (ball.y > 410) screen = 10
		 if (brick1.y >h && brick2.y> h&&  brick3.y > h&& brick4.y > h&& brick5.y > h&& brick6.y > h&& brick7.y > h&& brick8.y > h&& brick9.y > h&& brick10.y > h&&brick11.y >h && brick12.y> h&&  brick13.y > h&& brick14.y > h&& brick15.y > h&& brick16.y > h&& brick17.y > h&& brick18.y > h&& brick19.y > h&& brick20.y > h&&brick21.y >h && brick22.y> h&&  brick23.y > h&& brick24.y > h&& brick25.y > h&& brick26.y > h&& brick27.y > h&& brick28.y > h&& brick29.y > h&& brick30.y > h&&brick31.y >h && brick32.y> h&&  brick33.y > h&& brick34.y > h&& brick35.y > h&& brick36.y > h&& brick37.y > h&& brick38.y > h&& brick39.y > h&& brick40.y > h&&brick41.y >h && brick42.y> h&&  brick43.y > h&& brick44.y > h&& brick45.y > h&& brick46.y > h&& brick47.y > h&& brick48.y > h&& brick49.y > h&& brick50.y > h )screen = 6
	
	//screen 10
	    }else if (screen == 10){
	     ctx.drawImage( line2, 0,0,640,480)
	
	     ctx.fillStyle = 'red'
         ctx.font = '30pt Ariel'
	     ctx.fillText("GAME OVER!!",190,50);
	
	     playlevel1again.draw();
	     playlevel2again.draw();
	     playlevel3again.draw();
	     playlevel4.draw();
	     mainback.draw();
	
	     dude.x = dude.x + dude.speedx
		 if(dude.x > w - dude.width || dude.x < 0) dude.speedx = dude.speedx * -1
		
		 dude.y = dude.y + dude.speedy
		 if(dude.y > h - dude.height || dude.y < 0) dude.speedy = dude.speedy * -1
		 dude.draw();
	
	
	
	
	
	
	
	
	
	//screen 11
		   
	    }else if (screen == 11) {
	      ctx.drawImage( fall, 0,0,640,480)
	   
	     ctx.fillStyle = 'blue'
	     ctx.font = '20pt Ariel'
	     ctx.fillText ('LEVEL 4',280,25)
	     playscreenback.draw();

		 rect.draw();
		 rect.x = rect.x + rect.speedx
		 if(rect.x > w - rect.width || rect.x < 0) rect.speedx = rect.speedx * -1
		
	
	
	
	
		 ball2.draw();
		 if(ball2.collideObject(rect)){
		 ball2.speedy = ball2.speedy * - 1
		 }
		 ball2.x = ball2.x + ball2.speedx
		 if(ball2.x > w - ball2.width || ball2.x < 0) ball2.speedx = ball2.speedx * -1
		
		 ball2.y = ball2.y + ball2.speedy
		 if(ball2.y > h - ball2.height || ball2.y < 0) ball2.speedy = ball2.speedy * -1
		 
		
		//BRICK COLLIDE CODES
		 brick1.draw();
		 if(ball2.collideObject(brick1)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		 brick2.draw();
		 if(ball2.collideObject(brick2)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		 brick3.draw();
		 if(ball2.collideObject(brick3)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		
		 brick4.draw();
		 if(ball2.collideObject(brick4)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		  brick5.draw();
		 if(ball2.collideObject(brick5)){
		  ball2.speedy = ball2.speedy * - 1;
		 }
		 brick6.draw();
		 if(ball2.collideObject(brick6)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		 brick7.draw();
		 if(ball2.collideObject(brick7)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		 brick8.draw();                                      
		 if(ball2.collideObject(brick8)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		 brick9.draw();
		 if(ball2.collideObject(brick9)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		 brick10.draw();
		 if(ball2.collideObject(brick10)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
	     brick11.draw();
		 if(ball2.collideObject(brick11)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		 brick12.draw();
		 if(ball2.collideObject(brick12)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		 brick13.draw();
		 if(ball2.collideObject(brick13)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		 brick14.draw();
		 if(ball2.collideObject(brick14)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		 brick15.draw();
		 if(ball2.collideObject(brick15)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		 brick16.draw();
		 if(ball2.collideObject(brick16)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		 brick17.draw();
		 if(ball2.collideObject(brick17)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		 brick18.draw();
		 if(ball2.collideObject(brick18)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		 brick19.draw();
		 if(ball2.collideObject(brick19)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		 brick20.draw();
		 if(ball2.collideObject(brick20)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		 brick21.draw();
		 if(ball2.collideObject(brick21)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		 brick22.draw();
		 if(ball2.collideObject(brick22)){
		 ball2.speedy = ball2.speedy * - 1;
		 }
		 brick23.draw();
		 if(ball2.collideObject(brick23)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 //24-50
		 brick24.draw();
		 if(ball2.collideObject(brick24)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick25.draw();
		 if(ball2.collideObject(brick25)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick26.draw();
		 if(ball2.collideObject(brick26)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick27.draw();
		 if(ball2.collideObject(brick27)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick28.draw();
		 if(ball2.collideObject(brick28)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick29.draw();
		 if(ball2.collideObject(brick29)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick30.draw();
		 if(ball2.collideObject(brick30)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick31.draw();
		 if(ball2.collideObject(brick31)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick32.draw();
		 if(ball2.collideObject(brick32)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick33.draw();
		 if(ball2.collideObject(brick33)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick34.draw();
		 if(ball2.collideObject(brick34)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick35.draw();
		 if(ball2.collideObject(brick35)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick36.draw();
		 if(ball2.collideObject(brick36)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick37.draw();
		 if(ball2.collideObject(brick37)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick38.draw();
		 if(ball2.collideObject(brick38)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick39.draw();
		 if(ball2.collideObject(brick39)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick40.draw();
		 if(ball2.collideObject(brick40)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick41.draw();
		 if(ball2.collideObject(brick41)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick42.draw();
		 if(ball2.collideObject(brick42)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick43.draw();
		 if(ball2.collideObject(brick43)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick44.draw();
		 if(ball2.collideObject(brick44)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick45.draw();
		 if(ball2.collideObject(brick45)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick46.draw();
		 if(ball2.collideObject(brick46)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick47.draw();
		 if(ball2.collideObject(brick47)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick48.draw();
		 if(ball2.collideObject(brick48)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick49.draw();
		 if(ball2.collideObject(brick49)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 brick50.draw();
		 if(ball2.collideObject(brick50)){
	     ball2.speedy = ball2.speedy * - 1;
		 }
		 
		
		 
		
		 //ball collide with brick codes pt2
		 if(ball2.collideObject(brick1)){
		 brick1.x = 10000
		 brick1.y = 1000}
		 
		 if(ball2.collideObject(brick2)){
		 brick2.x = 10000
		 brick2.y = 1000}
		 
		 if(ball2.collideObject(brick3)){
		 brick3.x = 10000
		 brick3.y = 1000}
		 
		 if(ball2.collideObject(brick4)){
		 brick4.x = 10000
		 brick4.y = 1000}
		 
		 if(ball2.collideObject(brick5)){
		 brick5.x = 10000
		 brick5.y = 1000}
		 
		 if(ball2.collideObject(brick6)){
		 brick6.x = 10000
		 brick6.y = 1000}
		 
		 if(ball2.collideObject(brick7)){
		 brick7.x = 10000
		 brick7.y = 1000}
		 
		 if(ball2.collideObject(brick8)){
		 brick8.x = 10000
		 brick8.y = 1000}
		 
		 if(ball2.collideObject(brick9)){
		 brick9.x = 10000
		 brick9.y = 1000}
		 
		 if(ball2.collideObject(brick10)){
		 brick10.x = 10000
		 brick10.y = 1000}
		 
		 if(ball2.collideObject(brick11)){
		 brick11.x = 10000
		 brick11.y = 1000}
		 
		 if(ball2.collideObject(brick12)){
		 brick12.x = 10000
		 brick12.y = 1000}
		 
		 if(ball2.collideObject(brick13)){
		 brick13.x = 10000
		 brick13.y = 1000}
		 
		 if(ball2.collideObject(brick14)){
		 brick14.x = 10000
		 brick14.y = 1000}
		 
		 if(ball2.collideObject(brick15)){
		 brick15.x = 10000
		 brick15.y = 1000}
		 
		 if(ball2.collideObject(brick16)){
		 brick16.x = 10000
		 brick16.y = 1000}
		 
		 if(ball2.collideObject(brick17)){
		 brick17.x = 10000
		 brick17.y = 1000}
		 
		 if(ball2.collideObject(brick18)){
		 brick18.x = 10000
		 brick18.y = 1000}
		 
		 if(ball2.collideObject(brick19)){
		 brick19.x = 10000
		 brick19.y = 1000}
		 
		 if(ball2.collideObject(brick20)){
		 brick20.x = 10000
		 brick20.y = 1000}
		 
		 if(ball2.collideObject(brick21)){
		 brick21.x = 10000
		 brick21.y = 1000}
		 
		 if(ball2.collideObject(brick22)){
		 brick22.x = 10000
		 brick22.y = 1000}
		 
		 if(ball2.collideObject(brick23)){
		 brick23.x = 10000
		 brick23.y = 1000}
		 
		 //bricks24-50
		 if(ball2.collideObject(brick24)){
		 brick24.x = 10000
		 brick24.y = 1000}
		 
		 if(ball2.collideObject(brick25)){
		 brick25.x = 10000
		 brick25.y = 1000}
		 
		 if(ball2.collideObject(brick26)){
		 brick26.x = 10000
		 brick26.y = 1000}
		 
		 if(ball2.collideObject(brick27)){
		 brick27.x = 10000
		 brick27.y = 1000}
		 
		 if(ball2.collideObject(brick28)){
		 brick28.x = 10000
		 brick28.y = 1000}
		 
		 if(ball2.collideObject(brick29)){
		 brick29.x = 10000
		 brick29.y = 1000}
		 
		 if(ball2.collideObject(brick30)){
		 brick30.x = 10000
		 brick30.y = 1000}
		 
		 
		 if(ball2.collideObject(brick31)){
		 brick31.x = 10000
		 brick31.y = 1000}
		 
		 if(ball2.collideObject(brick32)){
		 brick32.x = 10000
		 brick32.y = 1000}
		 
		 if(ball2.collideObject(brick33)){
		 brick33.x = 10000
		 brick33.y = 1000}
		 
		 if(ball2.collideObject(brick34)){
		 brick34.x = 10000
		 brick34.y = 1000}
		 
		 if(ball2.collideObject(brick35)){
		 brick35.x = 10000
		 brick35.y = 1000}
		 
		 if(ball2.collideObject(brick36)){
		 brick36.x = 10000
		 brick36.y = 1000}
		 
		 if(ball2.collideObject(brick37)){
		 brick37.x = 10000
		 brick37.y = 1000}
		 
		 if(ball2.collideObject(brick38)){
		 brick38.x = 10000
		 brick38.y = 1000}
		 
		 if(ball2.collideObject(brick39)){
		 brick39.x = 10000
		 brick39.y = 1000}
		 
		 
		 if(ball2.collideObject(brick40)){
		 brick40.x = 10000
		 brick40.y = 1000}
		 
	     if(ball2.collideObject(brick41)){
		 brick41.x = 10000
		 brick41.y = 1000}
		 
		 if(ball2.collideObject(brick42)){
		 brick42.x = 10000
		 brick42.y = 1000}
		 
		 if(ball2.collideObject(brick43)){
		 brick43.x = 10000
		 brick43.y = 1000}
		 
		 if(ball2.collideObject(brick44)){
		 brick44.x = 10000
		 brick44.y = 1000}
		 
		 if(ball2.collideObject(brick45)){
		 brick45.x = 10000
		 brick45.y = 1000}
		 
		 if(ball2.collideObject(brick46)){
		 brick46.x = 10000
		 brick46.y = 1000}
		 
		 if(ball2.collideObject(brick47)){
		 brick47.x = 10000
		 brick47.y = 1000}
		 
		 if(ball2.collideObject(brick48)){
		 brick48.x = 10000
		 brick48.y = 1000}
		 
		 if(ball2.collideObject(brick49)){
		 brick49.x = 10000
		 brick49 .y = 1000}
		 
		 
		 if(ball2.collideObject(brick50)){
		 brick50.x = 10000
		 brick50.y = 1000} 
		 
		 leaf1.draw();
		 leaf2.draw();
	     leaf3.draw();
		 leaf4.draw();
		 leaf5.draw();
		 leaf6.draw();
	     leaf7.draw();
	     leaf8.draw();
		 leaf9.draw();
		 leaf10.draw();
		 leaf11.draw();
		 leaf12.draw();
	     leaf13.draw();
		 leaf14.draw();
		 leaf15.draw();
		 leaf16.draw();
	     leaf17.draw();
	     leaf18.draw();
		 leaf19.draw();
		 leaf20.draw();
		 leaf21.draw();
		 leaf22.draw();
	     leaf23.draw();
		 leaf24.draw();
		 leaf25.draw();
		 leaf26.draw();
	     leaf27.draw();
	     leaf28.draw();
		 leaf29.draw();
		 leaf30.draw();
		 leaf31.draw();
		 leaf32.draw();
	     leaf33.draw();
		 leaf34.draw();
		 leaf35.draw();
		 leaf36.draw();
	     leaf37.draw();
	     leaf38.draw();
		 leaf39.draw();
		 leaf40.draw();
		 leaf41.draw();
		 leaf42.draw();
	     leaf43.draw();
		 leaf44.draw();
		 leaf45.draw();
		 leaf46.draw();
	     leaf47.draw();
	     leaf48.draw();
		 leaf49.draw();
		 leaf50.draw();
		  
		  

		 
		
		 
		
		 //ball collide with brick codes pt2
		 if(ball2.collideObject(leaf1)){
		 leaf1.x = 10000
		 leaf1.y = 1000}
		 
		 if(ball2.collideObject(leaf2)){
		 leaf2.x = 10000
		 leaf2.y = 1000}
		  
		 if(ball2.collideObject(leaf3)){
		 leaf3.x = 10000
		 leaf3.y = 1000}
		 
		 if(ball2.collideObject(leaf4)){
		 leaf4.x = 10000
		 leaf4.y = 1000}
		 
		 if(ball2.collideObject(leaf5)){
		 leaf5.x = 10000
		 leaf5.y = 1000}
		 
		 if(ball2.collideObject(leaf6)){
		 leaf6.x = 10000
		 leaf6.y = 1000}
		 
		 if(ball2.collideObject(leaf7)){
		 leaf7.x = 10000
		 leaf7.y = 1000}
		 
		 if(ball2.collideObject(leaf8)){
		 leaf8.x = 10000
		 leaf8.y = 1000}
		 
		 if(ball2.collideObject(leaf9)){
		 leaf9.x = 10000
		 leaf9.y = 1000}
		 
		 if(ball2.collideObject(leaf10)){
		 leaf10.x = 10000
		 leaf10.y = 1000}
		 
	     if(ball2.collideObject(leaf11)){
		 leaf11.x = 10000
		 leaf11.y = 1000}
		 
		 if(ball2.collideObject(leaf12)){
		 leaf12.x = 10000
		 leaf12.y = 1000}
		 
		 if(ball2.collideObject(leaf13)){
		 leaf13.x = 10000
		 leaf13.y = 1000}
		 
		 if(ball2.collideObject(leaf14)){
		 leaf14.x = 10000
		 leaf14.y = 1000}
		 
		 if(ball2.collideObject(leaf15)){
		 leaf15.x = 10000
		 leaf15.y = 1000}
		 
		 if(ball2.collideObject(leaf16)){
		 leaf16.x = 10000
		 leaf16.y = 1000}
		 
		 if(ball2.collideObject(leaf17)){
		 leaf17.x = 10000
		 leaf17.y = 1000}
		 
		 if(ball2.collideObject(leaf18)){
		 leaf18.x = 10000
		 leaf18.y = 1000}
		 
		 if(ball2.collideObject(leaf19)){
		 leaf19.x = 10000
		 leaf19.y = 1000}
		 
		 if(ball2.collideObject(leaf20)){
		 leaf20.x = 10000
		 leaf20.y = 1000}
		 
		 if(ball2.collideObject(leaf21)){
		 leaf21.x = 10000
		 leaf21.y = 1000}
		 
		 if(ball2.collideObject(leaf22)){
		 leaf22.x = 10000
		 leaf22.y = 1000}
		 
		 if(ball2.collideObject(leaf23)){
		 leaf23.x = 10000
		 leaf23.y = 1000}
		 
		 //bricks24-50
		 if(ball2.collideObject(leaf24)){
		 leaf24.x = 10000
		 leaf24.y = 1000}
		 
		 if(ball2.collideObject(leaf25)){
		 leaf25.x = 10000
		 leaf25.y = 1000}
		 
		 if(ball2.collideObject(leaf26)){
		 leaf26.x = 10000
		 leaf26.y = 1000}
		 
		 if(ball2.collideObject(leaf27)){
		 leaf27.x = 10000
		 leaf27.y = 1000}
		 
		 if(ball2.collideObject(brick28)){
		 leaf28.x = 10000
		 leaf28.y = 1000}
		 
		 if(ball2.collideObject(brick29)){
		 leaf29.x = 10000
		 leaf29.y = 1000}
		 
		 if(ball2.collideObject(leaf30)){
		 leaf30.x = 10000
		 leaf30.y = 1000}
		 
		 
		 if(ball2.collideObject(leaf31)){
		 leaf31.x = 10000
		 leaf31.y = 1000}
		 
		  if(ball2.collideObject(leaf32)){
		 leaf32.x = 10000
		 leaf32.y = 1000}
		 
		 if(ball2.collideObject(leaf33)){
		 leaf33.x = 10000
		 leaf33.y = 1000}
		 
		 if(ball2.collideObject(leaf34)){
		 leaf34.x = 10000
		 leaf34.y = 1000}
		 
		 if(ball2.collideObject(leaf35)){
		 leaf35.x = 10000
		 leaf35.y = 1000}
		 
		 if(ball2.collideObject(leaf36)){
		 leaf36.x = 10000
		 leaf36.y = 1000}
		 
		 if(ball2.collideObject(leaf37)){
		 leaf37.x = 10000
		 leaf37.y = 1000}
		 
		 if(ball2.collideObject(leaf38)){
		 leaf38.x = 10000
		 leaf38.y = 1000}
		 
		 if(ball2.collideObject(leaf39)){
		 leaf39.x = 10000
		 leaf39.y = 1000}
		 
		 
		 if(ball2.collideObject(leaf40)){
		 leaf40.x = 10000
		 leaf40.y = 1000}
		 
	     if(ball2.collideObject(leaf41)){
		 leaf41.x = 10000
		 leaf41.y = 1000}
		 
		  if(ball2.collideObject(leaf42)){
		 leaf42.x = 10000
		 leaf42.y = 1000}
		 
		 if(ball2.collideObject(leaf43)){
		 leaf43.x = 10000
		 leaf43.y = 1000}
		 
		 if(ball2.collideObject(leaf44)){
		 leaf44.x = 10000
		 leaf44.y = 1000}
		 
		 if(ball2.collideObject(leaf45)){
		 leaf45.x = 10000
		 leaf45.y = 1000}
		 
		 if(ball2.collideObject(leaf46)){
		 leaf46.x = 10000
		 leaf46.y = 1000}
		 
		 if(ball2.collideObject(leaf47)){
		 leaf47.x = 10000
		 leaf47.y = 1000}
		 
		 if(ball2.collideObject(leaf48)){
		 leaf48.x = 10000
		 leaf48.y = 1000}
		 
		 if(ball2.collideObject(leaf49)){
		 leaf49.x = 10000
		 leaf49 .y = 1000}
		 
		 
		 if(ball2.collideObject(leaf50)){
		 leaf50.x = 10000
		 leaf50.y = 1000}   
		
			
			  
		
         if (ball2.y > 425) screen = 16
         if (brick1.y >h && brick2.y> h&&  brick3.y > h&& brick4.y > h&& brick5.y > h&& brick6.y > h&& brick7.y > h&& brick8.y > h&& brick9.y > h&& brick10.y > h&&brick11.y >h && brick12.y> h&&  brick13.y > h&& brick14.y > h&& brick15.y > h&& brick16.y > h&& brick17.y > h&& brick18.y > h&& brick19.y > h&& brick20.y > h&&brick21.y >h && brick22.y> h&&  brick23.y > h&& brick24.y > h&& brick25.y > h&& brick26.y > h&& brick27.y > h&& brick28.y > h&& brick29.y > h&& brick30.y > h&&brick31.y >h && brick32.y> h&&  brick33.y > h&& brick34.y > h&& brick35.y > h&& brick36.y > h&& brick37.y > h&& brick38.y > h&& brick39.y > h&& brick40.y > h&&brick41.y >h && brick42.y> h&&  brick43.y > h&& brick44.y > h&& brick45.y > h&& brick46.y > h&& brick47.y > h&& brick48.y > h&& brick49.y > h&& brick50.y > h )screen = 6
	
	
	
	//screen 12
	    }	else if (screen == 12){
	     ctx.drawImage( mission, 0,0,640,480)
	
	     ctx.fillStyle = 'white'
	     ctx.font = '30pt Ariel'
	     ctx.fillText("WINTER:",190,50);
	     brick51.draw();
	     ctx.drawImage( mission1, 160,145,60,50)
	     playlevel12.draw();
	    
	
	//screen 13
	    }else if (screen == 13){
	     ctx.drawImage( mission2, 0,0,640,480)
	
	     ctx.fillStyle = 'white'
	     ctx.font = '30pt Ariel'
	     ctx.fillText("SPRING:",190,50);
	     brick51.draw();
	     ctx.drawImage( level2, 160,145,60,50)
	     playlevel22.draw();
	
	
	 //screen 14
	    }else if (screen == 14){
	     ctx.drawImage( mission3, 0,0,640,480)
	
	     ctx.fillStyle = 'white'
	     ctx.font = '30pt Ariel'
	     ctx.fillText("SUMMER:",190,50);
	     brick51.draw();
	     ctx.drawImage( level3, 160,145,60,50)
	     playlevel32.draw();
	
	    }else if (screen == 15){
	     ctx.drawImage( mission4, 0,0,640,480)
	     ctx.fillStyle = 'white'
	     ctx.font = '30pt Ariel'
	     ctx.fillText("FALL:",190,50);
	     ctx.drawImage( fall, 160,145,60,50)
	     brick51.draw();
	     playlevel42.draw();
	
	
	    }else if (screen == 16){
	     ctx.drawImage( line2, 0,0,640,480)
	
	     ctx.fillStyle = 'red'
	     ctx.font = '30pt Ariel'
	     ctx.fillText("GAME OVER!!",190,50);
	
	     mainback.draw();
	     playlevel1again.draw();
	     playlevel2again.draw();
	     playlevel3again.draw();
	     playlevel4again.draw();
	
	     dude.x = dude.x + dude.speedx
		 if(dude.x > w - dude.width || dude.x < 0) dude.speedx = dude.speedx * -1
		
		 dude.y = dude.y + dude.speedy
		 if(dude.y > h - dude.height || dude.y < 0) dude.speedy = dude.speedy * -1
		 dude.draw();
	}
	
	
	}////////////////////////////////////////////////////////////////////////////////END PAINT/ GAME ENGINE
	
 
	

	
	
	
	////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////
	/////	MOUSE LISTENER 
	//////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	
	/////////////////
	// Mouse Click
	///////////////
	canvas.addEventListener('click', function (evt){
		
		//Runs this code whenever the mouse is clicked
		//For more screens for your game, just add more else ifs
		if(screen == 0){
		
		
		}else if (screen == 1){ //main menu
		 if (playlevel1.isMouseOver())playlevel1.job()
	     if(playlevel2.isMouseOver())playlevel2.job()
		 if(playlevel3.isMouseOver())playlevel3.job()
		 if(playlevel4.isMouseOver())playlevel4.job()
		 if (Ibutton.isMouseOver())Ibutton.job()	
		
		}else if (screen == 2){//level 1
		 if (playscreenback.isMouseOver()) playscreenback.job()
		
		}else if (screen == 3){//instructions
		 if(Iscreenback.isMouseOver()) Iscreenback.job()
		
	    }else if (screen == 5){//game over level 1
		 if (GO2.isMouseOver())GO2.job()
		 if (playlevel1again.isMouseOver())playlevel1again.job()
		 if(playlevel2.isMouseOver())playlevel2.job()
	     if(playlevel3.isMouseOver())playlevel3.job()
	     if(playlevel4.isMouseOver())playlevel4.job()
		
		}else if (screen == 6){//Winner level 1
		 if (GO2.isMouseOver())GO2.job()
		 if (playlevel1.isMouseOver())playlevel1.job()
	     if(playlevel2.isMouseOver())playlevel2.job()
		 if(playlevel3.isMouseOver())playlevel3.job()
		 if(playlevel4.isMouseOver())playlevel4.job()
		  	
		}else if (screen == 7){//level 2
		 if (playscreenback.isMouseOver()) playscreenback.job()
		
		}else if (screen == 8){//level 2 game over
		 if(playlevel1again.isMouseOver())playlevel1again.job()
		 if(playlevel2again.isMouseOver())playlevel2again.job()
		 if(playlevel3.isMouseOver())playlevel3.job()
		 if(playlevel4.isMouseOver())playlevel4.job()
		 if (GO2.isMouseOver())GO2.job()
		
	    }else if (screen == 11){   //level3
		 if (playscreenback.isMouseOver()) playscreenback.job()
		
		}else if (screen == 10){ //level3 game over
		 if(playlevel1again.isMouseOver())playlevel1again.job()
	 	 if(playlevel2again.isMouseOver())playlevel2again.job()
		 if(playlevel3again.isMouseOver())playlevel3again.job()
		 if(playlevel4.isMouseOver())playlevel4.job()
		 if (mainback.isMouseOver())mainback.job()
		
		}else if(screen ==12){ //mission level 1
		 if(playlevel12.isMouseOver())playlevel12.job()
		
		 }else if(screen ==13){  //mission level 3
		 if(playlevel22.isMouseOver())playlevel22.job()
		
		 }else if(screen ==14){  //mission level 3
		 if(playlevel32.isMouseOver())playlevel32.job()
		 
		 }else if (screen == 15){  //mission level 4
		 if(playlevel42.isMouseOver())playlevel42.job()
		 
		 }else if (screen == 16){  //level 4 game over
		 if(playlevel1again.isMouseOver())playlevel1again.job()
	 	 if(playlevel2again.isMouseOver())playlevel2again.job()
		 if(playlevel3again.isMouseOver())playlevel3again.job()
		 if(playlevel4again.isMouseOver())playlevel4again.job()
		 if (mainback.isMouseOver())mainback.job()
		 }
		
		 }, false);

	
	

	canvas.addEventListener ('mouseout', function(){pause = true;}, false);
	canvas.addEventListener ('mouseover', function(){pause = false;}, false);

      	canvas.addEventListener('mousemove', function(evt) {
        	var mousePos = getMousePos(canvas, evt);

		mx = mousePos.x;
		my = mousePos.y;
		updateMouse(mx,my);

      	}, false);


	function getMousePos(canvas, evt) 
	{
	        var rect = canvas.getBoundingClientRect();
        	return {
          		x: evt.clientX - rect.left,
          		y: evt.clientY - rect.top
        		};
      	}
      

	///////////////////////////////////
	//////////////////////////////////
	////////	KEY BOARD INPUT
	////////////////////////////////


	

	window.addEventListener('keydown', function(evt){
		var key = evt.keyCode;
		
	//p 80
	//r 82
	//1 49
	//2 50
	//3 51
	// up 38
	//down 40
	//right 39
	//left 37
	
	
		if(key==37){//left
		rect.speedx = -15
	     rect2.speedx = -14
		}else if (key == 38){//up
		
	  
		}else if (key == 39){//right
		rect.speedx = 10
		rect2.speedx = 14
	
		}else if (key == 40){//down
	
		
		}
		
	}, false); //End the event listener

	

	

})

