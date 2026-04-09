import { useState } from "react";

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M16.972 6.251C16.7424 6.123 16.4899 6.042 16.2289 6.012C15.9679 5.982 15.7036 6.004 15.451 6.076C15.1984 6.148 14.9625 6.269 14.7568 6.433C14.5511 6.596 14.3795 6.798 14.252 7.028L10.539 13.71L8.41398 11.585C8.22949 11.394 8.0088 11.242 7.76479 11.137C7.52078 11.032 7.25834 10.977 6.99278 10.975C6.72722 10.972 6.46386 11.023 6.21807 11.123C5.97228 11.224 5.74897 11.372 5.56119 11.56C5.3734 11.748 5.2249 11.971 5.12434 12.217C5.02377 12.463 4.97317 12.726 4.97548 12.992C4.97779 13.257 5.03296 13.52 5.13778 13.764C5.24259 14.008 5.39496 14.229 5.58598 14.413L9.58598 18.413C9.96398 18.792 10.474 19 11 19L11.277 18.98C11.5835 18.937 11.8759 18.824 12.1312 18.649C12.3865 18.474 12.5976 18.242 12.748 17.971L17.748 8.971C17.8756 8.741 17.9568 8.489 17.9869 8.228C18.017 7.967 17.9954 7.703 17.9233 7.45C17.8513 7.198 17.7302 6.962 17.5669 6.756C17.4037 6.55 17.2015 6.379 16.972 6.251Z" fill="black"/>
  </svg>
);

const features = [
  "3D Visualization",
  "AI-based layout suggestions",
  "Material optimization",
  "Local building regulations check",
  "Floor plan",
];

const tabs = ["Design", "Architecture", "Cost Estimation"];

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("Design");

  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[110px]">
        {/* Main two-column layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Left: Image */}
          <div className="w-full lg:w-[406px] shrink-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/9f25c6217214b38151806d4a55adc76a0cdc6bfe?width=812"
              alt="House design"
              className="w-full lg:w-[406px] h-auto lg:h-[400px] rounded-[10px] object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className="flex-1 min-w-0">
            <h2 className="text-black font-medium text-xl md:text-[20px] leading-normal">
              Search Modern Apartments &amp; Premium city properties
            </h2>
            <p className="mt-3 text-black font-medium text-sm leading-normal max-w-[615px]">
              We combines automation, design logic, cost estimation to produce practical, build ready outputs.
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap gap-3 mt-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-[5px] text-sm font-medium border transition-colors ${
                    activeTab === tab
                      ? "bg-navy text-white border-navy"
                      : "bg-white text-black border-black hover:border-navy hover:text-navy"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Feature list */}
            <div className="mt-6 flex flex-col gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-sm font-medium text-black">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
