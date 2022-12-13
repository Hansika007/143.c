noseX=0;
noseY=0;
img="";
marioX=325;
marioY=200;

function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	mario_gameover = loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
}

function setup() 
{
	canvas = createCanvas(1250,400);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(600,370);
	video.parent("game_console");
	poseNet=ml5.poseNet(video , modelLoaded);
	poseNet.on('pose' , gotPoses);
}

function modelLoaded()
{
	console.log("ModelLoaded!!");
}

function gotPoses(results)
{
	if(results.length>0)
	{
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}

function draw() 
{
	game();
	
}