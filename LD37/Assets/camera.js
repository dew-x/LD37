﻿#pragma strict

var character : GameObject;
var cam : Camera;

function Start () {
	cam.transform.position = Vector3(0,0,0);
}

function SuperLerp (from : float, to : float, from2 : float, to2 : float, value : float) {
    if (value <= from2)
        return from;
    else if (value >= to2)
        return to;
    return (to - from) * ((value - from2) / (to2 - from2)) + from;
}

function Update () {
	if (main.mode=="DEATH") {
		var delta = Time.unscaledTime - main.deathTime;
		if (delta < 1.3) {
			var ratio = SuperLerp(0,0.9,0,1.3,delta);
			cam.transform.position = Vector3.Lerp(Vector3(0,0,0),character.transform.position,ratio);
		} else {
			if (delta > 1.8) {
				var ratio2 = SuperLerp(0.1,1,1.8,3,delta);
				cam.transform.position = Vector3.Lerp(character.transform.position, Vector3(0,0,0),ratio2);
			}
		}
	} else if (main.mode=="HIGHSCORES") {
		cam.transform.position = Vector3(0,0,0);
		cam.transform.LookAt(Vector3(0,0,50));
	} else {
		cam.transform.position = Vector3(0,0,0);
		var pos : Vector3 = character.transform.position;
		cam.transform.LookAt(pos);
	}
}