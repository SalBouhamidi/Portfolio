import React from "react";
import umi from "../assets/images/umii.jpeg"
import youcode from "../assets/images/pixelcut-export.jpeg"
export default function Education() {
  return (
    <section className="section feature education-section"  aria-label="feature" id="education-section">
      <div className="container">
        <h2 className="headline headline-2 section-title">
          <span className="span">Education</span>
        </h2>

        <p className="section-text">Education is the most powerful weapon which you can use to change the world.</p>

        <ul className="feature-list">
          <li>
            <div className="card feature-card">
              <figure
                className="card-banner img-holder"
                style={{ "--width": "1602", "--height": "903" }}
              >
                <img
                  src={umi}
                  width="1602"
                  height="903"
                  loading="lazy"
                  alt="Self-observation is the first step of inner unfolding"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <div className="card-wrapper">
                  <div className="card-tag">
                    <a href="#" className="span hover-2">
                      #Managment
                    </a>
                  </div>
                  <div className="wrapper">
                    <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                    <span className="span"> 2018 - 2022</span>
                  </div>
                </div>

                <h3 className="headline headline-3">
                  <a href="#" className="card-title hover-2">
                    Bachelor degree in economics and management
                  </a>
                </h3>
              </div>
            </div>
          </li>

          <li>
            <div className="card feature-card">
              <figure
                className="card-banner img-holder"
                style={{ "--width": "1602", "--height": "903" }}
              >
                <img
                  src={youcode}
                  width="1602"
                  height="903"
                  loading="lazy"
                  alt="Self-observation is the first step of inner unfolding"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <div className="card-wrapper">
                  <div className="card-tag">
                    <a href="#" className="span hover-2">
                      #webdevelopement
                    </a>
                    <a href="#" className="span hover-2">
                      #MernStack
                    </a>
                  </div>
                  <div className="wrapper">
                    <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                    <span className="span">2023-2025</span>
                  </div>
                </div>

                <h3 className="headline headline-3">
                  <a href="#" className="card-title hover-2">
                    Youcode
                  </a>
                </h3>

              </div>
            </div>
          </li>
        </ul>

      </div>

  
    </section>
  );
}
