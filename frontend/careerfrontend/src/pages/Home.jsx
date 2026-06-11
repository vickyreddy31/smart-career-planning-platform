import HeroSection from "../components/HeroSection";
import FeatureCard from "../components/FeatureCard";
import StatCard from "../components/StatCard";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <main className="flex-grow max-w-7xl mx-auto px-6 py-16 w-full">
        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <FeatureCard
            icon="📄"
            title="Resume Management"
            description="Upload and manage resumes efficiently."
          />
          <FeatureCard
            icon="🎯"
            title="Career Suggestions"
            description="Discover suitable career paths based on your inputs."
          />
          <FeatureCard
            icon="📈"
            title="Skill Gap Analysis"
            description="Identify skills required for your next career growth."
          />
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <StatCard number="1000+" title="Students" />
          <StatCard number="500+" title="Career Paths" />
          <StatCard number="95%" title="Success Rate" />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;