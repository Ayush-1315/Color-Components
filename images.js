var main_Side=0;
function showDiv(select) {
    if (select.value == 0) {
        document.getElementById('responsive-img').style.display = "block";
        document.getElementById('responsive-des').style.display = "block";
        document.getElementById('Round').style.display = "none";
        document.getElementById('round-des').style.display = "none";
        document.getElementById('round-border').style.display = "none";
        document.getElementById('round-border-des').style.display = "none";
        document.getElementById('shadow-img').style.display = "none";
        document.getElementById('shadow-des').style.display = "none";
        document.getElementById('hover-des').style.display = "none";
        document.getElementById('hover-img').style.display = "none";
        // Codes
        document.getElementById('responsive-code').style.display = "block";
        document.getElementById('round-code').style.display = "none";
        document.getElementById('round-border-code').style.display = "none";
        document.getElementById('shadow-img-code').style.display = "none";
        document.getElementById('hover-img-code').style.display = "none";

    }
    else if (select.value == 1) {
        document.getElementById('Round').style.display = "block";
        document.getElementById('round-des').style.display = "block";
        document.getElementById('responsive-img').style.display = "none";
        document.getElementById('responsive-des').style.display = "none";
        document.getElementById('round-border').style.display = "none";
        document.getElementById('round-border-des').style.display = "none";
        document.getElementById('shadow-img').style.display = "none";
        document.getElementById('shadow-des').style.display = "none";
        document.getElementById('hover-des').style.display = "none";
        document.getElementById('hover-img').style.display = "none";
        // Codes
        document.getElementById('responsive-code').style.display = "none";
        document.getElementById('round-code').style.display = "block";
        document.getElementById('round-border-code').style.display = "none";
        document.getElementById('shadow-img-code').style.display = "none";
        document.getElementById('hover-img-code').style.display = "none";

    }
    else if (select.value == 2) {
        document.getElementById('round-border').style.display = "block";
        document.getElementById('round-border-des').style.display = "block";
        document.getElementById('Round').style.display = "none";
        document.getElementById('round-des').style.display = "none";
        document.getElementById('responsive-img').style.display = "none";
        document.getElementById('responsive-des').style.display = "none";
        document.getElementById('shadow-img').style.display = "none";
        document.getElementById('shadow-des').style.display = "none";
        document.getElementById('hover-des').style.display = "none";
        document.getElementById('hover-img').style.display = "none";
         // Codes
         document.getElementById('responsive-code').style.display = "none";
         document.getElementById('round-code').style.display = "none";
         document.getElementById('round-border-code').style.display = "block";
         document.getElementById('shadow-img-code').style.display = "none";
         document.getElementById('hover-img-code').style.display = "none";
    }
    else if (select.value == 3) {
        document.getElementById('shadow-img').style.display = "block";
        document.getElementById('shadow-des').style.display = "block";
        document.getElementById('round-border').style.display = "none";
        document.getElementById('round-border-des').style.display = "none";
        document.getElementById('Round').style.display = "none";
        document.getElementById('round-des').style.display = "none";
        document.getElementById('responsive-img').style.display = "none";
        document.getElementById('responsive-des').style.display = "none";
        document.getElementById('hover-des').style.display = "none";
        document.getElementById('hover-img').style.display = "none";
         // Codes
         document.getElementById('responsive-code').style.display = "none";
         document.getElementById('round-code').style.display = "none";
         document.getElementById('round-border-code').style.display = "none";
         document.getElementById('shadow-img-code').style.display = "block";
         document.getElementById('hover-img-code').style.display = "none";
    }
    else if (select.value == 4) {
        document.getElementById('hover-img').style.display = "block";
        document.getElementById('hover-des').style.display = "block";
        document.getElementById('shadow-img').style.display = "none";
        document.getElementById('shadow-des').style.display = "none";
        document.getElementById('round-border').style.display = "none";
        document.getElementById('round-border-des').style.display = "none";
        document.getElementById('Round').style.display = "none";
        document.getElementById('round-des').style.display = "none";
        document.getElementById('responsive-img').style.display = "none";
        document.getElementById('responsive-des').style.display = "none";
           // Codes
           document.getElementById('responsive-code').style.display = "none";
           document.getElementById('round-code').style.display = "none";
           document.getElementById('round-border-code').style.display = "none";
           document.getElementById('shadow-img-code').style.display = "none";
           document.getElementById('hover-img-code').style.display = "block";

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