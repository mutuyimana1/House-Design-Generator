import HeroSection from "@/components/HeroSection";
import SearchForm from "@/components/SearchForm";
import FeaturesSection from "@/components/FeaturesSection";
import PropertiesGallery from "@/components/PropertiesGallery";

export default function Index() {
  return (
    <main className="w-full">
      <HeroSection />
      <SearchForm />
      <FeaturesSection />
      <PropertiesGallery />
    </main>
  );
}
