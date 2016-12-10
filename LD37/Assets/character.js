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
		x -= 1;
	}
	if (Input.GetKey("d")) {
		x += 1;
	}
	if (Input.GetKey("w")) {
		y += 1;
	}
	if (Input.GetKey("s")) {
		y -= 1;
	}
	if (Input.GetKeyDown("space")) {
		rb.AddForce(0,4000,0);
	}
	rb.AddForce(x*100,0,y*100);

	rb.AddForce(rb.velocity*-0.01);
}