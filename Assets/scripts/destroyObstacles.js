#pragma strict

//Destroy the obstacles after they exit the scene
function OnCollisionEnter2D(col : Collision2D)
	{
		if(col.gameObject.name=="Destroyer")
		{
			Destroy(this.gameObject);
		}
		
	}
		
function OnTriggerEnter2D(other: Collider2D)
	{
	if(other.gameObject.name=="character")
	{
		  Destroy(other.gameObject);
	}
	if((other.gameObject.name== "enemy1(Clone)" ))
	{
		//Debug.Log("enemy detected");
		//Debug.Log(this.gameObject.name);
		
	//	changeLane();
	}
}	

function changeLane()
	{
		if((this.gameObject.transform.position.x>1.3)&&(this.gameObject.transform.position.x<2))
		{
		Debug.Log("move left");
		this.transform.position = Vector3(Mathf.Lerp(1.7f,0.06f,Time.time),this.transform.position.y,1);
		}
		
		else if((this.gameObject.transform.position.x>-2)&&(this.gameObject.transform.position.x<-1))
		{
		Debug.Log("move right");
		this.transform.position = Vector3(Mathf.Lerp(-1.59,0.06f,Time.time),this.transform.position.y,1);
		}
		
		else if((this.gameObject.transform.position.x>-0.25)&&(this.gameObject.transform.position.x<0.5))
		{
		Debug.Log("mid lane");
		this.transform.position = Vector3(Mathf.Lerp(0.06f,1.7f,Time.time),this.transform.position.y,1);
		}

	}