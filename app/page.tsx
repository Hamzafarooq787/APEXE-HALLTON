"use client";

import { useState } from "react";

export default function Home() {
  // Accordion state: track which FAQ is open (null = none)
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
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
            alt="Construction site"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm-AnntIYz7rfOPkh5X_VLYeaw5ZWEgJD0qrYrtIpJZVzV5NFB8UXSoUxqQE_8zvduXUVYYBt2Asvk-5oTZ5cZGH-pHJZg0tu_GnisbkL1hngLuaMohIOrVqi_XbWQFfOsOSFr9J5OaPsRjVffy5adXrU8feaVjyN3_ETVz6RLP8K7ffhRi3Rtc69lRHTpyLeC_hvAkOj-AJS7PcOg6Jxuhzmc2WDttwBJUJf_U8TMuXaKZ-igjK_m0FMQkYchyvnfxK_AayM9GUU4"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto pt-32 pb-20">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block py-1 px-4 bg-primary-container text-on-primary-container font-headline font-bold text-xs tracking-widest uppercase mb-5">
              Established Engineering Excellence
            </span>
            <h1 className="text-white font-headline text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] mb-5">
              Building Strong Foundations <br className="hidden sm:block"/> for a Better Future
            </h1>
            <p className="text-on-primary-container text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-8 max-w-3xl mx-auto">
              Reliable Construction Services Across the UK. From monumental structural engineering to high-end residential renovations.
            </p>
            <div className="flex flex-wrap gap-6 justify-center mt-2">
              <button className="bg-surface-container-lowest text-primary px-8 py-4 md:px-10 md:py-4 font-headline font-bold uppercase tracking-widest text-sm hover:translate-y-[-2px] transition-transform shadow-xl rounded-md">
                Get a Quote
              </button>
              <button className="bg-transparent border-2 border-white/30 text-white px-8 py-4 md:px-10 md:py-4 font-headline font-bold uppercase tracking-widest text-sm backdrop-blur-sm hover:bg-white/10 transition-colors rounded-md">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary font-headline font-bold uppercase tracking-wider text-sm mb-4">
            Our Services
          </p>
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline text-5xl font-black tracking-tighter text-primary leading-none mb-6">
                Our Engineered Solutions
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                We provide a comprehensive suite of construction and engineering services, maintaining the highest standards of safety and structural integrity across every discipline.
              </p>
            </div>
            <div className="font-headline font-bold text-primary tracking-widest uppercase text-xs border-b-4 border-primary pb-2">
              View All Services
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Residential */}
            <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-low h-[400px]">
              <img
                alt="Residential Project"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7ic-EqLkhSnAghvVK2482NlxlDcQ1TNip1Sczr4YzKjRJ2e2Y-97hwEeHbuCEuw6dWI0rwByrGABmyNH7ky9k80-72XtppBHF0EzZJnv1VblPw43JpIGT7qoeteq5nehWkMqTeyqJ9_ZImHFTjZ8V0EeFqFibJv0WDItpspnU5upqMVFAP9ZcCbfDzK74XVF43a3VPjzDHaQbUqpKmcTdLE_Os-JJD00dGWF5BWnQSj_Of5CP0BH0DIiNMmh_UrsdEpb2BwsVUrhA"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-12">
                <h3 className="text-white font-headline text-3xl font-bold mb-2">
                  Residential Construction
                </h3>
                <p className="text-on-primary-container max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Bespoke home building and luxury developments tailored to the UK's most demanding architectural visions.
                </p>
              </div>
            </div>
            {/* Structural Engineering */}
            <div className="md:col-span-4 group relative overflow-hidden bg-surface-container-low h-[400px]">
              <img
                alt="Structural Engineering"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://www.finmecgroup.it/wp-content/uploads/2023/12/03-1.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-10">
                <h3 className="text-white font-headline text-2xl font-bold mb-2">
                  Structural Engineering
                </h3>
                <p className="text-on-primary-container text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Precision calculations and robust design frameworks for enduring stability and safety.
                </p>
              </div>
            </div>
            {/* Commercial */}
            <div className="md:col-span-4 group relative overflow-hidden bg-surface-container-low h-[400px]">
              <img
                alt="Commercial Construction"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCODudfoqAIcRVZPovwFTmML6AveJLyMw8nfin20sJJweW6AztQBELTjKpzSTweSU6zCYNkBV4HJ88pqIpw0PYC1GW3bZEjMju1usFQngVYXG6QwzzpUG06h_A4v6jdV3acCyD2-ujOQ4lQ_7TfUnkYqpTDB1fx--hQuZDuCXeoyFOU3L0gBWEL4NxdRWEq8KyTiUuQR4X_UUD8tTuZUxms-O_pi2OfaOlt__972mBeQMq7CpFKHh4mkXWIisj_SyFYxdjftNW-UBap"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-10">
                <h3 className="text-white font-headline text-2xl font-bold mb-2">
                  Commercial
                </h3>
                <p className="text-on-primary-container text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Industrial scale projects delivered with corporate precision.
                </p>
              </div>
            </div>
            {/* Renovation */}
            <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-low h-[400px]">
              <img
                alt="Renovation"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC73U_EMDg9ha_qqgC3mP6q5G4zAzVOmPazNNQsNu2cNVD2FO2yK-rz8WntepdcIFZtmnEqJNb_lEKuqRsnvkRqa70HzK7GbO1JrLKbxh9KtGboZxcuIiV4BGYIa6esqUTJJvq-k8wnCzPqtenPey-DKuiYXQNjTAcwZgpGNV4UE-4uaB7vIgVuZfAsv2pZSBlxmAwtmwjoYQH4uKOB9lCGeWTp5vAuYcz7CxrPhiadYGnMjMIH4xOc05R67tMcE0AtWLVOApxKXB9J"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-12">
                <h3 className="text-white font-headline text-3xl font-bold mb-2">
                  Heritage Renovation
                </h3>
                <p className="text-on-primary-container max-w-md opacity-0 group-hover:opacity-100 transition-opacity">
                  Restoring the past while engineering for the future. Careful preservation and structural modernization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us (Engineered for Performance) */}
      <section className="py-32 bg-surface-container">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <img
                alt="Expert Team"
                className="relative z-10 w-full h-[600px] object-cover shadow-2xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCEBPCaGBqPFHB_aeiKnyUTDdax5bmVAWxAFwa0kbt-BEXgg4BxXUb_7dMrk7yEd2oeaE22d_1rtwO-3zF3nLqtK56uD9aNo2_UWgaERneiqVZ8waUSuTtTNTitcWzJ9sMEsjEEOPtCb-TuqxI0n8efSdCjseCrb9-vJ5L7w1-hqpdwg-7nIbT3e8TbA5PoQLtO5CFvVeQZc9JWZ1sjapksgJaTm1pKKYj0uGBgh0q0joQCsjr4dwhgZUNDbyjuEuu_Mc087sOjIQe"
              />
              <div className="absolute -bottom-10 -right-10 z-20 bg-primary p-12 text-white hidden md:block">
                <div className="text-6xl font-black font-headline">24+</div>
                <div className="text-xs tracking-widest uppercase font-bold mt-2">Years of Authority</div>
              </div>
            </div>
            <div>
              <h2 className="font-headline text-5xl font-black tracking-tighter text-primary mb-12">Engineered for Performance</h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-white text-primary">
                    <span className="material-symbols-outlined font-light">engineering</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-xl font-bold text-primary mb-2">Experienced Team</h4>
                    <p className="text-on-surface-variant leading-relaxed">Our site managers and engineers carry decades of accredited expertise in high-stakes structural environments.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-white text-primary">
                    <span className="material-symbols-outlined font-light">verified</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-xl font-bold text-primary mb-2">Quality Workmanship</h4>
                    <p className="text-on-surface-variant leading-relaxed">We don't just build; we craft. Every joint, beam, and finish is inspected for absolute perfection.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-white text-primary">
                    <span className="material-symbols-outlined font-light">schedule</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-xl font-bold text-primary mb-2">On-Time Delivery</h4>
                    <p className="text-on-surface-variant leading-relaxed">Rigorous project management frameworks ensure your milestones are met without exception.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-white text-primary">
                    <span className="material-symbols-outlined font-light">payments</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-xl font-bold text-primary mb-2">Affordable Pricing</h4>
                    <p className="text-on-surface-variant leading-relaxed">Strategic procurement and efficient engineering allow us to offer premium results at competitive values.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-primary font-headline font-bold text-xs tracking-[0.3em] uppercase">Industry Recognition</span>
            <h2 className="text-5xl font-black tracking-tighter text-primary mt-4">Voices of Authority</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-surface-container-low p-12 relative">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6 opacity-30">format_quote</span>
              <p className="text-on-surface text-lg leading-relaxed mb-8 italic">"APEXE HALLTON transformed our commercial space with a level of precision we haven't seen in the UK market. Their structural insights saved us weeks on the timeline."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-300 rounded-full overflow-hidden">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZnk1ev4u8wVcjOqLSi1YWpKZRoPULAPuPWPFKSTCXg2LtPGQhkcaDqYqZGC0syPOAWauB73SO7zO5N7-OT1PrfwRjRJn6KASmPZ95vP8d2Qu5-iwts0o_4-oIdPXOypTr3Ppk-ZuHWzAVb5tBu4mUVmEux9uh00sVRDlnx1slS20ppcSoUuoUyfD68jIa4T1c6nYTmVpbl770hki08uNjLadSaxOIoWlz0d5hTrlWhCiZGQlfcGFKpCuUyjMzbL_eMybqnXPd8YPC" alt="Marcus Vane" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-primary text-sm">Marcus Vane</div>
                  <div className="text-xs text-on-surface-variant uppercase tracking-wider">CEO, Vane Enterprises</div>
                </div>
              </div>
            </div>
            {/* Testimonial 2 (highlighted) */}
            <div className="bg-primary p-12 relative text-white translate-y-[-16px]">
              <span className="material-symbols-outlined text-on-primary-container text-4xl mb-6 opacity-50">format_quote</span>
              <p className="text-on-primary text-lg leading-relaxed mb-8 italic">"The engineering prowess displayed during our residential renovation was exceptional. They managed to merge historic aesthetics with modern load-bearing solutions seamlessly."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-300 rounded-full overflow-hidden">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuByaMGEGPBrlAOmhjalV8Ut3sswZF86VcUNPz2tzLAZ4UueGL_4J86X9eQ9i5R5tWTjdJmJaLzDNMyTlartNrHtaioeag_9gSn5v8gbDz8nHnBPZwhTrUoqLRF2riL5byHMzQe2lY0XqbTBVxq3byUMcaftXc3F5iqnJ-kAaISLZEMzh2W8QO_nS7ld3bwFaueY5Dgosi3DXa8TEdx3WQN53L4vQcZRQHO3lsNdYiZC_YkoO9Zb0h-b1_aUqjhW9S8uwCFE9sZ1Lsy2" alt="Sarah Jenkins" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Sarah Jenkins</div>
                  <div className="text-xs text-on-primary-container uppercase tracking-wider">Architectural Consultant</div>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-surface-container-low p-12 relative">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6 opacity-30">format_quote</span>
              <p className="text-on-surface text-lg leading-relaxed mb-8 italic">"Reliable, transparent, and technically superior. APEXE HALLTON is our go-to for any complex structural engineering requirements in London."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-300 rounded-full overflow-hidden">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrcPCMO0CaryKECW6P9OXX8DL-8SjibDzWQfFcooXM3DtDIm-RB_iNRdkFkxfaFiSZQbWQYPU8qYmgyFaYGIkZZz1-usy7WZFciRi3AGKB8lxZHB2cGoFmTSXXaZ3sLl7Ez_JKvjfv3VW4-q91yk9eV7L3BQ0LF2XyRQTZSCYTp1MOYUnV4Qt72RHziZGNb4ON1mzpNOOmhXe2zpUC8pzsoFBXDczu1fq0KjqK88CJ3dUIhrHHTssuDxnm5iJWM0owgDZUHLF55-od" alt="David Thorne" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-primary text-sm">David Thorne</div>
                  <div className="text-xs text-on-surface-variant uppercase tracking-wider">Principal, Thorne Builders</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Accordion with Icons */}
      <section className="py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary font-headline font-bold uppercase tracking-wider text-sm mb-4">
            Common Questions
          </p>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline text-5xl font-black tracking-tighter text-primary leading-none mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Everything you need to know about our processes, safety standards, and project delivery.
              </p>
            </div>
            <div className="font-headline font-bold text-primary tracking-widest uppercase text-xs border-b-4 border-primary pb-2">
              Get in Touch
            </div>
          </div>

          {/* Accordion FAQ Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-primary/20">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center py-6 text-left group"
                >
                  <h3 className="font-headline text-xl font-bold text-primary pr-4">
                    {faq.q}
                  </h3>
                  <span className="material-symbols-outlined text-primary text-2xl transition-transform duration-300">
                    {openIndex === idx ? "remove" : "add"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === idx ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-on-surface-variant/80 text-base leading-relaxed pl-2">
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