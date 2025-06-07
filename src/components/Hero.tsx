import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';
import { Link } from 'react-scroll';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  useEffect(() => {
    let width = 0;
    let currentScrollY = 0;
    let phi = -1.5;

    const onResize = () => {
      width = Math.min(window.innerWidth, 1200);
      if (canvasRef.current) {
        canvasRef.current.width = width;
        canvasRef.current.height = width;
      }
    };

    const onScroll = () => {
      currentScrollY = window.scrollY;
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll);
    onResize();

    let globe: ReturnType<typeof createGlobe> | null = null;

    if (canvasRef.current) {
      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width,
        height: width,
        phi: -3.0,
        theta: 0.3,
        dark: 0,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [0.89, 0.66, 0.37],
        glowColor: [1, 1, 1],
        markers: [
          // Europe
          { location: [52.5200, 13.4050], size: 0.05 }, // Berlin
          { location: [48.8566, 2.3522], size: 0.05 }, // Paris
          { location: [41.9028, 12.4964], size: 0.05 }, // Rome
          { location: [51.5074, -0.1278], size: 0.05 }, // London
          // UAE
          { location: [25.2048, 55.2708], size: 0.07 }, // Dubai
          { location: [24.4539, 54.3773], size: 0.05 }, // Abu Dhabi
        ],
        onRender: (state) => {
          // Autorotate
          phi += 0.003;
          
          // Rotate based on scroll position
          state.phi = phi + currentScrollY * 0.0001;
          
          // Adjust rotation based on pointer interaction
          if (pointerInteracting.current !== null) {
            const interactionDelta = pointerInteractionMovement.current;
            phi += interactionDelta * 0.01;
            pointerInteractionMovement.current = 0;
          }
        }
      });
    }

    // Handle pointer events for interactivity
    const onPointerDown = (e: PointerEvent) => {
      pointerInteracting.current = e.clientX;
      canvasRef.current?.style.setProperty('cursor', 'grabbing');
    };

    const onPointerUp = () => {
      pointerInteracting.current = null;
      canvasRef.current?.style.setProperty('cursor', 'grab');
    };

    const onPointerOut = () => {
      pointerInteracting.current = null;
      canvasRef.current?.style.setProperty('cursor', 'grab');
    };

    const onPointerMove = (e: PointerEvent) => {
      if (pointerInteracting.current !== null) {
        const delta = e.clientX - pointerInteracting.current;
        pointerInteracting.current = e.clientX;
        pointerInteractionMovement.current = delta;
      }
    };

    if (canvasRef.current) {
      canvasRef.current.style.setProperty('cursor', 'grab');
      canvasRef.current.addEventListener('pointerdown', onPointerDown);
      canvasRef.current.addEventListener('pointerup', onPointerUp);
      canvasRef.current.addEventListener('pointerout', onPointerOut);
      canvasRef.current.addEventListener('pointermove', onPointerMove);
    }

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      if (canvasRef.current) {
        canvasRef.current.removeEventListener('pointerdown', onPointerDown);
        canvasRef.current.removeEventListener('pointerup', onPointerUp);
        canvasRef.current.removeEventListener('pointerout', onPointerOut);
        canvasRef.current.removeEventListener('pointermove', onPointerMove);
      }
      globe?.destroy();
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 z-10 py-20 md:py-0">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-12 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-4 sm:mb-6 leading-tight">
              Connecting Europe to UAE Market
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-600 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
              TME Trade is your trusted partner for establishing and growing business connections between European enterprises and the UAE market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="solutions"
                spy={true}
                smooth={true}
                offset={-80}
                duration={700}
                className="btn btn-primary transition-colors duration-300"
              >
                Discover Our Solutions
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={700}
                className="btn btn-outline"
              >
                Contact Us
              </Link>
            </div>
          </div>
          {/* Hide globe on mobile, show on desktop */}
          <div className="hidden lg:flex w-full lg:w-1/2 justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[650px] lg:h-[650px] xl:w-[700px] xl:h-[700px]">
              <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <Link
          to="solutions"
          spy={true}
          smooth={true}
          offset={-80}
          duration={700}
          className="text-primary hover:text-primary-dark cursor-pointer"
        >
          <ArrowDown size={32} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;