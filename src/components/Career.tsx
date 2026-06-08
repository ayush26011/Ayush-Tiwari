import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Developer</h4>
                <h5>Hanuman Pushpa Varsha</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built and deployed a full-stack bilingual Next.js portal serving
              500+ active users, incorporating live streaming, Razorpay payment
              gateway, and automated real-time registration workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Intern</h4>
                <h5>Coderesite</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed and shipped 3+ responsive web applications with Firebase
              backend integrations, resolving critical UI bugs and improving
              overall asset and page loading speeds.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Developer Intern</h4>
                <h5>Prodesk IT</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Engineered 8+ production-ready Django REST API endpoints, optimized
              MySQL queries for 25% faster database response, and authored
              automated Pytest unit test coverage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
