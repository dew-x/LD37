#pragma strict

var room : GameObject;

function Start () {
    
}

function Update () {
	room.transform.Rotate(Vector3.right,0.2);
}