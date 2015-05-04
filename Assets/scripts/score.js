#pragma strict
var score : float;
var scoreText : GUIText;
function Start () 
	{
	score=0;
	countscore();
	}

function Update ()
{

}

function countscore()
{
	while(1){
			yield WaitForSeconds(.5f);
			score++;
			if (score< 1000)
			scoreText.text="Distance : " + score + " miles";
			else if( score >=1000)
			scoreText.text="Distance : " + score/1000 + " km(s)";

}}