import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Marquee from "react-fast-marquee";
import {
  faEnvelopeCircleCheck,
  faAddressCard,
  faHandshakeAngle,
  faEnvelope,
  faFillDrip,
  faMobileScreen,
  faCakeCandles,
  faLocationCrosshairs,
  faWandMagicSparkles,
  faLaptopCode,
  faTabletScreenButton,
  faSchool,
  faBriefcase,
  faEllipsis
} from "@fortawesome/free-solid-svg-icons";
import {
  faSquareInstagram,
  faLinkedin,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import emailjs from "@emailjs/browser";
import MapDark from "./MapDark";

function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [sent, setSent] = useState(false);

  const sectionRef = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const menu = ["Home", "About", "Resume", "Portfolio", "Contact"];
  const webDesignSum =
    "Creative Web Designer skilled in crafting responsive, user-focused websites using HTML, CSS, and Figma, blending clean design with functional user experiences. Passionate about turning ideas into visually engaging digital solutions.";
  const webDevSum =
    "Passionate Web Developer skilled in creating responsive, user-friendly websites using HTML, CSS, JavaScript, and React, with a strong focus on clean code and seamless user experiences. Constantly learning new technologies to build innovative and efficient web solutions.";
  const mobAppSum =
    "Skilled in mobile app development, creating intuitive and responsive applications with a focus on smooth performance, clean UI, and engaging user experiences. Passionate about turning ideas into functional, user-friendly mobile solutions.";
  const grapDesSum =
    "Creative Graphic Designer skilled in crafting visually compelling designs that communicate ideas effectively. Experienced in using Photoshop, Illustrator, and Figma to produce modern, impactful visuals that enhance brand identity and user engagement.";

  const form = useRef(null);

  const handleScrollTo = (index) => {
    setActiveIndex(index);
    sectionRef[index].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIsNavCollapsed(true);
  };

  useEffect(() => {
    if (sectionRef.length === 0) return;
    const options = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRef.findIndex(
            (ref) => ref.current === entry.target,
          );
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    }, options);

    sectionRef.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sectionRef.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
      observer.disconnect();
    };
  }, []);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1200);
  };

  const scrollToAbout = () => handleScrollTo(1);
  const scrollToContact = () => handleScrollTo(4);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0a1p9p6",
        "template_co91k6h",
        form.current,
        "RATO1_ycZcJxKgBk4",
      )
      .then(
        (result) => {
          console.log("✅ Email sent:", result.text);
          setSent(true);
          e.target.reset();
          setTimeout(() => setSent(false), 2000);
        },
        (error) => {
          console.log("❌ Email failed:", error.text);
        },
      );
  };

  return (
    <div className="app-wrapper container-fluid px-3 h-100 text-clip">
      <div className="row g-4 g-xl-5 align-items-stretch">
        <aside className="col-md-4 custom-30 h-100 sidebar-pane">
          <div className="left-wrap h-100 d-flex flex-column align-items-center justify-content-between">
            <div className="name-pht-wrap w-100 text-center">
              <div>
                <img
                  src={"/Images/my-photo.png"}
                  className="my-photo img-fluid"
                  alt="Swathikka S"
                />
              </div>
              <div className="name-wrap d-flex align-items-center justify-content-center mt-3">
                <h2 className="m-0">Swathikka Sivashankar</h2>
              </div>
              <div className="d-flex align-items-center justify-content-center mt-3"><div className="name-line "></div></div>
            </div>

            <div className="my-dtls-wrap w-100 rg-30">
              <div className="email-wrap d-flex align-items-center">
                <div className="d-flex align-items-center w-100 cg-10">
                  <div className="left-icon d-flex align-items-center justify-content-center flex-shrink-0">
                    <FontAwesomeIcon icon={faEnvelope} className="mail-icn" />
                  </div>
                  <div className="right-cnt d-flex justify-content-center">
                    <span className="label fw-bold">Email</span>
                    <span onClick={() => copyToClipboard("swathikkasivashankar@outlook.com")} role="button">
                      swathikkasivashankar@outlook.com
                    </span>
                  </div>
                </div>
              </div>
              <div className="mob-wrap d-flex align-items-center">
                <div className="d-flex align-items-center w-100 cg-10">
                  <div className="left-icon d-flex align-items-center justify-content-center flex-shrink-0">
                    <FontAwesomeIcon icon={faMobileScreen} className="mob-icn" />
                  </div>
                  <div className="right-cnt d-flex justify-content-center">
                    <span className="label fw-bold">Mobile</span>
                    <span onClick={() => copyToClipboard("9345425411")} role="button">
                      9345425411
                    </span>
                  </div>
                </div>
              </div>
              <div className="birthday-wrap d-flex align-items-center">
                <div className="d-flex align-items-center w-100 cg-10">
                  <div className="left-icon d-flex align-items-center justify-content-center flex-shrink-0">
                    <FontAwesomeIcon icon={faCakeCandles} className="dob-icn" />
                  </div>
                  <div className="right-cnt d-flex justify-content-center">
                    <span className="label fw-bold">Birthday</span>
                    <span onClick={() => copyToClipboard("05th November 2002")} role="button">
                      05<sup>th</sup> November 2002
                    </span>
                  </div>
                </div>
              </div>
              <div className="loc-wrap d-flex align-items-center">
                <div className="d-flex align-items-center w-100 cg-10">
                  <div className="left-icon d-flex align-items-center justify-content-center flex-shrink-0">
                    <FontAwesomeIcon
                      icon={faLocationCrosshairs}
                      className="loc-icn"
                    />
                  </div>
                  <div className="right-cnt d-flex justify-content-center">
                    <span className="label fw-bold">Location</span>
                    <span onClick={() => copyToClipboard("Katpadi, Vellore")} role="button">
                      Katpadi, Vellore
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="soc-med-icn d-flex align-items-center justify-content-center cg-10">
              <div className="insta-icn"><a href="https://www.instagram.com/missie_luckiie/?__pwa=1" target="_blank"><FontAwesomeIcon icon={faSquareInstagram} className="soc-icn" /></a></div>
              <div className="link-in-icn"><a href="https://www.linkedin.com/in/swathy-siva-043725231/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="soc-icn" /></a></div>
              <div className="git-gub-icn"><a href="https://github.com/SwathikkaSiva" target="_blank"><FontAwesomeIcon icon={faSquareGithub} className="soc-icn" /></a></div>
            </div>
          </div>
        </aside>
        <div className="marquee-main-wrap">
        <div className="marquee-wrap">
          <div className="name-pht-wrap">
            <img src={"/Images/my-photo.png"}
                  className="my-photo img-fluid"
                  alt="Swathikka S"/>
          </div>
          <Marquee className="marq" direction="left" loop="">
            <div className="details-wrap">
              <div className="marq-email">
                <label className="color fw-bold">Email</label>
                <span>swathikkasivashankar@outlook.com</span>
              </div>
              <div className="marq-phn">
                <label className="color fw-bold">Phone Number</label>
                <span>9345425411</span>
              </div>
              <div className="marq-birth">
                <label className="color fw-bold">DOB</label>
                <span>05<sup>th</sup> November 2002</span>
              </div>
              <div className="marq-loc">
                <label className="color fw-bold">Location</label>
                <span>Katpadi, Vellore</span>
              </div>
            </div>
          </Marquee>
        </div>
        </div>
        <main className="col-md-8 custom-70 main-sec content-pane">
          <div className="right-wrap h-100 d-flex flex-column">
            <nav className="navbar navbar-expand-lg navbar-dark bg-color rounded-3">
              <div className="container-fluid px-0">
                <a
                  className="navbar-brand d-lg-none fw-semibold color"
                  href="#home"
                  onClick={(e) => e.preventDefault()}
                >
                  Swathikka Sivashankar
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded={!isNavCollapsed}
                  aria-label="Toggle navigation"
                  onClick={() => setIsNavCollapsed((prev) => !prev)}
                >
                  <span className="navbar-tog-icon"><FontAwesomeIcon icon={faEllipsis} className="nav-icon"/></span>
                </button>
                <div
                  className={`collapse navbar-collapse justify-content-end ${isNavCollapsed ? "" : "show"}`}
                  id="navbarNavAltMarkup"
                >
                  <div className="navbar-nav">
                    {menu.map((label, idx) => (
                      <a
                        key={label}
                        href="#"
                        className={`nav-link ${idx === activeIndex ? "active" : ""}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleScrollTo(idx);
                        }}
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            <div className="main-sec-wrap flex-grow-1 d-flex flex-column gap-5 mt-4">
              <section className="section-block" ref={sectionRef[0]} id="home">
                <div className="row align-items-center g-4 h-100">
                  <div className="col-12 col-lg-6 m-0 p-0 w-60">
                    <div className="intro-wrap">
                      <div className="color hii">HELLO!!</div>
                      <div className="prof-title">
                        I'm Professional UI/UX Designer &{" "}
                        <b className="color">Web Developer</b>
                      </div>
                      <div className="content-wrap">
                        UI/UX Designer with 2 years of experience in bringing creative ideas
                        to life through thoughtful design. Experienced in Photoshop, HTML,
                        CSS & SCSS.
                      </div>
                      <div className="d-flex flex-wrap gap-3 mt-3">
                        <button
                          type="button"
                          className="btn btn-warning d-flex align-items-center gap-2"
                          onClick={scrollToAbout}
                        >
                          <FontAwesomeIcon icon={faAddressCard} />
                          <span>View About</span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-light d-flex align-items-center gap-2"
                          onClick={scrollToContact}
                        >
                          <FontAwesomeIcon icon={faHandshakeAngle} />
                          <span>Hire Me</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 img-main-wrap m-0 p-0 w-40">
                    <div className="image-wrap text-center">
                      <img
                        src={"/Images/developer image.png"}
                        className="img-fluid"
                        alt="Developer illustration"
                      />
                    </div>
                  </div>
                </div>
              </section>

              <section className="section-block" ref={sectionRef[1]} id="about">
                <div className="abt-me-wrap d-flex flex-column gap-4 h-100 w-100">
                  <div className="main-title">
                    <h2>About Me</h2>
                    <div className="line"></div>
                  </div>
                  <div className="abt-cont-wrap row g-4 flex-column">
                    <div className="col-12 col-lg-6">
                      <div className="abt-me-info">
                        <h1>
                          I Am Modern <b className="color">Web Designer</b> &
                          <b className="color"> Developer</b>
                        </h1>
                        <p>
                          I’m a passionate UI/UX Designer with 2 years of experience transforming ideas into intuitive,
                          visually engaging digital experiences. My work focuses on crafting thoughtful interfaces that balance
                          creativity with usability. Skilled in Figma, Photoshop, HTML, CSS, and SCSS, I enjoy solving complex
                          design challenges through user-centered thinking and collaborative problem-solving.
                        </p>
                        <p>
                          From wireframes to high-fidelity prototypes, I bring attention to detail and a strong sense of design
                          consistency to every project. I thrive in dynamic, fast-paced environments where design meets innovation,
                          and I’m always excited to explore new trends that elevate the user experience. Now I am pursuing Full Stack (MERN).
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="abt-box-wrap">
                        <div>
                          <h2>What I am doing</h2>
                        </div>
                        <div className="main-box-wrap row g-3">
                          <div className="col-12 col-sm-6">
                            <div className="web-des-box d-flex align-items-center">
                              <span className="box-icn">
                                <FontAwesomeIcon icon={faWandMagicSparkles} className="pale-icn" />
                              </span>
                              <span className="box-text-wrap d-flex justify-content-center">
                                <span className="fw-bold">Web Designer</span>
                                <span title={webDesignSum}>{webDesignSum}</span>
                              </span>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6">
                            <div className="web-dev-box d-flex align-items-center">
                              <span className="box-icn">
                                <FontAwesomeIcon icon={faLaptopCode} className="code-icn" />
                              </span>
                              <span className="box-text-wrap d-flex justify-content-center">
                                <span className="fw-bold">Web Developer</span>
                                <span title={webDevSum}>{webDevSum}</span>
                              </span>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6">
                            <div className="mob-app-box d-flex align-items-center">
                              <span className="box-icn">
                                <FontAwesomeIcon icon={faTabletScreenButton} className="mbl-app-icn" />
                              </span>
                              <span className="box-text-wrap d-flex justify-content-center">
                                <span className="fw-bold">Mobile App Developer</span>
                                <span title={mobAppSum}>{mobAppSum}</span>
                              </span>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6">
                            <div className="grap-des-box d-flex align-items-center">
                              <span className="box-icn">
                                <FontAwesomeIcon icon={faFillDrip} className="fill-icn" />
                              </span>
                              <span className="box-text-wrap d-flex justify-content-center">
                                <span className="fw-bold">Graphic Designer</span>
                                <span title={grapDesSum}>{grapDesSum}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="section-block" ref={sectionRef[2]} id="resume">
                <div className="resume-wrap d-flex flex-column gap-4 h-100 w-100">
                  <div className="main-title">
                    <h2>Resume</h2>
                    <div className="line"></div>
                  </div>
                  <div className="resume-sub-wrap">
                    <div className="col-12">
                      <div className="mb-4">
                        <div className="d-flex align-items-center cg-20 edu-title">
                          <div className="edu-icn-wrap d-flex align-items-center justify-content-center">
                            <FontAwesomeIcon icon={faSchool} className="edu-icn" />
                          </div>
                          <h2>Education</h2>
                        </div>
                        <div className="edu-timeline">
                          <div className="timeline-item">
                            <h5>
                              SSLC (10<sup>th</sup> Standard) - Vani Vidyalaya Matric Hr.Sec School
                            </h5>
                            <p className="color">2017 - 2018</p>
                            <p>Percentage: 75%</p>
                          </div>
                          <div className="timeline-item">
                            <h5>
                              Higher Secondary (12<sup>th</sup> Standard) - PA Vidhya Bhavan Hr.Sec School
                            </h5>
                            <p className="color">2019 - 2020</p>
                            <p>Percentage: 80%</p>
                          </div>
                          <div className="timeline-item">
                            <h5>Bachelor of Science (B.Sc) in Multimedia And Animation</h5>
                            <p>Vellore Institute Of Science, Vellore</p>
                            <p className="color">2020 - 2023</p>
                            <p>CGPA: 8.5 / 10</p>
                          </div>
                          <div className="timeline-item">
                            <h5>Full Stack (MERN)</h5>
                            <p>CAAD Center - (Live Wire), Vellore</p>
                            <p className="color">2025 - 2026</p>
                            <p className="d-flex cg-10">Project: <a href="https://github.com/SwathikkaSiva" alt="github link" target="_blank"> Git Hub Link</a></p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="d-flex align-items-center cg-20 edu-title">
                          <div className="prof-icn-wrap d-flex align-items-center justify-content-center">
                            <FontAwesomeIcon icon={faBriefcase} className="prof-icn" />
                          </div>
                          <h2>Experience</h2>
                        </div>
                        <div className="prof-timeline">
                          <div className="timeline-item">
                            <h5>
                              Graphic Designer (Intern) - (<b className="color">Graphic Designer</b>)
                            </h5>
                            <p className="color">Feb 2023 – June 2023</p>
                            <ul>
                              <li>
                                Designed social media and marketing creatives for brand promotion.
                              </li>
                              <li>
                                Created visually engaging graphics for Instagram and Facebook
                                using Canva.
                              </li>
                              <li>
                                Developed email banners and product ads that aligned with brand
                                style.
                              </li>
                            </ul>
                          </div>
                          <div className="timeline-item">
                            <h5>
                              LogiTrans Technology Pvt. Limited - (
                              <b className="color">Associate UI/UX Designer</b>)
                            </h5>
                            <p className="color">July 2023 - May 2025</p>
                            <ul>
                              <li>
                                Designed user-centric workflows and UI layouts for internal shipping
                                and customer-facing web portals.
                              </li>
                              <li>
                                Created high-fidelity prototypes and mockups using Photoshop for
                                clear design communication.
                              </li>
                              <li>
                                Collaborated closely with developers and product managers to ensure
                                accurate implementation of designs.
                              </li>
                              <li>
                                Improved UI consistency and efficiency by standardizing visual
                                components and templates.
                              </li>
                              <li>
                                Contributed to enhancing overall user experience through
                                data-driven and goal-oriented design solutions.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="skill-selection h-100">
                            <h3>My Skills</h3>
                            <div className="skill-main-wrap d-flex align-items-center justify-content-center flex-column gap-3">
                              <div className="skill w-100">
                                <span>HTML 95%</span>
                                <div className="bar">
                                  <div className="fill" style={{ width: "95%" }}></div>
                                </div>
                              </div>
                              <div className="skill w-100">
                                <span>CSS 95%</span>
                                <div className="bar">
                                  <div className="fill" style={{ width: "95%" }}></div>
                                </div>
                              </div>
                              <div className="skill w-100">
                                <span>JavaScript 60%</span>
                                <div className="bar">
                                  <div className="fill" style={{ width: "60%" }}></div>
                                </div>
                              </div>
                              <div className="skill w-100">
                                <span>Adobe Photoshop 80%</span>
                                <div className="bar">
                                  <div className="fill" style={{ width: "80%" }}></div>
                                </div>
                              </div>
                              <div className="skill w-100">
                                <span>Adobe Illustrator 50%</span>
                                <div className="bar">
                                  <div className="fill" style={{ width: "50%" }}></div>
                                </div>
                              </div>
                              <div className="skill w-100">
                                <span>Canva 85%</span>
                                <div className="bar">
                                  <div className="fill" style={{ width: "85%" }}></div>
                                </div>
                              </div>
                              <div className="skill w-100">
                                <span>Figma 90%</span>
                                <div className="bar">
                                  <div className="fill" style={{ width: "90%" }}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="section-block" ref={sectionRef[3]} id="portfolio">
                <div className="port-wrap d-flex flex-column gap-4">
                  <div className="main-title">
                    <h2>Portfolio</h2>
                    <div className="line"></div>
                  </div>
                  <div className="port-sub-wrap row g-4">
                    <div className="col-12 col-sm-6 col-lg-4">
                      <div className="proj-box h-100">
                        <a
                          href="https://www.figma.com/design/NUAYQXuPUHzhc4g3XbJFVa/Glimmer-Gold-Resort-Prototypes?node-id=0-1&t=ojHgw9yMfaZse16H-1"
                          className="d-flex flex-column align-items-center text-center h-100"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="port-image d-flex align-items-center justify-content-center">
                            <img
                              src="/Images/glimmer-Golden.png"
                              className="img-fluid"
                              alt="Glimmer Gold Project"
                            />
                          </div>
                          <div className="proj-title">Glimmer Gold Resort</div>
                          <div className="proj-type">Web Figma Design Flow</div>
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                      <div className="proj-box h-100">
                        <a
                          href="https://www.figma.com/design/F5adZ8mzAb3KYjWpKtZhqH/my-simple-projects-design-flow?node-id=0-1&t=lNGEasJRfAgLizqg-1"
                          className="d-flex flex-column align-items-center text-center h-100"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="port-image d-flex align-items-center justify-content-center">
                            <img
                              src="/Images/project-design.png"
                              className="img-fluid"
                              alt="my project design"
                            />
                          </div>
                          <div className="proj-title">My Simple Projects design flow</div>
                          <div className="proj-type">Web Figma Design Flow</div>
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                      <div className="proj-box h-100">
                        <a
                          href="https://to-do-list-pi-ruddy.vercel.app/"
                          className="d-flex flex-column align-items-center text-center h-100"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="port-image d-flex align-items-center justify-content-center">
                            <img
                              src="/Images/TO-DO List.png"
                              className="img-fluid"
                              alt="TO-DO List"
                            />
                          </div>
                          <div className="proj-title">TO-DO List</div>
                          <div className="proj-type">Web Development Using React</div>
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                      <div className="proj-box h-100">
                        <a
                          href="https://github.com/SwathikkaSiva/My-Script-Projects/tree/main/TO-DO%20List"
                          className="d-flex flex-column align-items-center text-center h-100"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="port-image d-flex align-items-center justify-content-center">
                            <img
                              src="/Images/TO-DO List js.png"
                              className="img-fluid"
                              alt="TO-DO List"
                            />
                          </div>
                          <div className="proj-title">TO-DO List</div>
                          <div className="proj-type">Web Development Using Javascript</div>
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                      <div className="proj-box h-100">
                        <a
                          href="https://www.figma.com/design/FBSjyNRbbRK3lBVoDm5mb4/My-personal-portfolio?node-id=0-1&t=3cjQPutymHDaFwZS-1"
                          className="d-flex flex-column align-items-center text-center h-100"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="port-image d-flex align-items-center justify-content-center">
                            <img
                              src="/Images/portfolio design.png"
                              className="img-fluid"
                              alt="Personal Portfolio"
                            />
                          </div>
                          <div className="proj-title">My Personal Portfolio Design Flow</div>
                          <div className="proj-type">Web Figma Design Flow</div>
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                      <div className="proj-box h-100">
                        <a
                          href="https://www.figma.com/design/nuw0BbxgPoshdVZhKLadrN/Health-Bridge-Wireframe?node-id=477-143&t=pWqRhvgmR1vOyI5z-1"
                          className="d-flex flex-column align-items-center text-center h-100"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="port-image d-flex align-items-center justify-content-center">
                            <img
                              src="/Images/Health-Bridge.png"
                              className="img-fluid"
                              alt="Personal Portfolio"
                            />
                          </div>
                          <div className="proj-title">Health Bridge Mobile App</div>
                          <div className="proj-type">Web Figma Design Flow</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="section-block" ref={sectionRef[4]} id="contact">
                <div className="cont-wrap d-flex flex-column gap-4">
                  <div className="main-title">
                    <h2>Contact</h2>
                    <div className="line"></div>
                  </div>
                  <div className="map-form-wrap">
                    <div className="map-wrapper position-relative mb-4">
                      <div className="ratio ratio-16x9">
                        <MapDark />
                      </div>
                    </div>
                    <div className="cont-form-wrap">
                      <div className="cont-title mb-3">
                        <h3 className="mt-2">Contact Form</h3>
                      </div>
                      <div className="cont-dtls">
                        <form className="row g-3" ref={form} onSubmit={sendEmail}>
                          <div className="col-md-6">
                            <label className="form-label">Full Name</label>
                            <input type="text" name="name" required className="form-control" />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Email Address</label>
                            <input type="email" name="email" required className="form-control" />
                          </div>
                          <div className="col-12">
                            <label className="form-label">Message</label>
                            <textarea
                              name="message"
                              required
                              className="form-control"
                              rows="4"
                            ></textarea>
                          </div>
                          <div className="col-12 d-flex flex-column align-items-center gap-2">
                            <button
                              type="submit"
                              className="btn btn-warning d-flex align-items-center gap-2"
                            >
                              <FontAwesomeIcon icon={faEnvelopeCircleCheck} />
                              <span>Submit</span>
                            </button>
                            {sent && (
                              <div className="text-warning fw-bold letter-spread">
                                Message Sent
                              </div>
                            )}
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
      {showPopup && <div className="clipboard-popup">Copied ✅</div>}
    </div>
  );
}

export default Portfolio;

