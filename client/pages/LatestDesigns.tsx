import { useNavigate } from "react-router-dom";

const latestDesigns = [
  {
    id: 1,
    src: "https://api.builder.io/api/v1/image/assets/TEMP/bfee7bcca46259bada3b77192716cf88cbacae4a?width=496",
    title: "Modern Urban Apartment",
    description:
      "A sleek 2-bedroom apartment with open floor plan and city views.",
    technologies: ["React", "TypeScript", "TailwindCSS"],
    createdAt: "2024-04-10",
  },
  {
    id: 2,
    src: "https://api.builder.io/api/v1/image/assets/TEMP/20800a839f23c862c63d13d3a988b46104372202?width=496",
    title: "Luxury Suburban Villa",
    description: "Spacious 4-bedroom villa with garden and modern amenities.",
    technologies: ["Vue.js", "Tailwind", "Node.js"],
    createdAt: "2024-04-09",
  },
  {
    id: 3,
    src: "https://api.builder.io/api/v1/image/assets/TEMP/af17355b9b4e7d8307cbeb81ab90e823ad403b59?width=496",
    title: "Cozy Family Bungalow",
    description: "Charming 3-bedroom bungalow perfect for families.",
    technologies: ["Angular", "Bootstrap", "Express"],
    createdAt: "2024-04-08",
  },
  {
    id: 4,
    src: "https://api.builder.io/api/v1/image/assets/TEMP/8612d2069da6edc14f360318ef33e853653372dd?width=496",
    title: "Contemporary Family House",
    description: "Modern 4-bedroom house with smart home features.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    createdAt: "2024-04-07",
  },
  {
    id: 5,
    src: "https://api.builder.io/api/v1/image/assets/TEMP/8a82d874ec7890222078b202ee71cba9220f6c9b?width=496",
    title: "Urban Townhouse Complex",
    description: "Multi-unit townhouse development in city center.",
    technologies: ["Svelte", "Firebase", "Vite"],
    createdAt: "2024-04-06",
  },
  {
    id: 6,
    src: "https://api.builder.io/api/v1/image/assets/TEMP/0f6948422bbe108d1304c65272b9ab2b181d1082?width=496",
    title: "Industrial Style Loft",
    description:
      "Converted warehouse loft with exposed brick and high ceilings.",
    technologies: ["React", "GraphQL", "MongoDB"],
    createdAt: "2024-04-05",
  },
];

export default function LatestDesigns() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Latest Generated Designs
          </h1>
          <p className="text-lg text-slate-600">
            Explore the most recent house designs created by our AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {latestDesigns.map((design) => (
            <div
              key={design.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={design.src}
                  alt={design.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {design.title}
                </h3>
                <p className="text-slate-600 mb-4">{design.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    Created: {new Date(design.createdAt).toLocaleDateString()}
                  </span>
                  <button className="bg-navy text-white text-sm font-medium rounded-full px-4 py-2 hover:bg-navy/90 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate("/generate-design")}
            className="bg-navy text-white text-lg font-medium rounded-full px-8 py-4 hover:bg-navy/90 transition-colors"
          >
            Create Your Own Design
          </button>
        </div>
      </div>
    </div>
  );
}
