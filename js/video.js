var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");

});

video.volume = 1;
document.getElementById("play").addEventListener("click", function() {
	console.log("Play Video")
	video.play()
	console.log(video.volume)
});

document.getElementById("pause").addEventListener("click", function() {
	video.pause()
});

video.PlaybackRate = 1;
document.getElementById("slower").addEventListener("click", function() {
	video.PlaybackRate = 0.95 * video.PlaybackRate;
	console.log(video.PlaybackRate)
});

document.getElementById("faster").addEventListener("click", function() {
	video.PlaybackRate =video.PlaybackRate/0.95;
	console.log(video.PlaybackRate)
});

document.getElementById("skip").addEventListener("click", function() {
	if (video.duration - video.currentTime > 15){
		video.currentTime+=15;
	}
	else{
		video.currentTime=0;
	}
	console.log(video.currentTime)
});

document.getElementById("mute").addEventListener("click", function() {
	if(video.muted != true){
		document.getElementById("mute").innerHTML = "Unmute";
		video.muted = true;
	}
	else{
		document.getElementById("mute").innerHTML = "Mute";
		video.muted = false;
	}
});

document.getElementById("slider").addEventListener("change", function() {
	video.volume = document.getElementById("slider").value/100;
	document.getElementById("volume").innerHTML = video.volume*100 + "%";
});

document.getElementById("vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});

document.getElementById("orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});