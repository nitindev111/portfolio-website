function toggleMenu() {
    console.log('called');
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function viewResume() {
    document.getElementById('overlay').style.display = "flex"
    document.body.style.overflow = "hidden"
}

function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
    document.body.style.overflow = "scroll"

}

function downloadResume(url) {
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Nitin_Dev_Frontend_Resume.pdf';
    a.click();
}
