"use client";

import { useState } from "react";

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What is your typical project timeline?",
      a: "Timelines vary based on scale and complexity. A residential build typically takes 6–12 months, while commercial projects can range from 12–24 months. We provide detailed schedules during consultation."
    },
    {
      q: "Do you handle planning permissions?",
      a: "Yes, our in-house team manages all necessary planning applications, building regulations approvals, and heritage consents for your project."
    },
    {
      q: "What safety standards do you follow?",
      a: "We exceed UK health & safety regulations (CDM 2015), hold CHAS accreditation, and conduct daily site safety audits."
    },
    {
      q: "Can you work on listed buildings?",
      a: "Absolutely. Our heritage renovation specialists have extensive experience with Grade I, Grade II* and Grade II listed structures, working closely with conservation officers."
    },
    {
      q: "How do you manage project costs?",
      a: "We provide fixed-price contracts with transparent cost breakdowns and regular budget reviews. No hidden fees."
    },
    {
      q: "What warranty do you offer?",
      a: "All our work comes with a 10-year structural warranty and a 2-year defects liability period."
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img
            alt="UK construction site at golden hour with cranes and steel frame"
            className="w-full h-full object-cover"
            src="/images/hero-construction.jpg"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 max-w-7xl mx-auto pt-28 pb-16 sm:pt-32 sm:pb-20">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block py-1 px-4 bg-primary-container text-on-primary-container font-headline font-bold text-xs tracking-widest uppercase mb-4 sm:mb-5">
              Established Engineering Excellence
            </span>
            <h1 className="text-white font-headline text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-[1.1] mb-4 sm:mb-5 text-balance">
              Building Strong Foundations <br className="hidden sm:block" /> for a Better Future
            </h1>
            <p className="text-on-primary-container text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto">
              Reliable Construction Services Across the UK. From monumental structural engineering to high-end residential renovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center mt-2">
              <button className="bg-surface-container-lowest text-primary px-6 py-3 sm:px-8 sm:py-4 md:px-10 font-headline font-bold uppercase tracking-widest text-xs sm:text-sm hover:translate-y-[-2px] transition-transform shadow-xl rounded-md">
                Get a Quote
              </button>
              <button className="bg-transparent border-2 border-white/30 text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 font-headline font-bold uppercase tracking-widest text-xs sm:text-sm backdrop-blur-sm hover:bg-white/10 transition-colors rounded-md">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-primary py-6 sm:py-8 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
          {[
            { value: "24+", label: "Years Experience" },
            { value: "500+", label: "Projects Completed" },
            { value: "98%", label: "On-Time Delivery" },
            { value: "10yr", label: "Structural Warranty" },
          ].map((stat) => (
            <div key={stat.label} className="text-white">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black font-headline">{stat.value}</div>
              <div className="text-xs sm:text-sm text-on-primary-container uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary font-headline font-bold uppercase tracking-wider text-xs sm:text-sm mb-3 sm:mb-4">
            Our Services
          </p>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 md:mb-24 gap-4 sm:gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-primary leading-none mb-3 sm:mb-6 text-balance">
                Our Engineered Solutions
              </h2>
              <p className="text-on-surface-variant text-sm sm:text-base md:text-lg leading-relaxed">
                We provide a comprehensive suite of construction and engineering services, maintaining the highest standards of safety and structural integrity across every discipline.
              </p>
            </div>
            <div className="font-headline font-bold text-primary tracking-widest uppercase text-xs border-b-4 border-primary pb-2 shrink-0">
              View All Services
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8">
            {/* Residential */}
            <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-low h-[260px] sm:h-[320px] md:h-[400px]">
              <img
                alt="Modern luxury residential home exterior"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/images/residential.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-6 sm:p-8 md:p-12">
                <h3 className="text-white font-headline text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
                  Residential Construction
                </h3>
                <p className="text-on-primary-container text-sm sm:text-base max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Bespoke home building and luxury developments tailored to the UK&apos;s most demanding architectural visions.
                </p>
              </div>
            </div>
            {/* Structural Engineering */}
            <div className="md:col-span-4 group relative overflow-hidden bg-surface-container-low h-[260px] sm:h-[320px] md:h-[400px]">
              <img
                alt="Steel reinforcement rebar for structural engineering"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/images/structural-engineering.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-6 sm:p-8 md:p-10">
                <h3 className="text-white font-headline text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
                  Structural Engineering
                </h3>
                <p className="text-on-primary-container text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Precision calculations and robust design frameworks for enduring stability and safety.
                </p>
              </div>
            </div>
            {/* Commercial */}
            <div className="md:col-span-4 group relative overflow-hidden bg-surface-container-low h-[260px] sm:h-[320px] md:h-[400px]">
              <img
                alt="Modern glass and steel commercial office building"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/images/commercial.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-6 sm:p-8 md:p-10">
                <h3 className="text-white font-headline text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
                  Commercial
                </h3>
                <p className="text-on-primary-container text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Industrial scale projects delivered with corporate precision.
                </p>
              </div>
            </div>
            {/* Renovation */}
            <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-low h-[260px] sm:h-[320px] md:h-[400px]">
              <img
                alt="Heritage building renovation with scaffolding"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/images/heritage-renovation.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-6 sm:p-8 md:p-12">
                <h3 className="text-white font-headline text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
                  Heritage Renovation
                </h3>
                <p className="text-on-primary-container text-sm sm:text-base max-w-md opacity-0 group-hover:opacity-100 transition-opacity">
                  Restoring the past while engineering for the future. Careful preservation and structural modernization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24 md:py-32 bg-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-24 items-center">
            <div className="relative">
              <img
                alt="Construction engineers reviewing blueprints on site"
                className="relative z-10 w-full h-[300px] sm:h-[420px] md:h-[520px] lg:h-[600px] object-cover shadow-2xl"
                src="/images/expert-team.jpg"
              />
              <div className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 z-20 bg-primary p-6 sm:p-8 md:p-12 text-white hidden sm:block">
                <div className="text-4xl sm:text-5xl md:text-6xl font-black font-headline">24+</div>
                <div className="text-xs tracking-widest uppercase font-bold mt-2">Years of Authority</div>
              </div>
            </div>
            <div>
              <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-primary mb-8 sm:mb-12 text-balance">Engineered for Performance</h2>
              <div className="space-y-8 sm:space-y-10 md:space-y-12">
                {[
                  { icon: "engineering", title: "Experienced Team", desc: "Our site managers and engineers carry decades of accredited expertise in high-stakes structural environments." },
                  { icon: "verified", title: "Quality Workmanship", desc: "We don't just build; we craft. Every joint, beam, and finish is inspected for absolute perfection." },
                  { icon: "schedule", title: "On-Time Delivery", desc: "Rigorous project management frameworks ensure your milestones are met without exception." },
                  { icon: "payments", title: "Affordable Pricing", desc: "Strategic procurement and efficient engineering allow us to offer premium results at competitive values." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 sm:gap-6">
                    <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white text-primary">
                      <span className="material-symbols-outlined font-light">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-headline text-base sm:text-lg md:text-xl font-bold text-primary mb-1 sm:mb-2">{item.title}</h4>
                      <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-24">
            <span className="text-primary font-headline font-bold text-xs tracking-[0.3em] uppercase">Industry Recognition</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-primary mt-3 sm:mt-4 text-balance">Voices of Authority</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Testimonial 1 */}
            <div className="bg-surface-container-low p-6 sm:p-8 md:p-12 relative">
              <span className="material-symbols-outlined text-primary-container text-3xl sm:text-4xl mb-4 sm:mb-6 opacity-30">format_quote</span>
              <p className="text-on-surface text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 italic">&ldquo;APEXE HALLTON transformed our commercial space with a level of precision we haven&apos;t seen in the UK market. Their structural insights saved us weeks on the timeline.&rdquo;</p>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-300 rounded-full overflow-hidden shrink-0">
                  <img src="/images/avatar-marcus-vane.jpg" alt="Marcus Vane" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-primary text-xs sm:text-sm">Marcus Vane</div>
                  <div className="text-xs text-on-surface-variant uppercase tracking-wider">CEO, Vane Enterprises</div>
                </div>
              </div>
            </div>
            {/* Testimonial 2 (highlighted) */}
            <div className="bg-primary p-6 sm:p-8 md:p-12 relative md:translate-y-[-16px]">
              <span className="material-symbols-outlined text-on-primary-container text-3xl sm:text-4xl mb-4 sm:mb-6 opacity-50">format_quote</span>
              <p className="text-on-primary text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 italic">&ldquo;The engineering prowess displayed during our residential renovation was exceptional. They managed to merge historic aesthetics with modern load-bearing solutions seamlessly.&rdquo;</p>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-300 rounded-full overflow-hidden shrink-0">
                  <img src="/images/avatar-sarah-jenkins.jpg" alt="Sarah Jenkins" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-white text-xs sm:text-sm">Sarah Jenkins</div>
                  <div className="text-xs text-on-primary-container uppercase tracking-wider">Architectural Consultant</div>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-surface-container-low p-6 sm:p-8 md:p-12 relative">
              <span className="material-symbols-outlined text-primary-container text-3xl sm:text-4xl mb-4 sm:mb-6 opacity-30">format_quote</span>
              <p className="text-on-surface text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 italic">&ldquo;Reliable, transparent, and technically superior. APEXE HALLTON is our go-to for any complex structural engineering requirements in London.&rdquo;</p>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-300 rounded-full overflow-hidden shrink-0">
                  <img src="/images/avatar-david-thorne.jpg" alt="David Thorne" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-primary text-xs sm:text-sm">David Thorne</div>
                  <div className="text-xs text-on-surface-variant uppercase tracking-wider">Principal, Thorne Builders</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary font-headline font-bold uppercase tracking-wider text-xs sm:text-sm mb-3 sm:mb-4">
            Common Questions
          </p>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-14 md:mb-20 gap-4 sm:gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-primary leading-none mb-3 sm:mb-6 text-balance">
                Frequently Asked Questions
              </h2>
              <p className="text-on-surface-variant text-sm sm:text-base md:text-lg leading-relaxed">
                Everything you need to know about our processes, safety standards, and project delivery.
              </p>
            </div>
            <div className="font-headline font-bold text-primary tracking-widest uppercase text-xs border-b-4 border-primary pb-2 shrink-0">
              Get in Touch
            </div>
          </div>

          {/* Accordion FAQ Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-2">
            {faqs.map((faq, idx: number) => (
              <div key={idx} className="border-b border-primary/20">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center py-4 sm:py-6 text-left group"
                >
                  <h3 className="font-headline text-sm sm:text-base md:text-xl font-bold text-primary pr-4">
                    {faq.q}
                  </h3>
                  <span className="material-symbols-outlined text-primary text-xl sm:text-2xl transition-transform duration-300 shrink-0">
                    {openIndex === idx ? "remove" : "add"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? "max-h-96 pb-4 sm:pb-6" : "max-h-0"}`}
                >
                  <p className="text-on-surface-variant/80 text-xs sm:text-sm md:text-base leading-relaxed pl-2">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
