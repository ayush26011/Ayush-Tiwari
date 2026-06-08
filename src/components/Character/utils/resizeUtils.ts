import * as THREE from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";

export default function handleResize(
  renderer: THREE.WebGLRenderer,
  camera: THREE.PerspectiveCamera,
  canvasDiv: React.RefObject<HTMLDivElement>,
  character: THREE.Object3D
) {
  if (!canvasDiv.current) return;
  let canvas3d = canvasDiv.current.getBoundingClientRect();
  const width = canvas3d.width;
  const height = canvas3d.height;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  ScrollTrigger.getAll().forEach((trigger) => {
    const triggerEl = trigger.trigger as HTMLElement | null;
    if (triggerEl && (
      triggerEl.classList.contains("landing-section") ||
      triggerEl.classList.contains("about-section") ||
      triggerEl.classList.contains("whatIDO") ||
      triggerEl.classList.contains("what-box-in") ||
      (triggerEl.classList.contains("career-section") && !triggerEl.id)
    )) {
      trigger.kill();
    }
  });
  setCharTimeline(character, camera);
  setAllTimeline();
  ScrollTrigger.refresh();
}
