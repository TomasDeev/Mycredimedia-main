import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline>();

  useEffect(() => {
    if (!preloaderRef.current) return;

    // Set initial states
    gsap.set(".mil-animation-1", { opacity: 1 });
    gsap.set(".mil-animation-1 p", { opacity: 0, y: 50, filter: "blur(10px)" });
    gsap.set(".mil-animation-2", { opacity: 0 });
    gsap.set(".mil-animation-2 p", { opacity: 0, y: 30 });
    gsap.set(".mil-reveal-box", { width: "100%" });

    // Initialize timeline
    const timeline = gsap.timeline();
    timelineRef.current = timeline;

    timeline
      .to(".mil-preloader-animation", {
        duration: 0.1,
        opacity: 1,
        ease: 'power2.out'
      })
      // Primera fase: mostrar "Soluciones de Préstamos Confiables"
      .to(".mil-animation-1 p", {
        duration: 0.8,
        y: 0,
        opacity: 1,
        stagger: 0.15,
        ease: 'power2.out'
      }, "+=0.3")
      .to(".mil-animation-1 p", {
        duration: 0.6,
        filter: 'blur(0px)',
        stagger: 0.1,
        ease: 'power2.out'
      }, "-=0.4")
      // Pausa y luego ocultar primera animación
      .to(".mil-animation-1", {
        duration: 0.5,
        opacity: 0,
        ease: 'power2.in'
      }, "+=1.2")
      // Segunda fase: mostrar "mycredimedia.com"
      .to(".mil-animation-2", {
        duration: 0.5,
        opacity: 1,
        ease: 'power2.out'
      }, "+=0.2")
      .to(".mil-reveal-box", {
        duration: 1.2,
        width: "0%",
        ease: 'power2.inOut'
      }, "+=0.2")
      .to(".mil-animation-2 p", {
        duration: 0.6,
        opacity: 1,
        y: 0,
        ease: 'power2.out'
      }, "-=0.8")
      // Ocultar segunda animación y cerrar preloader
      .to(".mil-animation-2", {
        duration: 0.5,
        opacity: 0,
        ease: 'power2.in'
      }, "+=1.0")
      .to(".mil-preloader", {
        duration: 0.8,
        opacity: 0,
        ease: 'power2.inOut'
      }, "+=0.2")
      .call(() => {
        onComplete();
      });

    return () => {
      timeline.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="mil-preloader fixed top-0 left-0 w-full h-screen z-[99999] bg-gradient-to-b from-[#e0e0dd] to-[#ececea]"
    >
      <div className="mil-preloader-animation opacity-0 relative w-full h-screen">
        <div className="mil-pos-abs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-screen flex justify-center items-center">
          <div className="mil-animation-1 flex flex-col md:flex-row items-center">
            <p className="mil-head1 font-anton text-foreground font-normal uppercase tracking-tight text-4xl md:text-6xl lg:text-7xl mr-0 md:mr-8 mb-4 md:mb-0 opacity-0 translate-y-8 blur-[10px]">
              Soluciones
            </p>
            <p className="mil-head1 font-anton text-primary font-normal uppercase tracking-tight text-4xl md:text-6xl lg:text-7xl mr-0 md:mr-8 mb-4 md:mb-0 opacity-0 translate-y-8 blur-[10px]">
              de Préstamos
            </p>
            <p className="mil-head1 font-anton text-foreground font-normal uppercase tracking-tight text-4xl md:text-6xl lg:text-7xl opacity-0 translate-y-8 blur-[10px]">
              Confiables
            </p>
          </div>
        </div>
        <div className="mil-animation-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0">
          <div className="mil-reveal-frame relative overflow-hidden px-8">
            <div className="mil-reveal-box absolute top-0 left-0 w-full h-full bg-primary z-10"></div>
            <p className="mil-head1 font-anton text-primary font-normal uppercase tracking-tight text-3xl md:text-5xl lg:text-6xl opacity-0 translate-y-8 relative z-0">
              mycredimedia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;