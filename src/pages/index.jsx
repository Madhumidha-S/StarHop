import FeatureCard from '../components/FeatureCard';

function Index() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Explore StarHop Features</h1>
      
      <div className="flex justify-center mb-12">
        <button className="px-6 py-3 bg-cosmicPurple hover:bg-cosmicPink rounded-lg text-white font-bold shadow-lg transition-colors duration-300 hover:shadow-cosmic-glow">
          Explore Now
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard title="AI Assistant" link="/ai" />
        <FeatureCard title="Sky Map" link="/sky" />
        <FeatureCard title="Stargazing Spots" link="/spots" />
        <FeatureCard title="Calendar" link="/calendar" />
        <FeatureCard title="Journal" link="/journal" />
        <FeatureCard title="APOD" link="/APOD" />
      </div>
    </div>
  );
}

export default Index;
