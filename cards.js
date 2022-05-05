var main_Side=0;
function copyToClipboard() {
    var range = document.createRange();
    range.selectNode(document.getElementById("copy-code"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}
function showDiv(select) {
    if(select.value=="0")
    {
        // Previews
        document.getElementById('basic-card-demo').style.display="block";
        document.getElementById('overtext-card-demo').style.display="none";
        document.getElementById('header-card-demo').style.display="none";
        document.getElementById('horizontal-card-demo').style.display="none";
        // Codes
        document.getElementById('basic-card-code').style.display="block";
        document.getElementById('text-over-card-code').style.display="none";
        document.getElementById('header-card-code').style.display="none";
        document.getElementById('horizontal-card-code').style.display="none";
        // Title
        document.getElementById('basic-card-title').style.display="block";
        document.getElementById('overtext-card-title').style.display="none";
        document.getElementById('header-card-title').style.display="none";
        document.getElementById('horizontal-card-title').style.display="none";
        
    }
    else if(select.value=="1"){
        // Previews
        document.getElementById('basic-card-demo').style.display="none";
        document.getElementById('overtext-card-demo').style.display="flex";
        document.getElementById('header-card-demo').style.display="none";
        document.getElementById('horizontal-card-demo').style.display="none";
        // Codes
          // Codes
          document.getElementById('basic-card-code').style.display="none";
          document.getElementById('text-over-card-code').style.display="block";
          document.getElementById('header-card-code').style.display="none";
          document.getElementById('horizontal-card-code').style.display="none";
        // Title
        document.getElementById('basic-card-title').style.display="none";
        document.getElementById('overtext-card-title').style.display="block";
        document.getElementById('header-card-title').style.display="none";
        document.getElementById('horizontal-card-title').style.display="none";
    }
    else if(select.value=="2"){
        // Previews
        document.getElementById('basic-card-demo').style.display="none";
        document.getElementById('overtext-card-demo').style.display="none";
        document.getElementById('header-card-demo').style.display="flex";
        document.getElementById('horizontal-card-demo').style.display="none";
          // Codes
          document.getElementById('basic-card-code').style.display="none";
          document.getElementById('text-over-card-code').style.display="none";
          document.getElementById('header-card-code').style.display="block";
          document.getElementById('horizontal-card-code').style.display="none";
        // Title
        document.getElementById('basic-card-title').style.display="none";
        document.getElementById('overtext-card-title').style.display="none";
        document.getElementById('header-card-title').style.display="block";
        document.getElementById('horizontal-card-title').style.display="none";
    }
    else if(select.value=="3"){
        // Previews
        document.getElementById('basic-card-demo').style.display="none";
        document.getElementById('overtext-card-demo').style.display="none";
        document.getElementById('header-card-demo').style.display="none";
        document.getElementById('horizontal-card-demo').style.display="flex";
          // Codes
          document.getElementById('basic-card-code').style.display="none";
          document.getElementById('text-over-card-code').style.display="none";
          document.getElementById('header-card-code').style.display="none";
          document.getElementById('horizontal-card-code').style.display="block";
        // Title
        document.getElementById('basic-card-title').style.display="none";
        document.getElementById('overtext-card-title').style.display="none";
        document.getElementById('header-card-title').style.display="none";
        document.getElementById('horizontal-card-title').style.display="block";
    }
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