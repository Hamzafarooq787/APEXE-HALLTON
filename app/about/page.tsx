export default function About() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-screen flex items-center justify-center overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img
            alt="Dramatic brutalist concrete architecture"
            className="w-full h-full object-cover"
            src="/images/about-hero.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 max-w-7xl mx-auto pt-24 sm:pt-32 pb-16 sm:pb-20">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block py-1 px-4 bg-primary-container text-on-primary-container font-headline font-bold text-xs tracking-widest uppercase mb-4 sm:mb-5">
              Founded on Precision
            </span>
            <h1 className="text-white font-headline text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-[1.1] mb-4 sm:mb-5 text-balance">
              ARCHITECTURAL <br className="hidden sm:block"/> AUTHORITY.
            </h1>
            <p className="text-on-primary-container text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto">
              APEXE HALLTON LTD is a leading British engineering and construction firm dedicated to defining the landscape
              of tomorrow through structural excellence and uncompromising quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center mt-2">
              <button className="bg-surface-container-lowest text-primary px-6 py-3 sm:px-8 sm:py-4 md:px-10 font-headline font-bold uppercase tracking-widest text-xs sm:text-sm hover:translate-y-[-2px] transition-transform shadow-xl rounded-md">
                Start a Project
              </button>
              <button className="bg-transparent border-2 border-white/30 text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 font-headline font-bold uppercase tracking-widest text-xs sm:text-sm backdrop-blur-sm hover:bg-white/10 transition-colors rounded-md">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                className="w-full aspect-[4/5] object-cover shadow-2xl"
                src="/images/mission.jpg"
                alt="Interior of a modern brutalist building with dramatic natural light"
              />
              <div className="absolute bottom-6 right-6 sm:bottom-8 sm:-right-8 md:bottom-12 md:-right-12 bg-primary p-6 sm:p-8 md:p-12 text-white hidden sm:block">
                <span className="text-3xl sm:text-4xl md:text-5xl font-black block mb-2">25+</span>
                <span className="text-xs uppercase tracking-widest opacity-80">
                  Years of Engineering Excellence in the UK
                </span>
              </div>
            </div>
            <div className="space-y-8 sm:space-y-12 order-1 lg:order-2">
              <div>
                <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter mb-4 sm:mb-6 text-balance">Our Mission</h2>
                <p className="text-on-surface-variant text-sm sm:text-base md:text-lg leading-relaxed">
                  To engineer structures that serve as benchmarks for safety, aesthetic brilliance, and longevity. We
                  believe that every project is a monument to human ingenuity and a commitment to the communities we
                  serve.
                </p>
              </div>
              <div className="bg-surface-container p-6 sm:p-8 md:p-12">
                <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter mb-4 sm:mb-6 text-balance">Our Legacy</h2>
                <p className="text-on-surface-variant text-sm sm:text-base md:text-lg leading-relaxed">
                  From our headquarters in Stoke-on-Trent, we have scaled to become a national authority. Our history is
                  built on the bedrock of transparency and the relentless pursuit of technical perfection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 sm:py-24 md:py-32 bg-surface-container-low px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center md:text-left mb-10 sm:mb-16">
            <span className="text-primary font-headline font-bold uppercase tracking-wider text-xs sm:text-sm">Core Principles</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-primary mt-3 sm:mt-4 text-balance">Built on Values</h2>
            <p className="text-on-surface-variant text-sm sm:text-base md:text-lg max-w-2xl mt-3 sm:mt-4 mx-auto md:mx-0">
              The principles that guide every beam, every blueprint, and every partnership.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: "architecture", title: "Technical Integrity", desc: "We refuse to compromise on structural specs. Our engineering is calculated for endurance." },
              { icon: "verified_user", title: "Safety as Standard", desc: "Safety isn't just a protocol; it's our reputation. Every site meets the highest UK standards." },
              { icon: "handshake", title: "Client Partnership", desc: "Transparent communication and collaborative problem-solving are at the heart of our operations." },
              { icon: "energy_savings_leaf", title: "Sustainable Evolution", desc: "Eco-efficient materials and methods that reduce impact without sacrificing strength." },
            ].map((val) => (
              <div key={val.title} className="bg-surface p-6 sm:p-8 text-center md:text-left hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary">
                <span className="material-symbols-outlined text-primary text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 block">{val.icon}</span>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2 sm:mb-3">{val.title}</h3>
                <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 md:mb-24 gap-4 sm:gap-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-primary max-w-2xl text-balance">
              The Minds Behind The Monolith
            </h2>
            <p className="text-on-surface-variant text-sm sm:text-base max-w-md md:text-right">
              Our leadership team combines decades of on-site experience with cutting-edge theoretical engineering.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRHM0PRpSb7-VWu8AL_5UY0ft83rqTp9vMrQIqcwTfbg5q-63_Ljp6ofS8iXUajfOTMWaewb9LKNJt0Af8fiAtbgqLdYw1yhsrnJPnlvLaK2zu9mXL6Km6cripoKHvqyCHKvyu2acpuWOK8UOCfgA9vdqB0e2sP2AHr-7CoRmcA_16VTTH0ewDaFSdoelWxKNGMol0CNeZtsrKKCPkEx5UI3mW75D8A_UGmxxmQFqBJbyOiRbLDGCxgGYRKweO-kLS4GnKhC--U6m8",
                role: "Chief Executive Officer",
                name: "Alistair Hallton",
                desc: "Visionary engineer with 30 years experience leading multi-million pound infrastructure projects across the UK."
              },
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8afgQGYsHCaWLe7WYXsLdRrICOMBrAloBGcxN1KYzeg45MaUQTY1R82pVjK38ZQshYPnAGjpybX_ObBWb41sEVOIUg4NKkezm5OHS9xlTEoM31BhQwDUSGHvSJZKMqW4UAKyMY5_cfjKU4NFcrVejD47d_op0Oei9a5rdOa_mQc_2AT1v41aEq4ma1PmLCVvWE9imFiKnb2UuUEainB5Uykv3Fk-UFvcSITQ-Ikfj1ECVrceJakKjF1koxEXA0agxYAFnN7fOcolB",
                role: "Director of Engineering",
                name: "Eleanor Vance",
                desc: "Specializing in structural integrity and modern material science, Eleanor ensures technical perfection across all sites."
              },
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7mT_G85tZOFEy15nfzkSxGA8MFIDA1o53SvX5OX40a3lPiE4k99TjAephGvnqchx-G9lB8KxUbwyXpGWQnVq7iTq-1u2nPkpINk8dzNREUaRcgdMQoTyIU7Yfeu2LvEeP87Fd4fGgXbMOlmH4XVIJkD4YDYh9ZhkwYxIqAdU1ZamWW8I0KXeKbsJ_k7ekcNu4YzwHXIp0S0jCmSAwQ0ZGeOtV53CBVjm2Wtyyk0-FByPU77rURZLYIMUIN2nvA43kIlAGMnaS4Y_4",
                role: "Operations Director",
                name: "Marcus Thorne",
                desc: "The logistical backbone of APEXE HALLTON, managing complex supply chains and national site operations."
              },
            ].map((leader) => (
              <div key={leader.name} className="bg-surface p-5 sm:p-6 md:p-8 rounded-lg shadow-sm">
                <img
                  className="w-full aspect-square object-cover mb-4 sm:mb-6 filter grayscale hover:grayscale-0 transition-all duration-500"
                  src={leader.img}
                  alt={leader.name}
                />
                <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-1 sm:mb-2">{leader.role}</span>
                <h4 className="text-xl sm:text-2xl font-black text-on-surface">{leader.name}</h4>
                <p className="mt-3 sm:mt-4 text-on-surface-variant text-xs sm:text-sm leading-relaxed">{leader.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-primary text-white text-center px-4 sm:px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-4 sm:mb-6 md:mb-8 leading-tight text-balance">
            Ready to build your legacy with the architectural authority?
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-white text-primary px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 font-bold tracking-tight hover:bg-primary-fixed transition-colors rounded-md text-sm sm:text-base">
              Start a Project
            </button>
            <button className="border border-primary-fixed text-primary-fixed px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 font-bold tracking-tight hover:bg-primary-container transition-colors rounded-md text-sm sm:text-base">
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
