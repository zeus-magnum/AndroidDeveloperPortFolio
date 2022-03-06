// Get the modal
var lenx_01 = document.getElementById("lenx_01");
var lenx_02 = document.getElementById("lenx_02");
var lenx_03 = document.getElementById("lenx_03");
var lenx_04 = document.getElementById("lenx_04");
var lenx_05 = document.getElementById("lenx_05");
var lenx_06 = document.getElementById("lenx_06");


// Get the image and insert it inside the modal - use its "alt" text as a caption
var lenop_01 = document.getElementById("len_optimizer_v1_01");
var lenop_02 = document.getElementById("len_optimizer_v1_02");
var lenop_03 = document.getElementById("len_optimizer_v2_01");
var lenop_04 = document.getElementById("len_optimizer_v2_02");
var lenop_05 = document.getElementById("len_optimizer_v2_03");
var lenop_06 = document.getElementById("len_optimizer_v2_04");

var modallen_01 = document.getElementById("len_01");
var modallen_02 = document.getElementById("len_02");
var modallen_03 = document.getElementById("len_03");
var modallen_04 = document.getElementById("len_04");
var modallen_05 = document.getElementById("len_05");
var modallen_06 = document.getElementById("len_06");

var caption_01 = document.getElementById("caption_01");
var caption_02 = document.getElementById("caption_02");
var caption_03 = document.getElementById("caption_03");
var caption_04 = document.getElementById("caption_04");
var caption_05 = document.getElementById("caption_05");
var caption_06 = document.getElementById("caption_06");

var close_01 = document.getElementById("close_01");
var close_02 = document.getElementById("close_02");
var close_03 = document.getElementById("close_03");
var close_04 = document.getElementById("close_04");
var close_05 = document.getElementById("close_05");
var close_06 = document.getElementById("close_06");

lenop_01.onclick = function () {
    lenx_01.style.display = "block";
    modallen_01.src = this.src;
    captionHome.innerHTML = this.alt;
}

lenop_02.onclick = function () {
    lenx_02.style.display = "block";
    modallen_02.src = this.src;
    captionTrans.innerHTML = this.alt;
}

lenop_03.onclick = function () {
    lenx_03.style.display = "block";
    modallen_03.src = this.src;
    captionColor.innerHTML = this.alt;
}

lenop_04.onclick = function () {
    lenx_04.style.display = "block";
    modallen_04.src = this.src;
    captionPaint.innerHTML = this.alt;
}

lenop_05.onclick = function () {
    lenx_05.style.display = "block";
    modallen_05.src = this.src;
    captionPaint.innerHTML = this.alt;
}


lenop_06.onclick = function () {
    lenx_06.style.display = "block";
    modallen_06.src = this.src;
    captionPaint.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
close_01.onclick = function () {
    lenx_01.style.display = "none";
}

close_02.onclick = function () {
    lenx_02.style.display = "none";
}

close_03.onclick = function () {
    lenx_03.style.display = "none";
}

close_04.onclick = function () {
    lenx_04.style.display = "none";
}

close_05.onclick = function () {
    lenx_05.style.display = "none";
}

close_06.onclick = function () {
    lenx_06.style.display = "none";
}





