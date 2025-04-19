"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { features } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { useRef, useEffect } from "react";

export default function LandingHero() {
  const interactiveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interBubble = interactiveRef.current;
    if (!interBubble) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;
    let mouseX = 0;
    let mouseY = 0;

    // Add autonomous movement
    let time = 0;
    const autonomousX = window.innerWidth / 2;
    const autonomousY = window.innerHeight / 2;
    const autonomousRadius = 100;

    function move() {
      // Update time for autonomous movement
      time += 0.01;

      // Calculate autonomous position (circular motion)
      const autoX = autonomousX + Math.cos(time) * autonomousRadius;
      const autoY = autonomousY + Math.sin(time) * autonomousRadius;

      // Blend mouse position (30%) with autonomous movement (70%)
      tgX = mouseX * 0.3 + autoX * 0.7;
      tgY = mouseY * 0.3 + autoY * 0.7;

      // Smooth movement
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;

      if (interBubble) {
        interBubble.style.transform = `translate(${Math.round(
          curX
        )}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    }

    window.addEventListener("mousemove", (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    });

    move();

    return () => {
      window.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <svg
          className="fixed top-0 left-0 w-0 h-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div
          className="absolute inset-0 filter blur-[40px]"
          style={{ filter: "url(#goo)" }}
        >
          {/* Pink */}
          <div
            className="absolute w-[2000px] h-[2000px] top-[10%] left-[10%] rounded-full opacity-80"
            style={{
              background:
                "radial-gradient(circle at center, rgba(134, 3, 243, 0.8) 0, rgba(134, 3, 243, 0) 50%)",
              mixBlendMode: "hard-light",
              transformOrigin: "calc(50% - 400px) center",
              animation: "moveInCircle 20s reverse infinite",
            }}
          ></div>
          <div
            className="absolute w-[2000px] h-[2000px] top-[10%] left-[10%] rounded-full opacity-80"
            style={{
              background:
                "radial-gradient(circle at center, rgba(134, 3, 243, 0.8) 0, rgba(134, 3, 243, 0) 50%)",
              mixBlendMode: "hard-light",
              transformOrigin: "calc(50% - 400px) center",
              animation: "moveInCircle 20s reverse infinite",
            }}
          ></div>
          {/* Blue */}
          <div
            className="absolute w-[2000px] h-[2000px] top-[10%] left-[10%] rounded-full opacity-80"
            style={{
              background:
                "radial-gradient(circle at center, rgba(77, 11, 255, 0.8) 0, rgba(77, 11, 255, 0) 50%)",
              mixBlendMode: "hard-light",
              transformOrigin: "calc(50% + 400px) center",
              animation: "moveInCircle 40s linear infinite",
            }}
          ></div>
          {/* mouse bubble */}
          <div
            ref={interactiveRef}
            className="absolute w-[2000px] h-[2000px] top-[-50%] left-[-50%] rounded-full opacity-70"
            style={{
              background:
                "radial-gradient(circle at center, rgba(77, 11, 255, 0.8) 0, rgba(77, 11, 255, 0) 50%)",
              mixBlendMode: "hard-light",
            }}
          ></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes moveInCircle {
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(180deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes moveVertical {
          0% {
            transform: translateY(-50%);
          }
          50% {
            transform: translateY(50%);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes moveHorizontal {
          0% {
            transform: translateX(-50%) translateY(-10%);
          }
          50% {
            transform: translateX(50%) translateY(10%);
          }
          100% {
            transform: translateX(-50%) translateY(-10%);
          }
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="text-foreground">The Modern</span>{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-chart-1 to-chart-2 dark:from-chart-3 dark:to-chart-2">
                Dashboard
              </span>{" "}
              <span className="text-foreground">Experience</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
              Beautiful analytics, customizable interfaces, and enterprise-grade
              security. All in one powerful dashboard.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" asChild className="rounded-full px-8 text-base">
              <Link href="/signup">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="rounded-full px-8 text-base"
            >
              <Link href="#features">Learn More</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 md:mt-24 max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl"
        >
          <div className="relative">
            <div className="aspect-video w-full bg-muted dark:bg-muted/20 rounded-xl overflow-hidden border border-border">
              <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background/80 dark:from-background/0 dark:via-background/0 dark:to-background/80"></div>
              <div className="p-4 absolute top-0 left-0 right-0 bg-background/50 backdrop-blur-sm border-b border-border dark:bg-background/30 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-muted-foreground">
                  Dashboard Preview
                </div>
              </div>
              <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-12 gap-4 p-16 pt-20">
                <div className="md:col-span-3 flex flex-col gap-4">
                  <div className="h-20 bg-primary/10 dark:bg-primary/20 rounded-lg"></div>
                  <div className="h-40 bg-primary/10 dark:bg-primary/20 rounded-lg"></div>
                  <div className="h-28 bg-primary/10 dark:bg-primary/20 rounded-lg"></div>
                </div>
                <div className="md:col-span-9 flex flex-col gap-4">
                  <div className="h-32 bg-primary/10 dark:bg-primary/20 rounded-lg"></div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="h-24 bg-chart-1/20 rounded-lg"></div>
                    <div className="h-24 bg-chart-2/20 rounded-lg"></div>
                    <div className="h-24 bg-chart-3/20 rounded-lg"></div>
                  </div>
                  <div className="h-40 bg-primary/10 dark:bg-primary/20 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
