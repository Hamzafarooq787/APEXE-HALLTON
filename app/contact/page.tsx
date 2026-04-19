export default function Contact() {
  return (
    <main className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[409px] min-h-[400px] flex items-center px-6 md:px-12 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            alt="Architectural detailing"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEdCL-IUWMRFqm7s5cltpkmhf2jPtwbxkNfVAtNJXtpYSOHal9hGx55SMpEZ-qdN0dPkl1RXcVb2IG5_w3bCiCKNVkEzwuOoUtMOWq9QUff9jEpnQ30U_tnrDZjN5so67PSSHxW1Yx84YfH94kZiRp_wutq1qgwJJEj480T7h87yr4nanRRtiqaOivW4FPylcKOoniZ_XyYW_fZfdckS7lw8_HY56Uoag-1gsAHw3HvzbgHlRYMyI_bmVC7FMVZXeLvPmfHJBohMpj"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <span className="inline-block py-1 px-3 bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-6 rounded-sm">
            Contact Authority
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white font-headline tracking-tighter leading-none mb-4">
            ENGINEERING<br />DIALOGUE.
          </h1>
          <p className="text-primary-fixed max-w-xl font-body text-lg leading-relaxed">
            Connect with our specialized engineering team to discuss structural integrity, architectural precision, and
            large-scale project execution.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 -mt-20 relative z-30 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="bg-surface-container-lowest p-10 shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
              <div className="flex items-start gap-6">
                <div className="bg-secondary-container p-4 rounded-lg">
                  <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-xl text-on-surface mb-2">Headquarters</h3>
                  <p className="text-on-surface-variant font-body leading-relaxed">
                    19 MAY AVENUE<br />
                    STOKE-ON-TRENT<br />
                    ST6 6EN
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-surface-container-lowest p-10 shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
              <div className="flex items-start gap-6">
                <div className="bg-secondary-container p-4 rounded-lg">
                  <span className="material-symbols-outlined text-primary text-3xl">alternate_email</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-headline font-bold text-xl text-on-surface mb-1">General Inquiries</h3>
                    <a className="text-primary font-medium hover:underline block" href="mailto:sales@apexehallton.co.uk">
                      sales@apexehallton.co.uk
                    </a>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-lg text-on-surface mb-1">Directorate</h3>
                    <a className="text-primary font-medium hover:underline block" href="mailto:Habte.Kibrom@apexehallton.co.uk">
                      Habte.Kibrom@apexehallton.co.uk
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-surface-container h-[400px] w-full overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="bg-white px-6 py-3 shadow-xl rounded-sm flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-error"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    location_on
                  </span>
                  <span className="font-headline font-bold text-sm">ST6 6EN</span>
                </div>
              </div>
              <img
                alt="Map location"
                className="w-full h-full object-cover grayscale contrast-125 opacity-50"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuANB5cYk13_QPYQJcuQHFt2Q5hRSYqcue5xtmpu50LAKxEXbn2EdLQcNCkJkPmmdznBarRT8AgYyDfNvPUofwUn5_uDHyKktX6UY2sFb5lmc59-DCJbiVrNHcp2eGgv6qfiLa8_NxIIpudBU9JxH89hBucQyFtYMyJiU1xSdQuiGavgSpo-zcdcptKHuxGK1y6Hh1aBE1oAiy3PKiDN4CJ9B94MEQPdGK6M8fVXyq8tVw9YKq7mG9cixutE7_66-VNU0cqjuM1sFclv"
              />
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-12 shadow-[0_40px_80px_rgba(0,43,76,0.08)] space-y-12">
              <div className="border-b border-surface-container pb-8">
                <h2 className="text-3xl font-black font-headline tracking-tighter text-on-surface mb-2 uppercase">
                  Project Briefing
                </h2>
                <p className="text-on-surface-variant font-body">
                  Submit your technical requirements or request a comprehensive quotation for architectural services.
                </p>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-primary">Full Name</label>
                  <input
                    className="w-full bg-surface-container-highest border-none focus:ring-0 focus:border-b-2 focus:border-primary px-4 py-4 font-body transition-all"
                    placeholder="e.g. Alexander Hall"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-primary">Email Address</label>
                  <input
                    className="w-full bg-surface-container-highest border-none focus:ring-0 focus:border-b-2 focus:border-primary px-4 py-4 font-body transition-all"
                    placeholder="email@company.com"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-primary">Phone Number</label>
                  <input
                    className="w-full bg-surface-container-highest border-none focus:ring-0 focus:border-b-2 focus:border-primary px-4 py-4 font-body transition-all"
                    placeholder="+44 000 000 0000"
                    type="tel"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-primary">Inquiry Type</label>
                  <select className="w-full bg-surface-container-highest border-none focus:ring-0 focus:border-b-2 focus:border-primary px-4 py-4 font-body transition-all appearance-none">
                    <option>Quote Request</option>
                    <option>General Inquiry</option>
                    <option>Site Visit</option>
                    <option>Technical Support</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-primary">
                    Message &amp; Specifications
                  </label>
                  <textarea
                    className="w-full bg-surface-container-highest border-none focus:ring-0 focus:border-b-2 focus:border-primary px-4 py-4 font-body transition-all resize-none"
                    placeholder="Describe your project scope and engineering requirements..."
                    rows={6}
                  ></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button
                    className="w-full bg-primary text-on-primary py-6 px-12 font-headline font-black uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-primary-container transition-all group"
                    type="submit"
                  >
                    Transmit Inquiry
                    <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                  <p className="text-center mt-6 text-on-surface-variant text-xs font-body italic opacity-60">
                    * Our engineering response time is typically within 24-48 business hours.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface-container-low py-32 px-6 md:px-12 overflow-hidden relative">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-primary-container opacity-5 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black font-headline tracking-tighter text-on-surface mb-6 leading-tight">
              READY TO DEFINE YOUR<br />
              <span className="text-primary">ARCHITECTURAL LEGACY?</span>
            </h2>
            <p className="text-on-surface-variant font-body text-lg leading-relaxed">
              Join forces with APEXE HALLTON LTD for authoritative engineering solutions that stand the test of time and
              technical scrutiny.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="bg-primary text-on-primary px-10 py-5 rounded-sm font-headline font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-lg">
              Download Credentials
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}