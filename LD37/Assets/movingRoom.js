#pragma strict

var room : GameObject;

function Start () {
    
}

function Update () {
	room.transform.Rotate(Vector3.up,0.2);
}

function OnCollisionEnter(collision: Collision) {
	if (collision.gameObject.name=="Character") {
		 UnityEngine.SceneManagement.SceneManager.LoadScene("main", UnityEngine.SceneManagement.LoadSceneMode.Single);
	}
}