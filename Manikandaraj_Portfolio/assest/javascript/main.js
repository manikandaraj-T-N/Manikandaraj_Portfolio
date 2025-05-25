document.addEventListener('DOMContentLoaded', () => {
    const currentYear = document.getElementById('current-year');
    currentYear.innerHTML = new Date().getFullYear();

    const header = document.getElementById('header');
    const headerHeight = header.offsetHeight;
    const progressoffset = document.getElementById('myBar').offsetHeight

    // Adjust the scroll offset to account for the fixed header
    document.querySelectorAll('nav li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetID = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetID);
            window.scrollTo({
                top: (targetElement.offsetTop - header.offsetHeight - progressoffset),
                behavior: "smooth",
            })
        })
    })

});

const toggleSwitch = document.getElementById("toggle-switch");
const toggleButton = document.getElementById("toggle-button")
let isON = "0%"
toggleSwitch.addEventListener("click", function () {

    if (isON == "0%") {
        toggleButton.style.left = "50%";
        isON = "50%"
        document.body.style.backgroundColor = "white";
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
    }
    else {
        toggleButton.style.left = "0%";
        isON = "0%"
        document.body.style.backgroundColor = "black";
        document.body.classList.add("dark-theme"); 
        document.body.classList.remove("light-theme");
    }

})

document.getElementById("name").addEventListener('input', function () {
    this.value = this.value.toUpperCase();
})



window.addEventListener('scroll', function () {
    const body = document.body;
    const html = document.documentElement;

    const documentHeight = Math.max(
        body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight
    );

    const scrollTop = window.scrollY;
    const scrollDown = documentHeight - window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollableHeight = documentHeight - windowHeight;

    const scrollPercentage = (scrollTop / scrollableHeight) * 100;

    const progressBar = document.getElementById('myBar');
    progressBar.style.width = scrollPercentage + '%'
})

