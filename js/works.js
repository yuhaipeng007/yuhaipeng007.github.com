function drag(){
		var oBox=document.getElementById('works1');
		var oUl=document.getElementById('ul');
		var aLi=oUl.children;
		var aImg=document.getElementsByTagName('img');
		var aA=document.getElementById('a');
		oUl.style.top=oBox.offsetHeight/2-aLi[0].offsetHeight/2+'px';
		oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
		oUl.onmousedown=function(ev){
			var oEvent=ev||event;
			var downX=oEvent.clientX;
			var disX=oEvent.clientX-oUl.offsetLeft;
			document.onmousemove=function(ev){
				var oEvent=ev||event;
				var l=oEvent.clientX-disX;
				if(l>oBox.offsetWidth/2-aLi[0].offsetWidth/2){
					l=oBox.offsetWidth/2-aLi[0].offsetWidth/2;
				}
				if(l<oBox.offsetWidth/2-(aLi[0].offsetWidth*(aLi.length-1)+aLi[0].offsetWidth/2)){
					l=oBox.offsetWidth/2-(aLi[0].offsetWidth*(aLi.length-1)+aLi[0].offsetWidth/2);
				}
				setSize();
				oUl.style.left=l+'px';
			}
			document.onmouseup=function(){
				document.onmousemove=null;
				document.onmouseup=null;
			}
			return false;
		}
		oUl.style.left=-aLi[0].offsetWidth+aLi[0].offsetWidth/2+'px';
		setSize();
            function setSize(){
                for(var i=0;i<aLi.length;i++){
                	var z=0;
                    var l1=Math.abs(oBox.offsetWidth/2-(oUl.offsetLeft+aLi[i].offsetLeft+aLi[i].offsetWidth/2));
                    var scale=(1-l1/500);
                    (scale <=.5) && (scale=.5);
                    aImg[i].style.width=scale*800+'px';
                    aImg[i].style.height=scale*350+'px';
                    aImg[i].style.marginLeft=-(aImg[i].offsetWidth-500)/2+'px';
                    aImg[i].style.marginTop=-(aImg[i].offsetHeight-200)/2+'px';
                    aLi[i].style.zIndex=scale*100000;
                }
            }
	}
function huachu(){
	var oIn=document.getElementById('works');
	var oBox1=document.getElementById('works1');
	move(oIn,{'top':50},{'easing':'ease-out','duration':2000});
	move(oBox1,{'top':130},{'easing':'ease-out','duration':2000})
}