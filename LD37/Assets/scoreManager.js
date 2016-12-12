#pragma strict

var timeText : GameObject;

var wasdImage : Texture2D;
var splashImage : Texture2D;
var spacebarImage : Texture2D;

function Start () 
{
}

function OnGUI()
{
 	var textMesh = timeText.GetComponent.<TextMesh>();
 	textMesh.text = String.Format("{0:00}:{1:00}", main.scoreTime / 60, main.scoreTime % 60);

 	if(main.mode=="TUTORIAL")
 	{
 		GUI.Label (Rect (Screen.width/2-100, Screen.height/2-50, 500, 100), wasdImage);
 		GUI.Label (Rect (Screen.width/2-100, Screen.height/2+50, 400, 80), spacebarImage);
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