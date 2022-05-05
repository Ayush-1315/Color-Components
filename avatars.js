var main_Side = 0;
// Display Code
function showDiv(select) {
    if(select.value==0){
        document.getElementById("Tablet-demo").style.display="flex";
        document.getElementById("tablet-des").style.display="block";
        document.getElementById("Round-ava-demo").style.display="none";
        document.getElementById("Round-ava-des").style.display="none";
        document.getElementById("Img-ava-demo").style.display="none";
        document.getElementById("Img-ava-des").style.display="none";
        document.getElementById("Border-ava-demo").style.display="none";
        document.getElementById("Border-ava-demo").style.flexwrap="wrap";
        document.getElementById("Border-ava-des").style.display="none";
        document.getElementById("Hover-ava-demo").style.display="none";
        document.getElementById("Hover-ava-demo").style.flexwrap="wrap";
        document.getElementById("Hover-ava-des").style.display="none";
        //CODES
        document.getElementById("tablet-code").style.display="block";
        document.getElementById("Round-ava-code").style.display="none";
        document.getElementById("Img-ava-code").style.display="none";
        document.getElementById("Border-ava-code").style.display="none";
        document.getElementById("Hover-ava-code").style.display="none";

    }
    else if(select.value==1){
        document.getElementById("Tablet-demo").style.display="none";
        document.getElementById("tablet-des").style.display="none";
        document.getElementById("Round-ava-demo").style.display="flex";
        document.getElementById("Round-ava-des").style.display="block";
        document.getElementById("Img-ava-demo").style.display="none";
        document.getElementById("Img-ava-des").style.display="none";
        document.getElementById("Border-ava-demo").style.display="none";
        document.getElementById("Border-ava-demo").style.flexwrap="wrap";
        document.getElementById("Border-ava-des").style.display="none";
        document.getElementById("Hover-ava-demo").style.display="none";
        document.getElementById("Hover-ava-demo").style.flexwrap="wrap";
        document.getElementById("Hover-ava-des").style.display="none";
       
        //CODES
        document.getElementById("tablet-code").style.display="none";
        document.getElementById("Round-ava-code").style.display="block";
        document.getElementById("Img-ava-code").style.display="none";
        document.getElementById("Border-ava-code").style.display="none";
        document.getElementById("Hover-ava-code").style.display="none";
    }
    else if(select.value==2){
        document.getElementById("Tablet-demo").style.display="none";
        document.getElementById("tablet-des").style.display="none";
        document.getElementById("Round-ava-demo").style.display="none";
        document.getElementById("Round-ava-des").style.display="none";
        document.getElementById("Img-ava-demo").style.display="flex";
        document.getElementById("Img-ava-demo").style.flexwrap="wrap";
        document.getElementById("Img-ava-des").style.display="block";
        document.getElementById("Border-ava-demo").style.display="none";
        document.getElementById("Border-ava-demo").style.flexwrap="wrap";
        document.getElementById("Border-ava-des").style.display="none";
        document.getElementById("Hover-ava-demo").style.display="none";
        document.getElementById("Hover-ava-demo").style.flexwrap="wrap";
        document.getElementById("Hover-ava-des").style.display="none";

        //CODES
        document.getElementById("tablet-code").style.display="none";
        document.getElementById("Round-ava-code").style.display="none";
        document.getElementById("Img-ava-code").style.display="block";
        document.getElementById("Border-ava-code").style.display="none";
        document.getElementById("Hover-ava-code").style.display="none";
    }
    else if(select.value==3){
        document.getElementById("Tablet-demo").style.display="none";
        document.getElementById("tablet-des").style.display="none";
        document.getElementById("Round-ava-demo").style.display="none";
        document.getElementById("Round-ava-des").style.display="none";
        document.getElementById("Img-ava-demo").style.display="none";
        document.getElementById("Img-ava-demo").style.flexwrap="wrap";
        document.getElementById("Img-ava-des").style.display="none";
        document.getElementById("Border-ava-demo").style.display="flex";
        document.getElementById("Border-ava-demo").style.flexwrap="wrap";
        document.getElementById("Border-ava-des").style.display="block";
        document.getElementById("Hover-ava-demo").style.display="none";
        document.getElementById("Hover-ava-demo").style.flexwrap="wrap";
        document.getElementById("Hover-ava-des").style.display="none";
         //CODES
         document.getElementById("tablet-code").style.display="none";
         document.getElementById("Round-ava-code").style.display="none";
         document.getElementById("Img-ava-code").style.display="none";
         document.getElementById("Border-ava-code").style.display="block";
         document.getElementById("Hover-ava-code").style.display="none";
    }
    else if(select.value==4){
        document.getElementById("Tablet-demo").style.display="none";
        document.getElementById("tablet-des").style.display="none";
        document.getElementById("Round-ava-demo").style.display="none";
        document.getElementById("Round-ava-des").style.display="none";
        document.getElementById("Img-ava-demo").style.display="none";
        document.getElementById("Img-ava-demo").style.flexwrap="wrap";
        document.getElementById("Img-ava-des").style.display="none";
        document.getElementById("Border-ava-demo").style.display="none";
        document.getElementById("Border-ava-demo").style.flexwrap="wrap";
        document.getElementById("Border-ava-des").style.display="none";
        document.getElementById("Hover-ava-demo").style.display="flex";
        document.getElementById("Hover-ava-demo").style.flexwrap="wrap";
        document.getElementById("Hover-ava-des").style.display="block";

        //CODES
        document.getElementById("tablet-code").style.display="none";
        document.getElementById("Round-ava-code").style.display="none";
        document.getElementById("Img-ava-code").style.display="none";
        document.getElementById("Border-ava-code").style.display="none";
        document.getElementById("Hover-ava-code").style.display="block";
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
//Side Menu

function mainSide() {
    if (main_Side == 0 && screen.width>=280 && screen.width<=480) {
        document.getElementById('side').style.width = "100vw";
        document.getElementById('side-list').style.display = "block";
        main_Side = 1;
    }
    else if(screen.width>=280 && screen.width<=480) {
        document.getElementById('side').style.width = "0";
        document.getElementById('side-list').style.display = "none";
        main_Side = 0;
    }
    else if (main_Side == 0 && screen.width>=481 && screen.width<=1024) {
        document.getElementById('side').style.width = "35vw";
        document.getElementById('side-list').style.display = "block";
        document.getElementById('page-cont').style.width = "65vw";
        main_Side = 1;
    }
    else if(screen.width>=481 && screen.width<=1024) {
        document.getElementById('side').style.width = "0";
        document.getElementById('side-list').style.display = "none";
        document.getElementById('page-cont').style.width = "100vw";
        main_Side = 0;
    }
    else if (main_Side == 0 && screen.width>=1025) {
        document.getElementById('side').style.width = "15vw";
        document.getElementById('side-list').style.display = "block";
        main_Side = 1;
    }
    else if(screen.width>=1025) {
        document.getElementById('side').style.width = "0";
        document.getElementById('side-list').style.display = "none";
        main_Side = 0;
    }

}