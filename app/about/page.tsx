export default function About() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden text-center">
  {/* Background Image & Overlay */}
  <div className="absolute inset-0 z-0">
    <img
      alt="Modern architectural structure"
      className="w-full h-full object-cover opacity-40 mix-blend-overlay"
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7ySeiNj-6lc69ST1zhFMaFx0igBSDJE1nWUo_f_sR0QmdCq8Ti7xBNqd5l_-ekbPOB95oGzcH2mhbE4WFcDIOGRzaSZ2SLZF5wN0ffoxZpJI1Z-WG9jNQ9bkXjAVh2-bdBSKVY9W08OwlyuOV4_vBXpGmtu5PdQx58u2WDutK4mxK5hMXEWxUrBF4gOnF9fxOD05LYhFzVfJFsVR9_AmL_4WDMNKgS6l23FOhtpTpwlBRU5fQA-y-NuHKP53UDHnEUd2u9xsjwNj1"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
  </div>

  {/* Content - Centered */}
  <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto pt-32 pb-20">
    <div className="max-w-4xl mx-auto">
      <span className="inline-block py-1 px-4 bg-primary-container text-on-primary-container font-headline font-bold text-xs tracking-widest uppercase mb-5">
        Founded on Precision
      </span>
      <h1 className="text-white font-headline text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] mb-5">
        ARCHITECTURAL <br className="hidden sm:block"/> AUTHORITY.
      </h1>
      <p className="text-on-primary-container text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-8 max-w-3xl mx-auto">
        APEXE HALLTON LTD is a leading British engineering and construction firm dedicated to defining the landscape
        of tomorrow through structural excellence and uncompromising quality.
      </p>
      <div className="flex flex-wrap gap-6 justify-center mt-2">
        <button className="bg-surface-container-lowest text-primary px-8 py-4 md:px-10 md:py-4 font-headline font-bold uppercase tracking-widest text-sm hover:translate-y-[-2px] transition-transform shadow-xl rounded-md">
          Start a Project
        </button>
        <button className="bg-transparent border-2 border-white/30 text-white px-8 py-4 md:px-10 md:py-4 font-headline font-bold uppercase tracking-widest text-sm backdrop-blur-sm hover:bg-white/10 transition-colors rounded-md">
          View Portfolio
        </button>
      </div>
    </div>
  </div>
</section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-12 -left-12 w-48 h-48 md:w-64 md:h-64 bg-secondary-container/30 -z-10"></div>
              <img
                className="w-full aspect-[4/5] object-cover shadow-2xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe-IMLN_kgD2KQEhDsNf629M9h8FSJU_O1ujXvcl2BTPdEafdif4GBXAFgD_ZDmQBWHb_zL4_w5kOS8DYyvq8yP9D1vIR0HWQJe827onO4poDTwTvTppN3WROSxrWerTVvWV4ff7lLshnYP7ail7MSUs-EeG6aMONy22r0Y-elenkb11gjuj2ZIcsnjKDVG_T3YMVrnlj7BjfUcakNiHO5ddFEpawjRtsnSI5r3o0Gu7VchFV1CmO42R9xuw3XETxjIgy_pY8JywQI"
                alt="Interior view modern brutalist concrete"
              />
              <div className="absolute bottom-8 right-8 md:bottom-12 md:-right-12 bg-primary p-6 md:p-12 text-white max-w-xs hidden md:block">
                <span className="text-3xl md:text-4xl font-black block mb-2">25+</span>
                <span className="text-xs uppercase tracking-widest opacity-80">
                  Years of Engineering Excellence in the UK
                </span>
              </div>
            </div>
            <div className="space-y-12 order-1 lg:order-2">
              <div>
                <h2 className="text-primary text-3xl md:text-4xl font-black tracking-tighter mb-6">Our Mission</h2>
                <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
                  To engineer structures that serve as benchmarks for safety, aesthetic brilliance, and longevity. We
                  believe that every project is a monument to human ingenuity and a commitment to the communities we
                  serve.
                </p>
              </div>
              <div className="bg-surface-container p-8 md:p-12">
                <h2 className="text-primary text-3xl md:text-4xl font-black tracking-tighter mb-6">Our Legacy</h2>
                <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
                  From our headquarters in Stoke-on-Trent, we have scaled to become a national authority. Our history is
                  built on the bedrock of transparency and the relentless pursuit of technical perfection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values - Redesigned (Clean Card Grid) */}
      <section className="py-20 md:py-32 bg-surface-container-low px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center md:text-left mb-16">
            <span className="text-primary font-headline font-bold uppercase tracking-wider text-sm">Core Principles</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-primary mt-4">Built on Values</h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mt-4 mx-auto md:mx-0">
              The principles that guide every beam, every blueprint, and every partnership.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="bg-surface p-8 text-center md:text-left hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary">
              <span className="material-symbols-outlined text-primary text-5xl mb-4 block">architecture</span>
              <h3 className="text-2xl font-bold text-primary mb-3">Technical Integrity</h3>
              <p className="text-on-surface-variant leading-relaxed">
                We refuse to compromise on structural specs. Our engineering is calculated for endurance.
              </p>
            </div>
            {/* Value 2 */}
            <div className="bg-surface p-8 text-center md:text-left hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary">
              <span className="material-symbols-outlined text-primary text-5xl mb-4 block">verified_user</span>
              <h3 className="text-2xl font-bold text-primary mb-3">Safety as Standard</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Safety isn't just a protocol; it's our reputation. Every site meets the highest UK standards.
              </p>
            </div>
            {/* Value 3 */}
            <div className="bg-surface p-8 text-center md:text-left hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary">
              <span className="material-symbols-outlined text-primary text-5xl mb-4 block">handshake</span>
              <h3 className="text-2xl font-bold text-primary mb-3">Client Partnership</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Transparent communication and collaborative problem-solving are at the heart of our operations.
              </p>
            </div>
            {/* Value 4 */}
            <div className="bg-surface p-8 text-center md:text-left hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary">
              <span className="material-symbols-outlined text-primary text-5xl mb-4 block">energy_savings_leaf</span>
              <h3 className="text-2xl font-bold text-primary mb-3">Sustainable Evolution</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Eco-efficient materials and methods that reduce impact without sacrificing strength.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-primary max-w-2xl">
              The Minds Behind The Monolith
            </h2>
            <p className="text-on-surface-variant max-w-md md:text-right">
              Our leadership team combines decades of on-site experience with cutting-edge theoretical engineering.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Leader 1 */}
            <div className="bg-surface p-6 md:p-8 rounded-lg shadow-sm">
              <img
                className="w-full aspect-square object-cover mb-6 filter grayscale hover:grayscale-0 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRHM0PRpSb7-VWu8AL_5UY0ft83rqTp9vMrQIqcwTfbg5q-63_Ljp6ofS8iXUajfOTMWaewb9LKNJt0Af8fiAtbgqLdYw1yhsrnJPnlvLaK2zu9mXL6Km6cripoKHvqyCHKvyu2acpuWOK8UOCfgA9vdqB0e2sP2AHr-7CoRmcA_16VTTH0ewDaFSdoelWxKNGMol0CNeZtsrKKCPkEx5UI3mW75D8A_UGmxxmQFqBJbyOiRbLDGCxgGYRKweO-kLS4GnKhC--U6m8"
                alt="Alistair Hallton"
              />
              <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-2">Chief Executive Officer</span>
              <h4 className="text-2xl font-black text-on-surface">Alistair Hallton</h4>
              <p className="mt-4 text-on-surface-variant text-sm">
                Visionary engineer with 30 years experience leading multi-million pound infrastructure projects across the UK.
              </p>
            </div>
            {/* Leader 2 */}
            <div className="bg-surface p-6 md:p-8 rounded-lg shadow-sm">
              <img
                className="w-full aspect-square object-cover mb-6 filter grayscale hover:grayscale-0 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8afgQGYsHCaWLe7WYXsLdRrICOMBrAloBGcxN1KYzeg45MaUQTY1R82pVjK38ZQshYPnAGjpybX_ObBWb41sEVOIUg4NKkezm5OHS9xlTEoM31BhQwDUSGHvSJZKMqW4UAKyMY5_cfjKU4NFcrVejD47d_op0Oei9a5rdOa_mQc_2AT1v41aEq4ma1PmLCVvWE9imFiKnb2UuUEainB5Uykv3Fk-UFvcSITQ-Ikfj1ECVrceJakKjF1koxEXA0agxYAFnN7fOcolB"
                alt="Eleanor Vance"
              />
              <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-2">Director of Engineering</span>
              <h4 className="text-2xl font-black text-on-surface">Eleanor Vance</h4>
              <p className="mt-4 text-on-surface-variant text-sm">
                Specializing in structural integrity and modern material science, Eleanor ensures technical perfection across all sites.
              </p>
            </div>
            {/* Leader 3 */}
            <div className="bg-surface p-6 md:p-8 rounded-lg shadow-sm">
              <img
                className="w-full aspect-square object-cover mb-6 filter grayscale hover:grayscale-0 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7mT_G85tZOFEy15nfzkSxGA8MFIDA1o53SvX5OX40a3lPiE4k99TjAephGvnqchx-G9lB8KxUbwyXpGWQnVq7iTq-1u2nPkpINk8dzNREUaRcgdMQoTyIU7Yfeu2LvEeP87Fd4fGgXbMOlmH4XVIJkD4YDYh9ZhkwYxIqAdU1ZamWW8I0KXeKbsJ_k7ekcNu4YzwHXIp0S0jCmSAwQ0ZGeOtV53CBVjm2Wtyyk0-FByPU77rURZLYIMUIN2nvA43kIlAGMnaS4Y_4"
                alt="Marcus Thorne"
              />
              <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-2">Operations Director</span>
              <h4 className="text-2xl font-black text-on-surface">Marcus Thorne</h4>
              <p className="mt-4 text-on-surface-variant text-sm">
                The logistical backbone of APEXE HALLTON, managing complex supply chains and national site operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-primary text-white text-center px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 md:mb-8 leading-tight">
            Ready to build your legacy with the architectural authority?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 md:px-12 py-4 md:py-5 font-bold tracking-tight hover:bg-primary-fixed transition-colors rounded-md">
              Start a Project
            </button>
            <button className="border border-primary-fixed text-primary-fixed px-8 md:px-12 py-4 md:py-5 font-bold tracking-tight hover:bg-primary-container transition-colors rounded-md">
              View Our Portfolio
            </button>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}
          ></div>
        </div>
      </section>
    </main>
  );
}