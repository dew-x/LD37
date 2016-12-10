#pragma strict

var room : GameObject;

function Start () {
    
}

function Update () {
	room.transform.Rotate(Vector3.up,0.2);
}