export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "clamp(640px, 70vw, 820px)" }}
    >
      {/* Background Image */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/4646e613f12f43b9709a7c41ceb1542224a43515?width=2880"
        alt="Modern house design"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/40" />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-[110px] flex flex-col h-full pt-[18rem]">
        <h1 className="text-white font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-tight max-w-[720px]">
          Turning Dream Homes into
          <span className="block">Buildable Reality</span>
        </h1>
        <p className="mt-5 md:mt-6 text-white font-normal text-base sm:text-lg md:text-[22px] leading-8 max-w-[620px]">
          Generate customized house designs based on your budget, land size, and
          lifestyle needs—without needing an architect at the early stage.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <button className="bg-navy text-white text-sm font-medium rounded-full px-7 py-3 hover:bg-navy/90 transition min-w-[220px] shadow-lg">
            Generate Diagram with AI
          </button>
          <button className="bg-navy text-white text-sm font-medium rounded-full px-7 py-3 hover:bg-navy/90 transition min-w-[220px] shadow-lg">
            Generate Design with AI
          </button>
        </div>
      </div>
    </section>
  );
}
