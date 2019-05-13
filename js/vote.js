function myselection(myid){

	var imges = document.getElementsByClassName('myimage');
	var tooltips = document.getElementsByClassName('tooltiptext1');
	document.getElementById('show').style.visibility = "visible";
	document.getElementById('next').style.visibility = "visible";
	document.getElementById('next').disabled = true;
	document.getElementById('next').style.background = "grey";
	document.getElementById('next').style.cursor = "not-allowed";
	document.getElementById('next').style.color = "black";

	

	if(document.getElementById('i1').id == myid)
	{	
		for(var i=0; i<imges.length; i++){
			if(i==0){
				imges[i].style.opacity = "1.0";
			}
			else {
				imges[i].style.opacity = "0.3";
				imges[i].disabled = true;
				imges[i].onclick = false;
				tooltips[i].style.visibility = "hidden";
			}

		}
		
		var x = document.getElementById("p1").innerHTML;
		document.getElementById("team").innerHTML = x;
	}
	else if(document.getElementById('i2').id == myid)
	{	
		for(var i=0; i<imges.length; i++){
			if(i==1){
				imges[i].style.opacity = "1.0";
			}
			else {
				imges[i].style.opacity = "0.3";
				imges[i].disabled = true;
				imges[i].onclick = false;
				tooltips[i].style.visibility = "hidden";
			}

		}
		var y = document.getElementById("p2").innerHTML;
		document.getElementById("team").innerHTML = y;	
	}
	else if(document.getElementById('i3').id == myid)
	{	
		for(var i=0; i<imges.length; i++){
			if(i==2){
				imges[i].style.opacity = "1.0";
			}
			else {
				imges[i].style.opacity = "0.3";
				imges[i].disabled = true;
				imges[i].onclick = false;
				tooltips[i].style.visibility = "hidden";
			}

		}
		var y = document.getElementById("p3").innerHTML;
		document.getElementById("team").innerHTML = y;	
	}
	else if(document.getElementById('i4').id == myid)
	{	
		for(var i=0; i<imges.length; i++){
			if(i==3){
				imges[i].style.opacity = "1.0";
			}
			else {
				imges[i].style.opacity = "0.3";
				imges[i].disabled = true;
				imges[i].onclick = false;
				tooltips[i].style.visibility = "hidden";

			}

		}
		var y = document.getElementById("p4").innerHTML;
		document.getElementById("team").innerHTML = y;	
	}
	else if(document.getElementById('i5').id == myid)
	{	
		for(var i=0; i<imges.length; i++){
			if(i==4){
				imges[i].style.opacity = "1.0";
			}
			else {
				imges[i].style.opacity = "0.3";
				imges[i].disabled = true;
				imges[i].onclick = false;
				tooltips[i].style.visibility = "hidden";
			}

		}
		var y = document.getElementById("p5").innerHTML;
		document.getElementById("team").innerHTML = y;	
	}
	else if(document.getElementById('i6').id == myid)
	{	
		for(var i=0; i<imges.length; i++){
			if(i==5){
				imges[i].style.opacity = "1.0";
			}
			else {
				imges[i].style.opacity = "0.3";
				imges[i].disabled = true;
				imges[i].onclick = false;
				tooltips[i].style.visibility = "hidden";
			}

		}
		var y = document.getElementById("p6").innerHTML;
		document.getElementById("team").innerHTML = y;	
	}
}

function button_enable()
{	
	
	document.getElementById('star5').addEventListener("click", star_click);
	//document.getElementById('star4half').addEventListener("click", star_click);
	document.getElementById('star4').addEventListener("click", star_click);
	//document.getElementById('star3half').addEventListener("click", star_click);
	document.getElementById('star3').addEventListener("click", star_click);
	//document.getElementById('star2half').addEventListener("click", star_click);
	document.getElementById('star2').addEventListener("click", star_click);
	//document.getElementById('star1half').addEventListener("click", star_click);
	document.getElementById('star1').addEventListener("click", star_click);
	//document.getElementById('starhalf').addEventListener("click", star_click);
	
	document.getElementById('next').disabled = false;
	document.getElementById('next').style.background = "#2DB684";
	document.getElementById('next').style.cursor = "pointer";
	document.getElementById('next').style.color = "white";
	document.getElementById('next').onmouseover = function(){
		document.getElementById('next').style.background = "#223F7E";
	}
	document.getElementById('next').onmouseout = function(){
		document.getElementById('next').style.background = "#2DB684";
	}
	document.getElementById('next').addEventListener("click", button_link);

	
}  

function button_link() {

	document.getElementById("next").onclick = location.href='third_page.html';
}

function star_click() {
	// body...

	document.getElementById('star5').onclick = function(){document.getElementById('comment').innerHTML = "Awesome";}
	//document.getElementById('star4half').onclick = function(){document.getElementById('comment').innerHTML = "Very Good";}
	document.getElementById('star4').onclick = function(){document.getElementById('comment').innerHTML = "Very Good";}
	//document.getElementById('star3half').onclick = function(){document.getElementById('comment').innerHTML = "Good";}
	document.getElementById('star3').onclick = function(){document.getElementById('comment').innerHTML = "Pretty Good";}
	//document.getElementById('star2half').onclick = function(){document.getElementById('comment').innerHTML = "Need to Improve";}
	document.getElementById('star2').onclick = function(){document.getElementById('comment').innerHTML = "Bad";}
	//document.getElementById('star1half').onclick = function(){document.getElementById('comment').innerHTML = "Bad";}
	document.getElementById('star1').onclick = function(){document.getElementById('comment').innerHTML = "Very Bad";}
	//document.getElementById('starhalf').onclick = function(){document.getElementById('comment').innerHTML = "Very Bad";}
}