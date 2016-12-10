#pragma strict

var character : GameObject;
var rb : Rigidbody;
var canJump : int;

function Start () {
	Physics.gravity = Vector3(0,-100,0);
	rb = character.GetComponent.<Rigidbody>();
	canJump = 0;
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
	if (Input.GetKeyDown("space") && canJump>0) {
		rb.AddForce(0,2000,0);
		canJump = -100;
	}
	rb.AddForce(x*50,0,y*50);

	rb.AddForce(rb.velocity*-0.05);
	++canJump;
}

function OnCollisionStay(){
   if (canJump>-80) canJump=0;
}