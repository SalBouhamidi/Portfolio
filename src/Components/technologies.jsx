import react from "../assets/images/logo_dark.svg"
import Nodejs from "../assets/images/nodejs-horizontal.svg" 
import express from "../assets/images/expressjs-ar21.svg"
import nest from "../assets/images/nestjs-icon.svg"
import mongodb from "../assets/images/mongodb-icon.svg"
import postgre from "../assets/images/postgresql-icon.svg"
import docker from "../assets/images/docker-icon.svg"
export default function Technologies() {
    return (
        <>
            <section className="tags mt-11" aria-labelledby="tag-label">
                <div className="container">

                    <h2 className="headline headline-2 section-title" id="tag-label">
                        <span className="span">Using technologies</span>
                    </h2>

                    <p className="section-text">
                       You wondering how my projects are build ?
                    </p>

                    <ul className="grid-list">

                        <li>
                            <button className="card tag-btn">
                                <img src={react} width="32" height="32" loading="lazy" alt="Travel" />

                                <p className="btn-text">React</p>
                            </button>
                        </li>

                        <li>
                            <button className="card tag-btn">
                                <img src={Nodejs} width="32" height="32" loading="lazy" alt="Culture" />

                                <p className="btn-text">NodeJs</p>
                            </button>
                        </li>

                        <li>
                            <button className="card tag-btn">
                                <img src={express} width="32" height="32" loading="lazy" alt="Lifestyle" />

                                <p className="btn-text">ExpressJs</p>
                            </button>
                        </li>

                        <li>
                            <button className="card tag-btn">
                                <img src={nest} width="32" height="32" loading="lazy" alt="Fashion" />

                                <p className="btn-text">NestJs</p>
                            </button>
                        </li>

                        <li>
                            <button className="card tag-btn">
                                <img src={mongodb} width="32" height="32" loading="lazy" alt="Food" />

                                <p className="btn-text">Mongodb</p>
                            </button>
                        </li>

                        <li>
                            <button className="card tag-btn">
                                <img src={postgre} width="32" height="32" loading="lazy" alt="Space" />

                                <p className="btn-text">PostgreSQL</p>
                            </button>
                        </li>

                        <li>
                            <button className="card tag-btn">
                                <img src={docker} width="32" height="32" loading="lazy" alt="Animal" />

                                <p className="btn-text">Docker</p>
                            </button>
                        </li>

                    </ul>

                </div>
            </section>
        </>
    )
}