import face from "../assets/images/salima-bouhamidi-img-removebg-preview.png"
import deco from "../assets/images/pattern-2.svg"
import decoration from "../assets/images/pattern-3.svg"
import shadow from "../assets/images/shadow-1.svg"
import shadoow from "../assets/images/shadow-2.svg"
export default function AboutMe() {
    return(
        <>
        <section className="hero about-me-section" id="about-me-section">
        <div className="container">
          <div className="hero-content">
          <p className="hero-subtitle text-4xl">{'{ Hello There! }'}</p>
          <h1 className="headline headline-1 section-title">
              I’m <span className="span inline whitespace-nowrap">Salima Bouhamidi</span>
            </h1>
            <p className="hero-text">
            I am a passionate {'{MERN stack}'} developer with expertise in building scalable and user-friendly web applications. With proficiency in MongoDB, Express.js, React.js, and Node.js, I create full-stack solutions that deliver seamless user experiences.
            </p>
            <div className="input-wrapper">
              <input type="email" name="email_address" placeholder="Type your email address" required
                className="input-field" autocomplete="off"/>

              <button className="btn btn-primary">
                <span className="span">Subscribe</span>
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
              </button>
            </div>

          </div>

          <div className="hero-banner">
            <img src={face} width="327" height="490" alt="Wren Clark" className="w-100"/>
            <img src={deco} width="27" height="26" alt="shape" className="shape shape-1"/>
            <img src={decoration} width="27" height="26" alt="shape" className="shape shape-2"/>
          </div>
          <img src={shadow} width="500" height="800" alt="" className="hero-bg hero-bg-1"/>
          <img src={shadoow} width="500" height="500" alt="" className="hero-bg hero-bg-2"/>
        </div>
        </section>
         
        
        </>
    )
}