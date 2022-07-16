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
var notes = [];
var display = function(){
    var disp = '';
    for(var i = 0 ; i<notes.length ; i++){
    disp = notes[i].name + ' note have '+notes[i].NRed+' red pins '+ notes[i].NBlue +' blue pins '+notes[i].NYellow+" yellow pins<br>" + disp
    }
    $("#Stats").html("<div>"+disp+"</div>")
}


var addRed = function addRed(){
    this.NRed = this.NRed +1
    return this.NRed ;
    display();
}
var addYellow = function addYellow(){
    this.NYellow = this.NYellow +1 ;
    return this.NYellow ;
    display();
}
var addBlue = function addBlue(){
    this.NBlue = this.NBlue +1 ;
    return this.NBlue;
    display();
}

var removeRed = function removeRed(){
    this.NRed = this.NRed -1;
    return this.NRed ;
    display();
}
var removeYellow = function removeYellow(){
    this.NYellow = this.NYellow -1;
    return this.NYellow ;
    display();
}
var removeBlue = function removeBlue(){
    this.NBlue = this.NBlue -1;
    return this.NBlue ;
    display();
}


$("#Noteadd").on("click",function(){ 
	var NoteName= $("#inputName").val()
	if (NoteName === ''){
        alert(" Enter a name please");
	}
    else {var a =createNote(NoteName)
        notes.push(a)};
        display();
        displayONBoard2();
         $("#Manage").append("<p>"+NoteName+"</p>").append("<p>:  is added </p><br>")
	});

var notes = [];

var displayONBoard2 = function(){
    var disp = '';
    for(var i = 0 ; i<notes.length ; i++){
    disp ="<div><h1>" +notes[i].name +'<h1>'+notes[i].NRed+'<br>'+ notes[i].NBlue +'<br>'+notes[i].NYellow+"<br></div><br><br>" + disp
    }
    $("#Board").html("<div>"+disp+"</div>")
}


$("#addRedpin").on("click",function(){
    if (notes[0]=== undefined){
        alert(" Put someone on shame ");
    }
    var NameInred = $("#NameOnNote1").val()
    if (NameInred === ''){
        alert(" Add someone please ")
    }
    for (var i = 0; i < notes.length; i++) {
        if (NameInred === notes[i].name) {
            notes[i].addRed();
            display();
            displayONBoard2()
        } 
    }
})

$("#removeRedpin").on("click",function(){
    if (notes[0]=== undefined){
        alert(" Put someone on shame ");
    }
    var NameInred = $("#NameOnNote1").val()
    if (NameInred === ''){
        alert(" Add someone please ")
    }
    for (var i = 0; i < notes.length; i++) {
        if (NameInred === notes[i].name) {
            notes[i].removeRed();
            display();
            displayONBoard2()
        } 
    }
})