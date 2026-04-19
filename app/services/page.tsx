"use client";

import { useEffect, useRef, useState } from "react";

/* 🔹 Reusable Service Block (Same Design for 1,2,3) */
type ServiceBlockProps = {
  title: string;
  desc: string;
  img: string;
  reverse?: boolean;
};

function ServiceBlock({ title, desc, img, reverse = false }: ServiceBlockProps) {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className={`${reverse ? "md:order-2" : ""}`}>
          <div className="overflow-hidden rounded-xl shadow-xl group">
            <img
              src={img}
              alt={title}
              className="w-full h-[300px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Content */}
        <div className={`${reverse ? "md:order-1" : ""}`}>
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">
            {title}
          </h2>
          <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
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

  /* 🔹 Counter Animation */
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

      {/* 🔥 HERO SECTION (FIXED) */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-center">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD951jfr_yM15FWMoJr__Re41RYAkNY9-lXywN00Bpxrj7QnFVvalrHobpTM2isk3ySp1eDzB1nIyLZFPr83ipLAADXpakTF0gjhg1_7RHygvPrsLnrrwAbcQnLOv4V9aQwCm6C9c3xBmKEigYyTLBVgKcqZ-HE_rKeqRGZtylukQYHDvjAehToiT06fOnwvRi7NQgSP6Ja9sp0NtkeZkNbpEiiPgagUcoIjY_9GqsSwIHNR_AwJLxWwQ0AFRWt_t9cK18YumsaVPC"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-white text-4xl md:text-7xl font-black leading-tight mb-4">
            Defining the <br /> Future of Structure.
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-6">
            Engineering precision for modern architecture.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-primary px-6 py-3 text-white font-bold rounded shadow-lg">
              View Work
            </button>
            <button className="border border-white px-6 py-3 text-white rounded">
              Request Quote
            </button>
          </div>
        </div>

        {/* Floating Badge */}
        <div
          ref={statsRef}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-6 py-2 rounded-full shadow"
        >
          <span className="font-black text-primary text-xl">{count}+</span>
          <span className="text-xs ml-2 font-bold">Years Experience</span>
        </div>

      </section>

      {/* 🔹 SERVICES (SAME DESIGN) */}
      <ServiceBlock
        title="Residential Construction"
        desc="We build premium homes with structural excellence and modern design."
        img="https://lh3.googleusercontent.com/aida-public/AB6AXuBm7V_OHjVW9NTARRyD3SwB8lkxi1wPCFeuFm88ztGMw05WCjDPajX_K8tF-TI2tzVukznJTrtpXu4pmbZfw_ZnS7U0AUo2PJ0s3DKauSR7eeCSdpntBwzMNEkcv4GSFNI13kmcaY-b1Bd-gwz0ax7TXHUZ16GD_KnHrOq4M7GsHJAqFgWxdFx_VEkOQ5ahDBwP9NjnZh1KThIs90GfclDY_2pQyRGSbGCUtBujxBaTX-JqVQN7aLP9XIdWDgCCPboAHElfe6pdIG1q"
      />

      <ServiceBlock
        title="Commercial Projects"
        desc="Corporate buildings, offices, and industrial structures built for performance."
        img="https://lh3.googleusercontent.com/aida-public/AB6AXuDxnQVitkZ1Rr6kmnl2vflSuuUqMxlR1iAmQ5X0ey2LOKM5rSJXvo-VVIwJ8dVMHdg07MOf4s1aqTpMdcgSuh7Y4yKC8X47nVPHgPkU643MnKWjCUUHAYNTsEhkNrkyc24y38DJoN6hmQ_-EMx8XLafRkhs0cQUeuj_SYsLtYwJMG5wA2QPfcbBKswDyNtcCet0dURjX2-06LPYeW_wUpHgB0JZAplH5xzII8M_Y7vKrqQEylShORQ4FuPL0vZAYeGtXsokA5bW8wzf"
        reverse
      />

      <ServiceBlock
        title="Renovation & Maintenance"
        desc="Upgrade, restore, and maintain structures with long-term durability."
        img="https://lh3.googleusercontent.com/aida-public/AB6AXuCI4kEnNkq5oANctRRYqEFzdQOdGZMDrb67aS0yBDFoDT86WlzNdK9TOzZJuAiO6Xy_4cF5rlyxJcv2oH_wIeIPvqieFZSk2lbde_kASmbL2oEErj2HXAXQdLB8Pe-7SIQ2qhlWPhvYhNsKONG87XWuiM4f6fE3ggLDZsg_v-wew7-XOfqOAeBeKkk4EFOTFtW5otB6_jXhc8iWD1nL3aCFIfIXB-Pf3u5Qu71TNFgO-02-YUkFZz_I8S48qfX_KWUaqJ5GsGxr5RwL"
      />

     {/* Service 04: Structural Engineering */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-primary">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-20 items-center"> 
          <div className="lg:w-1/2"> <span className="text-sm font-bold text-primary-fixed-dim uppercase tracking-[0.3em] mb-4 block">Service 04</span> <h2 className="text-4xl md:text-5xl font-black font-headline text-white mb-6 tracking-tighter"> Structural Engineering </h2> 
          <p className="text-lg text-on-primary-container leading-relaxed mb-10"> The core of APEXE HALLTON. Our engineers utilize advanced finite element analysis to ensure every structure we touch is optimized for load, wind, and longevity. </p> <div className="space-y-8"> {[ { title: "FEA & Modeling", desc: "Advanced computer simulation for stress-testing complex geometries." }, { title: "Foundation Design", desc: "Custom geostructural solutions for challenging soil conditions." }, { title: "Steel & Concrete Precision", desc: "Optimizing material usage for maximum structural efficiency." } ].map((item, idx) => ( <div key={idx} className="border-l-4 border-primary-fixed-dim pl-6 py-2 transition-all hover:pl-8"> <h3 className="text-white font-bold text-xl mb-1">{item.title}</h3> <p className="text-primary-fixed-dim text-sm">{item.desc}</p> </div> ))} </div> </div> <div className="lg:w-1/2 grid grid-cols-2 gap-4"> <img className="w-full h-72 md:h-80 object-cover rounded-xl shadow-xl" alt="close up of steel reinforcements and rebar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8IZGThxTO2jhV1OHeCNelGJxLVG1cEteqSLP22oRBnEVKUXfToK8zcR79OzRIoCAPl7SG0qO6aXXFh9DqUF0j5EHcN3EMl899PMDqJfs2ANBEnQ18jSjlMuX2pYIu-wDcWgpVE0fjqomEWfMBDVDgsqdpRCYGN8KvnL1XCG4k2hmuY2beu4v5BUC9Q-DuEUe1XA-3DUDHzFycnwsIt3V5Xq8u9QHHcLr-zeV2S8oMc5VcbPvnoJ4fc-0GFlZqh6IlnzPl8QuvsZ" /> <img className="w-full h-72 md:h-80 object-cover mt-8 md:mt-12 rounded-xl shadow-xl" alt="engineer looking at complex 3D blueprints on a high-resolution screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkcpg7fv9kpYKe4FU8CVLbvJ0pNqpxSzlWp532O-52llGhEEDJ7HuKfVJlfk65DaEEDGZjQagl7vmSRLPtl0cGlN4zv8zcAx51ZrItqwDRLOaOPwxs67X_34-XkTO6a5QHLahnrq0UEXzkNDqe8b3kQsS1PZtiD2zAQtRw3g_TyMFpyuD0P43wcYy2iOkF8xmOVZTSzRPGJfzDmb-K-lzBHeF6P11ZF2CLhMIwAbP3JGwC8rnFWMqeGGG-6i2eUji1k50C6Xofbihr" /> </div> </div> </section> {/* Final CTA */} <section className="py-20 md:py-24 px-6 md:px-12 bg-surface-container-highest"> <div className="max-w-4xl mx-auto text-center"> <h3 className="text-3xl md:text-4xl font-black font-headline text-primary mb-6 tracking-tighter"> Ready to Build Authority? </h3> <p className="text-on-surface-variant text-base md:text-lg mb-8"> Partner with the architectural authority for your next landmark project. </p> <button className="px-10 md:px-12 py-4 md:py-5 bg-primary text-white font-black text-base md:text-lg hover:bg-primary-container transition-all rounded-md shadow-xl"> REQUEST A CONSULTATION </button> </div> </section> </main>
  );
}