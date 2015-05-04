using UnityEngine;
using System.Collections;

public class gui_text : MonoBehaviour {
	public Vector2 offset;
	public float ratio = 10;
	// Use this for initialization
	void Start () {
		float finalSize = (float)Screen.width/ratio;
		
		GetComponent<GUIText>().fontSize = (int)finalSize;
		
		GetComponent<GUIText>().pixelOffset = new Vector2( offset.x * Screen.width, offset.y * Screen.height);
	}
}