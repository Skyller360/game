var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
canvas.style.background = 'rgba(52,152,219,.6)';



var Scenes = {};
var gravity = new Vector();
gravity.y = -9.81;

var Application = {
	LoadedScene: null,
	GamePaused: false,
	debugMode: true
};

var ImagesLoaded = 0;
var WalkableTiles = [];

var ImagesPath = [
	{ name:"Boy",path: "PlanetCute/Character Boy.png"},
	{ name:"herve",path: "PlanetCute/photo.jpg"},
	{ name:"vincianne",path: "PlanetCute/vincianne.jpg"},
];
var Images = {};
