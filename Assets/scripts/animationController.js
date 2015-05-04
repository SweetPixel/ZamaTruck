#pragma strict

private var midLane : boolean;
private var rightLane : boolean;
private var leftLane : boolean;
public var car : GameObject;


function Start () 
	{
		midLane=true;
		rightLane=false;
		leftLane=false;
	}


//Car movement animations controller
function  Update() 
	{
	 if (Input.GetMouseButtonDown(0)) {
	 var hit : RaycastHit;
	 var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);

     if (Physics.Raycast(ray, hit))
     {
       //  Debug.Log(hit.collider.name);
         
         if ( (midLane == true) && (hit.collider.gameObject.name == "move right"))
           		 {
           		 		//Debug.Log("mid to right");
						rightLane=true;
						midLane=false;
						leftLane=false;
						car.GetComponent.<Animation>().Play("mid to right");
				 }
			else if((hit.collider.gameObject.name == "move right")&& (leftLane==true)) 
					{		
						//Debug.Log("left to mid");
						rightLane=false;
						midLane=true;
						leftLane=false;
						car.GetComponent.<Animation>().Play("left to mid");
					}
					
            else if ((hit.collider.gameObject.name == "move left")&&(rightLane==true))
           			{
           			 	//Debug.Log("right to mid");
						leftLane=false;
						midLane=true;
						rightLane=false;
						car.GetComponent.<Animation>().Play("right to mid");
					}
			else if ((hit.collider.gameObject.name == "move left")&&(midLane==true))
					{
					 	//Debug.Log("mid to left");
						leftLane=true;
						midLane=false;
						rightLane=false;
						car. GetComponent.<Animation>().Play("mid to left");
					}
						else if (hit.collider.gameObject.name=="restart")
						{
						Application.LoadLevel("main scene");
						}
					}}
				
					
					}

	/*estroy on collision with obstacles
	function OnCollisionEnter2D(col : Collision2D)
	{
		if((col.gameObject.name=="hole(Clone)")||( col.gameObject.name=="enemy1(Clone)")||( col.gameObject.name=="enemy2(Clone)"))
		{
				Destroy(this.gameObject);
		}
}*/