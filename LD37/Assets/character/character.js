#pragma strict

var character : GameObject;
var shadow : GameObject;
private var rb : Rigidbody;
var canJump : int;

function Start () {
	Physics.gravity = Vector3(0,-100,0);
	rb = GetComponent.<Rigidbody>();
	canJump = 0;
}

function Update () {
	var x = 0;
	var y = 0;
	if (Input.GetKey("a") || Input.GetKey("left")) {
		x -= 1;
	}
	if (Input.GetKey("d") || Input.GetKey("right")) {
		x += 1;
	}
	if (Input.GetKey("w") || Input.GetKey("up")) {
		y += 1;
	}
	if (Input.GetKey("s") || Input.GetKey("down")) {
		y -= 1;
	}
	if (Input.GetKeyDown("space") && canJump>0) {
		rb.AddForce(0,3000,0);
		canJump = -100;
	}
	var vx = rb.velocity.x;
	var vy = rb.velocity.z;
	var fx = (x*500);
	var fy = (y*500);
	if (Mathf.Sign(fx)==Mathf.Sign(vx)) fx = fx/Mathf.Max(1.0,vx*vx);
	if (Mathf.Sign(fy)==Mathf.Sign(vy)) fy = fy/Mathf.Max(1.0,vy*vy);
	rb.AddForce(fx,0,fy);

	rb.AddForce(rb.velocity*-0.05);
	++canJump;
	shadow.transform.position = character.transform.position + Vector3(0,-1,0);
}

function OnCollisionStay(){
   if (canJump<-90) canJump=0;
}