// Get the modal
var modalx_01 = document.getElementById("audiox_ui");
var modalx_02 = document.getElementById("audiox_02");
var modalx_03 = document.getElementById("audiox_03");
var modalx_04 = document.getElementById("audiox_04");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var audio_01 = document.getElementById("audio_01");
var audio_02 = document.getElementById("audio_02");
var audio_03 = document.getElementById("audio_03");
var audio_04 = document.getElementById("audio_04");

var modalaudio_01 = document.getElementById("modal_ui");
var modalaudio_02 = document.getElementById("modal_trans");
var modalaudio_03 = document.getElementById("modal_color");
var modalaudio_04 = document.getElementById("modal_paint");

var captionHome = document.getElementById("caption_home");
var captionTrans = document.getElementById("caption_trans");
var captionColor = document.getElementById("caption_color");
var captionPaint = document.getElementById("caption_paint");

var close_01 = document.getElementById("ui_close");
var close_02 = document.getElementById("trans_close");
var close_03 = document.getElementById("color_close");
var close_04 = document.getElementById("paint_close");


audio_01.onclick = function(){
  modalx_01.style.display = "block"; 
  modalaudio_01.src = this.src;
  captionHome.innerHTML = this.alt;
}

audio_02.onclick = function(){
  modalx_02.style.display = "block";
  modalaudio_02.src = this.src;
  captionTrans.innerHTML = this.alt;
}

audio_03.onclick = function(){
  modalx_03.style.display = "block";
  modalaudio_03.src = this.src;
  captionColor.innerHTML = this.alt;
}

audio_04.onclick = function(){
  modalx_04.style.display = "block";
  modalaudio_04.src = this.src;
  captionPaint.innerHTML = this.alt;
}


// When the user clicks on <span> (x), close the modal
close_01.onclick = function() {
  modalx_01.style.display = "none";
}

close_02.onclick = function() {
  modalx_02.style.display = "none";
}

close_03.onclick = function() {
  modalx_03.style.display = "none";
}

close_04.onclick = function() {
  modalx_04.style.display = "none";
}






