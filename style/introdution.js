window.onload=function(){
	function elastic(iTarget,obj){
		var iSpeed=0;
		var iTop=0;
		var start=obj.offsetTop;
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			iSpeed+=(iTarget-obj.offsetTop)/5;
			iSpeed*=.8;
			iTop+=iSpeed;
			obj.style.top=start+Math.round(iTop)+Math.round(iSpeed)+'px';
			if(Math.round(iTop)==iTarget&&Math.abs(iSpeed)<.5){
				clearInterval(obj.timer);
			}
		},30)
	}
	var oIn=document.getElementById('introdution');
    elastic(50,oIn);
}
