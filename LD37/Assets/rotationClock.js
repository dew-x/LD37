﻿#pragma strict

var timeGameObject : GameObject;
var clockMesh : Mesh;

private var clockBoundBox : Vector3;
private var timeBoundBox : Vector3;
private var diferenceClockTime : Vector3;

function Start () {

}

function Update () {

	transform.Rotate(Vector3.forward,scoreManager.time/20);

	/*clockMesh = GetComponent.<MeshFilter>().mesh;
	var clockBounds : Bounds = clockMesh.bounds;

	var timeMesh : TextMesh = timeGameObject.GetComponent.<TextMesh>();
	var timeBounds : Bounds = timeMesh.GetComponent.<Renderer>().bounds;

	clockBoundBox = (clockBounds.max + clockBounds.min) /2;
	timeBoundBox = (timeBounds.max + timeBounds.min) /2;

	diferenceClockTime.x = clockBoundBox.x - timeBoundBox.x;
	diferenceClockTime.y = clockBoundBox.y - timeBoundBox.y;
	diferenceClockTime.z = 0.0;

	timeGameObject.transform.position += diferenceClockTime;

	Debug.Log("Clock" + clockBoundBox);
	Debug.Log("Time" + timeBoundBox);*/

}