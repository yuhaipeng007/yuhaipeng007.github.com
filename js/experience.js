function huachu(){
	var oEx=document.getElementById('experience');
	var oEx1=document.getElementById('ex-1');
	var oImg1=document.getElementById('ex-1-img');
	var oEx2=document.getElementById('ex-2');
	var oImg2=document.getElementById('ex-2-img');
	move(oEx,{'top':50},{'easing':'ease-out','duration':2000});
	move(oEx1,{'top':40},{'easing':'ease-out','duration':2000});
	move(oImg1,{'top':40},{'easing':'ease-out','duration':2000});
	move(oEx2,{'top':480},{'easing':'ease-out','duration':2000});
	move(oImg2,{'top':480},{'easing':'ease-out','duration':2000});
}