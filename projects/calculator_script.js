// Get the modal
var calx_ui = document.getElementById("cal_ui_01");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var cal_img_01 = document.getElementById("cal_01");
var cal_img_ui = document.getElementById("cal_uic_01");
var captionCal = document.getElementById("caption_cal");
var close_cal_01 = document.getElementById("cal_01_close");


cal_img_01.onclick = function(){
  calx_ui.style.display = "block"; 
  cal_img_ui.src = this.src;
  captionCal.innerHTML = this.alt;
}


close_cal_01.onclick = function() {
 calx_ui.style.display = "none";
}

