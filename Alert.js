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
// Copy Code
function copyToClipboard() {
    var range = document.createRange();
    range.selectNode(document.getElementById("copy-code"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}
// Display Code
function showDiv(select) {
    if (select.value == 0) {
        document.getElementById('normal-alrt-demo').style.display = "block";
        document.getElementById('close-alrt-demo').style.display = "none";
        document.getElementById('msg-alrt-demo').style.display = "none";
        //Codes
        document.getElementById('normal-alrt-code').style.display = "block";
        document.getElementById('close-alrt-code').style.display = "none";
        document.getElementById('msg-alrt-code').style.display = "none";
        //Titles
        document.getElementById('normal-alrt-title').style.display = "block";
        document.getElementById('close-alrt-title').style.display = "none";
        document.getElementById('msg-alrt-title').style.display = "none";

    }
    if (select.value == 1) {
        document.getElementById('normal-alrt-demo').style.display = "none";
        document.getElementById('close-alrt-demo').style.display = "block";
        document.getElementById('msg-alrt-demo').style.display = "none";
        //Codes
        document.getElementById('normal-alrt-code').style.display = "none";
        document.getElementById('close-alrt-code').style.display = "block";
        document.getElementById('msg-alrt-code').style.display = "none";
        //Titles
        document.getElementById('normal-alrt-title').style.display = "none";
        document.getElementById('close-alrt-title').style.display = "block";
        document.getElementById('msg-alrt-title').style.display = "none";
    }
    if (select.value == 2) {
        document.getElementById('normal-alrt-demo').style.display = "none";
        document.getElementById('close-alrt-demo').style.display = "none";
        document.getElementById('msg-alrt-demo').style.display = "block";
        //Codes
        document.getElementById('normal-alrt-code').style.display = "none";
        document.getElementById('close-alrt-code').style.display = "none";
        document.getElementById('msg-alrt-code').style.display = "block";
        //Titles
        document.getElementById('normal-alrt-title').style.display = "none";
        document.getElementById('close-alrt-title').style.display = "none";
        document.getElementById('msg-alrt-title').style.display = "block";
    }
}