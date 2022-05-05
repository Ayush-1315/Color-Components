var main_Side=0;
function showDiv(select) {
    if (select.value == 0) {
        document.getElementById('plain-chips').style.display = "flex";
        document.getElementById('action-chips').style.display = "none";
        document.getElementById('image-chips').style.display = "none";
        document.getElementById('outline-chips').style.display = "none";
        //Codes
        document.getElementById('plain-chips-code').style.display = "block";
        document.getElementById('action-chips-code').style.display = "none";
        document.getElementById('image-chips-code').style.display = "none";
        document.getElementById('outline-chips-code').style.display = "none";
        //Titles
        document.getElementById('plain-chips-title').style.display = "block";
        document.getElementById('action-chips-title').style.display = "none";
        document.getElementById('image-chips-title').style.display = "none";
        document.getElementById('outline-chips-title').style.display = "none";

    }
    if (select.value == 1) {
        document.getElementById('plain-chips').style.display = "none";
        document.getElementById('action-chips').style.display = "flex";
        document.getElementById('image-chips').style.display = "none";
        document.getElementById('outline-chips').style.display = "none";
        //Codes
        document.getElementById('plain-chips-code').style.display = "none";
        document.getElementById('action-chips-code').style.display = "block";
        document.getElementById('image-chips-code').style.display = "none";
        document.getElementById('outline-chips-code').style.display = "none";
        //Titles
        document.getElementById('plain-chips-title').style.display = "none";
        document.getElementById('action-chips-title').style.display = "block";
        document.getElementById('image-chips-title').style.display = "none";
        document.getElementById('outline-chips-title').style.display = "none";
    }
    if (select.value == 2) {
        document.getElementById('plain-chips').style.display = "none";
        document.getElementById('action-chips').style.display = "none";
        document.getElementById('image-chips').style.display = "flex";
        document.getElementById('outline-chips').style.display = "none";
        //Codes
        document.getElementById('plain-chips-code').style.display = "none";
        document.getElementById('action-chips-code').style.display = "none";
        document.getElementById('image-chips-code').style.display = "block";
        document.getElementById('outline-chips-code').style.display = "none";
        //Titles
        document.getElementById('plain-chips-title').style.display = "none";
        document.getElementById('action-chips-title').style.display = "none";
        document.getElementById('image-chips-title').style.display = "block";
        document.getElementById('outline-chips-title').style.display = "none";
    }
    if (select.value == 3) {
        document.getElementById('plain-chips').style.display = "none";
        document.getElementById('action-chips').style.display = "none";
        document.getElementById('image-chips').style.display = "none";
        document.getElementById('outline-chips').style.display = "flex";
        //Codes
        document.getElementById('plain-chips-code').style.display = "none";
        document.getElementById('action-chips-code').style.display = "none";
        document.getElementById('image-chips-code').style.display = "none";
        document.getElementById('outline-chips-code').style.display = "block";
        //Titles
        document.getElementById('plain-chips-title').style.display = "none;"
        document.getElementById('action-chips-title').style.display = "none";
        document.getElementById('image-chips-title').style.display = "none";
        document.getElementById('outline-chips-title').style.display = "block";
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