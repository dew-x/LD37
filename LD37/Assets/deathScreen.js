﻿#pragma strict

var myScoreStyle : GUIStyle;

static var dead : boolean;
private var lastScore : boolean;

private var score : int;

function Start () {
	lastScore = true;
}

function OnGUI()
{
	if(dead == true)
	{
		if (lastScore == true)
		{
			score = main.scoreTime;
			lastScore = false;
		}
		GUI.Label (Rect (Screen.width/8, Screen.height/6, 500, 100),"Your score is: " + score.ToString(), myScoreStyle);
	}
}

function Update () {
	
}