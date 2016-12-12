#pragma strict

var timeText : GameObject;

var tutorialImage : Texture2D;
var splashImage : Texture2D;

function Start () 
{
}

function OnGUI()
{
 	var textMesh = timeText.GetComponent.<TextMesh>();
 	textMesh.text = String.Format("{0:00}:{1:00}", main.scoreTime / 60, main.scoreTime % 60);

 	if(main.mode=="TUTORIAL")
 	{
 		var w = ((Screen.height*0.7)/tutorialImage.height) * tutorialImage.width;
 		var x = (Screen.width-w)/2;
 		GUI.Label (Rect (x, Screen.height*0.15, w, Screen.height*0.7), tutorialImage);
 		//GUI.Label (Rect (Screen.width/2-100, Screen.height/2+50, 400, 80), spacebarImage);
 	}
 	if (main.mode=="SPLASH") { 
 		var rw : float = 1.0*Screen.width/splashImage.width;
 		var rh : float = 1.0*Screen.height/splashImage.height;
 		if (rw>rh) {
 			var nh : int = splashImage.height * rw;
 			GUI.Label (Rect (0, Mathf.Floor((Screen.height-nh)/2), Screen.width, nh), splashImage);
 		} else {
 			var nw : int = splashImage.width * rh;
 			GUI.Label (Rect (Mathf.Floor((Screen.width-nw)/2), 0, nw, Screen.height), splashImage);
 		}
 	}
 	if (main.mode=="HIGHSCORES") {
 	}
}