

let bleep = new Audio();
bleep.src = "audio/95fbe608887ed16 (mp3cut.net).mp3";

let click = new Audio();
click.src = "audio/fast-blow-moving-whoosh_gkjtirvu.mp3";





let icon = document.getElementById("icon");

icon.onclick=function (){
    document.body.classList.toggle("white-theme");
    if(document.body.classList.contains("white-theme")){
        icon.src = "обложки/dark theme icon/moon.png";
    }else{
        icon.src = "обложки/dark theme icon/sun.png";
    }
}

$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    // setting owl carousel

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]


    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav:true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    })

    $('#top-ani-slide').owlCarousel({
        items: 2,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            500: {
                items: 3
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })

    $('.movies-slide').owlCarousel({
        items: 2,
        dots: false,
        nav:true,
        navText: navText,
        margin: 15,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })
})