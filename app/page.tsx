import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Purpose from "@/components/Purpose";
import Community from "@/components/Community";
import FutureVision from "@/components/FutureVision";
import ImpactAreas from "@/components/ImpactAreas";
import Programs from "@/components/Programs";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Purpose />
      <ImpactAreas />
      <Programs />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="min-h-[420px]">
          <Community />
        </div>
        <div className="min-h-[420px]">
          <FutureVision />
        </div>
      </div>
    </main>
  );
}