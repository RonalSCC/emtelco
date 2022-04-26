
var JSONTest ={"NombreEquipo":"Escuadrón superior","CiudadNatal":"Emtropolis","Fundado":2016,"BaseSecreta":"Torre E","Activo":true,"Miembros":[{"nombre":"Hombre Molécula","edad":29,"IdentidadSecreta":"Pedro Coral","Poderes":["Resistencia a la radiación","Encogerse","Rayo sónico"]},{"nombre":"Madame golpe de acero","edad":45,"IdentidadSecreta":"Jane Wilson","Poderes":["Puño Estelar","Resistencia al fuego","Fuerza superhumana"]},{"nombre":"Flama eterna","edad":1000000,"IdentidadSecreta":"Desconocida","Poderes":["Inmortalidad","Inmunidad al calor","Teletransportación"]}]};
var IPTest = "186.155.98.1";
var EmailValid = "ronalch1999@gmail.com";

function getNameTeamsBefore2020(){
	if (JSONTest.Fundado < 2020 && JSONTest.Activo == true) {
		$('#TeamName').text(JSONTest.NombreEquipo);
	}else{
		$('#TeamName').text('Sin equipo');
	}
}

function getMembersMore30(){
	var MembersOver30 = JSONTest.Miembros.filter(member => member.edad > 30);
	for (var i = 0; i < MembersOver30.length; i++) {
		if (MembersOver30.length == (i+1)) {
			$('#MembersOver30').append(MembersOver30[i].nombre);
		}else{
			$('#MembersOver30').append(MembersOver30[i].nombre + ', ');
		}
	}
}

function getIdentities(){
	for (var i = 0; i <  JSONTest.Miembros.length; i++) {
		var filter =  _.filter(JSONTest.Miembros[i].Poderes, function(Pod){ return Pod.toLowerCase().includes("resistencia") && Pod.includes("fuego"); });
		if (filter != null && filter.length > 0) {
			$('#Identities').append("<b>"+JSONTest.Miembros[i].nombre + "</b>: "+ filter[0]);
		}
	}
}

function ValidateIP(input){
	$('#IPValid').append("IPCheck: "+ input + " - ");
	var responseExpression = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/.test(input);
	$('#IPValid').append("Result: "+ responseExpression);
}

function ValidateEmail(input){
	$('#EmailValid').append("IPCheck: "+ input + " - ");
	var responseExpression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input);
	$('#EmailValid').append("Result: "+ responseExpression);
}

getNameTeamsBefore2020();
getMembersMore30();
getIdentities();
ValidateIP(IPTest);
ValidateEmail(EmailValid);
