#pragma strict

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
	if (movingRoom.alive) {
		cam.transform.position = Vector3(0,0,0);
		var pos : Vector3 = character.transform.position;
		cam.transform.LookAt(pos);
	} else {
		var ratio = SuperLerp(1,0,0,1.3,(Time.unscaledTime - movingRoom.deathtime));
		cam.transform.position = Vector3.Lerp(cam.transform.position,character.transform.position,(ratio*ratio)/15);
	}
}