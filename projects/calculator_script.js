// Get the modal
var calx_ui = document.getElementById("cal_ui_01");
var calx_his = document.getElementById("cal_ui_02");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var cal_img_01 = document.getElementById("cal_01");
var cal_img_02 = document.getElementById("cal_02");

var cal_img_ui = document.getElementById("cal_uic_01");
var cal_img_his = document.getElementById("cal_uic_02");

var captionCal = document.getElementById("caption_cal");
var captionHis = document.getElementById("caption_his");

var close_cal_01 = document.getElementById("cal_01_close");
var close_cal_02 = document.getElementById("cal_02_close");

cal_img_01.onclick = function(){
  calx_ui.style.display = "block"; 
  cal_img_ui.src = this.src;
  captionCal.innerHTML = this.alt;
}


close_cal_01.onclick = function() {
 calx_ui.style.display = "none";
}

