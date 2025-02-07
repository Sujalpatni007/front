// Load the Lottie animation
var animation = lottie.loadAnimation({
    container: document.getElementById('loader'), 
    renderer: 'svg', 
    loop: true, 
    autoplay: true, 
    path: 'animation.json' 
});
window.addEventListener("load", function () {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 1000); // Hide after 2 seconds
});
