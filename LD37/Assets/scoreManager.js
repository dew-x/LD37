#pragma strict

var myStyle : GUIStyle;
var wasdImage : Texture2D;

static var time : float;
private var timer2 : float;
private var tutorial : boolean;

function Start () {
	tutorial = true;	
	time = 0;
}

function OnGUI()
{
 	GUI.Label (Rect (10, 10, 100, 20), time.ToString(), myStyle);

 	if(tutorial == true)
 	{
 		GUI.Label (Rect (Screen.width/2-100, Screen.height/2-50, 500, 100), wasdImage);
 	}
}

function Update () {

	if(Input.anyKey && tutorial == true)
	{
		tutorial = false;
		timer2 = Time.timeSinceLevelLoad;
	}

	if(tutorial == false)
	{
		TimerStart();
	}
}

function TimerStart(){
	 
	 time = Time.timeSinceLevelLoad - timer2;  //Set time
 
 }

 function GetTime()
 {
 	return time;
 }