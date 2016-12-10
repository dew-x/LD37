#pragma strict

var character : GameObject;
var cam : Camera;

function Start () {
	cam.transform.position = Vector3(0,0,0);
}

function Update () {
	var pos : Vector3 = character.transform.position;
	cam.transform.LookAt(pos);
}