import topic1 from "../assets/images/login-sporto.png"
import topic2 from "../assets/images/devtalk.jpg"
import topic3 from "../assets/images/fyr.png"
import topic4 from "../assets/images/topic-4.png"
import topic5 from "../assets/images/topic-5.png"

export default function Project() {
    return (
        <>
            <section className="topics mt-20" id="projects-section" aria-labelledby="topic-label">
                <div className="container">
                    <div className="card topic-card">
                        <div className="card-content">
                            <h2 className="headline headline-2 section-title card-title" id="topic-label">
                                My Projects
                            </h2>
                            <p className="card-text">
                                Don't miss out on the latest projects...
                            </p>
                            <div className="btn-group">
                                <button className="btn-icon" aria-label="previous" data-slider-prev>
                                    <ion-icon name="arrow-back" aria-hidden="true"></ion-icon>
                                </button>
                                <button className="btn-icon" aria-label="next" data-slider-next>
                                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                                </button>
                            </div>


                        </div>

                        <div className="slider" data-slider>
                            <ul className="slider-list" data-slider-container>

                                <li className="slider-item">
                                    <a href="#" className="slider-card transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                                        <figure className="slider-banner img-holder relative overflow-hidden" style={{ "--width": "507", "--height": "618" }}>
                                            <img src={topic1} width="507" height="618" loading="lazy" alt="Sport" className="w-full h-full object-cover object-right" style={{ objectPosition: "90% 0" }}/>
                                            <div className="absolute inset-0 z-1" style={{ background: "hsla(222, 47%, 11%, 1)",backdropFilter: "blur(10px)", opacity: 0.5 }}></div>
                                        </figure>
                                        <div className="slider-content ">
                                            <span className="slider-title z-20">Sporto</span>
                                            <a href="https://github.com/SalBouhamidi/Sporto-FrontEnd.git" target="_blank" rel="noopener noreferrer" className="slider-subtitle text-blue-600 hover:underline">View on github</a>
                                        </div>
                                    </a>
                                </li>
                                <li className="slider-item">
                                    <a href="#" className="slider-card transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">

                                        <figure className="slider-banner img-holder relative overflow-hidden" style={{ "--width": "507", "--height": "618" }}>
                                            <img src={topic3} width="507" height="618" loading="lazy" alt="Design" className="w-full h-full object-cover object-right"style={{ objectPosition: "90% 0" }} />
                                            <div className="absolute inset-0 z-1" style={{ background: "hsla(222, 47%, 11%, 1)",backdropFilter: "blur(10px)", opacity: 0.5 }}></div>
                                        </figure>

                                        <div className="slider-content">
                                            <span className="slider-title">Find your rommate</span>
                                            <a href="https://github.com/SalBouhamidi/Sporto-FrontEnd.git" target="_blank" rel="noopener noreferrer" className="slider-subtitle text-blue-600 hover:underline" >View on github</a>
                                        </div>

                                    </a>
                                </li>
                                <li className="slider-item">
                                    <a href="#" className="slider-card transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                                        <figure className="slider-banner img-holder" style={{ "--width": "507", "--height": "618" }}>
                                            <img src={topic2} width="507" height="618" loading="lazy" alt="Travel" className="w-full h-full object-cover object-right"style={{ objectPosition: "90% 0" }}/>
                                            <div className="absolute inset-0 z-1" style={{ background: "hsla(222, 47%, 11%, 1)",backdropFilter: "blur(10px)", opacity: 0.5 }}></div>
                                        </figure>
                                        <div className="slider-content">
                                            <span className="slider-title">Dev Talk</span>
                                            <a href="https://github.com/ShadowDev-team/Blogging-Platform.git" target="_blank" rel="noopener noreferrer" className="slider-subtitle text-blue-600 hover:underline">View on github</a>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div >
            </section >
        </>
    )
}