var main_Side = 0;
//Side Menu

function mainSide() {
    if (main_Side == 0 && screen.width >= 280 && screen.width <= 480) {
        document.getElementById('side').style.width = "100vw";
        document.getElementById('side-list').style.display = "block";
        main_Side = 1;
    }
    else if (screen.width >= 280 && screen.width <= 480) {
        document.getElementById('side').style.width = "0";
        document.getElementById('side-list').style.display = "none";
        main_Side = 0;
    }
    else if (main_Side == 0 && screen.width >= 481 && screen.width <= 1024) {
        document.getElementById('side').style.width = "35vw";
        document.getElementById('side-list').style.display = "block";
        document.getElementById('page-cont').style.width = "65vw";
        main_Side = 1;
    }
    else if (screen.width >= 481 && screen.width <= 1024) {
        document.getElementById('side').style.width = "0";
        document.getElementById('side-list').style.display = "none";
        document.getElementById('page-cont').style.width = "100vw";
        main_Side = 0;
    }
    else if (main_Side == 0 && screen.width >= 1025) {
        document.getElementById('side').style.width = "15vw";
        document.getElementById('side-list').style.display = "block";
        main_Side = 1;
    }
    else if (screen.width >= 1025) {
        document.getElementById('side').style.width = "0";
        document.getElementById('side-list').style.display = "none";
        main_Side = 0;
    }

}
function copyToClipboard() {
    var range = document.createRange();
    range.selectNode(document.getElementById("copy-code"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}
function showDiv(select) {
    if (select.value == 0) {
        document.getElementById('normalbtn').style.display = "flex";
        document.getElementById('colorbtn').style.display = "none";
        document.getElementById('primarybtn').style.display = "none";
        document.getElementById('glowbtn').style.display = "none";
        document.getElementById('blockbtn').style.display = "none";
        document.getElementById('downloadbtn').style.display = "none";
        //Codes
        document.getElementById('normal-btn-code').style.display = "block";
        document.getElementById('color-btn-code').style.display = "none";
        document.getElementById('primary-btn-code').style.display = "none";
        document.getElementById('glowing-btn-code').style.display = "none";
        document.getElementById('block-btn-code').style.display = "none";
        document.getElementById('download-btn-code').style.display = "none";
        //Titles
        document.getElementById('normal-btn-title').style.display = "block";
        document.getElementById('color-btn-title').style.display = "none";
        document.getElementById('primary-btn-title').style.display = "none";
        document.getElementById('glowing-btn-title').style.display = "none";
        document.getElementById('block-btn-title').style.display = "none";
        document.getElementById('download-btn-title').style.display = "none";

    }
    if (select.value == 1) {
        document.getElementById('normalbtn').style.display = "none";
        document.getElementById('colorbtn').style.display = "flex";
        document.getElementById('primarybtn').style.display = "none";
        document.getElementById('glowbtn').style.display = "none";
        document.getElementById('blockbtn').style.display = "none";
        document.getElementById('downloadbtn').style.display = "none";
        //Codes
        document.getElementById('normal-btn-code').style.display = "none";
        document.getElementById('color-btn-code').style.display = "block";
        document.getElementById('primary-btn-code').style.display = "none";
        document.getElementById('glowing-btn-code').style.display = "none";
        document.getElementById('block-btn-code').style.display = "none";
        document.getElementById('download-btn-code').style.display = "none";
        //Titles
        document.getElementById('normal-btn-title').style.display = "none";
        document.getElementById('color-btn-title').style.display = "block";
        document.getElementById('primary-btn-title').style.display = "none";
        document.getElementById('glowing-btn-title').style.display = "none";
        document.getElementById('block-btn-title').style.display = "none";
        document.getElementById('download-btn-title').style.display = "none";
    }
    if (select.value == 2) {
        document.getElementById('normalbtn').style.display = "none";
        document.getElementById('colorbtn').style.display = "none";
        document.getElementById('primarybtn').style.display = "flex";
        document.getElementById('glowbtn').style.display = "none";
        document.getElementById('blockbtn').style.display = "none";
        document.getElementById('downloadbtn').style.display = "none";
        //Codes
        document.getElementById('normal-btn-code').style.display = "none";
        document.getElementById('color-btn-code').style.display = "none";
        document.getElementById('primary-btn-code').style.display = "block";
        document.getElementById('glowing-btn-code').style.display = "none";
        document.getElementById('block-btn-code').style.display = "none";
        document.getElementById('download-btn-code').style.display = "none";
        //Titles
        document.getElementById('normal-btn-title').style.display = "none";
        document.getElementById('color-btn-title').style.display = "none";
        document.getElementById('primary-btn-title').style.display = "block";
        document.getElementById('glowing-btn-title').style.display = "none";
        document.getElementById('block-btn-title').style.display = "none";
        document.getElementById('download-btn-title').style.display = "none";
    }
    if (select.value == 3) {
        document.getElementById('normalbtn').style.display = "none";
        document.getElementById('colorbtn').style.display = "none";
        document.getElementById('primarybtn').style.display = "none";
        document.getElementById('glowbtn').style.display = "flex";
        document.getElementById('blockbtn').style.display = "none";
        document.getElementById('downloadbtn').style.display = "none";
        //Codes
        document.getElementById('normal-btn-code').style.display = "none";
        document.getElementById('color-btn-code').style.display = "none";
        document.getElementById('primary-btn-code').style.display = "none";
        document.getElementById('glowing-btn-code').style.display = "block";
        document.getElementById('block-btn-code').style.display = "none";
        document.getElementById('download-btn-code').style.display = "none";
        //Titles
        document.getElementById('normal-btn-title').style.display = "none";
        document.getElementById('color-btn-title').style.display = "none";
        document.getElementById('primary-btn-title').style.display = "none";
        document.getElementById('glowing-btn-title').style.display = "block";
        document.getElementById('block-btn-title').style.display = "none";
        document.getElementById('download-btn-title').style.display = "none";
    }
    if (select.value == 4) {
        document.getElementById('normalbtn').style.display = "none";
        document.getElementById('colorbtn').style.display = "none";
        document.getElementById('primarybtn').style.display = "none";
        document.getElementById('glowbtn').style.display = "none";
        document.getElementById('blockbtn').style.display = "block";
        document.getElementById('downloadbtn').style.display = "none";
        //Codes
        document.getElementById('normal-btn-code').style.display = "none";
        document.getElementById('color-btn-code').style.display = "none";
        document.getElementById('primary-btn-code').style.display = "none";
        document.getElementById('glowing-btn-code').style.display = "none";
        document.getElementById('block-btn-code').style.display = "block";
        document.getElementById('download-btn-code').style.display = "none";
        //Titles
        document.getElementById('normal-btn-title').style.display = "none";
        document.getElementById('color-btn-title').style.display = "none";
        document.getElementById('primary-btn-title').style.display = "none";
        document.getElementById('glowing-btn-title').style.display = "none";
        document.getElementById('block-btn-title').style.display = "block";
        document.getElementById('download-btn-title').style.display = "none";
    }
    if (select.value == 5) {
        document.getElementById('normalbtn').style.display = "none";
        document.getElementById('colorbtn').style.display = "none";
        document.getElementById('primarybtn').style.display = "none";
        document.getElementById('glowbtn').style.display = "none";
        document.getElementById('blockbtn').style.display = "none";
        document.getElementById('downloadbtn').style.display = "block";
        //Codes
        document.getElementById('normal-btn-code').style.display = "none";
        document.getElementById('color-btn-code').style.display = "none";
        document.getElementById('primary-btn-code').style.display = "none";
        document.getElementById('glowing-btn-code').style.display = "none";
        document.getElementById('block-btn-code').style.display = "none";
        document.getElementById('download-btn-code').style.display = "block";
        //Titles
        document.getElementById('normal-btn-title').style.display = "none";
        document.getElementById('color-btn-title').style.display = "none";
        document.getElementById('primary-btn-title').style.display = "none";
        document.getElementById('glowing-btn-title').style.display = "none";
        document.getElementById('block-btn-title').style.display = "none";
        document.getElementById('download-btn-title').style.display = "block";
    }

}