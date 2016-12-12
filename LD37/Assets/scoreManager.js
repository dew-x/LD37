#pragma strict

var timeText : GameObject;

var tutorialImage : Texture2D;
var splashImage : Texture2D;
var scoreImage : Texture2D;
var playImage : Texture2D;
var submitButton : Texture2D;
var submitButton1 : Texture2D;
var playStyle : GUIStyle;
var submitStyle : GUIStyle;
var nickStyle : GUIStyle;
var nick : String;


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
 		var ws = ((Screen.height*0.7)/scoreImage.height) * scoreImage.width;
 		var xs = (Screen.width-ws)/2;
 		var ws1 = ((Screen.height*0.15)/scoreImage.height) * playImage.width;
 		var xs1 = (Screen.width-ws1)/2;
 		GUI.Label (Rect (xs, Screen.height*0.15, ws, Screen.height*0.7), scoreImage);
 		if (GUI.Button(Rect (xs1, Screen.height*0.7, ws1, Screen.height*0.15), playImage,playStyle)) {
 			main.mode="TUTORIAL";
			UnityEngine.SceneManagement.SceneManager.LoadScene("main", UnityEngine.SceneManagement.LoadSceneMode.Single);
 		}
 		//GUI.Label (Rect (Screen.width/2-100, Screen.height/2+50, 400, 80), spacebarImag
 		nick = GUI.TextField(Rect(0,0,100,100),nick,12,nickStyle);
 	}
}