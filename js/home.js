window.onload=function(){
		var oBox=document.getElementById('home');
		var aSpan=oBox.children;
		for(var i=0; i<4; i++){
			var oSpan=document.createElement('span');
			oSpan.className="on";
			oSpan.style.opacity="0.7";
			oBox.appendChild(oSpan);
		}
		function show(){
			aSpan[0].innerHTML='<a href=" introduction.html"  target="_blank">'+'个人简介'+'</a>';
			aSpan[1].innerHTML='<a href="works.html" target="_blank">'+'作品展示'+'</a>';
			aSpan[2].innerHTML='<a href="experience.html" target="_blank">'+'工作履历'+'</a>';
			aSpan[3].innerHTML='<a href="skill.html" target="_blank">'+'擅长技能'+'</a>';
		}
		show();
		move(aSpan[0],{'top':50},{'easing':'ease-in','duration':500});
		move(aSpan[1],{'left':600},{'easing':'ease-in','duration':500});
		move(aSpan[2],{'top':450},{'easing':'ease-in','duration':500});
		move(aSpan[3],{'left':-100},{'easing':'ease-in','duration':500});
	}
