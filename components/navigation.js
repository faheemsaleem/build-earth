import React from "react";
import Head from "next/head";
const Navigation = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="./css/mainNav.css" />
        <link rel="stylesheet" href="./css/main.css" />
        <script
          defer
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossorigin="anonymous"
        ></script>
        <script
          defer
          src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
        ></script>
        <script
          defer
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"
        ></script>
        <script
          defer
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossorigin="anonymous"
        ></script>
        <script
          defer
          src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossorigin="anonymous"
        ></script>
        <script defer src="./js/nav.js"></script>
        <script defer src="./js/circle-canvas.js"></script>
        <script defer src="./js/loader.js"></script>
      </Head>
      <div class="container-fluid loader" id="preloader">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <img class="img-fluid crown" src="./img/Crown.png" alt="Crown" />
            </div>
          </div>
          <div class="row no-gutters loader-imgs">
            <div class="col-md-4 col-sm-4 col-xs-4 lion-one">
              <img
                class="img-fluid lion-left"
                src="./img/Lion Left.png"
                alt="Lion Left"
              />
            </div>
            <div class="col-md-4 col-sm-4 col-xs-4 circle-crown">
              <img class="img-fluid circle" src="./img/cLE.png" alt="Circle" />
            </div>
            <div class="col-md-4 col-sm-4 col-xs-4 lion-two">
              <img
                class="img-fluid lion-right"
                src="./img/Lion Right.png"
                alt="Lion Right"
              />
            </div>
            <div class="mx-auto text-center mt-2">
              <img
                class="img-fluid build-earth-text"
                src="./img/build-earth.png"
                alt="Build Earth"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="wrapper">
        <button class="navbar-toggle" id="toggle" type="button">
          <header class="header">
            <div class="header__logo  js-replace">
              <div class="js-replace__item">
                <div class="js-replace__content">
                  <svg viewBox="0 0 100 100" width="80">
                    <path
                      class="line top"
                      d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
                    />
                    <path class="line middle" d="m 30,50 h 40" />
                  </svg>
                </div>
              </div>
            </div>
          </header>
        </button>

        <div class="navbar-menu">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <ul>
                  <li>
                    <a href="./index.html">Home</a>
                  </li>
                  <li>
                    <a href="./pages/about.html">About</a>
                  </li>
                  <li>
                    <a href="./pages/services.html">Services</a>
                  </li>
                  <li>
                    <a href="./pages/allProjects.html">Projects</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <div class="menu-logo-circle">
                  <img
                    class="img-fluid"
                    src="./img/menu/Logo Circle.svg"
                    alt="Logo Circle"
                  />
                </div>
                <ul class="all-society">
                  <li id="el-1">
                    <a href="./pages/AlJalilGarden.html">Al Jalil Garden</a>
                    <img
                      class="img-fluid menu-img-1"
                      src="./img/news/News 1.png"
                      alt="Al Jalil Garden"
                    />
                  </li>
                  <li id="el-1">
                    <a href="./pages/AlNoorOrchard.html">Al Noor Orchard</a>
                    <img
                      class="img-fluid menu-img-1"
                      src="./img/news/News 2.png"
                      alt="Al Noor Orchard"
                    />
                  </li>
                  <li id="el-1">
                    <a href="./pages/WestMarina.html">West Marina</a>
                    <img
                      class="img-fluid menu-img-1"
                      src="./img/news/News 4.png"
                      alt="West Marina"
                    />
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <ul>
                  <li>
                    <a href="./pages/news.html">News</a>
                  </li>
                  <li>
                    <a href="./pages/videoGallery/builder-video.html">Videos</a>
                  </li>
                  <li>
                    <a href="./pages/gallery/builder-gallery.html">Gallery</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="container-fluid footer-section menu-footer">
            <div class="row">
              <div class="col-md-12 footer-detail">
                <div class="social-links">
                  <a href="#">
                    <img
                      class="img-fluid facebook-icon"
                      src="./img/aljalil/facebook.svg"
                      alt="Facebook"
                    />
                  </a>
                  <a href="#">
                    <img
                      class="img-fluid"
                      src="./img/aljalil/instagram.svg"
                      alt="Instagram"
                    />
                  </a>
                  <a href="#">
                    <img
                      class="img-fluid"
                      src="./img/aljalil/twitter.svg"
                      alt="Twitter"
                    />
                  </a>
                  <a href="#">
                    <img
                      class="img-fluid"
                      src="./img/aljalil/youtube.svg"
                      alt="Youtube"
                    />
                  </a>
                  <a href="#">
                    <img
                      class="img-fluid"
                      src="./img/aljalil/linkedin.svg"
                      alt="LinkeDin"
                    />
                  </a>
                  <a href="#">
                    <img
                      class="img-fluid"
                      src="./img/aljalil/whatsapp.svg"
                      alt="WhatsApp"
                    />
                  </a>
                </div>
                <div class="find-property-small">
                  <a href="#" class="find-property">
                    <img
                      class="img-fluid pin"
                      src="./img/aljalil/Pin.svg"
                      alt="PIN"
                    />
                    FIND PROPERTY
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="bg-circle"></div>
      </div>
    </>
  );
};

export default Navigation;
