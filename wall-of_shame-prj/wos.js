$("#Board").hide()
$("#Stats").hide()
$("#Manage").hide()
$("#First").on("click",function(){ $("#Board").show();
	$("#Stats").hide();
	$("#Manage").hide();
 });
$("#Second").on("click",function(){ $("#Stats").show();
	$("#Board").hide();
	$("#Manage").hide(); });
$("#Third").on("click",function(){ $("#Manage").show();
	$("#Board").hide();
	$("#Stats").hide(); });

var idgive = function () {
  var count = 0;
  return function() {
    var t = count;
    count = count + 1;
    return t;
  };
}
var idgenrator = idgive()
function createNote (name) {
    return {
        name : name ,
        id : idgenrator(),
        NRed : 0 ,
        NYellow : 0,
        NBlue : 0 ,
        addRed : addRed,
        removeRed : removeRed , 
        addYellow : addYellow ,
        removeYellow : removeYellow , 
        addBlue : addBlue,
    }
}

var addRed = function addRed(){
    this.NRed = this.NRed +1
    return this.NRed ;
}
var addYellow = function addYellow(){
    this.NYellow = this.NYellow +1 ;
    return this.NYellow ;
}
var addBlue = function addBlue(){
    this.NBlue = this.NBlue +1 ;
    return this.NBlue;
}

var removeRed = function removeRed(){
    this.NRed = this.NRed -1;
    return this.NRed ;
}
var removeYellow = function removeYellow(){
    this.NYellow = this.NYellow -1;
    return this.NYellow ;
}
var removeBlue = function removeBlue(){
    this.NBlue = this.NBlue -1;
    return this.NBlue ;
}
var notes = [];
var display = function(){
    for(var i = 0 ; i<notes.length ; i++){
        console.log (notes[i].name + ' note have '+notes[i].NRed+' red pins '+ notes[i].NBlue +' blue pins '+notes[i].NYellow+' yellow pins' )
    }
}

$("#Noteadd").on("click",function(){ 
	var NoteName= $("#inputName").val()
	if (NoteName === ''){
        alert(" Enter a name please");
	}
    else var a =createNote(NoteName)
        notes.push(a)

	}
);

$("#board").append(('<div id='stats'></div>'));
$("#stats").html('display()')


