#pragma strict

static var showSplash : boolean;
static var showTutorial : boolean;
static var showHighscores : boolean;
static var gameTime : float;
static var scoreTime : float;
static var deathTime : float;
static var timer : float;
static var mode : String = "SPLASH";
var ready = 0;

function Start () {
	showSplash = true;
	showTutorial = true;
	showHighscores = true;
	gameTime = 0;
	scoreTime = 0;
	timer = 0;
	ready = 0;
}

function Update () {
	if (mode=="SPLASH") {
		if (Input.anyKey) {
			mode = "TUTORIAL";
		}
	} else if (mode=="TUTORIAL") {
		if (Input.anyKey && ready>10) {
			gameTime = Time.unscaledTime;
			mode = "GAME";
			scoreTime = 0;
			timer = 0;
		}
		++ready;
	} else if (mode=="GAME") {
		scoreTime = Time.unscaledTime - gameTime;
		timer = Time.unscaledTime - gameTime;
	} else if (mode=="DEATH") {
		timer = Time.unscaledTime - gameTime;
		if (Time.unscaledTime - main.deathTime > 3) {
			mode = "HIGHSCORES";
			Time.timeScale = 1;
		}
	} else if (mode=="HIGHSCORES") {
		timer = Time.unscaledTime - gameTime;
		if (Input.anyKey) {
			mode="TUTORIAL";
			UnityEngine.SceneManagement.SceneManager.LoadScene("main", UnityEngine.SceneManagement.LoadSceneMode.Single);
		}
	}
}

static function die() {
	Time.timeScale = 0;
	mode = "DEATH";
	deathTime = Time.unscaledTime;
	character.unfreeze();
}