#pragma strict

var character : GameObject;
var rb : Rigidbody;

function Start () {
	Physics.gravity = Vector3(0,-100,0);
	rb = character.GetComponent.<Rigidbody>();
}

function Update () {
	var x = 0;
	var y = 0;
	if (Input.GetKey("a")) {
		y += 1;
	}
	if (Input.GetKey("d")) {
		y -= 1;
	}
	if (Input.GetKey("w")) {
		x += 1;
	}
	if (Input.GetKey("s")) {
		x -= 1;
	}
	if (Input.GetKeyDown("space")) {
		rb.AddForce(0,4000,0);
	}
	rb.AddForce(x*100,0,y*100);

	rb.AddForce(rb.velocity*-0.01);
}