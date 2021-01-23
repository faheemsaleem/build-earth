import React from "react";

const HomePage = () => {
  return (
    <>
      <div id="full-page">
        <div class="container-fluid main-section">
          <div class="row">
            <div class="col-md-12 header-section">
              <span></span>
              <a href="./index.html" class="builder-logo-link">
                <img
                  class="img-fluid builder-logo"
                  src="./img/Logo.svg"
                  alt="Build Earth Logo"
                />
              </a>
              <p class="head-quick-tour hide-tour">
                <a href="#">QUICK TOUR</a>
              </p>
              <p class="head-quick-tour small-screen-tour">
                <a href="#">TOURS</a>
              </p>
            </div>
          </div>
        </div>

        <div class="container-fluid main-page">
          <div class="container bg-logo">
            <div class="row">
              <a href="./pages/allProjects.html" class="view-projects-link">
                <p class="view-projects">View All Projects</p>
              </a>
              <div class="col-md-12 text-center pt-3">
                <img
                  class="img-fluid light-crown"
                  src="./img/aljalil/Crown.svg"
                  alt="Light Crown"
                />
              </div>
            </div>
            <div class="row no-gutters pt-3">
              <div class="col-md-4 col-sm-4 col-xs-4 light-lion-one">
                <img
                  class="img-fluid light-lion-left"
                  src="./img/aljalil/Left Lion.svg"
                  alt="Light Lion Left"
                />
              </div>
              <div class="col-md-4 col-sm-4 col-xs-4 light-circle-crown">
                <img
                  class="img-fluid light-circle"
                  src="./img/aljalil/Logo Circle.svg"
                  alt="Light Circle"
                />
              </div>
              <div class="col-md-4 col-sm-4 col-xs-4 light-lion-two">
                <img
                  class="img-fluid light-lion-right"
                  src="./img/aljalil/Right Lion.svg"
                  alt="Light Lion Right"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="container section-one">
          <div class="row">
            <div class="col-lg-10 col-md-6 text-center mx-auto">
              <div class="fixed-circle">
                <canvas
                  class="bg-circle-img"
                  id="canvas"
                  width="600"
                  height="600"
                ></canvas>
              </div>
              <img
                class="img-fluid jalil-garden"
                src="./img/aljalil/Jalil Garden.png"
                alt="Jalil Garden"
              />
              <a href="./pages/AlJalilGarden.html">
                <h1 class="jalil-heading">
                  Al J<span class="blind-text">alil Gard</span>en
                </h1>
              </a>
            </div>
          </div>
        </div>

        <div class="container section-two">
          <div class="row">
            <div class="col-lg-10 col-md-6 text-center mx-auto">
              <img
                class="img-fluid noor-orchard"
                src="./img/noor/Noor.png"
                alt="Noor Orchard"
              />
              <a href="./pages/AlNoorOrchard.html">
                <h1 class="noor-heading">
                  Al N<span class="blind-text">oor Orc</span>hard
                </h1>
              </a>
            </div>
          </div>
        </div>

        <div class="container section-three">
          <div class="row">
            <div class="col-lg-10 col-md-6 text-center mx-auto">
              <img
                class="img-fluid west-marina"
                src="./img/marina/Marina.png"
                alt="West Marina"
              />
              <a href="./pages/WestMarina.html">
                <h1 class="marina-heading">
                  W<span class="blind-text">est Mari</span>na
                </h1>
              </a>
            </div>
          </div>
        </div>

        <div class="container-fluid footer-section">
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
    </>
  );
};

export default HomePage;
