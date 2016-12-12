#pragma strict

import SimpleJSON;

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
var miniStyle : GUIStyle;
var maxiStyle : GUIStyle;
var snickStyle : GUIStyle;
var sscoreStyle : GUIStyle;
var nick : String;
var www: WWW;
var todo: boolean;
var data:String="";

function Start () 
{
	todo = true;
	www = new WWW("http://fmv.oqstats.net/g.php");
}

function Update() {
	if (todo && www.isDone) {
		todo = false;
		data = www.text;
	}
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
 		nick = GUI.TextField(Rect(xs+ws*0.085,Screen.height*0.61,ws*0.3,Screen.height*0.04),nick,12,nickStyle);
 		if (main.canUpload==true) { 
	 		if (nick!="") {
	 			if (GUI.Button(Rect (xs+ws*0.725, Screen.height*0.61, ws*0.22, Screen.height*0.12), submitButton1,submitStyle)) {
		 			todo = true;
					www = new WWW("http://fmv.oqstats.net/g.php?nick="+nick+"&score="+main.scoreTime);
					main.canUpload = false;
		 		}
	 		} else {
	 			GUI.Label (Rect (xs+ws*0.725, Screen.height*0.61, ws*0.22, Screen.height*0.12), submitButton, submitStyle);
	 		}
	 	}
 		GUI.Label(Rect(xs+ws*0.72, Screen.height*0.19, ws*0.40, Screen.height*0.1), main.scoreTime.ToString("F3"),maxiStyle);
 		GUI.Label(Rect(xs+ws*0.575, Screen.height*0.615, ws*0.20, Screen.height*0.05),main.scoreTime.ToString("F3"),miniStyle);
 		if (data!="") {
 			var lines:String[] = data.Split("\n"[0]);
 			for (var i:int=0; i<lines.Length; ++i) {
 				var fields:String[] = lines[i].Split(","[0]);
 				var nicks = fields[0];
 				var scores = fields[1];
 				var r = i%5;
 				if (i<5) {
 					GUI.Label (Rect (xs+ws*0.1, Screen.height*(0.3+r*0.05), ws*0.15, Screen.height*0.05), nicks, snickStyle);
 					GUI.Label (Rect (xs+ws*0.3, Screen.height*(0.3+r*0.05), ws*0.15, Screen.height*0.05), scores, sscoreStyle);
 				} else {
 					GUI.Label (Rect (xs+ws*0.55, Screen.height*(0.3+r*0.05), ws*0.15, Screen.height*0.05), nicks, snickStyle);
 					GUI.Label (Rect (xs+ws*0.75, Screen.height*(0.3+r*0.05), ws*0.15, Screen.height*0.05), scores, sscoreStyle);
 				}
 			}
 		}
 	}
}