#pragma strict

var character : GameObject;

function Start () {

}

function Update () {
	var x = 0;
	var y = 0;
	if (Input.GetKey("a")) {
		x -= 1;
	}
	if (Input.GetKey("d")) {
		x += 1;
	}
	if (Input.GetKey("w")) {
		y += 1;
	}
	if (Input.GetKey("d")) {
		y -= 1;
	}
	if (Input.GetKeyDown("space")) {
		character.GetComponent.<Rigidbody>().AddForce(0,2000,0);
	}
	character.GetComponent.<Rigidbody>().AddForce(x*100,0,y*100);
}