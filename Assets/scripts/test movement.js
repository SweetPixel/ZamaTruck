#pragma strict

private var midLane : boolean;
private var rightLane : boolean;
private var leftLane : boolean;
public var car : GameObject;

var  minSwipeDistY : float;
var minSwipeDistX: float ;
var startPos : Vector2 ;
 
function Start () 
	{
		midLane=true;
		rightLane=false;
		leftLane=false;
	}


//Car movement animations controller
function  Update() 
	{
 //#if UNITY_ANDROID
         if (Input.touchCount > 0) 
             
         {
             
            var touch: Touch  = Input.touches[0];
             
             
             
             switch (touch.phase) 
                 
             {
                 
             case TouchPhase.Began:
 
                 startPos = touch.position;
                 
                 break;
                 
                 
                 
             case TouchPhase.Ended:
 
                  var swipeDistVertical :    float = (new Vector3(0, touch.position.y, 0) - new Vector3(0, startPos.y, 0)).magnitude;
 
                     if (swipeDistVertical > minSwipeDistY) 
                         
                     {
                         
                         var swipeValue :float  = Mathf.Sign(touch.position.y - startPos.y);
                         
                         if (swipeValue > 0)//up swipe
 
                             {
                             if ((rightLane==true))
				           			{
				           			 	//Debug.Log("right to mid");
										leftLane=false;
										midLane=true;
										rightLane=false;
										car.GetComponent.<Animation>().Play("right to mid");
									}
							else if ((midLane==true))
									{
									 	//Debug.Log("mid to left");
										leftLane=true;
										midLane=false;
										rightLane=false;
										car. GetComponent.<Animation>().Play("mid to left");
									}
									
									
                             }
                         
                         else if (swipeValue < 0)//down swipe
 
                             {
                             if ( (midLane == true) )
				           		 {
				           		 		//Debug.Log("mid to right");
										rightLane=true;
										midLane=false;
										leftLane=false;
										car.GetComponent.<Animation>().Play("mid to right");
								 }
							else if((leftLane==true)) 
									{		
										//Debug.Log("left to mid");
										rightLane=false;
										midLane=true;
										leftLane=false;
										car.GetComponent.<Animation>().Play("left to mid");
									}
				                    }
                     
                     }
                 break;
             }
         }
     }

	/*
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
					}}}*/