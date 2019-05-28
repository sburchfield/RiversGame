var myX = '';
var myY = '';
var whichArt = '';
var letter = '';
var test = 0;

var dragndrop = (function(){
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

	var nameSelect = rndNum (0,8);
	var picSelect = rndNum(1,3);
	var names = ['mom', 'dad', 'dog', 'grandma', 'grandpa', 'mabel', 'nana', 'river', 'sam'];
	var colors = ['red', 'yel', 'gre', 'pur', 'blu','red', 'yel', 'gre'];
	var name = names[nameSelect].split('');

	for (i = 0; i < name.length; i++){
		var dzImage = document.createElement('img');
		dzImage.src = "images/gray/"+name[i].toUpperCase()+".png";
		dzImage.setAttribute('id', 'dz' + i);
		dzImage.setAttribute('class', name[i]);
		document.getElementById('nameWrapper').appendChild(dzImage);
		document.querySelector('#dz' + i).addEventListener('drop', moveDrop, false);
		document.querySelector('#dz' + i).addEventListener('dragover', moveDragOver, false);

		var draggableImage = document.createElement('img');
		draggableImage.src = "images/"+ colors[i] +"/"+name[i].toUpperCase()+".png";
		draggableImage.setAttribute('id', 'letter' + i);
		draggableImage.setAttribute('class', 'letters ' + name[i]  + " " + colors[i]);
		draggableImage.setAttribute('draggable', 'true');
		document.getElementById('wrapper').appendChild(draggableImage);

		var picName = document.getElementById("picture");
		picName.innerHTML ='<img src="images/' + names[nameSelect] + picSelect +'.jpg" alt="picture" height="375" width="400">';
	}

	var classname = document.querySelectorAll('img.letters');

	function setLetterValue(){
		window.character = this;
		window.letter = this.className[8];
		window.color = this.className[10] + this.className[11] + this.className[12];
	}

	for (var i = 0; i < classname.length; i++) {
		classname[i].addEventListener('mousedown', setLetterValue);
	}

	function moveDrop(e){
		e.preventDefault();
    let dz = e.target;
    let dzSrc = dz.className;

		if( window.letter === dzSrc ){
			dz.src = 'images/' + window.color + '/' + window.letter.toUpperCase() + '.png';
			character.parentNode.removeChild(window.character);
			// playM();
			test++;
			letterTest();
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

var dieRoll = rndNum (10,18);// get a random number between 10 and 20
var nameNumber = rndNum (1,3);// get a random number between 1 and 3
// var Xcord0 = rndNum (25,700);
// var Ycord0 = rndNum (175,450);
// var Xcord1 = rndNum (25,700);
// var Ycord1 = rndNum (175,450);
// var Xcord2 = rndNum (25,700);
// var Ycord2 = rndNum (175,450);
// var Xcord3 = rndNum (25,700);
// var Ycord3 = rndNum (175,450);
// var Xcord4 = rndNum (25,700);
// var Ycord4 = rndNum (175,450);
// var Xcord5 = rndNum (25,700);
// var Ycord5 = rndNum (175,450);
// var Xcord6 = rndNum (25,700);
// var Ycord6 = rndNum (175,450);
// var Xcord7 = rndNum (25,700);
// var Ycord7 = rndNum (175,450);

var Xcord0 = rndNum (25, 550);
var Ycord0 = rndNum (75,270);
var Xcord1 = rndNum (25, 550);
var Ycord1 = rndNum (75,270);
var Xcord2 = rndNum (25, 550);
var Ycord2 = rndNum (75,270);
var Xcord3 = rndNum (25, 550);
var Ycord3 = rndNum (75,270);
var Xcord4 = rndNum (25, 550);
var Ycord4 = rndNum (75,270);
var Xcord5 = rndNum (25, 550);
var Ycord5 = rndNum (75,270);
var Xcord6 = rndNum (25, 550);
var Ycord6 = rndNum (75,270);
var Xcord7 = rndNum (25, 550);
var Ycord7 = rndNum (75,270);

function rndNum(from, to){
			return Math.floor((Math.random()*(to - from + 1)) + from);
		}

function letterTest(){
		if(test == name.length){
					location.reload();
			}
		}

document.getElementById("letter0").style ='position: absolute; left: '+Xcord0+'px; top:'+Ycord0+'px; z-index: 5;';
document.getElementById("letter1").style ='position: absolute; left: '+Xcord1+'px; top:'+Ycord1+'px; z-index: 5;';
document.getElementById("letter2").style ='position: absolute; left: '+Xcord2+'px; top:'+Ycord2+'px; z-index: 5;';

if(document.getElementById("letter3")){
	document.getElementById("letter3").style ='position: absolute; left: '+Xcord3+'px; top:'+Ycord3+'px; z-index: 5;';
}

if(document.getElementById("letter4")){
	document.getElementById("letter4").style ='position: absolute; left: '+Xcord4+'px; top:'+Ycord4+'px; z-index: 5;';
}

if(document.getElementById("letter5")){
	document.getElementById("letter5").style ='position: absolute; left: '+Xcord5+'px; top:'+Ycord5+'px; z-index: 5;';
}

if(document.getElementById("letter6")){
	document.getElementById("letter6").style ='position: absolute; left: '+Xcord6+'px; top:'+Ycord6+'px; z-index: 5;';
}

if(document.getElementById("letter7")){
	document.getElementById("letter7").style ='position: absolute; left: '+Xcord7+'px; top:'+Ycord7+'px; z-index: 5;';
}

})();
