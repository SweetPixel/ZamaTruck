using UnityEngine;
using System.Collections;

public class SpawnScript : MonoBehaviour {
	public GameObject obstacle;
	public GameObject obstacle2;
	
	float timeElapsed = 0;
	public float spawnCycle = 1.5f;
	bool spawnobstacle2 = true;
	int x;
	float obstaclePosition;
	
	void Update () {
		timeElapsed += Time.deltaTime;
		if(timeElapsed > spawnCycle)
		{

			x=Random.Range(1,4);
			if (x==1)
			{
				obstaclePosition=-1.59f;
			}
			else if (x==2)
			{
				obstaclePosition= 0.06f;
			}
			else if (x==3)
			{
				obstaclePosition=1.7f;
			}

			//Spawn obstacles
			GameObject temp;
			if(spawnobstacle2)
			{
				temp = (GameObject)Instantiate(obstacle2);
				//Vector3 pos = temp.transform.position;
				temp.transform.position = new Vector3(obstaclePosition, 6, 1);
			}

			else
			{
				temp = (GameObject)Instantiate(obstacle);
				Vector3 pos = temp.transform.position;
				temp.transform.position = new Vector3(obstaclePosition, 6, 1);
			}
			
			timeElapsed -= spawnCycle;
			spawnobstacle2 = !spawnobstacle2;
		}
	}
}