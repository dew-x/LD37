#pragma strict

var room : GameObject;

function Start () {
    
}

function Update () {
	room.transform.Rotate(Vector3.up,0.2);
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