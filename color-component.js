let color=["red","green","yellow"];
let color_index=0;
setInterval(setColor,2000);
function setColor(){
document.getElementById('land-name').style.color=color[color_index];
if (color_index==2){
    color_index=0;
}
else{
    color_index+=1;
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
