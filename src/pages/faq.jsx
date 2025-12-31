import faqs from "../assets/images/faqs-image.jpg";
import services01 from "../assets/images/services-01.jpg";
import services02 from "../assets/images/projects-02.jpg";
import services03 from "../assets/images/projects-03.jpg";
import services04 from "../assets/images/services-04.jpg";
import Footer from "../components/footer";
function Faq() {
  return (
    <>
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 align-self-center">
              <div className="caption header-text">
                <h6>SEO DIGITAL AGENCY</h6>
                <div className="line-dec"></div>
                <h4>
                  Most Frequently Asked <em>Questions</em> Here <em>?</em>
                </h4>
              </div>
            </div>
            <div className="col-lg-5">
              <img src={faqs} alt="FAQs" />
            </div>
          </div>
        </div>
      </div>

     
      <div className="happy-steps">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Our 4 Steps To Success &amp; Happy Clients</h2>
            </div>

            <div className="col-lg-12">
              <div className="steps">
                <div className="row">
                  {[services01, services02, services03, services04].map(
                    (img, index) => (
                      <div className="col-lg-3" key={index}>
                        <div className={`item ${index === 3 ? "last-item" : ""}`}>
                          <img
                            src={img}
                            alt="Service"
                            style={{
                              maxWidth: "66px",
                              borderRadius: "50%",
                              margin: "0 auto",
                              display: "block",
                            }}
                          />
                          <h4>
                            {
                              [
                                "Project Introduction",
                                "Work Development",
                                "Data Analysis",
                                "Project Finishing",
                              ][index]
                            }
                          </h4>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="most-asked section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>
                  Most <em>Frequently</em> Asked <span>Questions</span> ?
                </h2>
                <div className="line-dec"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  doers.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            
            <div className="col-lg-6">
              <div className="accordions is-first-expanded">
                {[
                  {
                    title: "Sartorial Butcher Humblebrag",
                    content:
                      "Tale is the best SEO agency website template using Bootstrap v5.2.2 CSS.",
                  },
                  {
                    title: "Jean Shorts Microdosing",
                    content:
                      "You are free to use this template for any purpose.",
                  },
                  {
                    title: "Waistcoat Aesthetic Polaroid",
                    content:
                      "Semiotics blog cray letterpress lo-fi vexillologist.",
                  },
                  {
                    title: "Dolores Accordion HTML5",
                    content:
                      "Pickled succulents bitters belly direct trade.",
                  },
                ].map((faq, index) => (
                  <article className="accordion" key={index}>
                    <div className="accordion-head">
                      <span>{faq.title}</span>
                      <span className="icon">
                        <i className="icon fa fa-chevron-right"></i>
                      </span>
                    </div>
                    <div className="accordion-body">
                      <div className="content">
                        <p>{faq.content}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

           
            <div className="col-lg-6">
              <div className="get-free-quote">
                <form method="post">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="section-heading">
                        <h2>
                          Get a <em>Free Quote</em> Now
                        </h2>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <input
                        type="email"
                        placeholder="Your E-mail"
                        required
                      />
                    </div>

                    <div className="col-lg-12">
                      <input
                        type="url"
                        placeholder="Website URL"
                        autoComplete="on"
                        required
                      />
                    </div>

                    <div className="col-lg-12">
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        autoComplete="on"
                        required
                      />
                    </div>

                    <div className="col-lg-12">
                      <input
                        type="text"
                        placeholder="Full Name"
                        autoComplete="on"
                      />
                    </div>

                    <div className="col-lg-12">
                      <button type="submit" className="orange-button">
                        Get Your Free Quote
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="cta section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h4>
                Are You Ready To Work &amp; Develop With Us ?
                <br />
                Don't Hesitate &amp; Contact Us !
              </h4>
            </div>
            <div className="col-lg-4">
              <div className="main-button">
                <a href="#">Contact Us Now!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Faq;
