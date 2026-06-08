import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "./styles/Career.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const achievementsList = [
  {
    title: "Winner – UHack 4.0",
    badge: "🏆 1st Prize",
    description: "Won 1st place out of 500+ participants with SignSetu, a real-time bidirectional sign language translation platform.",
    image: "https://i.postimg.cc/8C3xY5vc/portfolio1.jpg",
    event: "UHack 4.0 Hackathon",
    year: "2024",
    featured: true
  },
  {
    title: "Winner – Google Build With AI",
    badge: "🏆 Hackathon Winner",
    description: "Won GDG Prayagraj's hackathon with QuickSeva, an LLM-powered civic assistant using Google Vertex AI and Gemini API.",
    image: "https://i.postimg.cc/pXzWfFLN/hpvc-2025-8.jpg",
    event: "Google Build with AI",
    year: "2024",
    featured: true
  },
  {
    title: "Elsevier Published Researcher",
    badge: "📖 Research Publication",
    description: "Published and presented a paper on Network Anomaly Detection in Elsevier Procedia Computer Science at AICCT 2025.",
    image: "https://i.postimg.cc/gc64ss4R/portfolio8.jpg",
    event: "Procedia Computer Science",
    year: "2025",
    featured: true
  },
  {
    title: "Top 10 – BuildX Hackathon",
    badge: "🏅 National Finalist",
    description: "Secured a top 10 position out of numerous teams nationally at NSUT New Delhi's major tech hackathon.",
    image: "https://i.postimg.cc/2jvNP42y/portfolio2.jpg",
    event: "NSUT Delhi Hackathon",
    year: "2024"
  },
  {
    title: "Top 20 – FlutterFlow Hackathon",
    badge: "🏅 IIIT Allahabad Finalist",
    description: "Reached the top 20 finals in FlutterFlow design & development competition at IIIT Allahabad.",
    image: "https://i.postimg.cc/zDWY9n03/portfolio5.jpg",
    event: "IIIT Allahabad",
    year: "2024"
  },
  {
    title: "TEDx United University Organizer",
    badge: "🎤 TEDx Coordinator",
    description: "Led technical operations, logistics, and speaker relations for the official TEDx United University event.",
    image: "https://i.postimg.cc/66RxDdYv/portfolio6.jpg",
    event: "TEDx United University",
    year: "2025"
  },
  {
    title: "Lead Organizer – HackDiwas 3.0",
    badge: "Organizer",
    description: "Led a state-level 48-hour hackathon with 500+ attendees, directing technical execution and platform operations.",
    image: "https://i.postimg.cc/v89wpW3B/portfolio4.jpg",
    event: "HackDiwas 3.0",
    year: "2026",
    featured: true
  },
  {
    title: "Organizer – HackDiwas 2.0",
    badge: "Organizer",
    description: "Managed logistics and team coordinations for HackDiwas 2.0, supporting student developer innovation.",
    image: "https://i.postimg.cc/MZRJhydv/portfolio3.jpg",
    event: "HackDiwas 2.0",
    year: "2025"
  },
  {
    title: "Winner – Scope Event",
    badge: "🏆 First Prize",
    description: "Won the first prize at the United University's first major tech event for exceptional problem-solving and presentation.",
    image: "/images/placeholder.webp",
    event: "Scope Event",
    year: "2023"
  },
  {
    title: "GDG DevFest Participant",
    badge: "🌐 Google Developer Group",
    description: "Represented the student developer community at DevFest, collaborating on Vertex AI and GenAI application architectures.",
    image: "https://i.postimg.cc/9fFJBjNy/portfolio7.jpg",
    event: "GDG DevFest Prayagraj",
    year: "2025"
  },
  {
    title: "FOSS Prayagraj Contributor",
    badge: "🤝 Open Source",
    description: "Active designer and developer contributor in promote-free-software initiatives within the Prayagraj developer region.",
    image: "/images/placeholder.webp",
    event: "FOSS Community",
    year: "2026"
  },
  {
    title: "WikiClub Social Media Head",
    badge: "📱 Leadership Role",
    description: "Led social outreach campaigns and digital content strategies, increasing student member engagement by 80%.",
    image: "/images/placeholder.webp",
    event: "WikiClubTech UU",
    year: "2025"
  }
];

const Achievements = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [startX, setStartX] = useState(0);

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

    // Carousel container reveal
    gsap.fromTo(
      ".achievements-carousel-container",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: containerRef });

  const getRelativeIndex = (index: number) => {
    let diff = index - activeIndex;
    const count = achievementsList.length;
    if (diff < -count / 2) diff += count;
    if (diff > count / 2) diff -= count;
    return diff;
  };

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % achievementsList.length);
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + achievementsList.length) % achievementsList.length);
  };

  const goTo = (index: number) => {
    setActiveIndex(index);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setStartX(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent, index: number) => {
    const diffX = e.clientX - startX;
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        prevCard();
      } else {
        nextCard();
      }
    } else {
      // Click event fallback
      const diff = getRelativeIndex(index);
      if (diff !== 0) {
        goTo(index);
      }
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>, index: number) => {
    const diff = getRelativeIndex(index);
    if (diff !== 0) return; // Only apply spotlight on the active card
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="career-section section-container" id="achievements" ref={containerRef}>
      <div className="career-container">
        <h2 ref={headingRef} style={{ opacity: 0 }}>
          Wins <span>&</span>
          <br /> achievements
        </h2>

        <div className="achievements-carousel-container" style={{ opacity: 0 }}>
          <div
            className="achievements-carousel-track"
            onPointerDown={handlePointerDown}
          >
            {achievementsList.map((item, index) => {
              const diff = getRelativeIndex(index);
              const cardClass =
                diff === 0 ? "active" :
                  diff === -1 ? "prev" :
                    diff === 1 ? "next" :
                      diff === -2 ? "prev-2" :
                        diff === 2 ? "next-2" : "hidden-card";

              return (
                <div
                  className={`achievement-card ${cardClass} ${item.featured ? "featured" : ""}`}
                  key={index}
                  onPointerUp={(e) => handlePointerUp(e, index)}
                  onPointerMove={(e) => handlePointerMove(e, index)}
                >
                  <div className="achievement-img-wrapper">
                    <img src={item.image} alt={item.title} />

                  </div>
                  <div className="achievement-info">
                    <div className="achievement-meta">
                      <span className="achievement-badge">{item.badge}</span>
                      {item.year && <span className="achievement-year">{item.year}</span>}
                    </div>
                    <h4 className="achievement-title">{item.title}</h4>
                    {item.event && <p className="achievement-event">{item.event}</p>}
                    <p className="achievement-desc">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="carousel-controls">
            <button className="carousel-btn prev" onClick={prevCard} aria-label="Previous achievement">
              <FiArrowLeft />
            </button>
            <div className="carousel-dots">
              {achievementsList.map((_, idx) => (
                <button
                  key={idx}
                  className={`carousel-dot ${idx === activeIndex ? "active" : ""}`}
                  onClick={() => goTo(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button className="carousel-btn next" onClick={nextCard} aria-label="Next achievement">
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
