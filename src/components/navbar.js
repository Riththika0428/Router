import logo from "../assets/images/logo.png";
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
  <div className="pre-header" id="top">
  <div className="container">
  <div className="row">
  <div className="col-lg-8 col-sm-9">
  <div className="left-info">
  <ul>
  <li>
  <a href="#">
  <i className="fa fa-phone"></i> +000 1234 5678
  </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope"></i> infocompany@email.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-map-marker"></i> St. London 54th Bull
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-sm-3">
              <div className="social-icons">
                <ul>
                  <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fab fa-google-plus"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                
                <a href="index.html" className="logo">
                  <img src={logo} alt="Logo" style={{maxWidth: '112px'}} />
                </a>

                <ul className="nav">
                  <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/faq">Faq</Link>
            <Link to="/contact">Contact</Link>
            
                </ul>

                <a href="#" className="menu-trigger">
                  <span>Menu</span>
                </a>

              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
