#pragma strict

var character : GameObject;
var cam : Camera;

function Start () {
	cam.transform.position = Vector3(0,0,0);

}

function Update () {
	//cam.transform.position = Vector3.Scale(character.transform.position,Vector3(0,0,1)) + Vector3(0,120,-80);
	cam.transform.LookAt(character.transform.position);
}