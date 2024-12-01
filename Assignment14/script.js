var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var img = new Image();
img.src = 'https://ctarchive.counseling.org/wp-content/uploads/2015/10/Depositphotos_28803213_l-2015.jpg'; 

img.onload = function() {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height); 
};
window.onload = function() {
    var centertedImage = document.getElementById('centeredImage');
    
    centeredImage.style.display = 'block';
    centeredImage.style.marginLeft = 'auto';
    centeredImage.style.marginRight = 'auto';
};
function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}