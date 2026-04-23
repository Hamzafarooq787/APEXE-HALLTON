'use client';
export default function Projects() {
  return (
    <main className="pt-24 sm:pt-32 pb-16 sm:pb-24">
      {/* Hero Header Section */}
      <header className="px-4 sm:px-6 md:px-12 max-w-[1920px] mx-auto mb-12 sm:mb-16 md:mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
          <div className="max-w-3xl">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 sm:mb-4 block">Portfolio</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black font-headline text-on-surface tracking-tighter leading-none mb-4 sm:mb-6 text-balance">
              Built Authority.
            </h1>
            <p className="text-on-surface-variant text-sm sm:text-base md:text-lg lg:text-xl max-w-xl font-light leading-relaxed">
              A curated showcase of our engineering prowess and architectural precision across residential, commercial,
              and structural sectors.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-4 font-headline">
            <button className="px-4 sm:px-6 py-2 bg-primary-container text-on-primary-container rounded-full text-xs sm:text-sm font-bold border-none">
              All Projects
            </button>
            <button className="px-4 sm:px-6 py-2 bg-surface-container hover:bg-surface-container-high text-on-surface-variant rounded-full text-xs sm:text-sm font-medium transition-colors">
              Residential
            </button>
            <button className="px-4 sm:px-6 py-2 bg-surface-container hover:bg-surface-container-high text-on-surface-variant rounded-full text-xs sm:text-sm font-medium transition-colors">
              Commercial
            </button>
            <button className="px-4 sm:px-6 py-2 bg-surface-container hover:bg-surface-container-high text-on-surface-variant rounded-full text-xs sm:text-sm font-medium transition-colors">
              Structural
            </button>
          </div>
        </div>
      </header>

      {/* Project Bento Grid */}
      <section className="px-4 sm:px-6 md:px-12 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 sm:gap-6 min-h-[600px] md:min-h-[900px]">
          {/* Large Featured Project */}
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-surface-container-low rounded-lg h-[280px] sm:h-[380px] md:h-auto">
            <img
              alt="Modern glass skyscraper under construction in London"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="/images/skyscraper.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 sm:p-8 md:p-12">
              <span className="text-primary-fixed-dim text-xs sm:text-sm font-bold uppercase tracking-widest mb-1 sm:mb-2">Commercial</span>
              <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-black font-headline mb-2 sm:mb-4">The Meridian Plaza</h3>
              <p className="text-on-primary-container max-w-md text-sm sm:text-base md:text-lg">
                A 45-story commercial marvel featuring advanced structural vibration damping and sustainable glass facade technology.
              </p>
              <div className="mt-4 sm:mt-8">
                <button className="flex items-center gap-2 text-white font-bold group/btn text-sm sm:text-base">
                  View Case Study
                  <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-2">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Structural Detail Card */}
          <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden bg-surface-container-low rounded-lg h-[220px] sm:h-[280px] md:h-auto">
            <img
              alt="Modern pedestrian bridge over urban river"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="/images/bridge.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 sm:p-8">
              <span className="text-primary-fixed-dim text-xs sm:text-sm font-bold uppercase tracking-widest mb-1 sm:mb-2">Structural</span>
              <h3 className="text-white text-xl sm:text-2xl font-black font-headline mb-1 sm:mb-2">River Bridge Framework</h3>
              <p className="text-on-primary-container text-xs sm:text-sm">
                Complex cantilever structural engineering for a 300m pedestrian bridge over the industrial basin.
              </p>
            </div>
          </div>

          {/* Residential 1 */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-surface-container-low rounded-lg h-[220px] sm:h-[280px] md:h-auto">
            <img
              alt="Luxury modern residential villa"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="/images/residential.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 sm:p-8">
              <span className="text-primary-fixed-dim text-xs font-bold uppercase tracking-widest mb-1">Residential</span>
              <h3 className="text-white text-lg sm:text-xl font-black font-headline">The White House</h3>
              <p className="text-on-primary-container text-xs mt-1 sm:mt-2">Ultra-minimalist residential estate with post-tensioned floor slabs.</p>
            </div>
          </div>

          {/* Residential 2 */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-surface-container-low rounded-lg h-[220px] sm:h-[280px] md:h-auto">
            <img
              alt="Heritage building renovation"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="/images/heritage-renovation.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 sm:p-8">
              <span className="text-primary-fixed-dim text-xs font-bold uppercase tracking-widest mb-1">Residential</span>
              <h3 className="text-white text-lg sm:text-xl font-black font-headline">Skyline Lofts</h3>
              <p className="text-on-primary-container text-xs mt-1 sm:mt-2">Urban regeneration project transforming industrial spaces into luxury living.</p>
            </div>
          </div>
        </div>

        {/* Technical Excellence Block */}
        <div className="mt-16 sm:mt-20 md:mt-24 bg-surface-container-low p-6 sm:p-10 md:p-20 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-headline tracking-tighter mb-6 sm:mb-8 text-primary text-balance">
                Technical Excellence by Default.
              </h2>
              <div className="space-y-6 sm:space-y-8">
                <div className="flex gap-4 sm:gap-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-white text-xl sm:text-2xl">architecture</span>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">BIM Integrated Workflow</h4>
                    <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                      We utilize Building Information Modeling to ensure zero-clash engineering and material optimization.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 sm:gap-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-white text-xl sm:text-2xl">precision_manufacturing</span>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">Advanced Structural Analysis</h4>
                    <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                      Finite element analysis for every structural component ensures safety and structural integrity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[280px] sm:h-[380px] md:h-[500px] rounded-lg overflow-hidden group">
              <img
                alt="Construction site with structural steelwork"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="/images/structural-engineering.jpg"
              />
              <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 md:px-12 max-w-[1920px] mx-auto mt-20 sm:mt-24 md:mt-32 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black font-headline tracking-tighter mb-4 sm:mb-6 md:mb-8 text-balance">
          Have a Project in Mind?
        </h2>
        <p className="text-on-surface-variant text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto">
          Let our architectural authority guide your next engineering feat from concept to construction.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6">
          <button className="bg-primary text-on-primary px-8 sm:px-10 py-3 sm:py-4 font-bold rounded-lg hover:bg-primary-container transition-all text-sm sm:text-base">
            Start a Consultation
          </button>
          <button className="bg-secondary-container text-on-secondary-container px-8 sm:px-10 py-3 sm:py-4 font-bold rounded-lg hover:bg-surface-container-high transition-all text-sm sm:text-base">
            Download Brochure
          </button>
        </div>
      </section>
    </main>
  );
}
