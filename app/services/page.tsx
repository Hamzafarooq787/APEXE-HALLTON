"use client";

import { useEffect, useRef, useState } from "react";

type ServiceBlockProps = {
  title: string;
  desc: string;
  img: string;
  reverse?: boolean;
};

function ServiceBlock({ title, desc, img, reverse = false }: ServiceBlockProps) {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
        <div className={`${reverse ? "md:order-2" : ""}`}>
          <div className="overflow-hidden rounded-xl shadow-xl group">
            <img
              src={img}
              alt={title}
              className="w-full h-[220px] sm:h-[300px] md:h-[420px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
        <div className={`${reverse ? "md:order-1" : ""}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-3 sm:mb-4 text-balance">
            {title}
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base md:text-lg leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  const [count, setCount] = useState(0);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const end = 25;
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) clearInterval(timer);
          }, 40);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="pt-20">

      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[90vh] flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <img
            src="/images/services-hero.jpg"
            alt="Aerial view of a large UK construction site with cranes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 px-4 sm:px-6 max-w-4xl">
          <h1 className="text-white text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-3 sm:mb-4 text-balance">
            Defining the <br /> Future of Structure.
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl mb-5 sm:mb-6">
            Engineering precision for modern architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-primary px-6 py-3 text-white font-bold rounded shadow-lg text-sm sm:text-base">
              View Work
            </button>
            <button className="border border-white px-6 py-3 text-white rounded text-sm sm:text-base">
              Request Quote
            </button>
          </div>
        </div>

        <div
          ref={statsRef}
          className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-5 sm:px-6 py-2 rounded-full shadow"
        >
          <span className="font-black text-primary text-lg sm:text-xl">{count}+</span>
          <span className="text-xs sm:text-sm ml-2 font-bold">Years Experience</span>
        </div>
      </section>

      {/* Services */}
      <ServiceBlock
        title="Residential Construction"
        desc="We build premium homes with structural excellence and modern design. Every residential project benefits from our full-service approach — from initial planning to final handover."
        img="/images/residential.jpg"
      />

      <ServiceBlock
        title="Commercial Projects"
        desc="Corporate buildings, offices, and industrial structures built for performance. We handle projects of all scales with the same precision and dedication to quality."
        img="/images/commercial.jpg"
        reverse
      />

      <ServiceBlock
        title="Renovation & Maintenance"
        desc="Upgrade, restore, and maintain structures with long-term durability. Our teams are experts in sympathetic renovations that preserve character while modernizing performance."
        img="/images/renovation.jpg"
      />

      {/* Service 04: Structural Engineering */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-primary">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 sm:gap-16 lg:gap-20 items-center">
          <div className="lg:w-1/2">
            <span className="text-xs sm:text-sm font-bold text-primary-fixed-dim uppercase tracking-[0.3em] mb-3 sm:mb-4 block">Service 04</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-headline text-white mb-4 sm:mb-6 tracking-tighter text-balance">
              Structural Engineering
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-on-primary-container leading-relaxed mb-8 sm:mb-10">
              The core of APEXE HALLTON. Our engineers utilize advanced finite element analysis to ensure every structure we touch is optimized for load, wind, and longevity.
            </p>
            <div className="space-y-6 sm:space-y-8">
              {[
                { title: "FEA & Modeling", desc: "Advanced computer simulation for stress-testing complex geometries." },
                { title: "Foundation Design", desc: "Custom geostructural solutions for challenging soil conditions." },
                { title: "Steel & Concrete Precision", desc: "Optimizing material usage for maximum structural efficiency." },
              ].map((item, idx) => (
                <div key={idx} className="border-l-4 border-primary-fixed-dim pl-5 sm:pl-6 py-2 transition-all hover:pl-8">
                  <h3 className="text-white font-bold text-base sm:text-lg md:text-xl mb-1">{item.title}</h3>
                  <p className="text-primary-fixed-dim text-xs sm:text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-3 sm:gap-4">
            <img
              className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover rounded-xl shadow-xl"
              alt="Steel reinforcement rebar on construction site"
              src="/images/structural-engineering.jpg"
            />
            <img
              className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover mt-6 sm:mt-8 md:mt-12 rounded-xl shadow-xl"
              alt="Engineer reviewing blueprints on site"
              src="/images/expert-team.jpg"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-surface-container-highest">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-primary mb-4 sm:mb-6 text-balance">
            Ready to Start Your Project?
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
            Talk to our engineering team about your requirements and we will provide a detailed proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-primary text-on-primary px-8 sm:px-10 py-3 sm:py-4 font-bold rounded-lg hover:bg-primary-container transition-all text-sm sm:text-base">
              Request a Quote
            </button>
            <button className="bg-secondary-container text-on-secondary-container px-8 sm:px-10 py-3 sm:py-4 font-bold rounded-lg hover:bg-surface-container-high transition-all text-sm sm:text-base">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
