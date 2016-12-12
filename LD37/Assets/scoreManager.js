﻿#pragma strict

var myStyle : GUIStyle;
var timeText : GameObject;

var wasdImage : Texture2D;
var spacebarImage : Texture2D;

static var time : float;
private var timer2 : float;
private var tutorial : boolean;

function Start () 
{
	tutorial = true;	
	time = 0;
}

function OnGUI()
{
 	GUI.Label (Rect (10, 10, 100, 20), time.ToString(), myStyle);

 	var textMesh = timeText.GetComponent.<TextMesh>();
    //var meshRenderer = timeText.AddComponent.<MeshRenderer>();
 	textMesh.text = String.Format("{0:00}:{1:00}", time / 60, time % 60);

 	if(tutorial == true)
 	{
 		GUI.Label (Rect (Screen.width/2-100, Screen.height/2-50, 500, 100), wasdImage);
 		GUI.Label (Rect (Screen.width/2-100, Screen.height/2+50, 400, 80), spacebarImage);
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

	if(movingRoom.alive == true){
		time = Time.timeSinceLevelLoad - timer2;  //Set time
	}
	else
	{
		
	}
 
 }

 function GetTime()
 {
 	return time;
 }