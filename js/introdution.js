function huachu(){
	var oIn=document.getElementById('introdution');
	var oBox=document.getElementById('box');
	var oBox1=document.getElementById('box1');
	var aDiv=oBox.children;
	move(oIn,{'top':50},{'easing':'ease-out','duration':2000});
	move(oBox1,{'top':40},{'easing':'ease-out','duration':2000})
	var t=40;
	for(var i=0; i<aDiv.length; i++){
		move(aDiv[i],{'top':t},{'easing':'ease-out','duration':2000});
		t=t+aDiv[i].offsetHeight+30;
	}
}
	

