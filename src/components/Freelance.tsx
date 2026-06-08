import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./styles/Career.css";
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Freelance = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    // Heading reveal
    gsap.fromTo(
      headingRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Cards reveal stagger
    gsap.fromTo(
      ".career-info-box",
      { y: 50, opacity: 0, scale: 0.98 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <div className="career-section section-container" id="freelance" ref={containerRef}>
      <div className="career-container">
        <h2 ref={headingRef} style={{ opacity: 0 }}>
          Available For <span>Freelance</span>
          <br /> Work
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development</h4>
                <h5>Portfolio, Business & Admin Dashboards</h5>
              </div>
              <h3>SERVICES</h3>
            </div>
            <p>
              Designing and developing modern, responsive Portfolio Websites,
              Business Websites, and interactive Admin Dashboards.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend & Integration</h4>
                <h5>Full Stack Apps, APIs & Firebase</h5>
              </div>
              <h3>SERVICES</h3>
            </div>
            <p>
              Building high-performance Full Stack Applications, custom API
              Development, and robust Firebase Integration.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI & ML Solutions</h4>
                <h5>Custom Intelligent Systems</h5>
              </div>
              <h3>SERVICES</h3>
            </div>
            <p>
              Developing and deploying custom machine learning models, computer
              vision pipelines (MediaPipe/OpenCV), and LLM/Gemini integrations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Current Status</h4>
                <h5>Currently Accepting Freelance Projects</h5>
              </div>
              <h3>STATUS</h3>
            </div>
            <div>
              <p style={{ width: "100%", marginBottom: "15px" }}>
                Ready to bring your ideas to life. Let's build something exceptional!
              </p>
              <a
                href="mailto:tayush2601@gmail.com?subject=Freelance%20Project%20Inquiry"
                className="contact-social"
                style={{
                  fontSize: "20px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  borderBottom: "1px solid var(--accentColor)",
                  color: "#fff",
                  paddingBottom: "4px"
                }}
                data-cursor="disable"
              >
                Let's Work Together <MdArrowOutward />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freelance;
