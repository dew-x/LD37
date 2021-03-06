﻿#pragma strict

var character : GameObject;
var shadow : GameObject;
static var rb : Rigidbody;
var blockJump : float;
var faseJump : int;
var fix : float;
var anim : Animator;

function Start () {
	Physics.gravity = Vector3(0,-100,0);
	rb = GetComponent.<Rigidbody>();
	blockJump = 0;
	faseJump = 0;
	fix = 1.0f;
	anim = GetComponent("Animator");
}

function Update () {
	if (main.mode=="GAME") {
		if (Time.timeScale>0.1) {
			if (rb.velocity.y<-1) {
				Time.timeScale = main.ts*0.7;
			} else {
				Time.timeScale = main.ts;
			}
		}
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
		if (Input.GetKeyDown("space") && blockJump<=0 && faseJump>=0) {
			rb.AddForce(0,1000+2000*fix,0);
			blockJump = 60;
			++faseJump;
			anim.Play("JUMP",Animator.StringToHash("layer"));
		}
		var vx = rb.velocity.x;
		var vy = rb.velocity.z;
		var fx = (x*800);
		var fy = (y*800);
		if (Mathf.Sign(fx)==Mathf.Sign(vx)) fx = fx/Mathf.Max(1.0,vx*vx);
		if (Mathf.Sign(fy)==Mathf.Sign(vy)) fy = fy/Mathf.Max(1.0,vy*vy);
		rb.AddForce(fx*fix*Time.deltaTime*60,0,fy*fix*Time.deltaTime*60);

		rb.AddForce(rb.velocity*-0.05*Time.deltaTime*60);
		blockJump-=Time.deltaTime*60;
	}
	shadow.transform.position = character.transform.position + Vector3(0,-1,0);
}

function OnCollisionStay(collision: Collision){
   if (faseJump>0) {
   		--faseJump;
   }
   for (var contact : ContactPoint in collision.contacts) {
   		if (Mathf.Abs(contact.normal.z)>0.01) {
			fix*=0.95f;
		} else {
			fix=1.0f;
		}
   }
}

static function unfreeze() {
	rb.constraints = 0;
}