var main_Side=0;
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
function showDiv(select) {
    if(select.value=="0")
    {
        // Previews
        document.getElementById('basic-modal-demo').style.display="block";
        document.getElementById('informative-modal-demo').style.display="none";
        document.getElementById('success-modal-demo').style.display="none";
        document.getElementById('subscribe-modal-demo').style.display="none";
        document.getElementById('advertise-modal-demo').style.display="none";
        // Codes
        document.getElementById('basic-modal-code').style.display="block";
        document.getElementById('informative-modal-code').style.display="none";
        document.getElementById('success-modal-code').style.display="none";
        document.getElementById('subscribe-modal-code').style.display="none";
        document.getElementById('advertise-modal-code').style.display="none";
        // Title
        document.getElementById('basic-modal-title').style.display="block";
        document.getElementById('informative-modal-title').style.display="none";
        document.getElementById('success-modal-title').style.display="none";
        document.getElementById('subscribe-modal-title').style.display="none";
        document.getElementById('advertise-modal-title').style.display="none";
        
    }
    else if(select.value=="1"){
        // Previews
        document.getElementById('basic-modal-demo').style.display="none";
        document.getElementById('informative-modal-demo').style.display="flex";
        document.getElementById('success-modal-demo').style.display="none";
        document.getElementById('subscribe-modal-demo').style.display="none";
        document.getElementById('advertise-modal-demo').style.display="none";
        // Codes
          document.getElementById('basic-modal-code').style.display="none";
          document.getElementById('informative-modal-code').style.display="block";
          document.getElementById('success-modal-code').style.display="none";
          document.getElementById('subscribe-modal-code').style.display="none";
          document.getElementById('advertise-modal-code').style.display="none";
       // Title
       document.getElementById('basic-modal-title').style.display="none";
       document.getElementById('informative-modal-title').style.display="block";
       document.getElementById('success-modal-title').style.display="none";
       document.getElementById('subscribe-modal-title').style.display="none";
       document.getElementById('advertise-modal-title').style.display="none";
    }
    else if(select.value=="2"){
       // Previews
       document.getElementById('basic-modal-demo').style.display="none";
       document.getElementById('informative-modal-demo').style.display="none";
       document.getElementById('success-modal-demo').style.display="flex";
       document.getElementById('subscribe-modal-demo').style.display="none";
       document.getElementById('advertise-modal-demo').style.display="none";
       // Codes
       document.getElementById('basic-modal-code').style.display="none";
       document.getElementById('informative-modal-code').style.display="none";
       document.getElementById('success-modal-code').style.display="block";
       document.getElementById('subscribe-modal-code').style.display="none";
       document.getElementById('advertise-modal-code').style.display="none";
     // Title
     document.getElementById('basic-modal-title').style.display="none";
     document.getElementById('informative-modal-title').style.display="none";
     document.getElementById('success-modal-title').style.display="block";
     document.getElementById('subscribe-modal-title').style.display="none";
     document.getElementById('advertise-modal-title').style.display="none";
    }
    else if(select.value=="3"){
       // Previews
       document.getElementById('basic-modal-demo').style.display="none";
       document.getElementById('informative-modal-demo').style.display="none";
       document.getElementById('success-modal-demo').style.display="none";
       document.getElementById('subscribe-modal-demo').style.display="flex";
       document.getElementById('advertise-modal-demo').style.display="none";
          // Codes
          document.getElementById('basic-modal-code').style.display="none";
          document.getElementById('informative-modal-code').style.display="none";
          document.getElementById('success-modal-code').style.display="none";
          document.getElementById('subscribe-modal-code').style.display="block";
          document.getElementById('advertise-modal-code').style.display="none";
       // Title
       document.getElementById('basic-modal-title').style.display="none";
       document.getElementById('informative-modal-title').style.display="none";
       document.getElementById('success-modal-title').style.display="none";
       document.getElementById('subscribe-modal-title').style.display="block";
       document.getElementById('advertise-modal-title').style.display="none";
    }
    else if(select.value=="4"){
       // Previews
       document.getElementById('basic-modal-demo').style.display="none";
       document.getElementById('informative-modal-demo').style.display="none";
       document.getElementById('success-modal-demo').style.display="none";
       document.getElementById('subscribe-modal-demo').style.display="none";
       document.getElementById('advertise-modal-demo').style.display="flex";
          // Codes
          document.getElementById('basic-modal-code').style.display="none";
          document.getElementById('informative-modal-code').style.display="none";
          document.getElementById('success-modal-code').style.display="none";
          document.getElementById('subscribe-modal-code').style.display="none";
          document.getElementById('advertise-modal-code').style.display="block";
        // Title
        document.getElementById('basic-modal-title').style.display="none";
        document.getElementById('informative-modal-title').style.display="none";
        document.getElementById('success-modal-title').style.display="none";
        document.getElementById('subscribe-modal-title').style.display="none";
        document.getElementById('advertise-modal-title').style.display="block";
    }
}