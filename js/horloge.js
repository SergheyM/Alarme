class Alarme{

	constructor(objJson){	
		
		this.alarmSon = objJson.soundTrack;	
	}
}

function afficheTime(){
	var d = new Date();
	var horloge = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
	document.getElementById("span_horloge").innerHTML = horloge;
}

function timeAlarm(){	
	return h[0].selectedIndex*60*60 + h[1].selectedIndex*60 + h[2].selectedIndex;
}

function execute(){	
	if(document.getElementsByTagName("AUDIO").length === 0){
		nb = 1;
		setTimeout(music, timeAlarm()*1000);		
	}
	else
		setTimeout(music, 1);		
}

function music(){
	if(document.getElementsByTagName("AUDIO").length === 0){
		var song = document.createElement("AUDIO");
		var attrAudio = document.createAttribute("autoplay");
		var loop =  document.createAttribute("loop");
		song.setAttributeNode(attrAudio);
		song.setAttributeNode(loop);	

		var place = document.createElement("SOURCE");
		var attrSource = document.createAttribute("src");
		attrSource.value = alarmSon[h[3].selectedIndex];
		place.setAttributeNode(attrSource);

		song.appendChild(place);
		document.body.appendChild(song);
		if(nb === 1)
			buttonAlarm.innerHTML = "arreter alarme";
		else
			buttonChoixSon.innerHTML = "arreter alarme";
	}
	else{
		var zoom = document.getElementsByTagName("AUDIO");
		zoom[0].parentNode.removeChild(zoom[0]);
		if(nb === 1)
			buttonAlarm.innerHTML = "ajouter une alarme";
		else
			buttonChoixSon.innerHTML = "choix son alarme";
	}
}

function choixBouton(){
	nb = 0;
	music();
}

var jsonAlarm = {"soundTrack" : ["mp3/Sound1.mp3", "mp3/Sound2.mp3", "mp3/Sound3.mp3", "mp3/Sound4.mp3"]};

var setAlarm = new Alarme(jsonAlarm);
var alarmSon = setAlarm.alarmSon;

var nb;
var container = document.getElementsByClassName("container");

var button = document.createElement("BUTTON");
button.setAttribute("id", "son");
button.innerHTML = "choix son alarme";
var selecteur = document.createElement("SELECT");
selecteur.setAttribute("id", "choix_son");

for(var i = 0; i < alarmSon.length; i++){
	var option = document.createElement("OPTION");
	option.setAttribute("value", i);
	option.innerHTML = i+1;		
	selecteur.appendChild(option);
}
var h = document.getElementsByTagName("select");

container[0].appendChild(button);
container[0].appendChild(selecteur);

document.body.appendChild(container[0]);

var objInterval = setInterval(afficheTime, 1000);

var buttonAlarm = document.getElementById("btn_ajouterAlarme");
buttonAlarm.addEventListener("click", execute);

var buttonChoixSon = document.getElementById("son");
buttonChoixSon.addEventListener("click", choixBouton);


