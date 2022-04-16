
// Function
function selece_intro_bg() {
    let intro_div = document.querySelector('.intro');
    var screen_width = screen.width
    if (screen_width > 1400) {
        intro_div.style.background = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url('https://pixabay.com/get/g5410fdb4931873dfab6f621227003a1525e3c13616fa2775a79062432c11934d70b48dbe995627d01bbd9485f5740a56933880847ca89b2d75ba444d23b34bf045e2248d1c65a1d629661c2bf52737be_1920.jpg') no-repeat center / cover";
    }
    else if (screen_width > 800) {
        intro_div.style.background = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url('https://pixabay.com/get/g6743c3462fd0c3713711d4bcbb4ceacf4d423701ccd36c5e70361511711592b77be71e28e1d73ec2c7c2ab13f6db3901d99becde7bf6918e3a3b7446fcbcde92b54119ccfdc11daf1a545a850319b5da_1280.jpg') no-repeat center / cover";
    }
    else {
        intro_div.style.background = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url('https://pixabay.com/get/gb470005fc6faa53147083593b42695641d255c8255af7a538a5b8fcda2b6934821d9c7cfefc8659860ee29a12d8ff52da09eb4f45eb5f7546e22c3f7b296f4e2448a2667acc7ff04875aa7bdf362ef06_640.jpg') no-repeat center / cover";
    }
}
function demo_msg() {
    document.getElementById('demo').innerHTML = 'hi';
}
// .....................................................................

// Load Function
// window.onpaint = selece_intro_bg();
// window.onresize = demo_msg;
// .....................................................................

// src="https://code.jquery.com/jquery-2.2.4.min.js"
// integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
// crossorigin="anonymous">


// $(window).scroll(function() {
//   parallax();
// })
// function parallax() {

//   var wScroll = $(window).scrollTop()

//   $('.parallax--bg').css('background-position', 'center ' + (wScroll*0.75)+'px');

//   // $('.parallax--box').css('top', -5 + (wScroll*.005)+'em')
// }


// let parallax = document.querySelector('.parallax');

// window.onscroll = () => {
//     let scrollTop = document.documentElement.scrollTop;
//     // parallax.style.backgroundPositionY = scrollTop * 0.7 + 'px';
//     console.log(scrollTop);
//     document.getElementsByClassName('parallax').style.backgroundPositionY = "top right";
//     // document.getElementsByClassName('parallax').style.backgroundPosition = scrollTop;
// }




var root = document.querySelector(':root');
function root_var() {
    var window_width = screen.width;
    var window_height = screen.height;
    var percent_adjust = 99;
    var adjusted_in_px = window_width * (percent_adjust / 100);
    var adjusted_in_percent = (adjusted_in_px / window_width) * 100 + '%';
    var generate_height = adjusted_in_px * 1.4 + 'px';

    var w_divides_h = window_height / window_width;
    var h_divides_w = window_width / window_height;
    var wh_subtract_hw = parseFloat(h_divides_w - w_divides_h);

    if (wh_subtract_hw > 0) {
        root.style.setProperty('--brands_lookup_height', "50px");
    }
    else {
        root.style.setProperty('--brands_lookup_width', adjusted_in_percent);
    }
    var root_select = getComputedStyle(root);
    var brands_lookup_width = root_select.getPropertyValue('--brands_lookup_width');
    document.getElementById('demo').innerHTML = 'Before: ' + brands_lookup_width + '<br>' + wh_subtract_hw;
}

// window.onresize = root_var;



















// Function
function selece_intro_bg() {
    let intro_div = document.querySelector('.intro');
    var screen_width = screen.width;
    var screen_height = screen.height;
    var screen_dim = screen_width + ' x '+ screen_height;
    var ra = screen_width / screen_height;
    if (ra < 0.65){//Mobile
        if (screen_width > 2600) {
            intro_div.style.background = "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url(main_bg/potraid original.jpg) no-repeat center / cover";
        }           
        else if (screen_width <= 2600 && screen_width > 2000) {
            intro_div.style.background = "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url('main_bg/potraid 2560.jpg') no-repeat center / cover";
        }
        else if (screen_width >= 2000) {
            intro_div.style.background = "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url('main_bg/potraid 1920.jpg') no-repeat center / cover";
        }
        else if (screen_width >= 1500) {
            intro_div.style.background = "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url('main_bg/potraid 1440.jpg') no-repeat center / cover";
        }
        else if (screen_width >= 1150) {
            intro_div.style.background = "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url('main_bg/potraid 1080.jpg') no-repeat center / cover";
        }
        else if (screen_width >= 800) {
            intro_div.style.background = "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url('main_bg/potraid 720.jpg') no-repeat center / cover";
        }
        else if (screen_width >= 1) {
            intro_div.style.background = "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url('main_bg/potraid 480.jpg') no-repeat center / cover";
        }
    }
    else if (ra > 0.65 && ra < 1.3){//Tablet
        if (screen_width > 2600) {
            intro_div.style.background = "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url('main_bg/square original.jpg') no-repeat center / cover";
        }           
        else if (screen_width <= 2600 && screen_width > 2000) {
            intro_div.style.background = "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url('main_bg/square 2560.jpg') no-repeat center / cover";
        }
        else if (screen_width >= 2000) {
            intro_div.style.background = "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url('main_bg/square 1920.jpg') no-repeat center / cover";
        }
        else if (screen_width >= 1500) {
            intro_div.style.background = "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url('main_bg/square 1440.jpg') no-repeat center / cover";
        }
        else if (screen_width >= 1150) {
            intro_div.style.background = "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url('main_bg/square 1080.jpg') no-repeat center / cover";
        }
        else if (screen_width >= 800) {
            intro_div.style.background = "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url('main_bg/square 720.jpg') no-repeat center / cover";
        }
        else if (screen_width >= 1) {
            intro_div.style.background = "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url('main_bg/square 480.jpg') no-repeat center / cover";
        }
    }
    else if (ra >= 1.3){//Desktop
        if (screen_width > 2600) {
            intro_div.style.background = "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url('main_bg/landscape original.jpg') no-repeat center / cover";
        }           
        else if (screen_width <= 2600 && screen_width > 2000) {
            intro_div.style.background = "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url('main_bg/landscape 2560.jpg') no-repeat center / cover";
        }
        else if (screen_width >= 2000) {
            intro_div.style.background = "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url('main_bg/landscape 1920.jpg') no-repeat center / cover";
        }
        else if (screen_width >= 1500) {
            intro_div.style.background = "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url('main_bg/landscape 1440.jpg') no-repeat center / cover";
        }
        else if (screen_width >= 1150) {
            intro_div.style.background = "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url('main_bg/landscape 1080.jpg') no-repeat center / cover";
        }
        else if (screen_width >= 800) {
            intro_div.style.background = "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url('main_bg/landscape 720.jpg') no-repeat center / cover";
        }
        else if (screen_width >= 1) {
            intro_div.style.background = "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url('main_bg/landscape 480.jpg') no-repeat center / cover";
        }
    }
}
// .....................................................................
// Load Function
window.onpaint = selece_intro_bg();
window.onresize = selece_intro_bg;