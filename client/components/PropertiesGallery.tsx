const properties = [
  {
    id: 1,
    src: "https://api.builder.io/api/v1/image/assets/TEMP/bfee7bcca46259bada3b77192716cf88cbacae4a?width=496",
    label: "APARTMENT",
    labelBg: "bg-[#D9D9D9]",
    labelColor: "text-black",
  },
  {
    id: 2,
    src: "https://api.builder.io/api/v1/image/assets/TEMP/20800a839f23c862c63d13d3a988b46104372202?width=496",
    label: "VILLA",
    labelBg: "bg-[#D9D9D9]",
    labelColor: "text-black",
  },
  {
    id: 3,
    src: "https://api.builder.io/api/v1/image/assets/TEMP/af17355b9b4e7d8307cbeb81ab90e823ad403b59?width=496",
    label: "BUNGALOW",
    labelBg: "bg-[#D9D9D9]",
    labelColor: "text-black",
  },
  {
    id: 4,
    src: "https://api.builder.io/api/v1/image/assets/TEMP/8612d2069da6edc14f360318ef33e853653372dd?width=496",
    label: "HOUSE",
    labelBg: "bg-navy",
    labelColor: "text-white",
  },
  {
    id: 5,
    src: "https://api.builder.io/api/v1/image/assets/TEMP/8a82d874ec7890222078b202ee71cba9220f6c9b?width=496",
    label: "TOWNHOUSE",
    labelBg: "bg-[#D9D9D9]",
    labelColor: "text-black",
  },
  {
    id: 6,
    src: "https://api.builder.io/api/v1/image/assets/TEMP/0f6948422bbe108d1304c65272b9ab2b181d1082?width=496",
    label: "LOFT",
    labelBg: "bg-navy",
    labelColor: "text-white",
  },
  {
    id: 7,
    src: "https://api.builder.io/api/v1/image/assets/TEMP/6489aaf9d9e14949d922ee473cd21e891270e576?width=496",
    label: "OFFICE",
    labelBg: "bg-[#D9D9D9]",
    labelColor: "text-black",
  },
  {
    id: 8,
    src: "https://api.builder.io/api/v1/image/assets/TEMP/de846f75657c0f501ecb1dcdf92c75fc43a4308e?width=496",
    label: "More",
    labelBg: "bg-[#D9D9D9]",
    labelColor: "text-black",
  },
];

export default function PropertiesGallery() {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[110px]">
        {/* Heading */}
        <h2 className="text-black font-medium text-xl md:text-[20px] text-center mb-8">
          Recently Generated Properties
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {properties.map((property) => (
            <div key={property.id} className="relative rounded-[10px] overflow-hidden group cursor-pointer">
              <img
                src={property.src}
                alt={property.label}
                className="w-full aspect-[3/4] object-cover rounded-[10px] group-hover:scale-105 transition-transform duration-300"
              />
              {/* Label badge */}
              <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 ${property.labelBg} rounded-[5px] px-3 py-1.5 whitespace-nowrap`}>
                <span className={`text-xs font-medium ${property.labelColor}`}>{property.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* More button */}
        <div className="flex justify-end mt-8">
          <button className="flex items-center gap-2 bg-navy text-white text-[13px] font-normal rounded-full pl-4 pr-6 py-2 hover:bg-navy/80 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.998H13V10.998H19V12.998Z" fill="white"/>
            </svg>
            More
          </button>
        </div>
      </div>
    </section>
  );
}
