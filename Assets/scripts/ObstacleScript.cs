using UnityEngine;
using System.Collections;


//move the obstacles across the scene
public class ObstacleScript : MonoBehaviour {
	Vector3 pos;
	Vector3 axis;

	void Start()
	{
		pos.x=-0.05f;
		pos.y = 6f;
		pos.z = 1f;
		//axis = -transform.up;
	}

	void Update () 
	{
		if (this.gameObject.name == "hole(Clone)") 
		{
			//transform.Translate (0, -0.165f, 0);
		}
		else if (gameObject.name == "enemy1(Clone)") 
		{
			transform.Translate (-0.03f, 0, 0);
		}
		else if (gameObject.name == "enemy2(Clone)") 
		{
			transform.Translate (-0.03f, 0, 0);
		}
	}
}