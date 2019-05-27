var myX = '';
var myY = '';
var whichArt = '';
var letter = '';
var test = 0;
var count = 0;

var dragndrop = (function(){

	document.getElementById('playPicture').addEventListener('click', function(){
		document.getElementById('playPicture').style.display = 'none';
		document.getElementById('overlay').style.display = 'none';
	})

	function resetZ(){
		var elements = document.querySelectorAll('img');
		for (var i = elements.length - 1; i >= 0; i--){
			elements[i].style.zIndex = 5;
		};
	}

	function moveStart(e){
		whichArt = e.target;
		letter = e.target;
		myX = e.offsetX === undefined ? e.layerX : e.offsetX;
		myY = e.offsetY === undefined ? e.layerY : e.offsetY;
		resetZ();
		whichArt.style.zIndex = 10;
		e.dataTransfer.effectAllowed = 'copy';
	}

	function moveDragOver(e){
		if(e.preventDefault) e.preventDefault();
		return false;
	}


		var leSelect = rndNum (0,25);
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var colors = ['red', 'yel', 'gre', 'pur', 'blu', 'yel', 'pur', 'gre', 'red', 'blu','red', 'yel', 'gre', 'pur', 'blu', 'yel', 'pur', 'gre', 'red', 'blu','yel', 'pur', 'gre', 'red', 'blu','red',];

	function createDragImg(){
		var draggableImage = document.createElement('img');
		draggableImage.src = "images/"+ colors[count] +"/"+letters[count].toUpperCase()+".png";
		draggableImage.setAttribute('id', 'letter' + count);
		draggableImage.setAttribute('class', 'letters');
		draggableImage.setAttribute('draggable', 'true');
		document.getElementById('alphaWrapperColor').appendChild(draggableImage);
		document.getElementById('letter' + count).addEventListener('touchstart', setLetterValue);
		
		count++;
	}

	function playSound(letterSound){
		// var obj = document.createElement("audio");
		var obj = new Audio("audio/"+letterSound+".wav");
		obj.setAttribute('id', 'sound' + count);
		// obj.src="audio/"+letterSound+".mp3";
		obj.autoPlay=false;
		obj.volume=0.50;
		obj.preLoad=true;
		document.getElementById('alphaWrapperColor').appendChild(obj);
		document.getElementById('sound'+count).play();
	}

	function playTada(){
		var obj = document.createElement("audio");
		obj.src="audio/tada.mp3";
		obj.autoPlay=false;
		obj.volume=0.40;
		obj.preLoad=true;
		obj.play();
	}

	
	for (i = 0; i < letters.length; i++){
		var dzImage = document.createElement('img');
		dzImage.src = "images/gray/"+letters[i].toUpperCase()+".png";
		dzImage.setAttribute('id', 'dz' + i);
		document.getElementById('alphaWrapper').appendChild(dzImage);
		document.querySelector('#dz' + i).addEventListener('drop', moveDrop, false);
		document.querySelector('#dz' + i).addEventListener('dragover', moveDragOver, false);
	}

	

	createDragImg();


	function setLetterValue(){
		window.character = this;
		window.letter = this.src;
		console.log('down'+window.letter)
	}


	function moveDrop(e){
		e.preventDefault();
    let dz = e.target;
		console.log(window.letter);
    let dzSrc = dz.src.slice(48, -4);
		var letterSrc = window.letter.slice(47, -4);

		if( letterSrc === dzSrc ){
			dz.src = window.letter;
			character.parentNode.removeChild(window.character);
			playSound(dzSrc);
			test++;
			letterTest();
			createDragImg();
		}

	}

function touchStart(e) {
  e.preventDefault();
  var whichArt = e.target;
  var touch = e.touches[0];
  var moveOffsetX = whichArt.offsetLeft - touch.pageX;
  var moveOffsetY = whichArt.offsetTop - touch.pageY;
  resetZ();
  whichArt.style.zIndex = 10;

  whichArt.addEventListener('touchmove', function() {
    var positionX = touch.pageX + moveOffsetX;
    var positionY = touch.pageY + moveOffsetY;
    whichArt.style.left = positionX + 'px';
    whichArt.style.top = positionY + 'px';
  }, false);
} //end dragndrop

function rndNum(from, to){
			return Math.floor((Math.random()*(to - from + 1)) + from);
		}

function letterTest(){
		if(count == 26){
					setTimeout(playTada, 1000)
					setTimeout(window.location.reload.bind(window.location), 2750);
					// setTimeout(location.reload(), 5000);
			}
		}










})();
