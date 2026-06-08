import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "SignSetu",
    category: "AI/ML (UHack 4.0 Winner)",
    tools: "TensorFlow, OpenCV, MediaPipe, Flask, React.js, Firebase",
    github: "https://github.com/ayush26011",
    live: "https://signsetu-x-2.vercel.app/",
    image: "/images/placeholder.webp",
  },
  {
    title: "QuickSeva",
    category: "GenAI (Google Build with AI Winner)",
    tools: "Google Gemini API, Python, Flask, React.js, Firebase",
    github: "https://github.com/ayush26011",
    live: "https://ayush26011.github.io/quickseva/",
    image: "/images/placeholder.webp",
  },
  {
    title: "Hanuman Pushpa Varsha",
    category: "Full Stack (Bilingual Client Portal)",
    tools: "Next.js, Firebase, Razorpay Payment Gateway, Firestore",
    github: "https://github.com/ayush26011",
    live: "https://hanumanpushpavarsha.vercel.app/",
    image: "/images/placeholder.webp",
  },
  {
    title: "Aarogyam",
    category: "Web Platform (Open Source)",
    tools: "JavaScript, React.js, Firebase Auth, REST APIs",
    github: "https://github.com/ayush26011",
    live: "https://aarogyam-nu.vercel.app/",
    image: "/images/placeholder.webp",
  },
  {
    title: "Network Anomaly Detection",
    category: "Machine Learning (Research Publication)",
    tools: "XGBoost, Random Forest, Scikit-Learn, Python, Pandas",
    github: "https://github.com/ayush26011",
    live: "",
    image: "/images/placeholder.webp",
  },
];

const Work = () => {
  useGSAP(() => {
    function getTranslateX() {
      const boxes = document.getElementsByClassName("work-box");
      if (boxes.length === 0) return 0;
      const box = boxes[0] as HTMLElement;
      const workContainer = document.querySelector(".work-container") as HTMLElement;
      const workFlex = document.querySelector(".work-flex") as HTMLElement;
      if (!workContainer || !workFlex) return 0;

      const boxWidth = box.offsetWidth;
      const containerWidth = workContainer.offsetWidth;
      const viewportWidth = window.innerWidth;
      const containerLeft = (viewportWidth - containerWidth) / 2;

      const flexStyle = window.getComputedStyle(workFlex);
      const marginLeft = parseInt(flexStyle.marginLeft) || 0;
      const paddingRight = parseInt(flexStyle.paddingRight) || 0;

      const trackWidth = boxWidth * boxes.length + paddingRight;
      const scrollDistance = (containerLeft + marginLeft + trackWidth) - viewportWidth;

      return Math.max(0, scrollDistance);
    }

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${getTranslateX()}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: () => -getTranslateX(),
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <div className="work-links" style={{ display: "flex", gap: "15px", marginTop: "15px" }}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: "14px", color: "var(--accentColor)", display: "flex", alignItems: "center", gap: "4px" }} data-cursor="disable">
                      GitHub <MdArrowOutward />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ fontSize: "14px", color: "#fff", display: "flex", alignItems: "center", gap: "4px" }} data-cursor="disable">
                      Live Demo <MdArrowOutward />
                    </a>
                  )}
                </div>
              </div>
              <WorkImage image={project.image} alt={project.title} link={project.live || project.github} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
