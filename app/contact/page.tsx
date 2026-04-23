export default function Contact() {
  return (
    <main className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[320px] sm:h-[380px] md:h-[409px] min-h-[280px] flex items-center px-4 sm:px-6 md:px-12 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            alt="Modern professional building facade"
            className="w-full h-full object-cover"
            src="/images/contact-hero.jpg"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <span className="inline-block py-1 px-3 bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-4 sm:mb-6 rounded-sm">
            Contact Authority
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white font-headline tracking-tighter leading-none mb-3 sm:mb-4 text-balance">
            ENGINEERING<br />DIALOGUE.
          </h1>
          <p className="text-primary-fixed max-w-xl font-body text-sm sm:text-base md:text-lg leading-relaxed">
            Connect with our specialized engineering team to discuss structural integrity, architectural precision, and
            large-scale project execution.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 -mt-12 sm:-mt-16 md:-mt-20 relative z-30 pb-16 sm:pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            {/* Address Card */}
            <div className="bg-surface-container-lowest p-6 sm:p-8 md:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="bg-secondary-container p-3 sm:p-4 rounded-lg shrink-0">
                  <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">location_on</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-lg sm:text-xl text-on-surface mb-1 sm:mb-2">Headquarters</h3>
                  <p className="text-on-surface-variant font-body leading-relaxed text-sm sm:text-base">
                    19 MAY AVENUE<br />
                    STOKE-ON-TRENT<br />
                    ST6 6EN
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-surface-container-lowest p-6 sm:p-8 md:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="bg-secondary-container p-3 sm:p-4 rounded-lg shrink-0">
                  <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">alternate_email</span>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="font-headline font-bold text-lg sm:text-xl text-on-surface mb-1">General Inquiries</h3>
                    <a className="text-primary font-medium hover:underline block text-sm sm:text-base" href="mailto:sales@apexehallton.co.uk">
                      sales@apexehallton.co.uk
                    </a>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-base sm:text-lg text-on-surface mb-1">Directorate</h3>
                    <a className="text-primary font-medium hover:underline block text-sm sm:text-base" href="mailto:Habte.Kibrom@apexehallton.co.uk">
                      Habte.Kibrom@apexehallton.co.uk
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-surface-container h-[300px] sm:h-[360px] md:h-[400px] w-full overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="bg-white px-4 sm:px-6 py-2 sm:py-3 shadow-xl rounded-sm flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-error"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    location_on
                  </span>
                  <span className="font-headline font-bold text-xs sm:text-sm">ST6 6EN</span>
                </div>
              </div>
              <img
                alt="Map showing location of Stoke-on-Trent"
                className="w-full h-full object-cover grayscale contrast-125 opacity-50"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuANB5cYk13_QPYQJcuQHFt2Q5hRSYqcue5xtmpu50LAKxEXbn2EdLQcNCkJkPmmdznBarRT8AgYyDfNvPUofwUn5_uDHyKktX6UY2sFb5lmc59-DCJbiVrNHcp2eGgv6qfiLa8_NxIIpudBU9JxH89hBucQyFtYMyJiU1xSdQuiGavgSpo-zcdcptKHuxGK1y6Hh1aBE1oAiy3PKiDN4CJ9B94MEQPdGK6M8fVXyq8tVw9YKq7mG9cixutE7_66-VNU0cqjuM1sFclv"
              />
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 md:p-12 shadow-[0_40px_80px_rgba(0,43,76,0.08)] space-y-8 sm:space-y-10 md:space-y-12">
              <div className="border-b border-surface-container pb-6 sm:pb-8">
                <h2 className="text-2xl sm:text-3xl font-black font-headline tracking-tighter text-on-surface mb-2 uppercase">
                  Project Briefing
                </h2>
                <p className="text-on-surface-variant font-body text-sm sm:text-base">
                  Submit your technical requirements or request a comprehensive quotation for architectural services.
                </p>
              </div>

              <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-primary">Full Name</label>
                  <input
                    className="w-full bg-surface-container-highest border-none focus:ring-0 focus:border-b-2 focus:border-primary px-3 sm:px-4 py-3 sm:py-4 font-body transition-all text-sm sm:text-base"
                    placeholder="e.g. Alexander Hall"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-primary">Email Address</label>
                  <input
                    className="w-full bg-surface-container-highest border-none focus:ring-0 focus:border-b-2 focus:border-primary px-3 sm:px-4 py-3 sm:py-4 font-body transition-all text-sm sm:text-base"
                    placeholder="email@company.com"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-primary">Phone Number</label>
                  <input
                    className="w-full bg-surface-container-highest border-none focus:ring-0 focus:border-b-2 focus:border-primary px-3 sm:px-4 py-3 sm:py-4 font-body transition-all text-sm sm:text-base"
                    placeholder="+44 000 000 0000"
                    type="tel"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-primary">Inquiry Type</label>
                  <select className="w-full bg-surface-container-highest border-none focus:ring-0 focus:border-b-2 focus:border-primary px-3 sm:px-4 py-3 sm:py-4 font-body transition-all appearance-none text-sm sm:text-base">
                    <option>Quote Request</option>
                    <option>General Inquiry</option>
                    <option>Site Visit</option>
                    <option>Technical Support</option>
                  </select>
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-primary">
                    Message &amp; Specifications
                  </label>
                  <textarea
                    className="w-full bg-surface-container-highest border-none focus:ring-0 focus:border-b-2 focus:border-primary px-3 sm:px-4 py-3 sm:py-4 font-body transition-all resize-none text-sm sm:text-base"
                    placeholder="Describe your project scope and engineering requirements..."
                    rows={6}
                  ></textarea>
                </div>
                <div className="sm:col-span-2 pt-2 sm:pt-4">
                  <button
                    className="w-full bg-primary text-on-primary py-4 sm:py-5 md:py-6 px-8 sm:px-12 font-headline font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 sm:gap-4 hover:bg-primary-container transition-all group text-sm sm:text-base"
                    type="submit"
                  >
                    Transmit Inquiry
                    <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                  <p className="text-center mt-4 sm:mt-6 text-on-surface-variant text-xs font-body italic opacity-60">
                    * Our engineering response time is typically within 24-48 business hours.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface-container-low py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 overflow-hidden relative">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-primary-container opacity-5 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-headline tracking-tighter text-on-surface mb-4 sm:mb-6 leading-tight text-balance">
              READY TO DEFINE YOUR<br />
              <span className="text-primary">ARCHITECTURAL LEGACY?</span>
            </h2>
            <p className="text-on-surface-variant font-body text-sm sm:text-base md:text-lg leading-relaxed">
              Join forces with APEXE HALLTON LTD for authoritative engineering solutions that stand the test of time and
              technical scrutiny.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="bg-primary text-on-primary px-8 sm:px-10 py-4 sm:py-5 rounded-sm font-headline font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-lg text-xs sm:text-sm">
              Download Credentials
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
