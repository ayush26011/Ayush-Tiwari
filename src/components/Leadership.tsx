import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./styles/Career.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const leadershipRoles = [
  {
    title: "TEDx United University Organizer",
    subtitle: "TEDx Coordinator (2025)",
    description: "Organized speaker outreach and managed live technical operations for United University's TEDx event, connecting innovative ideas with the student community.",
    highlighted: true
  },
  {
    title: "HackDiwas 3.0 Lead Organizer",
    subtitle: "State-Level Hackathon Lead (2025)",
    description: "Led technical setup, sponsorship outreach, and logistics for a 48-hour event hosting 500+ participants and student developers.",
    highlighted: true
  },
  {
    title: "HackDiwas 2.0 Organizer",
    subtitle: "Hackathon Organizer (2024)",
    description: "Managed logistics and team coordinations for HackDiwas 2.0, supporting student developer innovation."
  },
  {
    title: "WikiClub Social Media Head",
    subtitle: "Community Head (2024 - Present)",
    description: "Led digital engagement and visual content strategies, increasing student member registration and outreach by over 80%."
  },
  {
    title: "FOSS Prayagraj Contributor",
    subtitle: "Community Contributor",
    description: "Designed promotional assets and built landing page templates to promote open-source software culture and FOSS community growth in Prayagraj."
  },
  {
    title: "GDG DevFest Participant",
    subtitle: "Google Developer Groups Participant",
    description: "Participated and collaborated in DevFest Prayagraj sessions focusing on Vertex AI, Gemini integrations, and scalable cloud structures."
  }
];

const Leadership = () => {
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
      ".leadership-card",
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

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="career-section section-container" id="leadership" ref={containerRef}>
      <div className="career-container">
        <h2 ref={headingRef} style={{ opacity: 0 }}>
          Leadership <span>&</span>
          <br /> community
        </h2>
        <div className="leadership-grid">
          {leadershipRoles.map((role, index) => (
            <div
              className={`leadership-card ${role.highlighted ? "highlighted" : ""}`}
              key={index}
              onPointerMove={handlePointerMove}
            >
              <h4>{role.title}</h4>
              <h5>{role.subtitle}</h5>
              <p>{role.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;
