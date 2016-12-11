#pragma strict

var room : GameObject;

function Start () {
    
}

function Update () {
	if (scoreManager.time>2) {
		room.transform.Rotate(Vector3.up,scoreManager.time/20);
	} else if (scoreManager.time>0) {
		room.transform.Rotate(Vector3.up,Mathf.Sin(scoreManager.time*20)/2);
	}
}

function OnCollisionEnter(collision: Collision) {
	if (collision.gameObject.name=="Character") {
		for (var contact : ContactPoint in collision.contacts) {
			if (Mathf.Abs(contact.normal.z)<0.01) {
				UnityEngine.SceneManagement.SceneManager.LoadScene("main", UnityEngine.SceneManagement.LoadSceneMode.Single);
			}
		}
	}
}
function OnCollisionStay(collision: Collision) {
	if (collision.gameObject.name=="Character") {
		for (var contact : ContactPoint in collision.contacts) {
			if (Mathf.Abs(contact.normal.z)<0.01) {
				UnityEngine.SceneManagement.SceneManager.LoadScene("main", UnityEngine.SceneManagement.LoadSceneMode.Single);
			}
		}
	}
}