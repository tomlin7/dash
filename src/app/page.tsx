import LandingFooter from "@/components/landing/footer";
import LandingHero from "@/components/landing/hero";
import LandingNavbar from "@/components/landing/navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <LandingNavbar />
      <main className="flex-grow">
        <LandingHero />
      </main>
      <LandingFooter />
    </div>
  );
}
