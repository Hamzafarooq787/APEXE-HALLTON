'use client';
export default function Projects() {
  return (
    <main className="pt-32 pb-24">
      {/* Hero Header Section */}
      <header className="px-6 md:px-12 max-w-[1920px] mx-auto mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Portfolio</span>
            <h1 className="text-6xl md:text-8xl font-black font-headline text-on-surface tracking-tighter leading-none mb-6">
              Built Authority.
            </h1>
            <p className="text-on-surface-variant text-xl max-w-xl font-light leading-relaxed">
              A curated showcase of our engineering prowess and architectural precision across residential, commercial,
              and structural sectors.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 font-headline">
            <button className="px-6 py-2 bg-primary-container text-on-primary-container rounded-full text-sm font-bold border-none">
              All Projects
            </button>
            <button className="px-6 py-2 bg-surface-container hover:bg-surface-container-high text-on-surface-variant rounded-full text-sm font-medium transition-colors">
              Residential
            </button>
            <button className="px-6 py-2 bg-surface-container hover:bg-surface-container-high text-on-surface-variant rounded-full text-sm font-medium transition-colors">
              Commercial
            </button>
            <button className="px-6 py-2 bg-surface-container hover:bg-surface-container-high text-on-surface-variant rounded-full text-sm font-medium transition-colors">
              Structural
            </button>
          </div>
        </div>
      </header>

      {/* Project Bento Grid */}
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 min-h-[900px]">
          {/* Large Featured Project */}
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-surface-container-low rounded-lg">
            <img
              alt="Commercial Skyscraper"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4Y0XX9jW-tn2l90HYYrke6xXXPw1cdt6On5kaiRA0C-fHFPxPn0RrXneeBWAPlitWy7bHmxzPsSMrD2QhXV0LhiaIR-01mcuHYcgZnrxp27DBT5ZGU4Vuir4rkJ-nNJ76TtWLqpKf_Y6R2dpLxwwAGEy4_H4sgTOAgMdRFAdezFv_Ype3FffraHXWUNvDrPIJ5R7mjimAkbbQJ0QJC9ClypQI6xH4E_5IAiuZSBG2Wt15_p1zOejwZnbz9Q9BAwvdnPZ8ARBF66QI"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
              <span className="text-primary-fixed-dim text-sm font-bold uppercase tracking-widest mb-2">Commercial</span>
              <h3 className="text-white text-4xl font-black font-headline mb-4">The Meridian Plaza</h3>
              <p className="text-on-primary-container max-w-md text-lg">
                A 45-story commercial marvel featuring advanced structural vibration damping and sustainable glass facade
                technology.
              </p>
              <div className="mt-8">
                <button className="flex items-center gap-2 text-white font-bold group/btn">
                  View Case Study
                  <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-2">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Structural Detail Card */}
          <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden bg-surface-container-low rounded-lg">
            <img
              alt="Structural Engineering"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDQTSalQeIDN-edvGx0nrjO67fP8sWxjx302lS-_Xng97seiJEaOGMnq-nxFKLZ_q61Vbs1zRevhEFJ3S4z5hDnRQyFRMCDaJF8fiDay54yV9ufSRnwms5ONvwJCzA_LGSzjv2i8N5D94636ldjppkUR_vedcUStbq1Hhmfyw3D1ZudgOLJZ5C6KTUFfCUzOJQ4WupDb9_0IWZXVQGWyL_JUB2YNZPNmLx_Mgb8L9nsaFYygstUs5DOm8VoyN53_S-Mo03HtgbS056"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <span className="text-primary-fixed-dim text-sm font-bold uppercase tracking-widest mb-2">Structural</span>
              <h3 className="text-white text-2xl font-black font-headline mb-2">River Bridge Framework</h3>
              <p className="text-on-primary-container text-sm">
                Complex cantilever structural engineering for a 300m pedestrian bridge over the industrial basin.
              </p>
            </div>
          </div>

          {/* Residential 1 */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-surface-container-low rounded-lg">
            <img
              alt="Residential Villa"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR6jo_PJARw8_v1UTAh26sGtHUcXSIuZQOXrzEA0nc0L9rckfdd6YxLHn0M_lam8JsOhVI-HTse5_OIixFfw8cbFHNBgL69qMo8sSf70QBLEK77ma7pOvb_0fKCuu5axdERPbDMzVkRhXnCwuerXdymXHIh5C3CD6prY6_KmrpgOSKvC5FXa_PLQ1yxlx52Ta4kondZTIb3qtT9j-dfNFV9w4LYZ5eCylQaMyng2zw11ju1wZhmt2-MNkPaI8Tw0jhB64jEtvgtgsg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <span className="text-primary-fixed-dim text-xs font-bold uppercase tracking-widest mb-1">Residential</span>
              <h3 className="text-white text-xl font-black font-headline">The White House</h3>
              <p className="text-on-primary-container text-xs mt-2">Ultra-minimalist residential estate with post-tensioned floor slabs.</p>
            </div>
          </div>

          {/* Residential 2 */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-surface-container-low rounded-lg">
            <img
              alt="Luxury Apartment"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK8JKbER4Y2YxmX9tUTrO_8QoMee8J3uMorN2GN-bxY225wcKwKs1ePu03PuBgrepC7OMxyFFR6wFpSmQUliWTVz6j5BlCI9j98yT5WPdqDpxJoTjVL7ETxF_n4OTwStOIA-KgYYYM8F1L79vO5kNuf1AmK8jZTJzeybILNTqMnjuLY-LnaeEC8R6jtnADmQ5VF9dD80ysE3SG5iPyTGO_EiGO5CjwZ9OCM7VXfOu7itWpw6CFqWmB_Z9imtGiY3GBYg4bjzYvwJBZ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <span className="text-primary-fixed-dim text-xs font-bold uppercase tracking-widest mb-1">Residential</span>
              <h3 className="text-white text-xl font-black font-headline">Skyline Lofts</h3>
              <p className="text-on-primary-container text-xs mt-2">Urban regeneration project transforming industrial spaces into luxury living.</p>
            </div>
          </div>
        </div>

        {/* Tonal Shift Section Divider */}
        <div className="mt-24 bg-surface-container-low p-6 md:p-20 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-black font-headline tracking-tighter mb-8 text-primary">
                Technical Excellence by Default.
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary rounded flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-white">architecture</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">BIM Integrated Workflow</h4>
                    <p className="text-on-surface-variant">
                      We utilize Building Information Modeling to ensure zero-clash engineering and material optimization.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary rounded flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-white">precision_manufacturing</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Advanced Structural Analysis</h4>
                    <p className="text-on-surface-variant">
                      Finite element analysis for every structural component ensures safety and structural integrity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden group">
              <img
                alt="Construction Site"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxTZju27Kz1wJltlzad1ISocb2ZWQX7JnwhPwYwj9ZV9Je88ttcm6pmVSGZV1E8YLI9-KiLZKS2ummookl_ss79zSBB1efSyn12zyuEwGYhOQNxNfWMW7xwm2FQbX7Gtk9j3ewbOuSkHDkMLC0r539dz-4K_CAbPtVrElW68Er1fAqPBr2f41PTh6-LRv_qP7JHas7b_bRZBNobKihx19rTlypcoH5gtwEVGG_Wd4bQ8IKtwV-c-Pub4xUuvbVh9E9Nn-YIEafxb9A"
              />
              <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto mt-32 text-center">
        <h2 className="text-4xl md:text-6xl font-black font-headline tracking-tighter mb-8">
          Have a Project in Mind?
        </h2>
        <p className="text-on-surface-variant text-xl mb-12 max-w-2xl mx-auto">
          Let our architectural authority guide your next engineering feat from concept to construction.
        </p>
        <div className="flex justify-center gap-6">
          <button className="bg-primary text-on-primary px-10 py-4 font-bold rounded-lg hover:bg-primary-container transition-all">
            Start a Consultation
          </button>
          <button className="bg-secondary-container text-on-secondary-container px-10 py-4 font-bold rounded-lg hover:bg-surface-container-high transition-all">
            Download Brochure
          </button>
        </div>
      </section>
    </main>
  );
}