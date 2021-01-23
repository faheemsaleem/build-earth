console.clear();

const html = document.documentElement;
const toggle = document.getElementById("toggle");
const circle = document.getElementById("bg-circle");
const circleWidth = circle.clientWidth;

// Math calculate to get Height, Width, Diagonal and Circle Radius

const getVpdr = () => {
    const vph = Math.pow(html.offsetHeight, 2); // Height
    const vpw = Math.pow(html.offsetWidth, 2); // Width
    const vpd = Math.sqrt(vph + vpw); // Diagonal
    return (vpd * 2) / circleWidth; // Circle radius
};

const openNavbar = () => {
    const openTimeline = new TimelineMax();
    openTimeline.to(".navbar-menu", 0, {
        display: "flex"
    });
    openTimeline.to(".main-section2", 0, {
        position: "fixed"
    });
    openTimeline.to(".second-toggle", 0, {
        position: "fixed"
    });
    openTimeline.to("#bg-circle", 1.5, {
        scale: getVpdr(),
        ease: Expo.easeInOut,
        
    });
     openTimeline.to(".menu-logo-circle", 1.8, {
        opacity: 1,
     });
    openTimeline.to(".menu-footer", 1, {
        opacity: 1,
    });
    openTimeline.staggerFromTo(
        ".navbar-menu ul li",
        0.5, {
            y: 25,
            opacity: 0
        }, {
            y: 0,
            opacity: 1
        },
        0.1,
        1
    );
};

const closeNavbar = () => {
    const closeTimeline = new TimelineMax();
    closeTimeline.staggerFromTo(
        ".navbar-menu ul li",
        0.5, {
            y: 0,
            opacity: 1,
            delay: 0.5
        }, {
            y: 25,
            opacity: 0
        },
        -0.1
    );
    closeTimeline.to("#bg-circle", 1, {
        scale: 0,
        ease: Expo.easeInOut,
        delay: -0.5
    });
    closeTimeline.to(".navbar-menu", 0, {
        display: "none"
    });
    closeTimeline.to(".main-section2", 0, {
        position: "absolute"
    });
    closeTimeline.to(".second-toggle", 0, {
        position: "absolute"
    });
    closeTimeline.to(".menu-logo-circle", 0, {
        opacity: 0,
        delay: -1
    });
    closeTimeline.to(".menu-footer", 0, {
        opacity: 0,
        delay: -1
    });
};

let isOpen = false;

toggle.onclick = function () {
    if (isOpen) {
        this.classList.remove("active");
        closeNavbar();
        document.getElementById('full-page').classList.remove("full-page-fixed")
    } else {
        this.classList.add("active");
        openNavbar();
        document.getElementById('full-page').classList.add("full-page-fixed")
    }
    isOpen = !isOpen;
};

// On windows resize, recalcule circle radius and update

window.onresize = () => {
    if (isOpen) {
        gsap.to("#bg-circle", 1, {
            scale: getVpdr(),
            ease: Expo.easeInOut
        });
    }
};



var basicScrollTop = function () { 
  // The button
  var btnTop = document.querySelector('#toggle');
  // Reveal the button
  var btnReveal = function () { 
    var position = document.querySelector('#position');
        // position.innerHTML = window.scrollY + 'px';
    if (window.scrollY >= 0) {
      btnTop.classList.add('is-visible');
    } else {
      btnTop.classList.remove('is-visible');
    }    
  }  
  // Smooth scroll top
  // Thanks to => http://stackoverflow.com/a/22610562
  var TopscrollTo = function () {
    if(window.scrollY!=0) {
      setTimeout(function() {
        window.scrollTo(0,window.scrollY-30);
        TopscrollTo();
      }, 5);
    }
  }
  // Listeners
  window.addEventListener('scroll', btnReveal);
  btnTop.addEventListener('click', TopscrollTo);  
    
};
basicScrollTop();





