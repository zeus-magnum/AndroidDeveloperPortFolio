// Get the modal
var modalx_ui = document.getElementById("modalx_ui");
var modalx_trans = document.getElementById("modalx_trans");
var modalx_color = document.getElementById("modalx_color");
var modalx_paint = document.getElementById("modalx_paint");
var modalx_filter = document.getElementById("modalx_filter");



// Get the image and insert it inside the modal - use its "alt" text as a caption
var img_ui = document.getElementById("img_editor_ui");
var img_trans = document.getElementById("img_trans");
var img_color = document.getElementById("img_color");
var img_paint = document.getElementById("img_paint");
var img_filter = document.getElementById("img_filter");

var modalImg_ui = document.getElementById("modal_ui");
var modalImg_trans = document.getElementById("modal_trans");
var modalImg_color = document.getElementById("modal_color");
var modalImg_paint = document.getElementById("modal_paint");
var modalImg_filter = document.getElementById("modal_filter");

var captionHome = document.getElementById("caption_home");
var captionTrans = document.getElementById("caption_trans");
var captionColor = document.getElementById("caption_color");
var captionPaint = document.getElementById("caption_paint");
var captionFilter = document.getElementById("caption_filter");

var close_ui = document.getElementById("ui_close");
var close_trans = document.getElementById("trans_close");
var close_color = document.getElementById("color_close");
var close_paint = document.getElementById("paint_close");
var close_filter = document.getElementById("filter_close");

img_ui.onclick = function(){
  modalx_ui.style.display = "block"; 
  modalImg_ui.src = this.src;
  captionHome.innerHTML = this.alt;
}

img_trans.onclick = function(){
  modalx_trans.style.display = "block";
  modalImg_trans.src = this.src;
  captionTrans.innerHTML = this.alt;
}

img_color.onclick = function(){
  modalx_color.style.display = "block";
  modalImg_color.src = this.src;
  captionColor.innerHTML = this.alt;
}

img_paint.onclick = function(){
  modalx_paint.style.display = "block";
  modalImg_paint.src = this.src;
  captionPaint.innerHTML = this.alt;
}

img_filter.onclick = function(){
  modalx_filter.style.display = "block";
  modalImg_filter.src = this.src;
  captionFilter.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
close_ui.onclick = function() {
  modalx_ui.style.display = "none";
}

close_trans.onclick = function() {
  modalx_trans.style.display = "none";
}

close_color.onclick = function() {
  modalx_color.style.display = "none";
}

close_paint.onclick = function() {
  modalx_paint.style.display = "none";
}

close_filter.onclick = function() {
  modalx_filter.style.display = "none";
}





