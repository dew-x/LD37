﻿#pragma strict

var myStyle: GUIStyle;

var timer1:int;

function Start () {
	
}

function OnGUI()
{
 	GUI.Label (Rect (10, 10, 100, 20), timer1.ToString(), myStyle);
}

function Update () {

	TimerStart();

}

function TimerStart(){
	 
	 timer1 = Time.time;  //Set time

	 Debug.Log(timer1);
 
 }