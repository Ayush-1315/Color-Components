var main_Side = 0;
var side_nav = 1;
var side_nav_demo = 1;
var top_nav = 0;
var search_nav = 0;
document.getElementById('nav-down').style.height = "0%";
document.getElementById('down-nav-list').style.display = "none";
//Demonstration 
function slideNav() {
    if (side_nav == 0) {
        document.getElementById('nav-side').style.width = "25rem";
        document.getElementById('side-nav-list').style.display = "flex";
        side_nav = 1;
    }
    else {
        document.getElementById('nav-side').style.width = "0";
        document.getElementById('side-nav-list').style.display = "none";
        side_nav = 0;
    }
}
function slideNavDemo() {
    if (side_nav_demo == 0) {
        document.getElementById('nav-side-demo').style.width = "25rem";
        document.getElementById('side-nav-list').style.display = "flex";
        side_nav_demo = 1;
    }
    else {
        document.getElementById('nav-side-demo').style.width = "0";
        document.getElementById('side-nav-list').style.display = "none";
        side_nav_demo = 0;
    }
}
function downNav() {
    if (top_nav == 0) {
        document.getElementById('nav-down').style.height = "92%";
        document.getElementById('down-nav-list').style.display = "flex";
        top_nav = 1;
    }
}
function closeNav() {
    if (top_nav == 1) {
        document.getElementById('nav-down').style.height = "0%";
        document.getElementById('down-nav-list').style.display = "none";
        top_nav = 0;
    }
}
function showSearch() {
    if (search_nav == 0) {
        document.getElementById('search-page').style.width = "25rem";
        search_nav = 1;
    }
    else {
        search_nav = 0;
        hideSearch();
    }
}
function hideSearch() {
    document.getElementById('search-page').style.width = "0";
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
function copyToClipboardJS() {
    var range = document.createRange();
    range.selectNode(document.getElementById("copy-JS-code"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}
// Responsive Page

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
// Display Code
function showDiv(select) {
    if (select.value == 0) {
        document.getElementById('basic-nav-demo').style.display = "flex";
        document.getElementById('side-nav-demo').style.display = "none";
        document.getElementById('top-nav-demo').style.display = "none";
        document.getElementById('search-nav-demo').style.display = "none";
        //Codes
        document.getElementById('basic-nav-code').style.display = "block";
        document.getElementById('side-navigation-code').style.display = "none";
        document.getElementById('top-navigation-code').style.display = "none";
        document.getElementById('search-nav-code').style.display = "none";
        //JS Codes
        document.getElementById('side-nav-JS').style.display = "none";
        document.getElementById('top-nav-JS').style.display = "none";
        document.getElementById('search-nav-JS').style.display = "none";
        //Titles
        document.getElementById('basic-nav-title').style.display = "block";
        document.getElementById('side-nav-title').style.display = "none";
        document.getElementById('top-nav-title').style.display = "none";
        document.getElementById('search-nav-title').style.display = "none";

    }
    if (select.value == 1) {
        document.getElementById('basic-nav-demo').style.display = "none";
        document.getElementById('side-nav-demo').style.display = "block";
        document.getElementById('top-nav-demo').style.display = "none";
        document.getElementById('search-nav-demo').style.display = "none";
        //Codes
        document.getElementById('basic-nav-code').style.display = "none";
        document.getElementById('side-navigation-code').style.display = "block";
        document.getElementById('top-navigation-code').style.display = "none";
        document.getElementById('search-nav-code').style.display = "none";
        //JS Codes
        document.getElementById('side-nav-JS').style.display = "block";
        document.getElementById('top-nav-JS').style.display = "none";
        document.getElementById('search-nav-JS').style.display = "none";
        //Titles
        document.getElementById('basic-nav-title').style.display = "none";
        document.getElementById('side-nav-title').style.display = "block";
        document.getElementById('top-nav-title').style.display = "none";
        document.getElementById('search-nav-title').style.display = "none";
    }
    if (select.value == 2) {
        document.getElementById('basic-nav-demo').style.display = "none";
        document.getElementById('side-nav-demo').style.display = "none";
        document.getElementById('top-nav-demo').style.display = "block";
        document.getElementById('search-nav-demo').style.display = "none";
        //Codes
        document.getElementById('basic-nav-code').style.display = "none";
        document.getElementById('side-navigation-code').style.display = "none";
        document.getElementById('top-navigation-code').style.display = "block";
        document.getElementById('search-nav-code').style.display = "none";
        //JS Codes
        document.getElementById('side-nav-JS').style.display = "none";
        document.getElementById('top-nav-JS').style.display = "block";
        document.getElementById('search-nav-JS').style.display = "none";
        //Titles
        document.getElementById('basic-nav-title').style.display = "none";
        document.getElementById('side-nav-title').style.display = "none";
        document.getElementById('top-nav-title').style.display = "block";
        document.getElementById('search-nav-title').style.display = "none";
    }
    if (select.value == 3) {
        document.getElementById('basic-nav-demo').style.display = "none";
        document.getElementById('side-nav-demo').style.display = "none";
        document.getElementById('top-nav-demo').style.display = "none";
        document.getElementById('search-nav-demo').style.display = "flex";
        //Codes
        document.getElementById('basic-nav-code').style.display = "none";
        document.getElementById('side-navigation-code').style.display = "none";
        document.getElementById('top-navigation-code').style.display = "none";
        document.getElementById('search-nav-code').style.display = "block";
        //JS Codes
        document.getElementById('side-nav-JS').style.display = "none";
        document.getElementById('top-nav-JS').style.display = "none";
        document.getElementById('search-nav-JS').style.display = "block";
        //Titles
        document.getElementById('basic-nav-title').style.display = "none";
        document.getElementById('side-nav-title').style.display = "none";
        document.getElementById('top-nav-title').style.display = "none";
        document.getElementById('search-nav-title').style.display = "block";
    }

}