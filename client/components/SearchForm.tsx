import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchForm() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [style, setStyle] = useState("");
  const [rooms, setRooms] = useState("");
  const [budget, setBudget] = useState("");
  const [custom, setCustom] = useState("");

  return (
    <section className="w-full bg-transparent py-0 px-4 relative z-20 ">
      <div className="max-w-[1440px] mx-auto px-2 lg:px-[110px]">
        {/* Card */}
        <div className="bg-white rounded-[24px] shadow-[0_30px_60px_rgba(0,0,0,0.15)] -mt-20 md:-mt-28 relative z-20 px-4 md:px-8 py-6 md:py-8 border border-slate-200">
          <div className="flex flex-wrap justify-center items-end gap-4">
            {/* Area/Location */}
            <div className="flex flex-col gap-1.5 min-w-[180px] max-w-[220px]">
              <label className="text-sm font-normal text-slate-900">
                Area/Location
              </label>
              <div className="relative">
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full h-12 rounded-[12px] border border-slate-300 bg-white text-sm font-normal text-slate-900 px-4 appearance-none cursor-pointer focus:outline-none"
                >
                  <option value="">Select location</option>
                  <option value="urban">Urban</option>
                  <option value="suburban">Suburban</option>
                  <option value="rural">Rural</option>
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 15L7.757 10.758L9.172 9.344L12 12.172L14.828 9.344L16.243 10.758L12 15Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* Building Styles */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-normal text-slate-900">
                Building Styles
              </label>
              <div className="relative">
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="w-full h-12 rounded-[12px] border border-slate-300 bg-white text-sm font-normal text-slate-900 px-4 appearance-none cursor-pointer focus:outline-none"
                >
                  <option value="">Select style</option>
                  <option value="modern">Modern</option>
                  <option value="contemporary">Contemporary</option>
                  <option value="traditional">Traditional</option>
                  <option value="minimalist">Minimalist</option>
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 15L7.757 10.758L9.172 9.344L12 12.172L14.828 9.344L16.243 10.758L12 15Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* Building Rooms */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-normal text-slate-900">
                Building Rooms
              </label>
              <input
                type="text"
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                placeholder="Enter building rooms"
                className="w-full h-12 rounded-[12px] border border-slate-300 bg-white text-sm font-normal text-slate-900 px-4 focus:outline-none placeholder:text-slate-500"
              />
            </div>

            {/* Budget Range */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-normal text-slate-900">
                Budget Range
              </label>
              <input
                type="text"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="Enter Your budget"
                className="w-full h-12 rounded-[12px] border border-slate-300 bg-white text-sm font-normal text-slate-900 px-4 focus:outline-none placeholder:text-slate-500"
              />
            </div>

            {/* Custom Message */}
            <div className="flex flex-col gap-1.5 min-w-[260px] max-w-[320px]">
              <label className="text-sm font-normal text-slate-900">
                Custom message
              </label>
              <input
                type="text"
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
                placeholder="Type custom features"
                className="w-full h-12 rounded-[12px] border border-slate-300 bg-white text-sm font-normal text-slate-900 px-4 focus:outline-none placeholder:text-slate-500"
              />
            </div>

            {/* Generate Button */}
            <div className="flex items-end">
              <button
                onClick={() => navigate("/generate-design")}
                className="bg-navy text-white text-sm font-medium rounded-full px-8 py-3 hover:bg-navy/90 transition-colors h-12 self-end"
              >
                Generate Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
