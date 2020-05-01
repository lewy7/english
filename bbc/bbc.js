function displayCN()
{
		if(document.getElementById("cn").style.display=='none'){
			document.getElementById("cn").style.display='block';
			document.getElementById("en").style.width='48%';
		}else{
			document.getElementById("cn").style.display='none';
			document.getElementById("en").style.width='96%';
		}
}
function de(w)
{
		//w.style.display='none';
		if(w.lastChild.style.display=='inline'){
			w.lastChild.style.display='none'
		}else{
			w.lastChild.style.display='inline'
		}
}

function findwords()
{
		enc=document.getElementById("enc");
		var childs = enc.childNodes;
		for(var i = childs.length - 1; i >= 0; i--) {
			//console.log(" ddd " + childs[i].innerText);
			if(childs[i].innerText == null)
				continue;
			//childs[i].innerHTML=childs[i].innerHTML.replace(" "+"pilgrimage"+" "," <span class='v' onclick='de(this)'>pilgrimage <span>  朝圣之旅</span></span> ");
			for (j in json) {
  			childs[i].innerHTML=childs[i].innerHTML.replace(json[j][0]," <span class='v' onclick='de(this)'>"+json[j][0]+"<span> "+json[j][1]+" "+json[j][2]+"</span></span> ");
  		}
		}
}