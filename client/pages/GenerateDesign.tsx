import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GenerateDesign() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [style, setStyle] = useState("");
  const [rooms, setRooms] = useState("");
  const [budget, setBudget] = useState("");
  const [custom, setCustom] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      navigate("/latest-designs");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Generate Your Dream House Design
          </h1>
          <p className="text-lg text-slate-600">
            Fill in your requirements and let AI create the perfect design for
            you
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Area/Location */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-900">
                Area/Location
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full h-12 rounded-lg border border-slate-300 bg-white text-sm font-normal text-slate-900 px-4 focus:outline-none focus:ring-2 focus:ring-navy"
              >
                <option value="">Select location</option>
                <option value="urban">Urban</option>
                <option value="suburban">Suburban</option>
                <option value="rural">Rural</option>
              </select>
            </div>

            {/* Building Styles */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-900">
                Building Styles
              </label>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full h-12 rounded-lg border border-slate-300 bg-white text-sm font-normal text-slate-900 px-4 focus:outline-none focus:ring-2 focus:ring-navy"
              >
                <option value="">Select style</option>
                <option value="modern">Modern</option>
                <option value="contemporary">Contemporary</option>
                <option value="traditional">Traditional</option>
                <option value="minimalist">Minimalist</option>
              </select>
            </div>

            {/* Building Rooms */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-900">
                Building Rooms
              </label>
              <input
                type="text"
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                placeholder="e.g., 3 bedrooms, 2 bathrooms"
                className="w-full h-12 rounded-lg border border-slate-300 bg-white text-sm font-normal text-slate-900 px-4 focus:outline-none focus:ring-2 focus:ring-navy"
              />
            </div>

            {/* Budget Range */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-900">
                Budget Range
              </label>
              <input
                type="text"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="e.g., $200,000 - $500,000"
                className="w-full h-12 rounded-lg border border-slate-300 bg-white text-sm font-normal text-slate-900 px-4 focus:outline-none focus:ring-2 focus:ring-navy"
              />
            </div>
          </div>

          {/* Custom Message */}
          <div className="flex flex-col gap-2 mb-8">
            <label className="text-sm font-medium text-slate-900">
              Custom Requirements
            </label>
            <textarea
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
              placeholder="Describe any specific features, preferences, or requirements..."
              rows={4}
              className="w-full rounded-lg border border-slate-300 bg-white text-sm font-normal text-slate-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-navy resize-none"
            />
          </div>

          {/* Generate Button */}
          <div className="flex justify-center">
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="bg-navy text-white text-lg font-medium rounded-full px-12 py-4 hover:bg-navy/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? "Generating..." : "Generate Design"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
