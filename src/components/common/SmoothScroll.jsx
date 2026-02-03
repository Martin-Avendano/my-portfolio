import { useEffect, useRef } from "react";

import Lenis from "lenis"


/**

 * SmoothScroll Component

 * Provides buttery-smooth scrolling experience using Lenis library.

 * This wraps the entire application to enable smooth scroll behavior.

 *

 * Features:

 * - Smooth inertia-based scrolling

 * - Touch device support

 * - Configurable easing and duration

 * - Integrates with Framer Motion scroll tracking

 */

export function SmoothScroll({ children }) {

    const lenisRef = useRef(null);



    useEffect(() => {

        // Initialize Lenis smooth scroll

        const lenis = new Lenis({

            duration: 1.2, // Scroll animation duration

            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function (easeOutExpo)

            orientation: "vertical", // Scroll direction

            gestureOrientation: "vertical", // Gesture direction

            smoothWheel: true, // Enable smooth scrolling for mouse wheel

            wheelMultiplier: 1, // Wheel scroll speed multiplier

            touchMultiplier: 2, // Touch scroll speed multiplier

            infinite: false, // Disable infinite scroll

        });



        lenisRef.current = lenis;



        // Animation frame loop for Lenis

        function raf(time) {

            lenis.raf(time);

            requestAnimationFrame(raf);

        }



        requestAnimationFrame(raf);



        // Cleanup on unmount

        return () => {

            lenis.destroy();

        };

    }, []);



    return children;

}

export default SmoothScroll;