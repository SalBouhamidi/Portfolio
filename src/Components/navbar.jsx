import Logo from "../assets/images/logo.svg"
export default function NavbarComponent() {
    function handleScroll(agument){
        const targetSection = document.getElementById(agument);
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start", 
        });
      };
    return (
        <>
            <header className="header" data-header>
                <div className="container">

                    <a href="#" className="logo">
                        <p className="font-bold text-4xl ml-7 text-gray-200" >Salima </p>
                    </a>

                    <nav className="navbar" data-navbar>
                        <div className="navbar-top">
                            <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
                                <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
                            </button>
                        </div>

                        <ul className="navbar-list">

                            <li>
                                <a href="#home" className="navbar-link hover-1" data-nav-toggler>Home</a>
                            </li>

                            <li>
                                <a href="#aboutme" className="navbar-link hover-1" onClick={(e)=>{e.preventDefault; handleScroll("about-me-section")}} >About</a>
                            </li>

                            <li>
                                <a href="#education" className="navbar-link hover-1" onClick={(e)=>{e.preventDefault; handleScroll("education-section")}}>Education</a>
                            </li>

                            <li>
                                <a href="#projects-section" className="navbar-link hover-1" onClick={(e)=>{e.preventDefault; handleScroll("projects-section")}}>Projects</a>
                            </li>

                        </ul>
                    </nav>
                    <a href="#" className="btn btn-primary">Contact Me</a>
                </div>
            </header>
        </>
    );
}
