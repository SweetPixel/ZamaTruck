#pragma strict


	
function Start()
	
	{	
	enemyMovement();
	}
	
	
	function enemyMovement()
	{
	var  time : float;
	var i : float;
	var randomMovement: int;
		time= Random.Range(.3f, 1f);
		randomMovement = Random.Range(1,4);
		
		yield WaitForSeconds(time);
		if((this.gameObject.transform.position.x>1.3)&&(this.gameObject.transform.position.x<2))
			{
				if(randomMovement==1)
				{
					for(i=1.7f; i>=0.06f; i=i-.05f)
					{
				//	Debug.Log("moving from right to mid");
						this.transform.position.x=i;
						yield WaitForSeconds(0.001f);
					}
				}
				else if(randomMovement==2)
				{
				
					for(i=1.7f; i>=-1.59f; i=i-.05f)
					{
				//	Debug.Log("moving from right to left");
						this.transform.position.x=i;
						yield WaitForSeconds(0.001f);
					}
				}
				else
				{
				
				}
			}
		else if((this.gameObject.transform.position.x>-2)&&(this.gameObject.transform.position.x<-1))
			{
				if(randomMovement==1)
				{
					for(i=-1.59f; i<=0.06f; i=i+.05f)
					{
				//	Debug.Log("moving from left to mid");
						this.transform.position.x=i;
						yield WaitForSeconds(0.001f);
					}
				}
				else if(randomMovement==2)
				{
					for(i=-1.59f; i<=1.7f; i=i+.05f)
					{
				//	Debug.Log("moving from left to right");
						this.transform.position.x=i;
						yield WaitForSeconds(0.001f);
					}
				}
				else
				{
				
				}
			}
		else if((this.gameObject.transform.position.x>-0.25)&&(this.gameObject.transform.position.x<0.5))
			{
				if(randomMovement==1)
				{
					for(i=0.06f; i<=1.7f; i=i+.05f)
					{
				//	Debug.Log("moving from mid to right");
						this.transform.position.x=i;
						yield WaitForSeconds(0.001f);
					}
				}
				else if(randomMovement==2)
				{
					for(i=0.06f; i>=-1.59f; i=i-.05f)
					{
				//	Debug.Log("moving from mid to left");
						this.transform.position.x=i;
						yield WaitForSeconds(0.001f);
					}
				}
				else
				{
				
				}
			}
	}