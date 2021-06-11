import React from "react";

export const Home = () => {
  return (
    <div className="col col-12" id="sec2">
      <div className="text2">
        <p style={{ color: "#FFD954 !important", fontSize: "50px" }}>
          The Kind Of Care
          <span style={{ fontSize: "40px", fontWeight: "200" }}>
            Your Pets Deserve
          </span>
        </p>
      </div>

      <header>
        <div style={{ paddingTop: "20px" }}>
          <p style={{ fontSize: "45px", paddingLeft: "30px" }}>About Clinic</p>
        </div>
        <div style={{ paddingBottom: "20px" }}>
          <p style={{ fontSize: "12px", paddingLeft: "30px" }}>
            Whether it’s a pamper day, playdate, sleepover, training class or
            veterinary visit, we provide the best in pet services with highly
            trained, passionate associates. From our pet hotel & doggie day camp
            as an alternative to pet sitting, to our dog training and grooming
            as an alternative to DIY, our services are conveniently located
            inside most of our PetSmart stores.
          </p>
        </div>
      </header>

      <div id="sec10">
        <div className="container">
          <div className="row">
            <div className="col-3" style={{ paddingTop: "10px" }}>
              <a href="" style={{ color: "white" }}>
                Return policy
              </a>
              <br />{" "}
              <a href="" style={{ color: "white" }}>
                Search our store
              </a>
              <br />{" "}
              <a href="" style={{ color: "white" }}>
                Blog
              </a>
              <br />{" "}
              <a href="" style={{ color: "white" }}>
                Contact us
              </a>
              <br />{" "}
              <a href="" style={{ color: "white" }}>
                About us{" "}
              </a>
            </div>
            <div className="col-3" style={{ paddingTop: "10px" }}>
              <a href="" style={{ color: "white" }}>
                Facebook
              </a>
              <br />
              <a href="" style={{ color: "white" }}>
                Twitter
              </a>
              <br />
              <a href="" style={{ color: "white" }}>
                Instagram
              </a>
              <br />
              <a href="" style={{ color: "white" }}>
                Youtube
              </a>
              <br />
            </div>

            <div className="col-3" style={{ paddingTop: "10px" }}>
              <a href="" style={{ color: "white" }}>
                Pets Services
              </a>
              <br />
              <a href="" style={{ color: "white" }}>
                careers
              </a>
              <br />
              <a href="" style={{ color: "white" }}>
                Help center
              </a>
              <br />
              <a href="" style={{ color: "white" }}>
                Treats program
              </a>
              <br />
            </div>

            <div className="col-3" style={{ paddingTop: "10px" }}>
              <a href="" style={{ color: "white" }}>
                PetSmart charities
              </a>
              <br />
              <a href="" style={{ color: "white" }}>
                US site
              </a>
              <br />
              <a href="" style={{ color: "white" }}>
                Canada site
              </a>
              <br />
              <a href="" style={{ color: "white" }}>
                Accessibility statement
              </a>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
