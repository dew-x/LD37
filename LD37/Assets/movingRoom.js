#pragma strict

var room : GameObject;

function Start () {
   
}

function Update () {
	if (main.timer>2) {
		room.transform.Rotate(Vector3.up,main.timer/20*Time.timeScale);
	} else if (main.timer>0) {
		room.transform.Rotate(Vector3.up,Mathf.Sin(main.timer*20)/2*Time.timeScale);
	}
}

function OnCollisionEnter(collision: Collision) {
	if (main.mode=="GAME") {
		if (collision.gameObject.name=="animacio") {
			for (var contact : ContactPoint in collision.contacts) {
				if (Mathf.Abs(contact.normal.z)<0.01 && contact.normal.y < 0) {
					main.die();
				}
			}
		}
	}
}
function OnCollisionStay(collision: Collision) {
	if (main.mode=="GAME") {
		if (collision.gameObject.name=="animacio") {
			for (var contact : ContactPoint in collision.contacts) {
				if (Mathf.Abs(contact.normal.z)<0.01 && contact.normal.y < 0) {
					main.die();
				}
			}
		}
	}
}