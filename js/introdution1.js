function zichu(){
	var str = "我是一个开朗乐观的人，跟我在一起的人都会时不时的笑出来，因为我可以给他们带去快乐！我是一个自信的人，我每时每刻都相信自己，对任何事情都胸有成竹！我是一个有上进心的人，我不管在哪我都能发现我应该学习的东西！我是一个负责的人，说过的话不管怎样都会努力去完成，即便遍体鳞伤！这就是我！一个有理想有抱负的我！";
	var oBox1=document.getElementById('box1');
	for(var i = 0; i < str.length; i++){
		var oSpan = document.createElement("span");
		oSpan.className='os';
		oSpan.innerHTML = str[i];
		oBox1.appendChild(oSpan);
	}
	var i = 0; 
	var aSpan = oBox1.children;
	var timer = setInterval(function(){
		aSpan[i].className = "active";
		i++;
		if(i == str.length){
			clearInterval(timer);
		}
	},120);
};
