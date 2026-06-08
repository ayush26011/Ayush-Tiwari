import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./styles/Career.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Research = () => {
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

    // Card reveal
    gsap.fromTo(
      ".research-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <div className="career-section section-container" id="research" ref={containerRef}>
      <div className="career-container">
        <h2 ref={headingRef} style={{ opacity: 0 }}>
          Research <span>&</span>
          <br /> publications
        </h2>
        <div className="research-container">
          <div className="research-card">
            <div className="research-details">
              <span className="research-pub">ELSEVIER PROCEDIA COMPUTER SCIENCE (AICCT 2025)</span>
              <h3 className="research-title-text">
                Multi-Class Anomaly Detection in Network Traffic Using Supervised Machine Learning
              </h3>
              <p className="research-desc">
                Benchmarked supervised machine learning models (XGBoost, Random Forest,
                Decision Tree, and Logistic Regression) on the UNSW-NB15 dataset containing
                over 175,000 records. Evaluated metrics including Precision, Recall,
                F1 Score, and ROC-AUC curves. XGBoost demonstrated the highest multi-class
                classification accuracy at 93.78%.
              </p>
            </div>
            <div className="research-metrics">
              <div className="research-metric-box">
                <div className="research-metric-val">93.78%</div>
                <div className="research-metric-label">XGBoost Accuracy</div>
              </div>
              <div className="research-metric-box">
                <div className="research-metric-val">175K+</div>
                <div className="research-metric-label">Network Records</div>
              </div>
              <div className="research-metric-box">
                <div className="research-metric-val">93.9%</div>
                <div className="research-metric-label">F1 & Recall Score</div>
              </div>
              <div className="research-metric-box">
                <div className="research-metric-val">ROC-AUC</div>
                <div className="research-metric-label">Performance Curve</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
