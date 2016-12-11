#pragma strict

var myStyle: GUIStyle;

private var timer1:int;

function Start () {

	timer1 = 0;

}

function OnGUI()
{
 	GUI.Label (Rect (10, 10, 100, 20), timer1.ToString(), myStyle);
}

function Update () {

	TimerStart();

}

function TimerStart(){
	 
	 timer1 = Time.timeSinceLevelLoad;  //Set time

	 Debug.Log(timer1);
 
 }