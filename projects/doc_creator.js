// Get the modal
var docx_01 = document.getElementById("docx_ui");
var docx_02 = document.getElementById("docx_01");
var docx_03 = document.getElementById("docx_02");
var docx_04 = document.getElementById("docx_03");
var docx_05 = document.getElementById("docx_edit");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var doc_01 = document.getElementById("doc_creator_ui");
var doc_02 = document.getElementById("doc_creator_tools_01");
var doc_03 = document.getElementById("doc_creator_tools_02");
var doc_04 = document.getElementById("doc_creator_tools_03");
var doc_edit = document.getElementById("doc_creator_pdf_edit");

var modaldoc_01 = document.getElementById("doc_01");
var modaldoc_02 = document.getElementById("doc_02");
var modaldoc_03 = document.getElementById("doc_03");
var modaldoc_04 = document.getElementById("doc_04");
var modaldoc_05 = document.getElementById("doc_05");

var caption01 = document.getElementById("caption_01");
var caption02 = document.getElementById("caption_02");
var caption03 = document.getElementById("caption_03");
var caption04 = document.getElementById("caption_04");
var caption05 = document.getElementById("caption_05");

var close_01 = document.getElementById("doc_ui_close");
var close_02 = document.getElementById("doc01_close");
var close_03 = document.getElementById("doc02_close");
var close_04 = document.getElementById("doc03_close");
var close_05 = document.getElementById("edit_close");

doc_01.onclick = function(){
  docx_01.style.display = "block"; 
  modaldoc_01.src = this.src;
  caption01.innerHTML = this.alt;
}

doc_02.onclick = function(){
  docx_02.style.display = "block";
  modaldoc_02.src = this.src;
  caption02.innerHTML = this.alt;
}

doc_03.onclick = function(){
  docx_03.style.display = "block";
  modaldoc_03.src = this.src;
  caption03.innerHTML = this.alt;
}

doc_04.onclick = function(){
  docx_04.style.display = "block";
  modaldoc_04.src = this.src;
  caption04.innerHTML = this.alt;
}

doc_edit.onclick = function(){
  docx_05.style.display = "block";
  modaldoc_05.src = this.src;
  caption05.innerHTML = this.alt;
}
  

// When the user clicks on <span> (x), close the modal
close_01.onclick = function() {
  docx_01.style.display = "none";
}

close_02.onclick = function() {
  docx_02.style.display = "none";
}

close_03.onclick = function() {
  docx_03.style.display = "none";
}

close_04.onclick = function() {
  docx_04.style.display = "none";
}

close_05.onclick = function() {
    docx_05.style.display = "none";
}






