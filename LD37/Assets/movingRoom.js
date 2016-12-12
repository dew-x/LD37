#pragma strict

var room : GameObject;
static var alive : boolean;
static var deathtime : float;

function Start () {
    alive = true;
}

function Update () {
	if (alive) {
		if (scoreManager.time>2) {
			room.transform.Rotate(Vector3.up,scoreManager.time/20);
		} else if (scoreManager.time>0) {
			room.transform.Rotate(Vector3.up,Mathf.Sin(scoreManager.time*20)/2);
		}
	} else {
		Debug.Log(Time.unscaledTime - deathtime);
		if ((Time.unscaledTime - deathtime) > 1.2) {
			Time.timeScale = 1;
			alive = true;
			UnityEngine.SceneManagement.SceneManager.LoadScene("main", UnityEngine.SceneManagement.LoadSceneMode.Single);
		}
	}
}

function die() {
	Time.timeScale = 0;
	alive = false;
	deathtime = Time.unscaledTime;
	deathScreen.DeathScreenFunction();
}

function OnCollisionEnter(collision: Collision) {
	if (alive) {
		if (collision.gameObject.name=="animacio") {
			for (var contact : ContactPoint in collision.contacts) {
				if (Mathf.Abs(contact.normal.z)<0.01 && contact.normal.y < 0) {
					die();
				}
			}
		}
	}
}
function OnCollisionStay(collision: Collision) {
	if (alive) {
		if (collision.gameObject.name=="animacio") {
			for (var contact : ContactPoint in collision.contacts) {
				if (Mathf.Abs(contact.normal.z)<0.01 && contact.normal.y < 0) {
					die();
				}
			}
		}
	}
}