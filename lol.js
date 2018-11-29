var charset = 0;
var text = "Now this is the story 📜 all about how My life got flipped🙃, turned upside down🙃 And I'd like to take a minute⌚️ just sit right there🙅‍♀️ I'll tell💬 you how I became the 👑 of a town called Bel🛎 Air💨 In west Philadelphia🇺🇸 born and raised👨‍👩‍👧 On the playground🎪 where I spent most of my days📆 Chilling❄️ out, maxing, relaxing all cool❄️ And all shooting🔫 some b-ball🏀 outside of the school🎒 When a couple of guys👨‍❤️‍👨 who were up to no good🙅‍♀️ Started making trouble in my neighborhood🏘 I got in one little fight🤼‍♂️ and my mom👩‍👦 got scared😰 And said you're moving with your auntie👩‍👦 and uncle👨‍👦 in Bel🛎 Air💨. I whistled🎼 for a cab🚕 and when it came near the License plate said 'Fresh' and had dice in the mirror If anything I could say that this cab🚕 was rare🥩 But I thought now forget😶 it, yo home🏠 to Bel🛎 Air💨 I pulled up to a house about seven7️⃣ or eight8️⃣ And I yelled📢 to the cabbie🚕, yo Holmes smell👃 ya later Looked at my kingdom🏰 I was finally there To sit on my throne as the prince👑 of Bel🛎 Air💨";

function myFunction() {
	var a = document.getElementById("myDIV");
	if (a.innerHTML = text) {
		a.innerHTML = text.substring(0, charset);
		charset++;
		var b = setTimeout("myFunction();", 50);
	}
	else {
		clearTimeout(b);
		charset = 0;

	};

};

function playSound() {
	var mySound = document.getElementById("sound");
	mySound.play();
}

function pauseSound(){
	mySound.pause();
	mySound.currentTime = 0;
}



var butt = document.querySelector("button");
butt.addEventListener('click', function () {
	myFunction(text.id);
	if(butt.onclick != true){
	playSound();
	}	
	else{
		pauseSound();
	}
})

// function myButton(fun){
// 	var btn = document.createElement("BUTTON");
//     var t = document.createTextNode("Start Lyrics!");
//     btn.appendChild(t);
//     document.body.appendChild(btn);
// }

// function type(){
// 		var a = document.getElementById('auto')
// 		if(a.innerHTML != text)
// 		{
// 			a.innerHTML = text.substring(0,charset);
// 			charset++;
// 			var b = setTimeout("type();", 1);
// 		}
// 		else
// 		{
// 			clearTimeout(b);
// 			charset = 0;

// 		}
// 	}